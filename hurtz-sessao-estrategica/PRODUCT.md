# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Cirurgioes da face, principalmente profissionais de Rino e Blefaro, que ja tem tecnica e demanda potencial, mas ainda dependem demais da propria presenca ou de uma rotina comercial inconsistente para vender cirurgias.

## Product Purpose

A landing page vende a inscricao para uma Sessao Estrategica Gratuita com a Hurtz. O visitante deve entender rapidamente que a conversa diagnostica a estrutura comercial da clinica e mostra um caminho para aproximar a operacao de pelo menos 20 cirurgias vendidas por mes.

## Positioning

A Hurtz se posiciona como especialista em estrutura comercial e captacao para cirurgioes da face, nao como uma agencia generica. O mecanismo central da pagina e a Estrutura Comercial Independente: captacao, atendimento, follow-up e conducao comercial operando com criterio mesmo quando o medico esta em cirurgia.

## Operating Context

A pagina e estatica, publicada via Cloudflare Pages pelo repositorio `repositorio-publicacoes`. O formulario envia dados para a function Supabase `apr-submit`, dispara eventos Meta Pixel e abre o WhatsApp para continuidade do atendimento.

## Capabilities and Constraints

- Preservar Meta Pixel, eventos `PageView`, `Lead` e `Contact`.
- Preservar endpoint Supabase, payload do formulario e abertura do WhatsApp.
- Preservar claims atuais: `R$36M+`, `114 blefaroplastias`, `6 anos`, sessao gratuita e plano para `20 cirurgias/mes`.
- Nao inventar novos clientes, benchmarks, precos ou garantias.
- Usar HTML/CSS/JS estatico em `index.html`.

## Brand Commitments

Hurtz Design System: Off-white `#F5F2EC`, Carvao `#181614`, Brasa `#C06018`, Inter Regular/Bold, sem sombras, sem gradientes, sem blur, sem emojis decorativos. Tom direto, em portugues, ancorado em numeros reais.

## Evidence on Hand

- Case Dr. Sidney Colares / Instituto Odonto Medic: `114` blefaroplastias vendidas em 30 dias.
- Experiencia declarada: `6 anos` dedicados a cirurgioes da face.
- Resultado agregado declarado: `R$36M+` gerados em projetos de clinicas.
- Imagens atuais do Dr. Sidney e Marcos Hurtz existem embutidas no HTML original e podem virar assets locais.

## Product Principles

- A primeira dobra deve provar autoridade e deixar a acao obvia.
- A pagina deve vender estrutura comercial, nao marketing generico.
- Claims comerciais precisam ser reais, especificos e preservados.
- Mobile deve priorizar tese, prova e CTA antes de qualquer densidade visual.
- Compliance importa: manter linguagem comercial sem promessa clinica absoluta.
