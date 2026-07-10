import type { Translation } from './utils';

// PT-BR, primary market dictionary. Content mirrors what the site
// published in Portuguese through waves 1 & 2 before the global
// re-positioning; voice is preserved (vanguard-but-grounded).
const pt: Translation = {
  meta: {
    siteName: 'D.Lab Experts',
    sealLine: 'Applied Intelligence Research',
    ogSiteName: 'D.Lab Experts',
    orgDescription:
      'Agência e consultoria de implementação de IA. Diagnóstico, agentes e automações com impacto medido para pequenas e médias empresas.',
  },

  nav: {
    home: 'Início',
    about: 'Sobre',
    segments: 'Pesquisa',
    howItWorks: 'Como funciona',
    products: 'Implementação de IA',
    blog: 'Blog',
    solucoes: 'Serviços',
    contato: 'Contato',
    collaborate: 'Colaborar',
    hub: 'Conteúdo',
    ariaLogo: 'D.Lab Experts, ir para a home',
    ariaOpenMenu: 'Abrir menu',
    ctaProblem: 'Pedir diagnóstico →',
    langSwitcherLabel: 'Idioma',
  },

  pageTitles: {
    // DRAFT: confirmar copy — posicionamento de home virado para
    // implementação de IA baseada em evidência (pesquisa = motor).
    home: 'D.Lab Experts · Implementação de IA baseada em evidência',
    homeDescription:
      'D.Lab Experts implementa IA e agentes para elevar a eficiência e a margem de médias empresas e scaleups, com diagnóstico que prova onde vale e impacto medido antes e depois.',
    about: 'Sobre | D.Lab Experts · Agência de IA',
    aboutDescription:
      'D.Lab Experts é uma agência e consultoria de implementação de IA para pequenas e médias empresas. Diagnóstico, agentes e automações sob medida, com impacto medido antes e depois.',
    blog: 'Análises Públicas | D.Lab Experts · Research Hub',
    blogDescription:
      'Pesquisas, análises e cases publicados pelo D.Lab Experts como prova pública do método. Inteligência de dados em fontes abertas, raciocínio exposto e dados auditáveis.',
    contato: 'Contato | D.Lab Experts · Agência de IA',
    contatoDescription:
      'Fale com o D.Lab Experts sobre implementação de IA na sua empresa. Conta o processo que trava na sua operação e a gente propõe por onde começar. Respondemos em até um dia útil.',
    solucoes: 'Serviços de IA | D.Lab Experts',
    solucoesDescription:
      'Os serviços de implementação de IA do D.Lab: atendimento 24/7, qualificação de leads, automação de operações, leitura de documentos e decisão com dados. Diagnóstico, implementação e impacto medido.',
    diagnostic: 'Diagnóstico de Decisão | D.Lab Experts · Research Hub',
    diagnosticDescription:
      'Quantifique o risco de decidir sem dados. Cinco entradas, duas saídas, cada coeficiente ancorado em pesquisa revisada.',
    componentesIa: 'Componentes para uso de IA | D.Lab Experts',
    componentesIaDescription:
      'Repositório aberto de skills, componentes e workflows para acoplar a sistemas de IA. Curadoria do D.Lab Experts, com download direto e metodologia documentada.',
    componentesIaResearchStats: 'Research & Statistics Engine — Skill Claude | D.Lab Experts',
    componentesIaResearchStatsDescription:
      'Skill para Claude Code que opera como pesquisador quantitativo sênior: estatística, análise de dados, epidemiologia e inteligência de mercado. Download direto, metodologia aberta.',
    imprensa: 'Imprensa | D.Lab Experts · Research Hub',
    imprensaDescription:
      'Kit de imprensa do D.Lab Experts: contato de mídia, bios dos pesquisadores, logos em alta resolução, principais achados das pesquisas publicadas e ativos gráficos para download.',
    colaborar: 'Colaborar | D.Lab Experts · Research Hub',
    colaborarDescription:
      'O D.Lab Experts é um Research Hub aberto a colaboradores. Proponha uma pesquisa, submeta um estudo, compartilhe dados ou participe como peer reviewer. Pesquisa é trabalho coletivo.',
    notFound: 'Página não encontrada | D.Lab Experts',
    notFoundDescription:
      'A página que você procurou não existe ou foi movida. Voltar para a home do D.Lab Experts ou explorar as análises públicas.',
    obrigado: 'Mensagem recebida | D.Lab Experts',
    obrigadoDescription:
      'Sua mensagem chegou ao D.Lab Experts. Respondemos em até 1 dia útil com leitura do contexto e próximos passos.',
  },

    // DRAFT: confirmar copy — virada de núcleo para implementação de IA
    // baseada em evidência. DNA anti-hype preservado ("instrumentar o que
    // a evidência prova", não automatizar no hype).
  hero: {
    figureAlt: 'Ilustração futurista da marca D.Lab Experts: figura sobre fundo escuro com brilho lilás.',
    eyebrow: 'IMPLEMENTAÇÃO DE IA · COM PROVA',
    taglineLine1: 'IA que vira',
    taglineLine2: '',
    taglineAccentWord: 'resultado',
    taglineLine3: 'na sua empresa.',
    sub: 'A gente implementa IA e agentes na sua operação pra você gastar menos tempo e dinheiro e ganhar margem. Começamos provando onde vale, e medimos o resultado antes e depois. Sem hype, sem promessa vazia.',
    ctaPrimary: 'Pedir diagnóstico →',
    ctaSecondary: 'Ver como funciona',
    proof1Val: 'N=98',
    proof1Lbl: 'amostra do estudo de gaming, protocolo STROBE',
    proof2Val: '87.8%',
    proof2Lbl: 'acreditam que campanhas afirmativas geram impacto real',
    proof3Val: '16.3%',
    proof3Lbl: 'acreditam que marcas agem por motivação genuína',
    proof4Val: '3.48×',
    proof4Lbl: 'mais propensos a trocar de marca por compromisso social comprovado',
    proof5Val: 'STROBE',
    proof5Lbl: 'protocolo de relato seguido na pesquisa',
    // DRAFT: rótulo que deixa claro — é prova de método/rigor (pesquisa
    // publicada), não resultado de implementação de IA (item 6).
    proofLabel: 'Como pesquisamos · rigor da pesquisa publicada — não são resultados de implementação de IA',
    // DRAFT placeholder (item 6): substituir pelos números reais de
    // implementação quando houver case (ex.: diagnósticos entregues,
    // processos automatizados, impacto medido antes→depois).
    proofNote: 'Prova de implementação de IA entra aqui assim que o primeiro case for liberado — diagnósticos, processos automatizados e impacto medido.',
  },

  // DRAFT: confirmar copy — faixa "para quem é" logo abaixo do herói,
  // ancorando o público (médias empresas e scaleups) em uma linha.
  paraQuem: {
    label: 'Para quem é',
    text: 'Para pequenas e médias empresas e scaleups que querem usar IA pra ganhar eficiência e margem — com método e prova, não com hype.',
    chip1: 'Escalar sem inchar o custo',
    chip2: 'Decisão ancorada em dado',
    chip3: 'Processos prontos pra automatizar',
  },

  // DRAFT: confirmar copy — bento "prova" (claro). Mostra MÉTODO + IMPACTO
  // MEDIDO. Números reais entram como {{placeholder}} (nada inventado).
  bento: {
    label: 'A prova',
    title: 'Método à mostra,',
    titleAccent: 'impacto medido.',
    sub: 'O que separa adoção de IA com evidência de promessa de palco: a gente expõe o método e mede o antes e o depois.',

    methodLabel: 'Método',
    methodTitle: 'Três passos, sempre rastreáveis',
    methodStep1: 'Diagnóstico',
    methodStep2: 'Implementação',
    methodStep3: 'Medição',
    methodDesc: 'Diagnóstico antes de automatizar, implementação sênior e impacto medido. Sem caixa-preta em nenhum ponto.',

    impactLabel: 'Impacto medido',
    impactTitle: 'Antes → depois',
    impactBefore: 'Antes',
    impactBeforeVal: '{{ baseline }}',
    impactAfter: 'Depois',
    impactAfterVal: '{{ resultado }}',
    impactNote: 'Placeholder — entra com o primeiro case real, sem número inventado.',

    statLabel: 'Em números',
    statVal: '{{ N }}',
    statDesc: 'processos automatizados e diagnósticos entregues. Entra quando houver dado real.',

    caseLabel: 'Case',
    caseTitle: 'O seu próximo case aqui',
    caseDesc: 'Quando um cliente liberar, o teaser entra neste card — imagem, resultado e link.',
  },

  trust: {
    title: 'Padrões D.Lab',
    ndaVal: 'NDA',
    ndaLbl: 'Confidencialidade como padrão',
    seniorVal: 'Sênior',
    seniorLbl: 'Do briefing à entrega, sempre o analista sênior',
    dualVal: 'Dual',
    dualLbl: 'Decisão e engenharia de dados na mesma operação',
    methodVal: 'Método',
    methodLbl: 'Cada etapa rastreável, zero caixa-preta',
    openVal: 'Sob medida',
    openLbl: 'Feito pra sua operação, não um produto genérico',
  },

  brand: {
    title: 'O mundo se moveu pra frente',
    titleAccent: 'das próprias decisões.',
    desc: 'LLMs e agentes comprimiram os prazos de decisão e elevaram o custo do erro. Publicamos pesquisa aberta porque a alternativa é palpite, e palpite ficou caro.',
  },

  how: {
    eyebrow: 'Metodologia Aberta',
    title: 'Como pesquisamos',
    sub: 'Da pergunta à publicação, cada etapa documentada e exposta, reprodutibilidade no lugar de mística.',
    step1Title: 'Hipótese',
    step1Desc: 'Formulamos a pergunta de pesquisa e fixamos a hipótese. O que ainda não sabemos, e que evidência mudaria nossa posição.',
    step2Title: 'Coleta',
    step2Desc: 'Cruzamos APIs públicas, bases abertas, scraping e pesquisa primária. Fontes e instrumentação documentadas pra que o achado seja reproduzível.',
    step3Title: 'Síntese',
    step3Desc: 'Dados brutos viram insights estruturados com raciocínio exposto. O caminho do dado à interpretação faz parte da publicação, não é caixa-preta.',
    step4Title: 'Publicação',
    step4Desc: 'O achado sai com método, fontes e raciocínio do analista intactos. Pesquisa aberta vai a público; projetos sob NDA entregam o mesmo rastro de forma confidencial.',
    sourcesLabel: 'Fontes que cruzamos',
    sourceApis: 'APIs: Google Maps, Places, Ads',
    sourceOpen: 'Bases abertas: IBGE, DataSUS, censos oficiais',
    sourceTrends: 'Sinais de busca: Google Trends',
    sourceScraping: 'Scraping de marketplaces: preço, volume, sentimento',
    sourceWeb: 'Inteligência web: SimilarWeb, SEMrush',
    sourcePrimary: 'Pesquisa primária: surveys, entrevistas',
  },

  // DRAFT: confirmar copy — "Como funciona" em chave de mercado, amigável
  // para médias empresas e scaleups. Traduz a escada (Diagnóstico →
  // Implementação → Acompanhamento) em jornada sem jargão, com entregável
  // por passo e uma faixa que derruba o medo de "projeto de IA".
  comoFunciona: {
    eyebrow: 'Como funciona',
    title: 'Da dúvida ao resultado,',
    titleAccent: 'em três passos simples.',
    sub: 'Sem hype, sem caixa-preta e sem travar a sua operação. A gente começa provando onde a IA vale e só avança no que dá retorno de verdade.',

    // Rótulos curtos dos slots de mídia (captions dos 3 passos).
    mediaDiagnosis: 'Diagnóstico',
    mediaImplementation: 'Implementação',
    mediaMeasurement: 'Medição',
    // Alt text descritivo das mesmas mídias (acessibilidade + AEO).
    mediaDiagnosisAlt: 'Etapa de diagnóstico: mapa do processo da empresa apontando onde a IA gera retorno.',
    mediaImplementationAlt: 'Etapa de implementação: agentes e automações de IA integrados à operação.',
    mediaMeasurementAlt: 'Etapa de medição: painel comparando indicadores da operação antes e depois da IA.',
    step1Tag: 'Passo 1',
    step1Title: 'Diagnóstico',
    step1Desc: 'Olhamos sua operação e provamos onde a IA dá retorno de verdade.',
    step1Deliver: 'Você recebe: um mapa de prioridades, em documento e apresentação.',

    step2Tag: 'Passo 2',
    step2Title: 'Implementação',
    step2Desc: 'Construímos os agentes e automações dentro do seu processo.',
    step2Deliver: 'Você recebe: a solução rodando na sua operação.',

    step3Tag: 'Passo 3',
    step3Title: 'Medição',
    step3Desc: 'Mostramos o resultado com número: antes e depois.',
    step3Deliver: 'Você recebe: o impacto medido, antes e depois.',

    reassureLabel: 'Por que é seguro começar',
    reassure1: 'Começa pequeno e prova primeiro. Sem cheque em branco.',
    reassure2: 'Sem caixa-preta: você entende cada passo e cada número.',
    reassure3: 'Impacto medido, nunca percentual prometido às cegas.',
    reassure4: 'Feito sob medida pra sua operação, não um produto genérico.',

    cta: 'Pedir diagnóstico →',
    ctaNote: 'Conversa inicial sem compromisso. A gente responde em até 1 dia útil.',
  },

  // Casos de uso concretos (linguagem de PME). Cada card:
  // problema → o que a IA faz → resultado (métrica de mercado, rotulada).
  // Nenhum número aqui é resultado de cliente do D.Lab — são referências
  // de mercado pra dar tangibilidade. DRAFT: ajustar com cases reais.
  casos: {
    eyebrow: 'Casos de uso',
    title: 'Onde a IA já dá resultado',
    titleAccent: 'na sua empresa.',
    sub: 'Não é IA genérica: a gente acopla agentes e automações nos processos que já existem na sua operação. Veja onde costuma valer mais.',
    metricNote: 'Métricas abaixo são referências de mercado, não resultados de clientes do D.Lab.',

    c1Tag: 'Atendimento / SAC',
    c1Title: 'Atendimento 24/7',
    c1Problem: 'Fila de atendimento cresce e a equipe não dá conta no horário de pico.',
    c1Does: 'Agente responde dúvidas e tria a demanda na hora, dia e noite, e passa pro humano só o que importa.',
    c1Metric: '−40% no tempo de resposta',
    c1MetricNote: 'estimativa de mercado',

    c2Tag: 'Comercial',
    c2Title: 'Qualificação de leads',
    c2Problem: 'Lead chega e esfria antes de alguém responder.',
    c2Does: 'Automação qualifica e faz o follow-up dos leads sem deixar oportunidade parada.',
    c2Metric: '+30% em leads trabalhados',
    c2MetricNote: 'estimativa de mercado',

    c3Tag: 'Operações',
    c3Title: 'Tarefas repetitivas',
    c3Problem: 'Time gasta horas em rotina manual e montagem de relatório.',
    c3Does: 'Automação executa as rotinas e monta os relatórios sozinha, no padrão da casa.',
    c3Metric: 'Horas/semana de volta ao time',
    c3MetricNote: 'referência de mercado',

    c4Tag: 'Financeiro',
    c4Title: 'Leitura de documentos',
    c4Problem: 'Notas, boletos e contratos exigem digitação e conferência manual.',
    c4Does: 'IA lê e concilia documentos e notas, sinalizando só as exceções.',
    c4Metric: '−50% no tempo de conciliação',
    c4MetricNote: 'estimativa de mercado',

    c5Tag: 'Dados & decisão',
    c5Title: 'Decisão com dados',
    c5Problem: 'Os números estão espalhados e a resposta demora dias.',
    c5Does: 'Dashboards e análises sob demanda, em linguagem de negócio, prontos quando você precisa.',
    c5Metric: 'Resposta em minutos, não dias',
    c5MetricNote: 'referência de mercado',

    cta: 'Ver todos os serviços →',
  },

  // Faixa única de "prova/números" — SOMENTE referências de mercado,
  // rotuladas como tal. Não são resultados de clientes do D.Lab.
  provaMercado: {
    eyebrow: 'Por que agora',
    title: 'O potencial da IA já é mercado,',
    titleAccent: 'não promessa.',
    disclaimer: 'Referências de mercado e benchmarks públicos — não são resultados de clientes do D.Lab.',
    s1Val: '60–70%',
    s1Lbl: 'das tarefas de atendimento podem ser apoiadas ou automatizadas por IA',
    s1Src: 'estimativa de mercado',
    s2Val: 'até +40%',
    s2Lbl: 'de produtividade em tarefas de conhecimento com assistentes de IA',
    s2Src: 'benchmark de mercado',
    s3Val: '24/7',
    s3Lbl: 'operação sem fila e sem hora extra, com agentes sempre de plantão',
    s3Src: 'característica da solução',
    s4Val: 'semanas',
    s4Lbl: 'até o primeiro resultado medido, começando pequeno pelo diagnóstico',
    s4Src: 'média dos nossos projetos',
  },

  // Teaser que leva pra aba Soluções (conteúdo detalhado com e-mail).
  solucoesTeaser: {
    eyebrow: 'Nossos serviços',
    title: 'Serviços de IA sob medida',
    titleAccent: 'pro seu processo.',
    sub: 'Implementação de IA do diagnóstico ao impacto medido — atendimento, comercial, operações, financeiro e dados. (As ferramentas gratuitas ficam no Blog.)',
    cta: 'Ver nossos serviços →',
    note: 'Sob medida · do diagnóstico ao impacto medido.',
  },

  // Slot de vídeo do D.Lab (substitui o antigo card "próximo case").
  videoSec: {
    eyebrow: 'D.Lab em vídeo',
    title: 'Veja o D.Lab',
    titleAccent: 'em movimento.',
    sub: 'Um panorama rápido de como a gente implementa IA na prática — do diagnóstico ao impacto medido.',
    label: 'Vídeo do D.Lab em breve',
  },

  // Grid de soluções com e-mail-gate (captura de lead via Formspree).
  // Cada solução tem prévia aberta + passo a passo liberado por e-mail.
  solGate: {
    eyebrow: 'O que entregamos',
    title: 'Serviços de IA prontos pra acoplar',
    titleAccent: 'na sua operação.',
    sub: 'Cada serviço começa por um diagnóstico, é construído sob medida pra sua operação e tem impacto medido antes e depois. Veja o que entra em cada um.',

    gateTitle: 'Desbloqueie o passo a passo de todos os serviços',
    gateSub: 'Deixe seu e-mail e a gente libera o conteúdo detalhado aqui na hora.',
    emailLabel: 'Seu melhor e-mail',
    emailPlaceholder: 'voce@empresa.com',
    consentPre: 'Concordo em receber conteúdos do D.Lab por e-mail e com a ',
    consentLink: 'Política de Privacidade',
    consentPost: '.',
    submit: 'Desbloquear serviços',
    sending: 'Enviando…',
    success: 'Pronto! Conteúdo liberado — obrigado.',
    error: 'Não consegui enviar agora. Tente de novo ou fale com a gente no WhatsApp.',
    consentRequired: 'Marque o consentimento para continuar.',
    detailLabel: 'O que a implementação inclui',
    cardCta: 'Quero esse serviço →',
    lockedLabel: 'Conteúdo por e-mail',
    unlockedLabel: 'Desbloqueado',

    s1Tag: 'Atendimento / SAC',
    s1Title: 'Atendimento 24/7 com agente',
    s1Teaser: 'Um agente responde e tria a demanda dia e noite, e passa pro humano só o que importa.',
    s1d1: 'Mapeamento das perguntas e fluxos mais comuns do seu atendimento',
    s1d2: 'Agente conectado ao seu canal (WhatsApp, site ou e-mail)',
    s1d3: 'Regras de escalonamento e medição de tempo de resposta antes/depois',

    s2Tag: 'Comercial',
    s2Title: 'Qualificação e follow-up de leads',
    s2Teaser: 'Automação qualifica e acompanha os leads sem deixar oportunidade esfriar.',
    s2d1: 'Captura e qualificação automática dos leads que chegam',
    s2d2: 'Follow-up em sequência, integrado ao seu CRM ou planilha',
    s2d3: 'Painel de leads trabalhados e taxa de resposta',

    s3Tag: 'Operações',
    s3Title: 'Automação de tarefas repetitivas',
    s3Teaser: 'Rotinas e relatórios que tomam horas da equipe passam a rodar sozinhos.',
    s3d1: 'Levantamento das rotinas manuais que mais consomem tempo',
    s3d2: 'Automação dos processos e geração de relatórios no padrão da casa',
    s3d3: 'Acompanhamento de horas economizadas por semana',

    s4Tag: 'Financeiro',
    s4Title: 'Leitura e conciliação de documentos',
    s4Teaser: 'IA lê e concilia notas e documentos, sinalizando só as exceções.',
    s4d1: 'Leitura automática de notas, boletos e contratos',
    s4d2: 'Conciliação e extração de dados para o seu sistema',
    s4d3: 'Fila de exceções para revisão humana, com trilha auditável',

    s5Tag: 'Dados & decisão',
    s5Title: 'Dashboards e análise sob demanda',
    s5Teaser: 'Os números espalhados viram resposta em linguagem de negócio, quando você precisa.',
    s5d1: 'Unificação das fontes de dados que você já tem',
    s5d2: 'Dashboards e respostas em linguagem natural sobre os seus dados',
    s5d3: 'Indicadores definidos junto com o seu time',
  },

  // Banner/régua no Blog promovendo as FERRAMENTAS GRÁTIS (não são
  // serviços pagos). Conteúdo aberto, sem cadastro.
  blogTools: {
    label: 'Ferramentas grátis',
    title: 'Ferramentas gratuitas do D.Lab',
    sub: 'Conteúdo aberto, sem cadastro — feito pra você usar agora.',
    tool1Name: 'Diagnóstico de Decisão',
    tool1Desc: 'Quantifique em ~60s o risco de decidir sem dados. 5 entradas, método aberto.',
    tool1Cta: 'Abrir diagnóstico →',
    tool1Href: '/diagnostico',
    tool2Name: 'Componentes para uso de IA',
    tool2Desc: 'Repositório aberto de skills e workflows pra acoplar a sistemas de IA. Download direto.',
    tool2Cta: 'Explorar componentes →',
    tool2Href: '/componentes-ia',
  },

  // DRAFT: confirmar copy — visual "IA em ação". Console de agente
  // animado (ilustrativo, sem números inventados) que sinaliza que o
  // D.Lab constrói os agentes, não só fala de IA.
  aiDemo: {
    label: 'IA em ação',
    title: 'A gente constrói os agentes',
    titleAccent: 'que rodam por dentro da operação.',
    caption: 'Ilustrativo: um agente do D.Lab triando demanda, decidindo e propondo automação — sempre com impacto medido antes e depois, não prometido.',
    chrome: 'agente · d.lab',
    live: 'ativo',
    l1: 'tarefa: reduzir o tempo de resposta ao cliente',
    l2: 'lendo a fila de atendimento',
    l3: 'encontrando padrões repetidos',
    l4: 'ferramenta: classificar + rotear',
    l5: 'automação proposta · impacto medido antes → depois',
  },

  segments: {
    // DRAFT: confirmar copy — reenquadrado de "linhas de pesquisa" para
    // "frentes" (pesquisa + aplicação), após sair Política e entrar
    // Automação e Otimização.
    eyebrow: 'Pesquisa & Aplicação',
    title: 'Seis frentes.',
    titleAccent: 'Um único protocolo.',
    sub: 'Da pesquisa aplicada à implementação: as frentes contínuas que orientam as publicações do Research Hub e os projetos sob NDA. Do comportamento de consumidor à automação de processos, o mesmo rigor metodológico.',

    marketTag: 'Mercado & Público',
    marketName: 'Mercados & Comportamento',
    marketDesc:
      'Investigamos quem é o consumidor real, onde está e como a demanda se move. Publicamos o padrão que persona genérica não captura.',
    marketSample1: 'Perfil de público',
    marketSample2: 'Dimensionamento de mercado',
    marketSample3: 'Análise de demanda',

    stratTag: 'Estratégia',
    stratName: 'Estratégia & Decisão',
    stratDesc:
      'Pesquisa sobre dimensionamento, posicionamento e janelas de oportunidade. Para apostas de peso, board, founder, fundo, que não aguentam palpite de reunião.',
    stratSample1: 'Análise estratégica',
    stratSample2: 'Consultoria competitiva',
    stratSample3: 'Benchmarking setorial',

    // DRAFT: confirmar copy — novo front (substitui Política).
    autoTag: 'Automação',
    autoName: 'Implementação & Automação',
    autoDesc:
      'Implementação de processos automatizados e acoplagem de IA e agentes à operação. Pesquisamos o que vale automatizar e construímos a ponte do diagnóstico até a execução em produção.',
    autoSample1: 'Automação de processos',
    autoSample2: 'Agentes em operação',
    autoSample3: 'Integração de IA',

    // DRAFT: confirmar copy — novo front.
    optTag: 'Otimização',
    optName: 'Otimização de Áreas & Setores',
    optDesc:
      'Diagnóstico e redesenho de áreas e setores para destravar eficiência. Gargalos mapeados com dado, prioridades claras e melhoria acompanhada até o ganho se sustentar.',
    optSample1: 'Diagnóstico de área',
    optSample2: 'Redesenho de processo',
    optSample3: 'Eficiência operacional',

    foresightTag: 'Foresight',
    foresightName: 'Foresight Tech & IA',
    foresightDesc:
      'Onde IA, LLMs e agentes estão reconfigurando decisão, trabalho e risco. Linha vanguard do Hub, para quem precisa se mover antes do setor inteiro enxergar o sinal.',
    foresightSample1: 'IA & Agentes',
    foresightSample2: 'Foresight setorial',
    foresightSample3: 'Sinais fracos',

    compTag: 'Concorrência',
    compName: 'Inteligência Competitiva',
    compDesc:
      'Pesquisa sobre os concorrentes reais, não os da sua cabeça. Força, posicionamento, pontos cegos e o que eles ainda não viram. Publicamos metodologia, detalhe setorial vira projeto sob NDA.',
    compSample1: 'Análise de concorrentes',
    compSample2: 'Benchmarking de mercado',
    compSample3: 'Posicionamento estratégico',

    cyberTag: 'Cyber',
    cyberName: 'Cyber Research & CVE',
    cyberDesc:
      'Pesquisa aplicada em segurança ofensiva com metodologia explícita e forte ênfase em dados. Partimos de vulnerabilidades públicas (CVE) e reproduzimos o caminho da falha em ambiente controlado para medir o que ela significa em produção, não no paper. Publicamos o método, a cadeia de exploração e o impacto observado, para que o defensor leia a ameaça pelo mesmo ângulo de quem ataca.',
    cyberSample1: 'Análise de CVEs',
    cyberSample2: 'Impacto em produção',
    cyberSample3: 'Cadeias de exploração',
  },

  // DRAFT: confirmar copy — núcleo comercial agora é implementação de IA.
  // A oferta vira uma escada (Diagnóstico → Implementação → Retainer) e a
  // pesquisa sob NDA aparece como motor de evidência, não como flagship.
  products: {
    eyebrow: 'Como trabalhamos',
    title: 'Da evidência',
    titleAccent: 'à IA em produção.',
    sub: 'O diferencial é adoção de IA baseada em evidência: diagnosticamos onde a IA move eficiência e margem antes de automatizar, implementamos com rigor sênior e medimos o impacto antes e depois. Promessa ousada na vitrine, honesta no mecanismo, nunca percentual garantido às cegas.',
    lead: 'Não vendemos automação no hype. A gente parte da evidência: um diagnóstico prova onde a IA move o ponteiro de eficiência e margem na sua operação, e só entra em produção o que esse diagnóstico sustenta. A pesquisa aberta do Hub é o motor que mantém esse rigor afiado; quando o contexto é seu, ela vira projeto fechado sob NDA.',
    closing: 'Não temos tabela de preços. Cada engajamento é desenhado a partir do que o diagnóstico revela, e a primeira conversa serve para enquadrar onde a IA tem mais a provar na sua operação.',
    oneCta: 'Pedir diagnóstico →',
    ctaMost: '★ Porta de entrada',

    // Escada de adoção de IA — Diagnóstico (porta) → Implementação (core,
    // medição antes/depois) → Retainer (recorrência).
    ladderHeader: 'Implementação de IA · escada de adoção',
    ladderStep1Name: 'Diagnóstico de IA',
    ladderStep1Desc:
      'A porta de entrada, baseada em evidência. Mapeamos onde a IA move eficiência e margem na sua operação e entregamos um roadmap priorizado, como documento e apresentação. Diagnóstico antes de automatizar.',
    ladderStep2Name: 'Implementação',
    ladderStep2Desc:
      'O core. Construímos e instrumentamos IA e agentes nos seus processos, com rigor sênior e impacto medido antes e depois. Só vai para produção o que a evidência sustenta.',
    ladderStep3Name: 'Retainer · Managed AI',
    ladderStep3Desc:
      'A recorrência. Otimização contínua, novas automações e monitoramento do que já roda, para o ganho se sustentar e compor ao longo do tempo.',

    // O motor de evidência: pesquisa sob NDA (antes flagship, agora suporte).
    researchHeader: 'Pesquisa & evidência sob NDA · o motor',
    researchName: 'Relatório sob NDA',
    researchDesc:
      'Quando a decisão pede a mesma pesquisa que publicamos no Hub, aplicada ao seu contexto: inteligência competitiva e estudos de comportamento com método científico, confidenciais. É o motor de evidência que alimenta a implementação.',
    researchOptName: 'Otimização de Áreas & Setores',
    researchOptDesc:
      'Diagnóstico e redesenho de áreas e setores para destravar eficiência: gargalos mapeados com dado, prioridades claras e acompanhamento até a melhoria se sustentar.',
  },

  // DRAFT: confirmar copy — blog/pesquisa como conteúdo gratuito para
  // fundadores e operadores curiosos. Motor de autoridade/inbound, não
  // o produto.
  research: {
    eyebrow: 'Blog & Pesquisa aberta',
    title: 'Conteúdo gratuito.',
    titleAccent: 'Pra quem decide e constrói.',
    sub: 'Nosso blog: análises e pesquisa original pra fundador e operador curioso entender como IA, dados e mercado se movem de verdade, com o método à mostra. Aberto e gratuito, sempre. Trabalho de cliente nunca é divulgado: sempre sob NDA.',
    cta: 'Ver todo o conteúdo',
    readCta: 'Ler',
  },

  about: {
    eyebrow: 'Sobre o D.Lab Experts',
    title: 'Rigor de laboratório.',
    titleAccent: 'Pegada vanguardista.',
    sub: 'Research Hub em inteligência aplicada. Pesquisamos, testamos e publicamos como prova de método.',
    p1: 'O D.Lab Experts nasceu de uma <strong>premissa</strong>: decisão estratégica ainda é <em>majoritariamente palpite</em> em boa parte do mundo, e agora <strong>o risco ficou mais caro</strong>. LLMs e agentes aceleram a execução, mas <strong>o custo de decidir no escuro subiu junto</strong>.',
    p2: 'Somos um <strong>Research Hub em inteligência aplicada</strong>: pesquisamos, testamos e publicamos como prova de método. Cruzamos <strong>fontes públicas, APIs e dados primários</strong> para responder o que trava decisão, quem é o concorrente real, onde está o mercado, <em>qual a próxima aposta viável</em>.',
    p3: '',
    p4: 'Publicamos o método. <strong>Análise aberta como prova de como pensamos.</strong> Trabalho sob <strong>NDA</strong> vira frente de consultoria quando alguém precisa do <strong>mesmo rigor</strong> aplicado ao próprio contexto. <em>O resto é ruído.</em>',
    ctaAbout: 'Conheça o D.Lab Experts →',
    pillarMethodTitle: 'Rigor metodológico',
    pillarMethodDesc: 'Cada análise com metodologia documentada e replicável',
    pillarPrimaryTitle: 'Dados primários',
    pillarPrimaryDesc: 'Coleta própria quando fontes abertas não são suficientes',
    pillarReasoningTitle: 'Raciocínio exposto',
    pillarReasoningDesc: 'Você entende como chegamos à recomendação',
    pillarIndepTitle: 'Independência',
    pillarIndepDesc: 'Análises sem viés. Reportamos o que os dados mostram',
  },

  ctaFinal: {
    tag: 'IA com método, não com hype',
    title: 'A IA certa,',
    titleAccent: 'no processo certo.',
    sub: 'A gente diagnostica onde a IA realmente vale, implementa dentro do seu processo e mede o resultado — antes e depois. Sem hype, sem promessa vazia.',
    ctaPrimary: 'Pedir diagnóstico →',
    ctaSecondary: 'Ver o blog',
  },

  footer: {
    manifesto:
      '"A gente coloca a IA pra trabalhar na sua operação — e mostra o resultado com número, antes e depois."',
    brandTagline:
      'D.Lab Experts · Agência e consultoria de implementação de IA. Diagnóstico, agentes e automações com impacto medido.',
    logoAlt: 'D.Lab Experts',
    colHub: 'Conteúdo',
    colConsulting: 'Implementação',
    colContact: 'Contato',
    linkPublications: 'Blog',
    linkAgenda: 'Casos de uso',
    linkSolucoes: 'Serviços',
    linkImprensa: 'Sala de imprensa',
    linkRss: 'RSS do blog',
    linkPractices: 'Como funciona',
    linkMethod: 'Serviços',
    linkTalk: 'Conversar sobre um projeto',
    linkAbout: 'Sobre o D.Lab Experts',
    linkForm: 'Formulário',
    linkEmail: 'E-mail direto',
    linkWhatsapp: 'WhatsApp',
    linkLinkedin: 'LinkedIn',
    sealText: 'AI Implementation',
    copyright: 'D.Lab Experts · Agência e consultoria de IA. Todos os direitos reservados.',
    city: 'São Paulo, BR',
  },

  blog: {
    // Rótulos de método/tipo dos cards (antes hardcoded no Blog.astro).
    methodOriginal: 'Conteúdo original',
    methodSecondary: 'Análise',
    richMaterial: 'Material rico',
    // DRAFT: confirmar copy — blog para fundadores e operadores curiosos.
    heroEyebrow: 'Blog & Pesquisa aberta',
    heroTitle: 'Conteúdo gratuito.',
    heroTitleAccent: 'Pra quem decide e constrói.',
    heroSub:
      'Análises e pesquisa original sobre IA, dados e mercado, escritas pra quem decide e constrói: úteis e diretas, sem enrolação. Abertas e gratuitas, sob o mesmo rigor dos projetos sob NDA.',
    navIntel: 'Inteligência & Pesquisa',
    navCyber: 'Cybersegurança',

    intelEyebrow: 'Inteligência',
    intelTitle: 'Inteligência &',
    intelTitleAccent: 'Pesquisa Aplicada',
    intelSub:
      'Decisão estratégica, mercado, concorrência, tendências, público e política. Pesquisa que fundamenta o movimento antes dele acontecer.',

    cyberEyebrow: 'Cybersegurança',
    cyberTitle: 'Cybersegurança &',
    cyberTitleAccent: 'Defesa Contínua',
    cyberSub:
      'Monitoramento SOC, triagem de incidentes, detecção de ameaças e postura de segurança. Cases e análises técnicas publicadas quando o NDA permite.',

    groupOriginalLabel: 'Pesquisas Originais',
    groupOriginalSub:
      'Estudos com dados coletados pelo próprio laboratório, questionários, entrevistas e análise primária.',
    groupSecondaryLabel: 'Pesquisas com Dados Secundários',
    groupSecondarySub:
      'Análises construídas sobre bases públicas, relatórios setoriais e fontes terceiras auditáveis.',

    cyberGroupOriginalLabel: 'Cases Originais',
    cyberGroupOriginalSub:
      'Análises técnicas com dados coletados em engajamentos próprios de SOC: logs, linhas do tempo de incidentes, correlação de alertas.',
    cyberGroupSecondaryLabel: 'Análises com Dados Secundários',
    cyberGroupSecondarySub:
      'Leituras construídas sobre feeds de threat intel, relatórios de fornecedores e inteligência aberta.',

    emptyIntelTitle: 'Em preparação.',
    emptyIntelText:
      'As próximas pesquisas serão publicadas após liberação pós-NDA.',
    emptyCyberTitle: 'Em preparação.',
    emptyCyberText:
      'Os primeiros cases públicos de cybersegurança serão publicados quando o NDA permitir. Enquanto isso, a operação do SOC segue ativa em monitoramento fora do expediente, triagem de incidentes e detecção de ameaças.',
    emptyCyberCta: 'Propor um escopo de segurança →',

    originalMarker: 'Original',
    originalMarkerCyber: 'Case Original',
    readCta: 'Ler conteúdo',
    readCtaCyber: 'Ler análise',

    colabTitle: 'Pesquisa é trabalho',
    colabTitleAccent: 'coletivo.',
    colabLabel: 'Research Hub aberto',
    colabSub:
      'Pesquisadores, cientistas independentes, mentes de fronteira. Se você tem um estudo pronto, um dataset relevante ou uma pergunta que cabe na nossa agenda, a gente quer saber. Publicamos com coautoria explícita e raciocínio exposto. A mesma postura vale pra consultoria: quando um projeto de cliente pede expertise que a gente não tem, trazemos parceiros com crédito explícito, nunca de forma anônima.',
    colabChipSubmit: 'Submeter pesquisa',
    colabChipCo: 'Propor co-pesquisa',
    colabChipData: 'Compartilhar dados',
    colabChipReview: 'Peer review',
    colabCtaPrimary: 'Proposta de colaboração →',
    colabCtaSecondary: 'Como funciona',
  },

  // Rótulos do PostLayout (breadcrumb, relacionados, ponte de conversão).
  post: {
    breadcrumbBlog: 'Análises Públicas',
    keepReading: 'Continue lendo',
    moreResearch: 'Mais conteúdo do D.Lab',
    read: 'Ler',
    originalContent: 'Conteúdo',
    alsoIn: 'Também disponível em',
    bridgeLabel: 'Do conteúdo à sua operação',
    bridgeTitle: 'Esse conteúdo é aberto. E na sua operação?',
    bridgeBody: 'Onde a IA move eficiência e margem no seu contexto? Vira um Diagnóstico de IA: mapeia o que vale automatizar e instrumentar, com impacto medido antes e depois.',
    bridgeCta: 'Pedir um Diagnóstico de IA →',
  },

  formats: {
    briefing: 'Briefing',
    report: 'Relatório',
    foresight: 'Foresight',
    sector: 'Relatório Setorial',
  },

  langSwitcher: {
    label: 'Trocar idioma',
  },


  cube: {
    frontEyebrow: 'Amostra · Brasil',
    frontLbl: 'Estudo original gaming',
    backEyebrow: 'Cyber · 2024',
    backLbl: 'Custo médio de vazamento',
    rightEyebrow: 'PME · SEBRAE',
    rightLbl: 'Decide pela intuição',
    leftEyebrow: 'Gaming · 2026',
    leftLbl: 'Intenção de troca',
    topMarkSub: 'Research Hub',
    bottomEyebrow: 'Mobilidade · 2026',
    bottomLbl: 'Internações por óbito · SIH',
  },

  featured: {
    eyebrow: 'Pesquisa em destaque',
    titleLead: 'Último estudo',
    titleAccent: 'original do D.Lab.',
    cardTitle: 'Campanhas Afirmativas em Gaming',
    cardSub: 'Brasil · Pesquisa original · N=98',
    badgePublished: 'Publicado',
    metricPerceived: 'Impacto percebido',
    metricTrust: 'Confiança na marca',
    metricSwitch: 'Intenção de troca',
    chartLabel: 'Multiplicador de troca · minorias · 2023–2024',
    barMinority: 'Intenção de troca · minorias',
    barNonMinority: 'Intenção de troca · não-minorias',
    verdictLead: 'Achado D.Lab:',
    verdictText: 'Gamers de minorias têm 3,48× mais chance de trocar de marca por posicionamento social. O impacto é real; a confiança na marca é o desafio.',
    readFull: 'Ler o estudo completo',
  },

  demo: {
    eyebrow: 'Anatomia de uma publicação',
    titleLead: 'O que uma publicação',
    titleAccent: 'do D.Lab Experts mostra.',
    sub: 'Achados reais do nosso estudo sobre campanhas afirmativas no mercado brasileiro de gaming (N=98 gamers). Cada métrica calculada a partir de dados primários, cada recomendação com o raciocínio exposto, pronto para ser desafiado.',
    pointHeadlineTitle: 'Métricas headline, ancoradas em dados',
    pointHeadlineDesc: 'Os números que sustentam o argumento. Cada um calculado a partir de dados primários de pesquisa com metodologia documentada e teste estatístico.',
    pointPrimaryTitle: 'Pesquisa primária, documentada',
    pointPrimaryDesc: '98 gamers brasileiros pesquisados entre 2023–2024. Instrumentação, amostra e teste exato de Fisher publicados junto aos achados para que o resultado seja reprodutível.',
    pointPositionTitle: 'Posição do analista, exposta',
    pointPositionDesc: 'Não só dados. A interpretação do analista sobre o que os números significam para decisões de marketing e ESG, com o caminho do dado até a tese exposto para qualquer um desafiar.',
    rcTitle: 'Campanhas Afirmativas em Gaming · Brasil',
    rcSub: 'Pesquisa original · D.Lab #0001 · N=98',
    rcBadgePublished: 'Publicado',
    rcTabOverview: 'Visão geral',
    rcTabFindings: 'Achados',
    rcTabGroups: 'Grupos',
    rcMetricPerceived: 'Impacto percebido',
    rcMetricTrust: 'Confiança na marca',
    rcMetricSwitch: 'Multiplicador de troca',
    rcChartDistribution: 'Distribuição de respostas',
    rcDonutLbl: 'TROCA',
    rcLegendPerceived: 'Impacto percebido: 88%',
    rcLegendMinority: 'Intenção de troca minorias: 73%',
    rcLegendTrust: 'Confiança na marca: 16%',
    rcChartSwitch: 'Intenção de troca por grupo · % que trocariam de marca',
    rcBarPerceived: 'Impacto percebido das campanhas',
    rcBarMinority: 'Intenção de troca · gamers de minorias',
    rcBarNonMinority: 'Intenção de troca · não-minorias',
    rcBarTrust: 'Confiança na sinceridade das marcas',
    rcVerdictLead: 'Achado D.Lab:',
    rcVerdictTextLead: 'Gamers de grupos minoritários têm',
    rcVerdictTextStrong: '3,48× mais chance',
    rcVerdictTextTail: 'de trocar de marca por posicionamento social. Mas só 16,3% confiam que as marcas são sinceras. O impacto é real; a sinceridade é o desafio narrativo.',
    rcDemandRespondents: 'Respondentes',
    rcDemandSwitchMult: 'Multiplicador de troca',
    rcDemandPerceived: 'Impacto percebido',
    rcDemandTrust: 'Confiança na marca',
    rcDemandNote: 'Pesquisa com 98 gamers brasileiros (2023–2024). Significância estatística: teste exato de Fisher, p < 0,01. Perfil da amostra e metodologia completa publicados junto ao relatório.',
    rcScoreLabel: 'Multiplicador de troca · minorias vs. não-minorias',
    rcScoreBarMinority: 'Intenção de troca · minorias',
    rcScoreBarNonMinority: 'Intenção de troca · não-minorias',
    rcScoreBarPerceived: 'Impacto percebido',
    rcScoreBarTrust: 'Confiança na marca (sinceridade)',
  },

  contato: {
    heroEyebrow: 'Vamos colocar IA pra trabalhar',
    heroLead: 'Qual processo da sua empresa',
    heroAccent: 'a IA pode resolver primeiro?',
    lead: 'Conta onde dói na sua operação — atendimento, comercial, back-office, financeiro ou dados. Um especialista sênior responde em até um dia útil pra entender o contexto e propor por onde começar: diagnóstico, escopo e impacto esperado.',
    step1Title: 'Você descreve a operação',
    step1Desc: 'O processo que trava ou consome tempo do time, e o resultado que você quer.',
    step2Title: 'Respondemos em até um dia útil',
    step2Desc: 'Uma call de 30 minutos pra entender a operação a fundo e mapear onde a IA dá mais retorno.',
    step3Title: 'Você recebe um plano concreto',
    step3Desc: 'Começamos pelo diagnóstico: o que vale automatizar primeiro, escopo, prazo e impacto medido antes e depois.',
    altChannelLabel: 'Canais diretos',
    altIntentClientTitle: 'Conversa sobre projeto',
    altIntentClientDesc: 'Para entender escopo, formatos de trabalho e leitura de contexto do D.Lab.',
    altIntentColabTitle: 'Conversa sobre colaboração',
    altIntentColabDesc: 'Para pesquisadores, estudantes, parceiros institucionais e quem quer contribuir com a agenda do Hub. Não precisa chegar com pesquisa pronta, dataset ou proposta fechada.',
    altChannelWhatsapp: 'WhatsApp',
    altChannelEmail: 'E-mail',
    altClientWaText:
      'Olá Gabriel, estou explorando como o D.Lab pode ajudar a minha organização. Posso te contar o contexto do problema e entender quais formatos de trabalho fazem sentido?',
    altClientMailSubject: 'Conversa sobre projeto',
    altClientMailBody:
      'Olá Gabriel,\n\nEstou explorando como o D.Lab pode ajudar a minha organização. Abaixo um pouco do contexto, e gostaria de entender quais formatos de trabalho fazem sentido.\n\nQuem fala:\nOrganização:\nProblema / decisão em jogo:\n\nObrigado.',
    altColabWaText:
      'Olá Gabriel, gostaria de conversar sobre colaborar com o D.Lab. Posso te contar um pouco do meu interesse e entender como faz sentido contribuir, mesmo que eu ainda não tenha algo estruturado?',
    altColabMailSubject: 'Conversa sobre colaboração com o D.Lab',
    altColabMailBody:
      'Olá Gabriel,\n\nQueria conversar sobre colaborar com o D.Lab. Abaixo um pouco do meu interesse, mesmo que ainda não tenha nada estruturado para propor.\n\nQuem fala:\nVínculo (instituição, área, momento profissional):\nO que me interessa na agenda do D.Lab:\nPesquisa, dataset ou pergunta que trago (opcional):\n\nObrigado.',
    altRawLabel: 'Direto',
    altRawEmail: 'olegas@4real.ventures',
    altRawWhatsapp: '+55 11 93327-9420',
    formSubject: '[D.Lab Experts] Novo contato do site',
    fieldName: 'Nome completo',
    fieldNamePh: 'Seu nome',
    fieldEmail: 'E-mail profissional',
    fieldEmailPh: 'voce@empresa.com',
    fieldCompany: 'Empresa',
    fieldCompanyPh: 'Nome da empresa',
    fieldRole: 'Seu cargo',
    fieldRolePh: 'ex.: CEO, Head de Dados',
    fieldVertical: 'Prática de interesse',
    fieldSelectPlaceholder: 'Selecione…',
    verticalMarket: 'Atendimento / SAC com IA',
    verticalCompetitive: 'Comercial: qualificação e follow-up',
    verticalAudience: 'Operações: automação de tarefas',
    verticalTrends: 'Financeiro: leitura de documentos',
    verticalAI: 'Dados & decisão (dashboards/análise)',
    verticalPentest: 'Monitoramento de segurança (SOC)',
    verticalSecurity: 'Consultoria em segurança digital',
    verticalPolitics: 'Diagnóstico de IA (por onde começar)',
    verticalUnsure: 'Ainda não sei / quero conversar',
    fieldSize: 'Porte da empresa',
    sizeMicro: 'Micro (até 9 pessoas)',
    sizeSmall: 'Pequena (10–49)',
    sizeMid: 'Média (50–249)',
    sizeLarge: 'Grande (250+)',
    sizeSkip: 'Prefiro não informar',
    fieldMessage: 'Descreva o processo ou o problema',
    fieldMessagePh: 'ex.: Nosso atendimento não dá conta no horário de pico e queremos um agente que responda e trie a demanda 24/7…',
    consent: 'Concordo em receber uma resposta do D.Lab Experts sobre esta proposta.',
    submit: 'Enviar proposta →',
    submitSending: 'Enviando…',
    errorLead: 'Não foi possível enviar agora. Tente novamente, ou escreva direto para',
    footnote: 'Seus dados são usados exclusivamente para responder a este contato. Sem mailing list, sem compartilhamento com terceiros.',
  },

  colab: {
    heroEyebrow: 'Colabore com o Hub',
    heroLead: 'Proponha uma colaboração',
    heroAccent: 'de pesquisa.',
    lead: 'Pesquisadores, cientistas independentes, mentes de fronteira. Submeta estudos prontos, datasets relevantes ou uma pergunta que cabe em uma das linhas da agenda. Parceiros também trazem expertise extra para engajamentos de consultoria, sempre com crédito explícito.',
    step1Title: 'Você descreve a proposta',
    step1Desc: 'Escopo, dados já em mãos, prazo, o que você espera do D.Lab.',
    step2Title: 'Respondemos em até um dia útil',
    step2Desc: 'Um analista sênior lê a proposta e agenda uma call de 30 minutos para alinhar formato e crédito.',
    step3Title: 'Desenhamos a colaboração juntos',
    step3Desc: 'Publicação aberta, estudo conjunto ou engajamento de consultoria, com coautoria explícita.',
    modeSubmit: 'Submeter pesquisa',
    modeCo: 'Propor co-pesquisa',
    modeData: 'Compartilhar dataset',
    modePeer: 'Peer review',
    modeConsulting: 'Parceiro de consultoria',
    formSubject: '[D.Lab Experts] Proposta de colaboração em pesquisa',
    fieldName: 'Nome completo',
    fieldNamePh: 'Seu nome',
    fieldEmail: 'Melhor e-mail',
    fieldEmailPh: 'voce@dominio.com',
    fieldAffiliation: 'Afiliação / instituição',
    fieldAffiliationPh: 'Universidade, laboratório, empresa, independente',
    fieldRole: 'Cargo / título',
    fieldRolePh: 'ex.: Pesquisador, Doutorando, Parceiro',
    fieldMode: 'Modo de colaboração',
    modeOptSubmit: 'Submeter um estudo pronto',
    modeOptCo: 'Propor uma co-pesquisa',
    modeOptData: 'Compartilhar um dataset',
    modeOptPeer: 'Peer review / revisão técnica',
    modeOptConsulting: 'Parceiro de consultoria',
    modeOptOther: 'Outro / quero conversar',
    fieldArea: 'Área de pesquisa',
    areaIntel: 'Inteligência aplicada',
    areaCyber: 'Cybersegurança',
    areaPolicy: 'Política / políticas públicas',
    areaMarket: 'Mercado / comportamento',
    areaAI: 'IA / automação',
    areaOther: 'Outro',
    fieldMessage: 'Descreva a proposta',
    fieldMessagePh: 'Compartilhe o contexto: sobre o que é o estudo, dados já coletados, prazo, o que você busca no D.Lab.',
    consent: 'Concordo em ser contatado sobre esta proposta.',
    submit: 'Enviar proposta →',
    submitSending: 'Enviando…',
    errorLead: 'Não foi possível enviar agora. Tente novamente, ou escreva para',
    footnote: 'Seus dados são usados exclusivamente para responder a esta proposta. Sem mailing list, sem compartilhamento com terceiros.',
    pageEyebrow: 'Colaboração aberta',
    pageTitleLead: 'Pesquisa é um',
    pageTitleAccent: 'esforço coletivo.',
    pageLead1: 'O Research Hub do D.Lab Experts opera em modo aberto. Publicamos nossa própria pesquisa e abrimos espaço para pesquisadores, cientistas independentes e mentes de fronteira trazerem estudos, dados, metodologia, ou proporem investigação conjunta nas linhas da nossa agenda. Coautoria, crédito explícito, metodologia exposta.',
    pageLead2: 'A mesma postura vale para consultoria. Quando um projeto de cliente precisa de expertise que não temos, trazemos parceiros com crédito explícito, nunca de forma anônima. Empresa privada, cultura colaborativa.',
    modesLabel: 'Como colaborar',
    modesTitleLead: 'Quatro modos.',
    modesTitleAccent: 'Um padrão de rigor.',
    modesSub: 'Escolha o que cabe no seu momento de pesquisa. Cada modo passa pela mesma revisão metodológica antes de virar publicação pública.',
    modeSubmitTitle: 'Submeter pesquisa existente',
    modeSubmitDesc: 'Você já rodou o estudo e quer audiência estável e atribuição. Fazemos revisão metodológica e, se aceita, publicamos com coautoria explícita e raciocínio exposto.',
    modeCoTitle: 'Propor co-pesquisa',
    modeCoDesc: 'Uma das nossas linhas de agenda (mercado, tech foresight, concorrência ou decisão) te interessa e você quer construir o estudo junto. Escopo, prazo e divisão de trabalho negociados no início.',
    modeDataTitle: 'Compartilhar dados ou metodologia',
    modeDataDesc: 'Datasets novos, técnicas instrumentadas, frameworks de análise. Usamos com crédito, documentamos a procedência e, quando faz sentido, retornamos valor via publicação conjunta.',
    modePeerTitle: 'Atuar como peer reviewer',
    // DRAFT: confirmar copy — torna explícita a trilha contribuidor → peer reviewer → consultor do bench.
    modePeerDesc: 'Você tem profundidade em uma das linhas da agenda e quer contribuir com revisão técnica de pesquisas antes da publicação. Atribuição nominal opcional, metodologia sempre rastreável. É também a porta para o bench de consultores: contribuidores e revisores recorrentes, com curadoria sênior, podem ser acionados em engajamentos de cliente com crédito explícito.',
    processLabel: 'Processo',
    processTitleLead: 'Da proposta',
    processTitleAccent: 'à publicação.',
    step1Name: 'Proposta',
    step1DescFull: 'Você descreve o contexto, o modo de colaboração e, se já existe, o material atual.',
    step2Name: 'Triagem',
    step2DescFull: 'Respondemos em até 3 dias úteis: aderência à agenda, dúvidas metodológicas, próximos passos.',
    step3Name: 'Alinhamento',
    step3DescFull: 'Call de 45 minutos para alinhar escopo, autoria, atribuição, prazo e o que é público versus reservado.',
    step4Name: 'Publicação',
    step4DescFull: 'Revisão metodológica, edição conjunta, e publicação no Research Hub com crédito explícito e pronto para DOI.',
    formLabel: 'Proposta',
    formTitle: 'Proponha uma colaboração',
    formSub: 'Quanto mais contexto você traz, mais rápido respondemos. Mas até uma ideia bruta passa pela triagem.',
    emailLead: 'Manda sua proposta de colaboração direto pro nosso e-mail — conta o contexto, a frente de interesse e o formato. A gente responde pessoalmente.',
    emailCta: 'Enviar proposta por e-mail →',
    fieldFieldWork: 'Área de atuação',
    fieldFieldWorkPh: 'ex.: economista, pesquisador, founder',
    fieldLine: 'Linha da agenda de pesquisa',
    lineMarkets: 'Mercado & Comportamento',
    lineStrategy: 'Estratégia & Decisão',
    linePolitics: 'Política, Opinião & Regulação',
    lineTech: 'Tech Foresight & IA',
    lineCompetitive: 'Inteligência Competitiva',
    lineCyber: 'Cyber & Superfícies Modernas',
    lineOther: 'Outro (descreva na proposta)',
    modeOptIdea: 'Discutir uma ideia',
    fieldLinks: 'Links (opcional)',
    fieldLinksPh: 'Portfolio, artigos anteriores, CV, ORCID, repositório. Qualquer coisa que adicione contexto.',
    fieldProposal: 'Proposta',
    fieldProposalPh: 'Descreva o que você está propondo: pergunta de pesquisa, hipótese, estado atual do trabalho, dados ou metodologia envolvidos, o que você espera da colaboração.',
    consentFull: 'Autorizo o D.Lab Experts a responder esta proposta e, se houver aderência, iniciar uma conversa sobre colaboração.',
  },

  solucoesPage: {
    heroEyebrow: 'Nossos serviços',
    heroTitleLead: 'Serviços de IA que',
    heroTitleAccent: 'viram resultado.',
    heroSub: 'A gente implementa IA e agentes dentro da sua operação — do atendimento ao financeiro. Cada serviço começa por um diagnóstico que prova onde vale, é feito sob medida e tem impacto medido antes e depois. Procurando as ferramentas gratuitas? Elas estão no Blog.',

    // Strip de posicionamento — ancorar o "gratuito" e o
    // compromisso com a comunidade logo abaixo da hero.
    commitmentLabel: 'Compromisso',
    commitmentTitle: 'Todas as soluções são gratuitas.',
    commitmentBody: 'Faz parte do jeito D.Lab: somos uma comunidade de pesquisadores, engenheiros e inovadores que quer agregar valor para quem decide, opera e constrói. Consultoria paga quando o contexto pede. Pesquisa e ferramentas, sempre livres.',

    // Tool 1 — Decision Diagnostic (live)
    tool1Status: 'Disponível',
    tool1Category: 'Decisão estratégica',
    tool1Title: 'Diagnóstico de Decisão',
    tool1Desc: 'Quantifica o risco de decidir sem dados. Estima a probabilidade de decisão de alta qualidade e a faixa de exposição em R$ a partir de 5 entradas. Cada coeficiente ancorado em pesquisa externa (McKinsey, Brynjolfsson/MIT, Bain, PMI, Kahneman, Bezos, IBM).',
    tool1Chip0: 'Gratuito',
    tool1Chip1: '5 entradas',
    tool1Chip2: '~60 segundos',
    tool1Chip3: '7 fontes citadas',
    tool1Chip4: 'Método aberto',
    tool1Meta: '5 entradas · 7 fontes citadas · método aberto',
    tool1Cta: 'Abrir diagnóstico →',

    // Tool 2 — Componentes para uso de IA (disponível, em expansão)
    tool2Status: 'Disponível',
    tool2Category: 'IA Aplicada',
    tool2Title: 'Componentes para uso de IA',
    tool2Desc: 'Repositório aberto de skills, componentes e workflows pra acoplar a sistemas de IA. Cada item documentado com metodologia, casos de uso e download direto. Primeiro componente já publicado, outros entrando.',
    tool2Chip0: 'Gratuito',
    tool2Chip1: 'Sem cadastro',
    tool2Chip2: 'Curadoria D.Lab',
    tool2Chip3: 'Download direto',
    tool2Chip4: 'Em expansão',
    tool2Meta: 'Curadoria D.Lab · download direto · sem cadastro',
    tool2Cta: 'Explorar componentes →',

    ctaTitle: 'Qual processo a gente automatiza primeiro?',
    ctaSub: 'Conta onde dói na sua operação. A gente começa pelo diagnóstico, prova onde a IA dá retorno e implementa o serviço sob medida — com impacto medido antes e depois. Conversa inicial sem compromisso.',
    ctaPrimary: 'Pedir diagnóstico →',
    ctaSecondary: 'Ver ferramentas grátis',
  },

  componentesIaPage: {
    // Hero
    heroBreadcrumbBack: '← Soluções',
    heroEyebrow: 'Componentes para uso de IA',
    heroTitleLead: 'Skills, componentes e workflows pra',
    heroTitleAccent: 'acoplar a sistemas de IA.',
    heroSub: 'Curadoria aberta do D.Lab Experts. Cada item tem metodologia documentada, caso de uso real e download direto. Gratuito, sem cadastro, sem dark pattern.',

    // Strip / commitment
    commitmentLabel: 'Compromisso',
    commitmentTitle: 'Tudo aberto, tudo gratuito.',
    commitmentBody: 'Publicamos pesquisa como prova de método. Componentes pra IA seguem a mesma lógica: o que funciona na operação, a gente abre. Use, adapte, contribua.',

    // Index — list section
    listLabel: 'Componentes disponíveis',
    listSub: 'Atualmente 1 componente publicado. Outros já em curadoria — se quiser propor o seu, fala com a gente.',
    listEmpty: 'Mais componentes entrando em breve.',

    // Skill card (research-statistics-engine)
    skill1Status: 'Disponível',
    skill1Type: 'Claude Skill',
    skill1Title: 'Research & Statistics Engine',
    skill1Subtitle: 'Pesquisa científica, estatística e inteligência de mercado',
    skill1Desc: 'Skill que faz o Claude operar como pesquisador quantitativo sênior. Análise de dados, testes estatísticos, regressão e forecasting, revisão de literatura, sizing de mercado (TAM/SAM/SOM), epidemiologia e desenho de estudo. Dispara sozinha quando o usuário pede pra analisar dados ou pesquisar evidência — não precisa invocar.',
    skill1Tag1: 'Estatística',
    skill1Tag2: 'Data analysis',
    skill1Tag3: 'Market intelligence',
    skill1Tag4: 'Epidemiologia',
    skill1Cta: 'Ver detalhes & baixar →',

    // CTA at the bottom
    ctaTitle: 'Tem um componente pra contribuir?',
    ctaSub: 'Skills úteis pra IA aplicada são raras. Se você construiu uma que funciona em produção e quer publicar com a gente, manda mensagem.',
    ctaPrimary: 'Propor um componente →',
    ctaSecondary: 'Ver outras soluções',
  },

  componentesIaResearchStats: {
    // Breadcrumb / hero
    breadcrumbBack: '← Componentes para uso de IA',
    heroEyebrow: 'Claude Skill · Research & Statistics',
    heroTitle: 'Research & Statistics Engine',
    heroSubtitle: 'Pesquisa científica, estatística, análise de dados, epidemiologia e inteligência de mercado.',
    heroStatusLive: 'Disponível',
    heroVersion: 'v1.0',
    heroSize: '~36 KB',
    heroLicense: 'Aberto',

    // Download primary card
    downloadLabel: 'Download',
    downloadTitle: 'Baixar a skill',
    downloadDesc: 'Arquivo .skill (pacote oficial Claude Skill). Importe diretamente no Claude Code via /skills ou descompacte em ~/.claude/skills/.',
    downloadButton: 'Baixar research-statistics-engine.skill',
    downloadHint: 'Sem cadastro. Sem analytics. Apenas download direto.',

    // What it does
    whatLabel: 'O que faz',
    whatTitle: 'Pesquisador quantitativo sênior, em forma de skill.',
    whatBody: 'Faz o Claude operar com o padrão de peer reviewer de journal forte e de analista principal de consultoria top — rigoroso, transparente sobre incerteza, útil pra decisão real. Dispara automaticamente em pedidos como "isso é estatisticamente significativo?", "analise estes números", "qual o tamanho desse mercado?", "o que a literatura diz sobre X?", "desenhe um estudo de coorte". Não precisa invocar manualmente.',

    // Two modes
    modesLabel: 'Dois modos de operação',
    modeATitle: 'Modo A — Análise empírica',
    modeABody: 'Usuário entrega dados (arquivo, tabela colada, lista de números) e quer análise. Inspeção antes de modelar (script de EDA incluído), checagem de premissas, escolha deliberada do método, execução em Python real, interpretação com effect size + intervalo de confiança, limitações honestas.',
    modeBTitle: 'Modo B — Pesquisa & inteligência',
    modeBBody: 'Pergunta sem dataset: "o que a pesquisa diz sobre", "qual o tamanho desse mercado", "desenhe um estudo". Busca evidência em fontes primárias (PubMed, IBGE, DATASUS, IPEA, OECD, World Bank, WHO, BACEN), valida data/metodologia/viés, reconcilia conflitos sem médias preguiçosas, cita sempre.',

    // Principles
    principlesLabel: 'Princípios não-negociáveis',
    principlesIntro: 'Existem porque resposta confiante e errada nesse domínio gera decisão ruim de verdade.',
    principle1Title: 'Nunca fabricar',
    principle1Body: 'Sem fontes inventadas, sem números chutados, sem citações de placeholder. Se o número não vem dos dados do usuário ou de fonte real consultada, não é dito.',
    principle2Title: 'Rotular o status epistêmico',
    principle2Body: 'FACT (vem de dado ou fonte), INTERPRETATION (leitura), HYPOTHESIS (proposição testável), SPECULATION (palpite informado). Leitor nunca tem que adivinhar.',
    principle3Title: 'Correlação não é causalidade',
    principle3Body: 'Linguagem causal só quando o desenho permite (RCT, experimento natural, método de inferência causal) — e o desenho fica explícito.',
    principle4Title: 'Quantificar incerteza',
    principle4Body: 'Intervalos de confiança, effect sizes, amostras e p-values aparecem juntos. Nunca p-value sozinho. Nunca effect size sem intervalo.',
    principle5Title: 'Hierarquia de evidência',
    principle5Body: 'Meta-análise > revisão sistemática > RCT > coorte > caso-controle > transversal > dataset institucional > relatório de indústria > opinião.',
    principle6Title: 'Expor limitações',
    principle6Body: 'Toda análise termina com o que pode estar errado: confundimento, viés, n pequeno, seleção, generalização, qualidade do dado.',

    // What's inside
    insideLabel: 'O que vem dentro',
    inside1Name: 'SKILL.md',
    inside1Desc: 'Especificação completa: triggers, workflows, princípios, router de testes estatísticos, templates de output, checklist de rigor.',
    inside2Name: 'references/methods.md',
    inside2Desc: 'Catálogo de métodos estatísticos e de ML: quando usar, premissas, fórmulas, métricas de avaliação, guia de pré-processamento.',
    inside3Name: 'references/data-sources.md',
    inside3Desc: 'Fontes de dados brasileiras (IBGE, DATASUS, IPEA, Fiocruz, SciELO, BACEN) e internacionais (PubMed, WHO, OECD, World Bank, OWID) mapeadas com confiabilidade e tipo de dado.',
    inside4Name: 'scripts/eda.py',
    inside4Desc: 'Script automatizado de exploratory data analysis. Roda em CSV/Excel: shape, dtypes, missingness, descritivas, distribuições, outliers, correlações.',

    // Install
    installLabel: 'Como instalar',
    installStep1Title: 'Baixe o arquivo .skill',
    installStep1Body: 'Clique em "Baixar research-statistics-engine.skill" acima.',
    installStep2Title: 'Adicione ao Claude Code',
    installStep2Body: 'Mova o arquivo pra ~/.claude/skills/ (ou descompacte como pasta lá dentro). O Claude Code carrega automaticamente.',
    installStep3Title: 'Use sem invocar',
    installStep3Body: 'A skill dispara sozinha quando o pedido envolve dados ou evidência. Pergunte "isso é estatisticamente significativo?" e ela ativa.',

    // Use cases
    casesLabel: 'Quando usar',
    case1: '"Analise estes números, isso é uma diferença real?" → Mode A, teste de hipótese com checagem de premissas e effect size.',
    case2: '"Quanto vale o mercado de X no Brasil?" → Mode B, TAM/SAM/SOM com fontes primárias, faixa conservador/base/otimista.',
    case3: '"O que a pesquisa diz sobre Y?" → Mode B, revisão com hierarquia de evidência e conflitos sinalizados.',
    case4: '"Faça forecast desse histórico de vendas." → Mode A, ARIMA/SARIMA/Prophet com intervalo de confiança.',
    case5: '"Desenhe um estudo pra responder Z." → Modo B, escolha de design (coorte, caso-controle, transversal) com justificativa.',
    case6: '"Qual a prevalência de hipertensão em SP?" → Mode B, epidemiologia via DATASUS/Fiocruz/WHO com método de cálculo.',

    // CTA
    ctaTitle: 'Construiu algo parecido?',
    ctaSub: 'A gente cura componentes pra IA aplicada. Se sua skill funciona em produção e você quer publicar, fala com a gente.',
    ctaPrimary: 'Propor um componente →',
    ctaSecondary: 'Ver outros componentes',
  },

  imprensaPage: {
    findingsEmpty: 'Novos estudos originais serão publicados em breve.',
    heroEyebrow: 'Sala de imprensa',
    heroTitleLead: 'D.Lab Experts',
    heroTitleAccent: 'para jornalistas.',
    heroSub: 'Contato direto, bios dos pesquisadores, logos em alta resolução e principais achados das pesquisas publicadas. Use, cite e publique. Só pedimos atribuição explícita ao D.Lab Experts e link para o estudo de origem.',

    contactLabel: 'Contato de imprensa',
    contactEmailLabel: 'E-mail direto',
    contactEmail: 'olegas@4real.ventures',
    contactResponse: 'Resposta em até 1 dia útil',
    contactLinkedinLabel: 'LinkedIn',
    contactLinkedinHandle: '@d-lab-intelligence',
    contactNote: 'Para entrevistas, dados adicionais, embargos ou acesso antecipado a pesquisas em preparação, fale direto com o responsável.',

    authorsLabel: 'Pesquisadores disponíveis',
    author1Name: 'Gabriel Olegário',
    author1Role: 'Fundador e pesquisador principal',
    author1Bio: 'Lidera a frente de inteligência aplicada no D.Lab Experts. Pesquisa decisão estratégica, mercado e comportamento do consumidor, com foco em traduzir dados primários em recomendações acionáveis para boards, founders e operadores. Autor das pesquisas originais publicadas no Research Hub.',
    author1Expertise: 'Decision intelligence, pesquisa de mercado, comportamento do consumidor, metodologia quantitativa',
    // DRAFT: confirmar copy — cyber deixa de ser operação/serviço gerenciado
    // (SOC) e passa a aparecer só como consultoria pontual em segurança.
    author2Name: 'Gustavo Lima',
    author2Role: 'Consultor de segurança da informação',
    author2Bio: 'Apoia o D.Lab Experts em segurança da informação no formato de consultoria pontual: diagnóstico de postura, boas práticas e adequação a frameworks (LGPD, ISO 27001, NIST). Apoio sob demanda e ancorado em evidência, não um serviço gerenciado.',
    author2Expertise: 'Segurança da informação, gestão de risco, LGPD/ISO 27001/NIST, consultoria pontual',

    findingsLabel: 'Principais achados (prontos para citação)',
    findingsSub: 'Estatísticas-âncora das pesquisas publicadas. Cada número está ligado à metodologia e fonte primária no estudo correspondente.',

    assetsLabel: 'Logos e ativos visuais',
    assetsSub: 'Use os logos em alta resolução em materiais editoriais e redes sociais. Não modifique cores, proporções ou adicione efeitos.',
    assetLogoFull: 'Logo horizontal (recomendado)',
    assetLogoMark: 'Símbolo D.Lab',
    assetLogoIcon: 'Ícone quadrado (redes sociais)',
    assetDownload: 'Baixar',

    usageLabel: 'Diretrizes de uso',
    usageItem1: 'Atribuição obrigatória ao D.Lab Experts, com link para o estudo de origem quando citado online.',
    usageItem2: 'Ao citar uma estatística, inclua contexto mínimo: amostra, período e fonte do dado primário (todos declarados em cada estudo).',
    usageItem3: 'Gráficos e tabelas das pesquisas podem ser reproduzidos mantendo o crédito visível ("Fonte: D.Lab Experts, Ano").',
    usageItem4: 'Para adaptações ou reportagens mais aprofundadas, pedimos uma conversa prévia de 15 minutos com o pesquisador responsável.',

    ctaLabel: 'Pronto para publicar?',
    ctaSub: 'Fale com a gente direto. Respondemos em até um dia útil com os materiais extras que você precisar.',
    ctaPrimary: 'Falar com o D.Lab →',
    ctaSecondary: 'Ver todas as pesquisas',
  },

  notFoundPage: {
    title: 'Essa página não existe.',
    sub: 'A URL que você acessou pode ter mudado, sido renomeada ou nunca existido. Mas temos bastante conteúdo pra você explorar.',
    ctaHome: 'Voltar para o início →',
    ctaPublications: 'Ver análises abertas',
    shortcutsLabel: 'Atalhos',
    shortcutAgenda: 'Agenda de pesquisa',
    shortcutProducts: 'Consultoria',
    shortcutAbout: 'Sobre o D.Lab Experts',
    shortcutPublications: 'Análises abertas',
    shortcutRss: 'RSS das análises',
  },

  aboutBody: {
    p1: 'O D.Lab Experts nasceu de uma <strong>premissa documentada</strong>. Segundo o SEBRAE (2023), <strong>73% dos gestores de PMEs tomam decisões críticas pela intuição</strong>. Ao mesmo tempo, LLMs e agentes já fazem o trabalho repetitivo — só que a maioria das empresas não sabe por onde começar. <em>Foi pra resolver isso que a gente existe.</em>',
    p2: 'A gente implementa IA dentro da operação: <strong>agentes de atendimento, automação comercial, back-office, leitura de documentos e decisão com dados</strong>. Empresas data-driven têm <strong>23× mais chance de adquirir clientes</strong> (McKinsey Global Institute) — e a IA encurtou o caminho até lá.',
    insight: 'IA genérica não muda resultado. O que muda é a IA <strong>acoplada ao seu processo</strong> e com impacto medido antes e depois.',
    insightSource: 'D.Lab Experts, 2026',
    p3: '',
    p4: 'A gente começa pequeno e prova primeiro. <strong>Diagnóstico antes de automatizar.</strong> Implementação <strong>sob medida</strong> pra sua operação, com o resultado <strong>medido em número</strong>. <em>Sem cheque em branco e sem caixa-preta.</em>',
  },

  aboutPage: {
    heroEyebrow: 'Sobre o D.Lab Experts',
    heroTitle: 'Implementação de IA.',
    heroTitleAccent: 'Com método e prova.',
    heroSub: 'O D.Lab Experts é uma agência e consultoria de implementação de IA. A gente coloca IA e agentes pra trabalhar dentro da operação de pequenas e médias empresas — começando por um diagnóstico que prova onde vale e medindo o resultado antes e depois.',
    heroStatAILabel: 'Mercado de IA & dados até 2030 (IDC)',
    heroStatSmbLabel: 'das PMEs decidem sem dados (SEBRAE, 2023)',
    heroStatBreachLabel: 'Mais chance de captar clientes, empresas data-driven (McKinsey)',
    heroStatDualVal: 'Sob medida',
    heroStatDualLabel: 'Feito pra sua operação, não um produto genérico',

    whoEyebrow: 'Quem somos',
    whoTitle: 'O que é o D.Lab Experts',
    whoLead: 'Uma <strong style="color:var(--white)">agência e consultoria de IA</strong> que trata <strong style="color:var(--white)">implementação</strong> como o que de fato muda o resultado: agentes e automações rodando por dentro do seu processo. Começamos provando onde a IA dá retorno e medimos o impacto — sem hype e sem caixa-preta.',
    whoAsideIntuitLabel: 'dos gestores de PMEs decidem pela intuição',
    whoAsideIntuitSrc: 'SEBRAE, 2023',
    whoAsideCustLabel: 'mais clientes em empresas data-driven',
    whoAsideCustSrc: 'McKinsey Global Institute',
    whoAsideBreachLabel: 'custo médio de um vazamento de dados',
    whoAsideBreachSrc: 'IBM, 2024',

    scopeEyebrow: 'O que fazemos',
    scopeTitle: 'Onde a gente implementa IA',
    scopeLead: 'IA e agentes acoplados aos processos que já existem na sua operação — do atendimento ao financeiro. Cada frente começa por diagnóstico e termina com impacto medido.',

    intelName: 'Frentes de implementação',
    intelDesc: 'Não é IA genérica: a gente constrói os agentes e automações dentro do seu processo, conectados às suas ferramentas. Estas são as frentes onde a IA costuma dar mais retorno em pequenas e médias empresas:',
    intelItem1: 'Atendimento 24/7: agente que responde e tria a demanda',
    intelItem2: 'Comercial: qualificação e follow-up de leads no automático',
    intelItem3: 'Operações: automação de tarefas repetitivas e relatórios',
    intelItem4: 'Financeiro: leitura e conciliação de documentos e notas',
    intelItem5: 'Dados & decisão: dashboards e análises sob demanda',
    intelItem6: 'Diagnóstico de IA: onde vale automatizar primeiro',

    cyberName: 'Cybersegurança',
    cyberDesc: 'Projeta-se que o cibercrime custe <strong>US$ 10,5 trilhões por ano globalmente até 2025</strong> (Cybersecurity Ventures). Operamos um <strong>Security Operations Center</strong> focado em <strong>cobertura fora do expediente</strong> (a janela em que a atividade do atacante de fato acontece), para que o primeiro sinal de comprometimento chegue a alguém <em>acordado e em plantão</em>.',
    cyberItem1: 'SOC · monitoramento fora do expediente e madrugada',
    cyberItem2: 'Correlação de logs e triagem de alertas',
    cyberItem3: 'Resposta a incidentes e escalonamento em tempo real',
    cyberItem4: 'Observabilidade de LLMs e agentes em operação',
    cyberItem5: 'Compliance com GDPR, ISO 27001, NIST e LGPD',
    cyberItem6: 'Treinamento de times e security awareness',

    methodEyebrow: 'Metodologia',
    methodTitle: 'Como operamos',
    methodLead: 'Um protocolo, quatro etapas, da pergunta à entrega. Quatro pilares atravessam cada etapa. Nenhum é negociável.',
    methodStep1Title: 'Briefing',
    methodStep1Desc: 'Enquadramos o contexto, a hipótese e os critérios de decisão, ou o perímetro de risco a mapear.',
    methodStep2Title: 'Coleta & Modelagem',
    methodStep2Desc: 'Cruzamos múltiplas fontes de dados, públicas e primárias, com instrumentação documentada para que o achado seja reproduzível.',
    methodStep3Title: 'Síntese',
    methodStep3Desc: 'Dado bruto convertido em insight estruturado com scores, classificações e visualizações.',
    methodStep4Title: 'Entrega',
    methodStep4Desc: 'Relatório completo com recomendação clara, plano de ação priorizado e call de interpretação.',

    pillar1Title: 'Rigor metodológico',
    pillar1Desc: 'Cada análise com metodologia documentada, replicável, transparente.',
    pillar2Title: 'Dados primários',
    pillar2Desc: 'Coleta própria quando as fontes abertas não bastam para a decisão.',
    pillar3Title: 'Raciocínio exposto',
    pillar3Desc: 'Você vê exatamente como chegamos à recomendação ou ao diagnóstico.',
    pillar4Title: 'Independência',
    pillar4Desc: 'Sem viés. Reportamos o que os dados mostram, não o que a tese gostaria.',

    whyEyebrow: 'O cenário',
    whyTitleLead: 'Por que isso importa',
    whyTitleAccent: 'agora',
    whyLead: 'A janela para decisões estratégicas nunca foi tão estreita. O custo de errar é documentado e só cresce.',
    whyAsideFailLabel: 'dos novos negócios fecham no primeiro ano',
    whyAsideFailSrc: 'Bureau of Labor Statistics',
    whyAsideRansomLabel: 'crescimento anual de ataques globais de ransomware',
    whyAsideRansomSrc: 'Statista, 2024',
    whyAsideBiLabel: 'Mercado de Business Intelligence até 2027',
    whyAsideBiSrc: 'Mordor Intelligence',

    whyP1: 'O cenário exige ação. <strong>29% dos novos negócios fecham no primeiro ano</strong> e <strong>50% antes do quinto</strong>. A causa principal não é falta de capital. <em>É falta de informação para decidir.</em>',
    whyP2: 'Ao mesmo tempo, os ataques de ransomware cresceram <strong>72% globalmente ano a ano</strong> (Statista, 2024), e reguladores aplicaram multas que chegaram a <strong>dezenas de milhões de dólares</strong>. O boom de LLMs e agentes autônomos só piora a matemática: <strong>execução mais rápida e superfícies recém-expostas ao mesmo tempo</strong>.',
    whyInsight: 'Empresas que adotam cultura data-driven observam <strong>5 a 8% mais produtividade e 6% mais lucratividade</strong> que os pares.',
    whyInsightSrc: 'Harvard Business Review',
    whyP3: 'Do lado positivo, os números mostram oportunidade. O mercado de Business Intelligence deve atingir <strong>US$ 33 bilhões até 2027</strong> (Mordor Intelligence). Quem se move com uma <strong>leitura sólida de contexto</strong> captura <em>vantagem composta</em> sobre quem espera o concorrente ir primeiro.',
    whyP4: 'O D.Lab Experts existe pra fechar essa lacuna. <strong>IA implementada onde dá retorno de verdade.</strong> <strong>Sob medida pra sua operação.</strong> <em>Com impacto medido antes e depois, não percentual prometido às cegas.</em>',

    ctaTitleLead: 'Coloque a IA pra trabalhar',
    ctaTitleAccent: 'na sua operação.',
    ctaLead: 'Começa pelo diagnóstico: a gente prova onde a IA dá retorno e implementa sob medida. Conversa inicial sem compromisso.',
    ctaPrimary: 'Pedir diagnóstico →',
    ctaSecondary: 'Ver como funciona',
  },

  diagnostic: {
    heroEyebrow: 'Diagnóstico de Decisão',
    heroTitleLead: 'Quantifique o risco de',
    heroTitleAccent: 'decidir sem dados.',
    heroSub: 'Cinco perguntas, duas saídas, cada coeficiente ancorado em pesquisa revisada. Uma referência ilustrativa, não uma previsão.',
    heroStep1: '5 entradas',
    heroStep2: '~60 segundos',
    heroStep3: 'Fontes abertas',

    formTitle: 'Descreva a decisão',
    formSub: 'O painel de resposta atualiza em tempo real conforme você preenche.',

    q1Title: '01 · Porte da decisão',
    q1Desc: 'Peso financeiro aproximado da decisão (o capital, receita ou custo em jogo).',
    q1Opt1: 'Até R$ 100 mil',
    q1Opt2: 'R$ 100 mil – R$ 1 mi',
    q1Opt3: 'R$ 1 mi – R$ 10 mi',
    q1Opt4: 'Acima de R$ 10 mi',

    q2Title: '02 · Reversibilidade',
    q2Desc: 'Porta de mão dupla (dá pra voltar em semanas) ou porta de mão única (difícil desfazer)? Framework Bezos.',
    q2Opt1: 'Mão dupla: dá pra voltar',
    q2Opt2: 'Mão única: compromete a organização',

    q3Title: '03 · Maturidade de dados',
    q3Desc: 'Como a organização costuma obter a informação que molda a decisão.',
    q3Opt1: 'Nenhuma: pura intuição ou ouvir dizer',
    q3Opt2: 'Ad-hoc: planilhas, fontes dispersas',
    q3Opt3: 'Sistemática: documentada, cruzada, auditada',

    q4Title: '04 · Pressão de tempo',
    q4Desc: 'Quanto tempo você tem antes da decisão precisar ser tomada.',
    q4Opt1: 'Urgente: menos de uma semana',
    q4Opt2: 'Padrão: 1 a 4 semanas',
    q4Opt3: 'Exploratório: semanas a trimestres',

    q5Title: '05 · Stakeholders',
    q5Desc: 'Quantas pessoas precisam alinhar na decisão final. A literatura mostra um sweet spot: 2–5 decisores tendem a superar tanto o decisor solo (viés de um só) quanto o comitê grande (custo de coordenação).',
    q5Opt1: '1 decisor',
    q5Opt2: '2 a 5 decisores',
    q5Opt3: '6 ou mais decisores',

    resultTitle: 'Leitura preliminar',
    resultStaleHint: 'Responda às 5 perguntas para ver a leitura.',
    resultQualityLabel: 'Probabilidade estimada de decisão de alta qualidade',
    resultQualityVsBase: 'vs. baseline de 37% (McKinsey, 2019)',
    resultExposureLabel: 'Valor em risco: faixa de exposição',
    resultExposureHint: 'Ilustrativo, com base em coeficientes publicados',
    resultBadgeRed: 'Zona de alto risco',
    resultBadgeYellow: 'Zona de atenção',
    resultBadgeGreen: 'Zona de risco gerido',
    resultBadgeRedSub: 'A combinação de respostas posiciona esta decisão no quartil inferior de qualidade reportado na literatura. Vale desacelerar.',
    resultBadgeYellowSub: 'As respostas colocam a decisão perto da mediana do setor. Pegue uma ou duas das ações abaixo para empurrar pro quartil superior.',
    resultBadgeGreenSub: 'As respostas colocam a decisão acima do baseline do setor. A metodologia está amplamente alinhada com a literatura de decisão de alta qualidade.',

    narrativeReadingLead: 'Leitura',
    narrativeContextLead: 'Contexto',
    narrativeIntro: 'A qualidade da decisão fica em <strong>{percent}%</strong>, {delta} do baseline de <strong>37%</strong> da McKinsey 2019 (n=1.300+ executivos sêniores).',
    narrativeDeltaAbove: '{n}pp acima',
    narrativeDeltaBelow: '{n}pp abaixo',
    narrativeDeltaEqual: 'exatamente em cima',
    narrativeCloseRed: 'No conjunto, este é o perfil que a literatura aponta como o de maior risco. Vale a pausa.',
    narrativeCloseYellow: 'Isto está perto da mediana do setor. A alavanca mais forte entre as ações recomendadas é a que vale puxar primeiro.',
    narrativeCloseGreen: 'Este perfil se alinha ao quartil superior de qualidade de decisão nos estudos revisados. Mantenha a postura.',

    narrDataNone: 'maturidade de dados zero coloca esta decisão na mesma coorte que o SEBRAE (2023) documenta para os <strong>73% dos gestores de PMEs que decidem pela intuição</strong>',
    narrDataAdhoc: 'dado ad-hoc é melhor que nada, mas Brynjolfsson, McAfee & Hitt (MIT/HBR, 2011) só observaram o <strong>ganho de 5–6% de produtividade</strong> em prática <em>sistemática</em>',
    narrDataSystematic: 'a postura sistemática de dados é exatamente o que Brynjolfsson, McAfee & Hitt (MIT/HBR, 2011) correlacionaram com <strong>+5–6% de produtividade e lucratividade</strong> sobre pares do mesmo setor',

    narrTimeUrgent: 'a janela de menos de uma semana amplifica anchoring e overconfidence. O corpo de trabalho de Kahneman & Tversky mostra que a qualidade cai bruscamente quando a decisão é comprimida',
    narrTimeStandard: 'o horizonte de 1 a 4 semanas fica na zona de decisão deliberada, em que frameworks estruturados conseguem rodar',
    narrTimeExplor: 'de semanas a trimestres deixa espaço para exploração de verdade: é exatamente o que o framing de "decision hygiene" de Kahneman recomenda',

    narrRevTwo: 'é uma <strong>porta de mão dupla</strong> (Bezos, 1997), então o downside é limitado pelo custo de reversão',
    narrRevOne: 'é uma <strong>porta de mão única</strong> (Bezos, 1997). O downside se acumula porque a decisão não pode ser desfeita em poucas semanas',

    narrStkSolo: 'com um decisor único, a velocidade é máxima, mas não existe segunda opinião para checar os vieses de um só catalogados por Kahneman (anchoring, disponibilidade, overconfidence)',
    narrStkSmall: '2 a 5 decisores é o sweet spot da literatura: o suficiente para o efeito de wisdom-of-crowds documentado por Surowiecki (2004), sem o custo de coordenação que a Bain sinaliza em comitês maiores',
    narrStkLarge: '6+ decisores introduz o custo de coordenação e a pressão de groupthink que o <em>Decide & Deliver</em> da Bain (2010) associa a resultados mais lentos e de menor qualidade',

    narrSize0: 'a escala financeira é modesta, então a exposição fica contida mesmo no pior caminho',
    narrSize1: 'a faixa de R$ 100 mil a R$ 1 mi é precisamente onde a maioria das PMEs bate na curva de mortalidade do primeiro ano (<strong>29%</strong>, BLS). O cálculo de qualidade pesa',
    narrSize2: 'entre R$ 1 mi e R$ 10 mi, a qualidade da decisão se traduz diretamente na sobrevivência da própria aposta',
    narrSize3: 'acima de R$ 10 mi, cada ponto percentual de probabilidade de qualidade move capital material. A faixa de exposição abaixo não é metafórica',

    actionsTitle: 'Próximas ações recomendadas',
    actionBriefingTitle: 'Explore as pesquisas do D.Lab',
    actionBriefingDesc: 'Estudos originais sobre decisão, mercado e risco, com metodologia documentada e dado primário.',
    actionBriefingCta: 'Ver publicações →',
    actionResearchTitle: 'Encomende um briefing diagnóstico',
    actionResearchDesc: 'Um diagnóstico pago, com escopo fechado, aplicando o mesmo rigor à sua decisão específica. Prazo típico: 2 a 3 semanas.',
    actionResearchCta: 'Falar com o D.Lab →',
    actionFrameworkTitle: 'Desacelere a decisão',
    actionFrameworkDesc: 'Porta de mão única com pressão urgente tem o pior valor esperado na literatura. Negocie 1 semana extra antes de bater o martelo.',
    actionFrameworkCta: 'Ver framework →',
    actionDataTitle: 'Feche a lacuna de dados primeiro',
    actionDataDesc: 'Com maturidade de dados zero, a qualidade esperada fica ~15pp abaixo do baseline. Um sprint de 2 semanas de descoberta costuma se pagar.',
    actionDataCta: 'Propor um sprint →',

    methodologyTitle: 'Como calculamos',
    methodologySub: 'Cada coeficiente abaixo é puxado de uma fonte revisada por pares ou de um estudo setorial publicado. O objetivo é uma faixa defensável, não uma previsão exata.',
    methodologyFormulaTitle: 'O modelo',
    methodologyFormulaQuality: '<strong>Qualidade</strong> = 37% (baseline) + ajustes por maturidade de dados, pressão de tempo e stakeholders. Capada entre 5% e 75%.',
    methodologyFormulaExposure: '<strong>Faixa de exposição</strong> = porte da decisão × (1 − qualidade) × [5% .. 25%], multiplicada por 1,5 para decisões de mão única.',
    methodologySourcesTitle: 'Fontes',

    srcMcKinsey: 'McKinsey & Company, "Decision Making in the Age of Urgency", 2019: 37% dos executivos sêniores pesquisados classificaram suas decisões típicas como de alta qualidade. Isso fixa o baseline da nossa estimativa.',
    srcBrynjolfsson: 'Brynjolfsson, McAfee & Hitt, MIT Sloan / HBR, "Strength in Numbers: How Does Data-Driven Decisionmaking Affect Firm Performance?", 2011: empresas data-driven são 5 a 6% mais produtivas e lucrativas que os pares. Traduzimos isso conservadoramente em +12pp de qualidade para maturidade de dados sistemática.',
    srcPMI: 'PMI, "Pulse of the Profession" (2020): organizações desperdiçam ~9,9% de cada dólar investido por má performance de projeto. Baseia o limite inferior da nossa faixa de exposição (5%, conservador).',
    srcBezos: 'Jeff Bezos, carta aos acionistas de 1997 e textos subsequentes: framework "portas de mão única vs. portas de mão dupla". Decisões irreversíveis carregam um multiplicador de 1,5× no downside no nosso modelo.',
    srcBain: 'Bain & Company, Blenko, Mankins, Rogers, "Decide & Deliver" (2010) + Surowiecki, "The Wisdom of Crowds" (2004) + "decision hygiene" de Kahneman: a qualidade de decisão é não-monotônica em relação ao tamanho do grupo. Um grupo pequeno (2 a 5) supera tanto o decisor solo (viés de ponto único) quanto o comitê grande (custo de coordenação, groupthink). Aplicamos +3pp para grupos de 2 a 5, −6pp para 6+, e 0pp para solo.',
    srcKahneman: 'Kahneman & Tversky, décadas de literatura sobre vieses (sintetizada em *Rápido e Devagar*, 2011): pressão de tempo amplifica overconfidence e anchoring. Decisão urgente → −10pp de qualidade.',
    srcIBM: 'IBM, "Cost of a Data Breach Report 2024": custo médio global de um vazamento é US$ 4,88 mi. Referência contextual quando a decisão envolve novas superfícies expostas.',

    disclaimerTitle: 'O que isto não é',
    disclaimerBody: 'Este diagnóstico é uma referência ilustrativa baseada em benchmarks externos. Não é previsão, não é valuation, não é opinião de consultoria. Resultados reais dependem dos seus dados, do seu contexto e da sua execução. Para uma decisão que importa, rode a análise de verdade, ou agende um diagnóstico com escopo fechado com o D.Lab.',

    ctaFinal: 'Aplique esse rigor à sua decisão de verdade',
    ctaFinalSub: 'O diagnóstico é público porque o método é o que importa. Quando você precisar do mesmo rigor aplicado ao seu contexto específico, a gente tem um engajamento com escopo fechado pra isso.',
    ctaFinalPrimary: 'Agendar um diagnóstico →',
    ctaFinalSecondary: 'Ver o blog',

    homeEyebrow: 'Diagnóstico rápido',
    homePromoTitle: 'Quanto essa decisão',
    homePromoAccent: 'está te custando?',
    homePromoSub: 'Cinco entradas, duas saídas. Uma referência ilustrativa ancorada em pesquisa McKinsey, MIT, Bain e PMI. Não é previsão. 60 segundos, método totalmente aberto.',
    homePromoCta: 'Abrir ferramenta →',
    homePromoStat1Label: 'entradas',
    homePromoStat1Val: '5',
    homePromoStat2Label: 'fontes citadas',
    homePromoStat2Val: '7',
    homePromoStat3Label: 'segundos',
    homePromoStat3Val: '~60',
  },
};

export default pt;

// ── FAQ da home (FAQPage JSON-LD + AEO) ───────────────────────────────
// Perguntas reais que prospects fazem sobre o D.Lab. Renderizado como
// schema.org/FAQPage no <head> da home (ver Home.astro). Boa prática:
// respostas completas e autossuficientes (o motor de IA cita a resposta
// sem precisar do resto da página), 40–320 caracteres, sem markup.
export interface FaqItem {
  q: string;
  a: string;
}
export const homeFaq: FaqItem[] = [
  {
    q: 'O que o D.Lab Experts faz?',
    a: 'O D.Lab Experts é uma agência de implementação de IA para médias empresas e scaleups. Diagnosticamos onde a IA gera retorno, implementamos agentes e automações sob medida e medimos o impacto na eficiência e na margem antes e depois.',
  },
  {
    q: 'Como funciona o processo de implementação de IA?',
    a: 'Em três etapas: (1) diagnóstico, que prova onde a IA vale na sua operação; (2) implementação sob medida de agentes e automações integrados aos seus sistemas; (3) medição do impacto, comparando indicadores antes e depois.',
  },
  {
    q: 'Para que tipo de empresa a IA do D.Lab é indicada?',
    a: 'Para médias empresas e scaleups que querem elevar eficiência e margem sem hype nem caixa-preta. Atuamos em atendimento, comercial, operações, financeiro e dados, começando sempre por onde há retorno comprovado.',
  },
  {
    q: 'Em quanto tempo aparecem resultados?',
    a: 'O diagnóstico entrega em poucas semanas um mapa do que vale automatizar. A partir daí, cada frente implementada é medida contra a linha de base, então o retorno é acompanhado com número, não com promessa.',
  },
  {
    q: 'O D.Lab troca ou trava a minha operação atual?',
    a: 'Não. A IA e os agentes são acoplados às ferramentas e aos dados que você já usa, sem reescrever tudo. Começamos provando valor num escopo controlado e só avançamos no que dá retorno de verdade.',
  },
];

// ── Páginas de área (constelação de serviços) ─────────────────────────
// Cada nó da constelação na home (Atendimento, Comercial, Operações,
// Financeiro, Dados) leva a /solucoes/<slug>, uma página dedicada que
// explica como o D.Lab ajuda naquela frente: o desafio, como ajudamos,
// como implementamos (diagnóstico → sob medida → impacto medido) e uma
// referência de mercado (rotulada, nunca como resultado de cliente).
// Mantido aqui, junto da demais copy PT-BR, mas como export nomeado para
// ser consumido direto pela rota (sem passar pelo resolver tipado de t()).
export interface ServiceArea {
  slug: string;
  label: string;          // rótulo curto, igual ao nó da constelação
  tag: string;            // eyebrow / categoria
  /** Cor do "planeta" do nó, reaproveitada como acento da página. */
  accent: string;
  accentDeep: string;
  title: string;          // parte neutra do H1
  titleAccent: string;    // parte em gradiente do H1
  sub: string;            // subtítulo do hero
  problem: string;        // o desafio, em linguagem de PME
  help: string[];         // como podemos ajudar (entregáveis)
  metricVal: string;      // número de referência de mercado
  metricNote: string;     // rótulo da fonte (sempre referência, não case)
  related: string[];      // slugs de áreas correlatas
  seoTitle: string;
  seoDescription: string;
}

// Rótulos fixos compartilhados por todas as páginas de área.
export const serviceAreaChrome = {
  backToAll: '← Todos os serviços',
  heroDiagnosisCta: 'Fazer o diagnóstico',
  relatedCardCta: 'Ver como ajudamos →',
  problemLabel: 'O desafio',
  helpLabel: 'Como podemos ajudar',
  howLabel: 'Como implementamos',
  metricLabel: 'Referência de mercado',
  metricDisclaimer: 'Número de referência de mercado — não é resultado de cliente do D.Lab.',
  relatedLabel: 'Outras frentes onde ajudamos',
  ctaTitle: 'Quer ver isso rodando na sua operação?',
  ctaSub: 'Conta onde dói e um especialista sênior responde em até um dia útil com um caminho claro: diagnóstico, escopo e impacto esperado.',
  ctaPrimary: 'Falar com um especialista',
  ctaSecondary: 'Ver todos os serviços',
  steps: [
    {
      title: 'Diagnóstico',
      body: 'Começamos provando onde a IA vale na sua operação — escopo pequeno e impacto claro, antes de qualquer construção.',
    },
    {
      title: 'Implementação sob medida',
      body: 'Construímos a solução acoplada aos processos e às ferramentas que você já usa, com a voz e as regras da sua marca.',
    },
    {
      title: 'Impacto medido',
      body: 'Medimos o resultado antes e depois e ajustamos. Você enxerga o ganho em número, não em promessa.',
    },
  ],
} as const;

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'atendimento',
    label: 'Atendimento',
    tag: 'Atendimento / SAC',
    accent: '#8B5CF6',
    accentDeep: '#4C1D95',
    title: 'Atendimento 24/7,',
    titleAccent: 'sem fila e sem hora extra.',
    sub: 'Um agente de IA responde e tria a demanda dia e noite, resolve o repetitivo na hora e passa pro seu time só o que precisa de gente.',
    problem:
      'A fila cresce no horário de pico, o cliente espera e a equipe se esgota respondendo a mesma pergunta dezenas de vezes. Fora do expediente ninguém atende — e a oportunidade esfria.',
    help: [
      'Mapeamos as perguntas e os fluxos mais comuns do seu atendimento e o que dá pra resolver sem humano.',
      'Conectamos um agente ao seu canal — WhatsApp, site ou e-mail — com a voz e as regras da sua marca.',
      'Definimos quando e como escalar pro time, pra que uma pessoa entre só no que realmente precisa.',
      'Medimos tempo de resposta e volume resolvido antes e depois, pra provar o ganho.',
    ],
    metricVal: '−40% no tempo de resposta',
    metricNote: 'estimativa de mercado',
    related: ['comercial', 'operacoes'],
    seoTitle: 'Atendimento 24/7 com IA | Serviços D.Lab',
    seoDescription:
      'Agente de IA que responde e tria o atendimento dia e noite, resolve o repetitivo na hora e escala pro time só o que precisa de gente. Diagnóstico e impacto medido.',
  },
  {
    slug: 'comercial',
    label: 'Comercial',
    tag: 'Comercial',
    accent: '#6366F1',
    accentDeep: '#312E81',
    title: 'Nenhum lead',
    titleAccent: 'esfriando na fila.',
    sub: 'Automação que qualifica e faz o follow-up dos leads na hora em que chegam, integrada ao CRM ou à planilha que você já usa.',
    problem:
      'O lead chega com a intenção quente e esfria esperando alguém responder. Sem follow-up consistente, oportunidade boa vira número perdido no fim do mês.',
    help: [
      'Capturamos e qualificamos automaticamente cada lead que entra, por qualquer canal.',
      'Disparamos follow-up em sequência, no tom certo, sem depender de alguém lembrar.',
      'Integramos ao seu CRM ou planilha — sem trocar as ferramentas que o time já usa.',
      'Montamos um painel de leads trabalhados e taxa de resposta pra enxergar o funil.',
    ],
    metricVal: '+30% em leads trabalhados',
    metricNote: 'estimativa de mercado',
    related: ['atendimento', 'dados'],
    seoTitle: 'Qualificação e follow-up de leads com IA | Serviços D.Lab',
    seoDescription:
      'Automação comercial que qualifica e faz o follow-up dos leads na hora, integrada ao seu CRM ou planilha. Sem oportunidade esfriando. Diagnóstico e impacto medido.',
  },
  {
    slug: 'operacoes',
    label: 'Operações',
    tag: 'Operações',
    accent: '#2DD4BF',
    accentDeep: '#0F5F58',
    title: 'Rotina manual',
    titleAccent: 'rodando sozinha.',
    sub: 'A IA executa as tarefas repetitivas e monta os relatórios no padrão da casa, devolvendo horas por semana pro seu time.',
    problem:
      'Boa parte da semana some em copiar-e-colar, montar relatório e tocar processo manual. É trabalho que cansa, atrasa e abre espaço pra erro — sem agregar valor.',
    help: [
      'Levantamos as rotinas manuais que mais consomem tempo e fazem sentido automatizar.',
      'Automatizamos os processos ponta a ponta e geramos os relatórios no padrão da casa.',
      'Conectamos os sistemas que você já tem, sem migração forçada.',
      'Acompanhamos as horas economizadas por semana pra mostrar o retorno.',
    ],
    metricVal: 'Horas/semana de volta ao time',
    metricNote: 'referência de mercado',
    related: ['financeiro', 'dados'],
    seoTitle: 'Automação de tarefas repetitivas com IA | Serviços D.Lab',
    seoDescription:
      'A IA executa as rotinas manuais e monta os relatórios no padrão da casa, devolvendo horas por semana pro seu time. Diagnóstico e impacto medido antes e depois.',
  },
  {
    slug: 'financeiro',
    label: 'Financeiro',
    tag: 'Financeiro',
    accent: '#E0A75E',
    accentDeep: '#7C4310',
    title: 'Documentos lidos',
    titleAccent: 'e conciliados sozinhos.',
    sub: 'A IA lê notas, boletos e contratos, concilia e extrai os dados pro seu sistema — e sinaliza só as exceções pra revisão humana.',
    problem:
      'Nota, boleto e contrato chegam em formatos diferentes e exigem digitação e conferência manual. É lento, dá erro e trava o fechamento.',
    help: [
      'Lemos automaticamente notas, boletos e contratos, em qualquer layout.',
      'Conciliamos e extraímos os dados direto pro seu sistema ou planilha.',
      'Montamos uma fila de exceções pra revisão humana, com trilha auditável.',
      'Medimos o tempo de conciliação antes e depois, pra provar o ganho.',
    ],
    metricVal: '−50% no tempo de conciliação',
    metricNote: 'estimativa de mercado',
    related: ['operacoes', 'dados'],
    seoTitle: 'Leitura e conciliação de documentos com IA | Serviços D.Lab',
    seoDescription:
      'A IA lê notas, boletos e contratos, concilia e extrai os dados pro seu sistema e sinaliza só as exceções. Menos digitação e erro no financeiro. Impacto medido.',
  },
  {
    slug: 'dados',
    label: 'Dados',
    tag: 'Dados & decisão',
    accent: '#E879A8',
    accentDeep: '#8B1F53',
    title: 'Resposta em minutos,',
    titleAccent: 'não em dias.',
    sub: 'Seus números espalhados viram dashboards e respostas em linguagem de negócio, prontos na hora em que você precisa decidir.',
    problem:
      'Os dados estão em planilhas, sistemas e abas diferentes. Cada pergunta vira um pedido pra alguém, a resposta demora dias — e a decisão sai no escuro ou no atraso.',
    help: [
      'Unificamos as fontes de dados que você já tem, sem reescrever tudo.',
      'Entregamos dashboards e respostas em linguagem natural sobre os seus dados.',
      'Definimos os indicadores junto com o seu time, no vocabulário do negócio.',
      'Deixamos a resposta a um clique, pra decidir com dado em vez de achismo.',
    ],
    metricVal: 'Resposta em minutos, não dias',
    metricNote: 'referência de mercado',
    related: ['comercial', 'operacoes'],
    seoTitle: 'Dashboards e análise de dados sob demanda com IA | Serviços D.Lab',
    seoDescription:
      'Seus números espalhados viram dashboards e respostas em linguagem de negócio, prontos quando você precisa decidir. Decisão com dado, não achismo. Impacto medido.',
  },
];
