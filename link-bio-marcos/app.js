(function () {
  "use strict";

  const WHATSAPP_NUMBER = "5594988082290";
  const STORAGE_KEY = "hurtz-link-bio-marcos-form-v1";
  const TRACKING_KEY = "hurtz-link-bio-marcos-tracking-v1";
  const ITI_VERSION = "29.2.3";
  const ITI_UTILS = `https://cdn.jsdelivr.net/npm/intl-tel-input@${ITI_VERSION}/dist/js/utils.js`;
  const DDDS_VALIDOS = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28,
    31, 32, 33, 34, 35, 37, 38,
    41, 42, 43, 44, 45, 46, 47, 48, 49,
    51, 53, 54, 55,
    61, 62, 63, 64, 65, 66, 67, 68, 69,
    71, 73, 74, 75, 77, 79,
    81, 82, 83, 84, 85, 86, 87, 88, 89,
    91, 92, 93, 94, 95, 96, 97, 98, 99,
  ];

  const steps = [
    {
      key: "nome",
      label: "Qual o seu nome?",
      type: "text",
      placeholder: "Digite seu nome completo",
      autocomplete: "name",
      error: "Precisamos do seu nome para continuar.",
    },
    {
      key: "email",
      label: "Qual seu e-mail?",
      type: "email",
      placeholder: "voce@suaempresa.com.br",
      autocomplete: "email",
      inputmode: "email",
      error: "Digite um e-mail válido para continuar.",
    },
    {
      key: "telefone",
      label: "Qual seu telefone?",
      type: "tel",
      placeholder: "(11) 99999-9999",
      autocomplete: "tel",
      inputmode: "tel",
      error: "Digite o telefone com DDD.",
    },
    {
      key: "cargo",
      label: "Qual o seu cargo?",
      type: "choice",
      error: "Escolha uma opção para continuar.",
      options: ["Sócio / Empresário", "Gerente / Líder", "Colaborador", "Freelancer"],
    },
    {
      key: "segmento",
      label: "Qual seu segmento?",
      type: "choice",
      error: "Escolha um segmento para continuar.",
      options: ["Saúde", "Finanças", "Jurídico", "Tecnologia/SaaS", "Indústria", "Serviços/Mentoria", "Outro"],
    },
    {
      key: "faturamento",
      label: "Qual seu faturamento?",
      type: "choice",
      error: "Escolha uma faixa de faturamento para continuar.",
      options: [
        "Abaixo de R$ 30 mil",
        "Entre R$ 30 mil e R$ 50 mil",
        "Entre R$ 50 mil e R$ 100 mil",
        "Entre R$ 100 mil e R$ 300 mil",
        "Entre R$ 300 mil e R$ 500 mil",
        "Entre R$ 500 mil e R$ 1 milhão",
        "Acima de R$ 1 milhão",
      ],
    },
  ];

  const form = document.querySelector("#lead-form");
  const progressFill = document.querySelector(".progress-fill");
  const progressLabel = document.querySelector(".progress-label");
  const title = document.querySelector("#form-title");

  let current = 0;
  let data = loadData();
  let phoneIti = null;
  const tracking = loadTracking();
  const dynamicImport = (() => {
    try {
      return new Function("url", "return import(url);");
    } catch {
      return null;
    }
  })();

  function loadData() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
      return saved && typeof saved === "object" ? saved : {};
    } catch {
      return {};
    }
  }

  function saveData() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function loadTracking() {
    const params = new URLSearchParams(window.location.search);
    const saved = readJson(TRACKING_KEY);
    const currentParams = { origem: "link_bio_marcos" };

    params.forEach((value, key) => {
      if (key.startsWith("utm_") || ["gclid", "fbclid", "msclkid", "ref"].includes(key)) {
        currentParams[key] = value;
      }
    });

    const merged = { ...saved, ...currentParams };
    sessionStorage.setItem(TRACKING_KEY, JSON.stringify(merged));
    return merged;
  }

  function readJson(key) {
    try {
      const saved = JSON.parse(sessionStorage.getItem(key));
      return saved && typeof saved === "object" ? saved : {};
    } catch {
      return {};
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function maskPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (!digits) return "";
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function render() {
    const step = steps[current];
    const isLast = current === steps.length - 1;

    progressFill.style.width = `${((current + 1) / steps.length) * 100}%`;
    progressLabel.textContent = `Passo ${current + 1} de ${steps.length}`;
    title.innerHTML = "Preencha seus dados abaixo para <span>falar com nosso time:</span>";

    form.innerHTML = `
      <div class="step is-active" data-key="${step.key}">
        <div class="field ${step.key === "telefone" ? "field-tel" : ""}">
          ${renderField(step)}
          <span class="field-error" role="alert"></span>
        </div>
        <div class="actions">
          <button class="btn" type="button" data-next>${isLast ? "Enviar" : "Continuar"}</button>
          <button class="btn-back" type="button" data-back ${current === 0 ? "hidden" : ""}>Voltar</button>
          ${step.type === "choice" ? "" : '<span class="enter-hint"><kbd>↵</kbd>ou pressione Enter</span>'}
        </div>
        <p class="form-error" role="alert"></p>
      </div>
    `;

    bindStep(step);
  }

  function renderField(step) {
    if (step.type === "choice") {
      const selected = data[step.key] || "";
      return `
        <span class="step-label" id="label-${step.key}">${escapeHtml(step.label)}<span class="required">*</span></span>
        <div class="options" role="radiogroup" aria-labelledby="label-${step.key}">
          ${step.options
            .map((option) => {
              const active = selected === option;
              return `
                <button class="option ${active ? "is-selected" : ""}" type="button" role="radio" aria-checked="${active}" data-value="${escapeHtml(option)}">
                  <span>${escapeHtml(option)}</span>
                  <span class="option-check" aria-hidden="true">✓</span>
                </button>
              `;
            })
            .join("")}
        </div>
      `;
    }

    return `
      <label class="step-label" for="${step.key}">${escapeHtml(step.label)}<span class="required">*</span></label>
      <input
        id="${step.key}"
        name="${step.key}"
        type="${step.type}"
        value="${escapeHtml(data[step.key] || "")}"
        placeholder="${escapeHtml(step.placeholder || "")}"
        autocomplete="${escapeHtml(step.autocomplete || "off")}"
        inputmode="${escapeHtml(step.inputmode || "text")}"
        enterkeyhint="next"
        maxlength="200"
      />
    `;
  }

  function bindStep(step) {
    const next = form.querySelector("[data-next]");
    const back = form.querySelector("[data-back]");
    const input = form.querySelector("input");
    const options = Array.from(form.querySelectorAll(".option"));

    next.addEventListener("click", handleNext);

    if (back) {
      back.addEventListener("click", () => {
        current = Math.max(0, current - 1);
        render();
      });
    }

    if (input) {
      if (step.key === "telefone") initPhone(input);
      input.focus({ preventScroll: true });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          handleNext();
        }
      });
      input.addEventListener("input", () => {
        if (step.key === "telefone" && !phoneIti) input.value = maskPhone(input.value);
        data[step.key] = input.value.trim();
        saveData();
        clearError();
      });
    }

    options.forEach((option, index) => {
      option.addEventListener("click", () => {
        data[step.key] = option.dataset.value;
        saveData();
        options.forEach((item) => {
          const active = item === option;
          item.classList.toggle("is-selected", active);
          item.setAttribute("aria-checked", active ? "true" : "false");
        });
        clearError();

        if (current < steps.length - 1) {
          window.setTimeout(handleNext, 120);
        }
      });

      option.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + direction + options.length) % options.length;
        options[nextIndex].focus();
      });
    });
  }

  function handleNext() {
    const step = steps[current];
    const value = data[step.key] || "";
    const error = validate(step, value);

    if (error) {
      showError(error);
      return;
    }

    if (current < steps.length - 1) {
      if (step.key === "telefone") data.telefone_e164 = phoneE164();
      current += 1;
      render();
      return;
    }

    finish();
  }

  function validate(step, value) {
    if (step.type === "choice") return value ? "" : step.error;
    if (step.key === "nome") return value.trim().length >= 2 ? "" : step.error;
    if (step.key === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? "" : step.error;
    if (step.key === "telefone") return validatePhone(value);
    return value.trim() ? "" : step.error;
  }

  function initPhone(input) {
    phoneIti = null;
    if (typeof window.intlTelInput !== "function") return;

    try {
      phoneIti = window.intlTelInput(input, {
        initialCountry: "br",
        separateDialCode: true,
        countrySearch: true,
        dropdownParent: document.body,
        formatAsYouType: true,
        strictMode: true,
        countryNameLocale: "pt-BR",
        countryOrder: ["br", "pt", "us", "ar", "py", "uy", "cl", "co", "mx", "es"],
        uiTranslations: {
          searchPlaceholder: "Buscar país",
          countryListAriaLabel: "Lista de países",
          selectedCountryAriaLabel: "Alterar o país do telefone",
          noCountrySelected: "Selecione o país",
          searchEmptyState: "Nenhum país encontrado",
          clearSearchAriaLabel: "Limpar busca",
        },
        loadUtils: dynamicImport ? () => dynamicImport(ITI_UTILS) : null,
      });

      input.addEventListener("countrychange", clearError);
    } catch {
      phoneIti = null;
    }
  }

  function validatePhone(value) {
    const raw = value.trim();
    const digits = raw.replace(/\D/g, "");

    if (!digits) return "Precisamos do seu telefone para continuar.";

    if (phoneIti && window.intlTelInput?.utils) {
      try {
        if (phoneIti.isValidNumber()) return "";
        const error = phoneIti.getValidationError();
        const names = window.intlTelInput.VALIDATION_ERROR || {};
        if (names.TOO_SHORT === error) return "Esse número está curto demais. Confira, por favor.";
        if (names.TOO_LONG === error) return "Esse número tem dígitos demais. Confira, por favor.";
        if (names.INVALID_COUNTRY_CODE === error) return "Selecione um país válido.";
        if (names.NOT_A_NUMBER === error) return "Digite um telefone válido.";
        return "Esse telefone não parece válido. Confira, por favor.";
      } catch {
        return digits.length < 6 ? "Digite o telefone completo." : "";
      }
    }

    if (digits.length < 10) return "Digite o telefone com DDD.";
    if (digits.length > 11) return "Esse telefone tem dígitos demais. Confira, por favor.";
    if (!DDDS_VALIDOS.includes(Number(digits.slice(0, 2)))) return "Esse DDD não existe. Confira, por favor.";

    const local = digits.slice(2);
    if (local.length === 9 && local.charAt(0) !== "9") return "Celular deve começar com 9 após o DDD.";
    if (local.length === 8 && !/^[2-5]/.test(local)) return "Esse número parece incompleto. Confira, por favor.";

    return "";
  }

  function showError(message) {
    const slot = form.querySelector(".field-error");
    const input = form.querySelector("input");
    if (slot) slot.textContent = message;
    if (input) {
      input.classList.add("has-error");
      input.setAttribute("aria-invalid", "true");
      input.focus({ preventScroll: true });
    }
  }

  function clearError() {
    const slot = form.querySelector(".field-error");
    const input = form.querySelector("input");
    if (slot) slot.textContent = "";
    if (input) {
      input.classList.remove("has-error");
      input.removeAttribute("aria-invalid");
    }
  }

  function finish() {
    const whatsappUrl = buildWhatsappUrl();
    const submitButton = form.querySelector("[data-next]");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.classList.add("is-loading");
      submitButton.setAttribute("aria-busy", "true");
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit_success",
      form_slug: "link-bio-marcos",
      fss_tracking: tracking,
    });

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    progressFill.style.width = "100%";
    progressLabel.textContent = "Concluído";
    title.textContent = "Dados enviados para análise.";

    form.innerHTML = `
      <div class="success">
        <span class="accent-line" aria-hidden="true"></span>
        <p>Abra o WhatsApp para enviar os dados ao time comercial da Hurtz.</p>
        <ul class="summary">
          ${steps
            .map((step) => `<li><span>${escapeHtml(step.label)}</span><strong>${escapeHtml(data[step.key] || "Não informado")}</strong></li>`)
            .join("")}
        </ul>
        <a class="btn" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Abrir WhatsApp →</a>
      </div>
    `;
  }

  function buildWhatsappUrl() {
    const telefone = data.telefone_e164 || phoneE164() || data.telefone || "";
    const rows = [
      "Olá, Hurtz. Vim pelo link da bio do Marcos e preenchi o formulário comercial:",
      "",
      `Nome: ${data.nome || ""}`,
      `E-mail: ${data.email || ""}`,
      `Telefone: ${telefone}`,
      `Cargo: ${data.cargo || ""}`,
      `Segmento: ${data.segmento || ""}`,
      `Faturamento: ${data.faturamento || ""}`,
    ];

    const trackingRows = Object.entries(tracking).map(([key, value]) => `${key}: ${value}`);
    if (trackingRows.length) rows.push("", "Origem:", ...trackingRows);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(rows.join("\n"))}`;
  }

  function phoneE164() {
    if (!phoneIti) return "";
    try {
      if (window.intlTelInput?.utils) {
        const number = phoneIti.getNumber();
        if (number) return number;
      }

      const country = phoneIti.getSelectedCountryData();
      const digits = (data.telefone || "").replace(/\D/g, "");
      if (!country?.dialCode || !digits) return "";
      return `+${country.dialCode}${digits}`;
    } catch {
      return "";
    }
  }

  render();
})();
