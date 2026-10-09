---
name: "Hurtz institucional"
description: "Uma apresentação editorial de aquisição e conversão, com pessoas e provas reais."
colors:
  brasa: "#C06018"
  brasa-hover: "#974A12"
  action-hover: "#73380D"
  brasa-light: "#E2A87A"
  ink: "#181614"
  graphite: "#3D3A36"
  paper: "#F5F2EC"
  sand: "#E8E4DC"
  secondary: "#655F56"
  muted-light: "#C8C0B5"
  surface-dark: "#23201D"
  line-dark: "rgba(245,242,236,.18)"
  line-light: "rgba(24,22,20,.17)"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(58px, 6.1vw, 88px)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(38px, 4.2vw, 60px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-.035em"
  title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  radius: "16px"
  radius-control: "8px"
  pill: "100px"
  circle: "50%"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "32px"
  space-5: "48px"
  space-6: "64px"
  gutter: "48px"
  section-space: "112px"
components:
  button-primary:
    backgroundColor: "{colors.brasa-hover}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-control}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.radius-control}"
    padding: "15px 22px"
  button-dark-hover:
    backgroundColor: "{colors.graphite}"
  tab-segment:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  tab-segment-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  panel-light:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    padding: "52px 56px"
  panel-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.paper}"
    rounded: "{rounded.radius}"
    padding: "52px 56px"
  radio-option:
    backgroundColor: "transparent"
    textColor: "{colors.muted-light}"
    rounded: "{rounded.radius-control}"
    padding: "11px 14px"
  radio-option-selected:
    backgroundColor: "{colors.brasa-hover}"
    textColor: "{colors.paper}"
---

# Design System: Hurtz institucional

## Overview

**Creative North Star: "Do clique à venda"**

Uma apresentação comercial editorial, direta e humana. A composição dá escala aos títulos, presença aos fundadores e espaço às provas. Carvão e papel alternam o ritmo; a Brasa marca decisões, conexões e o próximo passo. A densidade fica concentrada nos painéis que o visitante escolhe abrir, com respiro entre capítulos.

As referências V4 e Sócio Estratégico, fixadas pelo usuário, orientam a nova composição, a tipografia, os componentes e o ritmo. Logo e paleta oficiais Hurtz permanecem como compromissos. Este sistema substitui o restante da identidade visual anterior. Fotografias reais, títulos em Montserrat e texto em Manrope são a expressão implementada dessa direção.

Extraído de `index.html`, `styles.css` e `app.js`, em coerência com `PRODUCT.md`. Os tokens acima descrevem o estado base de desktop; ajustes de viewport, interação e movimento estão abaixo. O sidecar amplia o documento com estados completos, motion e breakpoints. Suas rampas tonais são auxiliares de preview, não cores adicionais do runtime.

**Key Characteristics:**

- Títulos amplos e compactos, com ênfase em uma parte da frase.
- Fotografia real com tratamento de saturação contido.
- Capítulos em superfícies carvão e papel, com uma seção Brasa.
- Painéis de conteúdo escolhidos por etapas e mercado.
- Profundidade por tom, borda e sobreposição, sem sombras de caixa.
- Leitura independente e apresentação guiada na mesma página.

## Colors

A paleta é quente e mineral: carvão profundo, papel amaciado, areia e Brasa; o contraste define a função de cada tom.

### Primary

- **Brasa 400 — `brasa`:** ênfase em títulos grandes sobre papel, barras de seleção e progresso, pequenos pontos e detalhes de conexão.
- **Brasa 600 — `brasa-hover`:** tom oficial mais profundo para fundos de ação com texto claro, opções selecionadas do diagnóstico, hover da ação do cabeçalho e seção de execução. Também sustenta texto pequeno de seleção e categoria sobre papel. O nome do token veio do CSS; sua função já ultrapassa o hover.
- **Brasa profunda de interação — `action-hover`:** fundo dos botões primários no hover, aumentando a distinção do estado de ação.
- **Brasa clara — `brasa-light`:** ênfase em títulos, números, rótulos e foco sobre carvão. Ajuda a localizar a informação dentro de superfícies escuras.

### Neutral

- **Carvão — `ink`:** hero, capítulos escuros, rodapé, navegação, casos em destaque e botões em capítulos claros; também é a cor principal de texto sobre papel.
- **Grafite — `graphite`:** variação de hover dos botões escuros.
- **Papel — `paper`:** capítulos claros e texto sobre superfícies escuras ou Brasa 600.
- **Areia — `sand`:** painéis claros e trilho dos seletores segmentados.
- **Texto secundário — `secondary`:** explicações, notas e opções inativas em superfícies claras.
- **Texto claro contido — `muted-light`:** corpo, navegação inativa, notas e rótulos em superfícies escuras.
- **Superfície carvão elevada — `surface-dark`:** painel do método, distinguido do capítulo por tom.
- **Linha sobre carvão — `line-dark`:** separadores, contornos de opções, formulário e controles sobre escuro.
- **Linha sobre papel — `line-light`:** divisórias do conteúdo, FAQ e estrutura das etapas em capítulos claros.

**The Contrast Rule.** Preserve Brasa 600 nos fundos com texto pequeno em papel e na ênfase textual pequena sobre papel. Brasa 400 continua nos títulos grandes e nos sinais gráficos.

## Typography

**Display Font:** Montserrat, com Arial e sans-serif como fallback. Arquivo local variável `assets/fonts/montserrat-variable.woff2`, pesos disponíveis de (400–800).

**Body Font:** Manrope, com Arial e sans-serif como fallback. Arquivo local variável `assets/fonts/manrope-variable.woff2`, pesos disponíveis de (400–700).

As duas fontes usam `font-display: swap` e são pré-carregadas no documento. Montserrat dá peso e largura à fala principal; Manrope mantém a leitura de apoio precisa. A combinação é inteiramente sem serifa. Não há fonte monoespaçada: contagens e grandes resultados usam números tabulares.

### Hierarchy

- **Display:** título do hero, em Montserrat (700), com os valores do frontmatter. O limite de largura é (780px); linhas curtas constroem a entrada. Acima de (1600px), chega a (96px). Nas faixas menores, usa (70px), depois (64px), e no celular `clamp(40px, 10.5vw, 60px)` com entrelinha (1.05).
- **Headline:** títulos de capítulos, em Montserrat (700). No celular, os títulos de seção geralmente usam (36px) e entrelinha (1.13); diagnóstico e FAQ possuem seus próprios ajustes próximos dessa escala.
- **Title:** títulos dos painéis do método (30px), títulos dos fundadores (24px), destaque de case (38px) e títulos de listas (17–18px). Todos mantêm Montserrat e hierarquia abaixo dos capítulos.
- **Body:** base em Manrope (16px/1.6). Explicações variam entre (13–17px), com entrelinhas de (1.7–1.8) nos trechos densos. Parágrafos têm limite geral de (68ch), estreitado por componente; o apoio do hero usa (510px).
- **Label:** botões (13px, 700, 1.4), navegação (13px), rótulos e notas (10–13px). A caixa segue o português normal; não há uma camada geral de rótulos em maiúsculas.
- **Result:** grande número do case em Montserrat (600, 100px/1.1), com espaçamento (-.04em); sufixos usam (38px). A escala distingue o dado principal dos resultados de apoio.

**The Type Pair Rule.** Use Montserrat para a hierarquia e os números que conduzem a apresentação; Manrope para ler, navegar e agir. Destaque trechos por cor e peso, sem introduzir outra família.

## Layout

O conteúdo usa um eixo central com largura máxima de (1240px) e margens base de (48px). O cabeçalho pode chegar a (1440px). O ritmo base usa passos de (8, 16, 24, 32, 48 e 64px); capítulos têm (112px) de espaço vertical. Cabeçalhos de seção se afastam do conteúdo em (64px). Painéis amplos usam padding próximo de (52px 56px); painéis auxiliares usam (36px).

O hero é escuro, ocupa no mínimo `max(780px, 100svh)` e começa abaixo do cabeçalho fixo. O texto ocupa a esquerda; a fotografia fica à direita em cerca de (60%) da largura, coberta por uma gradação de carvão que mantém a leitura. No celular a fotografia passa à base, com altura de (470px), e o título permanece acima dela. O tratamento é específico da fotografia; não vira um padrão de gradiente para todos os componentes.

Os capítulos alternam carvão e papel; a execução ocupa uma superfície Brasa 600. Divisões de título e apoio, painéis de método, soluções e cases usam duas colunas com proporções próximas de (1.2:1). Fundadores usam duas colunas iguais; provas de apoio, três; execução, quatro. A leitura continua vertical, sem bloquear o scroll ou impor snap.

### Responsive behavior

- **Acima de 1600px:** hero amplia o título para (96px), a foto usa (58%) e o texto ganha respiro superior.
- **Até 1180px:** margem (32px), capítulos (88px) e cabeçalho (76px). A marca e os intervalos encolhem; o rótulo textual de apresentação cede lugar ao ícone.
- **Até 900px:** margem (26px), cabeçalho (72px). A navegação vira menu acionável. Cabeçalhos divididos, diagnóstico e FAQ passam a uma coluna; execução fica em duas. As seis etapas do método formam uma grade de três colunas.
- **Até 600px:** margem (22px), capítulos (68px) e cabeçalho (68px). Fundadores, casos, soluções e execução ficam em uma coluna. As três etapas do gargalo se empilham; as seis etapas do método mantêm três colunas. Painéis usam cerca de (28px), e o diagnóstico (26px 22px). O CTA do cabeçalho fica oculto; ações no conteúdo permanecem disponíveis. Não reduzir o título do hero abaixo de (40px).

Em apresentação, os capítulos têm altura mínima de viewport descontada do cabeçalho e margem inferior para o controle flutuante. No celular, o hero da apresentação tem mínimo de (900px). A impressão remove o chrome de navegação e mostra todos os painéis de tabs, preservando o conteúdo escolhido para leitura em papel.

**The Chapter Rule.** Mantenha o mesmo eixo, a alternância de superfícies e a distância entre título e conteúdo. No celular, reordene pela leitura e empilhe; não comprima a composição de desktop inteira.

## Elevation & Depth

O sistema não usa `box-shadow`. A profundidade vem de superfícies de tons próximos, linhas finas e camadas funcionais. O painel do método é ligeiramente mais claro que o capítulo carvão; o painel de case é carvão sobre papel; o formulário mantém fundo do capítulo e uma borda visível. A fotografia do hero recebe uma sobreposição de carvão. Cabeçalho, indicador de leitura e controle da apresentação ficam fixos acima do conteúdo; o indicador tem fundo carvão quase opaco.

**The Tonal Depth Rule.** Diferencie conteúdo por tom e contorno antes de adicionar efeitos. Reserve sobreposição para a fotografia e para os controles persistentes da apresentação.

## Shapes

Painéis, fotografias de fundadores e formulário usam cantos suaves (16px). Botões, opções de rádio e mensagens de status usam cantos menores (8px). Seletores de mercado, indicador de leitura e controle da apresentação usam cápsulas (100px). Nós das etapas, avatar e botões de ícone são circulares. A marca preserva o arquivo oficial; o recorte visual no cabeçalho e no rodapé é um viewport horizontal do PNG, com proporção preservada e `mix-blend-mode: screen` sobre carvão.

As linhas são finas (1px); seleção de etapas usa sublinhado mais firme (2–3px). Ícones são SVG de traço, sem preenchimento, normalmente (22px), com traço (1.7) e extremidades arredondadas; botões e controles usam tamanhos menores conforme a função. A geometria recorrente é a conexão entre etapa, linha e painel de detalhe.

**The Shape Rule.** Use cantos suaves em superfícies de conteúdo, cantos menores nas ações e cápsulas apenas nos controles que agrupam escolhas ou navegação persistente.

## Components

### Buttons

Firmes e legíveis, com verbo e direção. Primários usam Brasa 600 sobre carvão; botões escuros usam carvão sobre papel. A base tem altura mínima de (54px), padding (15px 22px), intervalo de ícone (28px), Manrope (13px/700) e cantos (8px). No hover, sobem (2px); cor, fundo e transformação mudam em (.25s) com a curva de desaceleração do sistema. Primários chegam à Brasa profunda de interação no hover; botões escuros chegam a grafite.

A ação do cabeçalho é compacta, contornada, com padding (12px 18px), e assume Brasa 600 no hover. A ação textual usa ícone pequeno e padding vertical, sem caixa preenchida. Controles desabilitados têm opacidade (.35) e deixam de mostrar cursor de ação. O foco de links, botões e `summary` usa linha de (3px), deslocada (5px): Brasa clara sobre escuro e Brasa 600 nos capítulos claros e no link de pular para conteúdo.

### Tabs and selectors

Seletores de mercado são cápsulas em areia, com padding externo (5px), intervalo (4px) e opções de no mínimo (44px). A opção selecionada usa carvão e papel; a inativa usa texto secundário. Etapas do gargalo são abertas, com número circular, seta e sublinhado Brasa; as etapas do método são numeradas e abertas, com ênfase Brasa clara sobre carvão. Apenas o painel selecionado aparece.

Todos os grupos têm semântica `tablist`/`tab`/`tabpanel`, relação explícita entre tab e painel e foco itinerante: somente a opção selecionada entra no Tab normal. Setas esquerda e direita escolhem a opção anterior ou seguinte, com volta no fim; Home e End escolhem a primeira e a última. Esses comandos continuam horizontais mesmo quando a composição visual se empilha.

### Cards and content panels

Os painéis do gargalo usam areia; método usa superfície carvão elevada; soluções usam areia como apoio; o case principal usa carvão sobre papel. A distinção está no fundo, no canto e no alinhamento, sem sombra. O case divide pessoa e número por uma linha vertical; no celular a linha fica horizontal. Provas de apoio ficam abertas, com uma linha superior, em vez de repetir uma caixa preenchida para cada item. Listas de entregáveis usam divisórias e um ponto Brasa.

### Diagnostic fields

O diagnóstico usa radios nativos agrupados por `fieldset` e `legend`, apresentados como opções contornadas. O input permanece no fluxo de teclado, ainda que sua caixa visual fique oculta. A opção tem padding (11px 14px), canto (8px), contorno sobre carvão, texto claro contido e mínimo de (44px), ajustado para (42px) no celular. Selecionada, recebe Brasa 600 e papel; no hover, a borda ganha Brasa clara. O foco é mostrado na opção visível com linha de (3px) e deslocamento de (4px).

Após validar as escolhas, o resultado ocupa o mesmo formulário, recebe foco programático e apresenta prioridade, resumo e ação. A ação de rever respostas restaura o formulário e foca a primeira opção. O texto do resultado usa região de atualização educada. Não há campo de texto, select, estado de erro customizado ou envio de dados em segundo plano nesta implementação.

### Navigation and presentation

O cabeçalho fixo é carvão quase opaco, com borda inferior e progresso de leitura de (2px) em Brasa. Links inativos usam texto claro contido; hover e seção ativa usam papel. A seção ativa ganha uma linha Brasa abaixo. A marca usa `assets/logo-atual-escuro.png`; o ícone do navegador usa `assets/logo-atual-icone-claro.png`.

No menu móvel, as opções aparecem verticalmente abaixo do cabeçalho. O botão de duas linhas vira um X; o estado é anunciado por `aria-expanded` e pelo rótulo atualizado. Selecionar um capítulo ou pressionar Escape fecha o menu. O link de pular para conteúdo fica visível ao receber foco.

O indicador de leitura informa capítulo e nome sem interceptar eventos. No modo apresentação, o controle central flutuante fornece anterior, seguinte, contagem, tela cheia quando disponível e saída. O hover dos controles circulares usa Brasa 600. Os extremos desabilitam os controles correspondentes. Setas direita/baixo e PageDown avançam; setas esquerda/cima e PageUp voltam. Inputs, tabs e edição de conteúdo mantêm seus próprios comandos. Escape sai da apresentação. Rolagem e início do diagnóstico usam movimento suave apenas quando permitido pela preferência do usuário.

### FAQ and status

O FAQ usa `details` e `summary` nativos, divisórias e ícone de mais que gira (45°) quando aberto. As respostas permanecem abaixo da pergunta, em texto secundário. Mensagens de status usam uma caixa papel com canto de controle, centralizada acima dos controles de apresentação, e região `aria-live="polite"`; ficam visíveis por (6s).

### Photography and motion

Fotografias são locais e reais: `assets/marcos-escritorio.jpg`, `assets/klebson-retrato.jpg` e `assets/klebson-perfil-atual.jpg`. Hero e fundadores usam `object-fit: cover`; posições de enquadramento priorizam o rosto. O hero reduz saturação para (.4); retratos dos fundadores usam (.5), chegando a (1) no hover em (.6s). Preserve esse tratamento junto do enquadramento, sem substituir pessoas por imagens genéricas.

Com movimento permitido, o título entra de (18px) abaixo com opacidade inicial (.65) em (.9s); a fotografia revela seu recorte em (1.4s); o painel de método entra de (8px) abaixo com opacidade (.7) em (.4s). A curva é `cubic-bezier(.16,1,.3,1)`. São entradas curtas e transições de estado, sem loop contínuo.

Com `prefers-reduced-motion: reduce`, animações e transições CSS são removidas e rolagem CSS/JavaScript passa a ser imediata. Os painéis, o formulário e a apresentação continuam funcionais.

**The State Rule.** Preserve seleção, hover, foco, desabilitação e preferência de movimento junto do componente. A aparência de repouso sozinha não documenta a interação.

## Do's and Don'ts

### Do:

- **Do** preservar logo e paleta oficiais Hurtz, aplicando a composição nova orientada por V4 e Sócio Estratégico.
- **Do** usar Montserrat local para títulos e Manrope local para corpo e ações.
- **Do** distinguir Brasa 400 para títulos grandes e sinais de Brasa 600 para ações e texto pequeno sobre papel.
- **Do** manter fotos reais, enquadramento de rosto e saturação contida.
- **Do** construir profundidade com carvão, papel, areia e linhas finas.
- **Do** manter o eixo central, os capítulos espaçados e o empilhamento progressivo no celular.
- **Do** conservar semântica de tabs, foco visível, teclado, estados de formulário e movimento reduzido.

### Don't:

- **Don't** recuperar as fontes, os componentes ou o ritmo da identidade anterior descartada pelo usuário.
- **Don't** trocar os fundadores por fotos genéricas, ilustrações ou pessoas geradas.
- **Don't** colocar texto pequeno em papel sobre Brasa 400 ou ampliar a cor clara de ênfase para texto sobre papel.
- **Don't** adicionar sombra em cada painel, gradientes decorativos recorrentes ou outra família tipográfica.
- **Don't** transformar todas as provas e listas em uma repetição de cards preenchidos.
- **Don't** reduzir o desktop inteiro para caber no celular nem esconder etapas para economizar altura.
- **Don't** retirar o foco visível, substituir controles nativos por caixas clicáveis sem semântica ou ignorar movimento reduzido.
