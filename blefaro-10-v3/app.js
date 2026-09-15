(() => {
  "use strict";
  if (window.lucide) window.lucide.createIcons();

  const form = document.querySelector("#lead-form");
  const panel = document.querySelector("#avaliacao");
  const status = document.querySelector("#form-status");
  const resume = document.querySelector("#whatsapp-resume");
  const endpoint = "https://crm.hurtzcompany.com.br/landing-leads/v1/submit";
  const offerName = document.body.dataset.offerName || "Blefaro 10 V3";
  const whatsappIntro = document.body.dataset.whatsappIntro || "Olá! Quero agendar uma sessão estratégica gratuita sobre a Blefaro 10.";
  const submit = form.querySelector('[type="submit"]');
  const submitLabel = submit.innerHTML;
  let busy = false;
  let attempt;
  const trackedLeads = new Set();
  const tracking = { landing_url: location.origin + location.pathname };
  const params = new URLSearchParams(location.search);
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_campaign_id", "utm_adset", "utm_adset_id", "utm_ad", "utm_ad_id", "campaign_id", "adset_id", "ad_id", "placement", "site_source_name", "fbclid"].forEach((key) => {
    if (params.get(key)) tracking[key] = params.get(key).slice(0, 600);
  });
  if (document.referrer) {
    const referrer = new URL(document.referrer);
    tracking.referrer_url = referrer.origin + referrer.pathname;
  }
  const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches
    ? "auto"
    : "smooth";

  function trackSavedLead(submissionId, fields) {
    const qualified = fields.owner === "Sim, sou dono ou sócio" && [
      "Acima de R$ 30 mil a R$ 50 mil",
      "Acima de R$ 50 mil a R$ 100 mil",
      "Acima de R$ 100 mil",
    ].includes(fields.revenue);
    if (!qualified) return;
    const key = `blefaro-v3-lead:${submissionId}`;
    if (typeof window.fbq !== "function" || trackedLeads.has(submissionId)) return;
    try { if (sessionStorage.getItem(key)) return; } catch { /* Use in-memory deduplication. */ }
    try {
      window.fbq("trackSingle", "2215367202619844", "Lead", {
        content_name: offerName,
        content_category: "Diagnostico comercial",
      }, { eventID: submissionId });
      trackedLeads.add(submissionId);
      try { sessionStorage.setItem(key, "1"); } catch { /* The in-memory set still prevents retries. */ }
    } catch { /* Tracking must not interrupt a successfully saved request. */ }
  }

  function instagramHandle(value) {
    let handle = value.trim();
    if (/^(?:https?:\/\/)?(?:(?:www|m)\.)?instagram\.com\//i.test(handle)) {
      try {
        const url = new URL(/^https?:\/\//i.test(handle) ? handle : `https://${handle}`);
        const parts = url.pathname.split("/").filter(Boolean);
        if (parts.length !== 1) return "";
        handle = parts[0];
      } catch { return ""; }
    }
    handle = handle.replace(/^@/, "");
    return /^[a-z0-9._]{1,30}$/i.test(handle) ? `@${handle.toLowerCase()}` : "";
  }

  function validateForm() {
    let firstInvalid;
    form.querySelectorAll("input, select").forEach((field) => {
      const value = field.value.trim();
      let message = value ? "" : "Preencha este campo para continuar.";
      if (field.name === "name" && value && value.length < 2)
        message = "Informe seu nome.";
      if (field.name === "email" && value && field.validity.typeMismatch)
        message = "Informe um e-mail válido.";
      if (field.name === "clinic" && value) {
        const handle = instagramHandle(value);
        if (!handle) message = "Informe o @ ou o link do perfil da clínica no Instagram.";
        else field.value = handle;
      }
      if (field.name === "phone" && value) {
        let digits = value.replace(/\D/g, "");
        if (digits.startsWith("55") && digits.length > 11)
          digits = digits.slice(2);
        if (!/^[1-9]{2}(?:[2-5]\d{7}|9\d{8})$/.test(digits))
          message = "Informe o número com DDD.";
      }
      const error = document.getElementById(`${field.id}-error`);
      error.textContent = message;
      if (message) {
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-describedby", `${field.id}-error`);
        firstInvalid ||= field;
      } else {
        field.removeAttribute("aria-invalid");
        field.removeAttribute("aria-describedby");
      }
    });
    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy || !validateForm()) return;
    busy = true;
    const data = new FormData(form);
    const value = (name) => String(data.get(name)).trim();
    const fields = Object.fromEntries(["name", "email", "phone", "clinic", "owner", "revenue"].map((key) => [key, value(key)]));
    const message = [
      whatsappIntro,
      "",
      `Nome: ${value("name")}`,
      `E-mail: ${value("email")}`,
      `WhatsApp: ${value("phone")}`,
      `Instagram da clínica: ${value("clinic")}`,
      `Dono de clínica: ${value("owner")}`,
      `Faturamento mensal: ${value("revenue")}`,
    ].join("\n");
    const url = `https://wa.me/5594988082290?text=${encodeURIComponent(message)}`;
    resume.href = url;
    resume.hidden = true;
    submit.disabled = true;
    submit.textContent = "Enviando...";
    form.setAttribute("aria-busy", "true");
    form.querySelectorAll("input, select").forEach((field) => { field.disabled = true; });
    status.textContent = "Enviando sua solicitação...";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    let saved = false;
    try {
      const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(JSON.stringify(fields)));
      const fingerprint = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
      try { attempt ||= JSON.parse(sessionStorage.getItem("blefaro-v3-attempt")); } catch { /* Storage can be blocked. */ }
      if (!attempt || attempt.fingerprint !== fingerprint) attempt = { fingerprint, id: crypto.randomUUID() };
      try { sessionStorage.setItem("blefaro-v3-attempt", JSON.stringify(attempt)); } catch { /* Keep the in-memory attempt. */ }
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({ ...fields, source: "blefaro-10-v3", submission_id: attempt.id, tracking }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true || !result.submission_id) throw new Error("not_saved");
      saved = true;
      trackSavedLead(result.submission_id, fields);
      status.textContent = "Recebemos sua solicitação. Continue no WhatsApp para combinar o horário da sessão.";
      resume.hidden = false;
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      status.textContent = "Não foi possível confirmar o envio. Seus dados continuam aqui: tente novamente ou fale conosco pelo WhatsApp.";
      resume.hidden = false;
    } finally {
      clearTimeout(timeout);
      busy = false;
      form.removeAttribute("aria-busy");
      form.querySelectorAll("input, select").forEach((field) => { field.disabled = false; });
      submit.disabled = saved;
      if (saved) submit.textContent = "Solicitação enviada";
      else submit.innerHTML = submitLabel;
    }
  });

  form.addEventListener("input", () => {
    if (busy) return;
    status.textContent = "";
    resume.hidden = true;
    submit.disabled = false;
    submit.innerHTML = submitLabel;
  });
  document.querySelectorAll('a[href="#avaliacao"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      panel.scrollIntoView({ behavior: scrollBehavior, block: "start" });
      form.querySelector("input").focus({ preventScroll: true });
    });
  });

  const dialog = document.querySelector("#privacy-dialog");
  document.querySelectorAll("[data-privacy]").forEach((button) => {
    button.addEventListener("click", () => dialog.showModal());
  });
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
})();
