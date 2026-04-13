// English dictionary, authoritative shape. Every other locale must
// mirror this structure exactly (see Translation type in ./utils.ts).
// Copy is written for the global Research Hub positioning: institute-
// accessible tone, vanguard-but-grounded, English as the primary voice.
const en = {
  meta: {
    siteName: 'D.Lab Experts',
    sealLine: 'Applied Intelligence Research',
    ogSiteName: 'D.Lab Experts',
    orgDescription:
      'Applied intelligence and cybersecurity research hub. Open publications, consulting under NDA.',
  },

  nav: {
    home: 'Home',
    about: 'About',
    segments: 'Research',
    products: 'Consulting',
    blog: 'Publications',
    contato: 'Contact',
    collaborate: 'Collaborate',
    ariaLogo: 'D.Lab Experts, go to home',
    ariaOpenMenu: 'Open menu',
    ctaProblem: 'Start a project →',
    langSwitcherLabel: 'Language',
  },

  pageTitles: {
    home: 'D.Lab Experts · Research Hub in Applied Intelligence & Cybersecurity',
    homeDescription:
      "D.Lab Experts · applied intelligence and cybersecurity research hub. We publish research that underwrites board, founder and operator decisions in a world that's moved past its own defenses. Open analysis and consulting under NDA.",
    about: 'About | D.Lab Experts · Research Hub',
    aboutDescription:
      'D.Lab Experts is an applied intelligence and cybersecurity research hub. We research, test and publish as proof of method. Consulting under NDA when the context demands it.',
    blog: 'Publications | D.Lab Experts · Research Hub',
    blogDescription:
      'Open research, studies and analyses from the D.Lab Experts Research Hub. Applied intelligence and cybersecurity under a shared protocol of rigor.',
    contato: 'Contact | D.Lab Experts · Research Hub',
    contatoDescription:
      'Reach D.Lab Experts. For consulting projects under NDA, research partnerships or press. We respond within one business day.',
    colaborar: 'Collaborate | D.Lab Experts · Research Hub',
    colaborarDescription:
      'D.Lab Experts is an open research hub. Propose a study, submit finished research, share data, or serve as a peer reviewer. Research is a collective effort.',
    notFound: 'Page not found | D.Lab Experts',
    notFoundDescription:
      'The page you were looking for does not exist or has moved. Head back to the D.Lab Experts home or explore the open publications.',
    obrigado: 'Message received | D.Lab Experts',
    obrigadoDescription:
      'Your message reached D.Lab Experts. We respond within one business day with a reading of the context and next steps.',
  },

  hero: {
    tag: 'D.Lab Experts · Research Hub · Intelligence & Cyber',
    h1Line1: 'Applied research for decisions',
    h1Accent: 'that reshape strategies.',
    sub: "Research hub in applied intelligence and cybersecurity. We publish research to ground the decisions of boards, founders and operators in a world that's moved past its own defenses.",
    ctaPrimary: 'Read open publications →',
    ctaSecondary: 'Consulting practices',
    statNdaVal: 'NDA',
    statNdaLbl: 'Standard of delivery',
    statSeniorVal: 'Senior',
    statSeniorLbl: 'No juniors between you and the analyst',
    statProtocolVal: 'Protocol',
    statProtocolLbl: 'Same documented methodology on every engagement',
  },

  trust: {
    title: 'D.Lab Standards',
    ndaVal: 'NDA',
    ndaLbl: 'Confidentiality by default',
    seniorVal: 'Senior',
    seniorLbl: 'From brief to delivery, always the senior analyst',
    dualVal: 'Dual',
    dualLbl: 'Intelligence and cyber in the same operation',
    methodVal: 'Method',
    methodLbl: 'Every step traceable, zero black box',
    openVal: 'Open',
    openLbl: 'We publish the research, not just the recommendation',
  },

  brand: {
    title: 'The world moved faster than',
    titleAccent: 'its own defenses.',
    desc: 'LLMs and agents compressed decision timelines and widened attack surfaces. We publish open research because the alternative is guesswork, and guesswork got expensive.',
  },

  how: {
    eyebrow: 'Open Methodology',
    title: 'How we research',
    sub: 'From question to publication, every step documented and exposed, reproducibility over mystique.',
    step1Title: 'Hypothesis',
    step1Desc: 'We frame the research question and set the hypothesis. What do we not know yet, and what evidence would change our mind.',
    step2Title: 'Collection',
    step2Desc: 'Cross-reference public APIs, open datasets, scraping and primary research. Sources and instrumentation documented so findings are reproducible.',
    step3Title: 'Synthesis',
    step3Desc: 'Raw data becomes structured insights with reasoning exposed. The path from data to interpretation is part of the publication, not a black box.',
    step4Title: 'Publication',
    step4Desc: 'The finding ships with method, sources and analyst reasoning intact. Open research goes public; NDA engagements deliver the same trace confidentially.',
    sourcesLabel: 'Sources we cross-reference',
    sourceApis: 'APIs: Google Maps, Places, Ads',
    sourceOpen: 'Open datasets: IBGE, DataSUS, census bureaus',
    sourceTrends: 'Search signals: Google Trends',
    sourceScraping: 'Marketplace scraping: price, volume, sentiment',
    sourceWeb: 'Web intel: SimilarWeb, SEMrush',
    sourcePrimary: 'Primary research: surveys, interviews',
  },

  productBullets: {
    intBase1: 'Market, competitive or audience research',
    intBase2: 'Direct and indirect competitor mapping',
    intBase3: 'Opportunity sizing with real data',
    intBase4: 'Feasibility score with D.Lab methodology',
    intBase5: 'Structured document with exposed reasoning',
    intDeep1: 'Everything in Base, plus:',
    intDeep2: 'Time-series analysis, seasonality and trends',
    intDeep3: 'Cross-referencing across multiple data sources',
    intDeep4: 'Comparison of up to 3 scenarios or competitors',
    intDeep5: 'Audience profile and latent-demand estimate',
    intDeep6: 'Interpretation session with the analyst (60min)',
    intAI1: 'Operational technical diagnostic',
    intAI2: 'AI agent deployment',
    intAI3: 'Automation of critical processes',
    intAI4: 'Intelligent flows and system integration',
    intAI5: 'Ongoing follow-through and evolution',
    cyberPentest1: 'Web and mobile application pentest',
    cyberPentest2: 'Infrastructure and network analysis',
    cyberPentest3: 'Social engineering testing',
    cyberPentest4: 'Report with CVSS classification',
    cyberPentest5: 'Prioritized remediation plan',
    cyberConsult1: 'Security posture diagnostic',
    cyberConsult2: 'Security policies and compliance',
    cyberConsult3: 'LGPD, ISO 27001, NIST alignment',
    cyberConsult4: 'Monitoring and incident response',
    cyberConsult5: 'Team training',
  },

  segments: {
    eyebrow: 'Research Agenda',
    title: 'Six lines of investigation.',
    titleAccent: 'One shared protocol.',
    sub: 'Ongoing research streams that seed the Research Hub publications. From consumer behavior to attack-surface architecture, by way of AI and politics, the same methodological rigor.',

    marketTag: 'Markets & Public',
    marketName: 'Markets & Behavior',
    marketDesc:
      'We investigate who the real consumer is, where they are and how demand moves. We publish patterns that generic personas miss.',
    marketSample1: 'Audience profile',
    marketSample2: 'Market sizing',
    marketSample3: 'Demand analysis',

    stratTag: 'Strategy',
    stratName: 'Strategy & Decision',
    stratDesc:
      "Research on sizing, positioning and windows of opportunity. For the weighty bets, board, founder, fund, that won't survive a meeting-room guess.",
    stratSample1: 'Strategic analysis',
    stratSample2: 'Competitive consulting',
    stratSample3: 'Sector benchmarking',

    politicsTag: 'Politics',
    politicsName: 'Politics, Opinion & Regulation',
    politicsDesc:
      'Investigation of public opinion, electorate and regulatory movement. A campaign is a contest of context-reading before it is a contest of narrative, and regulation decides the next market before it exists.',
    politicsSample1: 'Electoral mapping',
    politicsSample2: 'Public opinion',
    politicsSample3: 'Scenario modeling',

    foresightTag: 'Foresight',
    foresightName: 'Tech Foresight & AI',
    foresightDesc:
      'Where AI, LLMs and agents are reshaping decision, work and risk. The Hub’s vanguard line, for those who must move before the rest of the sector sees the signal.',
    foresightSample1: 'AI & Agents',
    foresightSample2: 'Sector foresight',
    foresightSample3: 'Weak signals',

    compTag: 'Competition',
    compName: 'Competitive Intelligence',
    compDesc:
      'Research on real competitors, not the ones in your head. Strength, positioning, blind spots, and what they still do not see. We publish methodology; sector-specific detail becomes a project under NDA.',
    compSample1: 'Competitor analysis',
    compSample2: 'Market benchmarking',
    compSample3: 'Strategic positioning',

    cyberTag: 'Cyber',
    cyberName: 'Cyber & Modern Surfaces',
    cyberDesc:
      'Pentest, vulnerability analysis and a read of the new surfaces AI, agents and automation have opened. We discover what an attacker would, including the attacker that has not emerged yet.',
    cyberSample1: 'Pentest',
    cyberSample2: 'LLM security',
    cyberSample3: 'Offensive consulting',
  },

  products: {
    eyebrow: 'Consulting Practices',
    title: 'When research',
    titleAccent: 'becomes a closed project.',
    sub: 'The Research Hub is the flagship. When an organization needs proprietary data with the same methodological rigor, the research becomes a scoped engagement, under NDA, with scope, timeline and depth calibrated to the decision at stake.',
    ctaPropose: 'Share the context →',
    ctaPresent: 'Present the scenario →',
    ctaStart: 'Start a conversation →',
    ctaMost: '★ Most requested',

    intHeader: 'Data Intelligence',
    intBaseName: 'Base Report',
    intBaseDesc:
      'Applied research focused on a single key question. For when the hypothesis already exists and rigor is needed before the move.',
    intDeepName: 'Deep Report',
    intDeepDesc:
      'Multi-dimensional research with time-series data, multiple-source triangulation and an interpretation session with the analyst. For high-impact decisions.',
    intAIName: 'AI Consulting',
    intAIDesc:
      'Implementation of AI, automation and process in the operation. For when what stalls is not the decision, it is the execution.',

    cyberHeader: 'Cybersecurity',
    cyberPentestName: 'Pentest & Vulnerability Analysis',
    cyberPentestDesc:
      'Intrusion testing and vulnerability mapping across applications, infrastructure and networks. Technical report with risk classification and remediation plan.',
    cyberConsultName: 'Digital Security Consulting',
    cyberConsultDesc:
      'Full diagnosis of the security posture, policy definition, framework compliance and ongoing follow-through.',
  },

  research: {
    eyebrow: 'Open Publications',
    title: 'Open research.',
    titleAccent: 'While the rest stays closed.',
    sub: 'Open publications originate inside our own laboratory, independent studies, published as proof of method. Client work is never disclosed: always under NDA.',
    cta: 'See all publications',
    readCta: 'Read publication',
  },

  about: {
    eyebrow: 'About D.Lab Experts',
    title: 'Laboratory rigor.',
    titleAccent: 'Vanguard posture.',
    sub: 'Research hub in applied intelligence and cybersecurity. We research, test and publish as proof of method.',
    p1: 'D.Lab Experts was born from a premise: strategic decisions are still mostly guesswork in much of the world, and risk is now more expensive, LLMs and agents accelerate execution while multiplying attack surfaces.',
    p2: 'We are a Research Hub in applied intelligence and cybersecurity: we research, test and publish as proof of method. On the intelligence side, we cross-reference open sources, APIs and primary data to answer what stalls decisions, who the real competitor is, where the market sits, which next bet is viable.',
    p3: 'On the cyber side, we map vulnerabilities, run intrusion tests and design the posture the operation demands, including the new surfaces that AI and automation have opened.',
    p4: 'We publish the method. Work under NDA becomes a consulting practice when someone needs the same rigor applied to their own context.',
    ctaAbout: 'Inside D.Lab Experts →',
    pillarMethodTitle: 'Methodological rigor',
    pillarMethodDesc: 'Every analysis with documented, replicable methodology',
    pillarPrimaryTitle: 'Primary data',
    pillarPrimaryDesc: 'Our own collection when open sources fall short',
    pillarReasoningTitle: 'Reasoning exposed',
    pillarReasoningDesc: 'You understand how we reached the recommendation',
    pillarIndepTitle: 'Independence',
    pillarIndepDesc: 'Unbiased analysis. We report what the data shows',
  },

  ctaFinal: {
    tag: 'Research first. Consulting next.',
    title: 'Heavyweight decisions deserve',
    titleAccent: 'heavyweight research.',
    sub: 'Our open publications already expose how we think. When the context is yours, and has to stay under NDA, the same methodology becomes a closed project. Scope negotiated, timeline calibrated, delivery under the Hub protocol.',
    ctaPrimary: 'Read open publications →',
    ctaSecondary: 'Talk about a project',
  },

  footer: {
    manifesto:
      '"We do not sell certainty. We deliver context reading good enough for the decision to stand on its own."',
    brandTagline:
      'D.Lab Experts · research hub in applied intelligence and cybersecurity. Open publications, consulting under NDA.',
    logoAlt: 'D.Lab Experts',
    colHub: 'Research Hub',
    colConsulting: 'Consulting',
    colContact: 'Contact',
    linkPublications: 'Open Publications',
    linkAgenda: 'Research agenda',
    linkCollaborate: 'Collaborate with the Hub',
    linkRss: 'Publications RSS',
    linkPractices: 'Consulting practices',
    linkMethod: 'Methodology',
    linkTalk: 'Talk about a project',
    linkAbout: 'About D.Lab Experts',
    linkForm: 'Contact form',
    linkEmail: 'Direct email',
    linkLinkedin: 'LinkedIn',
    sealText: 'Applied Intelligence Research',
    copyright: 'D.Lab Experts · Research Hub in Applied Intelligence & Cybersecurity. All rights reserved.',
    city: 'São Paulo, BR',
  },

  blog: {
    heroEyebrow: 'Open Publications',
    heroTitle: 'Open research.',
    heroTitleAccent: 'Transparent methodology.',
    heroSub:
      'We publish part of what we produce as proof of method. Applied intelligence and cybersecurity under the same protocol of rigor.',
    navIntel: 'Intelligence & Research',
    navCyber: 'Cybersecurity',

    intelEyebrow: 'Intelligence',
    intelTitle: 'Intelligence &',
    intelTitleAccent: 'Applied Research',
    intelSub:
      'Strategic decision, market, competition, trends, public and politics. Research that grounds the move before it happens.',

    cyberEyebrow: 'Cybersecurity',
    cyberTitle: 'Cybersecurity &',
    cyberTitleAccent: 'Offensive Operations',
    cyberSub:
      'Pentest, vulnerability analysis, incidents and security postures. Cases and technical analysis published when NDA permits.',

    groupOriginalLabel: 'Original Research',
    groupOriginalSub:
      'Studies built on data collected by the lab itself, surveys, interviews and primary analysis.',
    groupSecondaryLabel: 'Secondary Data Research',
    groupSecondarySub:
      'Analyses built on open datasets, sector reports and auditable third-party sources.',

    cyberGroupOriginalLabel: 'Original Cases',
    cyberGroupOriginalSub:
      'Technical analyses with data collected in our own engagements, pentest, forensics, instrumentation.',
    cyberGroupSecondaryLabel: 'Secondary Data Analysis',
    cyberGroupSecondarySub:
      'Readings built on threat intel feeds, vendor reports and open intelligence.',

    emptyIntelTitle: 'In preparation.',
    emptyIntelText:
      'The next publications ship once cleared post-NDA.',
    emptyCyberTitle: 'In preparation.',
    emptyCyberText:
      'The first public cybersecurity cases ship when NDA permits. Meanwhile, the practice remains active in pentest, vulnerability analysis and offensive consulting.',
    emptyCyberCta: 'Propose a security scope →',

    originalMarker: 'Original Research',
    originalMarkerCyber: 'Original Case',
    readCta: 'Read publication',
    readCtaCyber: 'Read analysis',

    colabTitle: 'Research is a',
    colabTitleAccent: 'collective effort.',
    colabLabel: 'Open Research Hub',
    colabSub:
      "Researchers, independent scientists, frontier thinkers. If you have a finished study, a relevant dataset, or a question that fits one of our agenda lines, we want to hear from you. We publish with explicit co-authorship and reasoning in the open. The same posture extends to consulting: when a client engagement needs expertise we don't own, we bring in partners with explicit credit, never anonymously.",
    colabChipSubmit: 'Submit research',
    colabChipCo: 'Propose co-research',
    colabChipData: 'Share data',
    colabChipReview: 'Peer review',
    colabCtaPrimary: 'Collaboration proposal →',
    colabCtaSecondary: 'How it works',
  },

  formats: {
    briefing: 'Briefing',
    report: 'Report',
    foresight: 'Foresight',
    sector: 'Sector Report',
  },

  langSwitcher: {
    label: 'Change language',
  },

  contributors: {
    label: 'Contributors to the Hub',
    sub: 'Researchers and practitioners who shape our open work and consulting partnerships.',
  },
} as const;

export default en;
