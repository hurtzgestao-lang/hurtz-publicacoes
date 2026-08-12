# Tutorial — Skill Benchmark de Mercado

## O que a skill faz

A skill orquestra pesquisas de benchmark por nicho ou por lista de perfis. Ela divide o trabalho entre descoberta, Instagram, Meta Ads, oferta/ICP e QA/editorial; coleta dados públicos; aplica filtros; baixa e transcreve mídias quando possível; e gera dossiês e Wow Documents auditáveis.

O escopo termina nos documentos finais. A skill não cria nem publica site.

## Codex

1. Baixe `benchmark-mercado.zip`.
2. Extraia a pasta em `.agents/skills/` no workspace.
3. Confirme que existe `.agents/skills/benchmark-mercado/SKILL.md`.
4. Solicite a pesquisa mencionando `$benchmark-mercado`.

Exemplo:

> Use `$benchmark-mercado` para pesquisar o nicho [NICHO]. Analise estes perfis: [LISTA]. Use agentes especializados em paralelo, respeite os filtros de anúncios e Reels, preserve as fontes e gere dossiês por player e um Wow Document final. Não crie site.

## Claude Code

Extraia a pasta em `.claude/skills/` ou no diretório de skills configurado no seu projeto. Na conversa, mencione a skill e passe o nicho, os perfis, a janela de análise e os critérios.

> Use a skill `benchmark-mercado` para pesquisar [NICHO]. Separe descoberta, Instagram, Meta Ads, oferta/ICP e QA. Diferencie evidência, inferência e hipótese. Entregue `manifest.json`, dossiês, transcrições, fontes/lacunas e Wow Document.

## Gemini

Envie o `SKILL.md` e, se necessário, as referências da pasta `references/`. Para executar scripts locais, use o Gemini dentro do ambiente que tenha a pasta da skill; somente anexar o arquivo não dá acesso ao seu terminal.

> Leia esta skill como procedimento operacional. Pesquise [NICHO/PERFIS] com fontes públicas, não invente métricas, registre bloqueios e entregue os documentos finais. Não crie site nem landing page.

## Qualquer outra IA

Envie o `SKILL.md` e explique:

- nicho e país;
- perfis, arrobas ou URLs;
- janela de análise;
- filtros mínimos;
- diretório onde os artefatos devem ser salvos;
- formato final desejado.

Peça sempre a separação entre fatos coletados, inferências e hipóteses. A IA também deve registrar o que não conseguiu abrir ou verificar.

## Documentos esperados

- `manifest.json`;
- `dossie.md` por player;
- `wow-document.md` consolidado;
- `transcricoes__consolidado.md`;
- `fontes-e-lacunas.md`;
- mídias elegíveis e seus arquivos de metadata.

## Limites importantes

Não raspar conteúdo privado, burlar login, captcha, paywall ou controles anti-bot. Não tratar cópias de anúncios, views ou engajamento como prova de investimento, lucro ou conversão.
