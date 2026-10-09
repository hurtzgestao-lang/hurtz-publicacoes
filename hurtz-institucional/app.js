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

  const tabGroups = [];
  document.querySelectorAll('[data-tabs]').forEach((group) => {
    const tabs = [...group.querySelectorAll('[role="tab"][aria-controls]')]
      .filter((tab) => tab.closest('[data-tabs]') === group);
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
    if (!tabs.length || panels.some((panel) => !panel || !group.contains(panel))) return;

    function activate(index, focus = false) {
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[tabIndex].hidden = !selected;
      });
      if (focus) tabs[index].focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(index));
      tab.addEventListener('keydown', (event) => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(next, true);
      });
    });

    const selectedIndex = tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
    activate(selectedIndex < 0 ? 0 : selectedIndex);
    tabGroups.push({ group, tabs, activate });
  });

  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');

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
  const sectionLabels = {
    capa: 'Abertura',
    gargalo: 'O gargalo',
    empresa: 'A Hurtz',
    resultados: 'Resultados',
    metodo: 'O método',
    solucoes: 'Soluções',
    execucao: 'Execução',
    diagnostico: 'Diagnóstico',
    conversa: 'Próximo passo',
  };
  let activeIndex = 0;
  let scrollPending = false;

  function updateSectionState() {
    if (!sections.length) return;
    const count = `${String(activeIndex + 1).padStart(2, '0')} / ${String(sections.length).padStart(2, '0')}`;
    if (deckCount) deckCount.textContent = count;
    if (sectionCount) sectionCount.textContent = count;
    const section = sections[activeIndex];
    if (sectionName) sectionName.textContent = section.dataset.title || sectionLabels[section.id] || '';
    if (previousButton) previousButton.disabled = activeIndex === 0;
    if (nextButton) nextButton.disabled = activeIndex === sections.length - 1;
    siteNav?.querySelectorAll('a[href^="#"]').forEach((link) => {
      const active = link.getAttribute('href') === `#${section.id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function updateScrollState() {
    if (progress) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      progress.max = 100;
      progress.value = scrollable > 0 ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100)) : 0;
    }
    if (sections.length) {
      const readingPoint = window.innerHeight * 0.36;
      let index = 0;
      sections.forEach((section, sectionIndex) => {
        if (section.getBoundingClientRect().top <= readingPoint) index = sectionIndex;
      });
      if (activeIndex !== index) {
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
    updateSectionState();
    sections[activeIndex].scrollIntoView({
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
      block: 'start',
    });
  }

  function setPresentation(enabled) {
    document.body.classList.toggle('presentation', enabled);
    if (deckControls) deckControls.hidden = !enabled;
    presentationButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(enabled));
      button.setAttribute('aria-label', enabled ? 'Sair do modo apresentação' : 'Entrar no modo apresentação');
      const label = button.querySelector('span');
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

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(requestScrollUpdate, {
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });
    sections.forEach((section) => sectionObserver.observe(section));
  }
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

  const diagnosticForm = document.getElementById('diagnostic-form');
  const diagnosticResult = document.getElementById('diagnostic-result');
  const priorityTitle = document.getElementById('priority-title');
  const priorityCopy = document.getElementById('priority-copy');
  const diagnosticSummary = document.getElementById('diagnostic-summary');
  const diagnosticWhatsapp = document.getElementById('diagnostic-whatsapp');
  const verticalLabels = { clinicas: 'Clínica', consorcio: 'Consórcio', outro: 'Outro negócio' };
  const demandLabels = { pouca: 'Pouca demanda', constante: 'Demanda constante', irregular: 'Demanda irregular' };
  const bottleneckLabels = {
    captacao: 'Captação de oportunidades',
    atendimento: 'Atendimento e acompanhamento',
    conversao: 'Conversão comercial',
    dados: 'Dados e mensuração',
  };

  if (diagnosticForm && diagnosticResult && priorityTitle && priorityCopy && diagnosticSummary) {
    diagnosticForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!diagnosticForm.reportValidity()) return;
      const formData = new FormData(diagnosticForm);
      const vertical = formData.get('vertical');
      const demand = formData.get('demanda');
      const bottleneck = formData.get('gargalo');
      if (!verticalLabels[vertical] || !demandLabels[demand] || !bottleneckLabels[bottleneck]) {
        notify('Selecione o tipo de negócio, o momento da demanda e o gargalo principal.');
        return;
      }

      const endpoint = vertical === 'clinicas' ? 'do contato ao agendamento e ao comparecimento'
        : vertical === 'consorcio' ? 'do contato à qualificação, à proposta e à venda da cota'
          : 'do primeiro contato à oportunidade e à venda';
      const priorities = {
        captacao: {
          title: demand === 'constante' ? 'Qualificar a captação' : 'Organizar a geração de demanda',
          copy: 'Revisar a oferta, o perfil do público e os criativos. O próximo passo é conectar a campanha a um processo de qualificação antes de aumentar o investimento.',
        },
        atendimento: {
          title: 'Organizar a resposta ao lead',
          copy: 'Definir responsáveis, tempo de resposta e acompanhamento no WhatsApp ou CRM. O próximo passo é dar continuidade aos contatos que já chegam.',
        },
        conversao: {
          title: 'Melhorar a condução comercial',
          copy: 'Revisar a qualificação, o roteiro da conversa e os motivos de perda. O próximo passo é orientar o atendimento e acompanhar a evolução das oportunidades.',
        },
        dados: {
          title: 'Medir o caminho até o resultado',
          copy: `Relacionar a origem da demanda às etapas ${endpoint}. O próximo passo é definir os indicadores que mostram onde as oportunidades avançam ou se perdem.`,
        },
      };
      const priority = priorities[bottleneck];
      priorityTitle.textContent = priority.title;
      priorityCopy.textContent = priority.copy;
      const summary = [
        `Negócio: ${verticalLabels[vertical]}`,
        `Momento: ${demandLabels[demand]}`,
        `Gargalo: ${bottleneckLabels[bottleneck]}`,
        `Prioridade da conversa: ${priority.title}`,
      ];
      diagnosticSummary.replaceChildren(...summary.map((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
      }));
      if (diagnosticWhatsapp) {
        diagnosticWhatsapp.href = whatsappUrl(`Olá, fiz o diagnóstico na página da Hurtz.\n\n${summary.join('\n')}\n\nQuero conversar sobre o próximo passo para o meu negócio.`);
      }
      diagnosticResult.hidden = false;
      diagnosticForm.hidden = true;
      diagnosticResult.focus({ preventScroll: true });

      tabGroups.forEach(({ group, tabs, activate }) => {
        if (!group.closest('#solucoes')) return;
        const index = tabs.findIndex((tab) => tab.dataset.vertical === vertical);
        if (index >= 0) activate(index);
      });
      diagnosticResult.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
    });

    document.getElementById('diagnostic-reset')?.addEventListener('click', () => {
      diagnosticForm.reset();
      diagnosticForm.hidden = false;
      diagnosticResult.hidden = true;
      diagnosticSummary.replaceChildren();
      priorityTitle.textContent = '';
      priorityCopy.textContent = '';
      diagnosticWhatsapp?.removeAttribute('href');
      diagnosticForm.querySelector('input')?.focus({ preventScroll: true });
      diagnosticForm.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
    });
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
