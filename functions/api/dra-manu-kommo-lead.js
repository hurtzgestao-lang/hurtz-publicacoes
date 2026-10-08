const DEFAULT_ALLOWED_METHODS = "POST, OPTIONS";

const baseCorsHeaders = {
  "Access-Control-Allow-Methods": DEFAULT_ALLOWED_METHODS,
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
    const payload = normalizeLeadPayload(body);
    const client = kommoClient(env);
    const lead = await createComplexLead(client, payload, env);
    const note = noteText(payload, lead);
    if (lead.id && note) await addLeadNote(client, lead.id, note).catch(() => null);

    return json({ ok: true, lead_id: lead.id || null, contact_id: lead.contact_id || null }, 200, headers);
  } catch (error) {
    return json({ ok: false, error: error.message || "kommo_lead_error" }, error.status || 500, headers);
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
      env.KOMMO_ALLOWED_ORIGIN,
      ...(env.KOMMO_ALLOWED_ORIGINS || "").split(","),
    ]
      .map((origin) => String(origin || "").trim().replace(/\/+$/, ""))
      .filter(Boolean),
  );
}

function kommoClient(env) {
  const token = env.KOMMO_LONG_LIVED_TOKEN || env.KOMMO_ACCESS_TOKEN;
  const baseUrl = kommoBaseUrl(env);
  if (!baseUrl) {
    const error = new Error("missing_kommo_base_url");
    error.status = 500;
    throw error;
  }
  if (!token) {
    const error = new Error("missing_kommo_token");
    error.status = 500;
    throw error;
  }
  return { baseUrl, token };
}

function kommoBaseUrl(env) {
  const explicit = env.KOMMO_BASE_URL || env.KOMMO_ACCOUNT_URL;
  if (explicit) return String(explicit).replace(/\/+$/, "");

  const subdomain = String(env.KOMMO_SUBDOMAIN || "").trim();
  if (!subdomain) return "";
  if (/^https?:\/\//i.test(subdomain)) return subdomain.replace(/\/+$/, "");
  if (subdomain.includes(".")) return `https://${subdomain.replace(/\/+$/, "")}`;
  return `https://${subdomain}.kommo.com`;
}

function normalizeLeadPayload(body) {
  const answers = body.answers || body || {};
  const lead = {
    name: clean(answers.nome || answers.name || body.name),
    email: clean(answers.email || body.email),
    phone: clean(answers.telefone || answers.whatsapp || answers.phone || body.phone),
    instagram: clean(answers.instagram || body.instagram),
    situacao: clean(answers.situacao || answers.situation || body.situacao),
    faturamento: clean(answers.faturamento || answers.revenue || body.faturamento),
    source: clean(body.source || "diagnostico-dra-manu"),
    pageUrl: clean(body.page_url || body.pageUrl || ""),
    referrer: clean(body.referrer || ""),
    userAgent: clean(body.user_agent || body.userAgent || ""),
    utm: body.utm && typeof body.utm === "object" ? body.utm : {},
    submittedAt: clean(body.submitted_at || body.submittedAt || new Date().toISOString()),
  };

  if (!lead.name && !lead.phone && !lead.email) {
    const error = new Error("missing_contact_identity");
    error.status = 400;
    throw error;
  }

  return lead;
}

function clean(value) {
  return String(value || "").trim();
}

async function createComplexLead(client, payload, env) {
  const lead = {
    name: leadName(payload),
    _embedded: {
      contacts: [contactPayload(payload)],
    },
  };

  const pipelineId = numeric(env.KOMMO_PIPELINE_ID);
  const statusId = numeric(env.KOMMO_STATUS_ID || env.KOMMO_STAGE_ID);
  const responsibleUserId = numeric(env.KOMMO_RESPONSIBLE_USER_ID);
  if (pipelineId) lead.pipeline_id = pipelineId;
  if (statusId) lead.status_id = statusId;
  if (responsibleUserId) lead.responsible_user_id = responsibleUserId;

  const tags = tagsFrom(env.KOMMO_TAGS || "Dra Manu, Diagnóstico, Site");
  if (tags.length) lead._embedded.tags = tags.map((name) => ({ name }));

  const response = await kommoFetch(client, "/api/v4/leads/complex", {
    method: "POST",
    body: JSON.stringify([lead]),
  });

  const created = Array.isArray(response) ? response[0] : response?._embedded?.leads?.[0] || response;
  return {
    id: created?.id || created?.lead_id || null,
    contact_id: created?.contact_id || created?._embedded?.contacts?.[0]?.id || null,
    raw: created,
  };
}

function leadName(payload) {
  const name = payload.name || payload.phone || payload.email || "Lead sem nome";
  return `Diagnóstico Dra. Manu - ${name}`.slice(0, 255);
}

function contactPayload(payload) {
  const contact = {
    name: payload.name || payload.phone || payload.email || "Lead Dra. Manu",
    custom_fields_values: [],
  };

  if (payload.phone) {
    contact.custom_fields_values.push({
      field_code: "PHONE",
      values: [{ value: payload.phone, enum_code: "WORK" }],
    });
  }

  if (payload.email) {
    contact.custom_fields_values.push({
      field_code: "EMAIL",
      values: [{ value: payload.email, enum_code: "WORK" }],
    });
  }

  if (!contact.custom_fields_values.length) delete contact.custom_fields_values;
  return contact;
}

async function addLeadNote(client, leadId, text) {
  return kommoFetch(client, "/api/v4/leads/notes", {
    method: "POST",
    body: JSON.stringify([
      {
        entity_id: Number(leadId),
        note_type: "common",
        params: { text },
      },
    ]),
  });
}

function noteText(payload, lead) {
  const utm = Object.entries(payload.utm || {})
    .filter(([, value]) => clean(value))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  return [
    "Diagnóstico Dra. Manu preenchido no site.",
    "",
    `Nome: ${payload.name || "-"}`,
    `E-mail: ${payload.email || "-"}`,
    `WhatsApp: ${payload.phone || "-"}`,
    `Instagram: ${payload.instagram || "-"}`,
    `Situação atual: ${payload.situacao || "-"}`,
    `Faturamento mensal: ${payload.faturamento || "-"}`,
    `Origem: ${payload.source || "diagnostico-dra-manu"}`,
    payload.pageUrl ? `Página: ${payload.pageUrl}` : "",
    payload.referrer ? `Referrer: ${payload.referrer}` : "",
    payload.submittedAt ? `Enviado em: ${payload.submittedAt}` : "",
    lead?.id ? `Lead Kommo: ${lead.id}` : "",
    utm ? `\nUTMs:\n${utm}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

async function kommoFetch(client, path, init = {}) {
  const response = await fetch(`${client.baseUrl}${path}`, {
    ...init,
    headers: {
      "Authorization": `Bearer ${client.token}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...(init.headers || {}),
    },
  });

  const text = await response.text();
  const data = text ? tryJson(text) : null;
  if (!response.ok) {
    const message = data?.detail || data?.title || data?.hint || data?.error || text || `kommo_http_${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }
  return data;
}

function tryJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

function tagsFrom(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 10);
}

function numeric(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}
