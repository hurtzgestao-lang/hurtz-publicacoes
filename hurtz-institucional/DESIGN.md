---
name: "Hurtz institucional"
description: "Sales deck Hurtz para clínicas, com estrutura e composição das referências Sócio Estratégico e V4."
colors:
  paper: "#F5F2EC"
  ink: "#181614"
  surface: "#23201D"
  sand: "#E8E4DC"
  brasa: "#C06018"
  strong: "#974A12"
  deeper: "#73380D"
  accent: "#E2A87A"
  tint: "#F0CEB4"
  text-muted: "#655F56"
  text-dark-muted: "#C8C0B5"
  line: "rgba(24,22,20,.16)"
  line-dark: "rgba(226,168,122,.28)"
  shadow: "rgba(24,22,20,.16)"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(54px, 7vw, 92px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(38px, 5vw, 72px)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-.048em"
  title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-.035em"
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: ".14em"
rounded:
  radius: "24px"
  radius-small: "16px"
  control: "10px"
  pill: "100px"
  circle: "50%"
spacing:
  gutter: "32px"
  section-space: "clamp(96px, 9vw, 136px)"
  objective-gap: "18px"
  objective-top: "72px"
  content-top: "58px"
components:
  button-primary:
    backgroundColor: "{colors.strong}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.deeper}"
  objective-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.radius}"
    height: "220px"
  tab-segment-selected:
    backgroundColor: "{colors.strong}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 26px"
  panel-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius-small}"
  panel-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.radius}"
---

# Design System: Hurtz institucional

## Overview

**Direção: fidelidade estrutural às referências.** A Sócio Estratégico define a abertura, a escala e a cadência inicial. A V4 define missão, diagnóstico e categorias de maturidade. Logo, cores, fotos, Sistema 5P e fatos pertencem à Hurtz. A revisão vigente fala exclusivamente ao dono ou gestor de clínica particular. A instrução do usuário é aproximar a estrutura, não criar uma narrativa visual nova.

A primeira dobra contém “Qual o nosso objetivo?”, destaque na palavra final e dois objetivos numerados. A fotografia aparece no capítulo institucional. Grandes superfícies claras e escuras, títulos amplos, cartões horizontais, retratos, diagramas e controles de apresentação sustentam a leitura.

Este documento foi atualizado a partir de `index.html`, `styles.css` e `app.js` da revisão. A correspondência seção a seção e as medidas da referência estão em `vendas/pitch/hurtz-institucional/revisao-estrutura.md`, no workspace principal.

## Colors

A paleta preserva os tons Hurtz. Papel e areia ocupam capítulos claros; carvão ocupa os escuros. Brasa forte sustenta ações e texto pequeno sobre claro; Brasa clara marca títulos, números e foco sobre escuro. O destaque da primeira pergunta usa Brasa clara com texto carvão.

As linhas acompanham a superfície. Transparências e gradientes usam os mesmos tons da marca, com intensidade discreta, conforme o enquadramento das referências.

## Typography

Montserrat local em títulos, leitura, controles e números. `assets/fonts/montserrat-variable.woff2` fornece pesos 400–800 com `font-display:swap`. O runtime revisado usa uma família.

A pergunta inicial usa peso 400, tamanho máximo de 92px e entrelinha .98. Os objetivos usam peso 400, `clamp(18px,1.8vw,24px)` e entrelinha 1.45. Títulos de capítulo usam peso 650, tracking -.048em e `clamp(38px,5vw,72px)`; títulos institucionais e da missão têm variantes mais leves. Indicadores grandes usam números tabulares. Rótulos de capítulo e navegação usam maiúsculas e tracking contido.

No celular, a primeira pergunta mantém 54px e os objetivos 17px. Os títulos de seção usam 38px; conteúdo e controles mantêm suas escalas específicas. Não recuperar a antiga tipografia do hero ou a combinação com Manrope.

## Layout

Container principal de 1180px; capítulos com padding lateral 32px e respiro vertical `clamp(96px,9vw,136px)`. Header fixo de 76px, três grupos de navegação, contador e progresso de 3px.

A abertura usa grid centralizado e `min-height:min(860px,100svh)`. Os dois cartões têm colunas iguais, gap 18px, margem superior 72px e altura mínima 220px. Cada cartão reserva 86px para o número, com divisor vertical. O título permanece centralizado numa linha em desktop. Fundo claro com plano diagonal e arco discreto acompanha a primeira dobra da Sócio.

Sequência: objetivo, problema, prova, empresa/fundadores, clientes, liderança, missão, método, seis perguntas, maturidade, quatro formas de atuação, frentes conectadas, experiência, recomendação e contato. A estrutura não é encurtada para voltar aos nove capítulos da versão rejeitada.

Títulos de problema, clientes, liderança, métodos, diagnóstico e jornada acompanham o eixo esquerdo da referência. A pergunta inicial e a missão permanecem centralizadas. Problema e prova usam quatro colunas. A prova está numa faixa integrada com divisórias. Clientes clínicos usam quatro colunas de cartões em desktop e duas até 800px. Liderança usa duas colunas, container de 1040px e retratos 4:3. Empresa/fundadores usam duas colunas; os métodos são apresentados em painel com controles. Diagnóstico usa duas colunas, três linhas e fluxo por coluna. Maturidade usa quatro patamares alinhados à direita, com largura decrescente de 100% a 100% menos 180px, seguindo o mapa editorial da Sócio. As categorias se chamam Saber, Ter, Executar e Potencializar. A recomendação dispõe filtros e resumo antes dos entregáveis.

Até 1100px o header compacta a marca e oculta o nome do capítulo. Até 900px o fluxo do problema se empilha, com setas verticais. Até 800px a abertura empilha cartões, a prova passa a duas colunas, empresa passa a uma e clientes ficam em duas colunas. O header tem 106px, com marca/contador na primeira linha e os três grupos de navegação visíveis na segunda. Até 620px capítulos mantêm 88px de respiro, prova/liderança/diagnóstico/métodos/detalhes se empilham, patamares usam largura integral e clientes ficam em duas colunas. A preferência de movimento reduzido desliga animações e rolagem suave.

## Elevation & Depth

A revisão usa sombras difusas e bordas conforme a Sócio. Os cartões de abertura têm `0 24px 70px var(--shadow)`. O bloco de autoridade do método usa `0 20px 60px var(--shadow)`. Os patamares de maturidade usam `0 16px 40px rgba(24,22,20,.06)`. Outras superfícies se distinguem por tom, borda e espaçamento. A antiga orientação de ausência completa de sombras não pertence à revisão.

Header, progresso e controles de apresentação ficam acima do conteúdo. Retratos mantêm enquadramento real; overlays discretos preservam a leitura de legendas.

## Shapes

Cartões principais e fotos usam 24px; painéis menores, clientes e diagrama usam 16px; botões usam 10px. Seletores agrupados usam cápsulas; marcadores de capítulo e pontos de carrossel são circulares. Borda recorrente de 1px. A palavra destacada na pergunta usa raio .08em e padding `0 .12em .05em`.

Logo oficial com proporção preservada, recortado apenas pelo viewport horizontal de apresentação do arquivo. Ícones usam SVG de traço.

## Components

### Objetivos

Pergunta central e dois cartões numerados reproduzem o enquadramento da referência. Números de 38px, coluna de 86px e texto com padding 34px. Em celular, número de 34px, coluna de 72px e texto com padding 22px. Esses elementos ocupam a abertura inteira.

### Botões e seletores

Botões primários usam Brasa forte, texto papel, altura mínima 50px e hover em Brasa profunda. O foco usa contorno de 3px com deslocamento 5px; sobre escuro o contorno é Brasa clara. Desabilitado reduz opacidade. Abas de resultados e pontos de carrossel anunciam seleção e painel relacionado.

### Clientes e liderança

Cartões de clientes e liderança usam `details`/`summary` nativos com verso de tamanho fixo para revelar contexto e biografia. Cliente mantém altura de 152px; liderança mantém proporção 4:3. O conteúdo frontal cede lugar ao verso, sem crescer a seção; o botão de retorno fecha o detalhe. Os retratos e as identificações são reais.

### Empresa e método

Empresa/fundadores e métodos usam painéis alternados com setas e pontos. Abas têm relação com o painel, foco de teclado e estados selecionados. As fotos estão no capítulo institucional. O carrossel do Sistema 5P tem dois painéis: Funcionamento e Aplicação na clínica. O primeiro apresenta as cinco etapas; o segundo detalha procedimento/captação, recepção, agenda e indicadores. As três frentes do ecossistema usam conexões horizontais em desktop e verticais no celular.

### Diagnóstico e recomendação

Seis perguntas numeradas permitem anotar respostas em selects e textarea. O conteúdo é processado no navegador. Maturidade conduz às descrições. O projeto é a Assessoria Hurtz para Clínicas. Selecionar o momento da clínica produz a recomendação e habilita entregáveis; o resumo entra no WhatsApp apenas se o visitante escolher abrir, revisar e enviar.

### Navegação e apresentação

Header fixo acompanha superfície, seção e progresso. Três grupos: Diagnóstico, Autoridade & método e Soluções. Contador ativa a apresentação; setas e Page Up/Page Down percorrem capítulos; Escape sai. Controles flutuantes permitem avançar, voltar e abrir tela cheia. No celular, os três grupos ficam visíveis na segunda linha do header, como na Sócio.

## Do's and Don'ts

- **Do** preservar a primeira pergunta, os dois objetivos e as medidas da referência.
- **Do** manter sequência, composição ampla e função de cada capítulo.
- **Do** usar logo, cores, fotos e fatos Hurtz; separar métodos e provas das verticais.
- **Do** preservar controles, teclado, foco, estados e movimento reduzido.
- **Don't** recuperar a capa fotográfica, slogan inicial ou narrativa livre da versão rejeitada.
- **Don't** trocar a estrutura por uma interpretação criativa das referências.
- **Don't** inventar clientes, conselheiros, livro, escritório, métricas, depoimentos ou ofertas para preencher blocos.
- **Don't** tratar a validação da versão anterior como validação da revisão atual.

## Finish review da revisão

PASS de fidelidade central na revisão independente de08/10/2026. Primeira dobra comparada diretamente em1470×643; desktop e mobile próprios inspecionados; abas, carrosséis, versos, anotações, categorias, recomendação e apresentação verificados no navegador. Capturas de primeira dobra/header finais substituem a hero rejeitada e a imagem de compartilhamento. A revisão altera apenas o conteúdo necessário para a Hurtz, dentro da estrutura das referências.

## Revisão clínica vigente — 08/10/2026

A estrutura de 17 capítulos, a abertura e as categorias foram preservadas. O conteúdo fala ao dono ou gestor de clínica, com procedimento prioritário, recepção, agenda, comparecimento e procedimentos vendidos. Provas e clientes são exclusivamente clínicos; o Sistema 5P ocupa Funcionamento/Aplicação. A recomendação mantém três colunas, com contexto fixo da assessoria, momento da clínica e resumo. Somente a seleção do momento habilita os entregáveis. Não há seletor de mercado ou dados de outra vertical na experiência pública.

PASS na revisão independente da copy, fatos e contrato HTML/JS. Conferência no navegador: abertura, diagnóstico, carrossel do método, recomendação, resumo WhatsApp e disposição mobile. Esta revisão substitui o escopo multissetorial da versão anterior.
