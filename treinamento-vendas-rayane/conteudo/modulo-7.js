window.CURSO = window.CURSO || {};
window.FONTES = window.FONTES || {};
Object.assign(window.FONTES, {
  oldroyd2011: { a: 'James Oldroyd, Kristina McElheran e David Elkington', t: 'The short life of online sales leads, Harvard Business Review, 2011', url: 'https://scholarsarchive.byu.edu/facpub/9711' },
  gollwitzer2006: { a: 'Peter Gollwitzer e Paschal Sheeran', t: 'Implementation intentions and goal achievement: a meta-analysis of effects and processes, Advances in Experimental Social Psychology, 2006', url: 'https://www.socmot.uni-konstanz.de/publications/implementation-intentions-and-goal-achievement-meta-analysis-effects-and-processes' },
  cialdini1984: { a: 'Robert Cialdini', t: 'Influence: the psychology of persuasion, 1984 (capítulo de compromisso e coerência)', url: 'https://news.wpcarey.asu.edu/20070117-gentle-science-persuasion-part-four-consistency' },
  iyengar2000: { a: 'Sheena Iyengar e Mark Lepper', t: 'When choice is demotivating, Journal of Personality and Social Psychology, 2000', url: 'https://faculty.washington.edu/jdb/345/345%20Articles/Iyengar%20&%20Lepper%20(2000).pdf' },
  scheibehenne2010: { a: 'Benjamin Scheibehenne, Rainer Greifeneder e Peter Todd', t: 'Can there ever be too many options? A meta-analytic review of choice overload, Journal of Consumer Research, 2010', url: 'https://edoc.unibas.ch/48789' }
});
window.CURSO.m7 = {
  id: 'm7', n: 7, t: 'WhatsApp e agendamento', d: 'Como transformar a mensagem do anúncio em avaliação marcada, paga e com a paciente sentada na sua cadeira.',
  aulas: [
    {
      t: 'Responder enquanto ela ainda está com o celular na mão',
      resumo: 'Quem clicou no anúncio está quente agora; daqui a algumas horas ela já está fazendo outra coisa.',
      texto: [
        'A paciente que clica no anúncio e manda "vi o anúncio e quero agendar minha avaliação" está naquele minuto pensando no rosto dela. Ela abriu o WhatsApp, escreveu e está esperando. Se a resposta chega em cinco minutos, ela ainda está ali. Se chega três horas depois, ela está fazendo janta, cuidando de neto, no trabalho. A mensagem vira mais uma no meio de vinte conversas. O interesse não some, mas esfria, e reaquecer dá muito mais trabalho do que responder na hora.',
        'Na avaliação do seu atendimento de novembro apareceu uma coisa boa: quando você está com o celular na mão, responde rápido, inclusive sábado e domingo. O problema aparece nos momentos em que você está atendendo. Aí a resposta pode levar de uma a doze horas. Não é falta de vontade, é a agenda. Por isso a solução não é "responder mais rápido sempre", que é impossível com paciente na cadeira. A solução é ter janelas fixas pra olhar o celular e uma mensagem pronta pra quando não der.',
        'Uma janela simples: entre um atendimento e outro, dois minutos olhando só as conversas novas do anúncio. Não precisa resolver tudo. Basta mandar a primeira mensagem com o nome dela e uma pergunta fácil, e voltar depois pra continuar. Isso já mostra que tem gente do outro lado. Quem foi respondida sente que foi vista, e quem foi vista espera um pouco mais pela segunda mensagem.',
        'Quando a IA estiver ligada, ela cobre noite e fim de semana. Mesmo assim, vale a regra: lead novo do anúncio tem prioridade sobre conversa antiga que já está andando. A conversa antiga já tem vínculo. A nova ainda não tem nada, e é ela que esfria primeiro.'
      ],
      ciencia: [
        { ref: 'oldroyd2011', tipo: 'Estudo', txt: 'Os autores auditaram o tempo de resposta de 2.241 empresas americanas a contatos que chegavam pela internet. Muitas demoravam mais de um dia e quase um quarto nem respondia. A conclusão foi que a chance de qualificar o contato cai muito quando a resposta passa da primeira hora. Limite: é estudo com empresas e vendas em geral, não com clínica de estética nem WhatsApp. Serve como direção, não como número exato pra você.' }
      ],
      passos: [
        'Defina 3 janelas fixas por dia de atendimento pra olhar só as conversas novas do anúncio.',
        'Na janela, responda primeiro quem chegou do anúncio e ainda não recebeu nada.',
        'Mande a primeira mensagem curta, com o nome dela, mesmo que não dê pra continuar agora.',
        'Se for demorar, avise: "Estou em atendimento, daqui a pouco te respondo com calma".',
        'No fim do dia, confira se ficou alguma conversa do anúncio sem nenhuma resposta.'
      ],
      exemplo: [
        ['p', 'Vi o anúncio e quero agendar minha avaliação'],
        ['d', 'Oi, Maria! Aqui é a Rayane, tudo bem?'],
        ['d', 'Estou terminando uma paciente agora. Daqui a 20 minutinhos te chamo pra gente ver seu horário, tá?'],
        ['p', 'Tá bom, obrigada'],
        ['d', 'Voltei! Me conta, o que mais te incomoda hoje no rosto?']
      ],
      erros: [
        'Deixar a primeira resposta pra noite: ela já esfriou e você está cansada pra conduzir.',
        'Responder conversa antiga antes do lead novo: a antiga aguenta esperar, a nova não.',
        'Sumir sem avisar quando está atendendo: o silêncio parece desinteresse.'
      ],
      pratica: 'Durante uma semana, anote em um papel a hora em que cada lead do anúncio chegou e a hora da sua primeira resposta. No sábado, conte quantos foram respondidos em menos de 1 hora e quantos desses marcaram.',
      q: [
        ['Qual é a melhor saída quando você está atendendo e chega um lead do anúncio?', 'Mandar uma mensagem curta com o nome dela avisando que já volta', 'Esperar terminar o dia pra responder tudo com calma', 'Não responder até ter um horário livre na agenda', 'A primeira resposta curta mostra que tem gente do outro lado e segura a paciente quente.'],
        ['Segundo a avaliação de novembro, onde você perde velocidade?', 'Nos momentos em que está atendendo', 'No fim de semana, porque não olha o celular', 'Sempre, porque responde devagar', 'Com o celular na mão você responde rápido. A demora vem da agenda cheia.'],
        ['O estudo de Oldroyd e colegas foi feito com:', 'Empresas americanas respondendo contatos da internet', 'Clínicas de estética no Brasil', 'Pacientes de WhatsApp acima de 50 anos', 'É um estudo de vendas em geral. Serve de direção, não de número exato pra clínica.']
      ]
    },
    {
      t: 'A primeira mensagem e uma pergunta de cada vez',
      resumo: 'Pergunta aberta solta faz a paciente travar; pergunta com opções faz ela responder.',
      texto: [
        'Na semana da Black, oito pacientes chegaram dizendo que queriam agendar avaliação. A resposta foi um cumprimento e uma pergunta aberta, tipo "Qual procedimento você tem interesse?" ou "O que mais te incomoda ao se olhar no espelho?". Seis das oito não responderam, e ninguém retomou. Não é que a pergunta seja ruim. Na consulta ela é ótima. No WhatsApp, com uma pessoa que nem sabe o nome dos procedimentos, ela vira uma prova: a paciente não sabe o que escrever, deixa pra depois e esquece.',
        'A troca é simples: em vez de pergunta aberta, pergunta com opções que ela reconhece. "O que mais te incomoda hoje: as rugas da testa, a boca, ou a papada e a flacidez?" Ela não precisa pensar, só escolher. E se nenhuma das opções for a dela, ela mesma corrige e conta. Opção não prende a paciente, ela só dá um ponto de partida pra resposta.',
        'O outro erro que apareceu foi mandar várias perguntas seguidas. Uma paciente recebeu "qual procedimento você tem interesse?", "o que mais incomoda no seu rosto?" e "me conta para que eu possa te ajudar", uma atrás da outra. Ela não respondeu nenhuma. Três perguntas viram tarefa. Uma pergunta vira conversa. Mande uma, espere a resposta, depois a próxima.',
        'E lembre que a paciente do anúncio já disse o que quer: avaliação. Então a pergunta sobre a queixa tem que ser curta e já apontar pro horário. Uma ou duas trocas sobre o que incomoda, e logo depois você oferece dia e hora. A regra que saiu da avaliação de novembro é essa: quem pede "quero agendar" recebe horário em até duas trocas.'
      ],
      ciencia: [
        { ref: 'iyengar2000', tipo: 'Estudo', txt: 'Num supermercado, uma banca com 24 geleias atraiu mais gente, mas só 3% compraram; com 6 geleias, 30% compraram. O estudo ficou famoso como prova de que opção demais trava. Limite: é sobre compra de geleia, e estudos depois não repetiram sempre o efeito. Aqui a ideia útil é mais simples: duas ou três opções claras facilitam a resposta.' },
        { ref: 'scheibehenne2010', tipo: 'Revisão de estudos', txt: 'Juntando 50 experimentos, os autores encontraram efeito médio perto de zero para "excesso de opção". Às vezes acontece, às vezes não. Por isso não use o estudo das geleias como lei. A razão de oferecer opções curtas no WhatsApp é prática: a paciente responde tocando uma palavra, sem ter que escrever um texto.' },
        { ref: 'pratica-whatsapp', tipo: 'Prática de mercado', txt: 'Os seus próprios números são a melhor fonte aqui: 6 de 8 pacientes que receberam pergunta aberta solta pararam de responder, e as que fecharam receberam horário concreto. Isso é uma semana só, então é sinal, não regra científica. Vale medir de novo depois da mudança.' }
      ],
      passos: [
        'Cumprimente com o nome e se apresente: "Oi, Maria! Aqui é a Rayane".',
        'Faça uma pergunta só, com duas ou três opções que ela reconhece.',
        'Espere a resposta antes de mandar a próxima mensagem com pergunta.',
        'Na segunda troca, já ofereça dois horários.',
        'Se ela não responder em algumas horas, retome com contexto (aula 5).'
      ],
      exemplo: [
        ['p', 'Vi o anúncio e quero agendar minha avaliação'],
        ['d', 'Oi, Marineide! Aqui é a Rayane, tudo bem?'],
        ['d', 'O que mais te incomoda hoje: as rugas da testa, a boca ou a papada?'],
        ['p', 'A papada, tá caindo muito'],
        ['d', 'Entendi, é uma das queixas que eu mais recebo.'],
        ['d', 'Tenho quinta às 9h ou às 15h pra te avaliar. Qual fica melhor?']
      ],
      erros: [
        'Pergunta aberta solta no começo: a paciente não sabe o que responder e deixa pra depois.',
        'Três perguntas seguidas: vira tarefa e ela não responde nenhuma.',
        'Ficar quatro, cinco trocas falando da queixa sem oferecer horário: ela veio pra agendar.'
      ],
      pratica: 'Escreva no bloco de notas do celular 3 versões da sua primeira pergunta com opções (uma pra rugas, uma pra boca, uma pra papada). Use nos próximos 10 leads e conte quantos responderam.',
      q: [
        ['Qual primeira pergunta funciona melhor no WhatsApp?', '"O que mais te incomoda hoje: a testa, a boca ou a papada?"', '"Qual procedimento você tem interesse?"', '"Me conta tudo pra eu poder te ajudar"', 'Com opções ela só escolhe. Pergunta aberta vira tarefa.'],
        ['Quantas perguntas mandar de uma vez?', 'Uma, e esperar a resposta', 'Três, pra ganhar tempo', 'Nenhuma, só mandar o preço', 'Várias perguntas seguidas fazem a paciente não responder nenhuma.'],
        ['O que a revisão de Scheibehenne e colegas mostrou?', 'Que o efeito do excesso de opção é inconstante, perto de zero na média', 'Que mais de 6 opções sempre derrubam a venda', 'Que paciente prefere pergunta aberta', 'O estudo das geleias não é lei. Opção curta ajuda por praticidade.'],
        ['Em quantas trocas o lead que pediu "quero agendar" deve receber horário?', 'Em até duas', 'Só depois de explicar todos os procedimentos', 'Quando ela pedir horário', 'Ela já disse o que quer. Demorar pra dar horário é o que perde lead.']
      ]
    },
    {
      t: 'Dois horários na mesa',
      resumo: 'Quem fechou recebeu dia e hora; quem recebeu "vamos agendar?" sumiu.',
      texto: [
        'Olhe a diferença entre duas conversas da mesma semana. Uma paciente mandou 53 mensagens, mandou foto da papada e disse que só podia sábado. A resposta foi "Vamos agendar para sábado então", sem horário. Horas depois: "Vamos agendar sua avaliação?". Ela não respondeu mais. Já as duas que fecharam ouviram algo como "Às 14h30, tenho esse horário na segunda-feira". Mesmo interesse, mesma clínica. O que mudou foi um número na mensagem.',
        '"Vamos agendar?" parece educado, mas joga o trabalho pra paciente. Ela tem que pensar no dia, olhar a agenda dela, imaginar a sua, escrever uma proposta. É muita coisa pra uma mensagem de WhatsApp, e o mais fácil é deixar pra depois. Quando você manda "sábado às 9h ou às 11h, qual fica melhor?", a decisão fica do tamanho de uma palavra. Ela responde "9h" e pronto.',
        'Dois horários é o número bom. Um horário só às vezes não encaixa e a conversa trava. Mais de dois começa a parecer agenda vazia e a escolha fica mais lenta. Dois horários em dias ou turnos diferentes cobrem a maior parte das pessoas: um de manhã e um de tarde, ou um em dia de semana e um no sábado, se você atende.',
        'E se nenhum servir? Ótimo, agora ela vai te dizer o que serve, e você já tem a conversa andando. "Nenhum desses dá pra mim, só posso depois das 17h" é uma resposta muito melhor do que o silêncio. Responda na hora com o horário mais perto disso. Nunca devolva "quando for melhor pra você", que é a mesma pergunta aberta de antes.'
      ],
      ciencia: [
        { ref: 'pratica-whatsapp', tipo: 'Prática de mercado', txt: 'Oferecer duas opções de horário é prática comum em agendamento de consultório e vendas por telefone. Não encontramos um estudo de clínica que meça isso. A base mais forte aqui são os seus próprios casos: quem fechou recebeu horário concreto, quem recebeu convite sem horário não voltou. Vale continuar medindo.' }
      ],
      passos: [
        'Abra a agenda antes de responder e escolha dois horários livres reais.',
        'Mande os dois na mesma mensagem: "quinta às 9h ou sexta às 15h, qual fica melhor?".',
        'Se ela disser só o dia ("só sábado"), devolva dois horários daquele dia.',
        'Se nenhum servir, pergunte o turno e mande o horário mais perto.',
        'Quando ela escolher, confirme repetindo dia e hora e já passe pro Pix (aula 4).'
      ],
      exemplo: [
        ['p', 'Eu só posso no sábado'],
        ['d', 'Sábado eu tenho às 9h ou às 11h. Qual fica melhor pra você?'],
        ['p', 'Às 9h'],
        ['d', 'Fechado, sábado às 9h.'],
        ['d', 'Pra garantir seu horário, a avaliação é R$ 100 no Pix, tá?'],
        ['d', 'E esse valor vira desconto no procedimento se você fizer em até 30 dias.']
      ],
      erros: [
        '"Vamos agendar?": joga a decisão pra ela e a conversa para.',
        '"Quando for melhor pra você": é pergunta aberta de novo.',
        'Oferecer cinco horários: parece agenda vazia e atrasa a escolha.',
        'Oferecer horário que você não confirmou na agenda: gera remarcação e desconfiança.'
      ],
      pratica: 'Nos próximos 10 leads, toda vez que for convidar pra avaliação, mande dois horários. Marque um tracinho pra cada vez que ela escolheu um dos dois e um círculo pra cada vez que pediu outro. Conte no fim da semana.',
      q: [
        ['A paciente disse "só posso sábado". O que você responde?', '"Sábado tenho às 9h ou às 11h, qual fica melhor?"', '"Vamos agendar para sábado então"', '"Qual horário é melhor pra você?"', 'Dia sem hora deixa a decisão no ar. Dois horários fecham.'],
        ['Por que dois horários e não cinco?', 'Fica fácil escolher e não parece agenda vazia', 'Porque cinco é contra a regra do CFBM', 'Porque a paciente prefere decidir sozinha', 'Dois resolvem a maioria dos casos sem atrasar a decisão.'],
        ['Ela respondeu que nenhum horário serve. E agora?', 'Perguntar o turno e mandar o horário mais perto', 'Responder "quando você puder me avisa"', 'Parar de insistir', 'Agora a conversa está andando. Devolva um horário concreto.']
      ]
    },
    {
      t: 'Pix de R$ 100 e a paciente que aparece',
      resumo: 'Marcar é fácil; comparecer é o difícil. O Pix e o combinado do imprevisto seguram a vaga.',
      texto: [
        'Quase toda paciente garante que vai. O difícil é ela aparecer. Por isso a avaliação custa R$ 100 no Pix, pago antes, pra garantir o horário. E esse valor vira desconto no procedimento que ela fizer em até 30 dias. Explique assim, sem pedir desculpa: "Pra garantir seu horário, a avaliação é R$ 100 no Pix. Se você fizer o procedimento em até 30 dias, esse valor sai do total". Não é taxa escondida e não é castigo. É o lugar dela reservado na sua agenda.',
        'Fale do valor com a mesma voz que você fala do horário. Se você manda um áudio longo explicando, pedindo desculpa, dizendo que é chato cobrar, a paciente entende que tem algo errado. Na semana da Black, duas pessoas sumiram depois de um áudio sobre a taxa. Mensagem curta, clara, logo depois que ela escolheu o horário. Se ela perguntar por que cobra, responda com o motivo verdadeiro: "Porque eu separo esse tempo só pra você".',
        'Depois do Pix vem a pergunta que você já faz e que funciona muito: "Caso aconteça algum imprevisto, você me avisa antes?". Ela responde "aviso sim". Parece detalhe, mas é um combinado. Ela disse, com as palavras dela, o que vai fazer se algo der errado. Gente que disse que vai fazer tende a fazer. E, se faltar, ela avisa, e você abre a vaga pra outra paciente.',
        'Na véspera, confirme: "Oi, Maria! Amanhã às 9h te espero aqui na Rua 10, em frente aos Correios. Tudo certo?". Mande o endereço escrito e o pino do mapa. Muita paciente 50+ se perde em sala de clínica dentro de outro prédio. Explique que é no Instituto do Dr. Rafael Dias, Clínica Essencial. Quanto menos ela tiver que descobrir sozinha, mais fácil é aparecer.'
      ],
      ciencia: [
        { ref: 'gollwitzer2006', tipo: 'Revisão de estudos', txt: 'Juntando 94 estudos com mais de 8 mil pessoas, os autores mostraram que quem planeja "se acontecer X, eu faço Y" cumpre mais o que se propôs do que quem só tem a intenção. O efeito foi de médio a grande. Limite: os estudos são sobre metas em geral, como exercício e saúde, não sobre faltas em clínica. A pergunta do imprevisto é uma versão simples desse "se, então".' },
        { ref: 'cialdini1984', tipo: 'Livro', txt: 'Cialdini descreve que as pessoas querem ser coerentes com o que já disseram ou fizeram, e que o compromisso pesa mais quando é ativo, dito ou escrito, e voluntário. O Pix e o "aviso sim" são dois compromissos pequenos e ativos. Limite: é um livro de divulgação baseado em vários estudos, não um teste em clínica de estética.' }
      ],
      passos: [
        'Assim que ela escolher o horário, mande o valor: R$ 100 no Pix pra garantir.',
        'Na mesma mensagem ou na seguinte, diga que vira desconto no procedimento em até 30 dias.',
        'Depois do comprovante, peça nome completo e data de nascimento.',
        'Pergunte: "Caso aconteça algum imprevisto, você me avisa antes?" e espere o "sim".',
        'Mande o endereço escrito e o pino do mapa.',
        'Na véspera, confirme dia, hora e endereço.'
      ],
      exemplo: [
        ['p', 'Às 9h de sábado tá ótimo'],
        ['d', 'Perfeito! Pra garantir seu horário, a avaliação é R$ 100 no Pix.'],
        ['d', 'Se você fizer o procedimento em até 30 dias, esse valor sai do total, tá?'],
        ['p', 'Tá, me manda a chave'],
        ['d', 'Recebi, obrigada! Me passa seu nome completo e data de nascimento?'],
        ['d', 'E caso aconteça algum imprevisto, você me avisa antes?'],
        ['p', 'Aviso sim, pode deixar'],
        ['d', 'Combinado. É na Rua 10, nº 216, Cidade Nova, em frente aos Correios. Te mando o mapa.']
      ],
      erros: [
        'Pedir desculpa pelo valor ou mandar áudio longo explicando: parece que tem algo errado.',
        'Falar em "taxa de R$ 50": não existe. A avaliação é R$ 100 e vira desconto.',
        'Marcar sem Pix "porque ela garantiu que vem": o compromisso fica só na palavra.',
        'Não confirmar na véspera: o esquecimento é a falta mais comum.'
      ],
      pratica: 'Escreva no bloco de notas as 4 mensagens prontas desta aula: valor, dados, imprevisto e confirmação de véspera. Use em todas as avaliações da semana e conte quantas marcadas apareceram.',
      q: [
        ['Como apresentar o valor da avaliação?', '"R$ 100 no Pix pra garantir o horário, e vira desconto no procedimento em até 30 dias"', '"Tem uma taxinha de R$ 50, desculpa"', '"Se você não puder pagar, tudo bem, marca assim mesmo"', 'Valor claro, motivo verdadeiro, sem pedir desculpa.'],
        ['Por que perguntar "se acontecer um imprevisto, você me avisa?"', 'Porque ela faz um combinado com as próprias palavras e tende a cumprir', 'Pra ela se sentir vigiada', 'Porque é exigência do CFBM', 'É um plano "se, então" simples, que ajuda a cumprir o combinado.'],
        ['A meta-análise de Gollwitzer e Sheeran estudou:', 'Planos do tipo "se X, faço Y" para metas em geral', 'Faltas em clínicas de estética', 'Pagamento antecipado por Pix', 'Os estudos são de outro contexto. A ideia do "se, então" é que vem pra cá.'],
        ['O que mandar na véspera?', 'Dia, hora, endereço escrito e o mapa', 'Só "amanhã hein"', 'Nada, ela já pagou', 'A confirmação evita esquecimento e paciente perdida no endereço.']
      ]
    },
    {
      t: 'Retomar quem parou de responder',
      resumo: 'Lead parado não é lead perdido; ele precisa de uma mensagem com contexto e horário.',
      texto: [
        'Das oito conversas da Black que pararam na primeira pergunta, nenhuma foi retomada. Isso é o mais fácil de consertar. A paciente não disse não. Ela só não respondeu. Muitas vezes leu, pensou "depois eu vejo" e o depois não veio. Uma mensagem bem feita no dia seguinte traz de volta uma parte delas, e custa um minuto.',
        'Retomar não é mandar "oi, sumiu?" ou "e aí, vamos agendar?". Isso cobra e não ajuda. A retomada boa tem três partes: quem é você ("aqui é a Rayane"), o que ela queria ("você me falou da papada") e um próximo passo fácil, que é o horário. "Oi, Maria! Aqui é a Rayane. Você me contou que a papada tá te incomodando. Tenho quinta às 9h ou às 15h pra te avaliar. Qual fica melhor?". Você já faz isso quando lembra, e funciona.',
        'Aqui o áudio curto entra bem. Seu público tem muita mulher de 50 anos ou mais, e muitas preferem ouvir a ler. Um áudio de 15 a 25 segundos, com a sua voz, falando o nome dela e a queixa, soa como gente de verdade. Mas curto: áudio de um minuto vira coisa pra ouvir depois. E o horário vai também por escrito, logo abaixo do áudio, pra ela achar fácil quando for responder.',
        'Defina um limite pra não virar perseguição. Uma retomada no dia seguinte e outra três ou quatro dias depois, com algo novo, como um horário que abriu. Se depois disso ela não responder, deixe a porta aberta com uma frase gentil e pare. Paciente que se sentiu respeitada volta meses depois e ainda indica, e indicação é um dos seus pontos fortes.'
      ],
      ciencia: [
        { ref: 'pratica-whatsapp', tipo: 'Prática de mercado', txt: 'Retomar contato com contexto e um próximo passo concreto é prática comum de vendas por mensagem. Não achamos estudo específico de retomada em clínica de estética. A preferência por áudio vem do que você mesma vê no seu público 50+ e do seu jeito de atender, não de pesquisa.' },
        { ref: 'oldroyd2011', tipo: 'Estudo', txt: 'O mesmo estudo de 2011 mostrou que muitas empresas simplesmente nunca respondem ou desistem cedo do contato. Deixar o lead parado sem retomada é a versão de WhatsApp desse erro. Limite: estudo de empresas americanas, não de clínica.' }
      ],
      passos: [
        'Todo fim de dia, liste as conversas do anúncio que pararam sem horário marcado.',
        'No dia seguinte, mande a retomada: "aqui é a Rayane" + a queixa dela + dois horários.',
        'Se ela prefere áudio, mande um de 15 a 25 segundos e o horário escrito embaixo.',
        'Três ou quatro dias depois, uma segunda retomada com algo novo.',
        'Se não responder, mande uma frase de porta aberta e pare.'
      ],
      exemplo: [
        ['d', 'Oi, Roseane! Aqui é a Rayane, da harmonização.'],
        ['d', '(áudio de 20 segundos) Oi, Roseane, tudo bem? Lembrei de você, que me falou das rugas da testa. Separei dois horários pra te avaliar com calma, olha aí embaixo.'],
        ['d', 'Terça às 9h ou quarta às 16h. Qual fica melhor?'],
        ['p', 'Oi doutora, desculpa, esqueci de responder. Quarta às 16h'],
        ['d', 'Imagina! Quarta às 16h, então.']
      ],
      erros: [
        '"Sumiu?" ou "e aí?": cobra sem ajudar, e ela sente vergonha de responder.',
        'Retomada sem contexto: ela não lembra quem é você nem o que tinha pedido.',
        'Áudio de um minuto ou mais: ela deixa pra ouvir depois e não ouve.',
        'Mandar mensagem todo dia: vira perseguição e ela bloqueia.'
      ],
      pratica: 'Hoje, procure no WhatsApp todos os leads do anúncio dos últimos 15 dias que pararam sem horário. Mande a retomada com contexto e dois horários pra cada um. Anote quantos eram e quantos marcaram até o fim da semana.',
      q: [
        ['Qual retomada tem mais chance de funcionar?', '"Oi, Maria! Aqui é a Rayane. Você me falou da papada. Tenho quinta às 9h ou 15h, qual fica melhor?"', '"Sumiu?"', '"E aí, vamos agendar?"', 'Quem é você, o que ela queria e um horário fácil de escolher.'],
        ['Como deve ser o áudio de retomada?', 'De 15 a 25 segundos, com o nome e a queixa, e o horário também escrito', 'Longo, explicando todos os procedimentos', 'Sem falar o nome, pra servir pra todas', 'Curto ela ouve na hora. O horário escrito facilita a resposta.'],
        ['Quantas retomadas antes de parar?', 'Duas, espaçadas, e depois uma frase de porta aberta', 'Uma por dia até ela responder', 'Nenhuma, quem parou não quer', 'Duas retomadas recuperam parte das pacientes sem virar perseguição.']
      ]
    }
  ]
};
Object.assign(window.FONTES, {
  'pratica-whatsapp': { a: 'Prática de mercado e dados do seu atendimento', t: 'Avaliação do atendimento da Dra Rayane, novembro de 2026 (20 conversas do anúncio)' }
});
