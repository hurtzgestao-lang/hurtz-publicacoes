/* @jsx React.createElement */
/* Hurtz Company — Deck Comercial · Sistema Cota Vendida
   Usa tokens do Design System (HURTZ_COLORS, LogoLockup, LogoSymbol vindos de MetaAd.jsx) */

const SC = window.HURTZ_COLORS;
const SLogoLockup = window.LogoLockup;
const SLogoSymbol = window.LogoSymbol;

const slideBase = {
  width: 1920, height: 1080, fontFamily: 'Inter, sans-serif',
  display: 'flex', flexDirection: 'column', position: 'relative',
  overflow: 'hidden',
};

/* ============================================================
   PRIMITIVAS
   ============================================================ */

function Eyebrow({ children, color = SC.brasa }) {
  return (
    <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.18em', color, textTransform: 'uppercase' }}>
      {children}
    </span>
  );
}

function AccentBar({ color = SC.brasa, w = 96, h = 3, mt = 32, mb = 40 }) {
  return <div style={{ width: w, height: h, background: color, margin: `${mt}px 0 ${mb}px` }} />;
}

function SlideFooter({ light = true, n, label }) {
  const c = light ? SC.pedra : 'rgba(245,242,236,0.5)';
  return (
    <div style={{
      position: 'absolute', left: 80, right: 80, bottom: 48,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 16, color: c, letterSpacing: '0.06em',
    }}>
      <SLogoSymbol size={22} color={light ? SC.carvao : SC.offwhite} />
      <span>HURTZ · {label || 'SISTEMA COTA VENDIDA'} · {n}</span>
    </div>
  );
}

function PainPoint({ text }) {
  return (
    <li style={{
      fontSize: 30, color: 'rgba(245,242,236,0.92)', padding: '20px 0 20px 56px',
      position: 'relative', borderBottom: '1px solid rgba(181,42,42,0.25)', lineHeight: 1.4,
    }}>
      <span style={{
        position: 'absolute', left: 0, top: 32, width: 32, height: 2, background: '#B52A2A',
      }} />
      {text}
    </li>
  );
}

function ClarityPoint({ text }) {
  return (
    <li style={{
      fontSize: 30, color: SC.carvao, padding: '20px 0 20px 56px',
      position: 'relative', borderBottom: `1px solid ${SC.areia}`, lineHeight: 1.4,
    }}>
      <span style={{
        position: 'absolute', left: 0, top: 32, width: 32, height: 2, background: '#3A6FBF',
      }} />
      {text}
    </li>
  );
}

/* Helper: linha de entregável já preço ============================== */
function brl(n) {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

/* ============================================================
   SLIDE 1 — CAPA
   ============================================================ */
function CapaSlide() {
  return (
    <section style={{
      ...slideBase, background: SC.carvao, padding: 96, color: SC.offwhite,
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SLogoLockup dark height={48} />
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(245,242,236,0.55)' }}>
          DECK COMERCIAL · 04 / 2026
        </span>
      </div>

      <div>
        <Eyebrow color="#FFFFFF">Operação de Aquisição</Eyebrow>
        <AccentBar color={SC.brasa} />
        <h1 style={{ fontSize: 200, fontWeight: 700, lineHeight: 0.9, margin: 0, letterSpacing: '-0.02em' }}>
          Sistema<br/>Cota Vendida.
        </h1>
        <p style={{ fontSize: 32, color: 'rgba(245,242,236,0.7)', marginTop: 48, maxWidth: 1200, lineHeight: 1.45 }}>
          Aquisição, qualificação e entrega de leads quentes para representantes de consórcio.
        </p>
      </div>

      <div style={{ fontSize: 14, color: 'rgba(245,242,236,0.45)', letterSpacing: '0.16em' }}>
        HURTZ COMPANY · PARAUAPEBAS, PA
      </div>
    </section>
  );
}

/* ============================================================
   SLIDE 2 — O CENÁRIO HOJE (vermelho · escuro · dor)
   ============================================================ */
function CenarioHojeSlide() {
  const dores = [
    'Você queima R$5k em anúncio e recebe 200 nomes que nem sabem o que é consórcio.',
    'Time gasta o dia ligando pra lead frio. Fecha 1 em cada 50. E culpa a equipe.',
    'Você não enxerga o ROI. Não sabe quanto entrou, quanto fechou, quanto sobrou.',
    'Já trocou 3 agências. A história sempre se repete: promessa, decepção, fim de contrato.',
    'Cada vendedor segue o critério dele. Sem padrão, sem pipeline, sem previsibilidade.',
    'Você cresce e o problema cresce junto. Mais gente ligando pra mais lead ruim.',
    'Fim do mês chega e você torce pela meta, não calcula.',
  ];
  return (
    <section style={{
      ...slideBase, background: '#1A0808', padding: '96px 96px 120px',
      backgroundImage: 'radial-gradient(circle at 20% 0%, rgba(181,42,42,0.18) 0%, transparent 55%)',
    }}>
      <Eyebrow color="#E26A6A">02 · O CENÁRIO HOJE</Eyebrow>
      <AccentBar color="#B52A2A" />
      <h2 style={{ fontSize: 96, fontWeight: 700, color: SC.offwhite, margin: 0, lineHeight: 1.0, letterSpacing: '-0.01em', maxWidth: 1500 }}>
        A operação que<br/>te consome.
      </h2>
      <ul style={{ marginTop: 64, padding: 0, listStyle: 'none', maxWidth: 1700 }}>
        {dores.map(d => <PainPoint key={d} text={d} />)}
      </ul>
      <SlideFooter light={false} n="02" />
    </section>
  );
}

/* ============================================================
   SLIDE 3 — COMO PODERIA SER (azul · clareza)
   ============================================================ */
function ComoPoderiaSerSlide() {
  const claros = [
    'Cada lead chega com nome, bem desejado, valor, entrada, renda e urgência. Pronto pra ligar.',
    'Lead já entra no CRM marcado: quente, morno ou frio. O time sabe pra quem ligar primeiro.',
    'Você abre o painel e vê tudo: investido, leads, contatos, negociações, fechados, ROI — ao vivo.',
    'Time fecha 3 a 5x mais. Porque liga pra quem já decidiu comprar.',
    'A operação roda sozinha. Você não cobra criativo, não ajusta campanha, não monta planilha.',
    'Cresce sem caos. Dobra investimento, dobra resultado, sem dobrar dor de cabeça.',
    'Fim de mês fica matemático. Número entra, número sai, decisão clara.',
  ];
  return (
    <section style={{
      ...slideBase, background: SC.offwhite, padding: '96px 96px 120px',
      backgroundImage: 'radial-gradient(circle at 80% 0%, rgba(58,111,191,0.10) 0%, transparent 55%)',
    }}>
      <Eyebrow color="#3A6FBF">03 · COMO PODERIA SER</Eyebrow>
      <AccentBar color="#3A6FBF" />
      <h2 style={{ fontSize: 96, fontWeight: 700, color: SC.carvao, margin: 0, lineHeight: 1.0, letterSpacing: '-0.01em', maxWidth: 1500 }}>
        A operação que<br/>trabalha por você.
      </h2>
      <ul style={{ marginTop: 64, padding: 0, listStyle: 'none', maxWidth: 1700 }}>
        {claros.map(c => <ClarityPoint key={c} text={c} />)}
      </ul>
      <SlideFooter n="03" />
    </section>
  );
}

/* ============================================================
   SLIDE 4 — METODOLOGIA (diagrama de jornada)
   ============================================================ */
function MetodologiaSlide() {
  const fases = [
    { n: '01', t: 'CAPTAÇÃO', d: 'Método Hurtz de Criativos: vídeo de bem real + overlay financeiro. Sem usar a palavra "consórcio".' },
    { n: '02', t: 'QUALIFICAÇÃO', d: 'Lead simula o crédito numa página inteligente. Preenche bem, valor, entrada, renda e urgência.' },
    { n: '03', t: 'CLASSIFICAÇÃO', d: 'Sistema calcula a temperatura automaticamente: Quente, Morno ou Frio. Scoring antes do vendedor.' },
    { n: '04', t: 'ENTREGA', d: 'Lead Card no WhatsApp com ficha completa. Entra no CRM com tags e ação recomendada.' },
  ];
  const klt = [
    { fase: 'CONHECER', subtitulo: 'Apresenta a oportunidade. Quebra o desconhecimento.' },
    { fase: 'GOSTAR', subtitulo: 'Prova social, casos reais, depoimentos. Cria afinidade.' },
    { fase: 'CONFIAR', subtitulo: 'Oferta direta. Chamada pra simulação. Lead vem decidido.' },
  ];
  return (
    <section style={{ ...slideBase, background: SC.offwhite, padding: '80px 96px 120px' }}>
      <Eyebrow>04 · NOSSA METODOLOGIA</Eyebrow>
      <AccentBar mt={24} mb={32} />
      <h2 style={{ fontSize: 72, fontWeight: 700, color: SC.carvao, margin: 0, lineHeight: 1.0, letterSpacing: '-0.01em' }}>
        4 fases que transformam <span style={{ color: SC.brasa }}>tráfego em fechamento.</span>
      </h2>

      {/* Linha do tempo - 4 fases */}
      <div style={{ marginTop: 56, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 36, left: 30, right: 30, height: 2, background: SC.areia }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, position: 'relative' }}>
          {fases.map((f, i) => (
            <div key={f.n}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%', background: SC.brasa, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 700, letterSpacing: '0.04em',
                boxShadow: `0 0 0 8px ${SC.offwhite}`,
              }}>{f.n}</div>
              <div style={{ marginTop: 24, fontSize: 22, fontWeight: 700, letterSpacing: '0.16em', color: SC.carvao, textTransform: 'uppercase' }}>
                {f.t}
              </div>
              <p style={{ marginTop: 12, fontSize: 18, lineHeight: 1.5, color: SC.grafite, maxWidth: 380 }}>
                {f.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Funil KLT - 3 fases */}
      <div style={{ marginTop: 64, padding: 40, background: '#FFFFFF', border: `1.5px solid ${SC.areia}`, borderRadius: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', color: SC.brasa, textTransform: 'uppercase' }}>
              Funil KLT — dentro da fase de Captação
            </span>
            <h3 style={{ fontSize: 28, fontWeight: 700, color: SC.carvao, margin: '8px 0 0' }}>
              Cada lead consome a história inteira antes de chegar.
            </h3>
          </div>
          <div style={{ fontSize: 14, color: SC.pedra, letterSpacing: '0.12em' }}>3 FASES SEQUENCIAIS</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 16 }}>
          {klt.map((k, i) => (
            <div key={k.fase} style={{
              padding: 24, background: SC.offwhite, borderLeft: `4px solid ${SC.brasa}`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: SC.pedra, letterSpacing: '0.18em' }}>
                FASE {i + 1}
              </div>
              <div style={{ fontSize: 30, fontWeight: 700, color: SC.carvao, marginTop: 4 }}>{k.fase}</div>
              <div style={{ fontSize: 16, color: SC.grafite, marginTop: 8, lineHeight: 1.45 }}>{k.subtitulo}</div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter n="04" />
    </section>
  );
}

/* ============================================================
   ENTREGÁVEL — base reutilizável
   ============================================================ */
function DeliverableSlide({ n, eyebrow, title, lede, body, side, label = 'ENTREGÁVEL' }) {
  return (
    <section style={{ ...slideBase, background: SC.offwhite, padding: '96px 96px 120px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Eyebrow>{n} · {eyebrow}</Eyebrow>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.20em', color: SC.pedra, textTransform: 'uppercase' }}>
          {label}
        </span>
      </div>
      <AccentBar mt={24} mb={32} />
      <h2 style={{ fontSize: 80, fontWeight: 700, color: SC.carvao, margin: 0, lineHeight: 1.0, letterSpacing: '-0.01em', maxWidth: 1500 }}>
        {title}
      </h2>
      {lede && (
        <p style={{ fontSize: 28, color: SC.grafite, marginTop: 32, maxWidth: 1500, lineHeight: 1.45 }}>{lede}</p>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: side ? '1.2fr 1fr' : '1fr', gap: 64, marginTop: 56 }}>
        <div>{body}</div>
        {side}
      </div>
      <SlideFooter n={n} />
    </section>
  );
}

function Bullet({ children }) {
  return (
    <li style={{
      fontSize: 22, color: SC.carvao, padding: '14px 0 14px 36px',
      position: 'relative', lineHeight: 1.5, borderBottom: `1px solid ${SC.areia}`,
    }}>
      <span style={{ position: 'absolute', left: 0, top: 24, width: 18, height: 2, background: SC.brasa }} />
      {children}
    </li>
  );
}

/* ============================================================
   SLIDE 5 — Gestão de Tráfego Meta Ads
   ============================================================ */
function EntregaTrafegoSlide() {
  return (
    <DeliverableSlide
      n="05"
      eyebrow="ENTREGÁVEL 1"
      title="Gestão de Tráfego Meta Ads."
      lede="Operação dedicada de Meta Ads, com método proprietário e ajuste ativo todos os dias."
      body={
        <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
          <Bullet>50 leads qualificados por dia. Volume planejado por carteira no briefing.</Bullet>
          <Bullet>Método Hurtz de Criativos rodando do dia 1 — propriedade intelectual da casa.</Bullet>
          <Bullet>Otimização diária de público, criativo e orçamento. Não é monitoramento passivo.</Bullet>
          <Bullet>Gestor dedicado por carteira. Ajuste por mensagem direta, sem chamado.</Bullet>
        </ul>
      }
      side={
        <div style={{ background: SC.carvao, color: SC.offwhite, padding: 48, borderRadius: 4 }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(245,242,236,0.7)' }}>
            VOLUME GARANTIDO NO BRIEFING
          </div>
          <div style={{ fontSize: 140, fontWeight: 700, lineHeight: 1, marginTop: 24, letterSpacing: '-0.02em' }}>
            50<span style={{ fontSize: 56, color: SC.brasa }}>/dia</span>
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, marginTop: 8, color: SC.brasa }}>
            1.500/mês
          </div>
          <div style={{ marginTop: 32, fontSize: 16, color: 'rgba(245,242,236,0.6)', lineHeight: 1.5 }}>
            Garantia: se não bater o mínimo combinado, trabalhamos de graça até bater.
          </div>
        </div>
      }
    />
  );
}

/* ============================================================
   SLIDE 6 — Método Hurtz de Criativos
   ============================================================ */
function EntregaCriativosSlide() {
  return (
    <DeliverableSlide
      n="06"
      eyebrow="ENTREGÁVEL 2"
      title={<>O criativo que converte <span style={{ color: SC.brasa }}>3 a 5x mais.</span></>}
      lede="Vídeo do bem real (imóvel, veículo, maquinário) com overlay de âncora financeira. A palavra 'consórcio' nunca entra."
      body={
        <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
          <Bullet>Vídeo de bem real captado em campo — o lead vê o que ele quer comprar, não um anúncio.</Bullet>
          <Bullet>Overlay financeiro fixo: cidade · crédito · entrada · parcela. Linguagem de "crédito para imóvel".</Bullet>
          <Bullet>Headline de impacto, sem termo técnico. CTA único: simular crédito.</Bullet>
          <Bullet>Propriedade intelectual da Hurtz. Roda só na nossa operação — não é replicado em agência.</Bullet>
        </ul>
      }
      side={
        <div style={{
          height: 540, maxWidth: 460, background: SC.offwhite, border: `1.5px solid ${SC.areia}`,
          padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{ fontSize: 12, letterSpacing: '0.18em', fontWeight: 700, color: SC.pedra, textTransform: 'uppercase' }}>
            MOCKUP · CRIATIVO META ADS
          </div>
          <div style={{
            background: SC.carvao, color: SC.offwhite, padding: 22, borderRadius: 4,
            flex: 1, marginTop: 14, marginBottom: 14,
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          }}>
            <div style={{ fontSize: 13, color: 'rgba(245,242,236,0.6)', letterSpacing: '0.10em' }}>PARAUAPEBAS · PA</div>
            <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.1, marginTop: 8 }}>
              Crédito de<br/>R$ 350.000<br/>para imóvel.
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 14, fontSize: 14 }}>
              <div><div style={{ color: 'rgba(245,242,236,0.55)' }}>Entrada</div><div style={{ fontWeight: 700, color: SC.brasa, fontSize: 20 }}>R$ 12 mil</div></div>
              <div><div style={{ color: 'rgba(245,242,236,0.55)' }}>Parcela</div><div style={{ fontWeight: 700, color: SC.brasa, fontSize: 20 }}>R$ 1.890</div></div>
            </div>
          </div>
          <div style={{
            background: SC.brasa, color: '#fff', padding: '12px 16px', textAlign: 'center',
            fontWeight: 700, letterSpacing: '0.04em', borderRadius: 4, fontSize: 15,
          }}>
            SIMULAR MEU CRÉDITO →
          </div>
        </div>
      }
    />
  );
}

/* ============================================================
   SLIDE 7 — Funil KLT Completo
   ============================================================ */
function EntregaFunilKLTSlide() {
  const fases = [
    { n: 'K', titulo: 'CONHECER', sub: 'O lead descobre que existe o caminho.', tipo: 'Anúncio inicial', detalhe: 'Apresenta o tipo de bem e a oportunidade. Sem oferta direta.' },
    { n: 'L', titulo: 'GOSTAR', sub: 'O lead se identifica com a história.', tipo: 'Anúncio de prova', detalhe: 'Casos reais de clientes, depoimentos curtos, bens entregues.' },
    { n: 'T', titulo: 'CONFIAR', sub: 'O lead decide simular agora.', tipo: 'Anúncio de oferta', detalhe: 'Chamada direta para a página de simulação financeira.' },
  ];
  return (
    <DeliverableSlide
      n="07"
      eyebrow="ENTREGÁVEL 3"
      title="Funil KLT em 3 fases."
      lede="Sequência de vídeos que conduz o lead do desconhecimento até a decisão de simular. Cada fase tem público, criativo e objetivo próprios."
      body={
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 8 }}>
          {fases.map((f, i) => (
            <div key={f.n} style={{
              background: '#FFFFFF', border: `1.5px solid ${SC.areia}`, borderRadius: 4,
              padding: 28, position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -22, left: 24, width: 44, height: 44, borderRadius: 4,
                background: SC.carvao, color: SC.offwhite, fontWeight: 700, fontSize: 22,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{f.n}</div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: SC.pedra, marginTop: 16 }}>
                FASE {i + 1}
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: SC.carvao, marginTop: 4 }}>{f.titulo}</div>
              <div style={{ fontSize: 18, color: SC.grafite, marginTop: 10, lineHeight: 1.4 }}>{f.sub}</div>
              <div style={{ height: 1, background: SC.areia, margin: '20px 0' }} />
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', color: SC.brasa, textTransform: 'uppercase' }}>{f.tipo}</div>
              <div style={{ fontSize: 16, color: SC.carvao, marginTop: 6, lineHeight: 1.5 }}>{f.detalhe}</div>
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ============================================================
   SLIDE 8 — Qualificador Inteligente com Scoring
   ============================================================ */
function EntregaQualificadorSlide() {
  const temps = [
    { cor: SC.resultado, nome: 'QUENTE', regra: 'Tem entrada + quer agora + renda compatível', acao: 'Ligar em 30 minutos' },
    { cor: SC.brasa, nome: 'MORNO', regra: 'Tem entrada OU quer comprar em 1-3 meses', acao: 'Ligar no mesmo dia' },
    { cor: SC.informacao, nome: 'FRIO', regra: 'Sem entrada, só pesquisando', acao: 'Entra em fluxo de nutrição' },
  ];
  return (
    <DeliverableSlide
      n="08"
      eyebrow="ENTREGÁVEL 4"
      title="Qualificador Inteligente com Scoring."
      lede="Página de simulação financeira onde o lead se qualifica sozinho. O sistema calcula a temperatura antes do vendedor olhar a ficha."
      body={
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {temps.map(t => (
            <div key={t.nome} style={{
              background: '#FFFFFF', borderTop: `4px solid ${t.cor}`,
              border: `1.5px solid ${SC.areia}`, padding: 28, borderRadius: 4,
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', color: t.cor }}>{t.nome}</div>
              <div style={{ fontSize: 60, fontWeight: 700, color: SC.carvao, marginTop: 8, lineHeight: 1 }}>
                {t.nome === 'QUENTE' ? '🔥' : t.nome === 'MORNO' ? '◐' : '○'}
              </div>
              <div style={{ height: 1, background: SC.areia, margin: '20px 0' }} />
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', color: SC.pedra }}>REGRA</div>
              <div style={{ fontSize: 18, color: SC.carvao, marginTop: 6, lineHeight: 1.45 }}>{t.regra}</div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', color: SC.pedra, marginTop: 18 }}>AÇÃO</div>
              <div style={{ fontSize: 18, color: SC.carvao, marginTop: 6, lineHeight: 1.45, fontWeight: 700 }}>{t.acao}</div>
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ============================================================
   SLIDE 9 — Lead Card Automático no WhatsApp
   ============================================================ */
function EntregaLeadCardSlide() {
  return (
    <DeliverableSlide
      n="09"
      eyebrow="ENTREGÁVEL 5"
      title="Lead Card no WhatsApp do vendedor."
      lede="O time recebe a ficha completa antes da primeira ligação. Ninguém liga no escuro."
      body={
        <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
          <Bullet>Disparo automático no WhatsApp do vendedor responsável, segundos após a qualificação.</Bullet>
          <Bullet>Ficha pronta: nome, telefone, tipo de bem, valor, entrada, renda, urgência e ação recomendada.</Bullet>
          <Bullet>Vendedor abre, lê 15 segundos e liga sabendo exatamente o que oferecer.</Bullet>
          <Bullet>Sem CRM mal alimentado, sem planilha, sem cadeia de e-mail.</Bullet>
        </ul>
      }
      side={
        <div style={{
          background: '#075E54', padding: 24, borderRadius: 8, color: '#fff',
          maxWidth: 480, marginLeft: 'auto',
        }}>
          <div style={{ background: '#DCF8C6', color: SC.carvao, padding: 20, borderRadius: 8, fontSize: 16, lineHeight: 1.5 }}>
            <div style={{ fontWeight: 700, color: SC.brasa, fontSize: 14, letterSpacing: '0.12em' }}>🔥 LEAD QUENTE</div>
            <div style={{ marginTop: 12, fontWeight: 700, fontSize: 18 }}>Carlos Mendes</div>
            <div>(94) 9 9123-4567</div>
            <div style={{ height: 1, background: 'rgba(0,0,0,0.1)', margin: '12px 0' }} />
            <div><strong>Bem:</strong> Imóvel</div>
            <div><strong>Valor:</strong> R$ 350.000</div>
            <div><strong>Entrada:</strong> R$ 12.000</div>
            <div><strong>Renda:</strong> R$ 9.500</div>
            <div><strong>Urgência:</strong> próximos 30 dias</div>
            <div style={{ height: 1, background: 'rgba(0,0,0,0.1)', margin: '12px 0' }} />
            <div style={{ fontWeight: 700, color: SC.brasa }}>Ação: ligar em 30 min. Oferecer R$ 350k em 200 meses.</div>
            <div style={{ fontSize: 11, color: SC.pedra, marginTop: 12, textAlign: 'right' }}>14:32 ✓✓</div>
          </div>
        </div>
      }
    />
  );
}

/* ============================================================
   SLIDE 10 — CRM Configurado com Pipeline Visual
   ============================================================ */
function EntregaCRMSlide() {
  const colunas = [
    { nome: 'NOVO', cor: SC.pedra, qt: 124 },
    { nome: 'CONTATADO', cor: SC.informacao, qt: 47 },
    { nome: 'NEGOCIAÇÃO', cor: SC.brasa, qt: 18 },
    { nome: 'FECHOU', cor: SC.resultado, qt: 6 },
    { nome: 'PERDIDO', cor: SC.critico, qt: 11 },
  ];
  return (
    <DeliverableSlide
      n="10"
      eyebrow="ENTREGÁVEL 6"
      title="CRM com pipeline visual."
      lede="Cada lead entra automaticamente, etiquetado e posicionado. Sem digitação, sem planilha, sem dúvida."
      body={
        <div>
          <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
            <Bullet>5 etapas visuais: Novo → Contatado → Negociação → Fechou → Perdido.</Bullet>
            <Bullet>Tags automáticas por temperatura, tipo de bem, faixa de valor e origem da campanha.</Bullet>
            <Bullet>Cada vendedor enxerga só o que é dele. Gestor enxerga o painel inteiro.</Bullet>
            <Bullet>Pronto pra usar do dia 1. Sem consultoria de implantação à parte.</Bullet>
          </ul>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 32 }}>
            {colunas.map(c => (
              <div key={c.nome} style={{ background: '#FFFFFF', border: `1.5px solid ${SC.areia}`, borderTop: `4px solid ${c.cor}`, padding: 16, borderRadius: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: c.cor }}>{c.nome}</div>
                <div style={{ fontSize: 38, fontWeight: 700, color: SC.carvao, marginTop: 4, lineHeight: 1 }}>{c.qt}</div>
                <div style={{ fontSize: 12, color: SC.pedra, marginTop: 4 }}>leads</div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

/* ============================================================
   SLIDE 11 — Dashboard de ROI Ao Vivo
   ============================================================ */
function EntregaDashboardSlide() {
  const metricas = [
    { lbl: 'INVESTIDO', val: 'R$ 14.820', sub: 'Mês atual' },
    { lbl: 'LEADS TOTAIS', val: '1.486', sub: '+8% vs. mês anterior' },
    { lbl: 'QUENTES', val: '312', sub: '21% do total', cor: SC.resultado },
    { lbl: 'NEGOCIAÇÃO', val: '47', sub: 'Pipeline ativo' },
    { lbl: 'FECHADOS', val: '11', sub: 'R$ 4,2M em vendas' },
    { lbl: 'ROI', val: '283×', sub: 'Vendas ÷ investido', cor: SC.brasa },
  ];
  return (
    <DeliverableSlide
      n="11"
      eyebrow="ENTREGÁVEL 7"
      title="Dashboard de ROI ao vivo."
      lede="Painel único com tudo que importa. Atualizado em tempo real. Você decide olhando número, não torcendo."
      body={
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {metricas.map(m => (
            <div key={m.lbl} style={{
              background: '#FFFFFF', border: `1.5px solid ${SC.areia}`, padding: 24, borderRadius: 4,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', color: SC.pedra }}>{m.lbl}</div>
              <div style={{ fontSize: 56, fontWeight: 700, color: m.cor || SC.carvao, marginTop: 8, lineHeight: 1, letterSpacing: '-0.01em' }}>
                {m.val}
              </div>
              <div style={{ fontSize: 14, color: SC.grafite, marginTop: 8 }}>{m.sub}</div>
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ============================================================
   SLIDE 12 — Onboarding em 10 Dias Úteis
   ============================================================ */
function EntregaOnboardingSlide() {
  const dias = [
    { d: 'D1–D2', t: 'BRIEFING', desc: 'Carteira, bens, ticket médio, perfil de cliente. Volume mínimo combinado.' },
    { d: 'D3–D4', t: 'PRODUÇÃO', desc: 'Captação dos vídeos de bem real e construção dos criativos.' },
    { d: 'D5–D6', t: 'SETUP CRM', desc: 'Pipeline, tags, distribuição entre vendedores, dashboard de ROI.' },
    { d: 'D7–D8', t: 'QUALIFICADOR', desc: 'Página de simulação no ar. Scoring calibrado pra carteira.' },
    { d: 'D9–D10', t: 'NO AR', desc: 'Anúncios publicados. Funil KLT rodando. Primeiros leads chegando.' },
  ];
  return (
    <DeliverableSlide
      n="12"
      eyebrow="ENTREGÁVEL 8"
      title="Onboarding em 10 dias úteis."
      lede="Do contrato assinado ao primeiro anúncio no ar. Cronograma definido, datas combinadas, gestor dedicado do dia 1."
      body={
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 8 }}>
          {dias.map((d, i) => (
            <div key={d.d} style={{
              background: i === 4 ? SC.brasa : '#FFFFFF',
              color: i === 4 ? '#fff' : SC.carvao,
              border: i === 4 ? 'none' : `1.5px solid ${SC.areia}`,
              padding: 24, borderRadius: 4,
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.16em', color: i === 4 ? 'rgba(255,255,255,0.85)' : SC.pedra }}>
                {d.d}
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, marginTop: 12, letterSpacing: '0.04em' }}>{d.t}</div>
              <div style={{ fontSize: 15, marginTop: 12, lineHeight: 1.5, color: i === 4 ? 'rgba(255,255,255,0.92)' : SC.grafite }}>
                {d.desc}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ============================================================
   TORRE DE PREÇO — base reutilizável
   ============================================================ */
const TORRE_ITENS = [
  { nome: 'Gestão de Tráfego Meta Ads',           preco: 2500, sub: 'Operação dedicada · ajuste diário' },
  { nome: 'Método Hurtz de Criativos',            preco: 1800, sub: 'Vídeo de bem real + overlay financeiro' },
  { nome: 'Funil KLT Completo (3 fases)',         preco: 1200, sub: 'Conhecer · Gostar · Confiar' },
  { nome: 'Qualificador Inteligente com Scoring', preco: 800,  sub: 'Lead se qualifica sozinho' },
  { nome: 'Lead Card no WhatsApp',                preco: 500,  sub: 'Ficha completa antes da ligação' },
  { nome: 'CRM Configurado com Pipeline',         preco: 700,  sub: '5 etapas · tags automáticas' },
  { nome: 'Dashboard de ROI Ao Vivo',             preco: 600,  sub: '6 métricas · tempo real' },
  { nome: 'Onboarding em 10 Dias Úteis',          preco: 600,  sub: 'Do contrato ao anúncio no ar' },
];

function TorreSlide({ n, ate, total, finalReveal = false }) {
  const itens = TORRE_ITENS.slice(0, ate);
  const acumulado = itens.reduce((acc, x) => acc + x.preco, 0);
  return (
    <section style={{ ...slideBase, background: SC.offwhite, padding: '48px 80px 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <Eyebrow>{n} · TORRE DE VALOR</Eyebrow>
          <AccentBar mt={16} mb={16} />
          <h2 style={{ fontSize: 44, fontWeight: 700, color: SC.carvao, margin: 0, lineHeight: 1.0, letterSpacing: '-0.01em' }}>
            Quanto custaria <span style={{ color: SC.brasa }}>contratado separado.</span>
          </h2>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', color: SC.pedra }}>
            ITENS SOMADOS
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, color: SC.brasa, lineHeight: 1, marginTop: 6 }}>
            {ate}<span style={{ fontSize: 24, color: SC.pedra }}>/8</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18, background: '#FFFFFF', border: `1.5px solid ${SC.areia}`, borderRadius: 4, overflow: 'hidden' }}>
        {TORRE_ITENS.map((item, i) => {
          const ativo = i < ate;
          const novo = i === ate - 1;
          return (
            <div key={item.nome} style={{
              display: 'grid', gridTemplateColumns: '48px 1fr auto',
              alignItems: 'center', gap: 16, padding: '10px 24px',
              borderBottom: i < TORRE_ITENS.length - 1 ? `1px solid ${SC.areia}` : 'none',
              opacity: ativo ? 1 : 0.25,
              background: novo ? 'rgba(192,96,24,0.06)' : 'transparent',
              borderLeft: novo ? `4px solid ${SC.brasa}` : '4px solid transparent',
            }}>
              <div style={{
                fontSize: 14, fontWeight: 700, color: ativo ? SC.brasa : SC.pedra, letterSpacing: '0.10em',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: SC.carvao, lineHeight: 1.2 }}>{item.nome}</div>
                <div style={{ fontSize: 12, color: SC.grafite, marginTop: 2 }}>{item.sub}</div>
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: ativo ? SC.carvao : SC.pedra, fontVariantNumeric: 'tabular-nums' }}>
                R$ {brl(item.preco)}<span style={{ fontSize: 13, color: SC.pedra, fontWeight: 400 }}>/mês</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 24px', background: SC.carvao, color: '#fff', borderRadius: 4,
      }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(245,242,236,0.7)' }}>
          ACUMULADO
        </div>
        <div style={{ fontSize: 38, fontWeight: 700, color: SC.brasa, fontVariantNumeric: 'tabular-nums' }}>
          R$ {brl(acumulado)}<span style={{ fontSize: 16, color: 'rgba(245,242,236,0.7)', fontWeight: 400 }}>/mês</span>
        </div>
      </div>

      {finalReveal && (
        <div style={{
          marginTop: 12, padding: '14px 24px', background: SC.brasa, color: '#fff', borderRadius: 4,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.04em', maxWidth: 1100 }}>
            Com 70% de desconto, seu investimento hoje seria de
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
            R$ 4.000<span style={{ fontSize: 16, opacity: 0.85, fontWeight: 400 }}>/mês</span>
          </div>
        </div>
      )}

      <SlideFooter n={n} label="TORRE DE VALOR" />
    </section>
  );
}

function TorrePreco1() { return <TorreSlide n="13" ate={1} />; }
function TorrePreco2() { return <TorreSlide n="14" ate={2} />; }
function TorrePreco3() { return <TorreSlide n="15" ate={3} />; }
function TorrePreco4() { return <TorreSlide n="16" ate={4} />; }
function TorrePreco5() { return <TorreSlide n="17" ate={5} />; }
function TorrePreco6() { return <TorreSlide n="18" ate={6} />; }
function TorrePreco7() { return <TorreSlide n="19" ate={7} />; }
function TorrePreco8() { return <TorreSlide n="20" ate={8} finalReveal />; }

/* ============================================================
   SLIDE 21 — VALOR DO PROGRAMA
   ============================================================ */
function ValorProgramaSlide() {
  return (
    <section style={{ ...slideBase, background: SC.offwhite, padding: '96px 96px 120px' }}>
      <Eyebrow>21 · VALOR DO PROGRAMA</Eyebrow>
      <AccentBar mt={24} mb={32} />
      <h2 style={{ fontSize: 88, fontWeight: 700, color: SC.carvao, margin: 0, lineHeight: 1.0, letterSpacing: '-0.01em' }}>
        Tudo dentro. Um valor.
      </h2>
      <p style={{ fontSize: 28, color: SC.grafite, marginTop: 32, maxWidth: 1500, lineHeight: 1.45 }}>
        Os 8 entregáveis acima — sem upsell, sem taxa de setup, sem mensalidade adicional por bônus.
      </p>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56 }}>
        <div style={{ background: '#FFFFFF', border: `1.5px solid ${SC.areia}`, borderRadius: 4, padding: 40 }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', color: SC.brasa, textTransform: 'uppercase' }}>
            INCLUÍDO NO PROGRAMA
          </div>
          <ul style={{ padding: 0, listStyle: 'none', margin: '24px 0 0' }}>
            {TORRE_ITENS.map(it => (
              <li key={it.nome} style={{
                fontSize: 19, padding: '14px 0 14px 32px', position: 'relative',
                borderBottom: `1px solid ${SC.areia}`, color: SC.carvao, lineHeight: 1.4,
              }}>
                <span style={{ position: 'absolute', left: 0, top: 22, width: 14, height: 2, background: SC.brasa }} />
                {it.nome}
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          background: SC.carvao, color: SC.offwhite, padding: 48, borderRadius: 4,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', color: SC.brasa }}>
            INVESTIMENTO
          </div>
          <div style={{ fontSize: 144, fontWeight: 700, lineHeight: 1, marginTop: 16, letterSpacing: '-0.02em' }}>
            R$ 2.500
          </div>
          <div style={{ fontSize: 28, color: 'rgba(245,242,236,0.75)', marginTop: 4 }}>por mês · tudo dentro</div>
          <div style={{ height: 1, background: 'rgba(245,242,236,0.15)', margin: '32px 0' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 16 }}>
            <div><div style={{ color: 'rgba(245,242,236,0.55)' }}>Setup</div><div style={{ fontWeight: 700, marginTop: 4 }}>R$ 0 · incluso</div></div>
            <div><div style={{ color: 'rgba(245,242,236,0.55)' }}>Bônus</div><div style={{ fontWeight: 700, marginTop: 4 }}>R$ 0 · todos inclusos</div></div>
            <div><div style={{ color: 'rgba(245,242,236,0.55)' }}>Contrato</div><div style={{ fontWeight: 700, marginTop: 4 }}>3 meses</div></div>
            <div><div style={{ color: 'rgba(245,242,236,0.55)' }}>Garantia</div><div style={{ fontWeight: 700, marginTop: 4 }}>Volume ou trabalha de graça</div></div>
          </div>
        </div>
      </div>

      <SlideFooter n="21" />
    </section>
  );
}

/* ============================================================
   SLIDE 22 — REVELAÇÃO DO PREÇO REAL (clique pra revelar)
   ============================================================ */
function PrecoRealSlide() {
  const [revealed, setRevealed] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const stage = document.querySelector('deck-stage');
    if (!stage) return;
    const handler = (e) => {
      if (e.detail && e.detail.slide === ref.current) {
        setRevealed(false);
      }
    };
    stage.addEventListener('slidechange', handler);
    return () => stage.removeEventListener('slidechange', handler);
  }, []);

  return (
    <section
      ref={ref}
      onClick={() => setRevealed(true)}
      style={{
        ...slideBase, background: SC.offwhite, padding: 0, cursor: 'pointer',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>

        {/* Lado esquerdo — valor de mercado */}
        <div style={{
          padding: '96px 80px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderRight: `2px solid ${SC.areia}`, background: SC.offwhite,
          position: 'relative',
        }}>
          <div>
            <Eyebrow color={SC.pedra}>SE CONTRATADO SEPARADO</Eyebrow>
            <AccentBar color={SC.pedra} w={48} h={2} mt={20} mb={24} />
            <div style={{ fontSize: 24, color: SC.grafite, lineHeight: 1.4, maxWidth: 580 }}>
              Tráfego, criativos, qualificador, CRM, dashboard, lead card e onboarding contratados em fornecedores diferentes.
            </div>
          </div>

          <div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.18em', color: SC.pedra, textTransform: 'uppercase' }}>
              VALOR DE MERCADO
            </div>
            <div style={{
              fontSize: 180, fontWeight: 700, color: SC.carvao, lineHeight: 0.9, marginTop: 24,
              letterSpacing: '-0.03em', textDecoration: 'line-through', textDecorationColor: SC.pedra,
              textDecorationThickness: 6,
            }}>
              R$8.000<span style={{ fontSize: 72, color: SC.pedra }}>+</span>
            </div>
            <div style={{ fontSize: 26, color: SC.grafite, marginTop: 8 }}>por mês</div>
          </div>

          <div style={{ fontSize: 14, color: SC.pedra, letterSpacing: '0.16em' }}>
            HURTZ COMPANY · DECK COMERCIAL
          </div>
        </div>

        {/* Lado direito — preço real (revelado no clique) */}
        <div style={{
          padding: '96px 80px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          background: revealed ? SC.brasa : SC.offwhite,
          color: revealed ? '#fff' : 'transparent',
          transition: 'background 600ms ease',
          position: 'relative',
        }}>
          <div style={{
            opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 700ms ease 200ms, transform 700ms ease 200ms',
          }}>
            <Eyebrow color="#FFFFFF">SEU INVESTIMENTO REAL</Eyebrow>
            <AccentBar color="#FFFFFF" w={48} h={2} mt={20} mb={24} />
            <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.92)', lineHeight: 1.4, maxWidth: 580 }}>
              A operação inteira da Hurtz, integrada, com gestor dedicado e garantia de volume.
            </div>
          </div>

          <div style={{
            opacity: revealed ? 1 : 0, transform: revealed ? 'scale(1)' : 'scale(0.9)',
            transition: 'opacity 800ms ease 350ms, transform 800ms cubic-bezier(0.2,0.9,0.2,1) 350ms',
          }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)' }}>
              PREÇO REAL
            </div>
            <div style={{
              fontSize: 240, fontWeight: 700, color: '#fff', lineHeight: 0.9, marginTop: 24,
              letterSpacing: '-0.03em',
            }}>
              R$1.500
            </div>
            <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.92)', marginTop: 12 }}>por mês</div>
          </div>

          <div style={{
            opacity: revealed ? 1 : 0, transition: 'opacity 700ms ease 600ms',
            fontSize: 14, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.16em',
          }}>
            CONTRATO MÍNIMO 3 MESES · GARANTIA DE VOLUME
          </div>

          {/* Hint sutil pra apresentador antes do reveal */}
          {!revealed && (
            <div style={{
              position: 'absolute', inset: 0, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 14, letterSpacing: '0.20em', color: SC.pedra,
              fontWeight: 700, textTransform: 'uppercase',
              pointerEvents: 'none',
            }}>
clique para revelar →
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   REGISTRO GLOBAL
   ============================================================ */
window.CapaSlide              = CapaSlide;
window.CenarioHojeSlide       = CenarioHojeSlide;
window.ComoPoderiaSerSlide    = ComoPoderiaSerSlide;
window.MetodologiaSlide       = MetodologiaSlide;
window.EntregaTrafegoSlide    = EntregaTrafegoSlide;
window.EntregaCriativosSlide  = EntregaCriativosSlide;
window.EntregaFunilKLTSlide   = EntregaFunilKLTSlide;
window.EntregaQualificadorSlide = EntregaQualificadorSlide;
window.EntregaLeadCardSlide   = EntregaLeadCardSlide;
window.EntregaCRMSlide        = EntregaCRMSlide;
window.EntregaDashboardSlide  = EntregaDashboardSlide;
window.EntregaOnboardingSlide = EntregaOnboardingSlide;
window.TorrePreco1 = TorrePreco1;
window.TorrePreco2 = TorrePreco2;
window.TorrePreco3 = TorrePreco3;
window.TorrePreco4 = TorrePreco4;
window.TorrePreco5 = TorrePreco5;
window.TorrePreco6 = TorrePreco6;
window.TorrePreco7 = TorrePreco7;
window.TorrePreco8 = TorrePreco8;
window.ValorProgramaSlide = ValorProgramaSlide;
window.PrecoRealSlide = PrecoRealSlide;
