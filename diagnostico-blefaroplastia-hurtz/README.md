# Diagnóstico de blefaroplastia Hurtz

Formulário curto de pré-qualificação para clínicas que trabalham ou querem trabalhar blefaroplastia.

## Estrutura

- `index.html` - entrada estática.
- `styles.css` - tokens e layout seguindo Off-white, Carvão, Brasa e Inter.
- `app.js` - perguntas, validação, navegação, tracking de origem e envio para WhatsApp.
- `obrigado/index.html` - página de obrigado com estrutura para receber o vídeo.
- `obrigado/styles.css` - layout responsivo da página de obrigado.
- `assets/logo-atual-escuro.png` - logo oficial para fundo escuro.
- `assets/logo-atual-icone-escuro.png` - ícone oficial usado como favicon.

## Perguntas atuais

1. Qual o seu nome?
2. Qual seu telefone?
3. Você é dono de clínica?
4. Já realiza blefaroplastia?
5. Quantas cirurgias vende por mês?
6. Qual o ticket médio?
7. Possui secretária ou equipe comercial?
8. Quanto pode investir mensalmente em anúncios?

Para alterar perguntas e opções, edite o array `steps` no começo de `app.js`.

## Dinâmicas copiadas da referência

- Uma pergunta por vez.
- Progresso `Passo X de 8`.
- Avanço com clique ou Enter nas etapas de texto.
- Dica `↵ ou pressione Enter` nas etapas de nome, telefone e ticket médio.
- Alternativas avançam automaticamente ao clicar, exceto a última.
- Telefone usa seletor internacional de DDI quando o CDN carrega, com máscara BR como fallback.
- UTMs, `gclid`, `fbclid`, `msclkid` e `ref` são preservados e enviados no texto do WhatsApp.
- Após o envio, o WhatsApp abre e a aba atual redireciona para `/obrigado/`.

## URLs

- Formulário: https://pages.hurtzcompany.com.br/diagnostico-blefaroplastia-hurtz/
- Obrigado: https://pages.hurtzcompany.com.br/diagnostico-blefaroplastia-hurtz/obrigado/
