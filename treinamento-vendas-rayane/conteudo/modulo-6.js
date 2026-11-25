window.CURSO = window.CURSO || {};
window.FONTES = window.FONTES || {};
Object.assign(window.FONTES, {
  zeithaml1988: { a: 'Valarie A. Zeithaml', t: 'Consumer Perceptions of Price, Quality, and Value: A Means-End Model and Synthesis of Evidence, Journal of Marketing, 1988', url: 'https://doi.org/10.1177/002224298805200302' },
  cialdini1984: { a: 'Robert B. Cialdini', t: 'Influence: The Psychology of Persuasion, William Morrow, 1984', url: 'https://www.apa.org/monitor/2011/02/persuasion' },
  storybrand2017: { a: 'Donald Miller', t: 'Building a StoryBrand, HarperCollins Leadership, 2017', url: 'https://books.apple.com/book/id1212150000' },
  cfm2336: { a: 'Conselho Federal de Medicina', t: 'Resolução CFM 2.336/2023 (publicidade médica)', url: 'https://portal.cfm.org.br/noticias/resolucao-libera-fotos-como-antes-e-depois' },
  hurtzmercado: { a: 'Hurtz Company', t: 'Prática de mercado observada nas clínicas atendidas pela Hurtz' }
});
window.CURSO.m6 = {
  id: 'm6', n: 6, t: 'Valor e posicionamento', d: 'Por que a paciente escolhe você e como mostrar isso antes de falar o preço',
  aulas: [
    {
      t: 'Valor percebido x preço',
      resumo: 'A paciente não compara só o preço. Ela compara o que recebe com o que entrega.',
      texto: [
        'Quando a paciente pergunta "quanto é o Botox?", parece que ela só quer um número. Mas o que ela está tentando descobrir é se vale a pena. E "vale a pena" depende do que ela acha que vai receber: segurança, resultado natural, alguém que acompanha depois, um lugar onde se sente bem. Preço é o que ela paga. Valor é o que ela sente que ganha. Se o valor não aparece antes do preço, qualquer número parece caro.',
        'Foi o que aconteceu quando uma lead ouviu, por foto, que o tratamento ficaria "no mínimo uns 10 a 12 mil". Ela não tinha visto nada do que estava incluído, não tinha sentido o seu cuidado, não sabia o que ia mudar no rosto dela. Ouviu só o custo. Do outro lado, a balança estava vazia. Por isso a regra deste módulo é: valor primeiro, preço depois, e preço sempre dentro do plano, nunca solto.',
        'O que pesa no lado do valor, pra sua paciente 50+? Confiança em quem faz, medo de ficar artificial, medo de dor, medo de complicação, vontade de ser bem tratada. Repare que quase nada disso é sobre produto. Ela não sabe a diferença entre uma marca de toxina e outra. Ela sabe se você explicou com calma, se olhou o rosto dela de verdade, se disse que vai ver ela de novo no retorno.',
        'Isso também explica por que desconto não é o caminho. Além de a CFBM tratar promoção como mercantilização, baixar o preço não enche o lado do valor. Só diminui o número. A paciente continua sem saber por que você. E quando o valor aparece, o preço de R$ 700 a R$ 900 deixa de ser o assunto principal. Vira a parte final de uma decisão que ela já tomou.',
        'Na prática, isso muda a ordem da sua fala. Primeiro, o que ela quer (que você ouviu no SPIN e na entrevista motivacional). Depois, o que você indica e por quê. Depois, o que está incluído. Só então o valor e a forma de pagamento. Se ela perguntar o preço logo no começo, responda com tranquilidade que depende do que o rosto dela pede, e que na avaliação você mostra o plano completo com o valor.'
      ],
      ciencia: [
        { ref: 'zeithaml1988', tipo: 'Estudo', txt: 'Zeithaml juntou pesquisas anteriores com entrevistas de consumidores e propôs um modelo em que valor percebido é a avaliação geral entre o que se recebe e o que se dá (dinheiro, tempo, esforço). Mostrou que valor é pessoal: muda de uma pessoa pra outra. O estudo é de bens de consumo, como bebidas, não de saúde.' },
        { ref: 'hurtzmercado', tipo: 'Prática de mercado', txt: 'No atendimento da Dra Rayane, preço solto por foto ou por ml afastou leads, e cada lead ouvia um valor diferente. Nas clínicas atendidas pela Hurtz, falar o preço dentro de um plano completo, depois da avaliação, é a prática que segura melhor. Não é estudo, é observação de rotina.' }
      ],
      passos: [
        'Nunca dê preço por foto ou por ml no WhatsApp.',
        'Se perguntarem o preço antes, diga que depende do rosto e que o plano completo sai na avaliação.',
        'Na avaliação, siga a ordem: o que ela quer, o que você indica, o que está incluído, o valor.',
        'Fale o valor uma vez, com calma, e espere ela reagir.',
        'Se ela achar caro, volte ao que ela disse que quer antes de falar de pagamento.'
      ],
      exemplo: [
        ['p', 'Quanto custa o Botox?'],
        ['d', 'Depende do que seu rosto pede. Tem pessoa que precisa só da testa, tem pessoa que precisa de mais pontos.'],
        ['d', 'Na avaliação eu olho com calma e te mostro o plano completo com o valor. Amanhã tenho às 15h. Fica bom pra você?'],
        ['p', 'Mas é mais ou menos quanto?'],
        ['d', 'Eu prefiro não te passar um número errado. Na avaliação você sai sabendo exatamente o que precisa e quanto fica.'],
        ['d', 'E os R$ 100 da avaliação viram desconto se você fizer o procedimento em até 30 dias.']
      ],
      erros: [
        'Dar preço total estimado por foto: assusta e cria um número que ela vai cobrar depois.',
        'Usar desconto pra convencer: não aumenta o valor e vai contra a CFBM.',
        'Falar o preço antes de mostrar o plano: a balança fica com um lado vazio.'
      ],
      pratica: 'Revise as últimas 10 conversas de WhatsApp em que pediram preço. Conte em quantas você deu número antes da avaliação. Nesta semana, responda todas com a frase do exemplo e marque quantas viraram avaliação.',
      q: [
        ['O que é valor percebido?', 'O que a paciente sente que recebe comparado com o que ela entrega', 'O preço da tabela', 'O custo do produto pra clínica', 'Valor é pessoal: recebe x dá. Preço é só uma parte do "dá".'],
        ['Por que desconto não resolve?', 'Diminui o número, mas não mostra por que escolher você, e a CFBM não aceita', 'Porque a paciente sempre acha pouco', 'Porque não dá lucro', 'O problema é valor que não apareceu, não número alto.'],
        ['Qual é a ordem certa na avaliação?', 'O que ela quer, o que você indica, o que está incluído e o valor', 'Valor, procedimento e horário', 'Técnica do produto e depois o valor', 'O preço entra no fim, dentro do plano.']
      ]
    },
    {
      t: 'Protocolo x procedimento: a ficha de valor',
      resumo: 'Procedimento é o que se vende em qualquer lugar. Protocolo é o plano pensado pro rosto dela.',
      texto: [
        'Procedimento é "Botox". Protocolo é "o plano que eu montei pra suavizar a sua expressão de brava sem tirar o movimento, com aplicação, retorno em 15 dias e ajuste se precisar". A paciente consegue comparar procedimento com o preço de qualquer outra clínica. O protocolo, não, porque é pensado pra ela. Quando você fala em protocolo, sai da disputa de preço e entra na disputa de cuidado, onde você é forte.',
        'Pra isso funcionar, você precisa saber de cor o que cada protocolo seu inclui. Por isso existe a ficha de valor: uma lista curta, por procedimento, com o que ele resolve, o que está incluído e qual cuidado é seu. Ela não promete resultado. Mostra o que você faz. Abaixo estão as quatro fichas que você vai usar. Ajuste os detalhes com o que de fato faz hoje, nada que não seja verdade.',
        '<b>Botox.</b> Resolve: a "carinha de brava", rugas da testa e pés de galinha. Inclui: avaliação da expressão em movimento, aplicação em pontos escolhidos pro rosto dela, retorno em cerca de 15 dias pra conferir e ajustar se precisar. Seu cuidado: manter a expressão natural, sem cara congelada. <b>Boca (ácido hialurônico).</b> Resolve: contorno, hidratação e volume perdido com a idade. Inclui: análise da proporção com o resto do rosto, plano de quantidade feito pra ela, retorno. Seu cuidado: boca que combina com o rosto dela, sem exagero.',
        '<b>Bioestimulador de colágeno.</b> Resolve: flacidez e perda de firmeza. Inclui: avaliação da estrutura óssea e da pele, plano de sessões, explicação de que o resultado vem aos poucos, acompanhamento entre as sessões. Seu cuidado: explicar com honestidade o tempo de resposta, que varia de pessoa pra pessoa. <b>Protocolo de papada e flacidez.</b> Resolve: contorno do rosto e do pescoço. Inclui: avaliação, a tecnologia do Dr. Rafael Dias, usada no Instituto onde você atende, plano de sessões e retornos. Sempre diga que a tecnologia é do Dr. Rafael: isso é verdade e ainda soma a confiança dele à sua.',
        'Na conversa, você não lê a ficha. Você escolhe dela o que conversa com o motivo da paciente. Se ela disse que tem medo de ficar artificial, você fala do seu cuidado com a naturalidade. Se ela disse que já fez em outro lugar e ninguém acompanhou, você fala do retorno. A ficha é o estoque, a paciente escolhe o que pega. E tudo o que você falar tem que ser o que você realmente entrega.'
      ],
      ciencia: [
        { ref: 'zeithaml1988', tipo: 'Estudo', txt: 'No modelo de Zeithaml, o consumidor usa sinais (o que vê, o que ouve, o que está incluído) pra julgar qualidade quando não consegue avaliar a parte técnica. A paciente não avalia a técnica de aplicação, mas avalia avaliação cuidadosa, retorno e explicação. O estudo é de bens de consumo, não de saúde.' },
        { ref: 'hurtzmercado', tipo: 'Prática de mercado', txt: 'Apresentar o tratamento como plano personalizado, com o que está incluído e o acompanhamento, é prática comum nas clínicas que a Hurtz atende e reduz a comparação direta de preço com concorrentes. Não é estudo. As fichas são modelo e precisam bater com o que a Dra Rayane realmente faz.' }
      ],
      passos: [
        'Leia as quatro fichas e corrija qualquer item que não seja o que você faz hoje.',
        'Decore, de cada ficha, o que resolve, o que inclui e o seu cuidado.',
        'Na avaliação, chame o plano de "protocolo pra você", não pelo nome do produto.',
        'Escolha da ficha só o que conversa com o motivo que a paciente falou.',
        'Na papada, sempre cite que a tecnologia é do Dr. Rafael Dias.'
      ],
      exemplo: [
        ['p', 'Então é só o Botox?'],
        ['d', 'É o seu protocolo pra essa expressão de brava. Eu aplico nos pontos que o seu rosto pede, não num desenho padrão.'],
        ['d', 'Em uns 15 dias você volta aqui, eu confiro e, se precisar, ajusto.'],
        ['p', 'Ah, tem retorno? Onde eu fiz da outra vez não tinha.'],
        ['d', 'Tem. Eu gosto de ver como ficou no seu rosto. Você me disse que tem medo de ficar congelada, né? O retorno é justamente pra isso.'],
        ['p', 'Isso me deixa mais tranquila.']
      ],
      erros: [
        'Vender pelo nome do produto ("faço Botox"): vira comparação de preço com qualquer lugar.',
        'Colocar na ficha algo que você não entrega: quebra a confiança no retorno e pode virar problema ético.',
        'Esquecer de creditar o Dr. Rafael na papada: a tecnologia é dele, e dizer isso também gera confiança.',
        'Recitar a ficha inteira: cansa. Use só o que responde ao motivo dela.'
      ],
      pratica: 'Escreva à mão as quatro fichas com as suas palavras, corrigindo o que não for verdade. Treine em voz alta, em menos de 30 segundos, a explicação de cada protocolo. Grave os quatro áudios e ouça.',
      q: [
        ['Qual é a diferença entre protocolo e procedimento?', 'Protocolo é o plano pensado pro rosto dela, com o que está incluído', 'Protocolo é só um nome mais bonito', 'Procedimento é mais caro', 'O protocolo é personalizado, por isso não se compara com preço de outra clínica.'],
        ['O que entra na ficha de valor?', 'O que resolve, o que inclui e o seu cuidado, sem prometer resultado', 'O preço e o desconto', 'A garantia de resultado', 'A ficha mostra o que você faz, não promete o que vai acontecer.'],
        ['Como falar do protocolo de papada?', 'Citando que a tecnologia é do Dr. Rafael Dias', 'Dizendo que a tecnologia é sua', 'Sem falar de tecnologia', 'É verdade e soma a confiança dele à sua.']
      ]
    },
    {
      t: 'Sua diferença: o que só você entrega',
      resumo: 'Avaliação da estrutura óssea, naturalidade, retorno e acolhimento são as suas razões pra ser escolhida.',
      texto: [
        'Em Parauapebas tem outras pessoas fazendo harmonização. Se você não diz o que faz de diferente, a paciente decide pelo preço ou pela indicação de uma amiga. Diferença não é frase bonita, é algo concreto que ela consegue ver na consulta. Você tem quatro: avaliação da estrutura óssea, foco em naturalidade, retorno e acolhimento. As quatro são verdade no seu atendimento e conversam com os maiores medos da paciente 50+.',
        '<b>Avaliação da estrutura óssea.</b> Com a idade, o rosto perde sustentação, não só pele. Quando você explica que olha o rosto como um todo antes de decidir onde aplicar, ela entende que não vai ganhar um "pacote padrão". Mostre isso no espelho: "Aqui é onde o rosto perdeu sustentação, por isso a sombra aparece aqui". Ela vê com os próprios olhos.',
        '<b>Naturalidade.</b> O medo número um da paciente madura é ficar artificial, "com cara de boneca". Quando você diz cedo que seu objetivo é que as pessoas digam "você está bem" e não "o que você fez?", tira esse medo da mesa. <b>Retorno.</b> Muita paciente já fez em outro lugar e nunca mais viu quem aplicou. Você vê de novo, confere e ajusta. Isso é cuidado que ela sente.',
        '<b>Acolhimento.</b> Esse é o seu ponto mais forte e o que mais gera indicação. Você fala simples, ouve, não apressa. Muitas pacientes chegam com vergonha ou medo. Diga isso a ela sem falsa modéstia: "Aqui você pode perguntar tudo, sem pressa". Junto vem a autoridade: o Instituto do Dr. Rafael, sua formação, seu registro de biomédica. Fale com segurança, como você já fala, "eu consigo", mas nunca use "especialista".',
        'Não precisa falar das quatro com toda paciente. Use a que responde ao medo dela. Medo de artificial: naturalidade. Já foi abandonada em outro lugar: retorno. Não entende por que o rosto mudou: estrutura óssea. Está nervosa: acolhimento. A diferença que ela sente na pele é a que vira motivo pra escolher você e pra contar pra amiga.'
      ],
      ciencia: [
        { ref: 'cialdini1984', tipo: 'Livro', txt: 'Cialdini descreve a autoridade como um dos princípios de influência: as pessoas tendem a seguir quem mostra conhecimento legítimo numa área. Sinais como formação e ambiente profissional pesam. O livro é de psicologia social geral, não de saúde. Aqui a autoridade vem de fato real (registro, Instituto, explicação), nunca de título que você não tem.' },
        { ref: 'hurtzmercado', tipo: 'Prática de mercado', txt: 'Nas clínicas da Hurtz, diferenças concretas e visíveis na consulta (retorno, explicação no espelho, cuidado com naturalidade) seguram mais paciente do que frases de anúncio. No caso da Dra Rayane, o acolhimento já aparece como fonte de muitas indicações. Observação de rotina, não estudo.' }
      ],
      passos: [
        'Na avaliação, mostre no espelho onde o rosto perdeu sustentação.',
        'Fale cedo da naturalidade: "quero que digam que você está bem, não o que você fez".',
        'Diga sempre que vai ver a paciente no retorno.',
        'Escolha a diferença que responde ao medo dela.',
        'Fale do seu registro e do Instituto com segurança, sem a palavra "especialista".'
      ],
      exemplo: [
        ['p', 'Eu tenho medo de ficar com a boca enorme, igual a gente vê por aí.'],
        ['d', 'Esse medo é muito comum. Meu objetivo é que as pessoas digam "você está bem", e não "o que você fez".'],
        ['d', 'Olha aqui no espelho: seu lábio perdeu um pouco do contorno com o tempo. Eu trabalho isso, não aumento por aumentar.'],
        ['p', 'Ah, então não fica aquela boca de pato?'],
        ['d', 'Não. E depois você volta aqui pra eu ver como ficou no seu rosto.'],
        ['p', 'Assim eu fico mais segura.']
      ],
      erros: [
        'Falar "sou especialista em harmonização": a CFBM não permite sem registro de especialização.',
        'Listar as quatro diferenças de uma vez: vira propaganda. Use a que responde ao medo dela.',
        'Criticar outra clínica: diminui você e pode gerar problema ético. Fale do que você faz.'
      ],
      pratica: 'Nesta semana, em cada avaliação, anote o maior medo da paciente e qual das quatro diferenças você usou. Meta: 5 avaliações anotadas. No fim, veja qual medo apareceu mais.',
      q: [
        ['Qual diferença responde ao medo de ficar artificial?', 'Naturalidade', 'Estrutura óssea', 'Forma de pagamento', 'Diga cedo que o objetivo é parecer bem, não "feita".'],
        ['Como mostrar a avaliação da estrutura óssea?', 'Mostrando no espelho onde o rosto perdeu sustentação', 'Explicando anatomia com nome técnico', 'Mandando um vídeo genérico', 'Ela entende vendo no próprio rosto.'],
        ['Qual destas frases você NÃO pode usar?', 'Sou especialista em harmonização', 'Eu sou biomédica e atendo no Instituto do Dr. Rafael', 'Aqui você pode perguntar tudo, sem pressa', '"Especialista" exige registro de especialização. As outras são verdade.']
      ]
    },
    {
      t: 'Prova e antes e depois, com ética e autorização',
      resumo: 'Antes e depois ajuda a paciente a imaginar, mas só com autorização escrita e sem prometer resultado.',
      texto: [
        'Na consulta, a paciente quer ver que outra pessoa parecida com ela fez e ficou bem. Isso é prova. Pode ser foto de antes e depois, um depoimento, ou a simples frase "muitas pacientes da sua idade chegam com esse mesmo receio". Prova ajuda porque tira a dúvida do "será que dá certo em mim?". Mas prova em saúde tem regra, e a regra protege você, a paciente da foto e a paciente que está olhando.',
        'Primeira regra: autorização por escrito. Antes de tirar a foto, explique pra que ela pode ser usada (só na consulta, ou também nas redes) e peça que a paciente assine. A paciente pode retirar a autorização quando quiser, e aí você para de usar. A Lei Geral de Proteção de Dados trata foto de rosto como dado pessoal, e dado de saúde pede ainda mais cuidado. Guarde as autorizações junto da ficha.',
        'Segunda regra: foto honesta. Mesma luz, mesmo ângulo, sem filtro, sem edição. Se a foto do depois tem maquiagem e a do antes não tem, você está enganando. Terceira regra: nunca prometer. Ao mostrar, diga sempre: "Cada rosto responde de um jeito. Isso mostra o que eu fiz nela, não é garantia pra você". Isso é exigência ética e, além disso, aumenta a confiança. A paciente sente que você não está vendendo milagre.',
        'Sobre as redes sociais: as regras de publicidade são do seu conselho, a CFBM, e mudam. O Conselho de Medicina, por exemplo, passou em 2023 a permitir antes e depois pra médicos, com condições: autorização, paciente não identificado, sem edição e mostrando também possíveis complicações. Essa regra é dos médicos, não dos biomédicos. Use como referência de cuidado e confira a resolução vigente da CFBM antes de postar qualquer antes e depois.',
        'Na consulta, a prova mais forte muitas vezes nem é foto. É você contar, sem nome, o caso de uma paciente parecida: "Atendi uma senhora que tinha o mesmo medo seu de ficar diferente. No retorno ela me disse que a filha perguntou se ela tinha dormido melhor". Isso respeita a privacidade, não promete resultado e ainda mostra o seu cuidado com a naturalidade. Use histórias reais. Nunca invente.'
      ],
      ciencia: [
        { ref: 'cfm2336', tipo: 'Prática de mercado', txt: 'A Resolução CFM 2.336/2023 liberou antes e depois para médicos, com autorização do paciente, anonimato, imagem sem manipulação e apresentação também de evoluções insatisfatórias e complicações possíveis. É norma de outro conselho e não vale diretamente pra biomédico: serve como referência de cuidado. A regra que vale pra você é a da CFBM.' },
        { ref: 'cialdini1984', tipo: 'Livro', txt: 'Cialdini descreve a prova social: as pessoas olham o que outras parecidas com elas fizeram pra decidir. Por isso caso de paciente parecida pesa. O livro é de psicologia social geral. Em saúde, a prova social tem limite ético: não pode virar promessa de resultado.' }
      ],
      passos: [
        'Crie um termo simples de autorização de imagem e use com toda paciente antes da foto.',
        'Tire as fotos sempre com a mesma luz, o mesmo ângulo e sem maquiagem.',
        'Ao mostrar, diga que cada rosto responde de um jeito e que não é garantia.',
        'Confira a resolução de publicidade da CFBM antes de postar qualquer antes e depois.',
        'Na consulta, conte casos reais sem nome de paciente.'
      ],
      exemplo: [
        ['p', 'Você tem foto de alguém que fez?'],
        ['d', 'Tenho, de pacientes que autorizaram. Deixa eu te mostrar uma que tinha a idade parecida com a sua.'],
        ['p', 'Nossa, ficou natural.'],
        ['d', 'Ficou. Mas cada rosto responde de um jeito. Isso mostra o que eu fiz nela, não é garantia pra você.'],
        ['d', 'O que eu te prometo é o cuidado: avaliar com calma e te ver no retorno.'],
        ['p', 'Gostei de você falar assim. Parece mais sincero.']
      ],
      erros: [
        'Usar foto sem autorização escrita: viola a privacidade da paciente e pode virar processo.',
        'Editar ou usar filtro na foto do depois: engana e quebra a ética.',
        'Dizer "vai ficar igual a ela": promessa de resultado clínico, que você não pode fazer.',
        'Seguir a regra dos médicos pra postar: o seu conselho é a CFBM, confira a regra dele.'
      ],
      pratica: 'Até sexta, monte o seu termo de autorização de imagem (uma página, linguagem simples) e peça autorização pra 3 pacientes da semana. Separe 3 histórias reais, sem nome, pra contar na consulta.',
      q: [
        ['O que é obrigatório antes de usar a foto de uma paciente?', 'Autorização por escrito, que ela pode retirar quando quiser', 'Só pedir de boca', 'Nada, se o rosto não aparecer inteiro', 'A autorização escrita protege a paciente e você.'],
        ['Como mostrar um antes e depois na consulta?', 'Dizendo que cada rosto responde de um jeito e que não é garantia', 'Dizendo que vai ficar igual', 'Mostrando só os melhores com filtro', 'Prova sem promessa: ética e mais confiança.'],
        ['A resolução de 2023 que liberou antes e depois vale pra você?', 'Não, ela é do Conselho de Medicina. Você confere a regra da CFBM', 'Sim, vale pra toda a saúde', 'Sim, porque você atende no Instituto de um médico', 'Cada conselho tem sua regra. O seu é a CFBM.']
      ]
    },
    {
      t: 'A paciente é a protagonista da história',
      resumo: 'Na história que você conta, a heroína é a paciente. Você é quem guia.',
      texto: [
        'Donald Miller, no livro Building a StoryBrand, propõe um jeito de organizar a mensagem de um negócio usando a estrutura das histórias. Toda boa história tem uma personagem que quer algo, um problema no caminho e um guia que ajuda com um plano. O erro de muita marca é se colocar como heroína: "eu sou a melhor, eu tenho a melhor técnica". Pra paciente, a heroína é ela. Você é a guia.',
        'Na sua consulta, a história fica assim. A personagem: uma mulher de 55 anos, alegre, que vai ao casamento da filha. O que ela quer: se reconhecer nas fotos. O problema: o rosto caído, a cara de cansada, e o medo de ficar artificial. A guia: você, que entende esse medo (empatia) e sabe o que fazer (autoridade). O plano: avaliação, protocolo, retorno. A chamada pra ação: marcar o dia. O final: ela nas fotos, se reconhecendo.',
        'Repare que a história nasce do que você ouviu nos módulos de SPIN e de entrevista motivacional. Você não inventa a vontade dela: usa as palavras que ela falou. A diferença é que agora você organiza tudo numa sequência simples, que ela consegue repetir pro marido ou pra filha em casa. Quem consegue contar a própria decisão com clareza decide com mais firmeza e indica mais.',
        'Miller também fala de mostrar o que está em jogo. Não é assustar, é lembrar com honestidade o que ela disse que perde se não fizer nada: "Você me falou que evita foto de perfil até com sua neta". E mostrar o final que ela quer, nas palavras dela. Nada de prometer resultado clínico: o final da história é o motivo dela, não um rosto garantido. Você promete o cuidado e o plano, não o espelho.',
        'Isso serve pra consulta, pro áudio de WhatsApp e até pro anúncio. Num áudio de retorno, por exemplo: "Oi, aqui é a Rayane. Lembrei do que você me falou do casamento da sua filha. O plano que montei pra você continua de pé, e eu tenho horário na quinta às 15h. Se fizer sentido, me fala". Em 20 segundos, a heroína, o desejo, a guia, o plano e o próximo passo. E a decisão continua com ela.'
      ],
      ciencia: [
        { ref: 'storybrand2017', tipo: 'Livro', txt: 'Miller propõe uma estrutura de sete partes inspirada em histórias: o cliente é o herói, tem um problema, encontra um guia com empatia e autoridade, recebe um plano, é chamado à ação e vê o sucesso e o que evita. É livro de marketing e comunicação de marca, baseado em experiência de consultoria, não em estudo científico.' },
        { ref: 'cialdini1984', tipo: 'Livro', txt: 'A parte de "autoridade" do guia conversa com o princípio de autoridade de Cialdini: as pessoas tendem a seguir quem mostra conhecimento legítimo. Em saúde, essa autoridade tem que ser real (registro, formação, explicação clara) e nunca virar título falso.' }
      ],
      passos: [
        'Depois da escuta, monte de cabeça: quem é ela, o que quer, qual é o problema.',
        'Mostre empatia com o medo dela e depois sua segurança no plano.',
        'Apresente o plano em três passos simples: avaliação, protocolo, retorno.',
        'Faça a chamada pra ação com dia e horário.',
        'Feche lembrando o final que ela quer, nas palavras dela, sem prometer resultado.'
      ],
      exemplo: [
        ['d', 'Deixa eu juntar o que você me contou. Você vai no casamento da sua filha em março e quer se reconhecer nas fotos.'],
        ['p', 'Isso.'],
        ['d', 'Hoje o rosto parece cansado, e você tem medo de ficar artificial. Esse medo eu entendo, é o que mais escuto aqui.'],
        ['d', 'O plano é simples: bioestimulador em duas sessões, e eu te vejo no retorno pra acompanhar.'],
        ['d', 'Cada rosto responde no seu tempo, por isso começar cedo ajuda a chegar em março com calma. A decisão é sua.'],
        ['p', 'Falando assim, eu entendi tudo. Vamos marcar.'],
        ['d', 'Tenho quinta às 15h ou sexta às 10h. Qual fica melhor?']
      ],
      erros: [
        'Colocar você como heroína ("minha técnica é a melhor"): a paciente não se vê na história.',
        'Usar medo exagerado pra mostrar o que está em jogo: vira pressão e foge da ética.',
        'Prometer o final ("você vai ficar 10 anos mais nova"): é promessa de resultado clínico.'
      ],
      pratica: 'Escreva a história de 3 pacientes desta semana em 5 linhas cada: quem é, o que quer, o problema, o plano, o próximo passo. Grave um áudio de retorno de até 30 segundos com essa estrutura pra uma paciente que disse "vou pensar".',
      q: [
        ['Na história StoryBrand, quem é a heroína?', 'A paciente', 'A Dra Rayane', 'O produto', 'Você é a guia que ajuda a heroína a chegar onde ela quer.'],
        ['O que o guia precisa mostrar, segundo Miller?', 'Empatia e autoridade', 'Preço baixo e urgência', 'Técnica e nome do produto', 'Entender o medo dela e mostrar que sabe o que fazer.'],
        ['Qual é o final certo da história na consulta?', 'O motivo dela, nas palavras dela, sem prometer resultado', 'Uma garantia de rejuvenescimento', 'O desconto do dia', 'Você promete cuidado e plano, não o espelho.'],
        ['De onde vem o conteúdo da história?', 'Do que ela falou no SPIN e na entrevista motivacional', 'De um roteiro pronto igual pra todas', 'Do anúncio que ela viu', 'A história usa as palavras dela, por isso convence.']
      ]
    }
  ]
};
