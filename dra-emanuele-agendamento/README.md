# Agendamento da Dra. Emanuele

Página de agendamento criada a partir da referência `repositorio-publicacoes/aplicacao/`, adaptada para a coprodução da Dra. Manu.

## Jornada

1. Boas-vindas para diagnóstico de escala.
2. Nome.
3. WhatsApp.
4. E-mail.
5. Instagram da clínica.
6. Faturamento mensal.
7. Situação atual.
8. Objetivo para os próximos meses.
9. Seleção de data e horário.

## Integração

- A página usa o endpoint `/api/dra-manu-calendar`.
- O endpoint foi mantido compatível com o backend Deskcomm usado pela referência.
- O `eventType.slug` usa `diagnostico-comercial-clinicas` para aproveitar o tipo de evento já existente.
- `pipelineId`, `leadCaptureStageId`, `leadSubmittedStageId` e `stageId` estão vazios até a operação da Manu ter IDs próprios confirmados.
- Sem esses IDs, o backend fica preparado para agendar e abrir contato, mas não deve criar ou mover card de CRM específico da Manu.

## Publicação

Rota planejada:

<https://pages.hurtzcompany.com.br/dra-emanuele-agendamento/>

Esta página contém `noindex, nofollow`.
