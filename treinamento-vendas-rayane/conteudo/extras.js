/* Simulador, biblioteca, glossário e plano de 30 dias */

/* ---------- SIMULADOR ----------
   Cada cenário é um mapa de passos. Em cada passo a paciente fala e você escolhe.
   nota: 'boa' | 'meio' | 'ruim'. 'vai' aponta o próximo passo; sem 'vai', termina. */
window.SIMULADOR = [
{
 id:'s1', t:'Primeiro contato no WhatsApp', d:'Uma paciente chegou pelo anúncio. Leve até o Pix da avaliação.',
 inicio:'a',
 passos:{
  a:{ p:['Oi, vi o anúncio e quero agendar minha avaliação'],
   o:[
    {txt:'Oi! Qual procedimento você tem interesse?', nota:'ruim', exp:'Pergunta aberta solta. Nas suas conversas da Black, a maioria das pacientes que recebeu essa pergunta não respondeu mais.', vai:'a2'},
    {txt:'Oi, Cláudia! Aqui é a Rayane. O que mais te incomoda hoje: a boca, as linhas ou a flacidez?', nota:'boa', exp:'Nome, apresentação e uma pergunta de problema com opções. Fácil de responder.', vai:'b'},
    {txt:'Oi! Segue nossa tabela: Botox R$ ..., boca R$ ..., bioestimulador R$ ...', nota:'ruim', exp:'Preço antes de valor. Ela compara números sem saber o que vai receber, e o valor vira o único critério.', vai:'a3'}
   ]},
  a2:{ p:['(a paciente não respondeu há 2 dias)'],
   o:[
    {txt:'Oi, sumiu?', nota:'ruim', exp:'Cobra a paciente e não dá motivo pra voltar.'},
    {txt:'Oi, Cláudia, aqui é a Rayane. Muita gente me chama por causa das linhas ou da flacidez. Qual das duas te incomoda mais?', nota:'boa', exp:'Retoma com uma pergunta fácil e com opções. Dá uma segunda chance pra conversa.', vai:'b'}
   ]},
  a3:{ p:['Nossa, achei caro. Vou pensar'],
   o:[
    {txt:'Posso fazer um desconto pra você', nota:'ruim', exp:'Desconto como argumento vai contra o código de ética do biomédico e ensina a paciente que o seu preço não é sério.'},
    {txt:'Entendo! O valor certinho depende do seu rosto. O que mais te incomoda hoje?', nota:'boa', exp:'Concorda com o sentimento e volta pro problema dela. Ainda dá pra recuperar.', vai:'b'}
   ]},
  b:{ p:['A flacidez. E essa papada que me deixa com cara de mais velha'],
   o:[
    {txt:'Entendi. Tem alguma data que você quer estar bem?', nota:'boa', exp:'Pergunta de necessidade. Ela vai te dar o motivo pra começar agora.', vai:'c'},
    {txt:'O bioestimulador é ótimo pra isso. Ele estimula colágeno, é feito com produto importado, dura até dois anos...', nota:'meio', exp:'Explicação técnica antes da hora. No WhatsApp o objetivo é marcar a avaliação, não vender o procedimento.', vai:'c'},
    {txt:'Vamos agendar uma avaliação?', nota:'ruim', exp:'Convite sem dia e hora. Ela precisa pensar na agenda dela e deixa pra depois.', vai:'c2'}
   ]},
  c:{ p:['O Natal com a família. Quero sair bem nas fotos'],
   o:[
    {txt:'Dá tempo de começar. Preciso ver você de perto pra montar o protocolo. Tenho terça às 9h ou quarta às 14h30. Qual fica melhor?', nota:'boa', exp:'Mostra que dá pra ajudar e dá dois horários. Pergunta de escolha.', vai:'d'},
    {txt:'Que legal! Quando você pode vir?', nota:'meio', exp:'Deixa a decisão aberta. Funciona às vezes, mas dois horários marcam mais.', vai:'d'}
   ]},
  c2:{ p:['Vamos sim. Quando tem?'],
   o:[
    {txt:'Terça às 9h ou quarta às 14h30. Qual fica melhor?', nota:'boa', exp:'Recuperou: agora ela tem dois horários pra escolher.', vai:'d'},
    {txt:'Quando você quiser, minha agenda está livre', nota:'ruim', exp:'Agenda livre passa a ideia de que ninguém procura você. E ela ainda tem que decidir sozinha.'}
   ]},
  d:{ p:['Quarta'],
   o:[
    {txt:'Fechado! Pra garantir seu horário, a avaliação é R$ 100 no Pix, e esse valor vira desconto no procedimento feito em até 30 dias.', nota:'boa', exp:'Explica o valor, o motivo do Pix e o desconto depois. A chave vem logo em seguida, com o seu nome.', vai:'e'},
    {txt:'Fechado! Te espero quarta', nota:'ruim', exp:'Sem Pix, a chance de ela faltar é grande. Todo mundo garante que vem; o que faz vir é o compromisso pago.'},
    {txt:'Fechado! Tem uma taxa de R$ 50', nota:'ruim', exp:'Não existe mais taxa de R$ 50. A avaliação é R$ 100, paga inteira, e desconta no procedimento.'}
   ]},
  e:{ p:['Ah, mas tem que pagar antes?'],
   o:[
    {txt:'Tem sim, é o que guarda o seu horário. E não é um gasto a mais: os R$ 100 viram desconto no procedimento. Te mando a chave?', nota:'boa', exp:'Responde a dúvida, reforça que o valor volta pra ela e pede o próximo passo.', fim:'Avaliação marcada com Pix. Agora é pedir nome completo, data de nascimento, mandar o endereço e perguntar se ela avisa caso tenha imprevisto.'},
    {txt:'Se preferir pode pagar lá no dia', nota:'ruim', exp:'Abre mão do que faz a paciente aparecer. Quem decide exceção é você, caso a caso, e nunca como primeira resposta.'}
   ]}
 }
},
{
 id:'s2', t:'"Tá caro" na avaliação', d:'Você apresentou o protocolo de papada. Ela achou caro.',
 inicio:'a',
 passos:{
  a:{ p:['O protocolo que eu montei pra você fica R$ 1.400.','(silêncio)','Nossa... achei caro.'],
   o:[
    {txt:'Eu sei que é caro, mas o produto é muito bom...', nota:'ruim', exp:'Pedir desculpa pelo preço confirma que é caro. Você está defendendo o preço em vez de entender a dúvida.'},
    {txt:'Entendo, é um investimento. O que pesa mais pra você: o valor total ou a parcela?', nota:'boa', exp:'Concorda com o sentimento e pergunta o que tem por trás. A primeira objeção quase nunca é a real.', vai:'b'},
    {txt:'Consigo fazer por R$ 1.100 se fechar hoje', nota:'ruim', exp:'Desconto como argumento. Ensina que o preço era inflado e vai contra o código de ética.'}
   ]},
  b:{ p:['É a parcela. Esse mês está apertado.'],
   o:[
    {txt:'Dá pra parcelar no cartão. Fica em quantas vezes melhor pra você?', nota:'boa', exp:'Respondeu a dúvida real (a parcela) e já voltou pra decisão com uma pergunta de escolha.', vai:'c'},
    {txt:'Então você pensa e me avisa', nota:'ruim', exp:'Ela sai sem data. Paciente que sai sem data quase nunca volta.'}
   ]},
  c:{ p:['Em 5 vezes cabe. Mas será que vai ficar natural?'],
   o:[
    {txt:'Esse é o meu maior cuidado. Você me falou que quer aparecer nas fotos da formatura da sua filha, e é isso que a gente vai buscar: você descansada, sem cara de procedimento.', nota:'boa', exp:'Respondeu o medo e devolveu a frase dela (a necessidade do SPIN).', vai:'d'},
    {txt:'Vai sim, fica perfeito', nota:'ruim', exp:'Promessa de resultado. Não pode, e ela sabe que ninguém garante perfeição.'}
   ]},
  d:{ p:['Tá bom. Vamos fazer.'],
   o:[
    {txt:'Você prefere começar hoje ou que eu reserve sexta pra você?', nota:'boa', exp:'Pergunta de escolha. As duas respostas são sim.', fim:'Procedimento fechado. Lembre de abater os R$ 100 da avaliação e marcar o retorno.'},
    {txt:'Ótimo! Me chama quando quiser marcar', nota:'ruim', exp:'Ela disse sim e você não marcou. O sim esfria em poucas horas.'}
   ]}
 }
},
{
 id:'s3', t:'"Vou falar com meu marido"', d:'No fim da avaliação ela trava na decisão.',
 inicio:'a',
 passos:{
  a:{ p:['Gostei muito, mas preciso falar com meu marido antes.'],
   o:[
    {txt:'Claro, fica à vontade, qualquer coisa me chama', nota:'ruim', exp:'Ela sai sem data e sem saber explicar pro marido por que vale.'},
    {txt:'Faz sentido. O que você acha que ele vai perguntar?', nota:'boa', exp:'Respeita a decisão dela e descobre a dúvida real, que muitas vezes é dela mesma.', vai:'b'}
   ]},
  b:{ p:['Ah, ele vai achar que é vaidade, gastar com isso...'],
   o:[
    {txt:'Entendo. Você me contou que deixou de sair nas fotos e que isso te deixa mal. Cuidar disso é cuidar de como você se sente, não é vaidade.', nota:'boa', exp:'Nomeou o sentimento (culpa) e usou as palavras dela. Dá permissão pra ela cuidar de si.', vai:'c'},
    {txt:'Homem nunca entende essas coisas', nota:'ruim', exp:'Cria um lado contra o marido. Ela fica desconfortável.'}
   ]},
  c:{ p:['É verdade... mas ainda quero conversar com ele.'],
   o:[
    {txt:'Combinado. Posso deixar sexta às 14h reservada até amanhã? Se quiser, ele pode vir junto que eu explico pra ele também.', nota:'boa', exp:'Ela sai com data, horário guardado e uma porta aberta pro marido.', fim:'Ela saiu com horário reservado. Amanhã, chame no horário combinado lembrando o que ela falou.'},
    {txt:'Tá bom, me avisa', nota:'ruim', exp:'Sem data, sem próximo passo.'}
   ]}
 }
}
];

/* ---------- BIBLIOTECA ----------
   Resumos próprios. Não substituem os livros. */
window.BIBLIOTECA = [
{ t:'SPIN Selling', a:'Neil Rackham, 1988', ideia:'Em vendas de valor alto, quem pergunta vende mais do que quem apresenta. A equipe de Rackham acompanhou milhares de visitas de vendas e viu que os melhores vendedores faziam perguntas em quatro tipos: situação, problema, implicação e necessidade de solução.',
  usar:['Pergunte antes de explicar.','A pergunta de implicação (o que o problema causa na vida dela) é a que mais aumenta o valor.','Deixe a paciente falar o benefício. Depois devolva as palavras dela.'],
  cuidado:'A pesquisa é de vendas entre empresas, de ticket alto. Na estética o princípio vale, mas a conversa é mais curta e mais emocional.' },
{ t:'As Armas da Persuasão', a:'Robert Cialdini, 1984', ideia:'Seis atalhos que as pessoas usam pra decidir: reciprocidade, compromisso e coerência, prova social, afeição, autoridade e escassez.',
  usar:['Prova social: depoimentos e indicações de pacientes reais, com autorização.','Compromisso: o Pix da avaliação e o "você me avisa se tiver imprevisto?" fazem a paciente se comprometer.','Autoridade: explique o que você vê no rosto dela com segurança.'],
  cuidado:'Escassez falsa ("só hoje", "últimas vagas" sem ser verdade) destrói confiança e pode ser propaganda enganosa.' },
{ t:'Rápido e Devagar', a:'Daniel Kahneman, 2011', ideia:'A gente decide quase tudo pelo "sistema rápido", intuitivo e emocional, e depois justifica com o "sistema devagar". Perder dói mais do que ganhar o mesmo tanto, e o primeiro número que aparece vira referência (ancoragem).',
  usar:['A paciente decide pela emoção (como vai se sentir) e justifica pela razão (produto, prazo, parcela). Dê as duas.','Apresente o protocolo completo antes do preço: ele vira a referência do que ela está comprando.'],
  cuidado:'Use pra entender a paciente, não pra manipular.' },
{ t:'Negocie Como Se Sua Vida Dependesse Disso', a:'Chris Voss, 2016', ideia:'Ex-negociador do FBI. Mostra que ouvir com atenção, repetir as últimas palavras da pessoa (espelhar) e dizer em voz alta o que ela está sentindo (rotular) baixam a defesa e abrem a conversa.',
  usar:['Rotule o medo: "Parece que você tem receio de ficar artificial."','Espelhe: ela diz "acho caro", você diz "caro?" e espera.','Perguntas com "como" e "o que" fazem ela pensar junto: "O que faria isso caber pra você?"'],
  cuidado:'O livro é sobre negociação dura. Na clínica, o tom é de acolhimento, não de disputa.' },
{ t:'Entrevista Motivacional', a:'William Miller e Stephen Rollnick, 1991 (3ª edição em 2013)', ideia:'Método da área da saúde pra ajudar a pessoa a mudar a partir da motivação dela, e não da pressão do profissional. Usa perguntas abertas, escuta reflexiva e respeito à autonomia.',
  usar:['"O que te fez procurar agora?" traz a motivação dela.','Reflita o que ela disse antes de responder.','Lembre que a decisão é dela: isso diminui a resistência.'],
  cuidado:'Foi criado pra mudança de comportamento em saúde. Aqui usamos as técnicas de conversa, não o protocolo clínico.' },
{ t:'StoryBrand', a:'Donald Miller, 2017', ideia:'Toda boa mensagem conta uma história em que o cliente é o herói e a marca é a guia que mostra o caminho.',
  usar:['A paciente é a protagonista: ela tem um problema e um sonho.','Você é a guia: entende o problema, tem um plano e mostra o caminho.','Fale do que ela ganha, não de você.'],
  cuidado:'É um método de comunicação de marketing, não pesquisa científica.' },
{ t:'Priceless', a:'William Poundstone, 2010', ideia:'Reúne pesquisas que mostram como a gente não tem noção fixa de preço: o valor percebido muda com a referência, a forma de apresentar e o contexto.',
  usar:['Mostre o que está incluso (avaliação, protocolo, retorno) antes do número.','Use sempre o mesmo valor pra todas: preço que muda parece inventado.'],
  cuidado:'Livro de divulgação. Os estudos são de laboratório e varejo, não de clínica.' },
{ t:'Como Chegar ao Sim', a:'Roger Fisher e William Ury, 1981', ideia:'Negociar bem é focar no interesse por trás da posição, não brigar pela posição.',
  usar:['"Tá caro" é posição. O interesse pode ser caber no mês, ou ter certeza do resultado. Descubra qual.','Em vez de baixar o preço, troque: parcelamento, data, etapas.'],
  cuidado:'Escrito pra negociações entre partes iguais. Na clínica, você também cuida do bem-estar dela.' }
];

/* ---------- GLOSSÁRIO ---------- */
window.GLOSSARIO = [
['Ancoragem','O primeiro número ou referência que a pessoa vê influencia como ela avalia o resto.'],
['Aversão à perda','Perder alguma coisa pesa mais do que ganhar a mesma coisa.'],
['Escuta ativa','Ouvir com atenção total, sem preparar a resposta enquanto a pessoa fala, e mostrar que entendeu.'],
['Espelhamento','Repetir as últimas palavras da paciente ou acompanhar o ritmo dela pra criar sintonia.'],
['Fechamento','O momento em que você pede a decisão.'],
['Follow-up','Retomar o contato com quem parou de responder.'],
['Implicação','No SPIN, pergunta sobre o que o problema causa na vida da paciente.'],
['Lead','Pessoa que chamou pelo anúncio e ainda não marcou.'],
['Necessidade de solução','No SPIN, pergunta que faz a paciente falar o benefício de resolver o problema.'],
['Objeção','Dúvida, medo ou resistência que aparece antes da decisão.'],
['Pergunta aberta','Pergunta que não se responde com sim ou não.'],
['Pergunta de escolha','Pergunta com duas opções em que as duas levam à decisão: "terça ou quarta?"'],
['Prova social','Pessoas confiam mais no que outras pessoas parecidas já escolheram.'],
['Protocolo','O plano montado pra paciente, com o que fazer, por quê, quantas etapas e quando aparece o resultado.'],
['Rapport','Sintonia e confiança entre você e a paciente.'],
['Rotular emoção','Dizer em voz alta o que a paciente parece sentir: "parece que você tem medo de..."'],
['SPIN','Método de perguntas: Situação, Problema, Implicação e Necessidade de solução.'],
['Ticket médio','Valor médio que cada paciente gasta.'],
['Valor percebido','Quanto a paciente acha que vale o que vai receber. Se for menor que o preço, parece caro.'],
['Venda consultiva','Venda em que você primeiro entende o problema e depois propõe a solução.']
];

/* ---------- PLANO DE 30 DIAS ---------- */
window.PLANO = [
{ s:'Semana 1 · WhatsApp', metas:['Responder toda paciente nova com nome + pergunta com opções','Dar dois horários em até 2 trocas em toda conversa','Explicar a avaliação de R$ 100 do jeito certo em toda marcação','Contar no fim da semana: quantas conversas viraram avaliação marcada'] },
{ s:'Semana 2 · SPIN na avaliação', metas:['Fazer as 4 etapas do SPIN em todas as avaliações','Anotar a frase da necessidade de cada paciente','Usar a frase dela na apresentação do protocolo','Contar: em quantas avaliações você falou menos que a paciente'] },
{ s:'Semana 3 · Preço e fechamento', metas:['Tabela "a partir de" pronta e usada em todas','Falar o valor e ficar em silêncio','Fazer pergunta de escolha no fim de toda avaliação','Nenhuma paciente sai sem data'] },
{ s:'Semana 4 · Objeções e pós', metas:['Responder toda objeção com os 4 passos','Mandar mensagem de 7 dias pra toda paciente atendida','Pedir indicação no retorno','Chamar 5 pacientes antigas pra manutenção'] }
];
