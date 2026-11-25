window.CURSO = window.CURSO || {};
window.FONTES = window.FONTES || {};
Object.assign(window.FONTES, {
  miller2013: { a: 'William R. Miller e Stephen Rollnick', t: 'Motivational Interviewing: Helping People Change, 3ª ed., Guilford Press, 2013 (1ª ed. 1991)', url: 'https://www.routledge.com/Motivational-Interviewing-Third-Edition-Helping-People-Change/Miller-Rollnick/p/book/9781609182274' },
  rubak2005: { a: 'Rubak, Sandbæk, Lauritzen e Christensen', t: 'Motivational interviewing: a systematic review and meta-analysis, British Journal of General Practice, 2005', url: 'https://pubmed.ncbi.nlm.nih.gov/15826439/' },
  lundahl2010: { a: 'Lundahl, Kunz, Brownell, Tollefson e Burke', t: 'A Meta-Analysis of Motivational Interviewing: Twenty-Five Years of Empirical Studies, Research on Social Work Practice, 2010', url: 'https://digitalcommons.usu.edu/sswa_facpubs/199' },
  carpenter2013: { a: 'Christopher J. Carpenter', t: 'A meta-analysis of the effectiveness of the "but you are free" compliance-gaining technique, Communication Studies, 2013', url: 'https://drum.lib.umd.edu/handle/1903/24608' },
  fillon2023: { a: 'Fillon e colegas', t: 'The effectiveness of the "But-you-are-free" technique: meta-analysis and re-examination, Meta-Psychology, 2023', url: 'https://open.lnu.se/index.php/metapsychology/article/view/2640' },
  rackham1988: { a: 'Neil Rackham', t: 'SPIN Selling, McGraw-Hill, 1988' }
});
window.CURSO.m5 = {
  id: 'm5', n: 5, t: 'Entrevista motivacional na estética', d: 'Como fazer a paciente dizer, com as palavras dela, por que quer se cuidar agora',
  aulas: [
    {
      t: 'O que é entrevista motivacional e por que funciona na saúde',
      resumo: 'A paciente se convence mais com o que ela mesma fala do que com o que você explica.',
      texto: [
        'Entrevista motivacional é um jeito de conversar criado na área da saúde por William Miller e Stephen Rollnick. Nasceu pra ajudar pessoas a mudar hábito difícil, como parar de beber ou cuidar da diabetes. A ideia central é simples: quando o profissional empurra, a pessoa resiste. Quando o profissional pergunta e escuta, a pessoa começa a falar os próprios motivos. E o motivo dito pela própria pessoa pesa muito mais na decisão do que qualquer explicação técnica.',
        'Na sua cadeira isso aparece toda semana. A paciente de 55 anos chega dizendo que quer "dar uma melhorada", mas também diz que nunca fez nada, que o marido acha besteira, que tem medo de ficar artificial. Ela está dividida. Se você responde com uma aula sobre bioestimulador, ela defende o lado do medo. Se você pergunta o que fez ela marcar agora, ela mesma conta que não se reconhece mais nas fotos da família. Essa frase vale mais que dez minutos de explicação sua.',
        'Isso não substitui o SPIN, que você já viu. O SPIN organiza <b>o que</b> perguntar: situação, problema, implicação e necessidade. A entrevista motivacional ensina <b>como</b> perguntar e como reagir à resposta: com calma, sem pressa de convencer, devolvendo o que ela disse. O SPIN é o mapa da consulta. A entrevista motivacional é o tom de voz em cada parada desse mapa.',
        'Tem um limite importante. A entrevista motivacional foi estudada pra mudança de comportamento em saúde, não pra venda de procedimento estético. Aqui você usa o jeito de conversar, não promete o efeito dos estudos. E serve pra ajudar a paciente a decidir de verdade. Se ela decidir que não é o momento, isso também é um bom resultado. Paciente que sai respeitada volta e indica, e indicação é um dos seus pontos mais fortes.',
        'Você já tem a base: acolhe, fala simples, deixa a paciente à vontade. O que falta é conduzir. Nas próximas aulas você vai treinar três ferramentas: perguntar aberto e refletir o que ouviu, puxar a fala de mudança da paciente e devolver a decisão pra ela sem perder a condução.'
      ],
      ciencia: [
        { ref: 'miller2013', tipo: 'Livro', txt: 'Miller e Rollnick descrevem a entrevista motivacional como uma conversa colaborativa pra fortalecer a motivação da própria pessoa. A 3ª edição organiza o processo em quatro etapas: criar vínculo, focar, evocar os motivos dela e planejar. O livro é da área de saúde e dependência química, não de vendas.' },
        { ref: 'rubak2005', tipo: 'Revisão de estudos', txt: 'Revisão de 72 ensaios clínicos. A entrevista motivacional teve efeito em cerca de 3 de cada 4 estudos e superou o conselho tradicional. Mesmo consultas curtas de 15 minutos mostraram efeito em parte dos estudos. O contexto é médico e psicológico (peso, pressão, álcool), não estética nem venda.' },
        { ref: 'lundahl2010', tipo: 'Revisão de estudos', txt: 'Meta-análise com 119 estudos. Comparada a não fazer nada ou a grupos fracos, a entrevista motivacional teve efeito pequeno, mas consistente e duradouro. Comparada a outros tratamentos bem feitos, a diferença não foi significativa. Ou seja: ajuda, mas não é mágica. Contexto: saúde e serviço social.' }
      ],
      passos: [
        'Na próxima avaliação, antes de falar de procedimento, pergunte: "O que fez você marcar agora?".',
        'Escute a resposta inteira sem interromper e sem corrigir.',
        'Anote a frase mais forte que ela disser, com as palavras dela.',
        'Use essa frase depois, quando for apresentar o plano.',
        'Só explique técnica quando ela pedir ou quando o motivo dela já estiver claro.'
      ],
      exemplo: [
        ['d', 'Antes de eu olhar seu rosto, me conta: o que fez você marcar agora?'],
        ['p', 'Ah, sei lá. Minha filha vai casar em março.'],
        ['d', 'Que coisa boa. E o casamento mexeu com alguma coisa?'],
        ['p', 'Mexeu. Eu vi umas fotos minhas e achei meu rosto muito caído. Pareço cansada.'],
        ['d', 'Você quer estar nas fotos do casamento se reconhecendo.'],
        ['p', 'É isso. Mas sem ficar com cara de boneca, que eu morro de medo.'],
        ['d', 'Então são duas coisas: parecer descansada e continuar sendo você. Vou olhar com isso na cabeça.']
      ],
      erros: [
        'Começar explicando o procedimento: ela ainda não disse o que quer, e você responde uma pergunta que ela não fez.',
        'Tentar convencer quando ela mostra medo: quanto mais você empurra, mais ela defende o medo.',
        'Achar que entrevista motivacional é enrolar: ela tem direção. Você pergunta pra chegar na decisão, não pra passar o tempo.'
      ],
      pratica: 'Nesta semana, faça a pergunta "O que fez você marcar agora?" em todas as avaliações. Anote, em cada uma, a frase exata da resposta. Meta: 5 frases anotadas até sexta.',
      q: [
        ['Qual é a ideia central da entrevista motivacional?', 'A pessoa se convence mais pelos motivos que ela mesma fala', 'O profissional precisa explicar a técnica com detalhe', 'Insistir até a paciente aceitar o plano', 'Quem fala o motivo decide com mais firmeza. Por isso você pergunta e escuta.'],
        ['Como ela se encaixa com o SPIN?', 'O SPIN diz o que perguntar, a entrevista motivacional diz como perguntar e reagir', 'Ela substitui o SPIN', 'Ela só serve depois que a paciente fecha', 'Os dois andam juntos: mapa e tom de voz.'],
        ['O que os estudos dizem sobre ela?', 'Ajuda em saúde, com efeito pequeno a moderado, mas não foram feitos em estética', 'Garante fechamento em 3 de cada 4 avaliações', 'Não tem nenhum estudo', 'As revisões são de saúde e serviço social. Você usa o jeito de conversar, sem prometer número.']
      ]
    },
    {
      t: 'Perguntas abertas e escuta reflexiva',
      resumo: 'Pergunte de um jeito que não cabe "sim" ou "não" e devolva o que ouviu em uma frase curta.',
      texto: [
        'Pergunta fechada pede sim ou não: "Você quer fazer Botox?". Pergunta aberta pede história: "O que incomoda você quando se olha no espelho?". Na avaliação presencial, a pergunta aberta é sua melhor amiga, porque a paciente está ali, com tempo, e cada frase dela te dá material pra montar o plano. No WhatsApp é diferente: o dossiê do seu atendimento mostrou que pergunta aberta logo no "quero agendar" faz a lead sumir. Lá, horário concreto primeiro. Pergunta aberta fica pra cadeira.',
        'A segunda ferramenta é a reflexão. Refletir é devolver, com suas palavras, o que você entendeu do que ela disse. Ela fala: "Eu passo maquiagem e não adianta, continuo com cara de brava". Você reflete: "A maquiagem não resolve essa expressão de brava". Parece pouco, mas faz três coisas: mostra que você ouviu, confere se entendeu certo e convida ela a continuar falando. Quase sempre ela completa com algo mais importante.',
        'Existe reflexão simples e reflexão que vai um passo além. A simples repete o sentido: "Você se sente cansada no rosto". A que vai além nomeia o que ela não disse, mas deu a entender: "Parece que você sente que o rosto não acompanha a energia que você tem". Quando acerta, a paciente costuma dizer "é isso!" e se abre. Quando erra, ela corrige, e você aprende. Nos dois casos a conversa avança.',
        'Miller e Rollnick resumem essas ferramentas em quatro: perguntas abertas, afirmações (reconhecer algo bom nela, como "você cuida bem da pele"), reflexões e resumos. Uma regra prática do livro é refletir mais do que perguntar. Se você faz cinco perguntas seguidas, vira interrogatório. Se você alterna pergunta e reflexão, vira conversa. Isso combina com o seu jeito acolhedor: você só precisa parar de pular da resposta dela direto pra explicação.',
        'O resumo fecha um bloco da conversa. Depois de ouvir a história da paciente, você junta tudo em duas ou três frases: "Então, deixa eu ver se entendi. Você se incomoda com o bigode chinês, sente o rosto caído nas fotos e tem medo de ficar artificial". Ela confirma, e esse resumo vira a ponte pra você apresentar o protocolo. Quem se sente entendida aceita melhor a proposta.'
      ],
      ciencia: [
        { ref: 'miller2013', tipo: 'Livro', txt: 'O livro chama essas habilidades de OARS em inglês: perguntas abertas, afirmações, reflexões e resumos. Recomenda mais reflexões que perguntas e descreve reflexões simples e complexas. É orientação de prática clínica, construída a partir da experiência e dos estudos em saúde, não de vendas.' },
        { ref: 'rackham1988', tipo: 'Livro', txt: 'Rackham observou vendas grandes (B2B) e viu que os vendedores que fechavam mais faziam perguntas sobre problema e implicação em vez de só apresentar o produto. É contexto diferente da estética, mas a lógica de perguntar antes de propor é a mesma que você usa aqui.' }
      ],
      passos: [
        'Troque "Você quer fazer X?" por "O que mais te incomoda hoje no rosto?".',
        'Depois de cada resposta, devolva uma frase curta com o que entendeu.',
        'Alterne: uma pergunta, uma reflexão. Nunca três perguntas seguidas.',
        'Elogie algo verdadeiro: o cuidado com a pele, a coragem de vir.',
        'Feche com um resumo de duas ou três frases antes de apresentar o plano.'
      ],
      exemplo: [
        ['d', 'O que mais incomoda você quando se olha no espelho?'],
        ['p', 'Essa ruga aqui no meio. Todo mundo acha que eu estou brava.'],
        ['d', 'As pessoas leem brabeza num rosto que não está bravo.'],
        ['p', 'Isso! Até no trabalho já me perguntaram se eu estava chateada.'],
        ['d', 'Isso já chegou até no trabalho. Imagino que incomoda.'],
        ['p', 'Incomoda muito. Eu sou uma pessoa alegre.'],
        ['d', 'Então, resumindo: você é alegre, mas a ruga entre as sobrancelhas passa a impressão contrária, inclusive no trabalho. É isso?'],
        ['p', 'É exatamente isso.']
      ],
      erros: [
        'Usar pergunta aberta no primeiro "quero agendar" do WhatsApp: a lead já pediu horário e some. Pergunta aberta é pra avaliação.',
        'Fazer interrogatório: pergunta atrás de pergunta cansa e parece formulário.',
        'Refletir com palavra técnica ("glabela", "toxina"): devolva com a palavra dela, "ruga do meio", "cara de brava".',
        'Pular o resumo: sem ele, a paciente não sente que foi entendida antes de ouvir o plano.'
      ],
      pratica: 'Grave (com autorização da paciente) ou anote logo depois 3 avaliações desta semana. Conte quantas perguntas e quantas reflexões você fez. Meta: pelo menos uma reflexão para cada pergunta.',
      q: [
        ['Qual destas é uma pergunta aberta?', 'O que incomoda você quando se olha no espelho?', 'Você quer fazer Botox?', 'Você já fez preenchimento?', 'Ela não cabe em sim ou não, então a paciente conta a história.'],
        ['A paciente diz "pareço cansada nas fotos". Qual é uma boa reflexão?', 'Nas fotos, o rosto mostra um cansaço que você não sente', 'Isso é perda de colágeno, normal na sua idade', 'Vamos fazer bioestimulador então', 'Reflexão devolve o que ela disse, com as palavras dela, sem explicar nem vender.'],
        ['Onde a pergunta aberta funciona melhor no seu atendimento?', 'Na avaliação presencial', 'Na primeira resposta ao "quero agendar" no WhatsApp', 'Na mensagem de confirmação do horário', 'No WhatsApp, a lead quer horário. Na cadeira, ela tem tempo pra contar.']
      ]
    },
    {
      t: 'Fazer a paciente falar a própria motivação',
      resumo: 'Quando a paciente diz por que quer, quanto quer e o que ganha, ela está se convencendo sozinha.',
      texto: [
        'Miller e Rollnick chamam de "conversa de mudança" tudo o que a pessoa fala a favor de mudar: desejo ("eu queria"), capacidade ("eu consigo"), motivo ("porque..."), necessidade ("eu preciso") e, mais forte, compromisso ("eu vou fazer"). Do outro lado está a "conversa de manutenção": "não sei se vale", "meu marido acha besteira", "é muito dinheiro". As duas aparecem na mesma paciente. Seu trabalho é dar mais espaço pra primeira, sem brigar com a segunda.',
        'Você puxa a conversa de mudança com perguntas certas. "Por que agora e não ano passado?" traz o motivo. "Se você fizesse, o que mudaria no seu dia?" traz o ganho. "Numa escala de 0 a 10, quanto isso é importante pra você?" traz a importância. E, se ela disser 6, a pergunta de ouro é: "Por que 6 e não 3?". Ela vai explicar por que é importante, e não por que não é. Nunca pergunte "por que só 6?", que puxa a resposta contrária.',
        'Isso conversa direto com as perguntas de implicação e necessidade do SPIN. No SPIN, você pergunta "e quando você vê essa papada nas fotos, como se sente?" e "como seria se ela ficasse mais definida?". A entrevista motivacional acrescenta a escuta do que vem: quando a paciente diz "eu ia me sentir mais segura pra usar decote", você reflete e reforça, em vez de correr pro preço. Essa frase é a maior razão dela pra fechar.',
        'Um caso real ajuda. Uma paciente mandou 53 mensagens e foto da papada antes de vir. Dava pra ver o quanto ela queria. Na avaliação, ela começou com medo de ficar "com a cara diferente". Em vez de explicar o protocolo de papada com a tecnologia do Dr. Rafael, a conversa certa é perguntar o que ela imaginava quando mandou aquela foto. A resposta dela, com as palavras dela, é o que você usa depois pra apresentar o plano.',
        'Na hora de apresentar, volte às frases que ela disse. "Você me falou que quer se sentir segura pra usar decote no casamento. O protocolo que eu indico foi pensado pra isso." Você não está inventando motivo, está lembrando o dela. Quando a paciente ouve a própria razão na sua boca, a decisão fica muito mais fácil. E se ela travar no preço, volte ao motivo antes de falar de forma de pagamento.'
      ],
      ciencia: [
        { ref: 'miller2013', tipo: 'Livro', txt: 'O livro descreve a conversa de mudança (desejo, capacidade, motivo, necessidade e compromisso) e a conversa de manutenção, e mostra perguntas pra evocar a primeira, como a régua de 0 a 10. Os autores relatam que mais conversa de mudança na sessão costuma vir junto com mais mudança depois. Contexto: saúde e dependência, não venda.' },
        { ref: 'rackham1988', tipo: 'Livro', txt: 'Nas perguntas de necessidade do SPIN, quem fala o benefício é o cliente, não o vendedor. Rackham viu isso em vendas B2B grandes. A entrevista motivacional chega numa conclusão parecida por outro caminho: o benefício dito pela própria pessoa pesa mais.' }
      ],
      passos: [
        'Pergunte o motivo do momento: "Por que agora?".',
        'Use a régua: "De 0 a 10, quanto isso importa pra você?".',
        'Se ela der um número, pergunte "por que esse número e não um menor?".',
        'Reflita e anote cada frase de desejo, motivo ou necessidade.',
        'Ao apresentar o protocolo, comece repetindo o motivo dela.',
        'Se surgir conversa de manutenção ("é caro", "meu marido"), reflita sem brigar e volte ao motivo.'
      ],
      exemplo: [
        ['d', 'De 0 a 10, quanto resolver essa papada é importante pra você?'],
        ['p', 'Ah, uns 7.'],
        ['d', 'E por que 7, e não 3?'],
        ['p', 'Porque eu evito foto de perfil. Até na chamada de vídeo com minha neta eu fico ajeitando o celular.'],
        ['d', 'Você queria aparecer pra sua neta sem ficar se escondendo.'],
        ['p', 'Queria. Mas não sei se compensa gastar com isso.'],
        ['d', 'Faz sentido pensar no valor. E, ao mesmo tempo, você me disse que se esconde até da sua neta.'],
        ['p', 'É... isso me incomoda mais do que o dinheiro, pra ser sincera.']
      ],
      erros: [
        'Perguntar "por que só 7?": ela vai listar motivos pra não fazer.',
        'Correr pro preço quando ela fala o motivo: você interrompe o momento em que ela está se convencendo.',
        'Inventar motivo por ela ("você quer ficar mais jovem, né?"): o motivo tem que ser dela, com as palavras dela.'
      ],
      pratica: 'Use a régua de 0 a 10 em 4 avaliações desta semana. Anote o número e a resposta ao "por que esse número e não um menor?". Na apresentação do plano, repita a frase dela. Marque quantas fecharam.',
      q: [
        ['A paciente diz que a importância é 6. Qual pergunta você faz?', 'Por que 6 e não 3?', 'Por que só 6?', 'Quer que eu mostre o preço?', 'Perguntar pelo número menor faz ela explicar por que é importante.'],
        ['Qual destas frases é conversa de mudança?', 'Eu queria me sentir segura pra usar decote', 'Meu marido acha besteira', 'Não sei se compensa', 'Ela fala desejo e motivo. As outras são conversa de manutenção.'],
        ['Na hora de apresentar o plano, o que você faz primeiro?', 'Repete o motivo que ela mesma falou', 'Explica a técnica do produto', 'Fala o preço pra ver a reação', 'O motivo dela, na sua boca, abre caminho pro plano.']
      ]
    },
    {
      t: 'Respeitar a autonomia: "você decide"',
      resumo: 'Dizer que a decisão é dela tira a pressão e, por isso mesmo, facilita o sim.',
      texto: [
        'Quando alguém sente que está sendo pressionado, a reação natural é se defender. Na avaliação, isso aparece como "vou pensar", "vou ver com meu marido", "depois eu te chamo". Muitas vezes não é falta de vontade, é a paciente protegendo a própria liberdade. A entrevista motivacional trata a autonomia como parte do método: a decisão é da paciente, e você diz isso em voz alta.',
        'Isso não é largar a condução. Você continua sendo quem indica o protocolo, quem explica, quem propõe o horário. A diferença está na frase final. Em vez de "vamos fechar hoje?", você diz: "Esse é o plano que eu indico pra você. A decisão é sua, e eu respeito qualquer uma. Se fizer sentido, a gente já deixa marcado". Você mostra firmeza no que indica e liberdade na escolha. Seu jeito de falar como dona, o "eu consigo", combina muito bem com isso.',
        'Existe uma técnica de pesquisa em persuasão chamada "mas você é livre". A pessoa faz o pedido e acrescenta algo como "mas você é livre pra decidir". Carpenter juntou dezenas de experimentos em 2013 e viu que essa frase aumentava a chance de a pessoa aceitar o pedido. Uma revisão mais nova, de 2023, conferiu de novo e achou o efeito bem menor nos estudos mais bem feitos. Então use a frase porque ela é respeitosa e combina com sua forma de atender, não porque é truque garantido.',
        'Respeitar a autonomia também protege você. A CFBM não aceita pressão comercial, promoção relâmpago ou "só hoje". Prazo falso vai contra tudo que esse curso ensina. O único prazo real que você tem é o da avaliação: os R$ 100 pagos no Pix viram desconto no procedimento feito em até 30 dias. Você pode lembrar isso como informação, sem usar como ameaça: "Só pra você saber, o valor da avaliação entra no procedimento se você fizer até tal dia".',
        'E se ela disser que vai pensar? Respeite, mas não termine no vazio. Reflita o que ela disse, pergunte o que ela precisa pra decidir e combine um próximo passo concreto: "Posso te mandar um áudio na quinta pra saber como você está pensando?". Paciente 50+ gosta de áudio e gosta de sentir que alguém lembrou dela. Isso não é pressão, é cuidado. E cuidado é o que faz ela voltar e indicar.'
      ],
      ciencia: [
        { ref: 'carpenter2013', tipo: 'Revisão de estudos', txt: 'Meta-análise de experimentos de psicologia social com a frase "mas você é livre" depois de um pedido, como doar ou responder uma pesquisa. Encontrou aumento na aceitação. São pedidos pequenos entre desconhecidos, não consulta de saúde nem venda de procedimento.' },
        { ref: 'fillon2023', tipo: 'Revisão de estudos', txt: 'Reanálise de 52 experimentos. O efeito médio apareceu, mas sumiu quando ficaram só os 7 estudos com menor risco de viés. Os autores sugerem que o efeito da técnica pode estar inflado. Por isso, aqui ela entra como forma respeitosa de falar, não como garantia.' },
        { ref: 'miller2013', tipo: 'Livro', txt: 'Miller e Rollnick colocam a autonomia como parte do espírito da entrevista motivacional: reconhecer que a decisão de mudar é da pessoa. Ao mesmo tempo, o profissional tem direção e pode dar sua opinião quando a pessoa permite. É orientação clínica, não de vendas.' }
      ],
      passos: [
        'Apresente o plano com firmeza: "Esse é o protocolo que eu indico pra você".',
        'Diga em voz alta: "A decisão é sua, e eu respeito".',
        'Proponha o próximo passo concreto: um dia e um horário.',
        'Se ela disser que vai pensar, pergunte o que ela precisa pra decidir.',
        'Combine o retorno: dia e forma (áudio ou mensagem).',
        'Lembre o prazo dos 30 dias da avaliação como informação, nunca como pressão.'
      ],
      exemplo: [
        ['d', 'Pelo que você me contou, eu indico o bioestimulador em duas sessões. Eu acredito que é o que mais combina com o que você quer.'],
        ['p', 'Hum. Eu gostei, mas não sei.'],
        ['d', 'Tudo bem. A decisão é sua, e eu respeito qualquer uma. O que você precisa pra decidir?'],
        ['p', 'Acho que conversar com meu marido. Ele cuida das contas.'],
        ['d', 'Faz sentido. Quer que eu te mande um áudio explicando, pra você mostrar pra ele?'],
        ['p', 'Ah, isso ia ajudar.'],
        ['d', 'Mando hoje. E só pra você saber: os R$ 100 da avaliação entram no procedimento se for feito até 30 dias. Posso te chamar na quinta?'],
        ['p', 'Pode sim.']
      ],
      erros: [
        'Usar "só hoje" ou prazo inventado: é pressão, e a CFBM trata promoção como mercantilização.',
        'Dizer "você decide" e sumir: autonomia não é abandono. Sempre combine o próximo passo.',
        'Falar "mas você é livre" com tom de ironia ou cansaço: vira cobrança disfarçada.'
      ],
      pratica: 'Nesta semana, termine toda apresentação de plano com "a decisão é sua" e um horário proposto. Para cada "vou pensar", combine um retorno com dia marcado. Conte quantos retornos você fez e quantos viraram agendamento.',
      q: [
        ['Qual é a forma certa de fechar a apresentação do plano?', 'Esse é o plano que eu indico. A decisão é sua. Se fizer sentido, já deixamos marcado', 'Fecha hoje porque amanhã o valor muda', 'Pensa aí e qualquer coisa me chama', 'Firmeza na indicação, liberdade na escolha e próximo passo concreto.'],
        ['O que dizem os estudos sobre "mas você é livre"?', 'Há efeito em vários experimentos, mas ele é menor nos estudos mais rigorosos', 'É garantia de fechamento', 'Foi testado em clínicas de estética', 'Carpenter achou efeito, a reanálise de 2023 achou o efeito menor. E nenhum é de estética.'],
        ['A paciente disse "vou pensar". O que você faz?', 'Pergunta o que ela precisa pra decidir e combina um retorno com dia', 'Oferece desconto pra fechar na hora', 'Deixa ela ir e espera ela chamar', 'Respeita a decisão e mantém a condução com um próximo passo.'],
        ['Como usar o prazo dos 30 dias da avaliação?', 'Como informação, sem tom de ameaça', 'Como urgência: "corre que vai perder"', 'Não falar, pra não parecer venda', 'É uma regra real e útil pra ela. Informar é cuidado, pressionar não.']
      ]
    }
  ]
};
