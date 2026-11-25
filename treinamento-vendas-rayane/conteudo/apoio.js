/* Roteiro, objeções e mensagens prontas */
window.OBJ = [
["Tá caro","Entendo, é um investimento. O que pesa mais pra você: o valor total ou a parcela?","Se for a parcela: mostre o parcelamento. Se for o total: volte pro que ela contou da queixa e pro que muda pra ela."],
["Vou pensar","Claro, é o seu rosto. Me diz o que ficou de dúvida, que eu te ajudo agora.","Se não tiver dúvida: \"Posso deixar seu horário de sexta guardado até amanhã?\""],
["Vou falar com meu marido","Faz sentido. O que você acha que ele vai perguntar?","Responda a dúvida dele agora. Ofereça: \"Se quiser, traz ele no dia, que eu explico pra ele também.\""],
["A avaliação é paga?","É R$ 100 no Pix pra guardar seu horário, e esse valor vira desconto no procedimento feito em até 30 dias.","Depois: \"Qual dia da semana fica melhor pra você?\""],
["Me fala o preço por aqui","O valor certinho eu passo na avaliação, porque depende do seu rosto. Não quero te dar um número errado.","Volte pros dois horários."],
["Uma conhecida faz mais barato","Pode ser. Veja se é o mesmo produto, a mesma quantidade e se tem retorno incluso.","Não baixe o preço. Reforce seu cuidado e o retorno."],
["Tenho medo de ficar artificial","Esse é o meu maior cuidado. Eu sigo o seu rosto, e prefiro fazer menos e você voltar pra mais do que exagerar.","Mostre um antes e depois natural, se tiver autorização da paciente."],
["Dói?","A gente usa anestésico e eu vou te avisando cada etapa. A maioria das pacientes fala que é bem tranquilo.","Não prometa que não dói nada."],
["Quero pagar no dia","A avaliação é no Pix antes, porque é ela que guarda o seu horário. O procedimento você paga no dia.","Mande a chave Pix com o seu nome junto."],
["Quando eu receber eu aviso","Claro! Seu pagamento cai que dia? Eu te chamo nesse dia pra gente marcar.","Anote o dia e chame mesmo."],
["Agora não é um bom momento","Entendo. Tem alguma data importante chegando? Formatura, festa, viagem?","Se tiver data, use o prazo: o bioestimulador precisa de semanas pra aparecer."],
["Já fiz e não gostei","Me conta o que você não gostou. Isso me ajuda a fazer diferente pra você.","Ouça tudo antes de falar. Depois mostre o que muda com você."]
];

window.ROTEIRO = `
<span class="kicker">Abra no celular antes da consulta</span>
<h1>Roteiro da avaliação</h1>
<p class="sub">Cerca de 40 minutos. A paciente fala mais que você.</p>
<div class="box"><h3 style="margin-top:0">1 · Acolher</h3><div class="fala">Oi, {nome}! Que bom que você veio. Como você me achou?</div></div>
<div class="box"><h3 style="margin-top:0">2 · SPIN (uma por vez)</h3>
<div class="fala"><b>S</b> · Você já fez algum procedimento no rosto?</div>
<div class="fala"><b>P</b> · O que mais te incomoda quando você se olha?</div>
<div class="fala"><b>P</b> · Há quanto tempo isso te incomoda?</div>
<div class="fala"><b>I</b> · E isso te atrapalha em quê no dia a dia?</div>
<div class="fala"><b>I</b> · Você deixa de fazer alguma coisa por causa disso?</div>
<div class="fala"><b>N</b> · Tem alguma data importante chegando?</div>
<div class="fala"><b>N</b> · Se isso melhorasse, o que mudaria pra você?</div>
<p class="sub">Anote a resposta da última.</p></div>
<div class="box"><h3 style="margin-top:0">3 · Espelho</h3><div class="fala">Me mostra aqui o que mais te incomoda.</div><p class="sub">Depois mostre o que você vê, com calma.</p></div>
<div class="box"><h3 style="margin-top:0">4 · Protocolo</h3><p>Frase dela → o que você viu → o que vai fazer → quando aparece → como ela vai se sentir.</p><div class="fala">Você me falou que {frase dela}. O que eu montei pra você é...</div></div>
<div class="box dest"><h3 style="margin-top:0">5 · Valor e fechamento</h3>
<div class="fala">O protocolo que eu montei pra você fica R$ ____.</div>
<p><b>Silêncio.</b></p>
<div class="fala">E os R$ 100 da avaliação já descontam daí. Pode ser no Pix ou parcelado.</div>
<div class="fala">Você quer fazer hoje ou prefere que eu reserve {dia}?</div></div>
<div class="box"><h3 style="margin-top:0">Não fechou?</h3><div class="fala">Posso deixar seu horário de {dia} guardado até amanhã?</div><p class="sub">Ninguém sai sem data.</p></div>`;

window.WHATS = `
<span class="kicker">Mensagens prontas</span>
<h1>WhatsApp</h1>
<p class="sub">Copie, troque o que está entre chaves e mande em bolhas curtas.</p>
${[
["Primeira resposta","Oi, {nome}! Aqui é a Rayane\nO que mais te incomoda hoje: a boca, as linhas ou a flacidez?"],
["Depois da queixa","Isso dá pra tratar sim, mas preciso ver você de perto\nTenho {dia} às {hora} ou {dia} às {hora}. Qual fica melhor?"],
["Garantir o horário","Fechado! Pra garantir seu horário, a avaliação é R$ 100 no Pix\nEsse valor vira desconto no procedimento feito em até 30 dias\nChave Pix (celular): 94984128187, em nome de Rayane da Conceicao Silva"],
["Dados e endereço","Me passa seu nome completo e data de nascimento?\nÉ na Rua 10, nº 216, Cidade Nova, em frente aos Correios\nSe acontecer algum imprevisto, você me avisa antes?"],
["Retomar quem parou","Oi, {nome}, aqui é a Rayane\nVocê tinha me falado de {queixa}. Ainda quer ver isso?\nTenho {dia} às {hora} ou {dia} às {hora}"],
["Véspera","Oi, {nome}! Amanhã às {hora} estou te esperando\nPosso confirmar?"],
["Pós-procedimento (7 dias)","Oi, {nome}! Como você está?\nJá começou a perceber diferença?"],
["Manutenção","Oi, {nome}! Já faz uns meses do seu {procedimento}\nQuer que eu reserve um horário pra gente refazer?"]
].map(([t,m])=>`<div class="box"><span class="tag">${t}</span><div class="bolhas">${m.split("\n").map(l=>`<div class="b ela">${l}</div>`).join("")}</div><button class="btn sec" data-copiar="${encodeURIComponent(m)}">Copiar</button></div>`).join("")}`;

