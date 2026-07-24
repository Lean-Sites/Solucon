/* ===================================================================
   Solucon · Diagnóstico Estratégico — Lean Company
   Acesso, diagnóstico interativo, cenários, navegação e progresso.
=================================================================== */

const PASSWORD = "Solucon2026";

/* ---------- Ícones (inline SVG, coerentes por frente) ---------- */
const IC = {
  process:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 8.5v7M8.4 6.7l7.2 4M8.4 17.3l7.2-4"/></svg>',
  budget:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/><circle cx="17.5" cy="14.5" r="4.2" fill="#fff"/><path d="M17.5 12.5v2l1.3 1.3"/></svg>',
  engineer:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/><path d="M12 4.8V3M9 12.5l-1.5 2M15 12.5l1.5 2"/></svg>',
  integrate:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M9 15l6-6"/><path d="M14 7l1.5-1.5a3.5 3.5 0 0 1 5 5L19 12"/><path d="M10 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L5 12"/></svg>',
  finance:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="10" width="3" height="7"/></svg>',
  routine:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 9h16M8 3v4M16 3v4"/><path d="M9 14.5l2 2 4-4"/></svg>',
  facade:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="5" y="3" width="14" height="18"/><path d="M12 3v18M5 9h14M5 15h14"/></svg>',
  frame:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="1"/><rect x="8" y="8" width="8" height="8"/></svg>',
  drywall:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="3" y="5" width="18" height="14"/><path d="M3 12h18M9 5v7M15 12v7"/></svg>',
  install:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-2z"/></svg>'
};

/* ---------- Ecossistema (operação Solucon) ---------- */
const ECO = [
  {ic:'facade', t:'Fachadas de vidro', d:'Fachadas de vidro laminado colado — a especialidade histórica da Solucon.'},
  {ic:'frame', t:'Esquadrias de alumínio', d:'Portas, janelas e sistemas em alumínio para obras residenciais e comerciais.'},
  {ic:'drywall', t:'Drywall, forros e divisórias', d:'Sistemas construtivos a seco, revestimentos e tratamentos acústicos.'},
  {ic:'install', t:'Transporte e instalação', d:'Montagem e instalação em obra — indústria e serviço em uma só operação.'},
  {ic:'budget', t:'Orçamentação', d:'Engenharia dedicada à elaboração de orçamentos técnicos para cada projeto.'},
  {ic:'process', t:'Administrativo', d:'Rotinas que conectam comercial, engenharia e obra ao longo do processo.'}
];

/* ---------- Frentes de diagnóstico ---------- */
const FRENTES = [
  {
    icon:'process', title:'Processos Administrativos',
    priority:{label:'Prioridade imediata', cls:'badge--prio'},
    evidence:'Foco definido na reunião',
    summary:'Mapear o fluxo administrativo de ponta a ponta para revelar gargalos, retrabalhos e etapas que consomem tempo sem gerar valor, criando uma base padronizada para as demais frentes.',
    context:['Operação combina indústria e serviço, multiplicando as interfaces administrativas.','O fluxo entre comercial, engenharia e administrativo passa por várias mãos.','Rotinas ainda não consolidadas em um mapa único (a validar na imersão).'],
    risks:['Retrabalho e reentrada de informação entre as áreas.','Gargalos que só aparecem sob volume de trabalho.','Dependência de pessoas-chave em tarefas críticas.'],
    actions:['Mapear o processo administrativo de ponta a ponta.','Padronizar rotinas e critérios entre as áreas.','Priorizar melhorias por impacto e esforço.'],
    impacts:['Fluxo administrativo mais claro e previsível.','Menos retrabalho entre comercial, engenharia e administrativo.','Base padronizada para automatizar e medir.']
  },
  {
    icon:'budget', title:'Orçamentação Inteligente',
    priority:{label:'Prioridade imediata', cls:'badge--prio'},
    evidence:'Desafio relatado',
    summary:'Estruturar um funil de orçamentos que controle o tempo de cada orçamento e priorize o esforço da engenharia pelos casos com maior potencial de conversão e valor, automatizando o que for repetitivo.',
    context:['O tempo gasto por orçamento varia muito e não é controlado de ponta a ponta.','Orçamentos demorados às vezes convertem pouco valor; rápidos às vezes convertem mais.','Boa parte do esforço da engenharia é consumida na fase de orçamento.'],
    risks:['Esforço concentrado em orçamentos de baixa conversão.','Perda de agilidade na resposta às oportunidades quentes.','Pouca visibilidade sobre o custo real de cada orçamento.'],
    actions:['Mapear e padronizar as etapas do processo de orçamento.','Criar critérios de priorização por potencial de conversão × esforço.','Automatizar etapas repetitivas e modelos de cálculo.'],
    impacts:['Resposta mais rápida aos orçamentos com maior chance de fechar.','Esforço da engenharia direcionado ao que gera mais valor.','Tempo de orçamento medido e sob controle.']
  },
  {
    icon:'engineer', title:'Produtividade da Engenharia',
    priority:{label:'Prioridade alta', cls:'badge--prio-alta'},
    evidence:'Desafio relatado',
    summary:'Dar visibilidade ao custo de horas e à ocupação dos engenheiros nos orçamentos e projetos, para liberar capacidade e direcionar o time ao que gera mais valor.',
    context:['Parte relevante das horas de engenharia é consumida em orçamentos.','O custo de horas e a ocupação por engenheiro ainda não são acompanhados por indicador.','Liberar tempo da engenharia é um objetivo declarado pela empresa.'],
    risks:['Capacidade técnica ocupada com tarefas de baixo valor agregado.','Dificuldade de dimensionar a equipe sem dados de ocupação.','Sobrecarga concentrada em profissionais-chave.'],
    actions:['Medir horas e ocupação por engenheiro e por tipo de tarefa.','Identificar atividades automatizáveis ou padronizáveis.','Redistribuir o esforço por capacidade e prioridade.'],
    impacts:['Mais tempo de engenharia disponível para projetos e valor.','Custo de horas visível e gerenciável.','Decisões de capacidade baseadas em dados.']
  },
  {
    icon:'integrate', title:'Integração de Sistemas',
    priority:{label:'Prioridade alta', cls:'badge--prio-alta'},
    evidence:'Contexto informado · validar',
    summary:'Integrar e padronizar as informações que hoje circulam entre o ClickUp e os demais controles, para um dado único e confiável que alimente os indicadores.',
    context:['A Solucon já utiliza o ClickUp em parte dos projetos.','Informações administrativas e de projeto podem estar distribuídas em diferentes controles.','A amplitude de uso das ferramentas ainda será detalhada na imersão.'],
    risks:['Informação duplicada ou divergente entre controles.','Esforço manual para consolidar dados.','Indicadores frágeis por falta de fonte única.'],
    actions:['Mapear onde cada informação nasce e é utilizada.','Padronizar campos e critérios no ClickUp e demais controles.','Integrar as fontes que alimentam os indicadores.'],
    impacts:['Dado único, confiável e reaproveitável.','Menos esforço manual de consolidação.','Base sólida para automação e indicadores.']
  },
  {
    icon:'finance', title:'Indicadores Financeiros',
    priority:{label:'Prioridade alta', cls:'badge--prio-alta'},
    evidence:'Frente padrão Lean',
    summary:'Estruturar os indicadores financeiros e gerenciais que a Lean sempre implanta, conectando processos e orçamentos ao resultado.',
    context:['Indicadores financeiros são a base de todo trabalho da Lean.','Conectar orçamento, horas e processos ao resultado amplia a gestão.','Um painel gerencial dá visibilidade para a tomada de decisão.'],
    risks:['Decisões baseadas em percepção, não em número.','Dificuldade de enxergar margem por projeto ou tipo de obra.','Resultado visível apenas no fechamento contábil.'],
    actions:['Definir os indicadores financeiros e gerenciais prioritários.','Estruturar um painel de acompanhamento.','Conectar os indicadores de processo ao resultado.'],
    impacts:['Visão clara de custo, margem e resultado.','Decisões apoiadas em dados.','Acompanhamento contínuo, não só no fechamento.']
  },
  {
    icon:'routine', title:'Rotina Gerencial e Decisão',
    priority:{label:'Oportunidade estratégica', cls:'badge--prio-estrat'},
    evidence:'Hipótese a validar',
    summary:'Implantar uma cadência de gestão que transforme os indicadores em decisão e melhoria contínua.',
    context:['Com processos e indicadores estruturados, cresce o valor de uma rotina de gestão.','Uma cadência regular mantém as melhorias vivas após a implantação.','A rotina conecta administrativo, engenharia e comercial em torno de metas.'],
    risks:['Melhorias que se perdem sem acompanhamento.','Indicadores criados, mas pouco usados na decisão.','Falta de ritual para priorizar e corrigir a rota.'],
    actions:['Definir a cadência de reuniões de indicadores.','Padronizar pauta e responsáveis.','Acompanhar metas e planos de ação.'],
    impacts:['Melhoria contínua sustentada.','Decisões mais rápidas e alinhadas.','Cultura de gestão por indicadores.']
  }
];

/* ---------- Impacto sistêmico ---------- */
const IMPACT = {
  antes:[
    {t:'Orçamentação', d:'Tempo por orçamento sem controle; esforço nem sempre direcionado aos casos de maior conversão.'},
    {t:'Engenharia', d:'Horas consumidas em orçamentos, com pouca visibilidade sobre ocupação e custo.'},
    {t:'Gestão', d:'Decisões apoiadas em percepção; informação espalhada entre controles.'}
  ],
  depois:[
    {t:'Orçamentação', d:'Funil padronizado que prioriza por potencial de conversão e mede o tempo de cada orçamento.'},
    {t:'Engenharia', d:'Ocupação e custo de horas acompanhados por indicador; mais tempo livre para o que gera valor.'},
    {t:'Gestão', d:'Dado único e indicadores financeiros que sustentam a decisão e a melhoria contínua.'}
  ]
};

/* =================================================================
   INICIALIZAÇÃO
================================================================= */
document.addEventListener('DOMContentLoaded', () => {

  const accessEl = document.getElementById('access');
  const siteEl = document.getElementById('site');

  /* ----- Sessão ----- */
  function openSite(){
    accessEl.style.display = 'none';
    siteEl.hidden = false;
    window.scrollTo(0,0);
  }
  if (sessionStorage.getItem('solucon_ok') === '1') openSite();

  /* ----- Acesso ----- */
  const form = document.getElementById('access-form');
  const pass = document.getElementById('password');
  const errEl = document.getElementById('access-error');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pass.value === PASSWORD){
      sessionStorage.setItem('solucon_ok','1');
      errEl.hidden = true;
      openSite();
    } else {
      errEl.hidden = false;
      pass.value = '';
      pass.focus();
    }
  });

  const toggle = document.getElementById('toggle-pass');
  toggle.addEventListener('click', () => {
    const show = pass.type === 'password';
    pass.type = show ? 'text' : 'password';
    toggle.textContent = show ? 'Ocultar' : 'Mostrar';
    toggle.setAttribute('aria-label', show ? 'Ocultar senha' : 'Mostrar senha');
  });

  document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.removeItem('solucon_ok');
    location.reload();
  });

  /* ----- Ecossistema ----- */
  document.getElementById('eco-grid').innerHTML = ECO.map(c => `
    <article class="eco__card">
      <div class="eco__icon">${IC[c.ic]}</div>
      <h4>${c.t}</h4>
      <p>${c.d}</p>
    </article>`).join('');

  /* ----- Diagnóstico ----- */
  const tabsEl = document.getElementById('diag-tabs');
  const panelsEl = document.getElementById('diag-panels');
  const quad = (mod,label,items) => `
    <div class="quad quad--${mod}">
      <div class="quad__label"><span class="quad__dot"></span>${label}</div>
      <ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul>
    </div>`;

  FRENTES.forEach((f, i) => {
    const tab = document.createElement('button');
    tab.className = 'diag__tab' + (i===0?' is-active':'');
    tab.setAttribute('role','tab');
    tab.setAttribute('aria-selected', i===0?'true':'false');
    tab.setAttribute('aria-controls', `panel-${i}`);
    tab.id = `tab-${i}`;
    tab.tabIndex = i===0?0:-1;
    tab.innerHTML = `<span class="diag__tab-ic">${IC[f.icon]}</span>
      <span><span class="diag__tab-num">Frente ${String(i+1).padStart(2,'0')}</span><br>
      <span class="diag__tab-title">${f.title}</span></span>`;
    tabsEl.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'diag__panel' + (i===0?' is-active':'');
    panel.id = `panel-${i}`;
    panel.setAttribute('role','tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${i}`);
    panel.innerHTML = `
      <div class="diag__panel-head">
        <div class="diag__badges">
          <span class="badge ${f.priority.cls}">${f.priority.label}</span>
          <span class="badge badge--evid">${f.evidence}</span>
        </div>
        <h4 class="diag__panel-title">${f.title}</h4>
        <p class="diag__panel-summary">${f.summary}</p>
      </div>
      <div class="diag__quads">
        ${quad('ctx','Contexto atual', f.context)}
        ${quad('risk','Riscos', f.risks)}
        ${quad('act','Ações propostas', f.actions)}
        ${quad('imp','Impactos esperados', f.impacts)}
      </div>`;
    panelsEl.appendChild(panel);
  });

  const tabs = [...tabsEl.querySelectorAll('.diag__tab')];
  const panels = [...panelsEl.querySelectorAll('.diag__panel')];
  function selectTab(idx){
    tabs.forEach((t,j)=>{
      const on = j===idx;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on?'true':'false');
      t.tabIndex = on?0:-1;
      panels[j].classList.toggle('is-active', on);
    });
  }
  tabs.forEach((t,idx)=>{
    t.addEventListener('click',()=>selectTab(idx));
    t.addEventListener('keydown',(e)=>{
      let ni=null;
      if(e.key==='ArrowRight'||e.key==='ArrowDown') ni=(idx+1)%tabs.length;
      if(e.key==='ArrowLeft'||e.key==='ArrowUp') ni=(idx-1+tabs.length)%tabs.length;
      if(e.key==='Home') ni=0;
      if(e.key==='End') ni=tabs.length-1;
      if(ni!==null){e.preventDefault();selectTab(ni);tabs[ni].focus();}
    });
  });

  /* ----- Impacto sistêmico ----- */
  const impactGrid = document.getElementById('impact-grid');
  function renderImpact(scn){
    const after = scn==='depois';
    impactGrid.innerHTML = IMPACT[scn].map(c=>`
      <div class="impact__card ${after?'is-after':''}">
        <span class="impact__tag ${after?'impact__tag--next':'impact__tag--now'}">${after?'Após as melhorias':'Cenário atual'}</span>
        <h4>${c.t}</h4>
        <p>${c.d}</p>
      </div>`).join('');
  }
  renderImpact('antes');
  document.querySelectorAll('.switch__btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.switch__btn').forEach(b=>b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderImpact(btn.dataset.scenario);
    });
  });

  /* ----- Menu mobile ----- */
  const nav = document.getElementById('nav');
  const burger = document.getElementById('menu-toggle');
  burger.addEventListener('click',()=>{
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open?'true':'false');
  });
  nav.querySelectorAll('.nav__link').forEach(l=>l.addEventListener('click',()=>{
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded','false');
  }));

  /* ----- Progresso + navegação ativa ----- */
  const bar = document.getElementById('progress-bar');
  const sections = [...document.querySelectorAll('section[id]')];
  const links = [...nav.querySelectorAll('.nav__link')];
  function onScroll(){
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.width = Math.min(100, scrolled*100) + '%';
    let current = sections[0]?.id;
    const y = h.scrollTop + 120;
    sections.forEach(s=>{ if(s.offsetTop <= y) current = s.id; });
    links.forEach(l=>l.classList.toggle('is-active', l.getAttribute('href') === '#'+current));
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
});
