const PASSWORD = "12345678";

const banks = [
  {
    id: "caixa",
    initials: "CX",
    name: "Caixa Econômica Federal",
    product: "Financiamento habitacional",
    finalLabel: "Recusado",
    finalClass: "declined",
    detail: "Recusado no financiamento da Caixa por política de crédito tradicional."
  },
  {
    id: "itau",
    initials: "IT",
    name: "Itaú",
    product: "Financiamento bancário",
    finalLabel: "Recusado",
    finalClass: "declined",
    detail: "Recusado no financiamento do Itaú por enquadramento de score e renda."
  },
  {
    id: "bradesco",
    initials: "BR",
    name: "Bradesco",
    product: "Financiamento bancário",
    finalLabel: "Recusado",
    finalClass: "declined",
    detail: "Recusado no financiamento do Bradesco por limite de comprometimento."
  },
  {
    id: "promove",
    initials: "PR",
    name: "Promove Crédito",
    product: "Crédito Promove",
    finalLabel: "Aprovado",
    finalClass: "approved",
    detail: "Aprovado no crédito da Promove com política flexível de aprovação."
  }
];

const app = document.querySelector("#app");
const state = {
  authenticated: sessionStorage.getItem("creditWizardAuth") === "ok",
  running: false,
  completed: false,
  activeIndex: -1,
  results: {},
  protocol: makeProtocol()
};

function moneyFromDigits(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits ? Number(digits) / 100 : 0;
}

function formatMoneyInput(value) {
  const amount = moneyFromDigits(value);
  if (!amount) return "";
  return amount.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function currency(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function makeProtocol() {
  const seed = Math.floor(100000 + Math.random() * 899999);
  return `CRD-${new Date().getFullYear()}-${seed}`;
}

function getFormData() {
  return {
    name: document.querySelector("#clientName")?.value.trim() || "",
    cpf: document.querySelector("#cpf")?.value.trim() || "",
    phone: document.querySelector("#phone")?.value.trim() || "",
    financingValue: moneyFromDigits(document.querySelector("#financingValue")?.value || ""),
    installments: Number(document.querySelector("#installments")?.value || 150),
    monthlyIncome: moneyFromDigits(document.querySelector("#monthlyIncome")?.value || ""),
    assetType: document.querySelector("#assetType")?.value || "Imóvel urbano"
  };
}

function maskCpf(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    .slice(0, 14);
}

function maskPhone(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
}

function render() {
  app.innerHTML = state.authenticated ? viewSystem() : viewLogin();
  bindEvents();
}

function viewLogin() {
  return `
    <section class="login">
      <form class="login-card" id="loginForm">
        <div class="login-mark">PC</div>
        <p class="kicker">Promove Crédito</p>
        <h1>Análise de Crédito</h1>
        <p class="subtitle">Ambiente interno de pré-análise bancária.</p>
        <div class="field" style="margin-top: 20px;">
          <label for="accessPassword">Senha de acesso</label>
          <input class="sr-only" name="username" type="text" autocomplete="username" value="promove-interno" tabindex="-1" aria-hidden="true" />
          <input id="accessPassword" name="accessPassword" type="password" autocomplete="current-password" autofocus />
          <p class="error" id="loginError"></p>
        </div>
        <div class="actions">
          <button class="btn btn-primary" type="submit">Entrar no sistema</button>
        </div>
      </form>
    </section>
  `;
}

function viewSystem() {
  return `
    <section class="shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">PC</div>
          <div>
            <div class="brand-name">Promove Crédito</div>
            <div class="brand-sub">Núcleo de análise bancária</div>
          </div>
        </div>
        <nav class="rail">
          <div class="rail-item active"><span class="rail-dot"></span>Cadastro do cliente</div>
          <div class="rail-item"><span class="rail-dot"></span>Financiamento</div>
          <div class="rail-item"><span class="rail-dot"></span>Matriz bancária</div>
          <div class="rail-item"><span class="rail-dot"></span>Crédito Promove</div>
        </nav>
      </aside>

      <div class="content">
        <header class="topbar">
          <div>
            <p class="kicker">Motor de crédito interno</p>
            <h1>Sistema de Análise de Crédito</h1>
            <p class="subtitle">Protocolo ${state.protocol} · ${new Date().toLocaleDateString("pt-BR")}</p>
          </div>
          <div class="chips">
            <span class="chip">SSL ativo</span>
            <span class="chip">Score bancário</span>
            <span class="chip">Crédito Promove</span>
          </div>
        </header>

        <div class="grid">
          <section class="card">
            <div class="card-head">
              <div>
                <h2 class="card-title">Dados da proposta</h2>
                <p class="card-caption">Cliente, renda e valor solicitado</p>
              </div>
            </div>
            <div class="card-body">
              <form id="creditForm">
                <div class="form-grid">
                  <div class="field full">
                    <label for="clientName">Nome do cliente</label>
                    <input id="clientName" name="clientName" autocomplete="name" placeholder="Nome completo" />
                  </div>
                  <div class="field">
                    <label for="cpf">CPF</label>
                    <input id="cpf" name="cpf" inputmode="numeric" autocomplete="off" placeholder="000.000.000-00" />
                  </div>
                  <div class="field">
                    <label for="phone">Telefone</label>
                    <input id="phone" name="phone" inputmode="tel" autocomplete="tel" placeholder="(00) 00000-0000" />
                  </div>
                  <div class="field has-prefix">
                    <label for="monthlyIncome">Renda declarada</label>
                    <div class="input-wrap">
                      <span class="prefix">R$</span>
                      <input id="monthlyIncome" name="monthlyIncome" inputmode="numeric" placeholder="0,00" />
                    </div>
                  </div>
                  <div class="field has-prefix">
                    <label for="financingValue">Valor do financiamento</label>
                    <div class="input-wrap">
                      <span class="prefix">R$</span>
                      <input id="financingValue" name="financingValue" inputmode="numeric" placeholder="0,00" />
                    </div>
                  </div>
                  <div class="field">
                    <label for="installments">Prazo</label>
                    <select id="installments" name="installments">
                      <option value="120">120 meses</option>
                      <option value="150" selected>150 meses</option>
                      <option value="180">180 meses</option>
                      <option value="240">240 meses</option>
                    </select>
                  </div>
                  <div class="field">
                    <label for="assetType">Tipo de bem</label>
                    <select id="assetType" name="assetType">
                      <option>Imóvel urbano</option>
                      <option>Imóvel rural</option>
                      <option>Veículo</option>
                      <option>Veículos pesados</option>
                      <option>Crédito rural</option>
                      <option>Capital de giro</option>
                    </select>
                  </div>
                </div>

                <div class="actions">
                  <button class="btn btn-primary" id="startAnalysis" type="submit">Iniciar análise bancária</button>
                  <button class="btn btn-secondary" id="resetAnalysis" type="button">Nova análise</button>
                  <button class="btn btn-secondary" id="printAnalysis" type="button" disabled>Imprimir dossiê</button>
                </div>
              </form>

              <div class="secure-strip">
                <span>Validação cadastral</span>
                <span>Consulta de matriz bancária</span>
                <span>Enquadramento automático Promove</span>
              </div>
            </div>
          </section>

          <section class="card analysis-shell">
            <div class="card-head">
              <div>
                <h2 class="card-title">Dossiê de crédito</h2>
                <p class="card-caption">Retorno por instituição financeira</p>
              </div>
            </div>
            <div class="card-body">
              <div class="client-file">
                <div>
                  <div class="file-label">Cliente em análise</div>
                  <p class="file-name" id="fileName">Aguardando cliente</p>
                  <div class="file-meta">
                    <span id="fileAmount">Valor não informado</span>
                    <span id="fileTerm">Prazo 150 meses</span>
                    <span id="fileAsset">Imóvel urbano</span>
                  </div>
                </div>
                <div class="score">
                  <div>
                    <strong id="scoreValue">--</strong>
                    <span>score</span>
                  </div>
                </div>
              </div>

              <div class="pipeline">
                <div class="pipeline-head">
                  <h3 class="pipeline-title">Análise de financiamento</h3>
                  <span class="pipeline-state" id="pipelineState">Aguardando dados</span>
                </div>
                <div class="bank-list" id="bankList">
                  ${banks.map((bank) => bankRow(bank)).join("")}
                </div>
              </div>

              <div class="result-box" id="resultBox">
                <div class="result-eyebrow">Crédito aprovado</div>
                <h3 class="result-title" id="resultTitle">Aprovado no crédito da Promove</h3>
                <div class="result-grid">
                  <div class="metric">
                    <span>Limite aprovado</span>
                    <strong id="approvedLimit">R$ 0,00</strong>
                  </div>
                  <div class="metric">
                    <span>Entrada estimada</span>
                    <strong id="entryValue">R$ 0,00</strong>
                  </div>
                  <div class="metric">
                    <span>Parcela referência</span>
                    <strong id="installmentValue">R$ 0,00</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function bankRow(bank) {
  const result = state.results[bank.id];
  const isRunning = state.activeIndex === banks.findIndex((item) => item.id === bank.id);
  const rowClass = result?.className || (isRunning ? "running" : "");
  const label = result?.label || (isRunning ? "Analisando" : "Pendente");
  const detail = result?.detail || bank.product;
  const dotClass = isRunning ? "loader-dot" : "status-dot";

  return `
    <div class="bank-row ${rowClass}" data-bank="${bank.id}">
      <div class="bank-icon">${bankLogo(bank.id, bank.name)}</div>
      <div>
        <div class="bank-name">${bank.name}</div>
        <div class="bank-detail">${detail}</div>
      </div>
      <span class="status-pill"><span class="${dotClass}"></span>${label}</span>
    </div>
  `;
}

function bankLogo(id, name) {
  return `<img class="bank-logo-img" src="./assets/logos/${id}.png" alt="Logo ${name}" loading="lazy" decoding="async" />`;
}

function bindEvents() {
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const password = document.querySelector("#accessPassword").value;
      const error = document.querySelector("#loginError");
      if (password === PASSWORD) {
        sessionStorage.setItem("creditWizardAuth", "ok");
        state.authenticated = true;
        render();
      } else {
        error.textContent = "Senha incorreta";
      }
    });
    return;
  }

  ["financingValue", "monthlyIncome"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("input", (event) => {
      event.target.value = formatMoneyInput(event.target.value);
      syncFile();
    });
  });

  document.querySelector("#cpf").addEventListener("input", (event) => {
    event.target.value = maskCpf(event.target.value);
  });

  document.querySelector("#phone").addEventListener("input", (event) => {
    event.target.value = maskPhone(event.target.value);
  });

  ["clientName", "installments", "assetType"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("input", syncFile);
    document.querySelector(`#${id}`).addEventListener("change", syncFile);
  });

  document.querySelector("#creditForm").addEventListener("submit", (event) => {
    event.preventDefault();
    runAnalysis();
  });

  document.querySelector("#resetAnalysis").addEventListener("click", resetAnalysis);
  document.querySelector("#printAnalysis").addEventListener("click", () => window.print());
  syncFile();
}

function syncFile() {
  const data = getFormData();
  document.querySelector("#fileName").textContent = data.name || "Aguardando cliente";
  document.querySelector("#fileAmount").textContent = data.financingValue
    ? `Solicitado ${currency(data.financingValue)}`
    : "Valor não informado";
  document.querySelector("#fileTerm").textContent = `Prazo ${data.installments || 150} meses`;
  document.querySelector("#fileAsset").textContent = data.assetType;
  document.querySelector("#scoreValue").textContent = data.name && data.financingValue ? "742" : "--";
}

async function runAnalysis() {
  const data = getFormData();
  if (!data.name || !data.financingValue || state.running) {
    return;
  }

  state.running = true;
  state.completed = false;
  state.activeIndex = -1;
  state.results = {};
  document.querySelector("#startAnalysis").disabled = true;
  document.querySelector("#printAnalysis").disabled = true;
  document.querySelector("#resultBox").classList.remove("show");
  updatePipeline("Análise iniciada", "running");

  for (let index = 0; index < banks.length; index += 1) {
    state.activeIndex = index;
    drawBanks();
    updatePipeline(`Consultando ${banks[index].name}`, "running");
    await wait(index === banks.length - 1 ? 980 : 760);
    state.results[banks[index].id] = {
      label: banks[index].finalLabel,
      className: banks[index].finalClass,
      detail: banks[index].detail
    };
    state.activeIndex = -1;
    drawBanks();
    await wait(260);
  }

  state.running = false;
  state.completed = true;
  updatePipeline("Crédito aprovado", "done");
  showResult(data);
  document.querySelector("#startAnalysis").disabled = false;
  document.querySelector("#printAnalysis").disabled = false;
}

function drawBanks() {
  document.querySelector("#bankList").innerHTML = banks.map((bank) => bankRow(bank)).join("");
}

function updatePipeline(text, className) {
  const el = document.querySelector("#pipelineState");
  el.textContent = text;
  el.className = `pipeline-state ${className || ""}`;
}

function showResult(data) {
  const entry = data.financingValue * 0.3;
  const funded = data.financingValue - entry;
  const installment = (funded * 2.5) / (data.installments || 150);
  document.querySelector("#resultTitle").textContent = `${data.name}: aprovado no crédito da Promove`;
  document.querySelector("#approvedLimit").textContent = currency(data.financingValue);
  document.querySelector("#entryValue").textContent = currency(entry);
  document.querySelector("#installmentValue").textContent = currency(installment);
  document.querySelector("#resultBox").classList.add("show");
}

function resetAnalysis() {
  state.running = false;
  state.completed = false;
  state.activeIndex = -1;
  state.results = {};
  state.protocol = makeProtocol();
  render();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

render();
