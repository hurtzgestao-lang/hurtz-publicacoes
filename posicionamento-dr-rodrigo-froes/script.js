const progressBar = document.querySelector('#progressBar');
const printButton = document.querySelector('#printButton');
const feedGrid = document.querySelector('#feedGrid');
const mobileSections = document.querySelector('.mobile-sections');

const postData = [
  {
    number: '01 · FIXADO',
    title: 'COMECE AQUI',
    idea: 'Apresentação curta do Rodrigo, com lentes de porcelana como foco principal, implantes como segunda frente e sua forma de conduzir uma avaliação.',
    role: 'Apresentação',
    cta: 'Veja como funciona a avaliação nos destaques.'
  },
  {
    number: '02 · FIXADO',
    title: 'ANTES DAS LENTES: O QUE AVALIAR?',
    idea: 'Reel explicando quais critérios Rodrigo confirma antes de conversar sobre indicação de lentes.',
    role: 'Lentes · foco principal',
    cta: 'Entenda quais critérios entram na avaliação.'
  },
  {
    number: '03 · FIXADO',
    title: 'IMPLANTES: POR ONDE COMEÇAR?',
    idea: 'Reel explicando o que Rodrigo avalia antes de conversar sobre um plano de implantes.',
    role: 'Implantes · segunda frente',
    cta: 'Veja como funciona a avaliação.'
  },
  {
    number: '04',
    title: 'HÁ OUTRO CAMINHO ALÉM DAS LENTES?',
    idea: 'Reel explicando que a avaliação pode considerar alternativas, de acordo com o caso e o objetivo da pessoa.',
    role: 'Lentes · alternativas',
    cta: 'Converse sobre as possibilidades na avaliação.'
  },
  {
    number: '05',
    title: 'O QUE AVALIO ANTES DAS LENTES?',
    idea: 'Carrossel mostrando saúde dos dentes, mordida, forma, proporção, expectativa e alternativas antes do planejamento.',
    role: 'Lentes · critério clínico',
    cta: 'Veja o que entra no planejamento.'
  },
  {
    number: '06',
    title: 'O QUE ESTE CASO ENSINA?',
    idea: 'Se houver caso próprio elegível, apresentar contexto, critérios e limites; sem validação, substituir por conteúdo educativo.',
    role: 'Lentes · prova clínica condicional',
    cta: 'Veja os critérios explicados neste conteúdo.'
  },
  {
    number: '07',
    title: 'O QUE MUDA A INDICAÇÃO?',
    idea: 'Reel sobre fatores clínicos e expectativas que podem mudar os caminhos considerados na avaliação.',
    role: 'Lentes · decisão clínica',
    cta: 'Entenda o que pode mudar de um caso para outro.'
  },
  {
    number: '08',
    title: 'DÚVIDAS SOBRE IMPLANTES',
    idea: 'Reel curto com dúvidas reais sobre avaliação, etapas e acompanhamento de implantes, respondidas pelo Rodrigo sem diagnóstico por rede social.',
    role: 'Implantes · dúvidas',
    cta: 'Leve suas dúvidas para a avaliação.'
  },
  {
    number: '09',
    title: 'AVALIAÇÃO EM PARAUAPEBAS',
    idea: 'Conteúdo direto explicando onde Rodrigo atende, como funciona a consulta e como iniciar o contato.',
    role: 'Agendamento',
    cta: 'Fale com a equipe pelo link do perfil.'
  }
];

function updateProgress() {
  if (!progressBar) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = String(Math.min(100, Math.max(0, value))) + '%';
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

function showPost(index) {
  const post = postData[index];
  if (!post) return;

  document.querySelector('#postNumber').textContent = post.number;
  document.querySelector('#postTitle').textContent = post.title;
  document.querySelector('#postIdea').textContent = post.idea;
  document.querySelector('#postRole').textContent = post.role;
  document.querySelector('#postCta').textContent = post.cta;

  feedGrid?.querySelectorAll('[data-post]').forEach((tile) => {
    const isActive = Number(tile.dataset.post) === index;
    tile.classList.toggle('is-active', isActive);
    tile.setAttribute('aria-pressed', String(isActive));
  });
}

feedGrid?.addEventListener('click', (event) => {
  const tile = event.target.closest('[data-post]');
  if (!tile) return;
  showPost(Number(tile.dataset.post));
});

printButton?.addEventListener('click', () => window.print());
mobileSections?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileSections.open = false;
  });
});
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);

showPost(0);
updateProgress();
