# Diagnóstico de blefaroplastia Hurtz

Formulário curto de pré-qualificação para clínicas que trabalham ou querem trabalhar blefaroplastia.

## Estrutura

- `index.html` - entrada estática.
- `styles.css` - tokens e layout seguindo Off-white, Carvão, Brasa e Inter.
- `app.js` - perguntas, validação, navegação, tracking de origem e envio para WhatsApp.
- `assets/logo-atual-escuro.png` - logo oficial para fundo escuro.
- `assets/logo-atual-icone-escuro.png` - ícone oficial usado como favicon.

## Perguntas atuais

1. Você é dono de clínica?
2. Já realiza blefaroplastia?
3. Quantas cirurgias vende por mês?
4. Qual o ticket médio?
5. Possui secretária ou equipe comercial?
6. Quanto pode investir mensalmente em anúncios?

Para alterar perguntas e opções, edite o array `steps` no começo de `app.js`.

## Dinâmicas copiadas da referência

- Uma pergunta por vez.
- Progresso `Passo X de 6`.
- Avanço com clique ou Enter nas etapas de texto.
- Dica `↵ ou pressione Enter` na etapa de ticket médio.
- Alternativas avançam automaticamente ao clicar, exceto a última.
- UTMs, `gclid`, `fbclid`, `msclkid` e `ref` são preservados e enviados no texto do WhatsApp.
