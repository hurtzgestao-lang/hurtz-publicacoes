(() => {
  'use strict';
  const sections = [...document.querySelectorAll('main > .slide')];
  const chapterLinks = [...document.querySelectorAll('[data-chapter]')];
  const progress = document.querySelector('.deck-progress');
  const count = document.querySelector('.chapter-count');
  const previous = document.getElementById('previous-slide');
  const next = document.getElementById('next-slide');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeSection = 0;
  let scheduled = false;

  function updatePosition() {
    const headerHeight = document.querySelector('.deck-header').offsetHeight;
    const probe = headerHeight + Math.min(window.innerHeight * 0.25, 180);
    activeSection = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= probe) activeSection = index;
    });
    const section = sections[activeSection];
    document.getElementById('current-section').textContent = String(activeSection + 1).padStart(2, '0');
    count.setAttribute('aria-label', `Seção ${activeSection + 1} de ${sections.length}`);
    document.getElementById('section-name').textContent = section.dataset.title;
    chapterLinks.forEach(link => {
      if (link.dataset.chapter === section.dataset.group) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maxScroll > 0 ? Math.min(100, Math.max(0, window.scrollY / maxScroll * 100)) : 100;
    progress.querySelector('span').style.width = `${percentage}%`;
    progress.setAttribute('aria-valuenow', String(Math.round(percentage)));
    previous.disabled = activeSection === 0;
    next.disabled = activeSection === sections.length - 1;
    scheduled = false;
  }
  function queuePosition() {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updatePosition);
    }
  }
  function navigateSection(direction) {
    if (sections[activeSection].id === 'quem-somos') {
      if (direction > 0 && activeAbout === 0) {selectAbout(1);return;}
      if (direction < 0 && activeAbout === 1) {selectAbout(0);return;}
    }
    const index = Math.max(0, Math.min(sections.length - 1, activeSection + direction));
    if (sections[index].id === 'quem-somos') selectAbout(direction > 0 ? 0 : 1);
    sections[index].scrollIntoView({behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start'});
    window.history.replaceState(null, '', `#${sections[index].id}`);
  }
  previous.addEventListener('click', () => navigateSection(-1));
  next.addEventListener('click', () => navigateSection(1));
  window.addEventListener('scroll', queuePosition, {passive: true});
  window.addEventListener('resize', queuePosition);
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.target.closest('button, input, select, textarea, a, [role="tab"], [contenteditable]')) return;
    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      event.preventDefault();
      navigateSection(1);
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      navigateSection(-1);
    }
  });
  const fullscreen = document.getElementById('fullscreen');
  if (!document.fullscreenEnabled) fullscreen.hidden = true;
  fullscreen.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      fullscreen.textContent = 'Tela cheia indisponível';
      fullscreen.disabled = true;
    }
  });
  document.addEventListener('fullscreenchange', () => {
    const enabled = Boolean(document.fullscreenElement);
    fullscreen.textContent = enabled ? 'Sair da tela cheia' : 'Tela cheia';
    fullscreen.setAttribute('aria-label', fullscreen.textContent);
  });

  const aboutTabs = [...document.querySelectorAll('[data-about]')];
  const aboutPanels = aboutTabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
  let activeAbout = 0;
  function selectAbout(index, focus = false) {
    activeAbout = index;
    aboutTabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      aboutPanels[i].hidden = i !== index;
      aboutPanels[i].inert = i !== index;
    });
    if (focus) aboutTabs[index].focus({preventScroll:true});
    queuePosition();
  }
  aboutTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectAbout(index));
    tab.addEventListener('keydown', event => {
      let selected;
      if (event.key === 'ArrowRight' || event.key === 'End') selected = 1;
      else if (event.key === 'ArrowLeft' || event.key === 'Home') selected = 0;
      else return;
      event.preventDefault();
      selectAbout(selected, true);
    });
  });
  selectAbout(window.location.hash === '#about-partners' ? 1 : 0);

  const methods = {
    h: {number:'01', title:'Diagnóstico antes do investimento.', description:'Definimos o procedimento prioritário, o público e a capacidade da agenda. Mapeamos o funil e escolhemos a primeira hipótese a testar.', actions:['Escolher procedimento, público e região.', 'Mapear contato, atendimento, agenda e fechamento.', 'Definir mensagem, canal e primeiro teste.'], metric:'Diagnóstico do funil, ponto de partida dos indicadores e plano de testes.'},
    u: {number:'02', title:'O interesse precisa encontrar uma resposta.', description:'Organizamos responsáveis, tempo de resposta e retornos. Quem chama encontra atendimento; quem já conversou tem continuidade e um próximo passo real.', actions:['Definir responsável e prazo de primeira resposta.', 'Organizar contatos e retornos pendentes.', 'Conduzir o próximo passo com disponibilidade real.'], metric:'Tempo de primeira resposta, contatos sem atendimento e retornos pendentes.'},
    r: {number:'03', title:'Cada conversa tem um próximo passo.', description:'Criamos roteiros e cadências para acolher, entender o interesse e conduzir o agendamento. A equipe sabe como retomar a conversa e confirmar a avaliação.', actions:['Estruturar primeiro contato e agendamento.', 'Organizar follow-up, confirmação e reagendamento.', 'Treinar a equipe com simulações e revisão de conversas.'], metric:'Taxa de agendamento, confirmação e comparecimento.'},
    t: {number:'04', title:'Demanda para o que a clínica quer crescer.', description:'Testamos campanhas e criativos para o procedimento prioritário. A análise acompanha o contato até a agenda, em vez de terminar no custo do lead.', actions:['Definir canais, públicos e investimento.', 'Testar anúncios e ativos de captação.', 'Conectar a origem dos contatos aos registros do CRM.'], metric:'Qualidade dos contatos, custo por agendamento e custo por comparecimento.'},
    z: {number:'05', title:'Encontrar a fuga. Corrigir. Medir de novo.', description:'Revisamos o funil para encontrar a principal perda do momento. Contato sem retorno, avaliação sem confirmação ou oportunidade sem próximo passo viram uma ação com dono e prazo.', actions:['Identificar a etapa em que a demanda se perde.', 'Definir ação, responsável e prazo de correção.', 'Ajustar o processo e acompanhar os indicadores.'], metric:'Conversão por etapa, faltas e pendências sem próxima atividade.'}
  };
  const tabs = [...document.querySelectorAll('[data-method]')];
  function selectMethod(tab, focus = false) {
    const method = methods[tab.dataset.method];
    tabs.forEach(item => {
      item.setAttribute('aria-selected', String(item === tab));
      item.tabIndex = item === tab ? 0 : -1;
    });
    document.getElementById('method-panel').setAttribute('aria-labelledby', tab.id);
    document.getElementById('method-number').textContent = `${method.number} / 05`;
    document.getElementById('method-heading').textContent = method.title;
    document.getElementById('method-description').textContent = method.description;
    document.getElementById('method-metric').textContent = method.metric;
    document.getElementById('method-actions').replaceChildren(...method.actions.map(action => {
      const item = document.createElement('li');
      item.textContent = action;
      return item;
    }));
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectMethod(tab));
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== undefined) {
        event.preventDefault();
        selectMethod(tabs[target], true);
      }
    });
  });

  const recommendations = {
    acquisition: {title:'Aquisição para o procedimento prioritário.', description:'Estruturar a entrada de demanda com mensagem, público e rastreamento definidos. Confirmar que o atendimento e a agenda estão prontos para receber os contatos.', items:['Hipótese de público e mensagem', 'Campanhas, criativos e ativo de captação', 'Origem dos contatos e leitura até a agenda'], label:'Aquisição'},
    service: {title:'Atendimento com continuidade.', description:'Organizar o que acontece entre a primeira mensagem e o comparecimento. A clínica mantém o atendimento; a Hurtz estrutura o processo previsto na proposta.', items:['Roteiros e cadências de atendimento', 'Pipeline, responsáveis e próxima ação', 'Confirmação, reagendamento e indicadores'], label:'Atendimento'},
    complete: {title:'Aquisição e conversão na mesma operação.', description:'Conectar as frentes pelo método HURTZ, com prioridade clara, execução e leitura do funil. O diagnóstico determina o escopo de cada frente.', items:['Campanhas e ativos de captação', 'Atendimento, CRM e organização da agenda', 'Acompanhamento e correção dos gargalos'], label:'Operação completa'}
  };
  const form = document.getElementById('recommendation-form');
  const clear = document.getElementById('clear-priority');
  const deliverables = document.getElementById('recommendation-deliverables');
  const proposal = document.getElementById('proposal-link');
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('change', event => {
    const recommendation = recommendations[event.target.value];
    if (!recommendation) return;
    document.getElementById('recommendation-heading').textContent = recommendation.title;
    document.getElementById('recommendation-description').textContent = recommendation.description;
    deliverables.replaceChildren(...recommendation.items.map(text => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    }));
    deliverables.hidden = false;
    clear.hidden = false;
    proposal.href = `https://wa.me/5594988082290?text=${encodeURIComponent(`Quero alinhar a assessoria Hurtz para minha clínica. Prioridade: ${recommendation.label}.`)}`;
  });
  clear.addEventListener('click', () => {
    form.reset();
    deliverables.hidden = true;
    clear.hidden = true;
    document.getElementById('recommendation-heading').textContent = 'Selecione a prioridade da clínica.';
    document.getElementById('recommendation-description').textContent = 'A recomendação organiza os pontos que vamos discutir. Escopo, investimento e prazo são definidos na proposta.';
    proposal.href = 'https://wa.me/5594988082290?text=Quero%20alinhar%20a%20assessoria%20Hurtz%20para%20minha%20clinica.';
    form.querySelector('input').focus();
  });
  updatePosition();
  window.addEventListener('load', updatePosition, {once: true});
})();
