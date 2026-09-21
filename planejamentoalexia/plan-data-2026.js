(() => {
  const weekdays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const monthDirection = {
    8: {
      closer: 'Em setembro, a direção vem do planejamento: UltraMed é a prioridade de caixa e validação, com reativação segmentada e captação da mentoria em paralelo.',
      stories: ['UltraMed', 'Reativação'],
      post: ['UltraMed', 'Avaliação presencial'],
      videos: ['UltraMed', 'Mentoria'],
    },
    9: {
      closer: 'Em outubro, pacientes e profissionais ficam em funis separados: Mês das Crianças para famílias e Mentoria Ear Line Avançado para profissionais elegíveis.',
      stories: ['Mês das Crianças', 'Mentoria'],
      post: ['Mês das Crianças', 'Otomodelação infantil'],
      videos: ['Mês das Crianças', 'Mentoria'],
    },
    10: {
      closer: 'Em novembro, o conteúdo prepara a base aquecida para uma decisão consciente: informação, avaliação e só depois qualquer condição aprovada.',
      stories: ['Reativação', 'Black Friday'],
      post: ['Black Friday', 'Novembro Azul'],
      videos: ['Black Friday', 'Novembro Azul'],
    },
    11: {
      closer: 'Em dezembro, a comunicação preserva valor: autocuidado, festas, fotos, reservas do Mês das Crianças e Projeto Aurora sem depender de desconto.',
      stories: ['Autocuidado', 'Reservas de férias'],
      post: ['Nova versão', 'Projeto Aurora'],
      videos: ['Nova versão', 'UltraMed', 'Projeto Aurora', 'Reservas de férias'],
    },
  };

  const topics = {
    'UltraMed': {
      title: 'UltraMed: avaliação antes do protocolo',
      format: 'Reels educativo',
      focus: 'Levar mulheres 35+ de Fortaleza para avaliação presencial, sem prometer protocolo fechado.',
      hook: 'Antes de falar em UltraMed, papada, radiofrequência ou enzimas, a gente precisa entender o rosto como um todo.',
      script: 'UltraMed aparece no planejamento como prioridade de setembro, mas ele não deve ser tratado como promessa pronta. A avaliação observa pele, flacidez, contorno, volume, expectativa e histórico. Só depois disso faz sentido conversar sobre lift facial sem corte, papada, radiofrequência, enzimas ou outro caminho aprovado pela doutora Alexia. O objetivo do conteúdo é orientar, não fechar diagnóstico pelo vídeo.',
      visual: 'Doutora Alexia em plano médio, ambiente claro, cortes de avaliação facial sem identificar paciente e texto curto na tela: avaliação primeiro.',
      cta: 'Fale com a equipe e veja os horários de avaliação presencial.',
      pending: 'Termos clínicos, oferta de entrada, custo, elegibilidade e capacidade precisam de validação da doutora Alexia.',
    },
    'Reativação': {
      title: 'Reativação: organizar a dúvida antes da decisão',
      format: 'Stories de orientação',
      focus: 'Acolher leads antigos e engajados sem parecer disparo frio.',
      hook: 'Se você já falou com a Alexia Clinic e deixou a decisão para depois, talvez agora seja a hora de organizar suas dúvidas.',
      script: 'A reativação precisa chamar a pessoa pelo interesse real: UltraMed, otomodelação, avaliação facial, mentoria ou Mês das Crianças. A mensagem não deve empurrar procedimento. Ela deve retomar a conversa, perguntar se a dúvida ainda existe e convidar para entender horários, avaliação e próximos passos com a equipe.',
      visual: 'Sequência simples em stories: pergunta, orientação, bastidor da clínica, caixinha de dúvidas e CTA para WhatsApp.',
      cta: 'Responda a caixinha ou fale com a equipe para retomar sua avaliação.',
      pending: 'Usar API oficial, excluir compradores e separar base por procedimento/interesse.',
    },
    'Mentoria': {
      title: 'Mentoria Ear Line Avançado',
      format: 'Reels para profissionais',
      focus: 'Captar profissionais elegíveis para turmas de Belém e Fortaleza.',
      hook: 'Profissional da estética: aprender otomodelação é mais do que aprender uma técnica.',
      script: 'A Mentoria Ear Line Avançado deve ser apresentada como formação para profissionais elegíveis, com foco em indicação, prática, experiência do paciente, condução técnica e posicionamento. A fala não pode prometer faturamento nem vender para qualquer pessoa. O próximo passo é uma conversa de seleção para entender perfil, atuação, cidade, turma e disponibilidade.',
      visual: 'Bastidores de aula, materiais, orientação individual, alunas autorizadas e a doutora Alexia conduzindo a prática.',
      cta: 'Envie uma mensagem para entender o perfil e as próximas turmas.',
      pending: 'Datas, cidades, capacidade final, responsável pela call e verba de mídia.',
    },
    'Mês das Crianças': {
      title: 'Mês das Crianças: acolhimento para famílias',
      format: 'Reels para mães e responsáveis',
      focus: 'Abrir conversa com famílias de crianças e adolescentes de 7 a 16 anos.',
      hook: 'Quando uma criança ou adolescente se incomoda com as orelhas, a família precisa de acolhimento e critério, não de pressa.',
      script: 'O Mês das Crianças é a frente principal de outubro para pacientes. A comunicação deve falar com responsáveis, explicar que existe uma condição reservada em outubro e que o procedimento pode ser planejado para dezembro ou janeiro, mas sempre depois de avaliação, autorização e critério técnico. O conteúdo precisa acolher inseguranças sem explorar bullying de forma pesada.',
      visual: 'Doutora Alexia falando em tom calmo; bastidores da clínica; não expor crianças sem autorização.',
      cta: 'Fale com a equipe e entenda como funciona a avaliação para famílias.',
      pending: 'Preço, condição, regiões, forma de reserva, validade, limite, autorização de imagem e local do outdoor.',
    },
    'Otomodelação infantil': {
      title: 'Otomodelação infantil: rotina, escola e família',
      format: 'Reels de objeção',
      focus: 'Responder dúvidas sobre escola, medo, recuperação e planejamento familiar.',
      hook: 'A escola costuma ser uma das maiores preocupações quando a família pensa em otomodelação.',
      script: 'O conteúdo deve orientar a família a ouvir a criança ou adolescente, entender se existe incômodo real e levar dúvidas para avaliação. Férias podem ajudar na organização da rotina, mas não substituem critério técnico. Não usar pressão emocional, comparação com outros casos nem promessa de que o procedimento resolve autoestima ou convivência social.',
      visual: 'Plano médio, texto na tela com uma objeção por vez e fechamento com avaliação responsável.',
      cta: 'Converse com a equipe antes de tomar qualquer decisão.',
      pending: 'Consentimento, autorização, elegibilidade por idade e orientação clínica.',
    },
    'Black Friday': {
      title: 'Black Friday: base aquecida sem pressão',
      format: 'Reels de orientação',
      focus: 'Preparar leads antigos e engajados para condição aprovada, sem depender de público frio.',
      hook: 'Uma condição especial não substitui uma avaliação bem feita.',
      script: 'Novembro monetiza a base aquecida. O conteúdo precisa explicar que qualquer condição depende de avaliação, indicação, capacidade e orientação da equipe. A Black Friday deve falar com quem já acompanha, já pediu informação ou já demonstrou interesse, sem prometer resultado e sem criar urgência falsa.',
      visual: 'Doutora Alexia em fala direta, apoio visual discreto de agenda, WhatsApp e equipe.',
      cta: 'Fale com a equipe para entender se existe uma condição disponível para o seu caso.',
      pending: 'Oferta, janela, limite, grupo ou disparo direto, base elegível e capacidade de resposta.',
    },
    'Novembro Azul': {
      title: 'Novembro Azul: conscientização leve',
      format: 'Reels educativo',
      focus: 'Criar presença institucional com baixo orçamento e cuidado de linguagem.',
      hook: 'Novembro Azul é um convite para falar de saúde com responsabilidade.',
      script: 'A frente de Novembro Azul deve ser paralela, leve e sem competir com a Black Friday. O conteúdo pode usar depoimentos masculinos autorizados e conscientização para lembrar homens e famílias de não adiarem cuidado e orientação profissional. Não transformar o vídeo em diagnóstico nem usar medo como motor criativo.',
      visual: 'Fala informativa, depoimento masculino autorizado ou bastidor institucional simples.',
      cta: 'Procure orientação profissional e cuide da sua saúde com responsabilidade.',
      pending: 'Depoimentos, orçamento baixo e validação de abordagem pela clínica.',
    },
    'Nova versão': {
      title: 'Nova versão: autocuidado sem desconto',
      format: 'Reels de posicionamento',
      focus: 'Abrir dezembro com preço normal, valor preservado e contexto de festas/fotos.',
      hook: 'Dezembro não precisa ser sobre desconto. Pode ser sobre planejamento.',
      script: 'A nova versão usa o fim do ano como contexto de autocuidado, festas, fotos e reencontros. A fala deve preservar valor: sem promoção como argumento central, sem promessa de resultado rápido e respeitando tempo clínico, agenda e acompanhamento. A avaliação continua sendo o primeiro passo.',
      visual: 'Doutora Alexia em cenário claro, cortes de avaliação e detalhes elegantes da clínica.',
      cta: 'Fale com a equipe para entender o que pode ser planejado para você.',
      pending: 'Agenda de dezembro, capacidade e mensagens por procedimento.',
    },
    'Autocuidado': {
      title: 'Autocuidado para festas e fotos',
      format: 'Stories de orientação',
      focus: 'Conectar fim de ano com avaliação facial sem pressão estética.',
      hook: 'Se você quer se sentir melhor nas fotos, comece pela avaliação, não pela promessa.',
      script: 'Autocuidado não precisa ser pressa nem exagero. A avaliação entende pele, flacidez, contorno, expectativa e tempo disponível. O roteiro deve mostrar que a pessoa pode se preparar para festas e reencontros, mas sem vender resultado imediato ou protocolo igual para todos.',
      visual: 'Stories com pergunta, bastidor da avaliação, orientação rápida e CTA.',
      cta: 'Agende uma conversa com a equipe.',
      pending: 'Tempo clínico de cada procedimento e capacidade da agenda.',
    },
    'Reservas de férias': {
      title: 'Reservas de férias: continuidade do Mês das Crianças',
      format: 'Reels para responsáveis',
      focus: 'Orientar famílias que reservaram ou querem entender execução em dezembro/janeiro.',
      hook: 'As férias podem ajudar no planejamento, mas não substituem avaliação.',
      script: 'As reservas feitas em outubro podem ser executadas em dezembro ou janeiro apenas quando houver avaliação, elegibilidade, autorização e rotina organizada. O conteúdo deve reduzir ansiedade e reforçar que calendário não é promessa. O primeiro passo continua sendo orientação individual com responsável.',
      visual: 'Doutora Alexia falando para responsáveis, sem mostrar crianças sem autorização.',
      cta: 'Tire suas dúvidas com a equipe sobre avaliação e planejamento.',
      pending: 'Reservas, autorizações, agenda de férias e acompanhamento.',
    },
    'Projeto Aurora': {
      title: 'Projeto Aurora: impacto com responsabilidade',
      format: 'Reels institucional',
      focus: 'Explicar a frente social sem expor crianças nem tratar como campanha comum.',
      hook: 'Impacto social também precisa de critério, cuidado e responsabilidade.',
      script: 'O Projeto Aurora conecta empresários a crianças elegíveis, com avaliação, consentimentos, autorização, apoio e organização. O conteúdo deve mostrar dignidade, proteção de imagem e processo responsável. Não é campanha comum de procedimento nem peça para explorar vulnerabilidade.',
      visual: 'Equipe, ambiente, materiais e bastidores autorizados; evitar identificação sensível.',
      cta: 'Fale com a equipe para conhecer a iniciativa e os critérios.',
      pending: 'Critério de seleção, banco elegível, patrocinadores, estados e cronograma de férias.',
    },
    'Avaliação presencial': {
      title: 'Avaliação presencial: a regra de todos os meses',
      format: 'Post educativo',
      focus: 'Reforçar que nenhum procedimento nasce por direct ou por roteiro.',
      hook: 'O protocolo não nasce no direct. Ele nasce na avaliação presencial.',
      script: 'Na avaliação, a equipe entende queixa, histórico, expectativa, características do rosto ou das orelhas e possibilidades reais. Essa etapa protege a paciente de escolhas impulsivas e evita promessas genéricas. Seja UltraMed, otomodelação, avaliação facial ou planejamento familiar, o caminho responsável começa pela avaliação.',
      visual: 'Carrossel com 4 telas: dúvida, avaliação, orientação e próximo passo.',
      cta: 'Fale com a equipe e veja os horários disponíveis.',
      pending: 'Sempre validar termos clínicos e oferta antes de publicar.',
    },
  };

  function pad(n) { return String(n).padStart(2, '0'); }
  function dateLabel(day, month) { return `${pad(day)}/${pad(month + 1)}`; }
  function weekOfMonth(day) { return Math.floor((day - 1) / 7); }
  function pickTopic(month, day, contentType) {
    const direction = monthDirection[month];
    const list = contentType === 'Vídeo' ? direction.videos : contentType === 'Post' ? direction.post : direction.stories;
    if (month === 8 && contentType === 'Vídeo') return day === 25 ? 'Mentoria' : 'UltraMed';
    if (month === 9 && contentType === 'Vídeo') return [6, 17, 23].includes(day) ? 'Mentoria' : 'Mês das Crianças';
    if (month === 10 && contentType === 'Vídeo') {
      if ([3, 13].includes(day)) return 'Novembro Azul';
      return 'Black Friday';
    }
    if (month === 11 && contentType === 'Vídeo') {
      if ([4].includes(day)) return 'UltraMed';
      if ([15].includes(day)) return 'Projeto Aurora';
      if ([18, 29].includes(day)) return 'Reservas de férias';
      return 'Nova versão';
    }
    return list[weekOfMonth(day) % list.length];
  }
  function contentTypeFor(dateObj) {
    const dow = dateObj.getDay();
    if (dow === 2 || dow === 5) return 'Vídeo';
    if (dow === 3) return 'Post';
    return 'Stories';
  }
  function makeDay(day, month) {
    const dateObj = new Date(2026, month, day);
    const contentType = contentTypeFor(dateObj);
    const theme = pickTopic(month, day, contentType);
    const base = topics[theme];
    const titlePrefix = contentType === 'Stories' ? 'Stories' : contentType === 'Post' ? 'Post' : 'Roteiro';
    const item = {
      date: dateLabel(day, month),
      month,
      week: weekdays[dateObj.getDay()],
      contentType,
      theme,
      title: `${titlePrefix} - ${base.title}`,
      format: contentType === 'Vídeo' ? base.format : contentType === 'Post' ? '1 publicação semanal' : 'Sequência de 5 a 6 stories',
      duration: contentType === 'Vídeo' ? '45-60s' : contentType === 'Post' ? '1 publicação' : '5-6 stories',
      focus: base.focus,
      hook: base.hook,
      script: base.script,
      visual: base.visual,
      cta: base.cta,
      pending: base.pending,
    };
    if (contentType === 'Vídeo') item.options = buildOptions(item, base);
    if (contentType === 'Stories') item.storyItems = buildStories(item, base);
    if (contentType === 'Post') item.post = buildPost(item, base);
    return item;
  }
  function buildSchedule() {
    const out = [];
    for (let month = 8; month <= 11; month += 1) {
      const firstDay = month === 8 ? 18 : 1;
      const daysInMonth = new Date(2026, month + 1, 0).getDate();
      for (let day = firstDay; day <= daysInMonth; day += 1) {
        const dateObj = new Date(2026, month, day);
        if (dateObj.getDay() === 0 || dateObj.getDay() === 6) continue;
        out.push(makeDay(day, month));
      }
    }
    return out;
  }
  function buildOptions(item, base) {
    const closer = monthDirection[item.month].closer;
    return [
      {
        title: 'Opção 1 - Direta',
        hook: item.hook,
        script: `${item.hook} ${item.script} ${closer} O fechamento precisa ser simples: avaliação, conversa com a equipe e validação do que realmente faz sentido para o caso.`,
        visual: item.visual,
        cta: item.cta,
      },
      {
        title: 'Opção 2 - Pergunta real',
        hook: questionHook(item.theme),
        script: `${questionHook(item.theme)} Essa é uma dúvida comum e a resposta responsável começa pela avaliação. ${item.script} ${base.pending} Por isso, a doutora Alexia deve conduzir a fala com calma, sem promessa pronta, levando a pessoa para uma conversa individual.`,
        visual: `Abrir com pergunta na tela, responder olhando para a lente e alternar com cenas de apoio. ${item.visual}`,
        cta: item.cta,
      },
      {
        title: 'Opção 3 - História e contexto',
        hook: storyHook(item.theme),
        script: `${storyHook(item.theme)} ${item.script} ${closer} O roteiro deve terminar reforçando que cada história é individual e que o primeiro passo é sempre orientação com a equipe.`,
        visual: `Começar com uma cena de contexto e entrar na fala da doutora Alexia. ${item.visual}`,
        cta: item.cta,
      },
    ];
  }
  function questionHook(theme) {
    const hooks = {
      'UltraMed': 'Papada, flacidez ou perda de contorno: como saber qual caminho faz sentido?',
      'Mentoria': 'Quem pode participar da Mentoria Ear Line Avançado?',
      'Mês das Crianças': 'Como saber se seu filho ou filha deve passar por uma avaliação?',
      'Black Friday': 'Como aproveitar uma condição sem decidir no impulso?',
      'Novembro Azul': 'Por que tantos homens adiam conversas importantes sobre saúde?',
      'Nova versão': 'Como se planejar para o fim do ano sem correr atrás de promessa rápida?',
      'Projeto Aurora': 'Como fazer impacto social sem expor quem precisa de cuidado?',
      'Reservas de férias': 'Por que as férias podem ajudar no planejamento da família?',
    };
    return hooks[theme] || 'Qual é o primeiro passo responsável para esse caso?';
  }
  function storyHook(theme) {
    const hooks = {
      'UltraMed': 'Muita gente chega pedindo um protocolo, mas o que a Dra. precisa entender primeiro é o rosto.',
      'Mentoria': 'Por trás de uma boa formação existe técnica, seleção de casos e condução do paciente.',
      'Mês das Crianças': 'Quando uma família procura ajuda, quase sempre existe uma história sensível por trás.',
      'Black Friday': 'Datas comerciais podem ajudar, mas não podem substituir critério.',
      'Novembro Azul': 'Conscientização funciona melhor quando fala de cuidado, não de medo.',
      'Nova versão': 'Fim de ano desperta vontade de mudança, mas o plano precisa respeitar tempo clínico.',
      'Projeto Aurora': 'Um projeto social só é forte quando protege a dignidade de cada criança.',
      'Reservas de férias': 'Organizar as férias também pode ser uma forma de cuidar com calma.',
    };
    return hooks[theme] || 'Toda decisão começa melhor quando existe informação e avaliação.';
  }
  function buildStories(item, base) {
    return [
      `Story 1 - Abertura: ${item.hook}`,
      `Story 2 - Direção do dia: ${item.focus}`,
      `Story 3 - Explicação curta: ${item.script}`,
      `Story 4 - Interação: enquete ou caixa de perguntas sobre ${item.theme.toLowerCase()}.`,
      `Story 5 - Bastidor: ${item.visual}`,
      `Story 6 - Fechamento: ${item.cta} Observação interna: ${base.pending}`,
    ];
  }
  function buildPost(item, base) {
    return {
      title: item.title,
      script: `${item.hook}\n\n${item.script}\n\n${monthDirection[item.month].closer}\n\nPendência interna antes de publicar: ${base.pending}`,
      visual: `Carrossel limpo com título, 3 pontos de orientação, uma tela de segurança e CTA. ${item.visual}`,
      cta: item.cta,
    };
  }

  const videos = buildSchedule();
  const filters = ['Todos', 'Vídeos', 'Posts', 'Stories', ...new Set(videos.map((v) => v.theme))];
  const calendar = document.querySelector('#calendar');
  const calendarMonth = document.querySelector('#calendar-month');
  const detail = document.querySelector('#detail');
  const filterBox = document.querySelector('#filters');
  const footer = document.querySelector('footer');
  let active = 'Todos';
  let currentMonth = 8;
  let selected = videos.findIndex((v) => v.month === currentMonth);
  let selectedOption = 0;

  document.querySelector('#prev-month').onclick = () => changeMonth(-1);
  document.querySelector('#next-month').onclick = () => changeMonth(1);
  if (footer) footer.textContent = 'HURTZ COMPANY · Alexia Clinic · Conteúdo alinhado ao planejamento Set-Dez em 21/09/2026';

  function matchesFilter(v) {
    return active === 'Todos' ||
      (active === 'Vídeos' && v.contentType === 'Vídeo') ||
      (active === 'Posts' && v.contentType === 'Post') ||
      (active === 'Stories' && v.contentType === 'Stories') ||
      v.theme === active;
  }
  function firstForMonth(month) {
    const first = videos.findIndex((v) => v.month === month && matchesFilter(v));
    return first >= 0 ? first : videos.findIndex((v) => v.month === month);
  }
  function renderFilters() {
    filterBox.innerHTML = filters.map((f) => `<button class="filter ${f === active ? 'active' : ''}" data-filter="${f}">${f}</button>`).join('');
    filterBox.querySelectorAll('button').forEach((button) => {
      button.onclick = () => {
        active = button.dataset.filter;
        selected = firstForMonth(currentMonth);
        selectedOption = 0;
        render();
      };
    });
  }
  function changeMonth(step) {
    currentMonth = Math.max(8, Math.min(11, currentMonth + step));
    selected = firstForMonth(currentMonth);
    selectedOption = 0;
    renderCalendar();
    renderDetail();
  }
  function renderCalendar() {
    const firstDate = new Date(2026, currentMonth, 1);
    const firstDay = (firstDate.getDay() + 6) % 7;
    const daysInMonth = new Date(2026, currentMonth + 1, 0).getDate();
    calendarMonth.textContent = `${monthNames[currentMonth]} 2026`;
    const cells = [];
    for (let i = 0; i < firstDay; i += 1) cells.push('<span></span>');
    for (let day = 1; day <= daysInMonth; day += 1) {
      const dateObj = new Date(2026, currentMonth, day);
      const weekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
      const index = videos.findIndex((v) => v.month === currentMonth && Number(v.date.slice(0, 2)) === day && matchesFilter(v));
      const enabled = index >= 0;
      const typeClass = enabled ? videos[index].contentType.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
      const label = weekend ? 'Sem conteúdo' : enabled ? videos[index].contentType : 'Sem conteúdo para este filtro';
      cells.push(`<button class="calendar-day ${weekend ? 'weekend' : ''} ${enabled ? 'available' : ''} ${typeClass} ${index === selected ? 'selected' : ''}" aria-label="${day} - ${label}" title="${label}" ${enabled ? `data-index="${index}"` : 'disabled'}>${day}</button>`);
    }
    calendar.innerHTML = cells.join('');
    calendar.querySelectorAll('button[data-index]').forEach((button) => {
      button.onclick = () => {
        selected = Number(button.dataset.index);
        selectedOption = 0;
        renderCalendar();
        renderDetail();
      };
    });
  }
  function renderOption(video) {
    const area = document.querySelector('#option-area');
    if (video.contentType === 'Stories') {
      area.innerHTML = `<div class="script-grid">${video.storyItems.map((item, index) => `<section class="section"><h3>${index + 1}. ${item.split(':')[0]}</h3><p>${item.split(':').slice(1).join(':').trim()}</p></section>`).join('')}</div>`;
      return;
    }
    if (video.contentType === 'Post') {
      area.innerHTML = `<div class="script-grid"><section class="section"><h3>1. Tema do post</h3><p>${video.post.title}</p></section><section class="section"><h3>2. Legenda sugerida</h3><p class="script">${video.post.script}</p></section><section class="section"><h3>3. Como produzir</h3><p>${video.post.visual}</p></section><section class="section"><h3>4. Fechamento</h3><p>${video.post.cta}</p></section></div>`;
      return;
    }
    const option = video.options[selectedOption];
    area.innerHTML = `<div class="option-switcher">${video.options.map((o, i) => `<button class="option-button ${i === selectedOption ? 'active' : ''}" data-option="${i}">${o.title}</button>`).join('')}</div><div class="script-grid"><section class="section"><h3>1. Gancho</h3><p>${option.hook}</p></section><section class="section"><h3>2. Fala sugerida</h3><p class="script">${option.script.replace(/\.\s+/g, '.\n\n')}</p></section><section class="section"><h3>3. Fechamento</h3><p>${option.cta}</p></section><section class="section"><h3>4. Como gravar</h3><p>${option.visual}</p></section><section class="section"><h3>5. Pendência de validação</h3><p>${video.pending}</p></section></div>`;
    area.querySelectorAll('.option-button').forEach((button) => {
      button.onclick = () => {
        selectedOption = Number(button.dataset.option);
        renderOption(video);
      };
    });
  }
  function renderDetail() {
    const v = videos[selected];
    const formatLabel = v.contentType === 'Vídeo' ? v.format : v.contentType;
    detail.classList.remove('swap');
    detail.innerHTML = `<div class="detail-kicker">${v.date} · ${v.week} · ${v.contentType} · ${v.theme}</div><h2>${v.title}</h2><p class="detail-intro">${v.focus}</p><div class="meta"><span>Formato <b>${formatLabel}</b></span><span>Duração <b>${v.duration}</b></span></div><div id="option-area"></div>`;
    renderOption(v);
    requestAnimationFrame(() => detail.classList.add('swap'));
  }
  function render() {
    renderFilters();
    renderCalendar();
    renderDetail();
  }
  render();
})();


