(function () {
  "use strict";

  const WHATSAPP_NUMBER = "5594988082290";
  const STORAGE_KEY = "hurtz-blefaroplastia-form-v1";
  const TRACKING_KEY = "hurtz-blefaroplastia-tracking-v1";

  const steps = [
    {
      key: "dono_clinica",
      label: "Você é dono de clínica?",
      type: "choice",
      error: "Escolha uma opção para continuar.",
      options: ["Sim, sou dono ou sócio", "Sou médico responsável", "Sou gestor da clínica", "Não"],
    },
    {
      key: "realiza_blefaroplastia",
      label: "Já realiza blefaroplastia?",
      type: "choice",
      error: "Escolha uma opção para continuar.",
      options: ["Sim, já realizo", "Estou começando agora", "Ainda não"],
    },
    {
      key: "cirurgias_mes",
      label: "Quantas cirurgias vende por mês?",
      type: "choice",
      error: "Escolha uma faixa para continuar.",
      options: ["Nenhuma ainda", "1 a 2 por mês", "3 a 5 por mês", "6 a 10 por mês", "Mais de 10 por mês"],
    },
    {
      key: "ticket_medio",
      label: "Qual o ticket médio?",
      type: "currency",
      placeholder: "8.000",
      inputmode: "numeric",
      error: "Digite o ticket médio para continuar.",
    },
    {
      key: "equipe_comercial",
      label: "Possui secretária ou equipe comercial?",
      type: "choice",
      error: "Escolha uma opção para continuar.",
      options: ["Sim, tenho equipe comercial", "Tenho secretária ou recepção", "Eu mesmo respondo os contatos", "Ainda não tenho"],
    },
    {
      key: "investimento_anuncios",
      label: "Quanto pode investir mensalmente em anúncios?",
      type: "choice",
      error: "Escolha uma faixa para continuar.",
      options: [
        "Até R$ 1.500/mês",
        "R$ 1.500 a R$ 3.000/mês",
        "R$ 3.000 a R$ 6.000/mês",
        "Acima de R$ 6.000/mês",
      ],
    },
  ];

  const form = document.querySelector("#lead-form");
  const progressFill = document.querySelector(".progress-fill");
  const progressLabel = document.querySelector(".progress-label");
  const title = document.querySelector("#form-title");

  let current = 0;
  let data = loadData();
  const tracking = loadTracking();

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
    const currentParams = {};

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

  function render() {
    const step = steps[current];
    const isLast = current === steps.length - 1;

    progressFill.style.width = `${((current + 1) / steps.length) * 100}%`;
    progressLabel.textContent = `Passo ${current + 1} de ${steps.length}`;
    title.innerHTML = "Responda 6 perguntas para avaliarmos sua <span>operação de blefaroplastia</span>.";

    form.innerHTML = `
      <div class="step is-active" data-key="${step.key}">
        <div class="field">
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

    if (step.type === "currency") {
      return `
        <label class="step-label" for="${step.key}">${escapeHtml(step.label)}<span class="required">*</span></label>
        <label class="currency-field">
          <span>R$</span>
          <input
            id="${step.key}"
            name="${step.key}"
            type="text"
            value="${escapeHtml(data[step.key] || "")}"
            placeholder="${escapeHtml(step.placeholder || "")}"
            autocomplete="off"
            inputmode="${escapeHtml(step.inputmode || "numeric")}"
            enterkeyhint="next"
            maxlength="20"
          />
        </label>
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
      input.focus({ preventScroll: true });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          handleNext();
        }
      });
      input.addEventListener("input", () => {
        if (step.type === "currency") input.value = maskCurrency(input.value);
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
      current += 1;
      render();
      return;
    }

    finish();
  }

  function validate(step, value) {
    if (step.type === "choice") return value ? "" : step.error;
    if (step.type === "currency") return value.replace(/\D/g, "").length >= 3 ? "" : step.error;
    if (step.key === "nome") return value.trim().length >= 2 ? "" : step.error;
    if (step.key === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? "" : step.error;
    return value.trim() ? "" : step.error;
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
      form_slug: "blefaroplastia-curto",
      fss_tracking: tracking,
    });

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    progressFill.style.width = "100%";
    progressLabel.textContent = "Concluído";
    title.textContent = "Resumo pronto para análise.";

    form.innerHTML = `
      <div class="success">
        <span class="accent-line" aria-hidden="true"></span>
        <h2>Resumo pronto.</h2>
        <p>Abra o WhatsApp para enviar a avaliação ao time da Hurtz.</p>
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
    const rows = [
      "Olá, Hurtz. Preenchi o diagnóstico de blefaroplastia:",
      "",
      `Você é dono de clínica? ${data.dono_clinica || ""}`,
      `Já realiza blefaroplastia? ${data.realiza_blefaroplastia || ""}`,
      `Quantas cirurgias vende por mês? ${data.cirurgias_mes || ""}`,
      `Qual o ticket médio? R$ ${data.ticket_medio || ""}`,
      `Possui secretária ou equipe comercial? ${data.equipe_comercial || ""}`,
      `Quanto pode investir mensalmente em anúncios? ${data.investimento_anuncios || ""}`,
    ];

    const trackingRows = Object.entries(tracking).map(([key, value]) => `${key}: ${value}`);
    if (trackingRows.length) rows.push("", "Origem:", ...trackingRows);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(rows.join("\n"))}`;
  }

  function maskCurrency(value) {
    const digits = value.replace(/\D/g, "").slice(0, 9);
    if (!digits) return "";
    return Number(digits).toLocaleString("pt-BR");
  }

  render();
})();
