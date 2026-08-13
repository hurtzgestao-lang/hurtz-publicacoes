# Design

<!-- impeccable:design-schema 1 -->

## Surface

Landing page de persuasao para a Sessao Estrategica Gratuita da Hurtz para cirurgioes da face.

## Direction

Mesa de comando comercial da clinica. A pagina recusa a landing medica generica e apresenta a sessao como uma leitura operacional: gargalos, status, metas, prova e proximo comando.

Seed Impeccable: `4e32edc0`.

## Visual World

- Superficies opacas em Off-white `#F5F2EC`, Carvao `#181614` e Brasa `#C06018`.
- CTAs usam Brasa Escura `#974A12` para manter contraste AA com texto pequeno.
- Microtexto em superficies escuras usa Brasa Clara `#E2A87A`; Brasa Viva fica reservada para numeros grandes e enfase.
- Grid de comando com bordas finas, divisorias rigidas, numeros grandes e estados comerciais.
- Fotos reais do Dr. Sidney Colares e Marcos Hurtz como prova visual, nao como decoracao.
- Sem sombras, gradientes, glow, blur ou ilustracoes genericas.

## Typography

Inter Regular e Bold, conforme Hurtz Design System. O detector Impeccable marca Inter como fonte comum, mas neste projeto ela e uma restricao de marca confirmada.

## Components

- Topbar fixa com logo, prova curta e CTA.
- Hero em duas zonas: tese + prova / board de comando comercial.
- Blocos de fit com lista positiva e negativa.
- Grid de mecanismo em tres etapas: Entrada, Conducao, Decisao.
- Case com numero dominante e foto real.
- Formulario de selecao com labels curtos, foco visivel, estados disabled, sucesso e erro.

## Motion and Interaction

Interacoes discretas de 120ms em botoes e campos, coerentes com a marca. Sem animacoes ornamentais. A acao principal e sempre pedir a sessao ou preencher o formulario.

## Responsive Rules

- Em desktop e notebook, o board de comando aparece na primeira dobra.
- Em mobile, o board completo sai da primeira dobra para preservar tese, CTA e prova acima do restante; um resumo compacto mantém `20+` e `30 min` visiveis no fluxo logo depois da prova.
- O H1 mobile usa escala menor que a versao anterior para evitar uma primeira dobra composta apenas por headline.
- Formularios quebram para uma coluna em telas pequenas.

## Assets

- `assets/logo-atual-claro.png`
- `assets/logo-atual-escuro.png`
- `assets/dr-sidney-colares.png`
- `assets/marcos-hurtz.png`

## Constraints

Preservar Meta Pixel, endpoint Supabase, payload do formulario, eventos `PageView`, `Lead`, `Contact` e abertura/fallback do WhatsApp. Nao inventar novos claims, clientes, garantias ou numeros.
