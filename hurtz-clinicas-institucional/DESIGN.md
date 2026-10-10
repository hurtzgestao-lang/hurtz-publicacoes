---
name: "Hurtz clínicas — apresentação com fotografia real"
description: "Direção editorial moderna, confirmada pela revisão do usuário em 08/10/2026."
colors:
  paper: "#F5F2EC"
  surface: "#FCFAF6"
  ink: "#181614"
  brasa: "#C06018"
  accent-text: "#974A12"
  soft: "#EEE7DB"
  accent-soft: "#F1DDCB"
  muted: "#625E57"
  inverse-muted: "#C7C0B5"
  warm-light: "#E3B88E"
  dark-surface: "#25221E"
  selected-dark: "#322A22"
  scrollbar: "#B0A28F"
typography:
  display:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(58px, 6.3vw, 88px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(38px, 4.35vw, 64px)"
    fontWeight: 400
    lineHeight: 1.13
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "24px"
  section: "36px"
  pill: "999px"
spacing:
  base: "4px"
  card: "24px"
  group: "48px"
  section: "64px"
---

# Design System: Hurtz clínicas

## Overview

Apresentação comercial em scroll, com fotografia real em cor natural, hierarquia editorial e formas suaves. Modo Persuade, construção em código. Esta direção substitui o visual rígido rejeitado pelo usuário; é específica desta página.

As 16 seções e a copy principal são preservadas. A abertura retorna à estrutura da referência na revisão de 10/10/2026: título centralizado e dois objetivos numerados lado a lado, sem fotos. Fotos têm nomes e função no argumento, sem alegação de resultado ou cliente ativo.

Referências externas: [Sócio Estratégico](https://propostas.socioestrategico.com/institucional), [Sagi](https://www.sagiagency.com/) e [Focus Lab](https://www.focuslab.agency/about). Nenhuma página anterior da Hurtz é referência.

## Colors

Paper e Surface criam uma base clara e quente. Ink estrutura painéis de contraste. Brasa e Accent Soft dão continuidade à marca sem dominar a página. Warm Light faz a ênfase legível no escuro. Fotografias mantêm as cores originais.

Texto de corpo precisa de contraste mínimo de 4,5:1. Os CTAs preservam texto Ink sobre superfície clara no hover. Os tokens do CSS são a verdade da implementação.

## Typography

Inter Regular nos títulos, parágrafos e ações. Bold somente nas pequenas orientações e ênfases. O corpo usa 18px no desktop, 17px no tablet e 16–17px no celular. Títulos de seção são fluidos, entre 34 e 72px conforme a janela; a abertura usa 50–88px.

Legendas de fotos, fontes e orientação são menores; conteúdo principal não depende de texto pequeno. Títulos têm tracking de -0,035em. Todas as fontes são locais.

## Layout

Container de 1184px, expandindo a 1280px em telas grandes. Cabeçalho flutuante de 74px dentro de uma área de 110px, com navegação em pílula. Painéis escuros têm margens externas e cantos amplos, em vez de faixas rígidas de ponta a ponta.

A abertura coloca dois painéis escuros abaixo do título centralizado. Quem somos usa foto real de reunião. Clínicas usa cinco retratos com nome e especialidade: Sidney Colares, Adriana Colares, Sarah Arroyo, Juliane Villela e Luma Reis. A galeria usa cinco colunas no desktop, três mais duas centralizadas no tablet e uma lista vertical no celular. Equipe usa retratos e biografias próximas. Os demais trechos alternam listas abertas, painéis e grupos de leitura.

Até 1100px, reduzir gaps e escalas. Até 760px, usar fluxo vertical, cabeçalho em duas linhas e remover os controles inferiores para preservar a leitura. Até 360px, passos e comparações usam uma coluna. As abas do método podem rolar horizontalmente dentro de seu próprio trilho.

## Elevation & Depth

Sombras discretas com offset e blur dão profundidade à navegação e ao painel do método. Os dois objetivos usam apenas o contraste dos painéis escuros. Não há glow, ilustração inventada, órbitas, textura simulada nem animações de entrada repetidas.

Scroll e trocas de estado respeitam movimento reduzido.

## Shapes

Cantos de 24px nos cards e 36px nas fotos/painéis maiores. Pílulas nas abas do método, navegação, chips de especialidades, CTAs e controles. No celular, 22–28px. Números são orientação, não ornamento.

Os logos usam a arte original em uma moldura de recorte, sem redesenho. As fotos são enquadradas por CSS, sem retoque ou geração por IA.

## Components

- Abertura: título original centralizado e dois objetivos numerados. Sem retratos dos sócios na primeira dobra.
- Navegação: três capítulos, contador e progresso. Sempre clara, para manter logo e orientação estáveis.
- Pessoas: fotos em cor, legendas factuais, nomes e função/especialidade. Não viram depoimentos.
- Método: cinco botões em pílula, seleção explícita e painel amplo de explicação/aplicação. Teclado com setas, Home e End.
- Soluções: três níveis com recuo e cantos suaves; links levam aos detalhes.
- Recomendação: rádios com prioridade, resumo acessível e CTA para WhatsApp. Sem proposta automática.
- Apresentação: setas e tela cheia no desktop; navegação por capítulos e scroll no celular.

## Do's and Don'ts

Usar fotografias originais, pessoas identificadas e conteúdo que já existe. Manter a sequência comercial e o método HURTZ. Privilegiar grandes grupos de leitura e espaço entre ideias.

Não voltar aos cantos de 4px, bordas em todas as subdivisões ou fotografia monocromática. Não transferir esta exceção de direção para toda a marca. Não usar pacientes, antes/depois, números ou depoimentos não fornecidos.

Fontes e créditos: assets/CREDITOS.md. Originais: dados/apify/2026-10-08-hurtz-clinicas-redesign/ e dados/apify/2026-10-10-hurtz-clinicas-face/.
