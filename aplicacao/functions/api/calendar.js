const DEFAULT_TIMEZONE = "America/Sao_Paulo";
const DEFAULT_CALENDAR_ID = "primary";
const DEFAULT_AVAILABILITY = {
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
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const action = body.action;
    if (!action) return json({ error: "missing_action" }, 400);

    const accessToken = await getAccessToken(env);
    if (action === "availability") {
      return json(await getAvailability(body, env, accessToken));
    }
    if (action === "book") {
      return json(await createBooking(body, env, accessToken));
    }
    return json({ error: "unknown_action" }, 400);
  } catch (error) {
    return json({ error: error.message || "calendar_error" }, error.status || 500);
  }
}

async function getAccessToken(env) {
  const clientId = env.GOOGLE_CLIENT_ID;
  const clientSecret = env.GOOGLE_CLIENT_SECRET;
  const refreshToken = env.GOOGLE_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    const error = new Error("missing_google_calendar_credentials");
    error.status = 500;
    throw error;
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });
  if (!response.ok) throw new Error(`google_token_failed_${response.status}`);
  const data = await response.json();
  return data.access_token;
}

async function getAvailability(body, env, accessToken) {
  const timezone = body.timezone || env.GOOGLE_CALENDAR_TIMEZONE || DEFAULT_TIMEZONE;
  const calendarId = env.GOOGLE_CALENDAR_ID || DEFAULT_CALENDAR_ID;
  const bookingWindowDays = Number(body.booking_window_days || 3);
  const durationMinutes = Number(body.duration_minutes || 60);
  const minNoticeHours = Number(body.minimum_notice_hours || 0);
  const maxVisibleSlots = Number(body.max_visible_slots || 2);
  const rules = body.availability || DEFAULT_AVAILABILITY;
  const today = zonedToday(timezone);
  const windowStart = zonedDateTimeToUtc(today, "00:00", timezone);
  const windowEndDate = addDays(today, bookingWindowDays + 1);
  const windowEnd = zonedDateTimeToUtc(windowEndDate, "23:59", timezone);

  const busy = await fetchBusy(accessToken, calendarId, windowStart.toISOString(), windowEnd.toISOString(), timezone);
  const nowWithNotice = new Date(Date.now() + minNoticeHours * 60 * 60 * 1000);
  const availability = {};

  for (let offset = 0; offset <= bookingWindowDays; offset += 1) {
    const date = addDays(today, offset);
    const iso = dateToISO(date);
    const weekday = weekdayOfISO(iso);
    const blocks = rules[weekday] || [];
    const times = [];

    for (const block of blocks) {
      const startMinutes = toMinutes(block.start);
      const endMinutes = toMinutes(block.end);
      for (let minute = startMinutes; minute + durationMinutes <= endMinutes; minute += durationMinutes) {
        const time = fromMinutes(minute);
        const start = zonedDateTimeToUtc(iso, time, timezone);
        const end = new Date(start.getTime() + durationMinutes * 60 * 1000);
        if (start < nowWithNotice) continue;
        if (busy.some((item) => overlaps(start, end, new Date(item.start), new Date(item.end)))) continue;
        times.push(time);
        if (times.length >= maxVisibleSlots) break;
      }
      if (times.length >= maxVisibleSlots) break;
    }

    if (times.length) availability[iso] = times;
  }

  return { availability, timezone, calendarId };
}

async function createBooking(body, env, accessToken) {
  const timezone = body.timezone || body.workspace_timezone || env.GOOGLE_CALENDAR_TIMEZONE || DEFAULT_TIMEZONE;
  const calendarId = env.GOOGLE_CALENDAR_ID || DEFAULT_CALENDAR_ID;
  const durationMinutes = Number(body.duration_minutes || 60);
  const date = body.booking_date;
  const time = body.booking_time;
  if (!date || !time) {
    const error = new Error("missing_booking_datetime");
    error.status = 400;
    throw error;
  }

  const start = zonedDateTimeToUtc(date, time, timezone);
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);
  const busy = await fetchBusy(accessToken, calendarId, start.toISOString(), end.toISOString(), timezone);
  if (busy.some((item) => overlaps(start, end, new Date(item.start), new Date(item.end)))) {
    const error = new Error("booking_conflict");
    error.status = 409;
    throw error;
  }

  const event = {
    summary: bookingSummary(body),
    description: bookingDescription(body),
    start: { dateTime: localDateTime(date, time), timeZone: timezone },
    end: { dateTime: localDateTimeFromDate(end, timezone), timeZone: timezone },
    extendedProperties: {
      private: {
        source: "aplicacao",
        booking_id: body.booking_id || "",
        capture_lead_id: body.capture_lead_id || "",
      },
    },
  };

  if (body.client_email && isEmail(body.client_email)) {
    event.attendees = [{ email: body.client_email, displayName: cleanCalendarText(body.client_name) || undefined }];
  }

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?sendUpdates=all`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    },
  );
  if (!response.ok) throw new Error(`google_event_create_failed_${response.status}`);
  const created = await response.json();
  return { bookingId: body.booking_id || created.id, googleEventId: created.id, htmlLink: created.htmlLink };
}

async function fetchBusy(accessToken, calendarId, timeMin, timeMax, timezone) {
  const response = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timeMin,
      timeMax,
      timeZone: timezone,
      items: [{ id: calendarId }],
    }),
  });
  if (!response.ok) throw new Error(`google_freebusy_failed_${response.status}`);
  const data = await response.json();
  return data.calendars?.[calendarId]?.busy || [];
}

function bookingDescription(body) {
  return [
    "Para aproveitar melhor a reunião, entre de preferência por um computador, em um lugar silencioso e com boa conexão.",
    "Separe alguns minutos antes para abrir os dados básicos da clínica e possíveis dúvidas sobre os anúncios.",
  ].join("\n\n");
}

function bookingSummary(body) {
  const name = cleanCalendarText(body.client_name) || "Cliente";
  return `${name} | Hurtz`;
}

function cleanCalendarText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
}

function zonedToday(timezone) {
  const parts = dateParts(new Date(), timezone);
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function zonedDateTimeToUtc(dateISO, time, timezone) {
  const [year, month, day] = dateISO.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  let utc = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  for (let i = 0; i < 2; i += 1) {
    const offset = timezoneOffsetMs(utc, timezone);
    utc = new Date(Date.UTC(year, month - 1, day, hour, minute, 0) - offset);
  }
  return utc;
}

function localDateTime(dateISO, time) {
  return `${dateISO}T${time}:00`;
}

function localDateTimeFromDate(date, timezone) {
  const parts = dateParts(date, timezone);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:00`;
}

function timezoneOffsetMs(date, timezone) {
  const parts = dateParts(date, timezone);
  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second),
  );
  return asUTC - date.getTime();
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
  return dateToISO(date);
}

function dateToISO(date) {
  return date instanceof Date ? date.toISOString().slice(0, 10) : date;
}

function weekdayOfISO(dateISO) {
  const [year, month, day] = dateISO.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

function toMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function fromMinutes(minutes) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function overlaps(startA, endA, startB, endB) {
  return startA < endB && startB < endA;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
