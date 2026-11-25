/* Motor do curso de vendas da Dra Rayane. Esquema de aula igual ao curso da Geovana. */
(function(){
const MODS = Object.values(window.CURSO || {}).sort((a,b)=>a.n-b.n);
const F = window.FONTES || {};
const KEY = 'vender-bem-rayane-v3';
let est = {};
try { est = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch(e) { est = {}; }
function salvar(){ try { localStorage.setItem(KEY, JSON.stringify(est)); } catch(e) {} }
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const totalAulas = MODS.reduce((s,m)=>s+m.aulas.length,0);
const aulaFeita = (mi,ai) => !!est['a-'+mi+'-'+ai];
const feitasMod = (m,mi) => m.aulas.filter((_,ai)=>aulaFeita(mi,ai)).length;
function prog(){
  const n = MODS.reduce((s,m,mi)=>s+feitasMod(m,mi),0);
  document.getElementById('pbar').style.width = (totalAulas? n/totalAulas*100 : 0)+'%';
  document.getElementById('ptx').textContent = n+'/'+totalAulas+' aulas';
}

/* embaralha as alternativas de forma estável por pergunta */
function ordem(n, seed){
  const a=[...Array(n).keys()]; let s=seed;
  for(let i=n-1;i>0;i--){ s=(s*9301+49297)%233280; const j=Math.floor(s/233280*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

function inicio(){
  return `<span class="kicker">Treinamento Hurtz</span>
<h1>Vender bem, Dra Rayane</h1>
<p class="sub">Um curso completo de vendas pra estética: como a paciente decide, como criar confiança, o método SPIN, valor, WhatsApp, avaliação, preço, fechamento, objeções e pós-venda. Com base em livros e pesquisas, e exemplos da sua clínica.</p>
<p class="sub">${MODS.length} módulos · ${totalAulas} aulas</p>
<div class="grid">${MODS.map((m,mi)=>{const f=feitasMod(m,mi),t=m.aulas.length;return `<a class="mod ${f===t?'feito':''}" href="#mod/${mi}"><span class="num">${f===t?'✓':mi+1}</span><span style="flex:1"><b>${esc(m.t)}</b><small>${esc(m.d)}</small><em>${f} de ${t} aulas</em><div class="barra"><b style="width:${f/t*100}%"></b></div></span></a>`}).join('')}</div>
<div class="box"><b>Como usar:</b> faça um módulo por vez, na ordem. Cada aula tem a explicação, de onde vem a ideia (livro ou pesquisa), o passo a passo, um exemplo, os erros comuns, um exercício pra semana e um teste. A aula conta como feita quando você acerta o teste.</div>
<div class="box">Na aba <b>Mais</b> você tem o simulador de conversa, a biblioteca com o resumo dos livros, o glossário e o plano de 30 dias.</div>
<p class="rodape">Hurtz Company</p>`;
}

function modulo(mi){
  const m=MODS[mi];
  return `<a class="crumb" href="#inicio">‹ Todos os módulos</a>
<span class="kicker" style="display:block;margin-top:10px">Módulo ${mi+1} de ${MODS.length}</span>
<h1>${esc(m.t)}</h1><p class="sub">${esc(m.d)}</p>
${m.aulas.map((a,ai)=>`<a class="aula ${aulaFeita(mi,ai)?'feito':''}" href="#aula/${mi}/${ai}"><span class="num">${aulaFeita(mi,ai)?'✓':ai+1}</span><span><b>${esc(a.t)}</b><small>${esc(a.resumo)}</small></span></a>`).join('')}
<div class="nav-mod">${mi>0?`<a class="btn sec" href="#mod/${mi-1}">Módulo anterior</a>`:'<span></span>'}<a class="btn" href="#aula/${mi}/0">Começar</a></div>`;
}

function quiz(mi,ai){
  const a=MODS[mi].aulas[ai];
  return a.q.map((q,qi)=>{
    const ops=q.slice(1,4).filter(Boolean); const exp=q.length>4?q[q.length-1]:'';
    const ord=ordem(ops.length, (mi+1)*1000+(ai+1)*31+qi*7);
    const r=est['q-'+mi+'-'+ai+'-'+qi];
    return `<div class="quiz"><p class="q">${qi+1}. ${q[0]}</p>${ord.map(oi=>`<button data-q="${mi}|${ai}|${qi}|${oi}" class="${r!==undefined?(oi===0?'certa':(oi===r?'errada':'')):''}">${ops[oi]}</button>`).join('')}${r!==undefined?`<p class="exp">${r===0?'Certo! ':'Não é essa. '}${exp}</p>`:''}</div>`;
  }).join('');
}

function aula(mi,ai){
  const m=MODS[mi], a=m.aulas[ai];
  const prox = ai<m.aulas.length-1 ? `#aula/${mi}/${ai+1}` : (mi<MODS.length-1 ? `#mod/${mi+1}` : '#inicio');
  const proxTxt = ai<m.aulas.length-1 ? 'Próxima aula' : (mi<MODS.length-1 ? 'Próximo módulo' : 'Concluir');
  const ex = (a.exemplo||[]).map(([q,t])=>`<div class="b ${q==='d'?'ela':'pac'}">${t}</div>`).join('');
  return `<a class="crumb" href="#mod/${mi}">‹ ${esc(m.t)}</a>
<span class="kicker" style="display:block;margin-top:10px">Módulo ${mi+1} · Aula ${ai+1} de ${m.aulas.length}</span>
<h1>${esc(a.t)}</h1><p class="sub">${esc(a.resumo)}</p>
<h2>A aula</h2>${a.texto.map(p=>`<p>${p}</p>`).join('')}
${a.ciencia&&a.ciencia.length?`<h2>De onde vem</h2>${a.ciencia.map(c=>{const f=F[c.ref]||{};return `<div class="fonte"><b>${esc(c.tipo||'')}</b>${c.txt}<span class="ref">${esc(f.a||'')}${f.t?', '+esc(f.t):''}${f.url?` · <a href="${esc(f.url)}" target="_blank" rel="noopener">ver fonte</a>`:''}</span></div>`}).join('')}`:''}
${a.passos&&a.passos.length?`<h2>Na prática</h2><ol class="passos">${a.passos.map(p=>`<li>${p}</li>`).join('')}</ol>`:''}
${ex?`<h2>Exemplo</h2><div class="bolhas">${ex}</div>`:''}
${a.erros&&a.erros.length?`<h2>Erros comuns</h2><ul class="lista">${a.erros.map(e=>`<li>${e}</li>`).join('')}</ul>`:''}
${a.pratica?`<h2>Exercício da semana</h2><div class="box dest">${a.pratica}</div>`:''}
<h2>Teste</h2><div id="quiz">${quiz(mi,ai)}</div>
<div class="nav-mod">${ai>0?`<a class="btn sec" href="#aula/${mi}/${ai-1}">Anterior</a>`:`<a class="btn sec" href="#mod/${mi}">Módulo</a>`}<a class="btn" href="${prox}">${proxTxt}</a></div>`;
}

function objecoes(){
  return `<span class="kicker">Abra quando travar</span><h1>Objeções</h1><p class="sub">Concorde, pergunte, responda, volte pra decisão.</p>
${(window.OBJ||[]).map(([o,r,d])=>`<details class="obj"><summary>"${o}"</summary><div class="in"><div class="fala">${r}</div><p class="sub">${d}</p></div></details>`).join('')}`;
}

function mais(){
  const it=[['#sim','Simulador de conversa','Treine respostas em conversas de verdade e veja o que acontece.'],['#biblio','Biblioteca','O resumo de cada livro usado no curso e o que aplicar na clínica.'],['#glossario','Glossário','Os termos de vendas explicados em uma frase.'],['#plano','Plano de 30 dias','Uma meta prática por semana depois do curso.']];
  return `<span class="kicker">Recursos</span><h1>Mais</h1><div class="mais">${it.map(([h,t,d])=>`<a class="mod" href="${h}"><span><b>${t}</b><small>${d}</small></span></a>`).join('')}</div>`;
}

/* simulador */
let sim=null;
function simLista(){
  return `<a class="crumb" href="#mais">‹ Mais</a><h1>Simulador de conversa</h1><p class="sub">A paciente fala, você escolhe a resposta e vê o resultado. Pode refazer quantas vezes quiser.</p>
${(window.SIMULADOR||[]).map(s=>`<a class="mod" href="#sim/${s.id}"><span><b>${esc(s.t)}</b><small>${esc(s.d)}</small></span></a>`).join('')}`;
}
function simTela(){
  const s=sim.c, p=s.passos[sim.atual];
  const hist=sim.hist.map(h=>`<div class="sim-hist">${h.p.map(t=>`<div class="sim-fala">${t}</div>`).join('')}<div class="bolhas"><div class="b ela">${h.o.txt}</div></div><div class="sim-res ${h.o.nota}">${h.o.exp}</div></div>`).join('');
  let corpo;
  if(sim.fim!==undefined){
    const boas=sim.hist.filter(h=>h.o.nota==='boa').length;
    corpo=`<div class="box dest"><b>${sim.fim?'Fim da conversa':'A conversa parou aqui'}</b><p>${sim.fim||'Essa resposta faz a paciente esfriar. Volte e tente outro caminho.'}</p><p class="sub">${boas} de ${sim.hist.length} respostas boas.</p></div><button class="btn" data-simre="1">Fazer de novo</button>`;
  } else {
    corpo=`${p.p.map(t=>`<div class="sim-fala">${t}</div>`).join('')}<p class="sub" style="margin-top:12px">Qual é a sua resposta?</p>${p.o.map((o,i)=>`<button class="sim-op" data-sim="${i}">${o.txt}</button>`).join('')}`;
  }
  return `<a class="crumb" href="#sim">‹ Cenários</a><h1>${esc(s.t)}</h1><p class="sub">${esc(s.d)}</p>${hist}${corpo}`;
}
function simInicia(id){ const c=(window.SIMULADOR||[]).find(x=>x.id===id); sim={c,atual:c.inicio,hist:[]}; }

function biblio(){
  return `<a class="crumb" href="#mais">‹ Mais</a><h1>Biblioteca</h1><p class="sub">Resumos feitos pela Hurtz. Não substituem os livros.</p>
${(window.BIBLIOTECA||[]).map(b=>`<details class="obj"><summary>${esc(b.t)} <span class="sub" style="font-weight:400">· ${esc(b.a)}</span></summary><div class="in"><p>${b.ideia}</p><h3>O que usar na clínica</h3><ul class="lista">${b.usar.map(u=>`<li>${u}</li>`).join('')}</ul><p class="sub"><b>Cuidado:</b> ${b.cuidado}</p></div></details>`).join('')}`;
}
function glossario(){
  return `<a class="crumb" href="#mais">‹ Mais</a><h1>Glossário</h1><dl class="gl">${(window.GLOSSARIO||[]).map(([t,d])=>`<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl>`;
}
function plano(){
  return `<a class="crumb" href="#mais">‹ Mais</a><h1>Plano de 30 dias</h1><p class="sub">Depois do curso, uma semana pra cada parte. Marque o que você fez.</p>
${(window.PLANO||[]).map((s,si)=>`<div class="box"><h3 style="margin-top:0">${s.s}</h3>${s.metas.map((m,j)=>`<label class="check"><input type="checkbox" data-k="p-${si}-${j}" ${est['p-'+si+'-'+j]?'checked':''}><span>${m}</span></label>`).join('')}</div>`).join('')}`;
}

const main=document.getElementById('main');
function render(){
  const h=(location.hash||'#inicio').slice(1), parts=h.split('/');
  let html, tab='inicio';
  if(parts[0]==='mod') html=modulo(+parts[1]);
  else if(parts[0]==='aula') html=aula(+parts[1],+parts[2]);
  else if(h==='consulta'){html=window.ROTEIRO;tab='consulta';}
  else if(h==='objecoes'){html=objecoes();tab='objecoes';}
  else if(h==='whats'){html=window.WHATS;tab='whats';}
  else if(h==='mais'){html=mais();tab='mais';}
  else if(h==='sim'){html=simLista();tab='mais';}
  else if(parts[0]==='sim'){ if(!sim||sim.c.id!==parts[1]) simInicia(parts[1]); html=simTela(); tab='mais'; }
  else if(h==='biblio'){html=biblio();tab='mais';}
  else if(h==='glossario'){html=glossario();tab='mais';}
  else if(h==='plano'){html=plano();tab='mais';}
  else html=inicio();
  main.innerHTML=html;
  document.querySelectorAll('nav.tabs a').forEach(a=>a.classList.toggle('on',a.dataset.t===tab));
  window.scrollTo(0,0); prog();
}
main.addEventListener('change',e=>{const k=e.target.dataset.k;if(k){est[k]=e.target.checked;salvar();}});
main.addEventListener('click',e=>{
  const t=e.target.closest('button'); if(!t) return;
  if(t.dataset.q){
    const [mi,ai,qi,oi]=t.dataset.q.split('|').map(Number);
    est['q-'+mi+'-'+ai+'-'+qi]=oi;
    const a=MODS[mi].aulas[ai];
    if(a.q.every((_,k)=>est['q-'+mi+'-'+ai+'-'+k]===0)) est['a-'+mi+'-'+ai]=true;
    salvar(); document.getElementById('quiz').innerHTML=quiz(mi,ai); prog(); return;
  }
  if(t.dataset.sim!==undefined){
    const p=sim.c.passos[sim.atual], o=p.o[+t.dataset.sim];
    sim.hist.push({p:p.p,o});
    if(o.vai) sim.atual=o.vai; else sim.fim=o.fim||'';
    main.innerHTML=simTela(); return;
  }
  if(t.dataset.simre){ simInicia(sim.c.id); main.innerHTML=simTela(); window.scrollTo(0,0); return; }
  if(t.dataset.copiar){const s=decodeURIComponent(t.dataset.copiar);(navigator.clipboard?navigator.clipboard.writeText(s):Promise.reject()).then(()=>{t.textContent='Copiado'},()=>{t.textContent='Selecione e copie'});setTimeout(()=>t.textContent='Copiar',1800);}
});
addEventListener('hashchange',()=>{ if(!location.hash.startsWith('#sim/')) sim=null; render(); });
window.render=render;
render();
})();
