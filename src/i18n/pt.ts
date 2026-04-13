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
      'Research Hub em inteligência aplicada e cybersegurança. Publicações abertas, consultoria sob NDA.',
  },

  nav: {
    home: 'Home',
    about: 'Sobre',
    segments: 'Pesquisa',
    products: 'Consultoria',
    blog: 'Análises Públicas',
    contato: 'Contato',
    collaborate: 'Colaborar',
    ariaLogo: 'D.Lab Experts, ir para a home',
    ariaOpenMenu: 'Abrir menu',
    ctaProblem: 'Propor um problema →',
    langSwitcherLabel: 'Idioma',
  },

  pageTitles: {
    home: 'D.Lab Experts · Research Hub em Inteligência & Cybersegurança',
    homeDescription:
      'D.Lab Experts · Research Hub em inteligência aplicada e cybersegurança. Publicamos pesquisa para fundamentar decisões de board, founder e gestor num mundo que moveu pra frente das próprias defesas. Análises abertas e consultoria sob NDA.',
    about: 'Sobre | D.Lab Experts · Research Hub',
    aboutDescription:
      'D.Lab Experts é um Research Hub em inteligência aplicada e cybersegurança. Pesquisamos, testamos e publicamos como prova de método. Consultoria sob NDA quando o contexto pede.',
    blog: 'Análises Públicas | D.Lab Experts · Research Hub',
    blogDescription:
      'Pesquisas, análises e cases publicados pelo D.Lab Experts como prova pública do método. Inteligência de dados e cybersegurança em fontes abertas, raciocínio exposto e dados auditáveis.',
    contato: 'Contato | D.Lab Experts · Research Hub',
    contatoDescription:
      'Fale com o D.Lab Experts. Para projetos de consultoria sob NDA, parcerias de pesquisa ou imprensa. Respondemos em até um dia útil.',
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

  hero: {
    tag: 'D.Lab Experts · Research Hub · Inteligência & Cyber',
    h1Line1: 'Pesquisa aplicada para decisões',
    h1Accent: 'que mudam estratégias.',
    sub: 'Research Hub em inteligência aplicada e cybersegurança. Publicamos pesquisa pra fundamentar decisões de board, founder e gestor num mundo que moveu pra frente das próprias defesas.',
    ctaPrimary: 'Ler análises públicas →',
    ctaSecondary: 'Frentes de consultoria',
    statNdaVal: 'NDA',
    statNdaLbl: 'Padrão de entrega',
    statSeniorVal: 'Sênior',
    statSeniorLbl: 'Sem juniores entre você e o analista',
    statProtocolVal: 'Protocolo',
    statProtocolLbl: 'Mesma metodologia documentada em todo projeto',
  },

  trust: {
    title: 'Padrões D.Lab',
    ndaVal: 'NDA',
    ndaLbl: 'Confidencialidade como padrão',
    seniorVal: 'Sênior',
    seniorLbl: 'Do briefing à entrega, sempre o analista sênior',
    dualVal: 'Dual',
    dualLbl: 'Inteligência e cyber na mesma operação',
    methodVal: 'Método',
    methodLbl: 'Cada etapa rastreável, zero caixa-preta',
    openVal: 'Aberta',
    openLbl: 'Publicamos a pesquisa, não só a recomendação',
  },

  brand: {
    title: 'O mundo se moveu pra frente',
    titleAccent: 'das próprias defesas.',
    desc: 'LLMs e agentes comprimiram prazos de decisão e ampliaram superfícies de ataque. Publicamos pesquisa aberta porque a alternativa é palpite, e palpite ficou caro.',
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

  productBullets: {
    intBase1: 'Pesquisa de mercado, concorrência ou público-alvo',
    intBase2: 'Mapeamento de competidores diretos e indiretos',
    intBase3: 'Dimensionamento de oportunidade com dados reais',
    intBase4: 'Score de viabilidade com metodologia D.Lab',
    intBase5: 'Documento estruturado com recomendação exposta',
    intDeep1: 'Tudo do Base, mais:',
    intDeep2: 'Análise temporal, sazonalidade e tendências',
    intDeep3: 'Cruzamento de múltiplas fontes de dados',
    intDeep4: 'Comparativo entre até 3 cenários ou competidores',
    intDeep5: 'Perfil de público e estimativa de demanda latente',
    intDeep6: 'Sessão de interpretação com o analista (60min)',
    intAI1: 'Diagnóstico técnico da operação',
    intAI2: 'Implementação de agentes de IA',
    intAI3: 'Automação de processos críticos',
    intAI4: 'Fluxos inteligentes e integração de sistemas',
    intAI5: 'Acompanhamento e evolução contínua',
    cyberPentest1: 'Pentest em aplicações web e mobile',
    cyberPentest2: 'Análise de infraestrutura e rede',
    cyberPentest3: 'Teste de engenharia social',
    cyberPentest4: 'Relatório com classificação CVSS',
    cyberPentest5: 'Plano de remediação priorizado',
    cyberConsult1: 'Diagnóstico de postura de segurança',
    cyberConsult2: 'Políticas de segurança e compliance',
    cyberConsult3: 'Adequação a LGPD, ISO 27001, NIST',
    cyberConsult4: 'Monitoramento e resposta a incidentes',
    cyberConsult5: 'Treinamento de equipe',
  },

  segments: {
    eyebrow: 'Agenda de Pesquisa',
    title: 'Seis linhas de investigação.',
    titleAccent: 'Um único protocolo.',
    sub: 'Frentes contínuas de pesquisa que orientam as publicações do Research Hub. Do comportamento de consumidor à arquitetura de ataque, passando por IA e política, o mesmo rigor metodológico.',

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

    politicsTag: 'Política',
    politicsName: 'Política, Opinião & Regulação',
    politicsDesc:
      'Investigação de opinião pública, eleitorado e movimento regulatório. Campanha é disputa de leitura de contexto antes de ser disputa de narrativa, e regulação decide o próximo mercado antes dele existir.',
    politicsSample1: 'Mapeamento eleitoral',
    politicsSample2: 'Opinião pública',
    politicsSample3: 'Modelagem de cenários',

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
    cyberName: 'Cyber & Superfícies Modernas',
    cyberDesc:
      'Pentest, análise de vulnerabilidades e leitura das novas superfícies que IA, agentes e automação inauguraram. Descobrimos o que um atacante descobriria, incluindo o atacante que ainda não nasceu.',
    cyberSample1: 'Pentest',
    cyberSample2: 'LLM security',
    cyberSample3: 'Consultoria ofensiva',
  },

  products: {
    eyebrow: 'Frentes de Consultoria',
    title: 'Quando a pesquisa',
    titleAccent: 'vira projeto fechado.',
    sub: 'O Research Hub é o flagship. Quando uma organização precisa de dado próprio com o mesmo rigor metodológico, a pesquisa vira projeto fechado, sob NDA, com escopo, prazo e profundidade calibrados pela decisão em jogo.',
    ctaPropose: 'Apresentar o contexto →',
    ctaPresent: 'Apresentar o cenário →',
    ctaStart: 'Iniciar conversa →',
    ctaMost: '★ Mais solicitado',

    intHeader: 'Inteligência de Dados',
    intBaseName: 'Relatório de Base',
    intBaseDesc:
      'Pesquisa aplicada focada em uma pergunta-chave. Para quando a hipótese já existe e falta o rigor antes de mover.',
    intDeepName: 'Relatório Aprofundado',
    intDeepDesc:
      'Pesquisa multidimensional com dados temporais, cruzamento de múltiplas fontes e sessão de interpretação com o analista. Para decisões de alto impacto.',
    intAIName: 'Consultoria de IA',
    intAIDesc:
      'Implementação de IA, automação e processos na operação. Para quando o que trava não é a decisão. É a execução.',

    cyberHeader: 'Cybersegurança',
    cyberPentestName: 'Pentest & Análise de Vulnerabilidades',
    cyberPentestDesc:
      'Teste de intrusão e mapeamento de vulnerabilidades em aplicações, infraestrutura e redes. Relatório técnico com classificação de risco e plano de correção.',
    cyberConsultName: 'Consultoria de Segurança Digital',
    cyberConsultDesc:
      'Diagnóstico completo da postura de segurança, definição de políticas, adequação a frameworks e acompanhamento contínuo.',
  },

  research: {
    eyebrow: 'Análises Públicas',
    title: 'Pesquisa aberta.',
    titleAccent: 'Enquanto o resto é fechado.',
    sub: 'As pesquisas abertas nascem no nosso próprio laboratório, estudos independentes, publicados como prova de método. Trabalho de cliente nunca é divulgado: sempre sob NDA.',
    cta: 'Ver todas as pesquisas',
    readCta: 'Ler pesquisa',
  },

  about: {
    eyebrow: 'Sobre o D.Lab Experts',
    title: 'Rigor de laboratório.',
    titleAccent: 'Pegada vanguardista.',
    sub: 'Research Hub em inteligência aplicada e cybersegurança. Pesquisamos, testamos e publicamos como prova de método.',
    p1: 'O D.Lab Experts nasceu de uma premissa: decisão estratégica ainda é majoritariamente palpite em boa parte do mundo, e agora o risco ficou mais caro, LLMs e agentes aceleram execução, mas expõem novas superfícies de ataque.',
    p2: 'Somos um Research Hub em inteligência aplicada e cybersegurança: pesquisamos, testamos e publicamos como prova de método. Do lado da inteligência, cruzamos fontes públicas, APIs e dados primários para responder o que trava decisão, quem é o concorrente real, onde está o mercado, qual a próxima aposta viável.',
    p3: 'Do lado cyber, mapeamos vulnerabilidades, executamos testes de intrusão e desenhamos a postura que a operação exige, incluindo as superfícies novas que IA e automação inauguraram.',
    p4: 'Publicamos o método. Trabalho sob NDA vira frente de consultoria quando alguém precisa do mesmo rigor aplicado ao próprio contexto.',
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
    tag: 'Research first. Consultoria depois.',
    title: 'Decisão de peso pede',
    titleAccent: 'pesquisa de peso.',
    sub: 'As análises públicas já expõem como pensamos. Quando o contexto é seu, e precisa ficar sob NDA, a mesma metodologia vira projeto fechado. Escopo negociado, prazo calibrado, entrega sob o protocolo do Hub.',
    ctaPrimary: 'Ler análises públicas →',
    ctaSecondary: 'Conversar sobre um projeto',
  },

  footer: {
    manifesto:
      '"Não vendemos certeza. Entregamos leitura de contexto boa o suficiente para a decisão se sustentar de pé."',
    brandTagline:
      'D.Lab Experts · Research Hub em inteligência aplicada e cybersegurança. Publicações abertas, consultoria sob NDA.',
    logoAlt: 'D.Lab Experts',
    colHub: 'Research Hub',
    colConsulting: 'Consultoria',
    colContact: 'Contato',
    linkPublications: 'Análises Públicas',
    linkAgenda: 'Agenda de pesquisa',
    linkCollaborate: 'Colaborar com o Hub',
    linkRss: 'RSS das análises',
    linkPractices: 'Frentes de consultoria',
    linkMethod: 'Metodologia',
    linkTalk: 'Conversar sobre um projeto',
    linkAbout: 'Sobre o D.Lab Experts',
    linkForm: 'Formulário',
    linkEmail: 'E-mail direto',
    linkLinkedin: 'LinkedIn',
    sealText: 'Applied Intelligence Research',
    copyright: 'D.Lab Experts · Research Hub em Inteligência & Cybersegurança. Todos os direitos reservados.',
    city: 'São Paulo, BR',
  },

  blog: {
    heroEyebrow: 'Análises Públicas',
    heroTitle: 'Pesquisa aberta.',
    heroTitleAccent: 'Metodologia transparente.',
    heroSub:
      'Publicamos uma fração do que produzimos como prova pública do método. Inteligência aplicada e cybersegurança, sob o mesmo protocolo de rigor.',
    navIntel: 'Inteligência & Pesquisa',
    navCyber: 'Cybersegurança',

    intelEyebrow: 'Inteligência',
    intelTitle: 'Inteligência &',
    intelTitleAccent: 'Pesquisa Aplicada',
    intelSub:
      'Decisão estratégica, mercado, concorrência, tendências, público e política. Pesquisa que fundamenta o movimento antes dele acontecer.',

    cyberEyebrow: 'Cybersegurança',
    cyberTitle: 'Cybersegurança &',
    cyberTitleAccent: 'Operação Ofensiva',
    cyberSub:
      'Pentest, análise de vulnerabilidades, incidentes e posturas de segurança. Cases e análises técnicas publicadas quando o NDA permite.',

    groupOriginalLabel: 'Pesquisas Originais',
    groupOriginalSub:
      'Estudos com dados coletados pelo próprio laboratório, questionários, entrevistas e análise primária.',
    groupSecondaryLabel: 'Pesquisas com Dados Secundários',
    groupSecondarySub:
      'Análises construídas sobre bases públicas, relatórios setoriais e fontes terceiras auditáveis.',

    cyberGroupOriginalLabel: 'Cases Originais',
    cyberGroupOriginalSub:
      'Análises técnicas com dados coletados em engajamentos próprios, pentests, forense e instrumentação.',
    cyberGroupSecondaryLabel: 'Análises com Dados Secundários',
    cyberGroupSecondarySub:
      'Leituras construídas sobre feeds de threat intel, relatórios de fornecedores e inteligência aberta.',

    emptyIntelTitle: 'Em preparação.',
    emptyIntelText:
      'As próximas pesquisas serão publicadas após liberação pós-NDA.',
    emptyCyberTitle: 'Em preparação.',
    emptyCyberText:
      'Os primeiros cases públicos de cybersegurança serão publicados quando o NDA permitir. Enquanto isso, a frente segue ativa em pentest, análise de vulnerabilidades e consultoria ofensiva.',
    emptyCyberCta: 'Propor um escopo de segurança →',

    originalMarker: 'Pesquisa Original',
    originalMarkerCyber: 'Case Original',
    readCta: 'Ler pesquisa',
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

  formats: {
    briefing: 'Briefing',
    report: 'Relatório',
    foresight: 'Foresight',
    sector: 'Relatório Setorial',
  },

  langSwitcher: {
    label: 'Trocar idioma',
  },

  contributors: {
    label: 'Contribuidores do Hub',
    sub: 'Pesquisadores e profissionais que moldam as nossas publicações abertas e parcerias de consultoria.',
  },
};

export default pt;
