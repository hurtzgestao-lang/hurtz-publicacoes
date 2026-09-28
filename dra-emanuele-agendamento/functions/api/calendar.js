const DEFAULT_DESKCOMM_URL = "https://salles.hurtzcompany.com.br";
const DEFAULT_EVENT_TYPE_SLUG = "diagnostico-comercial-clinicas";
const DEFAULT_TIMEZONE = "America/Belem";
const DEFAULT_BOOKING_WINDOW_DAYS = 7;
const DEFAULT_MAX_VISIBLE_SLOTS = 2;

const baseCorsHeaders = {
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function onRequestOptions({ request, env }) {
  const headers = corsHeadersFor(request, env);
  if (!headers) return new Response(null, { status: 403 });
  return new Response(null, { headers });
}

export async function onRequestPost({ request, env }) {
  const headers = corsHeadersFor(request, env);
  if (!headers) return json({ error: "origin_not_allowed" }, 403, corsHeadersFor(request, env, true));

  try {
    const body = await request.json();
    const action = body.action;
    if (!action) return json({ error: "missing_action" }, 400, headers);

    const client = deskcommClient(env);
    if (action === "availability") return json(await getAvailability(client, body), 200, headers);
    if (action === "lead") return json(await captureLead(client, body, env), 200, headers);
    if (action === "book") return json(await createBooking(client, body, env), 200, headers);
    return json({ error: "unknown_action" }, 400, headers);
  } catch (error) {
    return json({ error: error.message || "calendar_error" }, error.status || 500, headers);
  }
}

function corsHeadersFor(request, env, permissive = false) {
  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("Origin");
  const allowed = allowedOrigins(env, requestOrigin);
  const selectedOrigin = origin || requestOrigin;
  if (!permissive && origin && !allowed.has(origin)) return null;
  return {
    ...baseCorsHeaders,
    "Access-Control-Allow-Origin": allowed.has(selectedOrigin) ? selectedOrigin : requestOrigin,
    Vary: "Origin",
  };
}

function allowedOrigins(env, requestOrigin) {
  return new Set(
    [
      requestOrigin,
      env.DESKCOMM_ALLOWED_ORIGIN,
      ...(env.DESKCOMM_ALLOWED_ORIGINS || "").split(","),
    ]
      .map((origin) => String(origin || "").trim().replace(/\/+$/, ""))
      .filter(Boolean),
  );
}

function deskcommClient(env) {
  const baseUrl = String(env.DESKCOMM_URL || DEFAULT_DESKCOMM_URL).replace(/\/+$/, "");
  const token = env.DESKCOMM_MCP_TOKEN;
  if (!token) {
    const error = new Error("missing_deskcomm_mcp_token");
    error.status = 500;
    throw error;
  }
  return { baseUrl, token };
}

async function getAvailability(client, body) {
  const eventTypeSlug = eventTypeSlugFrom(body);
  const timezone = body.timezone || DEFAULT_TIMEZONE;
  const bookingWindowDays = Number(body.booking_window_days || DEFAULT_BOOKING_WINDOW_DAYS);
  const maxVisibleSlots = Number(body.max_visible_slots || DEFAULT_MAX_VISIBLE_SLOTS);
  const availability = {};

  for (const date of dateRange(timezone, bookingWindowDays)) {
    const result = await callMcpTool(client, "crm_find_free_slots", {
      event_type_slug: eventTypeSlug,
      dia: date,
      limite: maxVisibleSlots,
    });
    const slots = Array.isArray(result.horarios) ? result.horarios : [];
    const times = [];
    for (const slot of slots) {
      const time = timeInTimezone(slot.inicio, timezone);
      if (time && !times.includes(time)) times.push(time);
      if (times.length >= maxVisibleSlots) break;
    }
    if (times.length) availability[date] = times;
  }

  return { availability, timezone, calendarId: "deskcomm" };
}

async function createBooking(client, body, env) {
  const date = body.booking_date || body.date;
  const time = body.booking_time || body.time;
  if (!date || !time) {
    const error = new Error("missing_booking_datetime");
    error.status = 400;
    throw error;
  }

  const contact = await openContact(client, body, env);
  const existingAppointment = await findExistingAppointment(client, contact.contact_id, date, time, body.timezone || DEFAULT_TIMEZONE);
  const existingLead = body.pipeline_id ? await findOpenLeadForContact(client, body.pipeline_id, contact.contact_id) : null;
  if (existingAppointment) {
    const lead = await createScheduledLead(client, body, contact.contact_id, { compromisso: existingAppointment }, existingLead);
    return bookingResponse({ compromisso: existingAppointment }, contact, lead, {
      reused: true,
      duplicateGuard: "contact_datetime",
    });
  }
  if (matchesJourney(existingLead, body)) {
    return bookingResponse({ compromisso: appointmentFromLead(existingLead, body) }, contact, { lead: existingLead }, {
      reused: true,
      duplicateGuard: "lead_journey",
    });
  }

  const result = await callMcpTool(client, "crm_find_and_book_appointment", {
    event_type_slug: eventTypeSlugFrom(body),
    dia: date,
    horario: time,
    contact_id: contact.contact_id,
    title: bookingSummary(body),
    notes: bookingNotes(body),
  });

  if (result.marcado !== true || !result.compromisso?.id) {
    const error = new Error(result.motivo || "booking_conflict");
    error.status = result.motivo === "horario_indisponivel" ? 409 : 422;
    throw error;
  }

  const lead = await createScheduledLead(client, body, contact.contact_id, result, existingLead).catch(async (error) => {
    await scheduleManualFollowup(client, body, contact, result, error).catch(() => null);
    return { error: error.message || "lead_create_failed", manualFollowupScheduled: true };
  });

  return bookingResponse(result, contact, lead);
}

async function captureLead(client, body, env) {
  const phone = phoneFrom(body);
  if (!phone) {
    return {
      skipped: true,
      reason: "missing_phone",
      submission_id: body.submission_id || body.capture_lead_id || null,
    };
  }

  const contact = await openContact(client, body, env);
  const pipelineId = body.p_pipeline_id || body.pipeline_id;
  const stageId = body.p_stage_id || body.stage_id;
  if (!pipelineId || !stageId) {
    return {
      skipped: true,
      reason: "missing_pipeline_or_stage",
      contactId: contact.contact_id,
      conversationId: contact.conversation_id,
      submission_id: body.submission_id || body.capture_lead_id || null,
    };
  }

  const lead = await createOrUpdateCapturedLead(client, body, contact.contact_id);
  return {
    success: true,
    submission_id: body.submission_id || body.capture_lead_id || null,
    contactId: contact.contact_id,
    conversationId: contact.conversation_id,
    leadId: lead?.lead?.id || null,
    reused: Boolean(lead?.lead?.reused),
  };
}

function bookingResponse(result, contact, lead, extra = {}) {
  const appointment = result.compromisso || result.appointment || result;

  return {
    bookingId: appointment.id,
    deskcommAppointmentId: appointment.id,
    startsAt: appointment.iniciaEm || appointment.starts_at || appointment.startsAt || null,
    meetingUrl: appointment.meeting_url || appointment.meetingUrl || null,
    contactId: contact.contact_id,
    conversationId: contact.conversation_id,
    leadId: lead?.lead?.id || null,
    leadError: lead?.error || null,
    manualFollowupScheduled: Boolean(lead?.manualFollowupScheduled),
    ...extra,
  };
}

async function openContact(client, body, env) {
  const phone = phoneFrom(body);
  if (!phone) {
    const error = new Error("missing_client_phone");
    error.status = 400;
    throw error;
  }
  const payload = {
    phone_number: normalizePhone(phone),
    name: nameFrom(body),
  };
  if (env.DESKCOMM_CHANNEL_SESSION_ID) payload.channel_session_id = env.DESKCOMM_CHANNEL_SESSION_ID;
  const response = await fetch(`${client.baseUrl}/api/v1/conversations/open-with-contact`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${client.token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  const parsed = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(parsed?.error?.message || parsed?.message || `open_contact_${response.status}`);
    error.status = response.status;
    throw error;
  }
  return parsed.data || parsed;
}

async function createOrUpdateCapturedLead(client, body, contactId) {
  const pipelineId = body.p_pipeline_id || body.pipeline_id;
  const stageId = body.p_stage_id || body.stage_id;
  const existing = await findOpenLeadForContact(client, pipelineId, contactId);
  const leadPayload = {
    title: captureSummary(body),
    description: captureNotes(body),
    tags: captureTags(body),
    custom_fields: captureCustomFields(body),
  };

  if (existing?.id) {
    await callMcpTool(client, "crm_update_lead", {
      lead_id: existing.id,
      ...leadPayload,
      tags: mergeTags(existing.tags, leadPayload.tags),
    });
    return { lead: { ...existing, reused: true } };
  }

  const created = await callMcpTool(client, "crm_create_lead", {
    pipeline_id: pipelineId,
    stage_id: stageId,
    contact_id: contactId,
    title: leadPayload.title,
    description: leadPayload.description,
    source: "site_agendamento_dra_manu",
    tags: leadPayload.tags,
  });
  const leadId = created?.lead?.id;
  if (!leadId) return created;
  await callMcpTool(client, "crm_update_lead", {
    lead_id: leadId,
    custom_fields: leadPayload.custom_fields,
  });
  return created;
}

async function createScheduledLead(client, body, contactId, bookingResult, knownLead = null) {
  if (!body.pipeline_id || !body.stage_id) return null;
  const existing = knownLead || await findOpenLeadForContact(client, body.pipeline_id, contactId);
  if (existing?.id) {
    if (existing.stage_id !== body.stage_id) {
      await callMcpTool(client, "crm_move_lead_stage", {
        lead_id: existing.id,
        to_stage_id: body.stage_id,
        reason: "Agendamento confirmado pelo site",
      });
    }
    await callMcpTool(client, "crm_update_lead", {
      lead_id: existing.id,
      title: bookingSummary(body),
      description: bookingNotes(body),
      tags: mergeTags(existing.tags, ["site", "dra-manu", "clinicas", "agendado"]),
      custom_fields: customFieldsFrom(body, bookingResult),
    });
    return { lead: { ...existing, reused: true } };
  }

  const created = await callMcpTool(client, "crm_create_lead", {
    pipeline_id: body.pipeline_id,
    stage_id: body.stage_id,
    contact_id: contactId,
    title: bookingSummary(body),
    description: bookingNotes(body),
    source: "site_agendamento_dra_manu",
    tags: ["site", "dra-manu", "clinicas", "agendado"],
  });
  const leadId = created?.lead?.id;
  if (!leadId) return created;
  await callMcpTool(client, "crm_update_lead", {
    lead_id: leadId,
    custom_fields: customFieldsFrom(body, bookingResult),
  });
  return created;
}

async function findExistingAppointment(client, contactId, date, time, timezone) {
  const result = await callMcpTool(client, "crm_list_appointments", {
    contact_id: contactId,
    dia: date,
    limite: 50,
  });
  const appointments = result.appointments || result.compromissos || result.items || [];
  return appointments.find((appointment) => {
    const status = appointment.situacao || appointment.status;
    if (status === "cancelled") return false;
    return timeInTimezone(appointment.iniciaEm || appointment.starts_at || appointment.startsAt || appointment.start_time, timezone) === time;
  }) || null;
}

async function scheduleManualFollowup(client, body, contact, bookingResult, error) {
  await callMcpTool(client, "crm_schedule_followup", {
    contact_id: contact.contact_id,
    in_hours: 0.1,
    reason: "Falha ao registrar oportunidade apos agendamento pelo site",
    promise: "Criar ou revisar manualmente o card do lead agendado.",
    context: [
      `Agendamento: ${bookingResult.compromisso?.id || "sem_id"}`,
      `Lead externo: ${body.capture_lead_id || "sem_capture_id"}`,
      `Erro: ${error.message || error}`,
      bookingNotes(body),
    ].join("\n"),
  });
}

async function findOpenLeadForContact(client, pipelineId, contactId) {
  let cursor;
  for (let page = 0; page < 5; page += 1) {
    const result = await callMcpTool(client, "crm_list_leads", {
      pipeline_id: pipelineId,
      status: "open",
      limit: 100,
      ...(cursor ? { cursor } : {}),
    });
    const match = (result.leads || []).find((lead) => lead.contact_id === contactId);
    if (match) return match;
    if (!result.has_more || !result.cursor) return null;
    cursor = result.cursor;
  }
  return null;
}

function mergeTags(current, next) {
  return [...new Set([...(Array.isArray(current) ? current : []), ...next])];
}

async function callMcpTool(client, name, args) {
  const response = await fetch(`${client.baseUrl}/api/mcp`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${client.token}`,
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: crypto.randomUUID(),
      method: "tools/call",
      params: { name, arguments: args },
    }),
  });
  const text = await response.text();
  const envelope = parseMcpEnvelope(text);
  if (!response.ok || envelope?.error) {
    const error = new Error(envelope?.error?.message || `mcp_${name}_${response.status}`);
    error.status = response.status || 500;
    throw error;
  }
  const result = envelope?.result;
  if (result?.isError) {
    const error = new Error(result.content?.[0]?.text || `mcp_${name}_error`);
    error.status = 422;
    throw error;
  }
  if (result?.structuredContent) return result.structuredContent;
  const textContent = result?.content?.[0]?.text;
  return textContent ? JSON.parse(textContent) : {};
}

function parseMcpEnvelope(text) {
  const dataLines = [...text.matchAll(/^data: (.+)$/gm)];
  if (dataLines.length > 0) return JSON.parse(dataLines.at(-1)[1]);
  return JSON.parse(text);
}

function eventTypeSlugFrom(body) {
  return body.event_type_slug || body.event_type_id || DEFAULT_EVENT_TYPE_SLUG;
}

function bookingSummary(body) {
  const name = cleanText(nameFrom(body)) || "Lead do site";
  return `${name} | Diagnóstico de Escala | Dra. Manu`;
}

function captureSummary(body) {
  const name = cleanText(nameFrom(body)) || "Lead do site";
  const clinic = normalizedAnswers(body).instagram_clinica || body.clinic || body.clinica;
  return clinic ? `${name} | ${cleanText(clinic)}` : `${name} | Lead agendamento | Dra. Manu`;
}

function captureNotes(body) {
  const answers = normalizedAnswers(body);
  const lines = [
    "Origem: site agendamento Dra. Manu",
    body.submission_id ? `Lead capturado: ${body.submission_id}` : null,
    body.completion_status ? `Status formulario: ${body.completion_status}` : null,
    phoneFrom(body) ? `WhatsApp: ${phoneFrom(body)}` : null,
    body.email || body.p_email ? `E-mail: ${body.email || body.p_email}` : null,
    body.current_step ? `Etapa do formulario: ${body.current_step}` : null,
    Object.keys(answers).length ? `Respostas: ${JSON.stringify(answers)}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

function bookingNotes(body) {
  const answers = normalizedAnswers(body);
  const lines = [
    "Origem: site agendamento Dra. Manu",
    body.booking_id ? `Chave externa: ${body.booking_id}` : null,
    body.capture_lead_id ? `Lead capturado: ${body.capture_lead_id}` : null,
    body.client_phone ? `WhatsApp: ${body.client_phone}` : null,
    body.client_email ? `E-mail: ${body.client_email}` : null,
    body.booking_date && body.booking_time ? `Escolheu: ${body.booking_date} ${body.booking_time}` : null,
    Object.keys(answers).length ? `Respostas: ${JSON.stringify(answers)}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

function customFieldsFrom(body, bookingResult) {
  const answers = normalizedAnswers(body);
  const appointment = bookingResult.compromisso || bookingResult.appointment || bookingResult;
  return {
    origem: "Site",
    responsavel: "Operacao Dra. Manu",
    clinica: answers.instagram_clinica || answers.clinica || "",
    cidade: answers.cidade || "",
    especialidade_informada: "Clínica",
    faturamento_aproximado: answers.faturamento_medio_mensal || "",
    aquisicao_atual: answers.aquisicao_atual || answers.trafego_pago_antes || "",
    principal_dificuldade: answers.principal_dificuldade || answers.investimento_trafego || "",
    objetivo: "Diagnóstico de escala solicitado pelo site",
    situacao_qualificacao: "Qualificado",
    proximo_passo: "Comparecer ao diagnóstico de escala",
    data_reuniao: body.booking_date || "",
    link_reuniao: appointment.meeting_url || appointment.meetingUrl || "",
    status_convite_calendar: appointment.meeting_state === "ready" ? "criado" : "pendente",
    external_booking_id: body.booking_id || "",
    capture_lead_id: body.capture_lead_id || "",
    deskcomm_appointment_id: appointment.id || "",
    resumo_interno: bookingNotes(body),
  };
}

function captureCustomFields(body) {
  const answers = normalizedAnswers(body);
  return {
    origem: "Site",
    responsavel: "Operacao Dra. Manu",
    clinica: answers.instagram_clinica || body.clinic || "",
    faturamento_aproximado: answers.faturamento_medio_mensal || body.revenue || "",
    aquisicao_atual: answers.aquisicao_atual || answers.trafego_pago_antes || "",
    principal_dificuldade: answers.principal_dificuldade || answers.investimento_trafego || "",
    objetivo: "Diagnóstico de escala solicitado pelo site",
    situacao_qualificacao: body.completion_status === "submitted" ? "Formulario concluido" : "Formulario parcial",
    proximo_passo: body.completion_status === "submitted" ? "Escolher horario do diagnostico" : "Aguardar conclusao ou recuperar em 10 minutos",
    capture_lead_id: body.submission_id || "",
    resumo_interno: captureNotes(body),
  };
}

function normalizedAnswers(body) {
  return body.answers_normalized || body.answers || body.form_answers || body.form_answers_cleaned || body.form_answers_clean || {};
}

function captureTags(body) {
  return ["site", "dra-manu", "clinicas", body.completion_status === "submitted" ? "formulario-concluido" : "formulario-parcial"];
}

function phoneFrom(body) {
  return body.client_phone || body.phone || body.p_phone || body.user_data?.phone || body.lead?.whatsapp;
}

function nameFrom(body) {
  return body.client_name || body.name || body.p_name || body.user_data?.name || body.lead?.name || "Lead do site";
}

function matchesJourney(lead, body) {
  if (!lead?.id) return false;
  const fields = lead.custom_fields || lead.customFields || {};
  return Boolean(
    (body.booking_id && fields.external_booking_id === body.booking_id) ||
      (body.capture_lead_id && fields.capture_lead_id === body.capture_lead_id && fields.data_reuniao === body.booking_date),
  );
}

function appointmentFromLead(lead, body) {
  const fields = lead.custom_fields || lead.customFields || {};
  return {
    id: fields.deskcomm_appointment_id || fields.external_booking_id || body.booking_id,
    iniciaEm: `${body.booking_date}T${body.booking_time}:00`,
    meeting_url: fields.link_reuniao || null,
  };
}

function dateRange(timezone, bookingWindowDays) {
  const dates = [];
  const today = zonedToday(timezone);
  for (let offset = 0; offset < bookingWindowDays; offset += 1) {
    dates.push(addDays(today, offset));
  }
  return dates;
}

function zonedToday(timezone) {
  const parts = dateParts(new Date(), timezone);
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function timeInTimezone(iso, timezone) {
  if (!iso) return "";
  const parts = dateParts(new Date(iso), timezone);
  return `${parts.hour}:${parts.minute}`;
}

function dateParts(date, timezone) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  return Object.fromEntries(formatter.formatToParts(date).filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
}

function addDays(dateISO, days) {
  const [year, month, day] = dateISO.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
}

function normalizePhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("55")) return `+${digits}`;
  return `+55${digits}`;
}

function json(payload, status = 200, headers = baseCorsHeaders) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...headers,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
