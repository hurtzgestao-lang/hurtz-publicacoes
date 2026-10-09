(() => {
  'use strict';

  const whatsappBase = 'https://wa.me/5594988082290';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const statusMessage = document.getElementById('status-message');
  let statusTimer;

  function notify(message) {
    if (!statusMessage) return;
    window.clearTimeout(statusTimer);
    statusMessage.textContent = message;
    statusMessage.hidden = false;
    statusMessage.classList.add('is-visible');
    statusTimer = window.setTimeout(() => {
      statusMessage.classList.remove('is-visible');
      statusMessage.hidden = true;
    }, 6000);
  }

  function whatsappUrl(message) {
    return `${whatsappBase}?text=${encodeURIComponent(message)}`;
  }

  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.href = whatsappUrl(link.dataset.message || 'Olá, quero conversar com a Hurtz sobre o meu negócio.');
  });

  document.querySelectorAll('[data-tabs]').forEach((group) => {
    const tabs = [...group.querySelectorAll('[role="tab"][aria-controls]')]
      .filter((tab) => tab.closest('[data-tabs]') === group);
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
    if (!tabs.length || panels.some((panel) => !panel || !group.contains(panel))) return;
    const previous = group.querySelector('[data-prev-tab]');
    const next = group.querySelector('[data-next-tab]');
    let selectedIndex = tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');

    function activate(index, focus = false) {
      selectedIndex = Math.max(0, Math.min(tabs.length - 1, index));
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === selectedIndex;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[tabIndex].hidden = !selected;
      });
      if (previous) previous.disabled = selectedIndex === 0;
      if (next) next.disabled = selectedIndex === tabs.length - 1;
      if (focus) tabs[selectedIndex].focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(index));
      tab.addEventListener('keydown', (event) => {
        let targetIndex;
        if (event.key === 'ArrowRight') targetIndex = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') targetIndex = (index + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') targetIndex = 0;
        else if (event.key === 'End') targetIndex = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(targetIndex, true);
      });
    });
    previous?.addEventListener('click', () => activate(selectedIndex - 1));
    next?.addEventListener('click', () => activate(selectedIndex + 1));
    activate(selectedIndex < 0 ? 0 : selectedIndex);
  });

  const flipCards = [];
  let activeFlip = null;

  function closeFlip(card) {
    card.open = false;
    card.querySelector('summary')?.focus({ preventScroll: true });
  }

  document.querySelectorAll('.client-wall, .leaders-grid').forEach((group) => {
    const cards = [...group.querySelectorAll('details.client-card, details.leader')];
    cards.forEach((card) => {
      const back = card.querySelector('.leader-bio') || card.querySelector(':scope > div');
      if (!back) return;
      flipCards.push(card);
      const backButton = document.createElement('button');
      backButton.type = 'button';
      backButton.className = 'flip-back-close';
      backButton.textContent = 'Voltar';
      backButton.setAttribute('aria-label', card.classList.contains('leader') ? 'Voltar ao retrato' : 'Voltar ao cartão do cliente');
      backButton.addEventListener('click', () => closeFlip(card));
      back.append(backButton);
      back.addEventListener('click', (event) => {
        if (event.target instanceof Element && event.target.closest('a, button, input, select, textarea')) return;
        closeFlip(card);
      });
      card.addEventListener('toggle', () => {
        if (card.open) {
          activeFlip = card;
          cards.forEach((other) => {
            if (other !== card) other.open = false;
          });
        } else if (activeFlip === card) {
          activeFlip = null;
        }
      });
    });
  });

  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');
  const siteHeader = document.getElementById('site-header');

  function closeMenu() {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    siteNav.classList.remove('is-open');
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      siteNav.classList.toggle('is-open', open);
    });
    siteNav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  const sections = [...document.querySelectorAll('.deck-section')];
  const deckControls = document.getElementById('deck-controls');
  const previousButton = document.getElementById('deck-prev');
  const nextButton = document.getElementById('deck-next');
  const deckCount = document.getElementById('deck-count');
  const sectionCount = document.getElementById('section-count');
  const sectionName = document.getElementById('section-name');
  const progress = document.getElementById('read-progress');
  const presentationButtons = [...document.querySelectorAll('[data-present]')];
  let activeIndex = 0;
  let scrollPending = false;
  let scrollTarget = null;
  let scrollTargetUntil = 0;

  function updateSectionState() {
    if (!sections.length) return;
    const section = sections[activeIndex];
    const count = `${String(activeIndex + 1).padStart(2, '0')} / ${String(sections.length).padStart(2, '0')}`;
    if (deckCount) deckCount.textContent = count;
    if (sectionCount) sectionCount.textContent = count;
    if (sectionName) sectionName.textContent = section.dataset.title || '';
    if (previousButton) previousButton.disabled = activeIndex === 0;
    if (nextButton) nextButton.disabled = activeIndex === sections.length - 1;
    siteNav?.querySelectorAll('a[href^="#"]').forEach((link) => {
      const active = link.dataset.chapter
        ? link.dataset.chapter === section.dataset.chapter
        : link.getAttribute('href') === `#${section.id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function updateScrollState() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100)) : 0;
    if (progress) {
      if (progress.tagName === 'PROGRESS') {
        progress.max = 100;
        progress.value = percent;
      } else {
        progress.style.width = `${percent}%`;
        progress.setAttribute('aria-valuenow', String(Math.round(percent)));
      }
    }
    if (sections.length) {
      const readingPoint = Math.max(siteHeader?.getBoundingClientRect().height || 0, window.innerHeight * 0.36);
      let index = 0;
      sections.forEach((section, sectionIndex) => {
        if (section.getBoundingClientRect().top <= readingPoint) index = sectionIndex;
      });
      siteHeader?.classList.toggle('is-dark', sections[index].classList.contains('dark'));
      if (scrollTarget === index || performance.now() >= scrollTargetUntil) scrollTarget = null;
      if (scrollTarget === null && activeIndex !== index) {
        activeIndex = index;
        updateSectionState();
      }
    }
    scrollPending = false;
  }

  function requestScrollUpdate() {
    if (scrollPending) return;
    scrollPending = true;
    window.requestAnimationFrame(updateScrollState);
  }

  function goToSection(index) {
    if (!sections.length) return;
    activeIndex = Math.max(0, Math.min(sections.length - 1, index));
    scrollTarget = activeIndex;
    scrollTargetUntil = performance.now() + 1200;
    updateSectionState();
    sections[activeIndex].scrollIntoView({
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
      block: 'start',
    });
    window.setTimeout(requestScrollUpdate, 1250);
  }

  function setPresentation(enabled) {
    document.body.classList.toggle('presentation', enabled);
    if (deckControls) deckControls.hidden = !enabled;
    presentationButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(enabled));
      button.setAttribute('aria-label', enabled ? 'Sair do modo apresentação' : 'Entrar no modo apresentação');
      const label = button.querySelector('[data-present-label], span:not(#section-count)');
      if (label) label.textContent = enabled ? 'Sair' : 'Apresentar';
    });
    closeMenu();
    requestScrollUpdate();
  }

  presentationButtons.forEach((button) => {
    button.addEventListener('click', () => setPresentation(!document.body.classList.contains('presentation')));
  });
  previousButton?.addEventListener('click', () => goToSection(activeIndex - 1));
  nextButton?.addEventListener('click', () => goToSection(activeIndex + 1));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const openFlip = flipCards.find((card) => card.open && card.contains(event.target))
        || (activeFlip?.open ? activeFlip : flipCards.find((card) => card.open));
      if (openFlip) {
        event.preventDefault();
        closeFlip(openFlip);
        return;
      }
      closeMenu();
      if (document.body.classList.contains('presentation')) setPresentation(false);
      return;
    }
    if (!document.body.classList.contains('presentation') || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target instanceof Element && event.target.closest('input, textarea, select, [role="tab"], [contenteditable="true"]')) return;
    if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(event.key)) {
      event.preventDefault();
      goToSection(activeIndex + 1);
    } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      goToSection(activeIndex - 1);
    }
  });

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate, { passive: true });
  window.addEventListener('load', requestScrollUpdate, { once: true });
  updateSectionState();
  updateScrollState();

  const fullscreenButton = document.getElementById('fullscreen-toggle');
  if (fullscreenButton) {
    const fullscreenAvailable = typeof document.documentElement.requestFullscreen === 'function';
    fullscreenButton.hidden = !fullscreenAvailable;
    fullscreenButton.addEventListener('click', async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else if (fullscreenAvailable) await document.documentElement.requestFullscreen();
      } catch {
        notify('Este navegador não permitiu abrir a tela cheia. O modo apresentação continua disponível.');
      }
    });
    document.addEventListener('fullscreenchange', () => {
      const fullscreen = Boolean(document.fullscreenElement);
      fullscreenButton.setAttribute('aria-pressed', String(fullscreen));
      fullscreenButton.setAttribute('aria-label', fullscreen ? 'Sair da tela cheia' : 'Abrir em tela cheia');
      requestScrollUpdate();
    });
  }

  const callNotes = document.getElementById('call-notes');
  const notesFeedback = document.getElementById('notes-feedback');
  const noteLabels = {
    midia: 'Investimento em mídia',
    origem: 'Origem dos clientes',
    posicionamento: 'Presença digital',
    mensuracao: 'Mensuração dos resultados',
    atendimento: 'Atendimento e acompanhamento',
    motivo: 'Motivo da conversa',
  };
  const scopeForm = document.getElementById('scope-form');
  const recommendationTitle = document.getElementById('recommendation-title');
  const recommendationCopy = document.getElementById('recommendation-copy');
  const selectedSummary = document.getElementById('selected-summary');
  const scopeOpen = document.getElementById('scope-open');
  const scopeDetails = document.getElementById('scope-details');
  const scopeDetailTitle = document.getElementById('scope-detail-title');
  const scopeList = document.getElementById('scope-list');
  const recommendationWhatsapp = document.getElementById('recommendation-whatsapp');
  const initialTitle = recommendationTitle?.textContent || '';
  const initialCopy = recommendationCopy?.textContent || '';
  const marketLabels = { clinicas: 'Clínicas', consorcio: 'Consórcio' };
  const stages = {
    planejar: { title: 'Saber', copy: 'Entender a operação e definir o plano de aquisição e conversão antes de investir.' },
    estruturar: { title: 'Ter', copy: 'Implementar os ativos de captação, CRM e atendimento necessários para a operação funcionar.' },
    operar: { title: 'Executar', copy: 'Executar campanhas, acompanhar o atendimento e ler os resultados junto com a sua equipe.' },
    melhorar: { title: 'Potencializar', copy: 'Analisar uma operação ativa, localizar perdas e testar melhorias para o próximo estágio.' },
  };
  const scopes = {
    clinicas: {
      planejar: ['Diagnóstico da aquisição, do atendimento e do caminho até a agenda.', 'Definição do procedimento prioritário e da capacidade de atendimento.', 'Plano de campanhas, criativos e ativos de captação.', 'Indicadores de resposta, agendamento, comparecimento e venda registrada.'],
      estruturar: ['Configuração dos ativos de captação previstos no escopo.', 'Organização do CRM comercial, etapas e responsáveis.', 'Roteiros e cadências de atendimento, acompanhamento e confirmação.', 'Rastreamento e indicadores do funil comercial.'],
      operar: ['Gestão das campanhas e dos testes de criativos contratados.', 'Acompanhamento da demanda, da resposta e dos agendamentos.', 'Orientação do atendimento e leitura dos motivos de perda.', 'Leitura do comparecimento e das vendas registradas.'],
      melhorar: ['Diagnóstico das fugas entre demanda, atendimento, agenda e venda.', 'Revisão de campanhas, criativos e ativos de captação.', 'Ajustes de roteiro, acompanhamento e confirmação.', 'Priorização das melhorias com base nos indicadores da clínica.'],
    },
    consorcio: {
      planejar: ['Diagnóstico da carteira, da captação e da qualificação das oportunidades.', 'Definição do público e dos tipos de bem e crédito prioritários.', 'Plano de campanhas, criativos e qualificação.', 'Indicadores de investimento, contatos, propostas e vendas de cotas.'],
      estruturar: ['Implementação do qualificador previsto no escopo.', 'Configuração do Lead Card e das integrações previstas.', 'Organização do CRM, pipeline e classificação dos contatos.', 'Configuração dos indicadores de aquisição e conversão.'],
      operar: ['Gestão das campanhas Meta Ads e dos testes de criativos.', 'Acompanhamento da aquisição e da qualificação dos contatos.', 'Leitura do pipeline e das oportunidades em negociação.', 'Ajustes de campanha e acompanhamento dos indicadores de ROI.'],
      melhorar: ['Diagnóstico das fugas entre captação, qualificação, proposta e venda.', 'Revisão dos criativos, públicos e orçamento de mídia.', 'Ajustes na qualificação e na condução das oportunidades.', 'Priorização das melhorias a partir do pipeline e dos resultados registrados.'],
    },
  };

  function scopeSelection() {
    if (!scopeForm) return {};
    const data = new FormData(scopeForm);
    const market = data.get('market');
    const stage = data.get('stage');
    return { market, stage, complete: Boolean(marketLabels[market] && stages[stage]) };
  }

  function updateWhatsapp() {
    if (!recommendationWhatsapp) return;
    const { market, stage, complete } = scopeSelection();
    const summary = [];
    if (complete) summary.push(`Negócio: ${marketLabels[market]}`, `Momento: ${stages[stage].title}`);
    if (callNotes) {
      const notes = new FormData(callNotes);
      Object.entries(noteLabels).forEach(([name, label]) => {
        const value = String(notes.get(name) || '').trim();
        if (value) summary.push(`${label}: ${value}`);
      });
    }
    recommendationWhatsapp.href = whatsappUrl(`Olá, quero conversar com a Hurtz sobre o escopo para o meu negócio.${summary.length ? `\n\n${summary.join('\n')}` : ''}`);
  }

  function renderScope() {
    const { market, stage, complete } = scopeSelection();
    if (!complete || !scopeList) return;
    if (scopeDetailTitle) scopeDetailTitle.textContent = `${stages[stage].title} · ${marketLabels[market]}`;
    scopeList.replaceChildren(...scopes[market][stage].map((description) => {
      const item = document.createElement('li');
      item.textContent = description;
      return item;
    }));
  }

  function updateScope() {
    const { market, stage, complete } = scopeSelection();
    if (scopeOpen) scopeOpen.disabled = !complete;
    if (recommendationTitle) recommendationTitle.textContent = complete ? `${stages[stage].title} · ${marketLabels[market]}` : initialTitle;
    if (recommendationCopy) recommendationCopy.textContent = complete ? stages[stage].copy : initialCopy;
    if (selectedSummary) selectedSummary.textContent = complete
      ? `${marketLabels[market]} · ${stages[stage].title}`
      : marketLabels[market] ? `${marketLabels[market]} · selecione o momento do negócio`
        : stages[stage] ? `${stages[stage].title} · selecione o tipo de negócio`
          : 'Selecione o tipo e o momento do seu negócio.';
    if (scopeDetails && !scopeDetails.hidden) {
      if (complete) renderScope();
      else scopeDetails.hidden = true;
    }
    updateWhatsapp();
  }

  if (callNotes) {
    callNotes.addEventListener('submit', (event) => event.preventDefault());
    callNotes.addEventListener('input', () => {
      if (notesFeedback) notesFeedback.textContent = 'Anotações do diagnóstico atualizadas.';
      updateWhatsapp();
    });
    document.getElementById('notes-clear')?.addEventListener('click', () => {
      callNotes.reset();
      if (notesFeedback) notesFeedback.textContent = 'Anotações limpas.';
      updateWhatsapp();
    });
  }

  if (scopeForm) {
    scopeForm.addEventListener('submit', (event) => event.preventDefault());
    scopeForm.addEventListener('change', updateScope);
    scopeOpen?.addEventListener('click', () => {
      if (!scopeSelection().complete || !scopeDetails) return;
      renderScope();
      scopeDetails.hidden = false;
      scopeDetailTitle?.setAttribute('tabindex', '-1');
      scopeDetailTitle?.focus({ preventScroll: true });
      scopeDetails.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
    });
    document.getElementById('scope-close')?.addEventListener('click', () => {
      if (scopeDetails) scopeDetails.hidden = true;
      scopeOpen?.focus({ preventScroll: true });
    });
    updateScope();
  }

  document.getElementById('copy-link')?.addEventListener('click', async () => {
    const url = new URL(window.location.href);
    url.hash = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url.href);
      notify('Link copiado.');
    } catch {
      notify(`Copie o endereço para compartilhar: ${url.href}`);
    }
  });
})();
