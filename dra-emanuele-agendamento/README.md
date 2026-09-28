# Agendamento da Dra. Emanuele

Página de agendamento criada a partir da referência `repositorio-publicacoes/aplicacao/`, adaptada para a coprodução da Dra. Manu.

## Jornada

1. O diagnóstico anterior salva nome, WhatsApp, e-mail, Instagram, situação e faturamento em `sessionStorage`.
2. A VSL envia o usuário para esta página.
3. Esta página abre direto na seleção de data e horário.
4. Ao confirmar, usa os dados salvos no diagnóstico para criar o agendamento.

## Integração

- A página usa o endpoint `/api/dra-manu-calendar`.
- A página não pergunta dados novamente; ela espera o contexto salvo em `dra-manu-lead-context-v1`.
- O endpoint foi mantido compatível com o backend Deskcomm usado pela referência.
- O `eventType.slug` usa `diagnostico-comercial-clinicas` para aproveitar o tipo de evento já existente.
- `pipelineId`, `leadCaptureStageId`, `leadSubmittedStageId` e `stageId` estão vazios até a operação da Manu ter IDs próprios confirmados.
- Sem esses IDs, o backend fica preparado para agendar e abrir contato, mas não deve criar ou mover card de CRM específico da Manu.

## Publicação

Rota planejada:

<https://pages.hurtzcompany.com.br/dra-emanuele-agendamento/>

Esta página contém `noindex, nofollow`.
