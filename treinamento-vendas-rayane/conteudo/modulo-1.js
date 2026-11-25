/* Módulo 1: Mentalidade de venda na saúde. Texto próprio; fontes conferidas em 25/11/2026. */
window.CURSO = window.CURSO || {};
window.FONTES = window.FONTES || {};
Object.assign(window.FONTES, {
  rackham1988: { a: 'Neil Rackham', t: 'SPIN Selling, McGraw-Hill, 1988', url: 'https://www.routledge.com/SPIN-Selling-1st-Edition/Rackham/p/book/9780566076893' },
  dixon2011: { a: 'Matthew Dixon e Brent Adamson', t: 'The Challenger Sale, Portfolio, 2011', url: 'https://www.penguin.co.uk/books/192421/the-challenger-sale-by-matthew-dixon-and-brent-adamson/9780670922864' },
  cfbm330: { a: 'Conselho Federal de Biomedicina', t: 'Resolução CFBM nº 330, de 5 de novembro de 2020 (Código de Ética do Profissional Biomédico)', url: 'https://crbm1.gov.br/site2019/wp-content/uploads/2020/11/RES-330-CODIGO-DE-ETICA-CFBM.pdf' },
  manualHurtz: { a: 'Hurtz Company', t: 'Prática da Hurtz nas clínicas atendidas (atendimento e avaliação)', url: '' }
});
window.CURSO.m1 = {
  id: 'm1', n: 1, t: 'Mentalidade de venda na saúde', d: 'Por que vender bem é cuidar bem, e como fazer isso sem empurrar, sem desconto e sem pedir desculpa.',
  aulas: [
    {
      t: 'Vender é conduzir, não empurrar',
      resumo: 'Quem conduz a conversa ajuda a paciente a decidir; quem empurra só faz pressão.',
      texto: [
        'Muita profissional de saúde sente um incômodo quando ouve a palavra venda. Parece coisa de vendedor de loja, que fala sem parar e insiste até a pessoa ceder. Por isso trava na hora do preço, deixa a paciente "pensar" e espera ela voltar sozinha. Só que a paciente que procura você já tem um incômodo: a papada, a boca fina, as linhas na testa. Ela veio buscar uma solução. Se você não conduz, ela fica sozinha com a dúvida e quase sempre adia.',
        'Conduzir é diferente de empurrar. Empurrar é falar do procedimento antes de entender o que ela quer, insistir quando ela diz não, criar pressa falsa. Conduzir é fazer as perguntas certas, mostrar o que você enxerga, explicar o caminho e, no fim, propor o próximo passo com clareza: "Então o que eu indico pra você é isso. Vamos marcar?". A decisão continua sendo dela. O que muda é que ela decide com informação e com alguém do lado.',
        'Na avaliação de 16/11 apareceu um padrão claro nas suas conversas de WhatsApp. Você acolhe bem, a paciente conta o que quer, e a conversa termina em "vamos agendar uma avaliação?", sem dia e sem hora. Uma paciente mandou 53 mensagens e até foto da papada, disse que só podia no sábado, e a resposta foi "vamos agendar pra sábado então", sem horário. Ela sumiu. Não faltou carinho. Faltou condução: oferecer "sábado às 9h ou às 10h30?" e fechar.',
        'Pense na condução como parte do cuidado. Você não deixaria uma paciente sair da sala sem orientação depois do Botox. Do mesmo jeito, não deixa ela sair da conversa sem saber o próximo passo. Isso vale no WhatsApp, quando o próximo passo é a avaliação de R$ 100 no Pix, e vale na cadeira, quando o próximo passo é o procedimento. Em toda conversa, a pergunta é a mesma: ela sabe o que fazer agora?',
        'Conduzir também protege você. Quando você não conduz, a conversa vai pra onde a paciente leva: preço antes da hora, comparação com outra profissional, "vou ver com meu marido". Quando você conduz, a conversa passa por entender o caso, mostrar o que dá pra fazer e só então falar de valor. Você não precisa ser outra pessoa pra isso. Você já fala como dona, já diz "eu consigo". Falta só terminar cada conversa com um passo claro.'
      ],
      ciencia: [
        { ref: 'rackham1988', tipo: 'Livro', txt: 'Rackham e a equipe da Huthwaite observaram cerca de 35 mil visitas de venda ao longo de uns 12 anos. Nas vendas maiores, quem mais fechava fazia mais perguntas sobre o problema do cliente e falava menos do produto. O estudo é de vendas entre empresas, não de saúde. A ideia que serve aqui é a de que entender antes de propor funciona melhor do que apresentar e insistir.' },
        { ref: 'manualHurtz', tipo: 'Prática de mercado', txt: 'Nas clínicas que a Hurtz atende, conversa de WhatsApp que termina sem dia e hora oferecidos raramente vira agendamento. Por isso a regra é sempre fechar a mensagem com duas opções de horário. É observação da operação da Hurtz, não um estudo controlado.' }
      ],
      passos: [
        'Antes de responder, pergunte a si mesma: qual é o próximo passo dessa paciente?',
        'Faça pelo menos uma pergunta sobre o incômodo dela antes de falar de procedimento.',
        'Termine toda conversa com uma proposta clara: dia e hora no WhatsApp, plano e data na avaliação.',
        'Ofereça duas opções, nunca uma pergunta aberta como "quando você pode?".',
        'Se ela disser que vai pensar, combine quando você volta a falar com ela.'
      ],
      exemplo: [
        ['p', 'Oi, vi o anúncio. Queria ver essa papada aqui, tá me incomodando muito.'],
        ['d', 'Oi! Aqui é a Dra Rayane. Entendi, a papada. Faz quanto tempo que ela te incomoda?'],
        ['p', 'Uns dois anos. Nas fotos é o que eu mais vejo.'],
        ['d', 'Sei bem como é. Pra eu te dizer o que dá pra fazer, preciso te ver pessoalmente. A avaliação é aqui na Clínica Essencial, em frente aos Correios.'],
        ['p', 'Só consigo sábado.'],
        ['d', 'Sábado eu tenho às 9h ou às 10h30. Qual fica melhor pra você?'],
        ['p', 'Às 9h.'],
        ['d', 'Fechado. A avaliação é R$ 100 no Pix pra garantir o horário, e esse valor vira desconto se você fizer o procedimento em até 30 dias. Te mando a chave?']
      ],
      erros: [
        'Terminar com "vamos agendar?": é uma pergunta solta e a paciente responde depois, ou nunca.',
        'Falar do procedimento antes de perguntar o incômodo: ela sente que você está vendendo, não cuidando.',
        'Insistir depois de um não claro: isso é empurrar e queima a indicação, que é seu ponto forte.'
      ],
      pratica: 'Nesta semana, releia 10 conversas suas de WhatsApp que não viraram avaliação. Conte em quantas você ofereceu dia e hora. Nas próximas 10 conversas novas, ofereça sempre duas opções de horário e anote quantas marcaram.',
      q: [
        ['Qual é a diferença principal entre conduzir e empurrar?', 'Conduzir é entender o caso e propor um próximo passo claro; empurrar é pressionar sem entender', 'Conduzir é falar menos de preço', 'Empurrar é mandar áudio em vez de texto', 'A paciente decide nos dois casos, mas só quando é conduzida ela decide com informação e com um caminho claro.'],
        ['Uma paciente diz que só pode no sábado. Qual a melhor resposta?', '"Sábado tenho às 9h ou às 10h30. Qual fica melhor?"', '"Vamos agendar pra sábado então."', '"Me avisa quando puder."', 'Duas opções de horário fecham a conversa. Sem horário, ela fica com a tarefa de voltar, e muitas não voltam.'],
        ['O que o estudo de Rackham mostra que serve pra você?', 'Quem pergunta mais sobre o problema e fala menos do produto fecha mais', 'Que vender em saúde é igual a vender carro', 'Que desconto aumenta o fechamento', 'O estudo é de vendas entre empresas, mas a lição de entender antes de propor vale também na sua avaliação.']
      ]
    },
    {
      t: 'Venda consultiva x venda empurrada',
      resumo: 'Na venda consultiva você diagnostica antes de indicar, como já faz no seu trabalho clínico.',
      texto: [
        'Existem dois jeitos de vender um procedimento. No jeito empurrado, a paciente pergunta "quanto é o Botox?" e você responde o valor, fala que é ótimo, que dura meses, e espera. No jeito consultivo, você entende primeiro: o que incomoda, desde quando, o que ela já tentou, o que espera ver. Só depois indica o que faz sentido pra ela. O procedimento pode ser o mesmo. A conversa é completamente diferente.',
        'Você já faz consulta com raciocínio clínico: olha a estrutura, a pele, a idade, e decide o que indicar. A venda consultiva é levar esse mesmo raciocínio pra conversa. Em vez de "boca com ácido hialurônico custa tanto", você diz: "Pelo que eu vi, seu lábio perdeu volume nas bordas e o canto caiu um pouco. O que eu indico é repor um pouco de volume e levantar esse canto. Fica natural, do jeito que você me pediu." A paciente entende o que vai ser feito e por quê.',
        'A venda empurrada tem um problema sério na saúde: ela transforma o procedimento em produto de prateleira. E produto de prateleira se compara por preço. Se a paciente acha que Botox é tudo igual, ela vai escolher quem cobra menos. Quando você mostra que olhou o rosto dela e montou um plano pra ela, a comparação muda. Ela não está mais comparando preço de frasco. Está comparando quem entendeu o caso dela.',
        'Com o seu público, muita gente com mais de 50 anos, isso pesa ainda mais. Essa paciente tem medo de ficar artificial, de "ficar com cara de boneca", de gastar e não ver diferença. Uma explicação simples, com as palavras dela, tira esse medo. Você já faz isso bem quando fala "aquela carinha de brava" em vez de "rugas glabelares". Use isso a seu favor: explique o plano no idioma dela.',
        'A venda consultiva tem um custo: leva mais tempo e exige que você faça perguntas antes de falar. No começo parece que está demorando. Mas a paciente que entendeu o plano decide mais rápido no fim, volta pra retoque e indica as amigas. A empurrada parece rápida, mas acaba em "vou pensar" e silêncio. Com ticket de R$ 700 a R$ 900, a paciente precisa entender o que está comprando.'
      ],
      ciencia: [
        { ref: 'rackham1988', tipo: 'Livro', txt: 'Rackham organizou as perguntas que mais apareciam nas vendas bem-sucedidas em quatro tipos: situação, problema, implicação e necessidade de solução (o SPIN). As de implicação e de necessidade de solução ajudam o cliente a perceber o tamanho do problema e o valor de resolver. É pesquisa de vendas entre empresas; o módulo de consulta deste curso adapta isso pra avaliação.' },
        { ref: 'dixon2011', tipo: 'Livro', txt: 'Dixon e Adamson, com base numa pesquisa com milhares de vendedores, defendem que os melhores ensinam algo novo ao cliente, adaptam a mensagem a ele e conduzem a conversa. O contexto também é venda entre empresas. A parte útil pra você é ensinar: mostrar à paciente algo do rosto dela que ela não tinha percebido.' }
      ],
      passos: [
        'Quando perguntarem o preço no começo, responda com uma pergunta sobre o incômodo.',
        'Na avaliação, faça pelo menos três perguntas antes de indicar qualquer coisa.',
        'Explique o que você viu no rosto dela com palavras simples, mostrando no espelho.',
        'Indique um plano, dizendo o que vai fazer e por que, antes de falar o valor.',
        'Confira se ela entendeu: "Faz sentido pra você?"'
      ],
      exemplo: [
        ['p', 'Quanto é o Botox?'],
        ['d', 'Oi! Já te passo. Antes, me conta: o que mais te incomoda quando você se olha no espelho?'],
        ['p', 'Essa ruga aqui no meio da testa. Parece que eu tô sempre brava.'],
        ['d', 'Aquela carinha de brava, né? É muito comum. Você já fez alguma coisa antes?'],
        ['p', 'Nunca. Tenho medo de ficar travada.'],
        ['d', 'Entendo. O que eu faço é dose pensada pro seu rosto, pra suavizar sem tirar sua expressão. Na avaliação eu te mostro no espelho o que dá pra fazer e já te digo o valor certinho pro seu caso.']
      ],
      erros: [
        'Mandar a tabela de preços logo de cara: vira comparação por preço e você perde a chance de mostrar valor.',
        'Usar termo técnico pra impressionar: a paciente de 50+ não entende e fica com medo.',
        'Indicar tudo de uma vez: parece que você quer vender o máximo, não resolver o incômodo principal dela.'
      ],
      pratica: 'Escreva numa folha as 5 perguntas que você vai fazer em toda avaliação antes de indicar algo. Use em todas as avaliações da semana e marque, depois de cada uma, quantas das 5 você fez.',
      q: [
        ['A paciente pergunta "quanto é?" na primeira mensagem. O que fazer?', 'Acolher e perguntar sobre o incômodo antes de passar valor', 'Mandar a tabela inteira', 'Dizer que só fala preço pessoalmente e parar aí', 'Perguntar primeiro mostra que você quer entender o caso e tira a conversa da comparação por preço.'],
        ['Por que a venda empurrada é arriscada na estética?', 'Transforma o procedimento em produto comparado só pelo preço', 'Porque é proibida pelo conselho', 'Porque a paciente não gosta de áudio', 'Se tudo parece igual, ela escolhe o mais barato. O plano feito pra ela muda a comparação.'],
        ['O que Dixon e Adamson chamam de ensinar o cliente, adaptado pra você?', 'Mostrar algo no rosto dela que ela não tinha percebido', 'Dar uma aula técnica sobre toxina', 'Falar dos cursos que você fez', 'Ensinar é trazer uma percepção nova sobre o caso dela, com palavras simples.']
      ]
    },
    {
      t: 'Ética e venda na saúde',
      resumo: 'Vender com ética é mostrar valor, sem desconto como argumento e sem prometer resultado.',
      texto: [
        'Como biomédica esteta, você responde ao Código de Ética do Conselho Federal de Biomedicina, a Resolução CFBM nº 330, de 2020. Ele trata como mercantilização da profissão divulgar pacotes, promoções, ofertas e benefícios financeiros de qualquer natureza, e também divulgar preço de serviço pra captar paciente. Também proíbe anunciar título ou especialidade que você não tem registrado. Então "especialista em harmonização" fica de fora; "biomédica esteta" com seu CRBM vale. Isto não é parecer jurídico: na dúvida, confirme com o seu CRBM.',
        'Na prática, isso muda o jeito de argumentar. "Tá com 50% hoje", "se fechar agora eu faço um preço" e "último dia da promoção" não são argumentos que este curso ensina. Além do risco com o conselho, desconto como argumento ensina a paciente que o seu preço normal é caro demais. Ela passa a esperar a próxima promoção. O argumento ético é outro: o que você viu no rosto dela, o que você indica, como é feito e o que ela pode esperar com realismo.',
        'A segunda regra é não prometer resultado. Cada organismo responde de um jeito, e bioestimulador, por exemplo, depende da resposta da pele dela. Em vez de "vai sumir a papada" ou "vai ficar dez anos mais nova", diga o que o procedimento faz e o que costuma acontecer, com honestidade: "o protocolo trabalha a flacidez dessa região; a melhora vem aos poucos e eu acompanho com você". E lembre de creditar: a tecnologia do protocolo de papada e flacidez é do Dr. Rafael Dias.',
        'Uma coisa é diferente de desconto: a regra da avaliação. A avaliação custa R$ 100 no Pix, paga antes pra garantir o horário, e esse valor é abatido do procedimento feito em até 30 dias. Isso não é promoção. É como a sua agenda funciona, explicado de forma transparente. Você pode e deve falar disso com clareza, porque ajuda a paciente a entender que a avaliação não é dinheiro perdido.',
        'Ética não é ficar calada nem ter vergonha de vender. É vender pelo motivo certo, com informação verdadeira. A paciente que sai da sua sala sabendo o que vai ser feito, quanto custa e o que esperar foi bem atendida, feche ela hoje ou não. E paciente bem atendida é a que traz indicação, que hoje é uma das suas maiores forças.'
      ],
      ciencia: [
        { ref: 'cfbm330', tipo: 'Prática de mercado', txt: 'É a norma, não um estudo. O Código de Ética (Res. CFBM 330/2020) lista, entre as infrações, a divulgação de pacotes, promoções, ofertas e benefícios financeiros, a divulgação de preços pra captar usuários e o anúncio de título ou especialidade sem qualificação. A leitura aqui foi feita no texto publicado pelo CRBM-1. Pra casos concretos, a palavra final é do seu Conselho Regional.' },
        { ref: 'manualHurtz', tipo: 'Prática de mercado', txt: 'Na experiência da Hurtz, clínica que vende por desconto atrai paciente que só volta em promoção. Explicar o plano e a regra da avaliação com clareza segura o preço sem precisar de oferta. É observação da operação, não pesquisa.' }
      ],
      passos: [
        'Tire da sua fala palavras como "promoção", "desconto", "só hoje" e "preço especial".',
        'Troque promessa por descrição: o que o procedimento faz e o que costuma acontecer.',
        'Apresente-se como biomédica esteta, nunca como especialista.',
        'Explique a regra da avaliação (R$ 100, abatidos em até 30 dias) como regra, não como vantagem.',
        'Ao falar do protocolo de papada e flacidez, cite que a tecnologia é do Dr. Rafael Dias.'
      ],
      exemplo: [
        ['p', 'Se eu fechar hoje você faz um precinho?'],
        ['d', 'Eu entendo, todo mundo quer fazer render o dinheiro. Meu valor é o mesmo pra todas as pacientes, porque é o cuidado que eu coloco em cada uma.'],
        ['p', 'E vai sumir essa flacidez?'],
        ['d', 'Vou ser sincera com você: não existe resultado garantido, cada pele responde de um jeito. O que o protocolo faz é estimular a firmeza dessa região, e a melhora vem aos poucos. Eu acompanho cada etapa com você.'],
        ['p', 'E a avaliação que eu paguei?'],
        ['d', 'Os R$ 100 viram desconto no procedimento se você fizer em até 30 dias. Isso já está garantido pra você.']
      ],
      erros: [
        'Usar desconto pra fechar na hora: além do risco com o conselho, desvaloriza seu preço normal.',
        'Prometer resultado ("vai ficar perfeita"): se não acontecer igual, você perde a confiança e a indicação.',
        'Dizer "sou especialista": sem título registrado, o código trata isso como infração.'
      ],
      pratica: 'Escreva as 3 frases que você mais usa pra falar de resultado ou preço. Reescreva cada uma sem promessa e sem desconto. Use as versões novas em pelo menos 5 avaliações da semana.',
      q: [
        ['Qual destas falas está de acordo com o Código de Ética?', '"O procedimento estimula a firmeza; a melhora vem aos poucos e eu acompanho."', '"Fechando hoje faço 30% de desconto."', '"Sou especialista em harmonização."', 'Descreve o que o procedimento faz sem promessa e sem oferta financeira.'],
        ['Falar que os R$ 100 da avaliação viram desconto em até 30 dias é promoção?', 'Não, é a regra de funcionamento da agenda explicada com transparência', 'Sim, e deve ser evitado', 'Só é permitido se a paciente perguntar', 'É uma regra fixa pra todas, não uma oferta pra captar. Explicar ajuda ela a confiar.'],
        ['Por que desconto como argumento atrapalha mesmo fora da questão ética?', 'Ensina a paciente que o preço normal é caro e que vale esperar a próxima oferta', 'Porque ela não entende porcentagem', 'Porque o Pix não aceita valor com desconto', 'Quem compra por desconto espera desconto de novo.']
      ]
    },
    {
      t: 'A profissional como autoridade',
      resumo: 'Fale como dona do caso: com segurança, plano claro e sem pedir desculpa pelo preço.',
      texto: [
        'A paciente que senta na sua cadeira quer sentir que está nas mãos de alguém que sabe o que faz. Essa segurança não vem do diploma na parede. Vem de como você fala. Quando você diz "eu consigo resolver isso pra você", ela relaxa. Quando você diz "acho que talvez dê pra fazer alguma coisa", ela fica com medo. Você já tem o primeiro jeito em muitas conversas. A ideia desta aula é usar isso sempre, principalmente na hora do preço.',
        'Falar como dona é assumir o caso. Você olha, explica o que viu e diz o que indica, na primeira pessoa: "o que eu indico pra você é...", "eu vou fazer assim...". Evite empurrar a decisão técnica pra paciente com "o que você prefere fazer?" antes de dar sua indicação. Ela não sabe se precisa de uma ou duas seringas. Quem sabe é você. Ela decide se faz; você decide o que é indicado.',
        'O preço é onde a autoridade mais escorrega. Muita profissional começa a se justificar: "é que o produto é caro, sabe, eu nem ganho muito, mas se ficar pesado a gente vê". Isso passa insegurança e convida a negociar. O jeito seguro é falar o valor uma vez, com calma, logo depois do plano, e parar: "O plano que eu te mostrei fica em R$ 850, e eu te passo as formas de pagamento". Depois, silêncio. Deixe ela pensar.',
        'O silêncio depois do preço parece longo, mas é o tempo que ela precisa pra fazer as contas. Se você fala logo em seguida, quase sempre é pra baixar o preço ou se desculpar. Se ela tiver uma dúvida, vai perguntar, e aí você responde a dúvida, não o preço. "Tá caro" é uma frase que você vai aprender a tratar no módulo de objeções. Por enquanto, o mais importante é não pedir desculpa pelo seu valor.',
        'Autoridade também aparece nos detalhes. Cumprimentar pelo nome, saber o que ela contou no WhatsApp, explicar o passo a passo antes de começar, combinar o retorno. E se apresentar certo: Dra Rayane, biomédica esteta, com seu CRBM. Você está começando a carreira, mas isso não precisa aparecer como insegurança. A paciente precisa ver uma profissional que cuida, explica e assume.'
      ],
      ciencia: [
        { ref: 'dixon2011', tipo: 'Livro', txt: 'Uma das três habilidades que Dixon e Adamson atribuem aos melhores vendedores é conduzir a conversa, incluindo falar de dinheiro com segurança em vez de ceder à primeira pressão. O estudo é de vendas entre empresas e não mediu saúde. Serve como referência de postura, não como prova de que funciona na estética.' },
        { ref: 'manualHurtz', tipo: 'Prática de mercado', txt: 'Na Hurtz, a orientação pras clínicas é falar o valor uma vez, depois do plano, citar a forma de pagamento e esperar a paciente responder. Justificar o preço antes de qualquer objeção costuma abrir negociação. É prática observada na operação, não estudo.' }
      ],
      passos: [
        'Indique em primeira pessoa: "o que eu indico pra você é...".',
        'Fale o preço só depois de explicar o plano.',
        'Diga o valor uma vez, com a forma de pagamento, e fique em silêncio.',
        'Se ela perguntar algo, responda a pergunta sem mexer no preço.',
        'Apresente-se como Dra Rayane, biomédica esteta, com seu CRBM.'
      ],
      exemplo: [
        ['d', 'Olhando aqui no espelho: seu lábio perdeu volume nas bordas e o canto caiu um pouquinho. O que eu indico é repor esse volume e levantar o canto, bem natural.'],
        ['p', 'Gostei. E quanto fica?'],
        ['d', 'Fica em R$ 850, e eu te passo as formas de pagamento. Os R$ 100 da avaliação já saem desse valor.'],
        ['p', '...'],
        ['p', 'E dói muito?'],
        ['d', 'Uso anestésico, a maioria sente só um incômodo leve. Eu vou te falando cada passo.'],
        ['p', 'Então tá. Dá pra fazer hoje?']
      ],
      erros: [
        'Se justificar antes de ela reclamar do preço: mostra que você mesma acha caro.',
        'Perguntar "o que você quer fazer?" antes de indicar: tira de você o papel de quem sabe.',
        'Quebrar o silêncio depois do preço com uma oferta: você negocia contra você mesma.'
      ],
      pratica: 'Grave no celular, 5 vezes, a frase do seu preço: plano em uma frase, valor, forma de pagamento. Ouça e corte qualquer "é que", "mas" ou "se ficar pesado". Nesta semana, conte em quantas avaliações você falou o preço e ficou em silêncio até ela responder.',
      q: [
        ['O que fazer logo depois de falar o preço?', 'Ficar em silêncio e esperar ela responder', 'Explicar por que o produto é caro', 'Oferecer parcelar em mais vezes antes dela pedir', 'O silêncio dá tempo pra ela pensar. Falar logo depois costuma virar desculpa ou desconto.'],
        ['Qual frase passa mais autoridade?', '"O que eu indico pra você é..."', '"Acho que talvez dê pra fazer algo..."', '"O que você prefere fazer?"', 'Indicar em primeira pessoa mostra que você assumiu o caso.'],
        ['Quando falar o preço na avaliação?', 'Depois de explicar o plano que você indicou', 'Logo que ela senta', 'Só se ela insistir muito', 'O valor faz sentido quando ela já entendeu o que vai receber.']
      ]
    }
  ]
};
