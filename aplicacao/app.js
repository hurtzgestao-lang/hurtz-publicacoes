const FORM_CONFIG = {
  sourceUrl: "https://chronosdock.com/form/aceleracaohm",
  workspaceId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  formId: "64d8cebf-cb84-407e-beea-92afa3642d1f",
  slug: "aplicacao",
  pipelineId: "9489436a-ec68-4872-88ab-2c646ad60856",
  stageId: "dcbbeb35-fbd9-4a78-9706-39d7f23903d0",
  metaPixel: {
    id: "2849219782065000",
    submitEventName: "ChronosSubmit",
    submitEventMode: "custom",
    viewEventName: "ChronosView",
    firstInteractionEventName: "ChronosFirstInteraction",
  },
  welcome: {
    title: "<p><strong>Tráfego Pago para Clínicas de Cirurgia Estética Facial</strong></p>",
    description:
      "<p><br>🎯 Foco em procedimentos de alto ticket<br>🖼️ Anúncios por nossa conta<br>✅ Treinamos sua recepção<br>🏆 4 anos de mercado</p><p>→<em> Exclusivo para clínicas que podem investir pelo menos R$1.500/mês em anúncios.</em></p>",
    buttonText: "QUERO MAIS CONSULTAS",
    mediaUrl: "assets/logo-hurtz-horizontal-crop.png",
  },
  steps: [
    {
      id: "step-1769136012755",
      title: "<p>Qual seu nome e sobrenome?</p>",
      fieldType: "text",
      required: true,
      buttonText: "Continuar",
      mapTo: "name",
    },
    {
      id: "step-1769439388259",
      title: "<p>Qual seu número do WhatsApp?</p>",
      fieldType: "phone",
      required: true,
      buttonText: "Continuar",
      mapTo: "phone",
    },
    {
      id: "c890e649-9033-49a2-9f2d-4255b2c6639b",
      title: "<p>Qual o Instagram da sua clínica?</p>",
      description: "<p>Digite só o nome do perfil, <strong>sem @ e sem espaços</strong>.</p>",
      fieldType: "text",
      required: true,
      buttonText: "Continuar",
    },
    {
      id: "step-1769439385416",
      title: "<p>Qual é o seu email?</p>",
      fieldType: "email",
      required: true,
      buttonText: "Continuar",
      mapTo: "email",
    },
    {
      id: "step-1771020031561",
      title: "<p>Já investiu em tráfego pago antes?</p>",
      fieldType: "select",
      required: true,
      buttonText: "Continuar",
      options: [
        ["opt-1", "Sim, eu mesmo faço", "sim,_eu_mesmo_faço"],
        ["opt-2", "Sim, contratei alguém para fazer", "sim,_contratei_uma_pessoal/time"],
        ["opt-1771020167586", "Nunca investi.", "nunca_investi."],
      ],
    },
    {
      id: "a3d4546a-99f6-4ce1-a087-cf7029e68fa1",
      title: "<p>Qual o <strong>faturamento médio mensal</strong> da sua clínica?</p>",
      description: "<p>Obs: O seu faturamento não influencia na nossa precificação.</p>",
      fieldType: "select",
      required: true,
      buttonText: "Continuar",
      options: [
        ["opt-1771023022792", "Menos de R$15.000", "menos_de_r15000"],
        ["opt-1771023033217", "De R$15.000 a R$30.000", "de_r15000_a_r30000"],
        ["opt-1771837796052", "De R$30.000 a R$50.000", "de_r30000_a_r50000"],
        ["opt-1771837797055", "De R$50.000 a R$100.000", "de_r50000_a_r100000"],
        ["opt-1779370694857", "Acima de R$100.000", "acima_de_r$100.000"],
      ],
    },
    {
      id: "04d6df62-180c-4ab5-a60c-815ce0190efc",
      title:
        "<p>Está disposto a investir pelo menos <strong>R$1.500/mês</strong> em anúncios, desconsiderando o valor da nossa mão de obra?</p>",
      fieldType: "select",
      required: true,
      buttonText: "Continuar",
      options: [
        ["opt-1", "✅ Sim! Preciso de tráfego profissional.", "sim_preciso_de_trafego_profissional"],
        ["opt-2", "❌ Não quero investir no meu negócio.", "nao_quero_investir_no_meu_negocio"],
      ],
    },
    {
      id: "step-1769439397036",
      type: "scheduling",
      title: "98% concluído...",
      description: "Agora agende nosso bate-papo no calendário abaixo ↓",
      buttonText: "Confirmar Agendamento",
      eventTypeId: "cded4ebb-645b-432e-82f3-f9f5ad415589",
      pixelEventName: "Schedule",
    },
  ],
  logicRules: [
    {
      conditionStepId: "a3d4546a-99f6-4ce1-a087-cf7029e68fa1",
      conditionValue: "menos_de_r15000",
      actionType: "go_to_ending",
      actionEndingId: "ending-1779371207224",
    },
    {
      conditionStepId: "a3d4546a-99f6-4ce1-a087-cf7029e68fa1",
      conditionValue: "de_r15000_a_r30000",
      actionType: "go_to_ending",
      actionEndingId: "ending-1779371207224",
    },
    {
      conditionStepId: "04d6df62-180c-4ab5-a60c-815ce0190efc",
      conditionValue: "nao_quero_investir_no_meu_negocio",
      actionType: "go_to_ending",
      actionEndingId: "ending-1779371207224",
    },
    {
      conditionStepId: "04d6df62-180c-4ab5-a60c-815ce0190efc",
      conditionValue: "sim_preciso_de_trafego_profissional",
      actionType: "jump_to",
      actionTargetId: "step-1769439397036",
    },
  ],
  endings: {
    "ending-1771040341026": {
      name: "Redirect zap",
      title: "<p>99%... Redirecionando para o WhatsApp ⌛</p>",
      description:
        "<p>❌ <strong>NÃO FECHE ESSA TELA</strong></p><p>❌ <strong>NÃO FECHE ESSA TELA</strong></p><p>❌ <strong>NÃO FECHE ESSA TELA</strong></p><p>❌ <strong>NÃO FECHE ESSA TELA</strong></p><p>❌ <strong>NÃO FECHE ESSA TELA</strong></p>",
      redirectUrl: "https://wa.me/5517996547043?text=Ol%C3%A1%2C%20agendei%20um%20bate-papo%20sobre%20os%20an%C3%BAncios%20da%20minha%20cl%C3%ADnica.",
      redirectDelay: 3,
      pixelEventName: "ChronosSubmit",
      pixelEventType: "custom",
    },
    "ending-1779371207224": {
      name: "👋 Antes de finalizar...",
      title: "<p>Obrigado pelo interesse!</p>",
      description: "<p>Recebemos suas informações. Caso faça sentido para o momento da sua clínica, nosso time entra em contato.</p>",
      redirectDelay: 3,
      pixelEventName: "ChronosSubmit",
      pixelEventType: "standard",
    },
  },
  eventType: {
    id: "cded4ebb-645b-432e-82f3-f9f5ad415589",
    name: "Bate papo sobre anúncios da clínica",
    durationMinutes: 60,
    timezone: "America/Sao_Paulo",
    bookingWindowDays: 3,
    maxVisibleSlots: 2,
    maxConcurrentBookings: 1,
    minimumNoticeHours: 0,
    redirectUrl: "https://wa.me/5517996547043?text=Ol%C3%A1%2C%20agendei%20um%20bate-papo%20sobre%20os%20an%C3%BAncios%20da%20minha%20cl%C3%ADnica.",
    metaPixelEventName: "Chronos_Scheduled",
    calendarApiUrl: "/api/calendar",
    availability: {
      1: [
        { start: "09:00", end: "12:00" },
        { start: "13:00", end: "18:00" },
      ],
      2: [
        { start: "09:00", end: "12:00" },
        { start: "13:00", end: "18:00" },
      ],
      3: [
        { start: "09:00", end: "12:00" },
        { start: "13:00", end: "18:00" },
      ],
      4: [
        { start: "09:00", end: "12:00" },
        { start: "13:00", end: "18:00" },
      ],
      5: [
        { start: "09:00", end: "12:00" },
        { start: "13:00", end: "18:00" },
      ],
    },
    capturedAvailability: {
      "2026-09-16": ["11:00"],
      "2026-09-17": [],
      "2026-09-21": [],
      "2026-09-22": [],
    },
  },
};

const STORAGE_KEY = "hurtz-aplicacao-v2";
const LEAD_ENDPOINT = "https://crm.hurtzcompany.com.br/landing-leads/v1/submit";
const app = document.querySelector("#app");
const backButton = document.querySelector(".back-button");
const eventLog = document.querySelector("#event-log");
const eventToggle = document.querySelector(".event-toggle");
const eventPanel = document.querySelector(".event-panel");

const state = loadState();
let firstInteractionTracked = state.firstInteractionTracked || false;
let optionAdvanceTimer = null;
let isAdvancingOption = false;
const OPTION_ADVANCE_DELAY_MS = 450;
let fieldFocusTimer = null;
let skipClickAction = false;

const IntegrationAdapter = {
  async track(eventName, payload = {}) {
    pushEvent({
      kind: "pixel_or_analytics",
      eventName,
      payload,
      originalEquivalent: originalEndpointFor(eventName),
      at: new Date().toISOString(),
    });
  },
  async upsertPartialLead(payload) {
    pushEvent({
      kind: "lead_partial",
      originalEquivalent: "POST /rest/v1/rpc/upsert_partial_lead",
      payload,
      at: new Date().toISOString(),
    });
    return state.leadId || crypto.randomUUID();
  },
  async submitLead(payload) {
    const leadId = state.leadId || crypto.randomUUID();
    state.leadId = leadId;
    pushEvent({
      kind: "lead_submit",
      originalEquivalent: "POST /rest/v1/rpc/submit_public_lead",
      payload: { ...payload, leadId },
      at: new Date().toISOString(),
    });
    pushEvent({
      kind: "lead_finalize",
      originalEquivalent: "POST /functions/v1/classify-and-finalize-lead",
      payload: { leadId, classification: "pending" },
      at: new Date().toISOString(),
    });
    pushEvent({
      kind: "lead_webhook",
      originalEquivalent: "POST /functions/v1/form-webhook-notify",
      payload: { formId: FORM_CONFIG.formId, leadId },
      at: new Date().toISOString(),
    });
    const saved = await saveLeadToDatabase(leadId, payload);
    if (saved?.submission_id) state.databaseLeadId = saved.submission_id;
    saveState();
    return leadId;
  },
  async viewSchedule(payload) {
    pushEvent({
      kind: "event_type_fetch",
      originalEquivalent: "POST /functions/v1/get_public_event_type_by_id",
      payload: {
        workspace_id: payload.workspace_id,
        event_type_id: payload.event_type_id,
      },
      at: new Date().toISOString(),
    });
    pushEvent({
      kind: "schedule_view",
      originalEquivalent: "POST /functions/v1/track-form-pixel-event Chronos_View_Scheduled",
      payload,
      at: new Date().toISOString(),
    });
    pushEvent({
      kind: "availability_fetch",
      originalEquivalent: "POST /functions/v1/google-calendar-public-availability",
      payload: {
        workspace_id: payload.workspace_id,
        event_type_id: payload.event_type_id,
        timezone: FORM_CONFIG.eventType.timezone,
        booking_window_days: FORM_CONFIG.eventType.bookingWindowDays,
      },
      at: new Date().toISOString(),
    });
    pushEvent({
      kind: "conflict_range_check",
      originalEquivalent: "POST /rest/v1/rpc/get_bookings_for_conflict_check_range",
      payload: {
        workspace_id: payload.workspace_id,
        event_type_id: payload.event_type_id,
        max_concurrent_bookings: FORM_CONFIG.eventType.maxConcurrentBookings,
      },
      at: new Date().toISOString(),
    });
    const availability = await requestCalendarApi("availability", {
      event_type_id: FORM_CONFIG.eventType.id,
      timezone: FORM_CONFIG.eventType.timezone,
      booking_window_days: FORM_CONFIG.eventType.bookingWindowDays,
      duration_minutes: FORM_CONFIG.eventType.durationMinutes,
      minimum_notice_hours: FORM_CONFIG.eventType.minimumNoticeHours,
      max_visible_slots: FORM_CONFIG.eventType.maxVisibleSlots,
      availability: FORM_CONFIG.eventType.availability,
    });
    if (availability?.availability) {
      state.calendarAvailability = availability.availability;
      state.calendarSource = "google";
      state.calendarDate = firstAvailableDate() || state.calendarDate;
      state.isLoadingSlots = false;
      saveState();
      renderSchedule();
    }
  },
  async checkBookingConflict(payload) {
    pushEvent({
      kind: "conflict_check",
      originalEquivalent: "POST /rest/v1/rpc/get_bookings_for_conflict_check",
      payload,
      at: new Date().toISOString(),
    });
    return false;
  },
  async createBooking(payload) {
    const bookingId = crypto.randomUUID();
    pushEvent({
      kind: "booking_create",
      originalEquivalent: "POST /rest/v1/rpc/create_public_booking",
      payload: { ...payload, bookingId },
      at: new Date().toISOString(),
    });
    pushEvent({
      kind: "calendar_sync",
      originalEquivalent: "POST /functions/v1/google-calendar-sync",
      payload: { bookingId, action: "create" },
      at: new Date().toISOString(),
    });
    const result = await requestCalendarApi("book", {
      ...payload,
      booking_id: bookingId,
      duration_minutes: FORM_CONFIG.eventType.durationMinutes,
      event_name: FORM_CONFIG.eventType.name,
      timezone: FORM_CONFIG.eventType.timezone,
    });
    return result?.bookingId || bookingId;
  },
};

async function saveLeadToDatabase(leadId, payload) {
  const fields = leadDatabaseFields(leadId, payload);
  try {
    const response = await fetchWithTimeout(
      LEAD_ENDPOINT,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      },
      15000,
    );
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success !== true) throw new Error(result.error || `lead_database_${response.status}`);
    pushEvent({
      kind: "lead_database_saved",
      originalEquivalent: LEAD_ENDPOINT,
      payload: { submission_id: result.submission_id, source: fields.source },
      at: new Date().toISOString(),
    });
    return result;
  } catch (error) {
    pushEvent({
      kind: "lead_database_error",
      originalEquivalent: LEAD_ENDPOINT,
      payload: { message: error.message },
      at: new Date().toISOString(),
    });
    return null;
  }
}

function leadDatabaseFields(leadId, payload) {
  const answers = payload?.form_answers_cleaned || cleanAnswers();
  const contact = mappedContact();
  const revenue = answerLabelByStepId("a3d4546a-99f6-4ce1-a087-cf7029e68fa1");
  const trafficInvestment = answerLabelByStepId("04d6df62-180c-4ab5-a60c-815ce0190efc");
  const trafficExperience = answerLabelByStepId("step-1771020031561");
  const instagram = answerLabelByStepId("c890e649-9033-49a2-9f2d-4255b2c6639b");
  const clinic = instagram ? instagramHandle(instagram) : "";
  return {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    clinic,
    owner: "Clínica de cirurgia estética facial",
    revenue,
    source: "aplicacao",
    submission_id: state.leadSaveAttemptId || leadId,
    priority: leadPriority(revenue, trafficInvestment),
    tracking: trackingData(),
    lead: {
      name: contact.name,
      nome: contact.name,
      email: contact.email,
      whatsapp: contact.phone,
      instagram: clinic,
    },
    form_answers: {
      ...answers,
      trafego_pago_antes: trafficExperience,
      faturamento_medio_mensal: revenue,
      investimento_trafego: trafficInvestment,
      instagram_clinica: clinic,
    },
    meta: {
      pixel_id: FORM_CONFIG.metaPixel.id,
      lead_event_id: leadId,
    },
    event_source_url: window.location.href,
  };
}

function answerLabelByStepId(stepId) {
  const step = FORM_CONFIG.steps.find((item) => item.id === stepId);
  if (!step) return "";
  const value = state.answers[answerKey(step)];
  if (!value) return "";
  const option = step.options?.find((item) => item[2] === value);
  return option ? option[1] : value;
}

function leadPriority(revenue, trafficInvestment) {
  if (/não quero/i.test(trafficInvestment)) return "Desqualificado - investimento";
  if (/Menos de R\$15\.000|De R\$15\.000 a R\$30\.000/i.test(revenue)) return "Desqualificado - faturamento";
  return "Lead qualificado - sessão estratégica";
}

function instagramHandle(value) {
  let handle = String(value || "").trim();
  if (/^(?:https?:\/\/)?(?:(?:www|m)\.)?instagram\.com\//i.test(handle)) {
    try {
      const url = new URL(/^https?:\/\//i.test(handle) ? handle : `https://${handle}`);
      handle = url.pathname.split("/").filter(Boolean)[0] || "";
    } catch {
      return "";
    }
  }
  handle = handle.replace(/^@/, "");
  return handle ? `@${handle.toLowerCase()}` : "";
}

function trackingData() {
  const params = new URLSearchParams(window.location.search);
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "utm_campaign_id",
    "utm_adset",
    "utm_adset_id",
    "utm_ad",
    "utm_ad_id",
    "campaign_id",
    "adset_id",
    "ad_id",
    "placement",
    "site_source_name",
    "fbclid",
  ];
  const tracking = {
    landing_url: window.location.href,
    event_source_url: window.location.href,
  };
  if (document.referrer) tracking.referrer_url = document.referrer;
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) tracking[key] = value.slice(0, 600);
  });
  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc") || buildFbcFromUrl(params.get("fbclid"));
  if (fbp) tracking.fbp = fbp;
  if (fbc) tracking.fbc = fbc;
  return tracking;
}

function getCookie(name) {
  return document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`))
    ?.split("=")
    .slice(1)
    .join("=") || "";
}

function buildFbcFromUrl(fbclid) {
  if (!fbclid) return "";
  return `fb.1.${Date.now()}.${fbclid}`;
}

async function requestCalendarApi(action, payload) {
  if (location.protocol === "file:") return null;
  const url = new URL(FORM_CONFIG.eventType.calendarApiUrl, location.href);
  const response = await fetchWithTimeout(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, ...payload }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`calendar_api_${response.status}${detail ? `: ${detail}` : ""}`);
  }
  return response.json();
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 9000) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timer);
  }
}

function loadState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return {
      screen: "welcome",
      stepIndex: -1,
      answers: {},
      selectedOption: null,
      events: [],
      sessionToken: crypto.randomUUID(),
      startedAt: Date.now(),
      calendarDate: null,
      calendarTime: null,
      calendarMonthOffset: 0,
      leadSubmitted: false,
      scheduleViewed: false,
      isBooking: false,
      isLoadingSlots: false,
      redirectTimerStarted: false,
      countryOpen: false,
      ...saved,
      answers: { ...(saved?.answers || {}) },
      events: saved?.events || [],
    };
  } catch {
    return {
      screen: "welcome",
      stepIndex: -1,
      answers: {},
      events: [],
      sessionToken: crypto.randomUUID(),
      startedAt: Date.now(),
      calendarDate: null,
      calendarTime: null,
      calendarMonthOffset: 0,
      leadSubmitted: false,
      scheduleViewed: false,
      isBooking: false,
      isLoadingSlots: false,
      redirectTimerStarted: false,
      countryOpen: false,
    };
  }
}

function saveState() {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function pushEvent(event) {
  state.events = [...state.events.slice(-24), event];
  saveState();
  renderEventLog();
}

function renderEventLog() {
  eventLog.textContent = JSON.stringify(state.events, null, 2);
}

function originalEndpointFor(eventName) {
  if (eventName === "ChronosView" || eventName === "ChronosFirstInteraction") {
    return "POST /functions/v1/track-form-pixel-event + Meta Pixel";
  }
  if (eventName === "form_analytics_events") return "POST /rest/v1/form_analytics_events";
  return "local-adapter";
}

function stripHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.textContent.trim();
}

function iconArrow() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
}

function iconCalendar() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4M17 3v4M4.5 9.5h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z"/></svg>';
}

function iconClock() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>';
}

function iconGlobe() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21M12 3C9.8 5.4 8.6 8.4 8.6 12S9.8 18.6 12 21"/></svg>';
}

function iconCheck() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
}

function getStep() {
  return FORM_CONFIG.steps[state.stepIndex];
}

function answerKey(step) {
  return step.title;
}

function mappedAnswers() {
  const data = {};
  for (const step of FORM_CONFIG.steps) {
    if (step.type === "scheduling") continue;
    const key = answerKey(step);
    if (state.answers[key] !== undefined) data[key] = state.answers[key];
  }
  data._form_labels = buildLabels();
  return data;
}

function cleanAnswers() {
  const cleaned = {};
  for (const step of FORM_CONFIG.steps) {
    if (step.type === "scheduling") continue;
    const key = answerKey(step);
    const value = state.answers[key];
    if (value === undefined) continue;
    const option = step.options?.find((item) => item[2] === value);
    cleaned[key] = option ? option[1] : value;
  }
  return cleaned;
}

function buildLabels() {
  return FORM_CONFIG.steps.reduce((acc, step) => {
    if (!step.options) return acc;
    acc[step.title] = Object.fromEntries(step.options.map((option) => [option[2], option[1]]));
    return acc;
  }, {});
}

function mappedContact() {
  const result = { name: null, email: null, phone: null, instagram: null };
  for (const step of FORM_CONFIG.steps) {
    const value = state.answers[answerKey(step)];
    if (!value) continue;
    if (step.mapTo === "name") result.name = value;
    if (step.mapTo === "email") result.email = value;
    if (step.mapTo === "phone") result.phone = normalizePhone(value);
    if (stripHtml(step.title).includes("Instagram")) result.instagram = value;
  }
  return result;
}

function normalizePhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (!digits) return "";
  return digits.startsWith("55") ? digits : `55${digits}`;
}

function maskPhone(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateCurrentStep() {
  const step = getStep();
  const value = state.answers[answerKey(step)];
  if (step.required && !String(value || "").trim()) return "Este campo é obrigatório";
  if (step.fieldType === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "")) {
    return "Digite um email válido";
  }
  if (step.fieldType === "phone" && normalizePhone(value).length < 12) {
    return "Digite um WhatsApp válido";
  }
  return "";
}

function currentLeadPayload(partial = false) {
  const contact = mappedContact();
  return {
    p_workspace_id: FORM_CONFIG.workspaceId,
    p_form_id: FORM_CONFIG.formId,
    p_session_token: state.sessionToken,
    p_name: contact.name,
    p_email: partial ? contact.email || null : contact.email,
    p_phone: partial ? contact.phone || null : contact.phone,
    p_form_data: mappedAnswers(),
    p_pipeline_id: FORM_CONFIG.pipelineId,
    p_stage_id: FORM_CONFIG.stageId,
    p_lead_score_classification: "pending",
    fill_time_seconds: Math.floor((Date.now() - state.startedAt) / 1000),
  };
}

function render() {
  backButton.hidden = state.screen === "welcome";
  if (state.screen === "welcome") renderWelcome();
  if (state.screen === "question") renderQuestion();
  if (state.screen === "schedule") renderSchedule();
  if (state.screen === "ending") renderEnding(state.endingId);
  renderEventLog();
  saveState();
}

function renderWelcome() {
  app.innerHTML = `
    <div class="welcome">
      <div class="welcome-media">
        <img src="${FORM_CONFIG.welcome.mediaUrl}" width="154" height="51" alt="" decoding="async" fetchpriority="high" />
      </div>
      <h1 class="welcome-title">${FORM_CONFIG.welcome.title}</h1>
      <div class="welcome-copy">${FORM_CONFIG.welcome.description}</div>
      <button class="primary-button" type="button" data-start>
        ${FORM_CONFIG.welcome.buttonText} ${iconArrow()}
      </button>
    </div>
  `;
}

function renderQuestion() {
  const step = getStep();
  const selected = state.answers[answerKey(step)] || "";
  const description = step.description ? `<div class="question-description">${step.description}</div>` : "";
  const control =
    step.fieldType === "select"
      ? renderOptions(step, selected)
      : step.fieldType === "phone"
        ? renderPhone(step, selected)
        : `<input class="input" data-input ${inputAttrsFor(step)} value="${escapeAttr(selected)}" />`;

  app.innerHTML = `
    <div class="flow-page">
      ${renderProgress()}
      ${renderFlowTop()}
      <div class="flow-stage">
        <form class="question screen-enter" autocomplete="on" data-question-form>
          <h2 class="question-title">${step.title}<span class="required">*</span></h2>
          ${description}
          ${control}
          <div class="validation" data-validation></div>
          <div class="step-actions">
            <button class="primary-button" type="button" data-continue>${step.buttonText || "Continuar"}</button>
            <span class="enter-hint">pressione <strong>Enter ↵</strong></span>
          </div>
        </form>
      </div>
    </div>
  `;

  const input = app.querySelector("[data-input]");
  if (input) {
    bindKeyboardAwareFocus(input);
    focusInputAtEnd(input);
    ["input", "change", "blur"].forEach((eventName) => {
      input.addEventListener(eventName, () => syncInputValue(step, input));
    });
  }

  const form = app.querySelector("[data-question-form]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    next();
  });
}

function renderProgress() {
  const questionSteps = FORM_CONFIG.steps.filter((step) => step.type !== "scheduling");
  const currentQuestionIndex = Math.max(0, Math.min(state.stepIndex, questionSteps.length - 1));
  const progress = ((currentQuestionIndex + 1) / (questionSteps.length + 1)) * 100;
  return `<div class="flow-progress" aria-hidden="true"><span style="width:${progress}%"></span></div>`;
}

function renderFlowTop() {
  return `
    <div class="flow-top">
      <div class="flow-logo">
        <img src="${FORM_CONFIG.welcome.mediaUrl}" width="154" height="51" alt="" decoding="async" fetchpriority="high" />
      </div>
    </div>
  `;
}

function renderPhone(step, value) {
  return `
    <div class="phone-row">
      <button class="country-button" type="button" aria-haspopup="dialog" aria-expanded="${state.countryOpen ? "true" : "false"}" data-country-toggle>
        <span class="flag-br" aria-hidden="true"></span>
        <span>+55</span>
        <span class="country-caret" aria-hidden="true">⌄</span>
      </button>
      ${
        state.countryOpen
          ? `<div class="country-popover" role="dialog" aria-label="Selecionar país">
              <input class="country-search" type="search" placeholder="Buscar país" autocomplete="off" data-country-search />
              <div class="country-list">
                <button class="country-option is-selected" type="button" data-country-select="+55"><span><i class="flag-br"></i>Brasil</span><strong>+55</strong></button>
                <button class="country-option" type="button" data-country-select="+1"><span>🇺🇸 Estados Unidos</span><strong>+1</strong></button>
                <button class="country-option" type="button" data-country-select="+351"><span>🇵🇹 Portugal</span><strong>+351</strong></button>
              </div>
            </div>`
          : ""
      }
      <input class="input" data-input ${inputAttrsFor(step)} value="${escapeAttr(maskPhone(value))}" placeholder="(00) 00000-0000" />
    </div>
  `;
}

function renderOptions(step, selected) {
  return `
    <div class="options" role="radiogroup" tabindex="0">
      ${step.options
        .map(
          ([id, label, value], index) => `
            <button class="option ${selected === value ? "is-selected" : ""}" type="button" data-option="${escapeAttr(value)}" data-option-id="${id}">
              <span class="option-key">${String.fromCharCode(65 + index)}</span>
              <span class="option-label">${label}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function inputAttrsFor(step) {
  const base = `type="${step.fieldType === "phone" ? "tel" : step.fieldType}"`;
  if (step.mapTo === "name") return `${base} id="full-name" name="name" autocomplete="name" autocapitalize="words"`;
  if (step.mapTo === "email") return `${base} id="email" name="email" autocomplete="email" inputmode="email" autocapitalize="none"`;
  if (step.mapTo === "phone") return `${base} id="phone" name="tel" autocomplete="tel" inputmode="tel"`;
  if (stripHtml(step.title).includes("Instagram")) {
    return `${base} id="instagram-profile" name="clinic-social-profile" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"`;
  }
  return `${base} autocomplete="on"`;
}

function syncInputValue(step, input = app.querySelector("[data-input]")) {
  if (!input) return;
  let value = input.value;
  if (step.fieldType === "phone") {
    value = maskPhone(value);
    input.value = value;
  }
  state.answers[answerKey(step)] = value;
  saveState();
}

function focusInputAtEnd(input) {
  input.focus({ preventScroll: true });
  const length = input.value.length;
  if (typeof input.setSelectionRange !== "function") return;
  requestAnimationFrame(() => {
    try {
      input.setSelectionRange(length, length);
    } catch {
      // Some input types do not expose a selectable range.
    }
  });
}

function resetApplicationState() {
  Object.assign(state, {
    screen: "question",
    stepIndex: 0,
    answers: {},
    selectedOption: null,
    calendarDate: null,
    calendarTime: null,
    calendarMonthOffset: 0,
    calendarAvailability: null,
    calendarSource: null,
    leadSubmitted: false,
    leadId: null,
    databaseLeadId: null,
    scheduleViewed: false,
    isBooking: false,
    isLoadingSlots: false,
    redirectTimerStarted: false,
    countryOpen: false,
    endingId: null,
    startedAt: Date.now(),
    sessionToken: crypto.randomUUID(),
  });
  firstInteractionTracked = false;
  window.clearTimeout(optionAdvanceTimer);
}

function bindKeyboardAwareFocus(input) {
  input.addEventListener("focus", () => {
    document.body.classList.add("is-field-focused");
    updateAppHeight();
    window.clearTimeout(fieldFocusTimer);
    fieldFocusTimer = window.setTimeout(() => {
      app.querySelector("[data-question-form]")?.scrollIntoView({ block: "start", inline: "nearest" });
    }, 180);
  });
  input.addEventListener("blur", () => {
    window.clearTimeout(fieldFocusTimer);
    document.body.classList.remove("is-field-focused");
    updateAppHeight();
  });
}

function updateAppHeight() {
  const height = window.visualViewport?.height || window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${Math.round(height)}px`);
}

function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

async function next() {
  const step = getStep();
  if (step && step.type !== "scheduling") syncInputValue(step);
  await trackFirstInteraction();
  const validation = validateCurrentStep();
  const validationBox = app.querySelector("[data-validation]");
  if (validation) {
    if (validationBox) validationBox.textContent = validation;
    return;
  }

  await IntegrationAdapter.upsertPartialLead(currentLeadPayload(true));
  const rule = FORM_CONFIG.logicRules.find(
    (item) => item.conditionStepId === step.id && item.conditionValue === state.answers[answerKey(step)],
  );

  if (rule?.actionType === "go_to_ending") {
    await submitLeadOnce();
    state.screen = "ending";
    state.endingId = rule.actionEndingId;
    state.redirectTimerStarted = false;
    render();
    return;
  }

  if (rule?.actionType === "jump_to") {
    await submitLeadOnce();
    state.stepIndex = FORM_CONFIG.steps.findIndex((item) => item.id === rule.actionTargetId);
    state.screen = "schedule";
    render();
    return;
  }

  state.stepIndex += 1;
  const nextStep = getStep();
  if (nextStep?.type === "scheduling") {
    await submitLeadOnce();
    state.screen = "schedule";
  }
  render();
}

function chooseOption(option) {
  if (isAdvancingOption) return;
  if (optionAdvanceTimer) window.clearTimeout(optionAdvanceTimer);
  const step = getStep();
  state.answers[answerKey(step)] = option.dataset.option;
  app.querySelectorAll("[data-option]").forEach((item) => {
    item.classList.toggle("is-selected", item === option);
    item.disabled = true;
  });
  saveState();
  optionAdvanceTimer = window.setTimeout(async () => {
    isAdvancingOption = true;
    await trackFirstInteraction();
    await next();
    isAdvancingOption = false;
  }, OPTION_ADVANCE_DELAY_MS);
}

async function submitLeadOnce() {
  if (state.leadSubmitted) return state.leadId;
  const leadId = await IntegrationAdapter.submitLead({
    ...currentLeadPayload(false),
    p_form_data: {
      ...mappedAnswers(),
      _pixel_meta: {
        event_id: crypto.randomUUID(),
        event_name: FORM_CONFIG.metaPixel.submitEventName,
        event_mode: FORM_CONFIG.metaPixel.submitEventMode,
        pixel_allowed: true,
      },
      _scoring_meta: {
        fill_time_seconds: Math.floor((Date.now() - state.startedAt) / 1000),
        honeypot_triggered: false,
      },
    },
    form_answers_cleaned: cleanAnswers(),
  });
  state.leadSubmitted = true;
  state.leadId = leadId;
  saveState();
  return leadId;
}

async function trackFirstInteraction() {
  if (firstInteractionTracked) return;
  firstInteractionTracked = true;
  state.firstInteractionTracked = true;
  await IntegrationAdapter.track(FORM_CONFIG.metaPixel.firstInteractionEventName, {
    workspace_id: FORM_CONFIG.workspaceId,
    form_id: FORM_CONFIG.formId,
    form_slug: FORM_CONFIG.slug,
  });
}

function renderSchedule() {
  const contact = mappedContact();
  const shouldLoadRemoteSlots = !state.scheduleViewed && location.protocol !== "file:" && !state.calendarAvailability;
  if (shouldLoadRemoteSlots) state.isLoadingSlots = true;
  const selectedDate = state.calendarDate;
  state.calendarDate = selectedDate;
  const times = availableTimesFor(selectedDate);
  const monthDate = monthCursor();

  if (!state.scheduleViewed) {
    state.scheduleViewed = true;
    IntegrationAdapter.viewSchedule({
      workspace_id: FORM_CONFIG.workspaceId,
      event_type_id: FORM_CONFIG.eventType.id,
      user_data: contact,
      event_name: "Chronos_View_Scheduled",
    }).catch((error) => {
      state.isLoadingSlots = false;
      pushEvent({
        kind: "calendar_api_error",
        originalEquivalent: FORM_CONFIG.eventType.calendarApiUrl,
        payload: { message: error.message },
        at: new Date().toISOString(),
      });
      saveState();
      renderSchedule();
    });
  }

  app.innerHTML = `
    <div class="flow-page schedule-flow">
      ${renderProgress()}
      ${renderFlowTop()}
      <div class="flow-stage">
        <div class="schedule ${state.skipScheduleAnimation ? "" : "screen-enter"}">
          <h2 class="question-title">${FORM_CONFIG.steps[state.stepIndex].title}</h2>
          <p class="question-description">${FORM_CONFIG.steps[state.stepIndex].description}</p>
          <div class="schedule-card">
            <div class="event-heading">
              <div class="event-icon">${iconCalendar()}</div>
              <div>
                <h3>${FORM_CONFIG.eventType.name}</h3>
                <p class="event-meta">${iconClock()} ${FORM_CONFIG.eventType.durationMinutes} minutos</p>
              </div>
            </div>
            <div class="calendar-layout">
              <div class="calendar-column">
                <span class="calendar-label">Selecione uma data</span>
                <div class="calendar-box">
                  <div class="calendar-header">
                    <strong>${formatCalendarMonth(monthDate)}</strong>
                    <div class="calendar-nav">
                      <button class="icon-button" type="button" data-month="-1" aria-label="Go to previous month">‹</button>
                      <button class="icon-button" type="button" data-month="1" aria-label="Go to next month">›</button>
                    </div>
                  </div>
                  <div class="calendar-weekdays">
                    <span>DOM</span><span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SAB</span>
                  </div>
                  <div class="calendar-grid">${renderCalendarDays(monthDate, selectedDate)}</div>
                  <button class="timezone-button" type="button">${iconGlobe()} Horário de Belém (${currentBelemTime()})</button>
                </div>
              </div>
              <div class="time-list ${times.length === 1 ? "is-single" : ""}">
                <span class="selected-date-label">${iconCalendar()} ${selectedDate ? formatLongDate(selectedDate, true) : "Selecione uma data"}</span>
                ${
                  state.isLoadingSlots
                    ? `<div class="slot-loading"><span class="spinner" aria-hidden="true"></span><br>Carregando...</div>`
                    : times.length
                    ? times
                        .map(
                          (time) => `
                            <button class="time-button ${state.calendarTime === time ? "is-selected" : ""}" type="button" data-time="${time}">
                              ${time}
                            </button>
                          `,
                        )
                        .join("")
                    : `<div class="slot-empty">Nenhum horário<br><small>Selecione outra data</small></div>`
                }
              </div>
            </div>
            ${
              selectedDate && state.calendarTime
                ? `<div class="summary">${formatLongDate(state.calendarDate, true)} às ${state.calendarTime} • ${FORM_CONFIG.eventType.durationMinutes} minutos</div>`
                : ""
            }
            <div class="validation" data-validation></div>
            <div class="booking-actions">
              <button class="primary-button" type="button" data-booking ${state.isBooking || !state.calendarDate || !state.calendarTime ? "disabled" : ""}>
                ${state.isBooking ? '<span class="spinner" aria-hidden="true"></span>Agendando...' : `${iconCheck()} Agendar horário`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  state.skipScheduleAnimation = false;
  saveState();
}

function monthCursor() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth() + (state.calendarMonthOffset || 0), 1);
}

function renderCalendarDays(monthDate, selectedDate) {
  const first = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay());
  const days = [];
  for (let i = 0; i < 35; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const iso = toISODate(date);
    const highlighted = hasAvailableTimes(iso);
    const disabled = !highlighted || date.getMonth() !== monthDate.getMonth();
    const today = toISODate(new Date());
    days.push(`
      <button class="calendar-day ${iso === today ? "is-today" : ""} ${highlighted ? "is-available" : ""} ${!disabled && selectedDate === iso ? "is-selected" : ""}" type="button" data-date="${iso}" ${disabled ? "disabled" : ""}>
        ${date.getDate()}
      </button>
    `);
  }
  return days.join("");
}

function firstAvailableDate() {
  if (state.calendarAvailability) {
    const available = Object.entries(state.calendarAvailability).find(([, times]) => times?.length);
    return available ? available[0] : toISODate(new Date());
  }
  const captured = Object.entries(FORM_CONFIG.eventType.capturedAvailability).find(([, times]) => times?.length);
  if (captured) return captured[0];
  const today = new Date();
  for (let i = 1; i <= FORM_CONFIG.eventType.bookingWindowDays; i += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const iso = toISODate(date);
    if (hasAvailableTimes(iso)) return iso;
  }
  return toISODate(today);
}

function isDateAvailable(iso) {
  if (state.calendarAvailability) return Boolean(state.calendarAvailability[iso]?.length);
  if (Object.prototype.hasOwnProperty.call(FORM_CONFIG.eventType.capturedAvailability, iso)) {
    return Boolean(FORM_CONFIG.eventType.capturedAvailability[iso]?.length);
  }
  const date = new Date(`${iso}T12:00:00`);
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (date < todayStart) return false;
  const windowEnd = new Date(todayStart);
  windowEnd.setDate(todayStart.getDate() + FORM_CONFIG.eventType.bookingWindowDays);
  if (date > windowEnd) return false;
  const day = date.getDay();
  return Boolean(FORM_CONFIG.eventType.availability[day]?.length);
}

function hasAvailableTimes(iso) {
  return availableTimesFor(iso).length > 0;
}

function availableTimesFor(iso) {
  if (state.calendarAvailability) return state.calendarAvailability[iso] || [];
  if (Object.prototype.hasOwnProperty.call(FORM_CONFIG.eventType.capturedAvailability, iso)) {
    return FORM_CONFIG.eventType.capturedAvailability[iso];
  }
  if (!isDateAvailable(iso)) return [];
  const date = new Date(`${iso}T12:00:00`);
  const daySlots = FORM_CONFIG.eventType.availability[date.getDay()] || [];
  const all = [];
  for (const slot of daySlots) {
    const [startHour] = slot.start.split(":").map(Number);
    const [endHour] = slot.end.split(":").map(Number);
    for (let hour = startHour; hour + 1 <= endHour; hour += 1) {
      all.push(`${String(hour).padStart(2, "0")}:00`);
    }
  }
  return all.slice(0, FORM_CONFIG.eventType.maxVisibleSlots);
}

function toISODate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatCalendarMonth(date) {
  const value = date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  return titleCase(value.replace(" de ", " "));
}

function formatLongDate(iso, title = false) {
  const date = new Date(`${iso}T12:00:00`);
  const value = date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
  return title ? titleCase(value) : capitalize(value);
}

function currentBelemTime() {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Belem",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function titleCase(value) {
  return value.replace(/\p{L}+/gu, (word) => word.charAt(0).toUpperCase() + word.slice(1));
}

async function confirmBooking() {
  const validation = app.querySelector("[data-validation]");
  if (!state.calendarDate || !state.calendarTime) {
    validation.textContent = "Preencha todos os campos obrigatórios";
    return;
  }
  state.isBooking = true;
  renderSchedule();
  const contact = mappedContact();
  try {
    await new Promise((resolve) => setTimeout(resolve, 450));
    const hasConflict = await IntegrationAdapter.checkBookingConflict({
      event_type_id: FORM_CONFIG.eventType.id,
      workspace_id: FORM_CONFIG.workspaceId,
      booking_date: state.calendarDate,
      booking_time: state.calendarTime,
      duration_minutes: FORM_CONFIG.eventType.durationMinutes,
    });
    if (hasConflict) throw new Error("booking_conflict");
    const bookingId = await IntegrationAdapter.createBooking({
      event_type_id: FORM_CONFIG.eventType.id,
      workspace_id: FORM_CONFIG.workspaceId,
      client_name: contact.name,
      client_email: contact.email,
      client_phone: contact.phone,
      booking_date: state.calendarDate,
      booking_time: state.calendarTime,
      workspace_timezone: FORM_CONFIG.eventType.timezone,
      visitor_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      answers: cleanAnswers(),
      capture_lead_id: state.leadId,
    });
    state.bookingId = bookingId;
    await IntegrationAdapter.track(FORM_CONFIG.eventType.metaPixelEventName, {
      event_type_id: FORM_CONFIG.eventType.id,
      date: state.calendarDate,
      time: state.calendarTime,
      user_data: contact,
    });
    state.screen = "ending";
    state.endingId = "ending-1771040341026";
    state.isBooking = false;
    state.redirectTimerStarted = false;
    render();
  } catch {
    state.isBooking = false;
    renderSchedule();
    const box = app.querySelector("[data-validation]");
    if (box) box.textContent = "Esse horário não está mais disponível. Escolha outro horário.";
  }
}

function renderEnding(id) {
  const ending = FORM_CONFIG.endings[id] || FORM_CONFIG.endings["ending-1779371207224"];
  const isWhatsappRedirect = Boolean(ending.redirectUrl);
  app.innerHTML = `
    <div class="flow-page">
      ${renderProgress()}
      ${renderFlowTop()}
      <div class="flow-stage">
        <div class="ending ${isWhatsappRedirect ? "ending-whatsapp" : ""} screen-enter">
          <h2 class="ending-title">${ending.title}</h2>
          <div class="ending-description">${ending.description}</div>
          ${
            ending.redirectUrl && !isWhatsappRedirect
              ? `<a class="primary-button" href="${ending.redirectUrl}" target="_blank" rel="noopener">Abrir WhatsApp ${iconArrow()}</a><p class="redirect-note">Redirecionando automaticamente em ${ending.redirectDelay || 3}s.</p>`
              : ""
          }
        </div>
      </div>
    </div>
  `;
  startRedirectTimer(ending);
}

function startRedirectTimer(ending) {
  if (!ending.redirectUrl || state.redirectTimerStarted) return;
  state.redirectTimerStarted = true;
  saveState();
  window.setTimeout(() => {
    window.location.href = ending.redirectUrl;
  }, (ending.redirectDelay || 3) * 1000);
}

app.addEventListener("click", async (event) => {
  const start = event.target.closest("[data-start]");
  const option = event.target.closest("[data-option]");
  const cont = event.target.closest("[data-continue]");
  const date = event.target.closest("[data-date]");
  const time = event.target.closest("[data-time]");
  const month = event.target.closest("[data-month]");
  const booking = event.target.closest("[data-booking]");
  const countryToggle = event.target.closest("[data-country-toggle]");
  const countrySelect = event.target.closest("[data-country-select]");
  const countryArea = event.target.closest(".phone-row");

  if (skipClickAction && (cont || booking)) {
    skipClickAction = false;
    return;
  }

  if (state.countryOpen && !countryArea) {
    syncInputValue(getStep());
    state.countryOpen = false;
    renderQuestion();
    return;
  }

  if (start) {
    await IntegrationAdapter.track(FORM_CONFIG.metaPixel.viewEventName, {
      workspace_id: FORM_CONFIG.workspaceId,
      form_id: FORM_CONFIG.formId,
      form_slug: FORM_CONFIG.slug,
    });
    resetApplicationState();
    render();
  }
  if (option) {
    chooseOption(option);
  }
  if (cont) await next();
  if (countryToggle) {
    state.countryOpen = !state.countryOpen;
    renderQuestion();
  }
  if (countrySelect) {
    state.countryOpen = false;
    renderQuestion();
  }
  if (date) {
    if (date.disabled || !hasAvailableTimes(date.dataset.date)) return;
    state.calendarDate = date.dataset.date;
    state.calendarTime = null;
    state.skipScheduleAnimation = true;
    renderSchedule();
  }
  if (time) {
    state.calendarTime = time.dataset.time;
    state.skipScheduleAnimation = true;
    renderSchedule();
  }
  if (month) {
    state.calendarMonthOffset = (state.calendarMonthOffset || 0) + Number(month.dataset.month);
    state.skipScheduleAnimation = true;
    renderSchedule();
  }
  if (booking) await confirmBooking();
});

app.addEventListener("pointerdown", (event) => {
  const cont = event.target.closest("[data-continue]");
  const booking = event.target.closest("[data-booking]");
  if (!cont && !booking) return;
  if (!window.matchMedia("(pointer: coarse)").matches) return;
  event.preventDefault();
  skipClickAction = true;
  window.setTimeout(() => {
    skipClickAction = false;
  }, 500);
  if (cont) next();
  if (booking) confirmBooking();
});

document.addEventListener("keydown", async (event) => {
  if (state.countryOpen && event.key === "Escape") {
    event.preventDefault();
    syncInputValue(getStep());
    state.countryOpen = false;
    renderQuestion();
    return;
  }

  if (state.screen === "question" && event.key === "Enter") {
    event.preventDefault();
    await next();
  }
  if (state.screen === "question" && /^[a-z]$/i.test(event.key)) {
    const step = getStep();
    if (!step.options) return;
    const index = event.key.toUpperCase().charCodeAt(0) - 65;
    const option = step.options[index];
    if (option) {
      state.answers[answerKey(step)] = option[2];
      const optionButton = app.querySelector(`[data-option="${CSS.escape(option[2])}"]`);
      if (optionButton) chooseOption(optionButton);
    }
  }
});

backButton.addEventListener("click", () => {
  if (state.screen === "schedule") {
    state.screen = "question";
    state.stepIndex = FORM_CONFIG.steps.findIndex((step) => step.id === "04d6df62-180c-4ab5-a60c-815ce0190efc");
  } else if (state.screen === "question" && state.stepIndex > 0) {
    state.stepIndex -= 1;
  } else {
    state.screen = "welcome";
    state.stepIndex = -1;
  }
  render();
});

eventToggle.addEventListener("click", () => {
  const expanded = eventToggle.getAttribute("aria-expanded") === "true";
  eventToggle.setAttribute("aria-expanded", String(!expanded));
  eventPanel.hidden = expanded;
});

updateAppHeight();
window.addEventListener("resize", updateAppHeight, { passive: true });
window.visualViewport?.addEventListener("resize", updateAppHeight, { passive: true });
window.visualViewport?.addEventListener("scroll", updateAppHeight, { passive: true });

render();
