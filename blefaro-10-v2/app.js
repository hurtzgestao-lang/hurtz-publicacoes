(() => {
  "use strict";
  if (window.lucide) window.lucide.createIcons();

  const form = document.querySelector("#lead-form");
  const panel = document.querySelector("#avaliacao");
  const status = document.querySelector("#form-status");
  const resume = document.querySelector("#whatsapp-resume");
  const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches
    ? "auto"
    : "smooth";
  function validateForm() {
    let firstInvalid;
    form.querySelectorAll("input, select").forEach((field) => {
      const value = field.value.trim();
      let message = value ? "" : "Preencha este campo para continuar.";
      if (field.name === "name" && value && value.length < 2)
        message = "Informe seu nome.";
      if (field.name === "email" && value && field.validity.typeMismatch)
        message = "Informe um e-mail válido.";
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    const data = new FormData(form);
    const value = (name) => String(data.get(name)).trim();
    const message = [
      "Olá! Quero agendar uma chamada gratuita sobre a Blefaro 10.",
      "",
      `Nome: ${value("name")}`,
      `E-mail: ${value("email")}`,
      `WhatsApp: ${value("phone")}`,
      `Clínica: ${value("clinic")}`,
      `Dono de clínica: ${value("owner")}`,
      `Faturamento mensal: ${value("revenue")}`,
    ].join("\n");
    const url = `https://wa.me/5594988082290?text=${encodeURIComponent(message)}`;
    resume.href = url;
    resume.hidden = false;
    status.textContent =
      "Sua solicitação está pronta. Envie a mensagem no WhatsApp para combinar o horário da chamada.";
    window.open(url, "_blank", "noopener,noreferrer");
  });

  form.addEventListener("input", () => {
    status.textContent = "";
    resume.hidden = true;
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
