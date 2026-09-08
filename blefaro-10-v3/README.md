# Blefaro 10 V3

Versão separada da V2, criada em 08/09/2026 a pedido de Klebson com a revisão de copy baseada nas habilidades Hormozi.

URL: https://pages.hurtzcompany.com.br/blefaro-10-v3/

## Direção e estrutura

- Identidade herdada da V2: Inter local, fundos Hurtz, Carvão, Off-white e CTAs verdes com animação já aprovada. Movimento reduzido respeitado.
- Sequência: abertura com formulário, faixa, cases, Marcos, processo, entregas, perfil, autonomia, convite final, FAQ e rodapé.
- Ativos locais: logos, fundos, retratos reais dos três cases e de Marcos, seis composições de entregas, fonte Inter e Lucide com licenças.
- Estilo centralizado em `styles.css`; tamanhos de texto por breakpoint, sem escala em `vw`.

## Copy aplicada

- Meta de dez vendas adicionais coerente no H1, faixa e FAQ.
- Benefício da sessão gratuita explicado antes do CTA.
- “Quem vai te atender” junto do nome, credencial e parágrafo curto do Marcos.
- Entregas descritas em ações concretas e situações reconhecíveis no atendimento.
- Sessão estratégica gratuita padronizada no site e na mensagem de WhatsApp.
- Prazos tratados pelo cronograma da proposta, sem promessa de primeira consulta em sete dias.
- Cases preservados: Sidney 117 vendas em um mês, Luma seis no primeiro mês, Sarah três em uma semana com R$ 500 em anúncios.

Fonte editorial: revisão de 08/09/2026 em `vendas/analises/referencias-copy/blefaro-10-alpha/REVISAO-COPY-HORMOZI-2026-09-08.md`, no workspace principal.

## Funcionamento e verificação

Página estática sem build. `index.html` funciona diretamente no navegador. O formulário valida seis campos e prepara uma mensagem no WhatsApp. A pessoa precisa enviá-la e combinar o horário; não existe envio automático nem reserva de agenda.

Os verificadores em `qa/` usam Playwright e Google Chrome local. Executar com `PREVIEW_URL` apontando para esta versão. Os testes interceptam a abertura do WhatsApp para não enviar mensagens reais. Capturas e relatórios gerados são ignorados pelo Git.

Validação local: nove larguras de 320 a 1920 px, CTA na primeira tela mobile, título de autoridade em uma linha, campos e validação do formulário, mensagem de WhatsApp, FAQ por mouse e teclado, privacidade, espaçamento de texto e carregamento dos seis materiais. Imagens de desktop e celular inspecionadas.

Publicação via commit e push no repositório `hurtzgestao-lang/hurtz-publicacoes`, com deploy automático no Cloudflare Pages.
