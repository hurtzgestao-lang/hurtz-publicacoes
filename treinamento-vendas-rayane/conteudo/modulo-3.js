/* Módulo 3: Confiança e rapport. Texto próprio; fontes conferidas em nov/2026. */
window.CURSO = window.CURSO || {};
window.FONTES = window.FONTES || {};
Object.assign(window.FONTES, {
  chartrand1999: { a: 'Tanya Chartrand e John Bargh', t: 'The chameleon effect: the perception-behavior link and social interaction. Journal of Personality and Social Psychology, 76(6), 893-910, 1999', url: 'https://pubmed.ncbi.nlm.nih.gov/10402679/' },
  vanbaaren2003: { a: 'Rick van Baaren e colegas', t: 'Mimicry for money: behavioral consequences of imitation. Journal of Experimental Social Psychology, 39, 393-398, 2003', url: 'https://stafforini.com/works/van-baaren-2003-mimicry-money-behavioral/' },
  voss2016: { a: 'Chris Voss e Tahl Raz', t: 'Never Split the Difference (Negocie como se sua vida dependesse disso), HarperBusiness, 2016', url: 'https://www.scienceofpeople.com/never-split-difference-summary/' },
  huang2017: { a: 'Karen Huang, Michael Yeomans, Alison Wood Brooks, Julia Minson e Francesca Gino', t: 'It doesn\'t hurt to ask: question-asking increases liking. Journal of Personality and Social Psychology, 113(3), 430-452, 2017', url: 'https://www.hks.harvard.edu/centers/cpl/publications/it-doesnt-hurt-ask-question-asking-increases-liking' },
  lieberman2007: { a: 'Matthew Lieberman e colegas', t: 'Putting feelings into words: affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421-428, 2007', url: 'https://pubmed.ncbi.nlm.nih.gov/17576282/' },
  hurtzpratica: { a: 'Hurtz Company', t: 'Prática de atendimento usada nas clínicas acompanhadas pela Hurtz', url: '' }
});
window.CURSO.m3 = {
  id: 'm3', n: 3, t: 'Confiança e rapport', d: 'Como fazer a paciente se sentir segura com você antes de qualquer conversa sobre procedimento ou valor',
  aulas: [
    {
      t: 'Primeiras impressões e acolhimento',
      resumo: 'A paciente decide se confia em você muito antes de você falar de Botox ou de valor.',
      texto: [
        'Quem chega pelo anúncio não conhece você. Ela viu um vídeo, mandou um "oi" e está esperando pra ver quem responde. Não tem como avaliar se a sua técnica é boa. O que ela consegue avaliar é como foi tratada. Por isso o primeiro contato no WhatsApp e os primeiros minutos na sala do Instituto pesam tanto: é ali que ela decide se volta, se paga o Pix da avaliação e se aparece no dia.',
        'Você já tem uma vantagem que muita profissional não tem: você acolhe bem e fala simples. Quando você fala "essa carinha de brava a gente suaviza", a paciente entende na hora e ri. Isso é ouro. O que falta é transformar esse jeito natural em algo que acontece sempre, e não só nos dias em que você está com tempo e com energia.',
        'Acolher não é elogiar nem falar muito. É mostrar três coisas logo no começo: que você sabe quem ela é, que você sabe por que ela veio e que ali ela pode falar sem vergonha. Boa parte das suas pacientes tem mais de 50 anos. Muitas nunca fizeram nada no rosto e chegam com medo de ficar artificial, medo de dor e vergonha de dizer o que incomoda.',
        'Na avaliação presencial, o acolhimento começa antes de sentar. Receba na porta, chame pelo nome, ofereça água, diga onde ela pode deixar a bolsa. Sente na altura dela, sem a mesa no meio se der. Os dois primeiros minutos não são sobre procedimento. São sobre ela: como chegou, se achou fácil a Clínica Essencial em frente aos Correios, o que fez ela marcar agora.',
        'No WhatsApp, a primeira resposta precisa ter seu nome, o nome dela e o motivo do contato. Se ela mandou áudio, responda com áudio curto. Uma mensagem automática fria ("Olá, seja bem-vinda, como posso ajudar?") diz pra ela que do outro lado não tem ninguém prestando atenção. Uma resposta com nome e contexto diz o contrário.'
      ],
      ciencia: [
        { ref: 'hurtzpratica', tipo: 'Prática de mercado', txt: 'Nas clínicas que a Hurtz acompanha, abrir o atendimento com nome da paciente, nome de quem atende e o motivo do contato, e responder áudio com áudio pro público 50+, é a prática que melhor segura a conversa. É observação de rotina de atendimento, não estudo científico. Use como padrão de trabalho, não como prova.' }
      ],
      passos: [
        'Antes de responder, leia tudo que ela mandou e veja de qual anúncio ela veio.',
        'Primeira frase com o nome dela e o seu: "Oi, Dona Fulana! Aqui é a Rayane."',
        'Segunda frase mostrando que você sabe o motivo: "Vi que você chamou sobre a papada."',
        'Feche com uma pergunta fácil, que ela consiga responder em uma linha.',
        'No presencial: receba na porta, chame pelo nome e gaste os dois primeiros minutos falando dela, não do procedimento.'
      ],
      exemplo: [
        ['p', 'Boa tarde. Vi o vídeo da papada. Quanto é?'],
        ['d', 'Boa tarde, Dona Fulana! Aqui é a Rayane, que bom que você chamou.'],
        ['d', 'Vi que foi o vídeo da papada. Me conta: isso te incomoda faz tempo?'],
        ['p', 'Faz uns dois anos. Depois que fiz 55 parece que caiu tudo.'],
        ['d', 'Entendi. Muita gente me fala exatamente isso. Você já fez algum procedimento no rosto antes?'],
        ['p', 'Nunca. Tenho um pouco de medo, pra ser sincera.'],
        ['d', 'Que bom que você falou. Medo é normal e a gente vai com calma, sem nada que você não queira.']
      ],
      erros: [
        'Responder o preço seco na primeira mensagem: ela ainda não sabe quem você é, então qualquer número parece caro.',
        'Mandar um textão com tudo sobre o procedimento: ela não perguntou isso e para de ler.',
        'Na consulta, já começar pelo espelho e pela técnica: ela ainda não está à vontade pra falar o que incomoda de verdade.'
      ],
      pratica: 'Nas próximas 10 conversas novas no WhatsApp, abra com o nome dela, o seu nome e o motivo do contato, e termine com uma pergunta. No fim da semana, conte em quantas ela respondeu a sua pergunta e anote o número.',
      q: [
        ['O que a paciente nova consegue avaliar no primeiro contato?', 'Como ela foi tratada', 'Se a técnica é boa', 'Se o produto é de marca boa', 'Ela não tem como julgar técnica, só o atendimento.'],
        ['A paciente manda áudio perguntando o valor. Qual a melhor primeira resposta?', 'Áudio curto com seu nome, o nome dela e uma pergunta sobre o que incomoda', 'O valor por texto, direto', 'Um texto longo explicando o procedimento', 'Áudio com áudio, nome e pergunta. O valor vem depois de entender o caso.'],
        ['Na avaliação presencial, os dois primeiros minutos devem ser sobre:', 'A paciente: como chegou e o que fez ela marcar agora', 'A técnica que você vai usar', 'O valor do procedimento', 'Primeiro ela, depois o procedimento.']
      ]
    },
    {
      t: 'Espelhamento: a linguagem e o ritmo dela',
      resumo: 'Usar as palavras e o ritmo da paciente faz ela sentir que vocês estão do mesmo lado.',
      texto: [
        'Espelhar é devolver pra paciente o jeito dela de falar. Se ela chama a papada de "pelanca", você não corrige pra "submentoniano". Se ela fala devagar, você não dispara. Se ela manda áudio, você manda áudio. Se ela escreve curto, você escreve curto. A ideia é simples: quando a pessoa sente que você fala a mesma língua, ela relaxa e conta mais.',
        'Tem uma forma bem prática de espelhar que vem da negociação: repetir as últimas duas ou três palavras importantes do que ela falou, em tom de pergunta. Ela diz "eu fico com cara de cansada". Você responde "cara de cansada?". E espera. Quase sempre ela continua e explica mais, sem você precisar fazer outra pergunta. É a forma mais fácil de fazer ela falar.',
        'Espelhar não é imitar de forma forçada. Não é copiar sotaque, não é repetir tudo que ela diz como papagaio. Se ficar artificial, ela percebe e o efeito vira o contrário. Pense em acompanhar, não em copiar. Uma palavra dela aqui, o ritmo dela ali, o mesmo jeito de mandar mensagem.',
        'O ponto mais importante pra você: as palavras da paciente valem mais que as palavras técnicas. Quando você for apresentar o protocolo, use o que ela falou. Se ela disse "quero parar de parecer brava nas fotos", o seu plano é pra "parar de parecer brava nas fotos", e não "tratamento de rugas dinâmicas da glabela". Ela compra o que ela falou, não o que você explicou.',
        'Com o público 50+, ritmo conta muito. Muitas pacientes falam com calma, contam histórias, fazem uma volta antes de chegar no ponto. Se você corta pra ir direto ao assunto, ela sente pressa e desconfia. Deixe ela terminar, respire, e só então pergunte.'
      ],
      ciencia: [
        { ref: 'chartrand1999', tipo: 'Estudo', txt: 'Chartrand e Bargh mostraram, em experimentos de laboratório com estudantes, que as pessoas imitam sem perceber a postura e os gestos de quem está com elas, e que ser imitado deixou a interação mais fluida e aumentou a simpatia pelo parceiro. É laboratório, não consultório. Mostra a tendência humana, não garante fechamento.' },
        { ref: 'vanbaaren2003', tipo: 'Estudo', txt: 'Van Baaren e colegas testaram em restaurante na Holanda: quando a garçonete repetia o pedido do cliente com as mesmas palavras, a gorjeta foi maior do que quando ela só confirmava. É contexto de restaurante e valores pequenos. A lição que vale pra você é repetir as palavras da paciente em vez de trocar pelas suas.' },
        { ref: 'voss2016', tipo: 'Livro', txt: 'Chris Voss, ex-negociador do FBI, descreve o espelho como repetir as últimas palavras importantes da pessoa, em tom de pergunta, e esperar ela continuar. É experiência de negociação de sequestro e de negócios, não pesquisa controlada. Funciona como técnica prática pra fazer a paciente explicar mais.' }
      ],
      passos: [
        'Anote, de cabeça ou no papel, as palavras exatas que ela usa pro incômodo ("bigode chinês", "pelanca", "cara de brava").',
        'Use essas palavras no resto da conversa, sem trocar por termo técnico.',
        'Quando ela disser algo importante, repita as últimas duas ou três palavras em tom de pergunta e fique em silêncio.',
        'Acompanhe o formato: áudio com áudio, mensagem curta com mensagem curta.',
        'Na hora do plano, descreva o resultado com as palavras dela.'
      ],
      exemplo: [
        ['p', 'Eu me olho no espelho e acho que tô com cara de cansada o tempo todo.'],
        ['d', 'Cara de cansada o tempo todo?'],
        ['p', 'É. Minha filha até pergunta se eu dormi mal. E eu durmo bem, viu.'],
        ['d', 'Sua filha pergunta se você dormiu mal...'],
        ['p', 'Pergunta! Isso me chateia. Eu não me sinto cansada, mas o rosto parece.'],
        ['d', 'Entendi. Então o que você quer é que o rosto mostre como você se sente, sem parecer cansada. É isso?'],
        ['p', 'É exatamente isso.']
      ],
      erros: [
        'Corrigir a palavra dela pela técnica ("isso se chama sulco nasogeniano"): ela se sente burra e fecha.',
        'Repetir tudo que ela fala: vira papagaio e soa ensaiado.',
        'Responder textão quando ela mandou uma linha, ou texto quando ela mandou áudio: quebra o ritmo dela.'
      ],
      pratica: 'Em 5 avaliações desta semana, use o espelho (repetir as últimas palavras em tom de pergunta) pelo menos 3 vezes em cada uma. Depois de cada consulta, escreva a frase exata que a paciente usou pro incômodo e confira se você usou essa frase na hora de apresentar o plano.',
      q: [
        ['A paciente diz "quero tirar essa pelanca". Como você se refere a isso depois?', 'Pelanca, a palavra dela', 'Região submentoniana', 'Flacidez cutânea', 'Use a palavra dela. Ela compra o que ela falou.'],
        ['O que é o espelho, na prática?', 'Repetir as últimas palavras importantes dela em tom de pergunta e esperar', 'Imitar o sotaque dela', 'Repetir tudo que ela fala', 'Repetir pouco, em tom de pergunta, e deixar ela continuar.'],
        ['O estudo das garçonetes (van Baaren, 2003) mostra que:', 'Repetir o pedido com as mesmas palavras aumentou a gorjeta', 'Elogiar o cliente dobrou a venda', 'Falar mais rápido aumentou a gorjeta', 'Foi a repetição literal do pedido. Contexto de restaurante, não clínica.']
      ]
    },
    {
      t: 'Escuta ativa e perguntas que aumentam a simpatia',
      resumo: 'Quem pergunta e mostra que ouviu é vista como mais simpática, e a paciente conta o que realmente quer.',
      texto: [
        'Você já percebeu que tem paciente que sai da avaliação dizendo "nossa, ela é um amor" mesmo sem você ter falado quase nada? Isso acontece porque quem se sente ouvida gosta de quem ouviu. Escutar bem não é ficar calada. É fazer a pergunta certa, deixar ela responder até o fim e mostrar que você guardou o que ela disse.',
        'A pergunta que mais funciona é a de continuação, aquela que pega um pedaço do que ela falou e pede mais. Ela disse que vai num casamento em janeiro. Você pergunta: "de quem é o casamento?". Ela disse que o marido comentou da boca. Você pergunta: "e o que ele falou?". Isso mostra que você está prestando atenção nela, e não só esperando a vez de falar do procedimento.',
        'Escuta ativa também é resumir. A cada pouco, devolva em uma frase o que entendeu: "então o que mais te incomoda é a papada nas fotos, e você quer estar bem no casamento da sua sobrinha". Se estiver certo, ela confirma e se sente compreendida. Se estiver errado, ela corrige e você ganha a informação certa. Os dois resultados são bons.',
        'O maior inimigo da escuta é a pressa de explicar. Você sabe muito sobre bioestimulador e quer mostrar. Mas cada minuto explicando antes da hora é um minuto em que ela não está falando dela. Guarde a explicação pra depois. Primeiro entenda o caso. Uma boa regra é: na primeira metade da avaliação, ela fala mais que você.',
        'No WhatsApp, escuta ativa é ler tudo antes de responder, inclusive ouvir o áudio inteiro. Teve paciente que mandou dezenas de mensagens e foto da papada, contando a história toda. Quem responde só "o valor é tanto" perde a paciente. Quem responde citando um detalhe do que ela contou mostra que tem alguém de verdade do outro lado.'
      ],
      ciencia: [
        { ref: 'huang2017', tipo: 'Estudo', txt: 'Huang e colegas, de Harvard, analisaram conversas online e encontros rápidos (speed dating): quem fazia mais perguntas, principalmente de continuação, era mais bem avaliado pela outra pessoa. O efeito vinha da sensação de ser ouvido. São conversas entre desconhecidos, não consultas. A lição prática é a pergunta de continuação.' },
        { ref: 'voss2016', tipo: 'Livro', txt: 'Voss recomenda resumir o que a outra pessoa disse até ela responder algo como "é isso mesmo". Para ele, esse é o sinal de que a pessoa se sentiu entendida. É experiência de negociação, não estudo controlado, mas casa bem com a consulta de avaliação.' }
      ],
      passos: [
        'Faça uma pergunta aberta e deixe ela responder até o fim, sem interromper.',
        'Pegue um detalhe da resposta e faça uma pergunta de continuação sobre ele.',
        'A cada poucos minutos, resuma em uma frase o que entendeu e espere ela confirmar.',
        'Segure a explicação técnica até entender bem o caso.',
        'No WhatsApp, ouça o áudio inteiro e cite um detalhe dele na sua resposta.'
      ],
      exemplo: [
        ['p', 'Eu queria ver a boca. Tenho um casamento em janeiro.'],
        ['d', 'Que delícia! De quem é o casamento?'],
        ['p', 'Da minha sobrinha. Vou ser madrinha.'],
        ['d', 'Madrinha! Então vai ter foto pra todo lado. E o que te incomoda na boca hoje?'],
        ['p', 'Ela ficou fininha, sumiu. Antes eu tinha boca.'],
        ['d', 'Então, deixa eu ver se entendi: você quer a boca de volta do jeito que era, natural, pra estar bem nas fotos de madrinha em janeiro. É isso?'],
        ['p', 'É isso! Natural, que eu não quero boca de pato.']
      ],
      erros: [
        'Começar a explicar o ácido hialurônico antes de entender o que ela quer: ela perde o fio e você perde a informação.',
        'Interromper a história dela pra ir direto ao ponto: o público 50+ sente como falta de respeito.',
        'Fazer uma pergunta atrás da outra sem comentar as respostas: vira interrogatório.'
      ],
      pratica: 'Em 5 avaliações desta semana, faça pelo menos 2 perguntas de continuação e 1 resumo em cada uma. Marque num papel: em quantas a paciente respondeu "é isso" ou algo parecido depois do resumo?',
      q: [
        ['Qual tipo de pergunta mais aumentou a simpatia no estudo de Huang e colegas?', 'Pergunta de continuação sobre o que a pessoa acabou de dizer', 'Pergunta fechada de sim ou não', 'Pergunta sobre o preço', 'Continuação mostra que você ouviu.'],
        ['Pra que serve resumir o que a paciente falou?', 'Ela se sente entendida, ou corrige e você ganha a informação certa', 'Pra ganhar tempo', 'Pra mostrar que você sabe mais que ela', 'Os dois resultados são bons pra você.'],
        ['Na primeira metade da avaliação, quem deve falar mais?', 'A paciente', 'Você, explicando a técnica', 'As duas igual', 'Primeiro entenda o caso, depois explique.'],
        ['O estudo de Huang foi feito com:', 'Conversas entre desconhecidos, inclusive speed dating', 'Pacientes de estética', 'Vendedores de carro', 'Contexto diferente, por isso é inspiração e não prova sobre clínica.']
      ]
    },
    {
      t: 'Nomear emoções: rotular o medo dela',
      resumo: 'Dizer em voz alta o medo que a paciente está sentindo diminui esse medo e abre espaço pra decisão.',
      texto: [
        'Quase toda paciente chega com um medo que não fala. Medo de ficar artificial, medo da dor, medo de gastar e o marido brigar, medo de ficar roxa e todo mundo perceber. Enquanto esse medo não aparece, ela não decide. Ela diz "vou pensar" e some. Rotular é você colocar esse medo em palavras antes dela, com calma e sem julgamento.',
        'O jeito é simples: comece com "parece que", "me dá a impressão de que" ou "tô sentindo que". Por exemplo: "parece que você tem medo de ficar com cara de mexida". Depois fique quieta. Não emende explicação. Deixe ela responder. Se você acertou, ela solta o ar e conta o resto. Se errou, ela corrige: "não, meu medo é outro". De qualquer forma você descobre o que trava.',
        'Rotular não é dizer "não precisa ter medo". Isso nega o que ela sente e ela se fecha. Primeiro você reconhece o medo, depois resolve. "Parece que você tem medo de ficar artificial." Ela confirma. Aí sim: "faz sentido. Por isso eu trabalho com dose pequena e a gente faz o retorno em 15 dias pra ajustar, se precisar." A ordem importa: nomear, ouvir, só então explicar.',
        'Você também pode nomear o medo antes que ele vire objeção. Se você percebe que ela olha pro preço e cala, diga: "parece que tem alguma coisa pesando aí pra você". É muito melhor ouvir a dúvida na sua frente, com você podendo responder, do que ela ir embora e decidir sozinha em casa.',
        'Isso serve pra emoções boas também. Quando ela se olha no espelho depois do Botox e sorri, diga: "parece que você gostou do que viu". Isso reforça o momento bom e é a hora natural de falar do retorno e de indicação, que já é um ponto forte seu.'
      ],
      ciencia: [
        { ref: 'lieberman2007', tipo: 'Estudo', txt: 'Lieberman e colegas, na UCLA, colocaram 30 voluntários em ressonância: quando eles nomeavam a emoção de uma imagem negativa, a atividade da amígdala, ligada ao medo, caiu em comparação com outras tarefas. Foi a própria pessoa nomeando, em laboratório, e os autores dizem que o efeito é modesto. Dá base pra ideia, não prova o efeito numa consulta.' },
        { ref: 'voss2016', tipo: 'Livro', txt: 'Voss chama isso de rotular: dizer "parece que você..." sobre a emoção da outra pessoa e ficar em silêncio. Segundo ele, rotular emoção negativa diminui a intensidade dela, e, se o rótulo estiver errado, a pessoa corrige e você ganha informação. É experiência de negociação, não pesquisa controlada.' }
      ],
      passos: [
        'Observe o que ela não fala: silêncio, olhar pro chão, risada nervosa, "mas..." no fim da frase.',
        'Nomeie com "parece que..." ou "tô sentindo que...", sem pergunta e sem explicação junto.',
        'Fique em silêncio e deixe ela responder.',
        'Reconheça ("faz sentido") antes de qualquer explicação.',
        'Só então responda o medo, com fato concreto: dose, retorno, como você conduz.'
      ],
      exemplo: [
        ['d', 'Pelo que você me contou, o bioestimulador faz sentido pro que você quer.'],
        ['p', 'Hum. É... vou ver.'],
        ['d', 'Parece que tem alguma coisa te deixando insegura.'],
        ['p', 'É que minha vizinha fez e ficou estranha. Inchada.'],
        ['d', 'Então o seu medo é ficar estranha igual ela.'],
        ['p', 'É isso. Não quero que ninguém fique comentando.'],
        ['d', 'Faz todo sentido. O bioestimulador age aos poucos, ao longo das semanas, então ninguém olha e pensa "ela fez alguma coisa". E eu te acompanho no retorno.'],
        ['p', 'Ah, se é aos poucos fico mais tranquila.']
      ],
      erros: [
        'Dizer "não precisa ter medo": nega o que ela sente e ela se fecha.',
        'Rotular e já emendar uma explicação: ela não tem tempo de responder e o medo verdadeiro não aparece.',
        'Prometer resultado pra acalmar ("vai ficar perfeito"): é proibido pelo CFBM e quebra a confiança se não acontecer.'
      ],
      pratica: 'Nesta semana, em toda avaliação em que a paciente disser "vou pensar" ou ficar em silêncio depois do valor, use um rótulo ("parece que tem alguma coisa pesando pra você") e fique calada até ela responder. Anote quantas vezes fez isso e qual foi o medo que apareceu em cada uma.',
      q: [
        ['Qual é um bom rótulo?', '"Parece que você tem medo de ficar artificial."', '"Não precisa ter medo, vai dar tudo certo."', '"Por que você está com medo?"', 'Começa com "parece que" e nomeia a emoção, sem negar nem cobrar.'],
        ['Depois de rotular, o que você faz?', 'Fica em silêncio e deixa ela responder', 'Explica a técnica na hora', 'Fala o valor de novo', 'O silêncio é o que faz o medo verdadeiro aparecer.'],
        ['E se o seu rótulo estiver errado?', 'Ela corrige e você descobre o medo real', 'Você perde a paciente', 'Você deve pedir desculpas e mudar de assunto', 'Errar o rótulo também traz informação.'],
        ['O estudo de Lieberman (2007) mostrou que:', 'Nomear a emoção diminuiu a atividade da amígdala em laboratório', 'Rotular emoção dobra a venda', 'Pacientes de estética fecham mais com rótulo', 'Foi laboratório, efeito modesto. Base pra ideia, não promessa.']
      ]
    }
  ]
};
