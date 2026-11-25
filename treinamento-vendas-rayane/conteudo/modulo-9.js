window.CURSO = window.CURSO || {};
window.FONTES = window.FONTES || {};
Object.assign(window.FONTES, {
  tversky1974: { a: 'Amos Tversky e Daniel Kahneman', t: 'Judgment under Uncertainty: Heuristics and Biases, Science 185(4157), 1974', url: 'https://pubmed.ncbi.nlm.nih.gov/17835457/' },
  poundstone2010: { a: 'William Poundstone', t: 'Priceless: The Myth of Fair Value (and How to Take Advantage of It), Hill and Wang, 2010', url: 'https://academic.macmillan.com/academictrade/9780809078813/priceless' },
  voss2016: { a: 'Chris Voss e Tahl Raz', t: 'Never Split the Difference, Harper Business, 2016' },
  fisher1981: { a: 'Roger Fisher e William Ury', t: 'Getting to Yes: Negotiating Agreement Without Giving In, 1981', url: 'https://www.pon.harvard.edu/daily/negotiation-skills-daily/principled-negotiation-focus-interests-create-value/' },
  mercadoHurtz: { a: 'Hurtz Company', t: 'Prática de mercado observada no atendimento de clínicas de estética' }
});
window.CURSO.m9 = {
  id: 'm9', n: 9, t: 'Preço, negociação e fechamento', d: 'Como falar o valor sem travar, pedir a decisão e negociar sem dar desconto.',
  aulas: [
    {
      t: 'Quando falar o preço',
      resumo: 'O preço entra depois que a paciente entendeu o que vai mudar no rosto dela, nunca antes.',
      texto: [
        'Preço falado cedo demais vira o único assunto da conversa. Se a paciente pergunta "quanto é o Botox?" logo na primeira mensagem e você responde só o número, ela compara esse número com o da conhecida, com o do Instagram, com o que ela imaginava. Ela ainda não sabe o que você faz diferente, então o único critério que sobra é o valor. E aí qualquer número parece alto.',
        'A ordem certa é: primeiro você entende o incômodo dela, depois mostra o que dá pra fazer, e só então fala quanto custa. No consultório, isso significa examinar, explicar o plano com o espelho na mão e só depois dizer o valor. No WhatsApp, quando ela pede preço logo de cara, você não esconde, mas antes faz uma ou duas perguntas: "O que mais te incomoda hoje? A testa, o olhar ou o bigode chinês?".',
        'Isso não é enrolar. Esconder preço irrita, principalmente o público 50+ que valoriza gente direta. A diferença é que você responde com contexto. Você dá a faixa "a partir de" e já convida pra avaliação, onde o valor exato sai depois de ver o rosto dela. A avaliação custa R$ 100 no Pix, paga antes pra garantir o horário, e vira desconto no procedimento feito em até 30 dias.',
        'Um sinal prático: se você falou o preço e a próxima mensagem dela foi "nossa", provavelmente o valor chegou antes do valor percebido. Não é culpa do preço. É culpa da ordem. Na próxima, inverta: pergunta, explicação, preço. Faça isso por uma semana e compare. A diferença costuma aparecer já nas primeiras conversas, porque a paciente passa a falar do incômodo dela e não só do valor. E quanto mais ela fala do incômodo, mais o preço parece uma solução e menos parece um gasto.'
      ],
      ciencia: [
        { ref: 'poundstone2010', tipo: 'Livro', txt: 'Poundstone reúne experimentos de psicologia mostrando que as pessoas são ruins em estimar um preço "justo" sozinhas: elas julgam o valor pelo contexto em que o número aparece. Se o único contexto é o número de outra clínica, a comparação é só de preço. Limite: é um livro de divulgação sobre consumo em geral, não um estudo sobre estética ou saúde.' },
        { ref: 'mercadoHurtz', tipo: 'Prática de mercado', txt: 'Nas conversas de WhatsApp que a Hurtz acompanha em clínicas, quem responde preço seco na primeira mensagem perde a conversa com mais frequência do que quem faz uma pergunta antes. É observação de rotina, não pesquisa controlada.' }
      ],
      passos: [
        'Quando pedirem preço logo de cara, faça uma pergunta sobre o incômodo antes do número.',
        'Responda com a faixa "a partir de" e diga que o valor exato sai na avaliação.',
        'Na avaliação, só fale o valor depois de explicar o plano com o espelho.',
        'Nunca esconda o preço quando ela insistir: responda e siga conduzindo.'
      ],
      exemplo: [
        ['p', 'Oi, quanto tá o Botox?'],
        ['d', 'Oi, tudo bem? Que bom que você chamou. Me conta: o que mais te incomoda hoje, a testa, o olhar ou as duas?'],
        ['p', 'As ruguinhas do olho, quando eu sorrio parece que fico cansada.'],
        ['d', 'Entendi. Isso dá pra suavizar bem e continuar com a expressão natural. O Botox é a partir de R$ 800, e o valor certinho eu te passo na avaliação, depois de ver seu rosto.'],
        ['d', 'A avaliação é R$ 100 no Pix pra garantir o horário, e esse valor vira desconto no procedimento se você fizer em até 30 dias. Tenho quinta às 15h ou sexta às 9h. Qual fica melhor?']
      ],
      erros: [
        'Mandar só o número na primeira mensagem: ela compara com qualquer outro número e some.',
        'Fugir do preço com "só na avaliação": parece esconder alguma coisa e irrita quem quer resposta direta.',
        'Falar o valor no consultório antes de mostrar o plano no espelho: o número chega antes do motivo.'
      ],
      pratica: 'Nesta semana, nas próximas 10 conversas em que pedirem preço, faça uma pergunta sobre o incômodo antes de dar a faixa. Anote quantas marcaram avaliação e compare com as 10 conversas anteriores.',
      q: [
        ['A paciente pergunta "quanto é?" na primeira mensagem. O que fazer?', 'Fazer uma pergunta sobre o incômodo e depois dar a faixa "a partir de"', 'Responder só o número pra ser rápida', 'Dizer que preço só na avaliação e não falar nada', 'Uma pergunta antes dá contexto ao número, e dar a faixa evita parecer que está escondendo.'],
        ['No consultório, em que momento o valor entra?', 'Depois de explicar o plano com o espelho', 'Logo que ela senta, pra não perder tempo', 'Só quando ela perguntar duas vezes', 'O valor faz sentido quando ela já entendeu o que vai mudar.'],
        ['Ela respondeu "nossa" depois do preço. O que isso costuma indicar?', 'O preço chegou antes de ela entender o valor', 'Que o preço está errado e precisa baixar', 'Que ela não tem dinheiro e não adianta insistir', 'Na maioria das vezes o problema é a ordem da conversa, não o número.']
      ]
    },
    {
      t: 'Como falar o preço: um valor, firme, e silêncio',
      resumo: 'Diga um número só, com a voz firme, e fique quieta até ela responder.',
      texto: [
        'O jeito de falar o preço diz tanto quanto o número. Se você fala "fica uns 1.400, mais ou menos, mas a gente vê", a paciente entende que o preço é negociável e que nem você acredita nele. Ela vai pedir desconto porque você abriu a porta. Preço dito com dúvida soa como preço caro.',
        'A forma certa tem três partes. Primeiro, um valor só, não uma faixa: "O seu protocolo fica R$ 1.400". Segundo, voz firme, no mesmo tom que você usa pra dizer "eu consigo". Você já fala como dona do seu trabalho, então use esse mesmo tom aqui. Terceiro, depois do número, silêncio. Não emende justificativa, não pergunte "tá bom?", não ofereça parcelamento antes dela pedir. Tudo isso cabe em duas frases.',
        'O silêncio é a parte mais difícil e a que mais funciona. Os primeiros segundos parecem longos. Mas é nesse tempo que ela está pensando, fazendo conta, imaginando o resultado. Se você fala por cima, você tira dela esse momento e ainda passa insegurança. Conte até cinco por dentro se precisar. Quem fala primeiro depois do preço quase sempre é quem cede.',
        'No WhatsApp vale a mesma regra. Mande o valor numa mensagem curta, junto com a pergunta de decisão, e não mande mais nada até ela responder. Três mensagens seguidas explicando o preço parecem desculpa. Por áudio, que o seu público gosta, fale o número devagar e termine com a pergunta, sem "né?" no final.'
      ],
      ciencia: [
        { ref: 'voss2016', tipo: 'Livro', txt: 'Voss, ex-negociador do FBI, defende o uso de pausas e de uma voz calma e segura na negociação, e recomenda deixar o outro lado falar primeiro depois de uma proposta. Limite: o livro vem de negociação de reféns e de negócios, não de saúde, e é baseado na experiência do autor, não em experimentos controlados.' },
        { ref: 'mercadoHurtz', tipo: 'Prática de mercado', txt: 'Nos áudios da própria Dra Rayane, os pedidos de desconto aparecem quase sempre depois de frases como "mas se achar caro a gente vê um jeitinho". É observação dos atendimentos dela, não estudo.' }
      ],
      passos: [
        'Decida o valor antes de abrir a boca: um número, sem faixa.',
        'Fale o número no seu tom de dona, sem "mais ou menos" nem "uns".',
        'Termine com a pergunta de decisão e pare de falar.',
        'Conte até cinco por dentro e espere a resposta dela.',
        'Só fale de forma de pagamento se ela perguntar ou depois que ela disser sim.'
      ],
      exemplo: [
        ['d', 'Então o seu plano é Botox no terço superior e o bioestimulador pra firmar a pele do rosto. O valor do protocolo fica R$ 1.400, e os R$ 100 da avaliação já descontam daí.'],
        ['d', 'Você quer fazer hoje ou prefere que eu reserve sexta?'],
        ['p', '(fica em silêncio, olhando o espelho)'],
        ['p', 'Hoje eu consigo fazer o Botox. Dá pra dividir?'],
        ['d', 'Dá sim, no cartão. Vou preparar tudo aqui.']
      ],
      erros: [
        'Dar faixa ("de 1.200 a 1.600"): ela escolhe o menor e ainda pede desconto em cima.',
        'Emendar justificativa depois do número: soa como pedido de desculpas pelo preço.',
        'Oferecer "um jeitinho" antes dela pedir: você mesma ensina que o preço não é sério.'
      ],
      pratica: 'Grave 5 áudios de treino falando o valor de um protocolo com a pergunta de decisão no final. Ouça e risque todo "mais ou menos", "uns" e "né?". Só passe pro próximo quando sair limpo. Depois use em 3 avaliações reais e anote quantas pediram desconto.',
      q: [
        ['Qual destas frases está certa?', '"O seu protocolo fica R$ 1.400. Você quer fazer hoje ou sexta?"', '"Fica uns 1.400, mais ou menos, mas a gente vê"', '"Fica entre 1.200 e 1.600, depende"', 'Um número, firme, com a pergunta de decisão.'],
        ['O que fazer logo depois de falar o preço?', 'Ficar em silêncio e esperar ela responder', 'Explicar de novo por que vale a pena', 'Oferecer parcelamento pra ajudar', 'O silêncio dá espaço pra ela pensar e mostra segurança.'],
        ['No WhatsApp, como mandar o valor?', 'Uma mensagem curta com o valor e a pergunta, e esperar', 'Três mensagens explicando cada item do preço', 'Só o número, sem pergunta', 'Mensagem curta com pergunta mantém você conduzindo sem parecer desculpa.']
      ]
    },
    {
      t: 'Ancoragem: apresente o protocolo completo primeiro',
      resumo: 'Mostre primeiro o plano ideal pro rosto dela; o número que aparece primeiro vira a régua.',
      texto: [
        'O primeiro número que a paciente ouve vira a régua pra todo o resto. Isso se chama ancoragem. Se você começa falando do Botox de R$ 800, tudo que vier depois parece caro. Se você começa mostrando o plano completo que o rosto dela pede, o Botox sozinho passa a parecer um primeiro passo possível.',
        'Na prática: depois da avaliação, você apresenta o plano ideal. Por exemplo: Botox, boca com ácido hialurônico e bioestimulador de colágeno, explicando o que cada um faz no rosto dela. Fala o valor do conjunto. Se ela disser que quer começar por partes, você monta com ela a ordem: "Então a gente começa pelo Botox, que é o que mais te incomoda, e no mês que vem faz o bioestimulador".',
        'Isso não é truque pra empurrar procedimento. O plano precisa ser verdadeiro: só entra o que o rosto dela realmente pede e você explica o porquê. Inventar item pra inflar o valor é antiético e o CFBM não aceita. A ancoragem honesta é só mostrar o caminho inteiro antes do primeiro passo, coisa que você já devia fazer como profissional. Ela tem o direito de saber o que o rosto dela pede, mesmo que decida fazer só uma parte.',
        'Tem um bônus: quando ela começa por uma parte, ela já sai sabendo o próximo passo. Isso vira retorno e manutenção. A paciente que só ouviu falar do Botox não volta pro bioestimulador porque nunca soube que ele fazia sentido pra ela. E lembre: nada de prometer resultado. Fale do que o procedimento faz, não de como ela vai ficar.'
      ],
      ciencia: [
        { ref: 'tversky1974', tipo: 'Estudo', txt: 'Tversky e Kahneman mostraram que, ao estimar um número, as pessoas partem de um valor inicial e ajustam pouco a partir dele, mesmo quando esse valor inicial é arbitrário. É o efeito de ancoragem. Limite: os experimentos originais eram sobre estimativas numéricas em laboratório, não sobre compra de procedimento estético.' },
        { ref: 'poundstone2010', tipo: 'Livro', txt: 'Poundstone aplica a ancoragem a preços do dia a dia e mostra que o primeiro número apresentado molda o que parece caro ou barato. Limite: livro de divulgação sobre consumo em geral; não testa clínicas nem saúde.' }
      ],
      passos: [
        'Depois de examinar, monte o plano completo que o rosto dela pede, só com o que for necessário.',
        'Explique cada item com o espelho: o que faz e por que entra.',
        'Fale o valor do plano completo primeiro.',
        'Se ela quiser por partes, monte junto a ordem, começando pelo que mais incomoda.',
        'Anote no prontuário o próximo passo combinado.'
      ],
      exemplo: [
        ['d', 'Olhando seu rosto, eu faria três coisas: Botox pra suavizar o olhar, um pouco de ácido na boca pra devolver o contorno e o bioestimulador pra firmar a pele, que é o que dá sustentação com o tempo.'],
        ['d', 'O plano completo fica R$ 2.600. E a gente pode fazer tudo de uma vez ou por etapas.'],
        ['p', 'Tudo de uma vez agora não dá.'],
        ['d', 'Sem problema nenhum. O que mais te incomoda hoje?'],
        ['p', 'O olho, com certeza.'],
        ['d', 'Então a gente começa pelo Botox hoje, R$ 800, e daqui a 30 dias faz a boca. Deixo anotado aqui pra gente seguir.']
      ],
      erros: [
        'Começar pelo procedimento mais barato: ele vira a régua e o resto parece caro.',
        'Colocar no plano item que o rosto dela não pede: é antiético e ela percebe.',
        'Apresentar o plano completo sem explicar cada parte: vira só um número grande que assusta.'
      ],
      pratica: 'Nas próximas 5 avaliações, apresente o plano completo antes de qualquer procedimento isolado. Anote em cada uma: valor do plano, o que ela fechou na hora e qual próximo passo ficou combinado.',
      q: [
        ['Por que apresentar o plano completo primeiro?', 'Porque o primeiro número vira a régua e o resto passa a parecer possível', 'Porque assim ela sempre fecha tudo', 'Porque o CFBM exige', 'É a ancoragem: o primeiro valor molda a percepção dos seguintes.'],
        ['O que pode entrar no plano completo?', 'Só o que o rosto dela realmente pede', 'Tudo que você oferece, pra aumentar o valor', 'Os procedimentos mais caros', 'Ancoragem honesta mostra o caminho real; inflar o plano é antiético.'],
        ['Ela diz que não dá pra fazer tudo agora. E aí?', 'Montar junto a ordem, começando pelo que mais incomoda', 'Oferecer desconto no pacote', 'Encerrar e pedir pra ela pensar', 'Começar por partes mantém a venda e já deixa o próximo passo combinado.']
      ]
    },
    {
      t: 'Tabela única "a partir de"',
      resumo: 'O mesmo preço pra todas as pacientes; nada de preço chutado por foto.',
      texto: [
        'Hoje acontece muito: a paciente manda foto no WhatsApp e pede o preço. Você olha, chuta um valor, e na avaliação o valor muda. Ou uma paciente paga um valor e a amiga dela, que veio por indicação, ouve outro. Em cidade como Parauapebas, onde todo mundo conversa, isso derruba a confiança rápido. Quem tem muita indicação, como você, precisa ainda mais de preço igual pra todas.',
        'A solução é uma tabela única com valores "a partir de" pra cada procedimento: Botox, boca, bioestimulador, protocolo de papada e flacidez. É esse valor que você fala no WhatsApp. O valor final sai na avaliação, porque depende de quantidade de produto e de área, e você explica isso pra paciente com simplicidade. Por exemplo: "O Botox é a partir de R$ 800. O valor certinho depende de quantas áreas a gente vai tratar, e isso eu vejo na avaliação". Simples, igual pra todas e sem chute. Essa frase você pode deixar salva como mensagem rápida no WhatsApp.',
        'Nada de preço por foto. Foto no celular não mostra a pele, a profundidade da ruga, a flacidez real. Dar preço por foto é quase sempre errar pra cima ou pra baixo. Quando ela mandar foto, agradeça, comente uma coisa que você viu e convide pra avaliação, dando o "a partir de". Assim ela se sente vista, recebe uma resposta honesta e tem um motivo real pra ir até a clínica.',
        'A tabela também te protege. Quando ela diz "mas a fulana pagou menos", você não precisa improvisar. Você explica que o valor parte do mesmo lugar pra todo mundo e muda conforme o que cada rosto pede. Preço com critério é preço que você consegue defender sem travar. E lembre: no protocolo de papada e flacidez, a tecnologia é do Dr. Rafael, sempre credite.'
      ],
      ciencia: [
        { ref: 'fisher1981', tipo: 'Livro', txt: 'Fisher e Ury recomendam negociar com base em critérios objetivos, e não em quem pressiona mais. Uma tabela pública com regra clara é um critério desse tipo: o preço não depende do humor do dia. Limite: o livro trata de negociação em geral (negócios, diplomacia), não de clínicas.' },
        { ref: 'mercadoHurtz', tipo: 'Prática de mercado', txt: 'Clínicas que a Hurtz atende e que passaram a usar "a partir de" no WhatsApp reduziram a discussão de preço por foto e as reclamações de valor diferente entre amigas. Observação de rotina, sem medição formal.' }
      ],
      passos: [
        'Escreva uma tabela com o valor "a partir de" de cada procedimento.',
        'Use exatamente esses valores em todas as conversas, sem exceção.',
        'Quando mandarem foto, comente o que viu, dê o "a partir de" e convide pra avaliação.',
        'Tenha uma frase pronta pra explicar por que o valor final sai na avaliação.',
        'Credite o Dr. Rafael sempre que falar do protocolo de papada e flacidez.'
      ],
      exemplo: [
        ['p', '(manda foto da papada) Quanto fica pra tirar isso?'],
        ['d', 'Oi, obrigada por mandar a foto! Dá pra ver que a pele do pescoço está mais solta, isso o protocolo de papada e flacidez trabalha bem. Essa tecnologia é do Dr. Rafael, aqui da clínica.'],
        ['d', 'Ele é a partir de R$ 900. O valor certinho depende do quanto a pele pede, e isso só dá pra ver pessoalmente.'],
        ['p', 'Minha vizinha fez e pagou menos.'],
        ['d', 'Pode ser, porque cada rosto pede uma quantidade. O valor parte do mesmo lugar pra todo mundo. Na avaliação eu vejo o seu e te falo o certo. Tenho terça às 10h ou quarta às 16h.']
      ],
      erros: [
        'Chutar preço por foto: na avaliação o valor muda e ela sente que foi enganada.',
        'Dar valores diferentes pra amigas: em cidade pequena todo mundo compara.',
        'Baixar o "a partir de" quando ela cita a vizinha: a tabela perde o sentido.'
      ],
      pratica: 'Até sexta, escreva sua tabela "a partir de" com todos os procedimentos e salve como mensagem rápida no WhatsApp. Depois conte quantas vezes, na semana, você deu preço fora da tabela. A meta é zero.',
      q: [
        ['A paciente manda foto e pede o preço. O que fazer?', 'Comentar o que viu, dar o "a partir de" e convidar pra avaliação', 'Dar o valor exato pela foto', 'Não responder até ela vir', 'Foto não mostra a pele de verdade; o "a partir de" é honesto e leva pra avaliação.'],
        ['Por que tabela igual pra todas?', 'Porque em cidade com muita indicação as pacientes comparam e preço igual sustenta a confiança', 'Porque é proibido mudar o valor final', 'Porque assim você nunca precisa avaliar', 'Preço com critério é defensável e protege a sua indicação.'],
        ['Ela diz que a vizinha pagou menos. Resposta certa?', 'Explicar que o valor parte do mesmo lugar e muda conforme o rosto', 'Igualar o valor da vizinha', 'Dizer que a vizinha fez errado', 'Você mantém o critério sem criticar ninguém.']
      ]
    },
    {
      t: 'Tipos de fechamento e pedir a decisão',
      resumo: 'Depois do preço, você pede a decisão com uma pergunta fácil de responder.',
      texto: [
        'Muita avaliação boa termina em "vou pensar" porque ninguém pediu a decisão. Você explica tudo, fala o preço e espera que ela diga "quero". A maioria das pacientes não faz isso sozinha. Elas esperam que você conduza. Fechar é só fazer a pergunta que leva ao próximo passo. Não é pressão nem insistência. É ajudar a paciente a sair da dúvida, do mesmo jeito que você ajuda quando explica o procedimento. Quem conduz a consulta também conduz a decisão.',
        'Existem quatro jeitos simples. Escolha: "Você prefere começar pelo Botox ou pela boca?". Data: "Fazemos hoje ou reservo sexta às 9h?". Forma de pagar: "Fica melhor no Pix ou no cartão?". Resumo: você recapitula o que ela disse que incomoda, o que vai ser feito e o valor, e termina com "Vamos marcar?". Todos têm o mesmo princípio: duas opções boas, sem a opção "não sei". Ela escolhe, e qualquer escolha leva ao horário marcado.',
        'Escolha o tipo pelo momento. Se ela está animada, vá direto na data. Se ela está em dúvida entre procedimentos, use a escolha. Se ela já perguntou de parcelamento, ela praticamente decidiu: use a forma de pagar. Se a conversa foi longa e cheia de detalhes, o resumo organiza a cabeça dela antes da pergunta. No WhatsApp, o fechamento por data é o mais simples: dois horários reais, na mesma mensagem do preço.',
        'Depois da pergunta, a regra da aula 2 vale de novo: silêncio. E se ela disser não, tudo bem, isso vira objeção, que é assunto do módulo 10. O que não pode é a avaliação acabar sem pergunta. Paciente que saiu sem ser convidada a decidir não "esqueceu de fechar". Ela só não foi convidada. Faça a pergunta em toda avaliação, mesmo quando sentir que ela não vai fechar. Você vai se surpreender com quantas dizem sim.'
      ],
      ciencia: [
        { ref: 'mercadoHurtz', tipo: 'Prática de mercado', txt: 'Os fechamentos por escolha, data, forma de pagamento e resumo são técnicas clássicas de vendas, ensinadas há décadas em treinamentos comerciais. Não há estudo controlado que prove qual funciona melhor em estética; o que a Hurtz observa é que a avaliação sem pergunta de decisão quase sempre termina em "vou pensar".' }
      ],
      passos: [
        'Depois do preço, faça sempre uma pergunta de decisão.',
        'Escolha o tipo: escolha, data, forma de pagar ou resumo.',
        'Ofereça duas opções boas, nunca "sim ou não".',
        'Fique em silêncio depois da pergunta.',
        'Se vier um não, trate como objeção, sem encerrar a conversa.'
      ],
      exemplo: [
        ['d', 'Então, recapitulando: o que te incomoda é a testa marcada e o olhar cansado. A gente faz o Botox nessas duas áreas, R$ 800, e os R$ 100 da avaliação já descontam.'],
        ['d', 'Vamos fazer hoje ou prefere que eu reserve sexta às 9h?'],
        ['p', 'Hoje eu tô sem tempo...'],
        ['d', 'Então sexta às 9h ou sábado às 10h?'],
        ['p', 'Sábado.'],
        ['d', 'Fechado, sábado às 10h. Fica melhor no Pix ou no cartão?']
      ],
      erros: [
        'Terminar a avaliação com "qualquer coisa me chama": ela vai embora sem decidir.',
        'Perguntar "e aí, o que achou?": abre espaço pro "vou pensar".',
        'Oferecer cinco opções de horário: escolha demais trava a decisão.'
      ],
      pratica: 'Nas próximas 5 avaliações, termine todas com uma pergunta de fechamento e anote qual tipo usou (escolha, data, pagamento ou resumo) e o resultado. No fim da semana veja qual tipo funcionou melhor com o seu público.',
      q: [
        ['Qual é uma pergunta de fechamento por data?', '"Fazemos hoje ou reservo sexta às 9h?"', '"O que você achou?"', '"Qualquer coisa me chama"', 'Duas opções concretas de dia levam ao próximo passo.'],
        ['Ela perguntou se dá pra parcelar. Qual fechamento usar?', 'Forma de pagar: "Pix ou cartão?"', 'Resumo completo de novo', 'Esperar ela decidir sozinha', 'Quem pergunta de pagamento já está quase decidindo.'],
        ['Por que duas opções e não "sim ou não"?', 'Porque as duas levam ao próximo passo e não dão espaço pro "não sei"', 'Porque ela é obrigada a escolher uma', 'Porque é mais rápido', 'Duas opções boas facilitam a decisão sem pressionar.'],
        ['A avaliação terminou sem pergunta de decisão. Qual o problema?', 'Ela não foi convidada a decidir e tende a sair com "vou pensar"', 'Nenhum, ela volta quando quiser', 'Ela vai achar você insistente', 'A maioria espera que você conduza.']
      ]
    },
    {
      t: 'Negociar sem dar desconto',
      resumo: 'Quando ela pede desconto, você troca, pergunta "como" e oferece parcelamento, sem baixar o valor.',
      texto: [
        'Desconto não é ferramenta de venda pra você. O CFBM trata promoção e desconto como mercantilização, e além disso desconto ensina a paciente que o seu preço é chute. Quem ganhou desconto uma vez vai pedir de novo, e vai contar pra amiga. A negociação boa mexe em outras coisas, não no valor. Dá pra mexer em três coisas: no que você faz hoje, no jeito de pagar e na conversa. Nenhuma delas mexe no preço do seu trabalho.',
        'Primeira ferramenta: trocar em vez de ceder. Se ela não consegue pagar o plano inteiro, você reduz o que faz, não o preço do que faz. "Hoje a gente faz só o Botox, e a boca fica pro mês que vem." O valor de cada procedimento continua o mesmo. Ela cabe no orçamento e você não desvaloriza o seu trabalho. E de quebra o próximo passo já fica combinado.',
        'Segunda ferramenta: perguntas com "como". Em vez de dizer "não dou desconto", você pergunta: "Como fica melhor pra você organizar esse valor?" ou "O que precisaria acontecer pra fazer sentido começar agora?". Essas perguntas colocam ela pra pensar na solução junto com você, em vez de brigar pelo número. Muitas vezes a resposta dela já é o fechamento.',
        'Terceira ferramenta: parcelamento. Dividir no cartão não é desconto, é facilidade de pagamento. Mas só ofereça quando ela trouxer a questão do dinheiro, nunca antes. Deixe sempre claras as condições, sem inventar taxa ou vantagem que a clínica não tem. E não confunda: os R$ 100 da avaliação virarem desconto no procedimento em até 30 dias é regra fixa da clínica, igual pra todas, não é negociação.'
      ],
      ciencia: [
        { ref: 'voss2016', tipo: 'Livro', txt: 'Voss recomenda as "perguntas calibradas", abertas e começando com "como" ou "o que", pra fazer o outro lado pensar na solução em vez de brigar por posição. Limite: o livro nasce de negociação de reféns e de negócios, e se apoia na experiência do autor, não em experimentos.' },
        { ref: 'fisher1981', tipo: 'Livro', txt: 'Fisher e Ury separam posição (o que a pessoa pede) de interesse (o motivo por trás). "Quero desconto" é posição; o interesse costuma ser caber no orçamento do mês. Atender o interesse por outro caminho resolve sem mexer no preço. Limite: livro de negociação geral, não de saúde.' }
      ],
      passos: [
        'Quando pedirem desconto, não diga "não dou". Pergunte com "como" ou "o que".',
        'Descubra o interesse: é o valor total, a parcela do mês ou o medo de não gostar?',
        'Se for orçamento, reduza o que faz hoje, nunca o preço de cada procedimento.',
        'Ofereça parcelamento só quando ela trouxer a questão do dinheiro.',
        'Mantenha a regra dos R$ 100 da avaliação igual pra todas.'
      ],
      exemplo: [
        ['p', 'Não tem um desconto aí não? R$ 1.400 tá puxado.'],
        ['d', 'Entendo. Me ajuda a entender: o que pesa mais, o valor total ou o valor de uma vez só?'],
        ['p', 'De uma vez só. Esse mês tá apertado.'],
        ['d', 'Então como fica melhor pra você: parcelar o protocolo no cartão, ou fazer só o Botox hoje e o bioestimulador no mês que vem?'],
        ['p', 'Acho que dividir.'],
        ['d', 'Perfeito, fica no cartão. Vou preparar tudo aqui.']
      ],
      erros: [
        'Dar desconto pra fechar: o CFBM não aceita e a paciente aprende que o preço é negociável.',
        'Responder "não dou desconto" seco: fecha a conversa e ela vai embora.',
        'Oferecer parcelamento antes dela falar de dinheiro: parece que você já espera que ela ache caro.',
        'Reduzir o valor de um procedimento em vez de reduzir o que faz: desvaloriza o seu trabalho.'
      ],
      pratica: 'Escreva 3 perguntas com "como" ou "o que" pra usar quando pedirem desconto e cole no celular. Na semana, toda vez que alguém pedir desconto, use uma delas e anote: qual foi o interesse real (total, parcela, medo) e se fechou.',
      q: [
        ['A paciente pede desconto. Melhor primeira resposta?', 'Uma pergunta como "o que pesa mais, o total ou de uma vez só?"', '"Não dou desconto"', '"Faço 10% pra você"', 'A pergunta descobre o interesse e mantém a conversa aberta.'],
        ['O que é "trocar em vez de ceder"?', 'Reduzir o que é feito hoje, mantendo o preço de cada procedimento', 'Baixar o valor e pedir indicação em troca', 'Trocar o procedimento por um mais barato de outra marca', 'O valor do seu trabalho fica intacto e ela cabe no orçamento.'],
        ['Parcelamento é desconto?', 'Não, é facilidade de pagamento, oferecida quando ela traz a questão do dinheiro', 'Sim, por isso é proibido', 'Sim, mas pode porque é pequeno', 'Dividir não muda o preço, só o jeito de pagar.']
      ]
    }
  ]
};
