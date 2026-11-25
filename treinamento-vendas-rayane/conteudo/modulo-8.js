window.CURSO = window.CURSO || {};
window.FONTES = window.FONTES || {};
Object.assign(window.FONTES, {
  rackham1988: { a: 'Neil Rackham', t: 'SPIN Selling, McGraw-Hill, 1988', url: 'https://www.routledge.com/SPIN-Selling-1st-Edition/Rackham/p/book/9780566076893' },
  iyengar2000: { a: 'Sheena Iyengar e Mark Lepper', t: 'When choice is demotivating, Journal of Personality and Social Psychology, 2000', url: 'https://faculty.washington.edu/jdb/345/345%20Articles/Iyengar%20&%20Lepper%20(2000).pdf' },
  scheibehenne2010: { a: 'Benjamin Scheibehenne, Rainer Greifeneder e Peter Todd', t: 'Can there ever be too many options? A meta-analytic review of choice overload, Journal of Consumer Research, 2010', url: 'https://edoc.unibas.ch/48789' },
  cialdini1984: { a: 'Robert Cialdini', t: 'Influence: the psychology of persuasion, 1984 (capítulo de compromisso e coerência)', url: 'https://news.wpcarey.asu.edu/20070117-gentle-science-persuasion-part-four-consistency' },
  'pratica-consulta': { a: 'Prática de mercado', t: 'Condução de consulta e avaliação em clínicas de estética' }
});
window.CURSO.m8 = {
  id: 'm8', n: 8, t: 'A avaliação que vende', d: 'Como conduzir a avaliação presencial do acolhimento até o próximo passo, sem empurrar e sem deixar a paciente ir embora sem decidir.',
  aulas: [
    {
      t: 'O caminho da avaliação',
      resumo: 'Seis etapas na mesma ordem toda vez: acolher, SPIN, exame e espelho, protocolo, valor, próximo passo.',
      texto: [
        'Hoje a avaliação depende do dia. Às vezes você conversa muito e esquece de falar do valor. Às vezes fala do valor antes de a paciente entender o que vai ganhar. E muitas vezes ela vai embora dizendo "vou pensar". Isso não é falta de talento, é falta de caminho. Quando a ordem é sempre a mesma, você não precisa improvisar, e sobra cabeça pra prestar atenção nela.',
        'O caminho tem seis etapas. Acolher: café, nome, um minuto de conversa sobre como ela chegou. SPIN: perguntas sobre o que incomoda, desde quando, o que isso atrapalha na vida dela e como seria se melhorasse. Exame e espelho: você examina e põe o espelho na mão dela. Protocolo: você explica o que vai fazer usando as palavras dela. Valor: você diz o investimento com calma. Próximo passo: você pergunta se ela quer começar hoje ou marcar o dia.',
        'A ordem importa. O valor só faz sentido depois que ela viu o problema no espelho e ouviu o plano. Se ela ouve "R$ 900" antes disso, o número fica sozinho, grande, sem nada do lado. Se ela ouve depois de dizer "isso aqui me deixa com cara de cansada há dois anos", o número vem colado na solução daquilo que ela mesma apontou.',
        'Você já é muito boa no acolhimento. A paciente se sente à vontade com você, e muitas chegam por indicação de quem gostou. Use isso como base. O que falta é não parar ali. Acolher é a primeira etapa, não a avaliação inteira. Imprima as seis etapas num papel pequeno e deixe na mesa, virado pra você, nas primeiras semanas.'
      ],
      ciencia: [
        { ref: 'rackham1988', tipo: 'Livro', txt: 'Rackham e a equipe dele analisaram mais de 35 mil visitas de venda e organizaram as perguntas em quatro tipos: situação, problema, implicação e necessidade. A ideia central é que a pessoa decide melhor quando ela mesma fala do problema e do que ganharia resolvendo. Limite: o estudo é de vendas grandes entre empresas, não de estética. A ordem das etapas aqui é adaptação.' },
        { ref: 'pratica-consulta', tipo: 'Prática de mercado', txt: 'Ter um roteiro fixo de consulta, com valor no fim e próximo passo claro, é prática comum em clínicas que vendem procedimento. Não existe estudo que prove esta ordem exata de seis etapas. Ela foi montada a partir das suas dificuldades: preço solto cedo demais e paciente indo embora sem decisão.' }
      ],
      passos: [
        'Acolher: nome, café, um minuto sobre o dia dela.',
        'SPIN: o que incomoda, desde quando, o que atrapalha, como seria melhorado.',
        'Exame e espelho: examine e entregue o espelho pra ela apontar.',
        'Protocolo: explique com as palavras que ela usou.',
        'Valor: diga o investimento com calma e fique em silêncio.',
        'Próximo passo: "Quer começar hoje ou prefere marcar o dia?".'
      ],
      exemplo: [
        ['d', 'Senta aqui, fica à vontade. Achou fácil a clínica?'],
        ['p', 'Achei, a moça dos Correios me ensinou'],
        ['d', 'Que bom! Me conta, o que te trouxe aqui hoje?'],
        ['p', 'A papada. Eu me vejo na foto e não gosto'],
        ['d', 'Desde quando isso te incomoda?'],
        ['p', 'Uns três anos, depois que emagreci'],
        ['d', 'E o que mais te chateia nisso no dia a dia?'],
        ['p', 'Evito foto de lado, sabe? No aniversário do meu neto eu fugi das fotos']
      ],
      erros: [
        'Falar o valor antes do espelho e do protocolo: o número fica solto e assusta.',
        'Ficar só no acolhimento: a conversa é boa, mas acaba sem decisão.',
        'Terminar sem próximo passo: "vou pensar" vira o fim natural.'
      ],
      pratica: 'Escreva as seis etapas num cartão e deixe na mesa. Nas próximas 5 avaliações, marque no cartão, depois que a paciente sair, quais etapas você fez e qual pulou.',
      q: [
        ['Em que momento você fala o valor?', 'Depois do espelho e do protocolo', 'Logo no acolhimento, pra ela não se assustar depois', 'Só se ela perguntar', 'O valor faz sentido colado na solução do que ela apontou.'],
        ['Qual é a última etapa da avaliação?', 'Próximo passo: começar hoje ou marcar o dia', 'Despedida e "qualquer coisa me chama"', 'Explicar todos os procedimentos da clínica', 'Sem próximo passo, "vou pensar" vira o fim natural.'],
        ['O estudo do SPIN foi feito com:', 'Vendas grandes entre empresas', 'Clínicas de estética', 'Pacientes acima de 50 anos', 'É de outro contexto. O que vem pra cá é a ideia de a pessoa falar do próprio problema.']
      ]
    },
    {
      t: 'Ela fala mais do que você',
      resumo: 'Na primeira metade da avaliação, ela fala uns 70% do tempo e você uns 30%.',
      texto: [
        'Quando você está nervosa pra vender, a tendência é falar: explicar o ácido, contar como o Botox age, dar exemplo de outra paciente. Parece que mais explicação convence mais. Mas cada minuto que você fala é um minuto em que você não descobre o que importa pra ela. E a paciente que fala muito sai sentindo que foi ouvida, que é a coisa que mais prende alguém numa clínica.',
        'A regra prática é 70/30 na parte das perguntas: ela fala uns 70% do tempo, você uns 30%. Não é pra cronometrar. É uma bússola. Se você perceber que está há dois minutos explicando, pare e devolva com uma pergunta: "E pra você, o que mais pesa nisso?". Na hora do protocolo você vai falar mais, e tudo bem. Mas aí você já sabe o que falar.',
        'Pergunta boa é curta e puxa a história dela. "Desde quando?", "O que mudou?", "Onde isso te atrapalha?", "Se melhorasse, o que seria diferente?". Depois de perguntar, espere. O silêncio de três ou quatro segundos parece longo pra você, mas é aí que a paciente conta a parte que importa: o casamento da filha, a foto que ela evita, o comentário do marido.',
        'Anote as frases exatas dela num papel, com as palavras dela, não as suas. Se ela disse "cara de cansada", escreva "cara de cansada", não "flacidez". Essas frases são o material do protocolo na aula 4. Quem vende bem na avaliação não é quem tem o melhor discurso pronto. É quem lembra e repete o que a paciente disse.'
      ],
      ciencia: [
        { ref: 'pratica-consulta', tipo: 'Prática de mercado', txt: 'A proporção 70/30 é uma regra de bolso de vendas e atendimento, não um número tirado de um estudo controlado. Use como bússola: na parte das perguntas, ela fala mais. Não encontramos pesquisa que diga que 70/30 é melhor que 60/40.' },
        { ref: 'rackham1988', tipo: 'Livro', txt: 'No SPIN, as perguntas de implicação e de necessidade fazem a própria pessoa dizer o peso do problema e o valor da solução. A venda fica apoiada no que ela falou, não no que o vendedor afirmou. Limite: pesquisa com vendas entre empresas.' }
      ],
      passos: [
        'Tenha 4 perguntas curtas decoradas: desde quando, o que mudou, onde atrapalha, como seria melhorado.',
        'Depois de cada pergunta, espere 3 segundos em silêncio.',
        'Anote as frases exatas dela num papel.',
        'Se perceber que está explicando há mais de um minuto, devolva com uma pergunta.',
        'Antes do exame, resuma o que ouviu com as palavras dela.'
      ],
      exemplo: [
        ['d', 'Você falou que se sente com cara de cansada. Onde isso aparece mais?'],
        ['p', 'Aqui embaixo dos olhos e nesse bigodinho chinês'],
        ['d', 'E o que mudou desde que começou a reparar?'],
        ['p', 'Ah, as pessoas me perguntam se eu tô doente. Isso me chateia'],
        ['d', 'Imagino. E se isso melhorasse, o que seria diferente pra você?'],
        ['p', 'Eu ia voltar a me arrumar pra sair, sabe? Tô até sem vontade']
      ],
      erros: [
        'Explicar a técnica antes de saber a queixa: você fala do que acha importante, não do que ela acha.',
        'Responder no lugar dela quando ela demora: o silêncio é onde ela conta o que importa.',
        'Anotar com termo técnico: você perde as palavras que vão vender o protocolo.'
      ],
      pratica: 'Em 3 avaliações desta semana, anote num papel pelo menos 3 frases exatas de cada paciente. No fim da semana, releia e marque quais frases você usou na hora do protocolo.',
      q: [
        ['Na parte das perguntas, quem deve falar mais?', 'A paciente, uns 70% do tempo', 'Você, pra mostrar conhecimento', 'Os dois igual', 'Ela falando, você descobre o que importa pra ela.'],
        ['A paciente disse "cara de cansada". Como anotar?', '"Cara de cansada", com as palavras dela', '"Flacidez de terço médio"', 'Não precisa anotar', 'As palavras dela são o material do protocolo.'],
        ['De onde vem a regra 70/30?', 'É regra prática de vendas, não estudo controlado', 'De uma pesquisa do CFBM', 'Do estudo das geleias', 'Use como bússola. Não há número científico exato.']
      ]
    },
    {
      t: 'O espelho na mão dela',
      resumo: 'Quem aponta a queixa é a paciente; você confirma e explica.',
      texto: [
        'Existe uma diferença enorme entre você dizer "você tem flacidez aqui" e ela apontar no espelho "é isso aqui que me incomoda". Quando você aponta, pode soar como crítica, ou como vendedora procurando defeito. Quando ela aponta, é a queixa dela. Ninguém discute com a própria queixa. Por isso o espelho vai na mão dela, não na sua.',
        'Faça assim: depois das perguntas e do exame, entregue o espelho e diga "me mostra onde você mais sente". Espere. Deixe ela olhar, tocar o rosto, apontar. Depois confirme com calma: "Isso, aqui a pele perdeu sustentação e a papada fica mais marcada". Você entra com o conhecimento, mas em cima do que ela apontou.',
        'Às vezes ela aponta uma coisa e você vê outra que acha importante. Não abra três frentes. Comece pelo que ela apontou. Se o que você viu tem relação, conecte: "O que você mostrou aqui tem a ver com isso aqui também". Se não tem relação, guarde pra outra consulta. Paciente que ouve uma lista de defeitos sai se sentindo pior do que chegou.',
        'Cuidado com a linguagem. Fale do que você vê e do que o protocolo pode fazer, nunca prometa resultado. "Aqui dá pra trabalhar a sustentação" é honesto. "Vai sumir" não é. Você é biomédica esteta e fala como dona do seu trabalho, com o "eu consigo" que é seu. Mas "eu consigo trabalhar isso" é diferente de "eu garanto que some".'
      ],
      ciencia: [
        { ref: 'cialdini1984', tipo: 'Livro', txt: 'Cialdini mostra que as pessoas tendem a agir de forma coerente com o que elas mesmas disseram, principalmente quando falaram por vontade própria. Quando a paciente aponta e diz a queixa, ela fez uma afirmação ativa. Limite: livro de divulgação sobre persuasão em geral, não pesquisa em consultório.' },
        { ref: 'pratica-consulta', tipo: 'Prática de mercado', txt: 'Entregar o espelho pra paciente apontar é prática comum em avaliação de estética. Não achamos estudo que meça isso diretamente. A razão é de bom senso: a queixa que ela mesma aponta não soa como crítica sua.' }
      ],
      passos: [
        'Depois do exame, entregue o espelho na mão dela.',
        'Diga: "Me mostra onde você mais sente".',
        'Espere ela apontar, sem completar a frase por ela.',
        'Confirme o que ela apontou e explique em linguagem simples.',
        'Se viu outra coisa, conecte só se tiver relação com a queixa dela.'
      ],
      exemplo: [
        ['d', 'Pega o espelho. Me mostra onde você mais sente'],
        ['p', 'Aqui, ó. Essa parte embaixo do queixo'],
        ['d', 'Isso. Aqui a pele perdeu sustentação, por isso a papada fica mais marcada de lado'],
        ['p', 'É bem isso que aparece na foto'],
        ['d', 'E essa linha aqui do lado da boca, você repara também?'],
        ['p', 'Reparo, mas a papada me incomoda bem mais'],
        ['d', 'Então vamos começar pela papada, que é o que mais pesa pra você']
      ],
      erros: [
        'Você apontar o defeito primeiro: soa como crítica e a paciente fica na defensiva.',
        'Listar tudo o que viu: ela sai se sentindo pior e com orçamento enorme.',
        'Prometer que "vai sumir": é promessa de resultado, que você não pode fazer.'
      ],
      pratica: 'Nas próximas 5 avaliações, entregue o espelho e peça "me mostra onde você mais sente". Anote o que ela apontou e se era o mesmo que você teria apontado. Conte quantas vezes foi diferente.',
      q: [
        ['Quem aponta a queixa no espelho?', 'A paciente', 'Você, que tem o olho técnico', 'Ninguém, você só explica', 'A queixa que ela aponta é dela, não soa como crítica.'],
        ['Você viu algo além do que ela apontou. O que fazer?', 'Começar pela queixa dela e conectar só se tiver relação', 'Listar tudo que viu pra ela decidir', 'Ignorar a queixa dela e focar no que você viu', 'Lista de defeitos faz ela sair pior do que chegou.'],
        ['Qual frase é permitida?', '"Aqui dá pra trabalhar a sustentação"', '"Vai sumir completamente"', '"Garanto que fica igual à foto do anúncio"', 'Fale do que o protocolo faz, sem prometer resultado.']
      ]
    },
    {
      t: 'O protocolo com as palavras dela',
      resumo: 'Frase dela, o que você viu, o que vai fazer, quando aparece, como ela vai se sentir.',
      texto: [
        'Na hora de explicar o protocolo, a maioria fala da técnica: quantos ml, qual produto, quantas sessões. Isso é importante, mas sozinho não vende, porque ela não sabe o que é um ml de ácido. O que ela sabe é a frase que disse lá no começo: "evito foto de lado". O protocolo tem que voltar pra essa frase.',
        'Use cinco pedaços, nessa ordem. Primeiro a frase dela: "Você me falou que evita foto de lado". Depois o que você viu: "No espelho a gente viu que a pele embaixo do queixo perdeu sustentação". Depois o que vai fazer: "Eu faço o bioestimulador de colágeno junto com a tecnologia do Dr. Rafael, que trabalha essa região". Depois quando aparece: "O colágeno vai se formando aos poucos, nas semanas seguintes". E por fim como ela vai se sentir: "A ideia é você voltar a tirar foto sem pensar no ângulo".',
        'Repare que você não promete o resultado. Você fala do objetivo do protocolo e do tempo de cada coisa. "A ideia é", "o objetivo é", "o que a gente busca" são honestos. E sempre credite a tecnologia ao Dr. Rafael quando ela entrar no plano. Isso não diminui você. Mostra que a paciente está num lugar com estrutura.',
        'Ensaie em voz alta. Na primeira semana parece decorado, depois fica natural. Você já explica as coisas em linguagem de rua, como "carinha de brava". Só falta organizar. Com essa estrutura, o valor que vem logo depois chega como o preço de voltar a tirar foto, não como preço de ml.'
      ],
      ciencia: [
        { ref: 'rackham1988', tipo: 'Livro', txt: 'Rackham diferencia falar das características do produto de ligar o benefício a uma necessidade que o próprio cliente disse. Segundo ele, é a segunda forma que pesa na decisão. Limite: vendas entre empresas, não estética. A estrutura de cinco pedaços é adaptação pra consulta.' },
        { ref: 'pratica-consulta', tipo: 'Prática de mercado', txt: 'Explicar o plano usando a queixa da paciente é prática comum de consultório. Não existe estudo desta sequência exata. Ela foi montada pra você não travar e não cair na explicação técnica que a paciente não entende.' }
      ],
      passos: [
        'Frase dela: "Você me falou que...".',
        'O que você viu: "No espelho a gente viu que...".',
        'O que vai fazer: o procedimento, em linguagem simples, creditando a tecnologia do Dr. Rafael quando houver.',
        'Quando aparece: o tempo real de cada parte, sem prometer.',
        'Como vai se sentir: volte à vida dela, com "a ideia é".',
        'Depois disso, o valor e o próximo passo.'
      ],
      exemplo: [
        ['d', 'Você me falou que fugiu das fotos no aniversário do seu neto'],
        ['d', 'E no espelho a gente viu que a pele aqui embaixo perdeu sustentação'],
        ['d', 'O que eu faço é o bioestimulador de colágeno junto com a tecnologia do Dr. Rafael, que trabalha essa região'],
        ['d', 'O colágeno vai se formando aos poucos, nas semanas seguintes'],
        ['d', 'A ideia é você chegar no próximo aniversário e tirar foto sem pensar no ângulo'],
        ['p', 'Nossa, era isso que eu queria'],
        ['d', 'O investimento desse protocolo é R$ 900. Quer começar hoje ou prefere marcar o dia?']
      ],
      erros: [
        'Começar pela técnica (ml, produto): ela não entende e o valor parece alto.',
        'Esquecer de creditar a tecnologia do Dr. Rafael: além de errado, perde confiança se ela descobrir.',
        'Prometer "vai ficar perfeito": é promessa de resultado.',
        'Pular o "quando aparece": ela espera resultado no dia seguinte e se frustra.'
      ],
      pratica: 'Escreva o protocolo em cinco pedaços pra cada um dos seus 4 procedimentos (Botox, boca, bioestimulador, papada e flacidez), com uma frase de paciente inventada. Leia em voz alta 3 vezes cada um antes das avaliações da semana.',
      q: [
        ['Qual é o primeiro pedaço do protocolo?', 'A frase que a paciente disse', 'A quantidade de ml', 'O valor', 'O protocolo volta pra frase dela; a técnica vem depois.'],
        ['Como falar do resultado?', '"A ideia é você voltar a tirar foto sem pensar no ângulo"', '"Garanto que fica perfeito"', '"Some tudo em uma sessão"', 'Fale do objetivo, nunca prometa resultado.'],
        ['A tecnologia de papada e flacidez entra no plano. O que dizer?', 'Que é a tecnologia do Dr. Rafael', 'Que é a sua tecnologia exclusiva', 'Não falar de onde vem', 'Sempre credite ao Dr. Rafael.'],
        ['Por que dizer "quando aparece"?', 'Pra ela não esperar resultado no dia seguinte e se frustrar', 'Pra apressar a decisão', 'Porque é exigência pra cobrar', 'Expectativa certa evita frustração e reclamação.']
      ]
    },
    {
      t: 'Uma coisa de cada vez',
      resumo: 'Plano com um passo agora e o resto depois decide mais fácil que cardápio com tudo.',
      texto: [
        'Quando a paciente tem várias queixas, a vontade é montar o plano inteiro: Botox, boca, bioestimulador, papada. E aí vem um número total grande. Isso já aconteceu: uma estimativa de 10 a 12 mil por foto espantou uma paciente. Mesmo que o plano completo faça sentido, ela não decide tudo de uma vez. Ela sai com o número na cabeça e diz "vou pensar".',
        'O jeito melhor é escolher o primeiro passo, que é o que ela mais apontou no espelho. "Vamos começar pela papada, que é o que mais pesa pra você." O resto você menciona como próxima etapa, sem valor total: "Depois, se você quiser, a gente vê a linha da boca". Assim ela decide uma coisa, do tamanho que dá pra decidir hoje.',
        'Também não ofereça três versões do mesmo protocolo pra ela escolher. Você é quem sabe o que é indicado. Diga o que recomenda pra queixa dela. Se ela pedir outra opção, aí você mostra. Oferecer cardápio passa a ideia de que você não sabe o que é melhor, e coloca na paciente uma decisão técnica que é sua.',
        'Isso não é esconder informação. Se ela perguntar quanto ficaria tudo, responda com honestidade. Mas a avaliação não precisa terminar num orçamento gigante. Ela precisa terminar numa decisão. E quem começa pelo primeiro passo, vê resultado e se sente bem cuidada volta pro segundo, e ainda indica amiga.'
      ],
      ciencia: [
        { ref: 'iyengar2000', tipo: 'Estudo', txt: 'Com 6 geleias na banca, 30% de quem provou comprou; com 24, só 3%. É o estudo mais citado sobre excesso de opção. Limite: era geleia no supermercado, uma compra pequena, e o resultado nem sempre se repetiu depois. Aqui ele ilustra a ideia, não prova nada sobre consultório.' },
        { ref: 'scheibehenne2010', tipo: 'Revisão de estudos', txt: 'Juntando 50 experimentos, o efeito médio do excesso de opção ficou perto de zero, variando muito de um estudo pro outro. Ou seja: mais opção nem sempre trava. Por isso a razão principal de começar por um passo é outra: o valor de uma etapa cabe na decisão de hoje, e o total de todas não cabe.' }
      ],
      passos: [
        'Escolha como primeiro passo a queixa que ela mais apontou no espelho.',
        'Diga o que você recomenda, uma opção só.',
        'Mencione o resto como próxima etapa, sem somar valor.',
        'Se ela perguntar o total, responda com honestidade.',
        'Termine com o próximo passo: "começar hoje ou marcar o dia?".'
      ],
      exemplo: [
        ['p', 'Doutora, eu queria fazer tudo: a boca, a testa, a papada'],
        ['d', 'Entendo. De tudo isso, o que mais te incomodou no espelho foi a papada, né?'],
        ['p', 'Foi'],
        ['d', 'Então eu recomendo começar por ela. É o que vai fazer mais diferença pra você agora'],
        ['d', 'Depois, se você quiser, a gente vê a testa com calma'],
        ['p', 'Faz sentido. E quanto fica a papada?'],
        ['d', 'O protocolo da papada é R$ 900. Quer começar hoje ou prefere marcar o dia?']
      ],
      erros: [
        'Montar orçamento de tudo de uma vez: o total assusta e ela vai pensar.',
        'Oferecer três versões do protocolo: passa insegurança e joga a decisão técnica nela.',
        'Esconder o total quando ela pergunta: quebra a confiança.'
      ],
      pratica: 'Nas próximas 5 avaliações com mais de uma queixa, recomende só o primeiro passo. Anote quantas decidiram na hora e compare com as 5 avaliações anteriores.',
      q: [
        ['A paciente quer fazer tudo. Por onde começar?', 'Pela queixa que ela mais apontou no espelho', 'Pelo procedimento mais caro', 'Pelo orçamento completo', 'Uma decisão do tamanho de hoje é mais fácil.'],
        ['Por que não oferecer três versões do protocolo?', 'Porque a recomendação técnica é sua, e cardápio passa insegurança', 'Porque o CFBM proíbe', 'Porque a paciente não entende números', 'Você sabe o que é indicado. Diga o que recomenda.'],
        ['O que dizem os estudos sobre excesso de opção?', 'Que o efeito existe às vezes, mas na média fica perto de zero', 'Que mais de 3 opções sempre derrubam a venda', 'Que paciente gosta de muitas opções', 'Seja honesta: as geleias ilustram, a meta-análise relativiza.'],
        ['Ela perguntou quanto ficaria tudo. O que fazer?', 'Responder com honestidade', 'Mudar de assunto', 'Dizer que só depois do primeiro passo', 'Começar por um passo não é esconder informação.']
      ]
    }
  ]
};
