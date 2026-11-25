/* Módulo 2: Como a paciente decide. Texto próprio; fontes conferidas em 25/11/2026. */
window.CURSO = window.CURSO || {};
window.FONTES = window.FONTES || {};
Object.assign(window.FONTES, {
  kahneman2011: { a: 'Daniel Kahneman', t: 'Thinking, Fast and Slow (no Brasil, Rápido e Devagar), Farrar, Straus and Giroux, 2011', url: 'https://www.apa.org/monitor/2012/02/conclusions' },
  kt1979: { a: 'Daniel Kahneman e Amos Tversky', t: 'Prospect Theory: An Analysis of Decision under Risk, Econometrica 47(2), 1979', url: 'https://www.econometricsociety.org/publications/econometrica/1979/03/01/prospect-theory-analysis-decision-under-risk' },
  tk1981: { a: 'Amos Tversky e Daniel Kahneman', t: 'The Framing of Decisions and the Psychology of Choice, Science 211, 1981', url: 'https://pubmed.ncbi.nlm.nih.gov/7455683/' },
  cialdini1984: { a: 'Robert Cialdini', t: 'Influence: The Psychology of Persuasion (no Brasil, As Armas da Persuasão), 1984', url: 'https://en.wikipedia.org/wiki/Robert_Cialdini' },
  iyengar2000: { a: 'Sheena Iyengar e Mark Lepper', t: 'When Choice is Demotivating, Journal of Personality and Social Psychology, 2000', url: 'https://www.apa.org/monitor/jun04/toomany' },
  scheibehenne2010: { a: 'Benjamin Scheibehenne, Rainer Greifeneder e Peter Todd', t: 'Can There Ever Be Too Many Options? A Meta-Analytic Review of Choice Overload, Journal of Consumer Research, 2010', url: 'https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf' },
  rackham1988: { a: 'Neil Rackham', t: 'SPIN Selling, McGraw-Hill, 1988', url: 'https://www.routledge.com/SPIN-Selling-1st-Edition/Rackham/p/book/9780566076893' },
  manualHurtz: { a: 'Hurtz Company', t: 'Prática da Hurtz nas clínicas atendidas (atendimento e avaliação)', url: '' }
});
window.CURSO.m2 = {
  id: 'm2', n: 2, t: 'Como a paciente decide', d: 'O que passa na cabeça da paciente do anúncio até o sim, e como ajudar sem manipular.',
  aulas: [
    {
      t: 'Os estágios da decisão',
      resumo: 'A paciente passa por etapas, e cada uma pede uma conversa diferente.',
      texto: [
        'Ninguém acorda e decide fazer bioestimulador. A decisão vem em etapas. Primeiro a paciente percebe o incômodo: a papada na foto, a boca que afinou. Depois decide que quer resolver. Depois procura quem resolve, e é aí que ela vê seu anúncio. Então ela avalia: será que é confiável, será que dá certo, será que cabe no bolso. Só no fim ela decide. Saber em que etapa ela está muda o que você deve dizer.',
        'A paciente que chega pelo anúncio com "vi o anúncio e quero agendar minha avaliação" já passou das primeiras etapas. Ela já sabe que quer resolver e já escolheu ver você. O erro é tratar essa paciente como se ela estivesse no começo, com uma pergunta aberta e longa. Ela precisa de um passo concreto: horário de avaliação. Nas conversas avaliadas em 16/11, seis de oito pacientes que chegaram assim não responderam a uma pergunta solta e a conversa parou.',
        'Já a paciente que pergunta "isso funciona mesmo?" ou "dói?" está na etapa de avaliar. Ela não precisa de horário ainda. Precisa de segurança: como é feito, quanto tempo leva, o que ela pode esperar. Se você responder com horário, ela sente pressa. Se você responder com explicação curta e depois oferecer horário, ela avança. Em áudio, que o seu público gosta, isso fica ainda mais natural.',
        'Na avaliação presencial, ela está na última etapa, mas carrega dúvidas das anteriores. Por isso a consulta tem uma ordem: entender o incômodo de novo, mostrar o que você vê, indicar o plano, falar o valor e propor a data. Pular etapas, como falar preço antes de mostrar o plano, faz ela voltar pra trás. Ela sai dizendo que vai pensar, porque a etapa de avaliar não foi fechada.',
        'Uma forma simples de usar isso: antes de responder qualquer mensagem, pergunte a si mesma "o que ela precisa agora pra dar o próximo passo?". Às vezes é um horário. Às vezes é uma explicação. Às vezes é uma pergunta sua pra entender melhor. Raramente é um texto longo com tudo sobre o procedimento. Cada mensagem sua deve levar ela uma etapa pra frente.'
      ],
      ciencia: [
        { ref: 'rackham1988', tipo: 'Livro', txt: 'Rackham descreve que, em vendas maiores, o cliente passa por fases: reconhece a necessidade, avalia opções, resolve preocupações e decide. Ele observou isso em vendas entre empresas, não em saúde. As etapas desta aula são uma adaptação desse raciocínio pra paciente de estética, não um modelo testado em clínicas.' },
        { ref: 'manualHurtz', tipo: 'Prática de mercado', txt: 'Nas clínicas da Hurtz, quem chega por anúncio de WhatsApp já pedindo avaliação responde melhor a horário oferecido do que a pergunta aberta. O número das conversas de 16/11 (seis de oito sem resposta) é de uma amostra pequena da sua própria clínica, não de um estudo.' }
      ],
      passos: [
        'Leia a primeira mensagem e identifique: ela quer saber, quer avaliar ou já quer marcar?',
        'Se já quer marcar, ofereça dois horários na primeira resposta.',
        'Se está avaliando, responda a dúvida em poucas frases ou num áudio curto e depois ofereça horário.',
        'Na avaliação, siga a ordem: incômodo, o que você vê, plano, valor, data.',
        'Se ela travar, volte uma etapa e pergunte o que ainda está em dúvida.'
      ],
      exemplo: [
        ['p', 'Vi o anúncio e quero agendar minha avaliação.'],
        ['d', 'Oi! Que bom, aqui é a Dra Rayane. Tenho quinta às 14h ou sexta às 9h. Qual fica melhor?'],
        ['p', 'Sexta. Mas isso dói?'],
        ['d', 'É bem tranquilo, eu uso anestésico e vou te falando cada passo. Na avaliação eu te explico tudo com calma antes de qualquer coisa.'],
        ['p', 'Tá bom, sexta às 9h.'],
        ['d', 'Fechado! A avaliação é R$ 100 no Pix pra garantir o horário, e vira desconto no procedimento feito em até 30 dias. Te mando a chave?']
      ],
      erros: [
        'Responder com pergunta aberta a quem já pediu avaliação: ela já decidiu marcar e você atrasou.',
        'Oferecer horário a quem ainda está com medo: ela sente pressa e some.',
        'Falar o preço antes de mostrar o plano na avaliação: ela volta pra etapa de avaliar e adia.'
      ],
      pratica: 'Pegue as próximas 10 conversas novas e, antes de responder, anote ao lado em qual etapa a paciente está (saber, avaliar ou marcar). No fim da semana, veja quantas das que estavam em "marcar" receberam horário na primeira resposta.',
      q: [
        ['A paciente escreve "quero agendar minha avaliação". Qual a melhor resposta?', 'Oferecer dois horários logo na primeira mensagem', 'Perguntar o que mais incomoda no espelho e esperar', 'Mandar um texto explicando todos os procedimentos', 'Ela já decidiu marcar. O próximo passo é o horário.'],
        ['A paciente pergunta "funciona mesmo?". Em que etapa ela está?', 'Avaliando, e precisa de segurança antes do horário', 'Já decidida, e precisa do Pix', 'No começo, e ainda não sabe o que quer', 'Quem pergunta se funciona está avaliando. Explique em poucas palavras e depois ofereça horário.'],
        ['Por que pular etapas na avaliação gera "vou pensar"?', 'Porque a dúvida da etapa anterior ficou aberta', 'Porque ela não gostou de você', 'Porque o preço é sempre o problema', 'Se ela não entendeu o plano, o preço fica sem sentido e ela adia.']
      ]
    },
    {
      t: 'Dor e desejo',
      resumo: 'A paciente decide pelo incômodo que quer tirar e pelo que quer sentir, não pelo nome do procedimento.',
      texto: [
        'Quando a paciente fala "quero fazer Botox", ela está dizendo o nome da solução que conhece. O que ela realmente quer está por trás: parar de parecer brava, sair bem nas fotos do casamento da filha, sentir que ainda se reconhece no espelho. A dor é o incômodo de hoje. O desejo é como ela quer se sentir depois. É isso que move a decisão, e é isso que você precisa descobrir.',
        'Com o seu público, muita gente com mais de 50 anos, a dor costuma vir junto com frases como "não me reconheço mais", "pareço cansada o tempo todo", "minha neta perguntou por que eu tô triste". O desejo raramente é parecer outra pessoa. É parecer ela mesma, descansada. Quando você ouve isso, já sabe como falar do plano: natural, sem exagero, pra ela voltar a se ver bem.',
        'Descobrir dor e desejo exige pergunta e paciência. "O que mais te incomoda?" abre. "Desde quando?" mostra o tamanho. "Em que momento você mais percebe?" traz a situação real. "Se isso melhorasse, o que mudaria pra você?" traz o desejo. São perguntas simples, que você pode fazer em áudio no WhatsApp ou na cadeira. O importante é ouvir a resposta inteira, sem já pular pro procedimento.',
        'Depois que você sabe a dor e o desejo, use as palavras dela na hora de indicar. Em vez de "vou aplicar bioestimulador no terço inferior", diga "você me contou que se sente cansada nas fotos. O que eu indico é trabalhar a firmeza dessa região, pra você ter esse aspecto mais descansado que você quer". Ela ouve a própria história e entende por que aquilo faz sentido pra ela.',
        'Cuidado com o limite. Dor e desejo servem pra entender e explicar, não pra aumentar o sofrimento da paciente ou prometer uma vida nova. Não diga que ela "precisa urgente" nem que o procedimento vai mudar o casamento ou a autoestima pra sempre. Isso é promessa e o Código de Ética não permite. O seu papel é ligar o que ela sente ao que você pode fazer, com honestidade.'
      ],
      ciencia: [
        { ref: 'rackham1988', tipo: 'Livro', txt: 'No SPIN, as perguntas de implicação exploram as consequências do problema, e as de necessidade de solução levam o cliente a dizer com as próprias palavras o valor de resolver. Rackham observou que essas perguntas apareciam mais nas vendas grandes bem-sucedidas. O contexto é venda entre empresas; aqui a ideia vira perguntar como o incômodo afeta o dia dela e o que mudaria.' },
        { ref: 'manualHurtz', tipo: 'Prática de mercado', txt: 'Na prática da Hurtz com clínicas, repetir as palavras da paciente ao apresentar o plano aumenta a sensação de que ela foi ouvida. É observação de atendimento, não estudo.' }
      ],
      passos: [
        'Pergunte o que mais incomoda e deixe ela falar até o fim.',
        'Pergunte desde quando e em que momento ela mais percebe.',
        'Pergunte o que mudaria pra ela se melhorasse.',
        'Anote as palavras exatas que ela usou.',
        'Ao indicar o plano, repita essas palavras ligando ao que o procedimento faz.'
      ],
      exemplo: [
        ['p', 'Quero fazer alguma coisa nessa papada.'],
        ['d', 'Entendi. Me conta: em que momento você mais percebe ela?'],
        ['p', 'Nas fotos. Eu fujo de foto agora, até da família.'],
        ['d', 'Poxa. E se isso melhorasse, o que mudaria pra você?'],
        ['p', 'Ah, eu ia voltar a sair nas fotos sem ficar escondendo o queixo.'],
        ['d', 'Então é isso que a gente vai buscar. O protocolo de papada e flacidez, com a tecnologia do Dr. Rafael, trabalha essa região. A melhora vem aos poucos e eu acompanho cada etapa com você.']
      ],
      erros: [
        'Ir direto pro procedimento quando ela diz "quero Botox": você perde o motivo real e fala genérico.',
        'Fazer as perguntas e não usar as respostas: ela sente que foi só um roteiro.',
        'Aumentar a dor pra vender ("isso só vai piorar"): é pressão, gera medo e beira promessa.'
      ],
      pratica: 'Em 5 avaliações desta semana, faça as 4 perguntas de dor e desejo e escreva, logo depois, a frase exata que a paciente usou para o desejo. Na apresentação do plano, use essa frase. Marque quantas fecharam.',
      q: [
        ['A paciente diz "quero fazer Botox". O que isso costuma significar?', 'Ela disse o nome da solução que conhece; o motivo real ainda precisa ser descoberto', 'Ela já sabe tudo e só quer o preço', 'Ela quer o procedimento mais barato', 'Por trás do nome do procedimento existe uma dor e um desejo que movem a decisão.'],
        ['Qual pergunta ajuda a descobrir o desejo?', '"Se isso melhorasse, o que mudaria pra você?"', '"Você prefere pagar no Pix?"', '"Já fez com outra profissional?"', 'Essa pergunta leva ela a dizer, com as próprias palavras, o valor de resolver.'],
        ['O que NÃO fazer com a dor da paciente?', 'Aumentar o sofrimento dela pra criar urgência', 'Repetir as palavras dela ao indicar o plano', 'Perguntar desde quando incomoda', 'Usar a dor pra pressionar é empurrar e pode virar promessa indevida.']
      ]
    },
    {
      t: 'Medo, dinheiro e culpa',
      resumo: 'Os três freios mais comuns da sua paciente, e como falar de cada um sem pressionar.',
      texto: [
        'Mesmo querendo muito, a paciente costuma frear por três motivos. O medo: de ficar artificial, de doer, de dar errado, de alguém perceber. O dinheiro: R$ 700 a R$ 900 é um valor que pesa no orçamento de muita gente. E a culpa: gastar consigo mesma, ainda mais depois dos 50, quando a vida inteira ela colocou filhos, marido e casa na frente. Muitas vezes os três aparecem juntos, escondidos atrás de "vou pensar".',
        'O medo se trata com explicação e previsibilidade. Diga o que vai acontecer, em que ordem, quanto tempo leva e como fica no dia seguinte. Mostre que você trabalha com dose pensada pro rosto dela e com resultado natural, sem prometer como vai ficar. Pra quem tem medo de "ficar travada", explique que a expressão continua. Áudio curto ajuda muito: a paciente ouve sua voz calma e confia mais.',
        'O dinheiro se trata com clareza, não com desconto. Fale o valor uma vez, diga as formas de pagamento e lembre que os R$ 100 da avaliação já saem do procedimento se ela fizer em até 30 dias. Se o valor realmente não cabe agora, ofereça começar pelo que mais incomoda e deixar o resto pra depois. Isso é planejar com ela, não baixar preço. Nunca diga "faço mais barato pra você".',
        'A culpa é a mais silenciosa. A paciente não fala "me sinto culpada", fala "ah, isso é bobagem minha" ou "tem outras prioridades em casa". Não discuta com ela nem diga que ela "merece". Reconheça: "muita paciente minha sente isso no começo". E traga de volta o que ela mesma disse que quer: "você me contou que foge das fotos da família. Cuidar disso também é cuidar de você". A decisão continua sendo dela.',
        'Pra saber qual freio está ativo, pergunte. "O que te deixa em dúvida?" ou "o que falta pra você se sentir segura?" quase sempre revela. Responder ao freio errado não adianta: se o problema é medo e você fala de parcelamento, ela continua travada. E aceite quando ela decidir não fazer agora. Combine um retorno e deixe a porta aberta. Paciente que se sentiu respeitada volta e indica.'
      ],
      ciencia: [
        { ref: 'kt1979', tipo: 'Estudo', txt: 'Kahneman e Tversky mostraram, com escolhas hipotéticas de apostas, que as pessoas pesam mais a possibilidade de perder do que a de ganhar o mesmo valor. Isso ajuda a entender por que o medo de dar errado ou de "perder o dinheiro" freia tanto. Os experimentos eram com dinheiro e loterias, não com saúde, então use como pista, não como regra.' },
        { ref: 'manualHurtz', tipo: 'Prática de mercado', txt: 'Na operação da Hurtz, "vou pensar" sem motivo dito quase sempre esconde medo, dinheiro ou necessidade de consultar alguém da família. Perguntar o que gera a dúvida antes de responder é a orientação padrão. É prática, não estudo.' }
      ],
      passos: [
        'Quando ela hesitar, pergunte: "o que te deixa em dúvida?"',
        'Identifique o freio: medo, dinheiro ou culpa.',
        'Medo: explique passo a passo, o que esperar no dia seguinte, sem prometer resultado.',
        'Dinheiro: valor uma vez, formas de pagamento, abatimento da avaliação; se não couber, comece pelo principal.',
        'Culpa: reconheça e devolva o desejo que ela mesma contou.'
      ],
      exemplo: [
        ['d', 'O plano fica em R$ 800. Os R$ 100 da avaliação já saem desse valor.'],
        ['p', 'Hum... vou pensar.'],
        ['d', 'Claro. Me conta, o que te deixa em dúvida? Assim eu te ajudo a pensar.'],
        ['p', 'Ah, sei lá. Gastar isso comigo... tem tanta coisa em casa.'],
        ['d', 'Muita paciente minha sente isso no começo. Você me contou que foge das fotos com a família. Cuidar disso também é cuidar de você.'],
        ['p', 'É, isso me incomoda faz tempo.'],
        ['d', 'Se quiser, a gente começa pela papada, que é o que mais te incomoda, e deixa o resto pra depois. Tenho sábado às 9h.']
      ],
      erros: [
        'Responder "vou pensar" com "tudo bem, qualquer coisa me chama": você não descobre o freio e ela não volta.',
        'Tratar todo freio como dinheiro: oferecer parcelamento pra quem tem medo não resolve nada.',
        'Dizer "você merece" de forma genérica: soa frase pronta e não toca na culpa real dela.'
      ],
      pratica: 'Nesta semana, toda vez que ouvir "vou pensar", pergunte o que gera a dúvida. Anote cada resposta num caderno classificando como medo, dinheiro ou culpa. No fim da semana, conte qual apareceu mais.',
      q: [
        ['A paciente diz "vou pensar". Qual a melhor reação?', 'Perguntar com calma o que deixa ela em dúvida', 'Oferecer um preço menor', 'Dizer "tudo bem" e encerrar', 'Sem saber o freio, você não consegue ajudar. A pergunta revela se é medo, dinheiro ou culpa.'],
        ['Como tratar o freio do dinheiro com ética?', 'Valor claro, formas de pagamento e, se precisar, começar pelo principal', 'Dar desconto se ela fechar hoje', 'Dizer que é barato', 'Planejar com ela não é baixar preço. Desconto como argumento fica de fora.'],
        ['O que a pesquisa de Kahneman e Tversky de 1979 ajuda a entender?', 'Que o medo de perder pesa mais do que a vontade de ganhar o mesmo tanto', 'Que pacientes de estética sempre compram por impulso', 'Que preço alto vende mais', 'É um estudo com apostas, não com saúde, mas ajuda a entender por que o medo freia tanto.'],
        ['Como reconhecer a culpa?', 'Frases como "é bobagem minha" ou "tem outras prioridades em casa"', 'Ela pergunta sobre anestesia', 'Ela pede o Pix', 'A culpa raramente é dita direto; aparece como se ela diminuísse o próprio desejo.']
      ]
    },
    {
      t: 'Vieses: perda, enquadramento, prova social e coerência',
      resumo: 'Atalhos da mente que influenciam a decisão, e como usar só do jeito honesto.',
      texto: [
        'A mente usa atalhos pra decidir rápido. Kahneman chama isso de pensamento rápido, intuitivo, em oposição ao devagar, que pesa e calcula. A paciente usa os dois, e conhecer alguns atalhos ajuda você a explicar melhor. Mas fica o aviso: tudo nesta aula é pra comunicar com clareza e honestidade. Usar viés pra criar medo falso ou pressa falsa é manipulação, e na saúde isso quebra a confiança.',
        'O primeiro atalho é a aversão à perda: perder pesa mais do que ganhar o mesmo tanto. O segundo é o enquadramento: o mesmo fato, dito de outro jeito, muda a decisão. Na prática, "os R$ 100 da avaliação viram desconto se você fizer em até 30 dias" é mais claro do que "a avaliação custa R$ 100". As duas frases são verdade. A primeira mostra que o valor não se perde. O que você não faz é inventar prazo ou dizer "só hoje".',
        'O terceiro é a prova social: quando não temos certeza, olhamos o que pessoas parecidas com a gente fizeram. A sua clínica tem muita indicação, e isso é prova social de verdade. Dá pra dizer "muita paciente minha chegou com essa mesma dúvida" ou "a paciente que te indicou fez a boca comigo". Só tome cuidado com fotos de antes e depois: o código exige autorização escrita e legenda própria. E nunca invente depoimento.',
        'O quarto é compromisso e coerência: depois de dizer ou fazer algo, a gente tende a agir de forma coerente com aquilo. É por isso que a avaliação paga antes funciona: quem pagou o Pix tende a aparecer. E é por isso que é bom ela dizer com as próprias palavras o que quer: "eu quero voltar a sair nas fotos". Mais tarde, na hora de decidir, você só lembra o que ela mesma disse.',
        'Os quatro juntos formam uma regra simples: diga a verdade de um jeito fácil de entender. Mostre o que ela evita de perder, enquadre o valor com clareza, lembre que outras pacientes passaram pelo mesmo e devolva o que ela mesma falou. Se em algum momento você precisar exagerar, mentir sobre prazo ou esconder informação, não é mais conduzir. É empurrar, e isso não entra no seu atendimento.'
      ],
      ciencia: [
        { ref: 'kahneman2011', tipo: 'Livro', txt: 'Kahneman resume décadas de pesquisa descrevendo dois modos de pensar, um rápido e intuitivo e outro lento e analítico. Ele mesmo diz que os dois "sistemas" são uma forma de explicar, não partes reais do cérebro. É um livro de divulgação, baseado em estudos de laboratório, não em clínicas de estética.' },
        { ref: 'tk1981', tipo: 'Estudo', txt: 'Tversky e Kahneman mostraram que a mesma situação, descrita como vidas salvas ou como vidas perdidas, mudava a escolha da maioria. É o efeito de enquadramento. O experimento usou um problema hipotético de saúde pública, e estudos posteriores acharam o efeito mais forte em alguns contextos do que em outros.' },
        { ref: 'cialdini1984', tipo: 'Livro', txt: 'Cialdini reuniu princípios de influência, entre eles prova social (seguimos pessoas parecidas em situações de dúvida) e compromisso e coerência (tendemos a agir de acordo com o que já dissemos ou fizemos). O livro mistura experimentos com observação de vendedores e não é sobre saúde. Use como explicação do comportamento, não como técnica pra pressionar.' }
      ],
      passos: [
        'Enquadre a avaliação mostrando que os R$ 100 viram desconto em até 30 dias.',
        'Use prova social verdadeira: indicações e dúvidas comuns de outras pacientes, sem nome.',
        'Peça que a paciente diga com as próprias palavras o que quer.',
        'Na hora de decidir, lembre o que ela mesma falou.',
        'Nunca invente prazo, escassez ou depoimento.'
      ],
      exemplo: [
        ['p', 'Mas R$ 100 só pra avaliar?'],
        ['d', 'Entendo. Esse valor garante seu horário e vira desconto no procedimento se você fizer em até 30 dias. Ou seja, não se perde.'],
        ['p', 'E outras pessoas da sua idade fazem isso?'],
        ['d', 'Muita paciente minha tem mais de 50 e chegou com essa mesma dúvida. Boa parte veio por indicação de amiga.'],
        ['p', 'Minha vizinha fez com você, foi ela que falou.'],
        ['d', 'Que bom! Então você já sabe como eu trabalho. Tenho quinta às 15h ou sábado às 9h.']
      ],
      erros: [
        'Criar urgência falsa ("só hoje", "última vaga"): é manipulação e, com desconto junto, fere o código.',
        'Inventar ou exagerar depoimento: se a paciente descobre, você perde ela e a indicação.',
        'Mostrar antes e depois sem autorização escrita: o código exige consentimento e legenda.'
      ],
      pratica: 'Escreva duas versões da sua frase sobre a avaliação de R$ 100: uma que só diz o preço e uma que mostra o abatimento em até 30 dias. Use a segunda em todas as conversas da semana e conte quantas pacientes pagaram o Pix no mesmo dia.',
      q: [
        ['O que é enquadramento?', 'O mesmo fato, dito de outro jeito, muda a decisão', 'Colocar foto da paciente num quadro', 'Mostrar a tabela de preços completa', 'Tversky e Kahneman mostraram que a forma de descrever muda a escolha. Usado com verdade, ajuda a explicar.'],
        ['Qual uso de prova social é honesto?', '"Muita paciente minha chegou com essa mesma dúvida."', '"Todo mundo da cidade já fez comigo."', 'Inventar um depoimento de paciente', 'Prova social só vale quando é verdadeira e sem exagero.'],
        ['Por que a avaliação paga antes ajuda a paciente a comparecer?', 'Compromisso e coerência: quem já pagou tende a agir de acordo', 'Porque ela tem medo de multa', 'Porque o Pix é mais rápido', 'Cialdini descreve que agimos de forma coerente com o que já fizemos.'],
        ['Quando um viés vira manipulação?', 'Quando exige mentir, exagerar ou criar pressa falsa', 'Sempre que você explica algo', 'Quando você manda áudio', 'O limite é a verdade. Explicar bem é ético; inventar prazo ou escassez não é.']
      ]
    },
    {
      t: 'Excesso de informação e decisão adiada',
      resumo: 'Opção demais e explicação demais fazem a paciente adiar; menos e mais claro ajuda ela a decidir.',
      texto: [
        'Parece que quanto mais você explica, mais segura a paciente fica. Até certo ponto, sim. Depois disso, acontece o contrário. Quando ela recebe cinco procedimentos possíveis, três marcas de produto, explicação de como a toxina age no músculo e mais quatro opções de pagamento, a cabeça cansa. E cabeça cansada tem uma saída fácil: deixar pra depois. "Vou pensar" muitas vezes é só isso.',
        'No WhatsApp, o excesso aparece como textão. A paciente pergunta sobre a boca e recebe um bloco com tudo sobre ácido hialurônico, cuidados, contraindicações e valores. Seu público, muitas vezes, nem lê bloco longo, prefere áudio. Mensagem curta, uma ideia por vez, termina com uma pergunta ou com horário. O resto você explica na avaliação, olhando pra ela.',
        'Na avaliação, o excesso aparece quando você mostra tudo que poderia fazer no rosto dela. Ela ouve "boca, olheira, bigode chinês, Botox, bioestimulador" e pensa no valor total, não no incômodo principal. O caminho é indicar uma prioridade: o que mais incomoda ela e o que você faria primeiro. Se fizer sentido, cite que existem outros pontos pra uma próxima etapa, sem detalhar tudo agora.',
        'O mesmo vale pras opções. Duas opções de horário funcionam melhor do que "qual dia você pode?". Um plano principal, às vezes com uma alternativa, funciona melhor do que um cardápio. Isso não é esconder informação: se ela perguntar, você responde. É organizar a informação pra que ela consiga decidir. Você é quem sabe o que é mais indicado; ela precisa de um caminho, não de uma lista.',
        'Por fim, decisão adiada sem data quase sempre vira decisão nunca tomada. Se ela realmente precisa de tempo, combine quando vocês vão falar: "Te chamo na quinta pra saber o que você decidiu, pode ser?". E na quinta você chama, com uma mensagem curta que lembra o que ela queria. Assim o "vou pensar" vira uma etapa com prazo, não um sumiço.'
      ],
      ciencia: [
        { ref: 'iyengar2000', tipo: 'Estudo', txt: 'Iyengar e Lepper montaram uma banca de geleias num mercado da Califórnia: com 24 sabores, mais gente parava; com 6, uma proporção bem maior comprava. É o estudo mais citado sobre excesso de escolha. É sobre geleia, compra barata e de impulso, não sobre saúde.' },
        { ref: 'scheibehenne2010', tipo: 'Revisão de estudos', txt: 'Scheibehenne e colegas juntaram dezenas de experimentos sobre excesso de escolha e, na média, o efeito foi quase zero. Ele aparece em algumas situações e não em outras. Por isso a lição aqui é moderada: reduzir opções ajuda quando a paciente já está confusa ou cansada, não é uma lei.' },
        { ref: 'manualHurtz', tipo: 'Prática de mercado', txt: 'Nas clínicas da Hurtz, mensagem curta e áudio rendem mais resposta do que bloco longo de texto, principalmente com público mais velho. É observação da operação, não estudo.' }
      ],
      passos: [
        'No WhatsApp, uma ideia por mensagem, ou um áudio curto.',
        'Ofereça sempre duas opções de horário, não uma pergunta aberta.',
        'Na avaliação, indique uma prioridade e cite o resto só como próxima etapa.',
        'Não fale de marca de produto nem de detalhe técnico que ela não pediu.',
        'Se ela pedir tempo, combine dia e hora do retorno e cumpra.'
      ],
      exemplo: [
        ['p', 'Quero ver a boca. E também tenho essa olheira, e o bigode chinês, e a testa...'],
        ['d', 'Entendi, tem algumas coisas te incomodando. Se você tivesse que escolher uma, qual seria a primeira?'],
        ['p', 'A boca. Tá muito fina.'],
        ['d', 'Então a gente começa por ela. Na avaliação eu olho o resto com calma e te digo o que faz sentido depois.'],
        ['p', 'Tá. Mas preciso ver com meu marido.'],
        ['d', 'Claro. Te chamo na quinta à tarde pra saber o que vocês decidiram, pode ser?'],
        ['p', 'Pode.']
      ],
      erros: [
        'Mandar textão com tudo sobre o procedimento: ela não lê e adia a resposta.',
        'Mostrar todos os pontos do rosto na avaliação: ela pensa no valor total e trava.',
        'Aceitar "vou pensar" sem combinar retorno: vira sumiço.'
      ],
      pratica: 'Nesta semana, conte quantas mensagens suas no WhatsApp passaram de 4 linhas. Troque cada uma por mensagens curtas ou um áudio de até 1 minuto. Em todo "vou pensar", combine dia do retorno e anote quantas responderam no dia combinado.',
      q: [
        ['Por que explicação demais pode fazer a paciente adiar?', 'A cabeça cansa e deixar pra depois é a saída mais fácil', 'Porque ela acha que você está mentindo', 'Porque o conselho proíbe explicar', 'Informação demais, sem organização, pesa na decisão.'],
        ['A paciente cita quatro incômodos. O que fazer?', 'Pedir que ela escolha o principal e começar por ele', 'Montar um plano com os quatro e passar o valor total', 'Explicar todos os procedimentos em detalhe', 'Uma prioridade dá um caminho claro. O resto vira próxima etapa.'],
        ['O que a revisão de Scheibehenne e colegas mostrou sobre o estudo da geleia?', 'Que o efeito de excesso de escolha, na média, é pequeno e depende da situação', 'Que o efeito é sempre muito forte', 'Que mais opções sempre vendem mais', 'Por isso a lição é moderada: reduzir opções ajuda quando a paciente está confusa.'],
        ['Ela diz que precisa ver com o marido. Qual a melhor resposta?', '"Claro. Te chamo na quinta à tarde pra saber o que vocês decidiram, pode ser?"', '"Tudo bem, qualquer coisa me chama."', '"Se fechar hoje faço um preço melhor."', 'Combinar o retorno transforma o adiamento numa etapa com prazo.']
      ]
    }
  ]
};
