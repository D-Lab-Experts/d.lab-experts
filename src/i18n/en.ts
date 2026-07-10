import type { Translation } from './utils';
import type { ServiceArea } from './pt';

// US English dictionary, global market. Content mirrors the Portuguese
// dictionary published through waves 1 & 2 before the global
// re-positioning; voice is preserved (vanguard-but-grounded).
const en: Translation = {
  meta: {
    siteName: 'D.Lab Experts',
    sealLine: 'Applied Intelligence Research',
    ogSiteName: 'D.Lab Experts',
    orgDescription:
      'AI implementation agency and consultancy. Diagnosis, agents, and automations with measured impact for small and mid-sized businesses.',
  },

  nav: {
    home: 'Home',
    about: 'About',
    segments: 'Research',
    howItWorks: 'How it works',
    products: 'AI implementation',
    blog: 'Blog',
    solucoes: 'Services',
    contato: 'Contact',
    collaborate: 'Collaborate',
    hub: 'Content',
    ariaLogo: 'D.Lab Experts, go to the home page',
    ariaOpenMenu: 'Open menu',
    ctaProblem: 'Request a diagnosis →',
    langSwitcherLabel: 'Language',
  },

  pageTitles: {
    // DRAFT: confirm copy — home positioning turned toward
    // evidence-based AI implementation (research = the engine).
    home: 'D.Lab Experts · Evidence-based AI implementation',
    homeDescription:
      'D.Lab Experts implements AI and agents to raise efficiency and margin for mid-sized companies and scaleups, with a diagnosis that proves where it pays off and impact measured before and after.',
    about: 'About | D.Lab Experts · AI Agency',
    aboutDescription:
      'D.Lab Experts is an AI implementation agency and consultancy for small and mid-sized businesses. Custom-built diagnosis, agents, and automations, with measured impact, before and after.',
    blog: 'Public Analyses | D.Lab Experts · Research Hub',
    blogDescription:
      'Research, analyses, and cases published by D.Lab Experts as public proof of method. Data intelligence from open sources, exposed reasoning, and auditable data.',
    contato: 'Contact | D.Lab Experts · AI Agency',
    contatoDescription:
      'Talk to D.Lab Experts about implementing AI in your company. Tell us the process that stalls your operation and we will propose where to start. We reply within one business day.',
    solucoes: 'AI Services | D.Lab Experts',
    solucoesDescription:
      "D.Lab's AI implementation services: 24/7 support, lead qualification, operations automation, document reading, and data-driven decisions. Diagnosis, implementation, and measured impact.",
    diagnostic: 'Decision Diagnosis | D.Lab Experts · Research Hub',
    diagnosticDescription:
      'Quantify the risk of deciding without data. Five inputs, two outputs, every coefficient anchored in peer-reviewed research.',
    componentesIa: 'Components for AI use | D.Lab Experts',
    componentesIaDescription:
      'Open repository of skills, components, and workflows to plug into AI systems. Curated by D.Lab Experts, with direct download and documented methodology.',
    componentesIaResearchStats: 'Research & Statistics Engine — Claude Skill | D.Lab Experts',
    componentesIaResearchStatsDescription:
      'A skill for Claude Code that operates as a senior quantitative researcher: statistics, data analysis, epidemiology, and market intelligence. Direct download, open methodology.',
    imprensa: 'Press | D.Lab Experts · Research Hub',
    imprensaDescription:
      'D.Lab Experts press kit: media contact, researcher bios, high-resolution logos, key findings from published research, and graphic assets for download.',
    colaborar: 'Collaborate | D.Lab Experts · Research Hub',
    colaborarDescription:
      'D.Lab Experts is a Research Hub open to collaborators. Propose research, submit a study, share data, or join as a peer reviewer. Research is collective work.',
    notFound: 'Page not found | D.Lab Experts',
    notFoundDescription:
      'The page you were looking for does not exist or was moved. Return to the D.Lab Experts home page or explore the public analyses.',
    obrigado: 'Message received | D.Lab Experts',
    obrigadoDescription:
      'Your message reached D.Lab Experts. We reply within 1 business day with a read of the context and next steps.',
  },

    // DRAFT: confirm copy — core turned toward evidence-based AI
    // implementation. Anti-hype DNA preserved ("instrument what the
    // evidence proves", not automating on hype).
  hero: {
    figureAlt: 'Futuristic D.Lab Experts brand illustration: a figure on a dark background with a lilac glow.',
    eyebrow: 'AI IMPLEMENTATION · WITH PROOF',
    taglineLine1: 'AI that turns into',
    taglineLine2: '',
    taglineAccentWord: 'results',
    taglineLine3: 'in your company.',
    sub: 'We implement AI and agents in your operation so you spend less time and money and gain margin. We start by proving where it pays off, and we measure the result before and after. No hype, no empty promises.',
    ctaPrimary: 'Request a diagnosis →',
    ctaSecondary: 'See how it works',
    proof1Val: 'N=98',
    proof1Lbl: 'gaming study sample, STROBE protocol',
    proof2Val: '87.8%',
    proof2Lbl: 'believe affirmative campaigns create real impact',
    proof3Val: '16.3%',
    proof3Lbl: 'believe brands act from genuine motivation',
    proof4Val: '3.48×',
    proof4Lbl: 'more likely to switch brands over a proven social commitment',
    proof5Val: 'STROBE',
    proof5Lbl: 'reporting protocol followed in the research',
    // DRAFT: label that makes it clear — this is proof of method/rigor
    // (published research), not the result of an AI implementation (item 6).
    proofLabel: 'How we research · rigor of published research — these are not AI implementation results',
    // DRAFT placeholder (item 6): replace with real implementation
    // numbers once a case is available (e.g., diagnoses delivered,
    // processes automated, impact measured before→after).
    proofNote: 'Proof of AI implementation goes here as soon as the first case is cleared — diagnoses, automated processes, and measured impact.',
  },

  // DRAFT: confirm copy — "who it's for" strip right below the hero,
  // anchoring the audience (mid-sized companies and scaleups) in one line.
  paraQuem: {
    label: "Who it's for",
    text: 'For small and mid-sized businesses and scaleups that want to use AI to gain efficiency and margin — with method and proof, not with hype.',
    chip1: 'Scale without bloating cost',
    chip2: 'Decisions anchored in data',
    chip3: 'Processes ready to automate',
  },

  // DRAFT: confirm copy — "proof" bento (clear). Shows METHOD + MEASURED
  // IMPACT. Real numbers come in as {{placeholder}} (nothing invented).
  bento: {
    label: 'The proof',
    title: 'Method on display,',
    titleAccent: 'measured impact.',
    sub: 'What separates evidence-based AI adoption from a stage promise: we expose the method and measure the before and after.',

    methodLabel: 'Method',
    methodTitle: 'Three steps, always traceable',
    methodStep1: 'Diagnosis',
    methodStep2: 'Implementation',
    methodStep3: 'Measurement',
    methodDesc: 'Diagnosis before automating, senior implementation, and measured impact. No black box at any point.',

    impactLabel: 'Measured impact',
    impactTitle: 'Before → after',
    impactBefore: 'Before',
    impactBeforeVal: '{{ baseline }}',
    impactAfter: 'After',
    impactAfterVal: '{{ resultado }}',
    impactNote: 'Placeholder — comes in with the first real case, no invented number.',

    statLabel: 'In numbers',
    statVal: '{{ N }}',
    statDesc: 'processes automated and diagnoses delivered. Comes in when there is real data.',

    caseLabel: 'Case',
    caseTitle: 'Your next case here',
    caseDesc: 'When a client clears it, the teaser goes in this card — image, result, and link.',
  },

  trust: {
    title: 'D.Lab standards',
    ndaVal: 'NDA',
    ndaLbl: 'Confidentiality as the default',
    seniorVal: 'Senior',
    seniorLbl: 'From briefing to delivery, always the senior analyst',
    dualVal: 'Dual',
    dualLbl: 'Decision and data engineering in the same operation',
    methodVal: 'Method',
    methodLbl: 'Every step traceable, zero black box',
    openVal: 'Custom-built',
    openLbl: 'Built for your operation, not a generic product',
  },

  brand: {
    title: 'The world moved ahead',
    titleAccent: 'of its own decisions.',
    desc: 'LLMs and agents compressed decision timelines and raised the cost of error. We publish open research because the alternative is guesswork, and guesswork got expensive.',
  },

  how: {
    eyebrow: 'Open Methodology',
    title: 'How we research',
    sub: 'From question to publication, every step documented and exposed, reproducibility instead of mystique.',
    step1Title: 'Hypothesis',
    step1Desc: 'We frame the research question and set the hypothesis. What we do not yet know, and what evidence would change our position.',
    step2Title: 'Collection',
    step2Desc: 'We cross public APIs, open datasets, scraping, and primary research. Sources and instrumentation documented so the finding is reproducible.',
    step3Title: 'Synthesis',
    step3Desc: 'Raw data becomes structured insight with reasoning exposed. The path from data to interpretation is part of the publication, not a black box.',
    step4Title: 'Publication',
    step4Desc: "The finding ships with method, sources, and the analyst's reasoning intact. Open research goes public; NDA projects deliver the same trail confidentially.",
    sourcesLabel: 'Sources we cross',
    sourceApis: 'APIs: Google Maps, Places, Ads',
    sourceOpen: 'Open datasets: IBGE, DataSUS, official censuses',
    sourceTrends: 'Search signals: Google Trends',
    sourceScraping: 'Marketplace scraping: price, volume, sentiment',
    sourceWeb: 'Web intelligence: SimilarWeb, SEMrush',
    sourcePrimary: 'Primary research: surveys, interviews',
  },

  // DRAFT: confirm copy — "How it works" in a market key, friendly to
  // mid-sized companies and scaleups. Translates the ladder (Diagnosis →
  // Implementation → Follow-up) into a jargon-free journey, with a
  // deliverable per step and a strip that dispels the fear of an "AI project."
  comoFunciona: {
    eyebrow: 'How it works',
    title: 'From doubt to results,',
    titleAccent: 'in three simple steps.',
    sub: 'No hype, no black box, and no stalling your operation. We start by proving where AI pays off and only move forward on what truly returns.',

    // Short labels for the media slots (captions for the 3 steps).
    mediaDiagnosis: 'Diagnosis',
    mediaImplementation: 'Implementation',
    mediaMeasurement: 'Measurement',
    // Descriptive alt text for the same media (accessibility + AEO).
    mediaDiagnosisAlt: 'Diagnosis step: a map of the company process pinpointing where AI pays off.',
    mediaImplementationAlt: 'Implementation step: AI agents and automations wired into the operation.',
    mediaMeasurementAlt: 'Measurement step: a dashboard comparing operational metrics before and after AI.',
    step1Tag: 'Step 1',
    step1Title: 'Diagnosis',
    step1Desc: 'We look at your operation and prove where AI truly returns.',
    step1Deliver: 'You get: a priority map, as a document and presentation.',

    step2Tag: 'Step 2',
    step2Title: 'Implementation',
    step2Desc: 'We build the agents and automations inside your process.',
    step2Deliver: 'You get: the solution running in your operation.',

    step3Tag: 'Step 3',
    step3Title: 'Measurement',
    step3Desc: 'We show the result with numbers: before and after.',
    step3Deliver: 'You get: measured impact, before and after.',

    reassureLabel: 'Why it is safe to start',
    reassure1: 'Start small and prove first. No blank check.',
    reassure2: 'No black box: you understand every step and every number.',
    reassure3: 'Measured impact, never a percentage promised blindly.',
    reassure4: 'Custom-built for your operation, not a generic product.',

    cta: 'Request a diagnosis →',
    ctaNote: 'An initial conversation with no commitment. We reply within 1 business day.',
  },

  // Concrete use cases (SMB language). Each card:
  // problem → what the AI does → result (market metric, labeled).
  // No number here is a result from a D.Lab client — they are market
  // references to add tangibility. DRAFT: adjust with real cases.
  casos: {
    eyebrow: 'Use cases',
    title: 'Where AI already delivers',
    titleAccent: 'in your company.',
    sub: 'Not generic AI: we plug agents and automations into the processes that already exist in your operation. See where it tends to pay off most.',
    metricNote: "The metrics below are market references, not results from D.Lab clients.",

    c1Tag: 'Support / Customer service',
    c1Title: '24/7 support',
    c1Problem: 'The support queue grows and the team cannot keep up at peak hours.',
    c1Does: 'An agent answers questions and triages demand instantly, day and night, and passes only what matters to a human.',
    c1Metric: '−40% in response time',
    c1MetricNote: 'market estimate',

    c2Tag: 'Sales',
    c2Title: 'Lead qualification',
    c2Problem: 'A lead comes in and goes cold before anyone replies.',
    c2Does: 'Automation qualifies and follows up on leads without letting an opportunity stall.',
    c2Metric: '+30% in leads worked',
    c2MetricNote: 'market estimate',

    c3Tag: 'Operations',
    c3Title: 'Repetitive tasks',
    c3Problem: 'The team spends hours on manual routines and building reports.',
    c3Does: 'Automation runs the routines and builds the reports on its own, in the house standard.',
    c3Metric: 'Hours/week back to the team',
    c3MetricNote: 'market reference',

    c4Tag: 'Finance',
    c4Title: 'Document reading',
    c4Problem: 'Invoices, bills, and contracts require manual data entry and checking.',
    c4Does: 'AI reads and reconciles documents and invoices, flagging only the exceptions.',
    c4Metric: '−50% in reconciliation time',
    c4MetricNote: 'market estimate',

    c5Tag: 'Data & decisions',
    c5Title: 'Data-driven decisions',
    c5Problem: 'The numbers are scattered and the answer takes days.',
    c5Does: 'Dashboards and on-demand analysis, in business language, ready when you need them.',
    c5Metric: 'Answers in minutes, not days',
    c5MetricNote: 'market reference',

    cta: 'See all services →',
  },

  // Single "proof/numbers" strip — market references ONLY,
  // labeled as such. These are not results from D.Lab clients.
  provaMercado: {
    eyebrow: 'Why now',
    title: "AI's potential is already a market,",
    titleAccent: 'not a promise.',
    disclaimer: 'Market references and public benchmarks — these are not results from D.Lab clients.',
    s1Val: '60–70%',
    s1Lbl: 'of support tasks can be supported or automated by AI',
    s1Src: 'market estimate',
    s2Val: 'up to +40%',
    s2Lbl: 'productivity on knowledge tasks with AI assistants',
    s2Src: 'market benchmark',
    s3Val: '24/7',
    s3Lbl: 'operation with no queue and no overtime, with agents always on duty',
    s3Src: 'solution feature',
    s4Val: 'weeks',
    s4Lbl: 'to the first measured result, starting small with the diagnosis',
    s4Src: 'average of our projects',
  },

  // Teaser that leads to the Services tab (detailed content with email).
  solucoesTeaser: {
    eyebrow: 'Our services',
    title: 'AI services custom-built',
    titleAccent: 'for your process.',
    sub: 'AI implementation from diagnosis to measured impact — support, sales, operations, finance, and data. (The free tools live on the Blog.)',
    cta: 'See our services →',
    note: 'Custom-built · from diagnosis to measured impact.',
  },

  // D.Lab video slot (replaces the old "next case" card).
  videoSec: {
    eyebrow: 'D.Lab on video',
    title: 'See D.Lab',
    titleAccent: 'in motion.',
    sub: 'A quick overview of how we implement AI in practice — from diagnosis to measured impact.',
    label: 'D.Lab video coming soon',
  },

  // Solutions grid with an email gate (lead capture via Formspree).
  // Each solution has an open preview + a step-by-step unlocked by email.
  solGate: {
    eyebrow: 'What we deliver',
    title: 'AI services ready to plug',
    titleAccent: 'into your operation.',
    sub: 'Each service starts with a diagnosis, is custom-built for your operation, and has measured impact, before and after. See what each one includes.',

    gateTitle: 'Unlock the step-by-step for every service',
    gateSub: 'Leave your email and we will unlock the detailed content right here.',
    emailLabel: 'Your best email',
    emailPlaceholder: 'you@company.com',
    consentPre: 'I agree to receive content from D.Lab by email and with the ',
    consentLink: 'Privacy Policy',
    consentPost: '.',
    submit: 'Unlock services',
    sending: 'Sending…',
    success: 'Done! Content unlocked — thank you.',
    error: "I couldn't send it right now. Try again or reach us on WhatsApp.",
    consentRequired: 'Check the consent box to continue.',
    detailLabel: 'What the implementation includes',
    cardCta: 'I want this service →',
    lockedLabel: 'Content by email',
    unlockedLabel: 'Unlocked',

    s1Tag: 'Support / Customer service',
    s1Title: '24/7 support with an agent',
    s1Teaser: 'An agent answers and triages demand day and night, and passes only what matters to a human.',
    s1d1: "Mapping the most common questions and flows in your support",
    s1d2: 'Agent connected to your channel (WhatsApp, site, or email)',
    s1d3: 'Escalation rules and response-time measurement before/after',

    s2Tag: 'Sales',
    s2Title: 'Lead qualification and follow-up',
    s2Teaser: 'Automation qualifies and follows up on leads without letting an opportunity go cold.',
    s2d1: 'Automatic capture and qualification of incoming leads',
    s2d2: 'Sequenced follow-up, integrated with your CRM or spreadsheet',
    s2d3: 'Dashboard of leads worked and response rate',

    s3Tag: 'Operations',
    s3Title: 'Automation of repetitive tasks',
    s3Teaser: "Routines and reports that eat up the team's hours start running on their own.",
    s3d1: 'Survey of the manual routines that consume the most time',
    s3d2: 'Process automation and report generation in the house standard',
    s3d3: 'Tracking of hours saved per week',

    s4Tag: 'Finance',
    s4Title: 'Document reading and reconciliation',
    s4Teaser: 'AI reads and reconciles invoices and documents, flagging only the exceptions.',
    s4d1: 'Automatic reading of invoices, bills, and contracts',
    s4d2: 'Reconciliation and data extraction into your system',
    s4d3: 'Exception queue for human review, with an auditable trail',

    s5Tag: 'Data & decisions',
    s5Title: 'Dashboards and on-demand analysis',
    s5Teaser: 'Scattered numbers become answers in business language, when you need them.',
    s5d1: 'Unification of the data sources you already have',
    s5d2: 'Dashboards and natural-language answers about your data',
    s5d3: 'Indicators defined together with your team',
  },

  // Banner/strip on the Blog promoting the FREE TOOLS (not paid
  // services). Open content, no sign-up.
  blogTools: {
    label: 'Free tools',
    title: 'Free D.Lab tools',
    sub: 'Open content, no sign-up — built for you to use right now.',
    tool1Name: 'Decision Diagnosis',
    tool1Desc: 'Quantify in ~60s the risk of deciding without data. 5 inputs, open method.',
    tool1Cta: 'Open the diagnosis →',
    tool1Href: '/diagnostico',
    tool2Name: 'Components for AI use',
    tool2Desc: 'Open repository of skills and workflows to plug into AI systems. Direct download.',
    tool2Cta: 'Explore components →',
    tool2Href: '/componentes-ia',
  },

  // DRAFT: confirm copy — "AI in action" visual. An animated agent console
  // (illustrative, no invented numbers) that signals D.Lab builds the
  // agents, not just talks about AI.
  aiDemo: {
    label: 'AI in action',
    title: 'We build the agents',
    titleAccent: 'that run inside the operation.',
    caption: 'Illustrative: a D.Lab agent triaging demand, deciding, and proposing automation — always with impact measured before and after, not promised.',
    chrome: 'agent · d.lab',
    live: 'active',
    l1: 'task: reduce customer response time',
    l2: 'reading the support queue',
    l3: 'finding repeated patterns',
    l4: 'tool: classify + route',
    l5: 'automation proposed · impact measured before → after',
  },

  segments: {
    // DRAFT: confirm copy — reframed from "research lines" to "fronts"
    // (research + application), after Politics left and Automation and
    // Optimization entered.
    eyebrow: 'Research & Application',
    title: 'Six fronts.',
    titleAccent: 'One single protocol.',
    sub: 'From applied research to implementation: the ongoing fronts that guide the Research Hub publications and the NDA projects. From consumer behavior to process automation, the same methodological rigor.',

    marketTag: 'Market & Audience',
    marketName: 'Markets & Behavior',
    marketDesc:
      'We investigate who the real consumer is, where they are, and how demand moves. We publish the pattern that a generic persona does not capture.',
    marketSample1: 'Audience profile',
    marketSample2: 'Market sizing',
    marketSample3: 'Demand analysis',

    stratTag: 'Strategy',
    stratName: 'Strategy & Decision',
    stratDesc:
      'Research on sizing, positioning, and windows of opportunity. For high-stakes bets — board, founder, fund — that cannot stand meeting-room guesswork.',
    stratSample1: 'Strategic analysis',
    stratSample2: 'Competitive consulting',
    stratSample3: 'Sector benchmarking',

    // DRAFT: confirm copy — new front (replaces Politics).
    autoTag: 'Automation',
    autoName: 'Implementation & Automation',
    autoDesc:
      'Implementation of automated processes and coupling AI and agents to the operation. We research what is worth automating and build the bridge from diagnosis to execution in production.',
    autoSample1: 'Process automation',
    autoSample2: 'Agents in operation',
    autoSample3: 'AI integration',

    // DRAFT: confirm copy — new front.
    optTag: 'Optimization',
    optName: 'Optimization of Areas & Sectors',
    optDesc:
      'Diagnosis and redesign of areas and sectors to unlock efficiency. Bottlenecks mapped with data, clear priorities, and improvement tracked until the gain holds.',
    optSample1: 'Area diagnosis',
    optSample2: 'Process redesign',
    optSample3: 'Operational efficiency',

    foresightTag: 'Foresight',
    foresightName: 'Tech & AI Foresight',
    foresightDesc:
      'Where AI, LLMs, and agents are reshaping decision, work, and risk. The Hub vanguard line, for those who need to move before the whole sector sees the signal.',
    foresightSample1: 'AI & Agents',
    foresightSample2: 'Sector foresight',
    foresightSample3: 'Weak signals',

    compTag: 'Competition',
    compName: 'Competitive Intelligence',
    compDesc:
      'Research on the real competitors, not the ones in your head. Strength, positioning, blind spots, and what they have not seen yet. We publish the methodology; sector detail becomes an NDA project.',
    compSample1: 'Competitor analysis',
    compSample2: 'Market benchmarking',
    compSample3: 'Strategic positioning',

    cyberTag: 'Cyber',
    cyberName: 'Cyber Research & CVE',
    cyberDesc:
      'Applied research in offensive security with an explicit methodology and a strong emphasis on data. We start from public vulnerabilities (CVE) and reproduce the failure path in a controlled environment to measure what it means in production, not in the paper. We publish the method, the exploitation chain, and the observed impact, so the defender reads the threat from the same angle as the attacker.',
    cyberSample1: 'CVE analysis',
    cyberSample2: 'Impact in production',
    cyberSample3: 'Exploitation chains',
  },

  // DRAFT: confirm copy — commercial core is now AI implementation.
  // The offering becomes a ladder (Diagnosis → Implementation → Retainer)
  // and NDA research appears as the evidence engine, not the flagship.
  products: {
    eyebrow: 'How we work',
    title: 'From evidence',
    titleAccent: 'to AI in production.',
    sub: 'The differentiator is evidence-based AI adoption: we diagnose where AI moves efficiency and margin before automating, implement with senior rigor, and measure impact before and after. A bold promise in the shop window, honest in the mechanism, never a percentage guaranteed blindly.',
    lead: "We don't sell automation on hype. We start from evidence: a diagnosis proves where AI moves the needle on efficiency and margin in your operation, and only what that diagnosis supports goes into production. The Hub's open research is the engine that keeps this rigor sharp; when the context is yours, it becomes a closed project under NDA.",
    closing: 'We have no price sheet. Each engagement is designed from what the diagnosis reveals, and the first conversation serves to frame where AI has the most to prove in your operation.',
    oneCta: 'Request a diagnosis →',
    ctaMost: '★ Entry point',

    // AI adoption ladder — Diagnosis (door) → Implementation (core,
    // before/after measurement) → Retainer (recurrence).
    ladderHeader: 'AI implementation · adoption ladder',
    ladderStep1Name: 'AI Diagnosis',
    ladderStep1Desc:
      'The entry point, evidence-based. We map where AI moves efficiency and margin in your operation and deliver a prioritized roadmap, as a document and presentation. Diagnosis before automating.',
    ladderStep2Name: 'Implementation',
    ladderStep2Desc:
      'The core. We build and instrument AI and agents into your processes, with senior rigor and impact measured before and after. Only what the evidence supports goes to production.',
    ladderStep3Name: 'Retainer · Managed AI',
    ladderStep3Desc:
      'The recurrence. Continuous optimization, new automations, and monitoring of what already runs, so the gain holds and compounds over time.',

    // The evidence engine: NDA research (formerly the flagship, now support).
    researchHeader: 'Research & evidence under NDA · the engine',
    researchName: 'Report under NDA',
    researchDesc:
      'When the decision calls for the same research we publish on the Hub, applied to your context: competitive intelligence and behavior studies with scientific method, confidential. It is the evidence engine that feeds the implementation.',
    researchOptName: 'Optimization of Areas & Sectors',
    researchOptDesc:
      'Diagnosis and redesign of areas and sectors to unlock efficiency: bottlenecks mapped with data, clear priorities, and follow-up until the improvement holds.',
  },

  // DRAFT: confirm copy — blog/research as free content for curious
  // founders and operators. Authority/inbound engine, not the product.
  research: {
    eyebrow: 'Blog & Open research',
    title: 'Free content.',
    titleAccent: 'For those who decide and build.',
    sub: 'Our blog: analyses and original research for the curious founder and operator to understand how AI, data, and markets really move, with the method on display. Open and free, always. Client work is never disclosed: always under NDA.',
    cta: 'See all content',
    readCta: 'Read',
  },

  about: {
    eyebrow: 'About D.Lab Experts',
    title: 'Lab rigor.',
    titleAccent: 'Vanguard edge.',
    sub: 'A Research Hub in applied intelligence. We research, test, and publish as proof of method.',
    p1: 'D.Lab Experts was born from a <strong>premise</strong>: strategic decision-making is still <em>mostly guesswork</em> across much of the world, and now <strong>the risk got more expensive</strong>. LLMs and agents accelerate execution, but <strong>the cost of deciding in the dark rose with it</strong>.',
    p2: 'We are a <strong>Research Hub in applied intelligence</strong>: we research, test, and publish as proof of method. We cross <strong>public sources, APIs, and primary data</strong> to answer what stalls a decision, who the real competitor is, where the market is, <em>which is the next viable bet</em>.',
    p3: '',
    p4: 'We publish the method. <strong>Open analysis as proof of how we think.</strong> Work under <strong>NDA</strong> becomes a consulting front when someone needs the <strong>same rigor</strong> applied to their own context. <em>The rest is noise.</em>',
    ctaAbout: 'Get to know D.Lab Experts →',
    pillarMethodTitle: 'Methodological rigor',
    pillarMethodDesc: 'Every analysis with documented, replicable methodology',
    pillarPrimaryTitle: 'Primary data',
    pillarPrimaryDesc: 'Our own collection when open sources are not enough',
    pillarReasoningTitle: 'Exposed reasoning',
    pillarReasoningDesc: 'You understand how we reached the recommendation',
    pillarIndepTitle: 'Independence',
    pillarIndepDesc: 'Bias-free analyses. We report what the data shows',
  },

  ctaFinal: {
    tag: 'AI with method, not with hype',
    title: 'The right AI,',
    titleAccent: 'in the right process.',
    sub: 'We diagnose where AI truly pays off, implement it inside your process, and measure the result — before and after. No hype, no empty promises.',
    ctaPrimary: 'Request a diagnosis →',
    ctaSecondary: 'See the blog',
  },

  footer: {
    manifesto:
      '"We put AI to work in your operation — and show the result with numbers, before and after."',
    brandTagline:
      'D.Lab Experts · AI implementation agency and consultancy. Diagnosis, agents, and automations with measured impact.',
    logoAlt: 'D.Lab Experts',
    colHub: 'Content',
    colConsulting: 'Implementation',
    colContact: 'Contact',
    linkPublications: 'Blog',
    linkAgenda: 'Use cases',
    linkSolucoes: 'Services',
    linkImprensa: 'Press room',
    linkRss: 'Blog RSS',
    linkPractices: 'How it works',
    linkMethod: 'Services',
    linkTalk: 'Talk about a project',
    linkAbout: 'About D.Lab Experts',
    linkForm: 'Form',
    linkEmail: 'Direct email',
    linkWhatsapp: 'WhatsApp',
    linkLinkedin: 'LinkedIn',
    sealText: 'AI Implementation',
    copyright: 'D.Lab Experts · AI agency and consultancy. All rights reserved.',
    city: 'São Paulo, BR',
  },

  blog: {
    // Method/type labels for the cards (previously hardcoded in Blog.astro).
    methodOriginal: 'Original research',
    methodSecondary: 'Analysis',
    richMaterial: 'Resource',
    // DRAFT: confirm copy — blog for curious founders and operators.
    heroEyebrow: 'Blog & Open research',
    heroTitle: 'Free content.',
    heroTitleAccent: 'For those who decide and build.',
    heroSub:
      'Analyses and original research on AI, data, and markets, written for those who decide and build: useful and direct, no fluff. Open and free, under the same rigor as the NDA projects.',
    navIntel: 'Intelligence & Research',
    navCyber: 'Cybersecurity',

    intelEyebrow: 'Intelligence',
    intelTitle: 'Intelligence &',
    intelTitleAccent: 'Applied Research',
    intelSub:
      'Strategic decisions, market, competition, trends, audience, and policy. Research that grounds the move before it happens.',

    cyberEyebrow: 'Cybersecurity',
    cyberTitle: 'Cybersecurity &',
    cyberTitleAccent: 'Continuous Defense',
    cyberSub:
      'SOC monitoring, incident triage, threat detection, and security posture. Cases and technical analyses published when the NDA allows.',

    groupOriginalLabel: 'Original Research',
    groupOriginalSub:
      'Studies with data collected by the lab itself, questionnaires, interviews, and primary analysis.',
    groupSecondaryLabel: 'Research with Secondary Data',
    groupSecondarySub:
      'Analyses built on public databases, sector reports, and auditable third-party sources.',

    cyberGroupOriginalLabel: 'Original Cases',
    cyberGroupOriginalSub:
      'Technical analyses with data collected in our own SOC engagements: logs, incident timelines, alert correlation.',
    cyberGroupSecondaryLabel: 'Analyses with Secondary Data',
    cyberGroupSecondarySub:
      'Readings built on threat-intel feeds, vendor reports, and open intelligence.',

    emptyIntelTitle: 'In preparation.',
    emptyIntelText:
      'The next research pieces will be published after post-NDA clearance.',
    emptyCyberTitle: 'In preparation.',
    emptyCyberText:
      'The first public cybersecurity cases will be published when the NDA allows. Meanwhile, the SOC operation stays active in after-hours monitoring, incident triage, and threat detection.',
    emptyCyberCta: 'Propose a security scope →',

    originalMarker: 'Original',
    originalMarkerCyber: 'Original Case',
    readCta: 'Read content',
    readCtaCyber: 'Read analysis',

    colabTitle: 'Research is collective',
    colabTitleAccent: 'work.',
    colabLabel: 'Open Research Hub',
    colabSub:
      "Researchers, independent scientists, frontier minds. If you have a study ready, a relevant dataset, or a question that fits our agenda, we want to know. We publish with explicit co-authorship and exposed reasoning. The same stance applies to consulting: when a client project calls for expertise we don't have, we bring in partners with explicit credit, never anonymously.",
    colabChipSubmit: 'Submit research',
    colabChipCo: 'Propose co-research',
    colabChipData: 'Share data',
    colabChipReview: 'Peer review',
    colabCtaPrimary: 'Collaboration proposal →',
    colabCtaSecondary: 'How it works',
  },

  // PostLayout labels (breadcrumb, related, conversion bridge).
  post: {
    breadcrumbBlog: 'Public Analyses',
    keepReading: 'Keep reading',
    moreResearch: 'More from D.Lab',
    read: 'Read',
    originalContent: 'Content',
    alsoIn: 'Also available in',
    bridgeLabel: 'From content to your operation',
    bridgeTitle: 'This content is open. What about your operation?',
    bridgeBody: 'Where does AI move efficiency and margin in your context? Turn it into an AI Diagnosis: we map what’s worth automating and instrumenting, with measured impact before and after.',
    bridgeCta: 'Request an AI Diagnosis →',
  },

  formats: {
    briefing: 'Briefing',
    report: 'Report',
    foresight: 'Foresight',
    sector: 'Sector Report',
  },

  langSwitcher: {
    label: 'Switch language',
  },


  cube: {
    frontEyebrow: 'Sample · Brazil',
    frontLbl: 'Original gaming study',
    backEyebrow: 'Cyber · 2024',
    backLbl: 'Average breach cost',
    rightEyebrow: 'SMB · SEBRAE',
    rightLbl: 'Decides by intuition',
    leftEyebrow: 'Gaming · 2026',
    leftLbl: 'Switching intent',
    topMarkSub: 'Research Hub',
    bottomEyebrow: 'Mobility · 2026',
    bottomLbl: 'Hospitalizations per death · SIH',
  },

  featured: {
    eyebrow: 'Featured research',
    titleLead: 'Latest study',
    titleAccent: 'original from D.Lab.',
    cardTitle: 'Affirmative Campaigns in Gaming',
    cardSub: 'Brazil · Original research · N=98',
    badgePublished: 'Published',
    metricPerceived: 'Perceived impact',
    metricTrust: 'Brand trust',
    metricSwitch: 'Switching intent',
    chartLabel: 'Switching multiplier · minorities · 2023–2024',
    barMinority: 'Switching intent · minorities',
    barNonMinority: 'Switching intent · non-minorities',
    verdictLead: 'D.Lab finding:',
    verdictText: 'Minority gamers are 3.48× more likely to switch brands over a social stance. The impact is real; brand trust is the challenge.',
    readFull: 'Read the full study',
  },

  demo: {
    eyebrow: 'Anatomy of a publication',
    titleLead: 'What a publication',
    titleAccent: 'from D.Lab Experts shows.',
    sub: 'Real findings from our study on affirmative campaigns in the Brazilian gaming market (N=98 gamers). Each metric calculated from primary data, each recommendation with the reasoning exposed, ready to be challenged.',
    pointHeadlineTitle: 'Headline metrics, anchored in data',
    pointHeadlineDesc: 'The numbers that hold up the argument. Each one calculated from primary research data with documented methodology and a statistical test.',
    pointPrimaryTitle: 'Primary research, documented',
    pointPrimaryDesc: "98 Brazilian gamers surveyed between 2023–2024. Instrumentation, sample, and Fisher's exact test published alongside the findings so the result is reproducible.",
    pointPositionTitle: "Analyst's position, exposed",
    pointPositionDesc: "Not just data. The analyst's interpretation of what the numbers mean for marketing and ESG decisions, with the path from data to thesis exposed for anyone to challenge.",
    rcTitle: 'Affirmative Campaigns in Gaming · Brazil',
    rcSub: 'Original research · D.Lab #0001 · N=98',
    rcBadgePublished: 'Published',
    rcTabOverview: 'Overview',
    rcTabFindings: 'Findings',
    rcTabGroups: 'Groups',
    rcMetricPerceived: 'Perceived impact',
    rcMetricTrust: 'Brand trust',
    rcMetricSwitch: 'Switching multiplier',
    rcChartDistribution: 'Response distribution',
    rcDonutLbl: 'SWITCH',
    rcLegendPerceived: 'Perceived impact: 88%',
    rcLegendMinority: 'Minority switching intent: 73%',
    rcLegendTrust: 'Brand trust: 16%',
    rcChartSwitch: 'Switching intent by group · % who would switch brands',
    rcBarPerceived: 'Perceived impact of the campaigns',
    rcBarMinority: 'Switching intent · minority gamers',
    rcBarNonMinority: 'Switching intent · non-minorities',
    rcBarTrust: "Trust in brands' sincerity",
    rcVerdictLead: 'D.Lab finding:',
    rcVerdictTextLead: 'Gamers from minority groups are',
    rcVerdictTextStrong: '3.48× more likely',
    rcVerdictTextTail: 'to switch brands over a social stance. But only 16.3% trust that brands are sincere. The impact is real; sincerity is the narrative challenge.',
    rcDemandRespondents: 'Respondents',
    rcDemandSwitchMult: 'Switching multiplier',
    rcDemandPerceived: 'Perceived impact',
    rcDemandTrust: 'Brand trust',
    rcDemandNote: "Survey of 98 Brazilian gamers (2023–2024). Statistical significance: Fisher's exact test, p < 0.01. Sample profile and full methodology published alongside the report.",
    rcScoreLabel: 'Switching multiplier · minorities vs. non-minorities',
    rcScoreBarMinority: 'Switching intent · minorities',
    rcScoreBarNonMinority: 'Switching intent · non-minorities',
    rcScoreBarPerceived: 'Perceived impact',
    rcScoreBarTrust: 'Brand trust (sincerity)',
  },

  contato: {
    heroEyebrow: "Let's put AI to work",
    heroLead: 'Which process in your company',
    heroAccent: 'can AI solve first?',
    lead: 'Tell us where it hurts in your operation — support, sales, back office, finance, or data. A senior specialist replies within one business day to understand the context and propose where to start: diagnosis, scope, and expected impact.',
    step1Title: 'You describe the operation',
    step1Desc: "The process that stalls or eats the team's time, and the result you want.",
    step2Title: 'We reply within one business day',
    step2Desc: 'A 30-minute call to understand the operation in depth and map where AI returns the most.',
    step3Title: 'You get a concrete plan',
    step3Desc: 'We start with the diagnosis: what is worth automating first, scope, timeline, and impact measured before and after.',
    altChannelLabel: 'Direct channels',
    altIntentClientTitle: 'Conversation about a project',
    altIntentClientDesc: "To understand scope, ways of working, and D.Lab's read of the context.",
    altIntentColabTitle: 'Conversation about collaboration',
    altIntentColabDesc: 'For researchers, students, institutional partners, and anyone who wants to contribute to the Hub agenda. You do not need to arrive with finished research, a dataset, or a closed proposal.',
    altChannelWhatsapp: 'WhatsApp',
    altChannelEmail: 'Email',
    altClientWaText:
      'Hi Gabriel, I am exploring how D.Lab could help my organization. Can I tell you the context of the problem and understand which ways of working make sense?',
    altClientMailSubject: 'Conversation about a project',
    altClientMailBody:
      'Hi Gabriel,\n\nI am exploring how D.Lab could help my organization. Below is a bit of the context, and I would like to understand which ways of working make sense.\n\nWho is speaking:\nOrganization:\nProblem / decision at stake:\n\nThank you.',
    altColabWaText:
      'Hi Gabriel, I would like to talk about collaborating with D.Lab. Can I tell you a bit about my interest and understand how it makes sense to contribute, even if I do not yet have anything structured?',
    altColabMailSubject: 'Conversation about collaborating with D.Lab',
    altColabMailBody:
      'Hi Gabriel,\n\nI wanted to talk about collaborating with D.Lab. Below is a bit of my interest, even though I do not yet have anything structured to propose.\n\nWho is speaking:\nAffiliation (institution, field, career stage):\nWhat interests me in the D.Lab agenda:\nResearch, dataset, or question I bring (optional):\n\nThank you.',
    altRawLabel: 'Direct',
    altRawEmail: 'olegas@4real.ventures',
    altRawWhatsapp: '+55 11 93327-9420',
    formSubject: '[D.Lab Experts] New contact from the site',
    fieldName: 'Full name',
    fieldNamePh: 'Your name',
    fieldEmail: 'Work email',
    fieldEmailPh: 'you@company.com',
    fieldCompany: 'Company',
    fieldCompanyPh: 'Company name',
    fieldRole: 'Your role',
    fieldRolePh: 'e.g., CEO, Head of Data',
    fieldVertical: 'Practice of interest',
    fieldSelectPlaceholder: 'Select…',
    verticalMarket: 'Support / Customer service with AI',
    verticalCompetitive: 'Sales: qualification and follow-up',
    verticalAudience: 'Operations: task automation',
    verticalTrends: 'Finance: document reading',
    verticalAI: 'Data & decisions (dashboards/analysis)',
    verticalPentest: 'Security monitoring (SOC)',
    verticalSecurity: 'Digital security consulting',
    verticalPolitics: 'AI diagnosis (where to start)',
    verticalUnsure: "Not sure yet / I want to talk",
    fieldSize: 'Company size',
    sizeMicro: 'Micro (up to 9 people)',
    sizeSmall: 'Small (10–49)',
    sizeMid: 'Mid-sized (50–249)',
    sizeLarge: 'Large (250+)',
    sizeSkip: 'Prefer not to say',
    fieldMessage: 'Describe the process or the problem',
    fieldMessagePh: 'e.g., Our support cannot keep up at peak hours and we want an agent that answers and triages demand 24/7…',
    consent: 'I agree to receive a reply from D.Lab Experts about this proposal.',
    submit: 'Send proposal →',
    submitSending: 'Sending…',
    errorLead: "We couldn't send it right now. Try again, or write directly to",
    footnote: 'Your data is used solely to respond to this contact. No mailing list, no sharing with third parties.',
  },

  colab: {
    heroEyebrow: 'Collaborate with the Hub',
    heroLead: 'Propose a research',
    heroAccent: 'collaboration.',
    lead: 'Researchers, independent scientists, frontier minds. Submit finished studies, relevant datasets, or a question that fits one of the agenda lines. Partners also bring extra expertise to consulting engagements, always with explicit credit.',
    step1Title: 'You describe the proposal',
    step1Desc: 'Scope, data already in hand, timeline, what you expect from D.Lab.',
    step2Title: 'We reply within one business day',
    step2Desc: 'A senior analyst reads the proposal and schedules a 30-minute call to align format and credit.',
    step3Title: 'We design the collaboration together',
    step3Desc: 'Open publication, joint study, or consulting engagement, with explicit co-authorship.',
    modeSubmit: 'Submit research',
    modeCo: 'Propose co-research',
    modeData: 'Share dataset',
    modePeer: 'Peer review',
    modeConsulting: 'Consulting partner',
    formSubject: '[D.Lab Experts] Research collaboration proposal',
    fieldName: 'Full name',
    fieldNamePh: 'Your name',
    fieldEmail: 'Best email',
    fieldEmailPh: 'you@domain.com',
    fieldAffiliation: 'Affiliation / institution',
    fieldAffiliationPh: 'University, lab, company, independent',
    fieldRole: 'Role / title',
    fieldRolePh: 'e.g., Researcher, PhD candidate, Partner',
    fieldMode: 'Collaboration mode',
    modeOptSubmit: 'Submit a finished study',
    modeOptCo: 'Propose a co-research',
    modeOptData: 'Share a dataset',
    modeOptPeer: 'Peer review / technical review',
    modeOptConsulting: 'Consulting partner',
    modeOptOther: 'Other / I want to talk',
    fieldArea: 'Research area',
    areaIntel: 'Applied intelligence',
    areaCyber: 'Cybersecurity',
    areaPolicy: 'Policy / public policy',
    areaMarket: 'Market / behavior',
    areaAI: 'AI / automation',
    areaOther: 'Other',
    fieldMessage: 'Describe the proposal',
    fieldMessagePh: 'Share the context: what the study is about, data already collected, timeline, what you are looking for from D.Lab.',
    consent: 'I agree to be contacted about this proposal.',
    submit: 'Send proposal →',
    submitSending: 'Sending…',
    errorLead: "We couldn't send it right now. Try again, or write to",
    footnote: 'Your data is used solely to respond to this proposal. No mailing list, no sharing with third parties.',
    pageEyebrow: 'Open collaboration',
    pageTitleLead: 'Research is a',
    pageTitleAccent: 'collective effort.',
    pageLead1: 'The D.Lab Experts Research Hub operates in open mode. We publish our own research and open space for researchers, independent scientists, and frontier minds to bring studies, data, methodology, or to propose joint investigation on the lines of our agenda. Co-authorship, explicit credit, exposed methodology.',
    pageLead2: "The same stance applies to consulting. When a client project needs expertise we don't have, we bring in partners with explicit credit, never anonymously. Private company, collaborative culture.",
    modesLabel: 'How to collaborate',
    modesTitleLead: 'Four modes.',
    modesTitleAccent: 'One standard of rigor.',
    modesSub: 'Choose what fits your research moment. Each mode goes through the same methodological review before becoming a public publication.',
    modeSubmitTitle: 'Submit existing research',
    modeSubmitDesc: 'You have already run the study and want a stable audience and attribution. We do a methodological review and, if accepted, publish with explicit co-authorship and exposed reasoning.',
    modeCoTitle: 'Propose co-research',
    modeCoDesc: 'One of our agenda lines (market, tech foresight, competition, or decision) interests you and you want to build the study together. Scope, timeline, and division of work negotiated at the start.',
    modeDataTitle: 'Share data or methodology',
    modeDataDesc: 'New datasets, instrumented techniques, analysis frameworks. We use them with credit, document the provenance, and, when it makes sense, return value via joint publication.',
    modePeerTitle: 'Act as a peer reviewer',
    // DRAFT: confirm copy — makes the contributor → peer reviewer → bench consultant track explicit.
    modePeerDesc: 'You have depth in one of the agenda lines and want to contribute technical review of research before publication. Named attribution optional, methodology always traceable. It is also the door to the consultant bench: recurring contributors and reviewers, with senior curation, can be tapped for client engagements with explicit credit.',
    processLabel: 'Process',
    processTitleLead: 'From proposal',
    processTitleAccent: 'to publication.',
    step1Name: 'Proposal',
    step1DescFull: 'You describe the context, the collaboration mode, and, if it already exists, the current material.',
    step2Name: 'Screening',
    step2DescFull: 'We reply within 3 business days: fit with the agenda, methodological questions, next steps.',
    step3Name: 'Alignment',
    step3DescFull: 'A 45-minute call to align scope, authorship, attribution, timeline, and what is public versus reserved.',
    step4Name: 'Publication',
    step4DescFull: 'Methodological review, joint editing, and publication on the Research Hub with explicit credit and DOI-ready.',
    formLabel: 'Proposal',
    formTitle: 'Propose a collaboration',
    formSub: 'The more context you bring, the faster we reply. But even a raw idea goes through screening.',
    emailLead: 'Send your collaboration proposal straight to our inbox — tell us the context, the front you’re interested in, and the format. We reply personally.',
    emailCta: 'Send proposal by email →',
    fieldFieldWork: 'Field of work',
    fieldFieldWorkPh: 'e.g., economist, researcher, founder',
    fieldLine: 'Research agenda line',
    lineMarkets: 'Markets & Behavior',
    lineStrategy: 'Strategy & Decision',
    linePolitics: 'Politics, Opinion & Regulation',
    lineTech: 'Tech Foresight & AI',
    lineCompetitive: 'Competitive Intelligence',
    lineCyber: 'Cyber & Modern Surfaces',
    lineOther: 'Other (describe in the proposal)',
    modeOptIdea: 'Discuss an idea',
    fieldLinks: 'Links (optional)',
    fieldLinksPh: 'Portfolio, previous articles, CV, ORCID, repository. Anything that adds context.',
    fieldProposal: 'Proposal',
    fieldProposalPh: 'Describe what you are proposing: research question, hypothesis, current state of the work, data or methodology involved, what you expect from the collaboration.',
    consentFull: 'I authorize D.Lab Experts to respond to this proposal and, if there is a fit, to start a conversation about collaboration.',
  },

  solucoesPage: {
    heroEyebrow: 'Our services',
    heroTitleLead: 'AI services that',
    heroTitleAccent: 'turn into results.',
    heroSub: 'We implement AI and agents inside your operation — from support to finance. Each service starts with a diagnosis that proves where it pays off, is custom-built, and has measured impact, before and after. Looking for the free tools? They live on the Blog.',

    // Positioning strip — anchor the "free" and the community
    // commitment right below the hero.
    commitmentLabel: 'Commitment',
    commitmentTitle: 'All solutions are free.',
    commitmentBody: 'It is part of the D.Lab way: we are a community of researchers, engineers, and innovators that wants to add value for those who decide, operate, and build. Paid consulting when the context calls for it. Research and tools, always free.',

    // Tool 1 — Decision Diagnostic (live)
    tool1Status: 'Available',
    tool1Category: 'Strategic decision',
    tool1Title: 'Decision Diagnosis',
    tool1Desc: 'Quantifies the risk of deciding without data. Estimates the probability of a high-quality decision and the exposure range in R$ from 5 inputs. Every coefficient anchored in external research (McKinsey, Brynjolfsson/MIT, Bain, PMI, Kahneman, Bezos, IBM).',
    tool1Chip0: 'Free',
    tool1Chip1: '5 inputs',
    tool1Chip2: '~60 seconds',
    tool1Chip3: '7 sources cited',
    tool1Chip4: 'Open method',
    tool1Meta: '5 inputs · 7 sources cited · open method',
    tool1Cta: 'Open the diagnosis →',

    // Tool 2 — Components for AI use (available, expanding)
    tool2Status: 'Available',
    tool2Category: 'Applied AI',
    tool2Title: 'Components for AI use',
    tool2Desc: 'Open repository of skills, components, and workflows to plug into AI systems. Each item documented with methodology, use cases, and direct download. First component already published, more coming.',
    tool2Chip0: 'Free',
    tool2Chip1: 'No sign-up',
    tool2Chip2: 'D.Lab curation',
    tool2Chip3: 'Direct download',
    tool2Chip4: 'Expanding',
    tool2Meta: 'D.Lab curation · direct download · no sign-up',
    tool2Cta: 'Explore components →',

    ctaTitle: 'Which process do we automate first?',
    ctaSub: 'Tell us where it hurts in your operation. We start with the diagnosis, prove where AI returns, and implement the service custom-built — with measured impact, before and after. An initial conversation with no commitment.',
    ctaPrimary: 'Request a diagnosis →',
    ctaSecondary: 'See the free tools',
  },

  componentesIaPage: {
    // Hero
    heroBreadcrumbBack: '← Solutions',
    heroEyebrow: 'Components for AI use',
    heroTitleLead: 'Skills, components, and workflows to',
    heroTitleAccent: 'plug into AI systems.',
    heroSub: 'Open curation by D.Lab Experts. Each item has documented methodology, a real use case, and direct download. Free, no sign-up, no dark pattern.',

    // Strip / commitment
    commitmentLabel: 'Commitment',
    commitmentTitle: 'All open, all free.',
    commitmentBody: 'We publish research as proof of method. Components for AI follow the same logic: what works in the operation, we open up. Use it, adapt it, contribute.',

    // Index — list section
    listLabel: 'Available components',
    listSub: 'Currently 1 component published. Others already in curation — if you want to propose yours, talk to us.',
    listEmpty: 'More components coming soon.',

    // Skill card (research-statistics-engine)
    skill1Status: 'Available',
    skill1Type: 'Claude Skill',
    skill1Title: 'Research & Statistics Engine',
    skill1Subtitle: 'Scientific research, statistics, and market intelligence',
    skill1Desc: 'A skill that makes Claude operate as a senior quantitative researcher. Data analysis, statistical tests, regression and forecasting, literature review, market sizing (TAM/SAM/SOM), epidemiology, and study design. It triggers on its own when the user asks to analyze data or research evidence — no need to invoke.',
    skill1Tag1: 'Statistics',
    skill1Tag2: 'Data analysis',
    skill1Tag3: 'Market intelligence',
    skill1Tag4: 'Epidemiology',
    skill1Cta: 'See details & download →',

    // CTA at the bottom
    ctaTitle: 'Have a component to contribute?',
    ctaSub: 'Useful skills for applied AI are rare. If you built one that works in production and want to publish with us, send a message.',
    ctaPrimary: 'Propose a component →',
    ctaSecondary: 'See other solutions',
  },

  componentesIaResearchStats: {
    // Breadcrumb / hero
    breadcrumbBack: '← Components for AI use',
    heroEyebrow: 'Claude Skill · Research & Statistics',
    heroTitle: 'Research & Statistics Engine',
    heroSubtitle: 'Scientific research, statistics, data analysis, epidemiology, and market intelligence.',
    heroStatusLive: 'Available',
    heroVersion: 'v1.0',
    heroSize: '~36 KB',
    heroLicense: 'Open',

    // Download primary card
    downloadLabel: 'Download',
    downloadTitle: 'Download the skill',
    downloadDesc: 'A .skill file (official Claude Skill package). Import it directly into Claude Code via /skills or unzip it into ~/.claude/skills/.',
    downloadButton: 'Download research-statistics-engine.skill',
    downloadHint: 'No sign-up. No analytics. Just a direct download.',

    // What it does
    whatLabel: 'What it does',
    whatTitle: 'A senior quantitative researcher, in skill form.',
    whatBody: 'It makes Claude operate at the standard of a strong-journal peer reviewer and a top-consulting lead analyst — rigorous, transparent about uncertainty, useful for real decisions. It triggers automatically on requests like "is this statistically significant?", "analyze these numbers", "how big is this market?", "what does the literature say about X?", "design a cohort study". No need to invoke it manually.',

    // Two modes
    modesLabel: 'Two modes of operation',
    modeATitle: 'Mode A — Empirical analysis',
    modeABody: 'The user hands over data (a file, a pasted table, a list of numbers) and wants analysis. Inspection before modeling (an EDA script included), assumption checks, deliberate choice of method, execution in real Python, interpretation with effect size + confidence interval, honest limitations.',
    modeBTitle: 'Mode B — Research & intelligence',
    modeBBody: 'A question with no dataset: "what does the research say about", "how big is this market", "design a study". It searches for evidence in primary sources (PubMed, IBGE, DATASUS, IPEA, OECD, World Bank, WHO, BACEN), validates date/methodology/bias, reconciles conflicts without lazy averages, always cites.',

    // Principles
    principlesLabel: 'Non-negotiable principles',
    principlesIntro: 'They exist because a confident, wrong answer in this domain leads to genuinely bad decisions.',
    principle1Title: 'Never fabricate',
    principle1Body: "No invented sources, no guessed numbers, no placeholder citations. If the number doesn't come from the user's data or a real source consulted, it isn't stated.",
    principle2Title: 'Label the epistemic status',
    principle2Body: 'FACT (comes from data or a source), INTERPRETATION (a reading), HYPOTHESIS (a testable proposition), SPECULATION (an informed guess). The reader never has to guess.',
    principle3Title: 'Correlation is not causation',
    principle3Body: 'Causal language only when the design allows it (RCT, natural experiment, causal-inference method) — and the design is made explicit.',
    principle4Title: 'Quantify uncertainty',
    principle4Body: 'Confidence intervals, effect sizes, samples, and p-values appear together. Never a p-value alone. Never an effect size without an interval.',
    principle5Title: 'Evidence hierarchy',
    principle5Body: 'Meta-analysis > systematic review > RCT > cohort > case-control > cross-sectional > institutional dataset > industry report > opinion.',
    principle6Title: 'Expose limitations',
    principle6Body: 'Every analysis ends with what could be wrong: confounding, bias, small n, selection, generalization, data quality.',

    // What's inside
    insideLabel: "What's inside",
    inside1Name: 'SKILL.md',
    inside1Desc: 'The full specification: triggers, workflows, principles, a statistical-test router, output templates, a rigor checklist.',
    inside2Name: 'references/methods.md',
    inside2Desc: 'A catalog of statistical and ML methods: when to use them, assumptions, formulas, evaluation metrics, a preprocessing guide.',
    inside3Name: 'references/data-sources.md',
    inside3Desc: 'Brazilian data sources (IBGE, DATASUS, IPEA, Fiocruz, SciELO, BACEN) and international ones (PubMed, WHO, OECD, World Bank, OWID) mapped with reliability and data type.',
    inside4Name: 'scripts/eda.py',
    inside4Desc: 'An automated exploratory data analysis script. Runs on CSV/Excel: shape, dtypes, missingness, descriptives, distributions, outliers, correlations.',

    // Install
    installLabel: 'How to install',
    installStep1Title: 'Download the .skill file',
    installStep1Body: 'Click "Download research-statistics-engine.skill" above.',
    installStep2Title: 'Add it to Claude Code',
    installStep2Body: 'Move the file to ~/.claude/skills/ (or unzip it as a folder in there). Claude Code loads it automatically.',
    installStep3Title: 'Use it without invoking',
    installStep3Body: 'The skill triggers on its own when the request involves data or evidence. Ask "is this statistically significant?" and it activates.',

    // Use cases
    casesLabel: 'When to use it',
    case1: '"Analyze these numbers, is this a real difference?" → Mode A, a hypothesis test with assumption checks and effect size.',
    case2: '"How much is the market for X worth in Brazil?" → Mode B, TAM/SAM/SOM with primary sources, a conservative/base/optimistic range.',
    case3: '"What does the research say about Y?" → Mode B, a review with evidence hierarchy and conflicts flagged.',
    case4: '"Forecast this sales history." → Mode A, ARIMA/SARIMA/Prophet with a confidence interval.',
    case5: '"Design a study to answer Z." → Mode B, choice of design (cohort, case-control, cross-sectional) with justification.',
    case6: '"What is the prevalence of hypertension in SP?" → Mode B, epidemiology via DATASUS/Fiocruz/WHO with the calculation method.',

    // CTA
    ctaTitle: 'Built something similar?',
    ctaSub: 'We curate components for applied AI. If your skill works in production and you want to publish, talk to us.',
    ctaPrimary: 'Propose a component →',
    ctaSecondary: 'See other components',
  },

  imprensaPage: {
    findingsEmpty: 'New original studies will be published soon.',
    heroEyebrow: 'Press room',
    heroTitleLead: 'D.Lab Experts',
    heroTitleAccent: 'for journalists.',
    heroSub: 'Direct contact, researcher bios, high-resolution logos, and key findings from published research. Use it, cite it, publish it. We only ask for explicit attribution to D.Lab Experts and a link to the source study.',

    contactLabel: 'Press contact',
    contactEmailLabel: 'Direct email',
    contactEmail: 'olegas@4real.ventures',
    contactResponse: 'Response within 1 business day',
    contactLinkedinLabel: 'LinkedIn',
    contactLinkedinHandle: '@d-lab-intelligence',
    contactNote: 'For interviews, additional data, embargoes, or early access to research in preparation, reach the lead directly.',

    authorsLabel: 'Researchers available',
    author1Name: 'Gabriel Olegário',
    author1Role: 'Founder and lead researcher',
    author1Bio: 'Leads the applied-intelligence front at D.Lab Experts. Researches strategic decision-making, market, and consumer behavior, focused on translating primary data into actionable recommendations for boards, founders, and operators. Author of the original research published on the Research Hub.',
    author1Expertise: 'Decision intelligence, market research, consumer behavior, quantitative methodology',
    // DRAFT: confirm copy — cyber is no longer a managed operation/service
    // (SOC) and now appears only as one-off security consulting.
    author2Name: 'Gustavo Lima',
    author2Role: 'Information security consultant',
    author2Bio: 'Supports D.Lab Experts in information security as one-off consulting: posture diagnosis, best practices, and alignment to frameworks (LGPD, ISO 27001, NIST). On-demand support anchored in evidence, not a managed service.',
    author2Expertise: 'Information security, risk management, LGPD/ISO 27001/NIST, one-off consulting',

    findingsLabel: 'Key findings (ready to cite)',
    findingsSub: 'Anchor statistics from the published research. Each number is tied to the methodology and primary source in the corresponding study.',

    assetsLabel: 'Logos and visual assets',
    assetsSub: 'Use the high-resolution logos in editorial materials and social media. Do not modify colors, proportions, or add effects.',
    assetLogoFull: 'Horizontal logo (recommended)',
    assetLogoMark: 'D.Lab symbol',
    assetLogoIcon: 'Square icon (social media)',
    assetDownload: 'Download',

    usageLabel: 'Usage guidelines',
    usageItem1: 'Attribution to D.Lab Experts is required, with a link to the source study when cited online.',
    usageItem2: 'When citing a statistic, include the minimum context: sample, period, and source of the primary data (all declared in each study).',
    usageItem3: 'Charts and tables from the research may be reproduced while keeping the credit visible ("Source: D.Lab Experts, Year").',
    usageItem4: 'For adaptations or more in-depth reporting, we ask for a prior 15-minute conversation with the lead researcher.',

    ctaLabel: 'Ready to publish?',
    ctaSub: 'Reach us directly. We reply within one business day with any extra materials you need.',
    ctaPrimary: 'Talk to D.Lab →',
    ctaSecondary: 'See all research',
  },

  notFoundPage: {
    title: 'This page does not exist.',
    sub: 'The URL you accessed may have changed, been renamed, or never existed. But we have plenty of content for you to explore.',
    ctaHome: 'Back to home →',
    ctaPublications: 'See the open analyses',
    shortcutsLabel: 'Shortcuts',
    shortcutAgenda: 'Research agenda',
    shortcutProducts: 'Consulting',
    shortcutAbout: 'About D.Lab Experts',
    shortcutPublications: 'Open analyses',
    shortcutRss: 'Analyses RSS',
  },

  aboutBody: {
    p1: 'D.Lab Experts was born from a <strong>documented premise</strong>. According to SEBRAE (2023), <strong>73% of SMB managers make critical decisions by intuition</strong>. At the same time, LLMs and agents already do the repetitive work — but most companies do not know where to start. <em>We exist to solve exactly that.</em>',
    p2: 'We implement AI inside the operation: <strong>support agents, sales automation, back office, document reading, and data-driven decisions</strong>. Data-driven companies are <strong>23× more likely to acquire customers</strong> (McKinsey Global Institute) — and AI shortened the path to get there.',
    insight: 'Generic AI does not change results. What changes them is AI <strong>coupled to your process</strong> and with impact measured before and after.',
    insightSource: 'D.Lab Experts, 2026',
    p3: '',
    p4: 'We start small and prove first. <strong>Diagnosis before automating.</strong> <strong>Custom-built</strong> implementation for your operation, with the result <strong>measured in numbers</strong>. <em>No blank check and no black box.</em>',
  },

  aboutPage: {
    heroEyebrow: 'About D.Lab Experts',
    heroTitle: 'AI implementation.',
    heroTitleAccent: 'With method and proof.',
    heroSub: 'D.Lab Experts is an AI implementation agency and consultancy. We put AI and agents to work inside the operation of small and mid-sized businesses — starting with a diagnosis that proves where it pays off and measuring the result before and after.',
    heroStatAILabel: 'AI & data market through 2030 (IDC)',
    heroStatSmbLabel: 'of SMBs decide without data (SEBRAE, 2023)',
    heroStatBreachLabel: 'More likely to acquire customers, data-driven companies (McKinsey)',
    heroStatDualVal: 'Custom-built',
    heroStatDualLabel: 'Built for your operation, not a generic product',

    whoEyebrow: 'Who we are',
    whoTitle: 'What D.Lab Experts is',
    whoLead: 'An <strong style="color:var(--white)">AI agency and consultancy</strong> that treats <strong style="color:var(--white)">implementation</strong> as what actually changes the result: agents and automations running inside your process. We start by proving where AI returns and measure the impact — no hype and no black box.',
    whoAsideIntuitLabel: 'of SMB managers decide by intuition',
    whoAsideIntuitSrc: 'SEBRAE, 2023',
    whoAsideCustLabel: 'more customers at data-driven companies',
    whoAsideCustSrc: 'McKinsey Global Institute',
    whoAsideBreachLabel: 'average cost of a data breach',
    whoAsideBreachSrc: 'IBM, 2024',

    scopeEyebrow: 'What we do',
    scopeTitle: 'Where we implement AI',
    scopeLead: 'AI and agents coupled to the processes that already exist in your operation — from support to finance. Each front starts with a diagnosis and ends with measured impact.',

    intelName: 'Implementation fronts',
    intelDesc: 'Not generic AI: we build the agents and automations inside your process, connected to your tools. These are the fronts where AI tends to return the most in small and mid-sized businesses:',
    intelItem1: '24/7 support: an agent that answers and triages demand',
    intelItem2: 'Sales: automated lead qualification and follow-up',
    intelItem3: 'Operations: automation of repetitive tasks and reports',
    intelItem4: 'Finance: reading and reconciliation of documents and invoices',
    intelItem5: 'Data & decisions: on-demand dashboards and analyses',
    intelItem6: 'AI diagnosis: where it is worth automating first',

    cyberName: 'Cybersecurity',
    cyberDesc: 'Cybercrime is projected to cost <strong>US$ 10.5 trillion per year globally by 2025</strong> (Cybersecurity Ventures). We operate a <strong>Security Operations Center</strong> focused on <strong>after-hours coverage</strong> (the window when attacker activity actually happens), so the first sign of compromise reaches someone <em>awake and on duty</em>.',
    cyberItem1: 'SOC · after-hours and overnight monitoring',
    cyberItem2: 'Log correlation and alert triage',
    cyberItem3: 'Incident response and real-time escalation',
    cyberItem4: 'Observability of LLMs and agents in operation',
    cyberItem5: 'Compliance with GDPR, ISO 27001, NIST, and LGPD',
    cyberItem6: 'Team training and security awareness',

    methodEyebrow: 'Methodology',
    methodTitle: 'How we operate',
    methodLead: 'One protocol, four steps, from question to delivery. Four pillars run through every step. None is negotiable.',
    methodStep1Title: 'Briefing',
    methodStep1Desc: 'We frame the context, the hypothesis, and the decision criteria, or the risk perimeter to map.',
    methodStep2Title: 'Collection & Modeling',
    methodStep2Desc: 'We cross multiple data sources, public and primary, with documented instrumentation so the finding is reproducible.',
    methodStep3Title: 'Synthesis',
    methodStep3Desc: 'Raw data converted into structured insight with scores, classifications, and visualizations.',
    methodStep4Title: 'Delivery',
    methodStep4Desc: 'A full report with a clear recommendation, a prioritized action plan, and an interpretation call.',

    pillar1Title: 'Methodological rigor',
    pillar1Desc: 'Every analysis with documented, replicable, transparent methodology.',
    pillar2Title: 'Primary data',
    pillar2Desc: 'Our own collection when open sources are not enough for the decision.',
    pillar3Title: 'Exposed reasoning',
    pillar3Desc: 'You see exactly how we reached the recommendation or the diagnosis.',
    pillar4Title: 'Independence',
    pillar4Desc: 'No bias. We report what the data shows, not what the thesis would like.',

    whyEyebrow: 'The landscape',
    whyTitleLead: 'Why this matters',
    whyTitleAccent: 'now',
    whyLead: 'The window for strategic decisions has never been so narrow. The cost of getting it wrong is documented and only grows.',
    whyAsideFailLabel: 'of new businesses close in the first year',
    whyAsideFailSrc: 'Bureau of Labor Statistics',
    whyAsideRansomLabel: 'annual growth of global ransomware attacks',
    whyAsideRansomSrc: 'Statista, 2024',
    whyAsideBiLabel: 'Business Intelligence market through 2027',
    whyAsideBiSrc: 'Mordor Intelligence',

    whyP1: 'The landscape demands action. <strong>29% of new businesses close in the first year</strong> and <strong>50% before the fifth</strong>. The main cause is not a lack of capital. <em>It is a lack of information to decide.</em>',
    whyP2: 'At the same time, ransomware attacks grew <strong>72% globally year over year</strong> (Statista, 2024), and regulators imposed fines that reached <strong>tens of millions of dollars</strong>. The boom in LLMs and autonomous agents only worsens the math: <strong>faster execution and newly exposed surfaces at the same time</strong>.',
    whyInsight: 'Companies that adopt a data-driven culture see <strong>5 to 8% more productivity and 6% more profitability</strong> than their peers.',
    whyInsightSrc: 'Harvard Business Review',
    whyP3: 'On the positive side, the numbers show opportunity. The Business Intelligence market is expected to reach <strong>US$ 33 billion by 2027</strong> (Mordor Intelligence). Those who move with a <strong>solid read of the context</strong> capture <em>compounding advantage</em> over those who wait for the competitor to go first.',
    whyP4: 'D.Lab Experts exists to close that gap. <strong>AI implemented where it truly returns.</strong> <strong>Custom-built for your operation.</strong> <em>With impact measured before and after, not a percentage promised blindly.</em>',

    ctaTitleLead: 'Put AI to work',
    ctaTitleAccent: 'in your operation.',
    ctaLead: 'It starts with the diagnosis: we prove where AI returns and implement it custom-built. An initial conversation with no commitment.',
    ctaPrimary: 'Request a diagnosis →',
    ctaSecondary: 'See how it works',
  },

  diagnostic: {
    heroEyebrow: 'Decision Diagnosis',
    heroTitleLead: 'Quantify the risk of',
    heroTitleAccent: 'deciding without data.',
    heroSub: 'Five questions, two outputs, every coefficient anchored in peer-reviewed research. An illustrative reference, not a forecast.',
    heroStep1: '5 inputs',
    heroStep2: '~60 seconds',
    heroStep3: 'Open sources',

    formTitle: 'Describe the decision',
    formSub: 'The results panel updates in real time as you fill it in.',

    q1Title: '01 · Size of the decision',
    q1Desc: 'The approximate financial weight of the decision (the capital, revenue, or cost at stake).',
    q1Opt1: 'Up to R$ 100k',
    q1Opt2: 'R$ 100k – R$ 1M',
    q1Opt3: 'R$ 1M – R$ 10M',
    q1Opt4: 'Above R$ 10M',

    q2Title: '02 · Reversibility',
    q2Desc: 'A two-way door (you can go back in weeks) or a one-way door (hard to undo)? Bezos framework.',
    q2Opt1: 'Two-way: you can go back',
    q2Opt2: 'One-way: commits the organization',

    q3Title: '03 · Data maturity',
    q3Desc: 'How the organization usually gets the information that shapes the decision.',
    q3Opt1: 'None: pure intuition or hearsay',
    q3Opt2: 'Ad-hoc: spreadsheets, scattered sources',
    q3Opt3: 'Systematic: documented, cross-referenced, audited',

    q4Title: '04 · Time pressure',
    q4Desc: 'How much time you have before the decision needs to be made.',
    q4Opt1: 'Urgent: less than a week',
    q4Opt2: 'Standard: 1 to 4 weeks',
    q4Opt3: 'Exploratory: weeks to quarters',

    q5Title: '05 · Stakeholders',
    q5Desc: 'How many people need to align on the final decision. The literature shows a sweet spot: 2–5 deciders tend to outperform both the solo decider (single-person bias) and the large committee (coordination cost).',
    q5Opt1: '1 decider',
    q5Opt2: '2 to 5 deciders',
    q5Opt3: '6 or more deciders',

    resultTitle: 'Preliminary reading',
    resultStaleHint: 'Answer the 5 questions to see the reading.',
    resultQualityLabel: 'Estimated probability of a high-quality decision',
    resultQualityVsBase: 'vs. a 37% baseline (McKinsey, 2019)',
    resultExposureLabel: 'Value at risk: exposure range',
    resultExposureHint: 'Illustrative, based on published coefficients',
    resultBadgeRed: 'High-risk zone',
    resultBadgeYellow: 'Caution zone',
    resultBadgeGreen: 'Managed-risk zone',
    resultBadgeRedSub: 'The combination of answers places this decision in the lower quartile of quality reported in the literature. It is worth slowing down.',
    resultBadgeYellowSub: 'The answers place the decision near the sector median. Take one or two of the actions below to push it toward the upper quartile.',
    resultBadgeGreenSub: 'The answers place the decision above the sector baseline. The methodology is broadly aligned with the literature on high-quality decisions.',

    narrativeReadingLead: 'Reading',
    narrativeContextLead: 'Context',
    narrativeIntro: 'Decision quality lands at <strong>{percent}%</strong>, {delta} the <strong>37%</strong> baseline from McKinsey 2019 (n=1,300+ senior executives).',
    narrativeDeltaAbove: '{n}pp above',
    narrativeDeltaBelow: '{n}pp below',
    narrativeDeltaEqual: 'exactly on',
    narrativeCloseRed: 'Taken together, this is the profile the literature points to as the highest risk. It is worth a pause.',
    narrativeCloseYellow: 'This is near the sector median. The strongest lever among the recommended actions is the one worth pulling first.',
    narrativeCloseGreen: 'This profile aligns with the upper quartile of decision quality in the reviewed studies. Keep the stance.',

    narrDataNone: 'zero data maturity places this decision in the same cohort that SEBRAE (2023) documents for the <strong>73% of SMB managers who decide by intuition</strong>',
    narrDataAdhoc: 'ad-hoc data is better than nothing, but Brynjolfsson, McAfee & Hitt (MIT/HBR, 2011) only observed the <strong>5–6% productivity gain</strong> in <em>systematic</em> practice',
    narrDataSystematic: 'the systematic data stance is exactly what Brynjolfsson, McAfee & Hitt (MIT/HBR, 2011) correlated with <strong>+5–6% in productivity and profitability</strong> over peers in the same sector',

    narrTimeUrgent: 'the under-one-week window amplifies anchoring and overconfidence. Kahneman & Tversky\'s body of work shows quality drops sharply when the decision is compressed',
    narrTimeStandard: 'the 1-to-4-week horizon sits in the deliberate-decision zone, where structured frameworks can run',
    narrTimeExplor: 'weeks to quarters leaves room for real exploration: it is exactly what Kahneman\'s "decision hygiene" framing recommends',

    narrRevTwo: 'it is a <strong>two-way door</strong> (Bezos, 1997), so the downside is limited by the cost of reversal',
    narrRevOne: 'it is a <strong>one-way door</strong> (Bezos, 1997). The downside accumulates because the decision cannot be undone in a few weeks',

    narrStkSolo: 'with a single decider, speed is at its maximum, but there is no second opinion to check the single-person biases cataloged by Kahneman (anchoring, availability, overconfidence)',
    narrStkSmall: '2 to 5 deciders is the sweet spot in the literature: enough for the wisdom-of-crowds effect documented by Surowiecki (2004), without the coordination cost that Bain flags in larger committees',
    narrStkLarge: '6+ deciders introduces the coordination cost and groupthink pressure that Bain\'s <em>Decide & Deliver</em> (2010) associates with slower, lower-quality outcomes',

    narrSize0: 'the financial scale is modest, so exposure stays contained even on the worst path',
    narrSize1: 'the R$ 100k to R$ 1M range is precisely where most SMBs hit the first-year mortality curve (<strong>29%</strong>, BLS). The quality calculation carries weight',
    narrSize2: 'between R$ 1M and R$ 10M, decision quality translates directly into the survival of the bet itself',
    narrSize3: 'above R$ 10M, each percentage point of quality probability moves material capital. The exposure range below is not metaphorical',

    actionsTitle: 'Recommended next actions',
    actionBriefingTitle: "Explore D.Lab's research",
    actionBriefingDesc: 'Original studies on decision, market, and risk, with documented methodology and primary data.',
    actionBriefingCta: 'See publications →',
    actionResearchTitle: 'Commission a diagnostic briefing',
    actionResearchDesc: 'A paid diagnosis, with a closed scope, applying the same rigor to your specific decision. Typical timeline: 2 to 3 weeks.',
    actionResearchCta: 'Talk to D.Lab →',
    actionFrameworkTitle: 'Slow the decision down',
    actionFrameworkDesc: 'A one-way door under urgent pressure has the worst expected value in the literature. Negotiate 1 extra week before you call it.',
    actionFrameworkCta: 'See the framework →',
    actionDataTitle: 'Close the data gap first',
    actionDataDesc: 'With zero data maturity, expected quality lands ~15pp below the baseline. A 2-week discovery sprint usually pays for itself.',
    actionDataCta: 'Propose a sprint →',

    methodologyTitle: 'How we calculate',
    methodologySub: 'Each coefficient below is pulled from a peer-reviewed source or a published sector study. The goal is a defensible range, not an exact forecast.',
    methodologyFormulaTitle: 'The model',
    methodologyFormulaQuality: '<strong>Quality</strong> = 37% (baseline) + adjustments for data maturity, time pressure, and stakeholders. Capped between 5% and 75%.',
    methodologyFormulaExposure: '<strong>Exposure range</strong> = size of the decision × (1 − quality) × [5% .. 25%], multiplied by 1.5 for one-way decisions.',
    methodologySourcesTitle: 'Sources',

    srcMcKinsey: 'McKinsey & Company, "Decision Making in the Age of Urgency", 2019: 37% of senior executives surveyed rated their typical decisions as high quality. This sets the baseline of our estimate.',
    srcBrynjolfsson: 'Brynjolfsson, McAfee & Hitt, MIT Sloan / HBR, "Strength in Numbers: How Does Data-Driven Decisionmaking Affect Firm Performance?", 2011: data-driven companies are 5 to 6% more productive and profitable than peers. We conservatively translate this into +12pp of quality for systematic data maturity.',
    srcPMI: 'PMI, "Pulse of the Profession" (2020): organizations waste ~9.9% of every dollar invested to poor project performance. This grounds the lower bound of our exposure range (5%, conservative).',
    srcBezos: 'Jeff Bezos, 1997 shareholder letter and subsequent writings: the "one-way doors vs. two-way doors" framework. Irreversible decisions carry a 1.5× multiplier on the downside in our model.',
    srcBain: 'Bain & Company, Blenko, Mankins, Rogers, "Decide & Deliver" (2010) + Surowiecki, "The Wisdom of Crowds" (2004) + Kahneman\'s "decision hygiene": decision quality is non-monotonic with respect to group size. A small group (2 to 5) outperforms both the solo decider (single-point bias) and the large committee (coordination cost, groupthink). We apply +3pp for groups of 2 to 5, −6pp for 6+, and 0pp for solo.',
    srcKahneman: 'Kahneman & Tversky, decades of literature on biases (synthesized in *Thinking, Fast and Slow*, 2011): time pressure amplifies overconfidence and anchoring. Urgent decision → −10pp of quality.',
    srcIBM: 'IBM, "Cost of a Data Breach Report 2024": the global average cost of a breach is US$ 4.88M. A contextual reference when the decision involves newly exposed surfaces.',

    disclaimerTitle: 'What this is not',
    disclaimerBody: 'This diagnosis is an illustrative reference based on external benchmarks. It is not a forecast, not a valuation, not a consulting opinion. Real results depend on your data, your context, and your execution. For a decision that matters, run the real analysis, or schedule a closed-scope diagnosis with D.Lab.',

    ctaFinal: 'Apply this rigor to your real decision',
    ctaFinalSub: 'The diagnosis is public because the method is what matters. When you need the same rigor applied to your specific context, we have a closed-scope engagement for that.',
    ctaFinalPrimary: 'Schedule a diagnosis →',
    ctaFinalSecondary: 'See the blog',

    homeEyebrow: 'Quick diagnosis',
    homePromoTitle: 'How much is this decision',
    homePromoAccent: 'costing you?',
    homePromoSub: 'Five inputs, two outputs. An illustrative reference anchored in McKinsey, MIT, Bain, and PMI research. Not a forecast. 60 seconds, fully open method.',
    homePromoCta: 'Open the tool →',
    homePromoStat1Label: 'inputs',
    homePromoStat1Val: '5',
    homePromoStat2Label: 'sources cited',
    homePromoStat2Val: '7',
    homePromoStat3Label: 'seconds',
    homePromoStat3Val: '~60',
  },
};

export default en;

// ── Home FAQ (FAQPage JSON-LD + AEO) ──────────────────────────────────
// Real questions prospects ask about D.Lab. Rendered as a
// schema.org/FAQPage in the home <head> (see Home.astro). Best practice:
// self-contained answers (an AI engine can cite the answer without the
// rest of the page), 40–320 characters, no markup.
export interface FaqItem {
  q: string;
  a: string;
}
export const homeFaq: FaqItem[] = [
  {
    q: 'What does D.Lab Experts do?',
    a: 'D.Lab Experts is an AI implementation agency for mid-sized companies and scaleups. We diagnose where AI pays off, implement custom-built agents and automations, and measure the impact on efficiency and margin before and after.',
  },
  {
    q: 'How does the AI implementation process work?',
    a: 'In three steps: (1) a diagnosis that proves where AI pays off in your operation; (2) custom-built implementation of agents and automations wired into your systems; (3) impact measurement, comparing metrics before and after.',
  },
  {
    q: 'What kind of company is D.Lab’s AI for?',
    a: 'For mid-sized companies and scaleups that want to raise efficiency and margin with no hype and no black box. We work across support, sales, operations, finance, and data, always starting where the return is proven.',
  },
  {
    q: 'How soon do results show up?',
    a: 'The diagnosis delivers a map of what is worth automating within a few weeks. From there, every implemented workstream is measured against the baseline, so the return is tracked with numbers, not promises.',
  },
  {
    q: 'Does D.Lab replace or disrupt my current operation?',
    a: 'No. The AI and agents plug into the tools and data you already use, without rewriting everything. We start by proving value in a controlled scope and only scale what delivers real return.',
  },
];

// ── Service area pages (services constellation) ───────────────────────
// Each node of the constellation on the home (Support, Sales, Operations,
// Finance, Data) leads to /solucoes/<slug>, a dedicated page that
// explains how D.Lab helps on that front: the challenge, how we help,
// how we implement (diagnosis → custom-built → measured impact) and a
// market reference (labeled, never as a client result).
// Kept here, alongside the rest of the copy, but as a named export to be
// consumed directly by the route (without going through the typed t() resolver).

// Fixed labels shared by all area pages.
export const serviceAreaChrome = {
  backToAll: '← All services',
  heroDiagnosisCta: 'Take the diagnosis',
  relatedCardCta: 'See how we help →',
  problemLabel: 'The challenge',
  helpLabel: 'How we can help',
  howLabel: 'How we implement',
  metricLabel: 'Market reference',
  metricDisclaimer: 'A market reference number — not a result from a D.Lab client.',
  relatedLabel: 'Other fronts where we help',
  ctaTitle: 'Want to see this running in your operation?',
  ctaSub: 'Tell us where it hurts and a senior specialist replies within one business day with a clear path: diagnosis, scope, and expected impact.',
  ctaPrimary: 'Talk to a specialist',
  ctaSecondary: 'See all services',
  steps: [
    {
      title: 'Diagnosis',
      body: 'We start by proving where AI pays off in your operation — a small scope and clear impact, before any building.',
    },
    {
      title: 'Custom-built implementation',
      body: 'We build the solution coupled to the processes and tools you already use, with your brand\'s voice and rules.',
    },
    {
      title: 'Measured impact',
      body: 'We measure the result before and after and adjust. You see the gain in numbers, not in a promise.',
    },
  ],
} as const;

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'atendimento',
    label: 'Support',
    tag: 'Support / Customer service',
    accent: '#8B5CF6',
    accentDeep: '#4C1D95',
    title: '24/7 support,',
    titleAccent: 'no queue and no overtime.',
    sub: 'An AI agent answers and triages demand day and night, resolves the repetitive on the spot, and passes to your team only what needs a person.',
    problem:
      'The queue grows at peak hours, the customer waits, and the team burns out answering the same question dozens of times. After hours no one answers — and the opportunity goes cold.',
    help: [
      'We map the most common questions and flows in your support and what can be resolved without a human.',
      'We connect an agent to your channel — WhatsApp, site, or email — with your brand\'s voice and rules.',
      'We define when and how to escalate to the team, so a person steps in only where it is truly needed.',
      'We measure response time and volume resolved before and after, to prove the gain.',
    ],
    metricVal: '−40% in response time',
    metricNote: 'market estimate',
    related: ['comercial', 'operacoes'],
    seoTitle: '24/7 support with AI | D.Lab Services',
    seoDescription:
      'An AI agent that answers and triages support day and night, resolves the repetitive on the spot, and escalates to the team only what needs a person. Diagnosis and measured impact.',
  },
  {
    slug: 'comercial',
    label: 'Sales',
    tag: 'Sales',
    accent: '#6366F1',
    accentDeep: '#312E81',
    title: 'No lead',
    titleAccent: 'going cold in the queue.',
    sub: 'Automation that qualifies and follows up on leads the moment they arrive, integrated with the CRM or spreadsheet you already use.',
    problem:
      'The lead comes in with hot intent and goes cold waiting for someone to reply. Without consistent follow-up, a good opportunity becomes a lost number at the end of the month.',
    help: [
      'We capture and automatically qualify every lead that comes in, through any channel.',
      'We fire sequenced follow-up, in the right tone, without depending on someone remembering.',
      'We integrate with your CRM or spreadsheet — without swapping the tools the team already uses.',
      'We set up a dashboard of leads worked and response rate to see the funnel.',
    ],
    metricVal: '+30% in leads worked',
    metricNote: 'market estimate',
    related: ['atendimento', 'dados'],
    seoTitle: 'Lead qualification and follow-up with AI | D.Lab Services',
    seoDescription:
      'Sales automation that qualifies and follows up on leads instantly, integrated with your CRM or spreadsheet. No opportunity going cold. Diagnosis and measured impact.',
  },
  {
    slug: 'operacoes',
    label: 'Operations',
    tag: 'Operations',
    accent: '#2DD4BF',
    accentDeep: '#0F5F58',
    title: 'Manual routine',
    titleAccent: 'running on its own.',
    sub: 'AI runs the repetitive tasks and builds the reports in the house standard, giving hours per week back to your team.',
    problem:
      'Much of the week vanishes into copy-and-paste, building reports, and running manual processes. It is work that tires, delays, and opens the door to error — without adding value.',
    help: [
      'We survey the manual routines that consume the most time and make sense to automate.',
      'We automate the processes end to end and generate the reports in the house standard.',
      'We connect the systems you already have, with no forced migration.',
      'We track the hours saved per week to show the return.',
    ],
    metricVal: 'Hours/week back to the team',
    metricNote: 'market reference',
    related: ['financeiro', 'dados'],
    seoTitle: 'Automation of repetitive tasks with AI | D.Lab Services',
    seoDescription:
      'AI runs the manual routines and builds the reports in the house standard, giving hours per week back to your team. Diagnosis and measured impact, before and after.',
  },
  {
    slug: 'financeiro',
    label: 'Finance',
    tag: 'Finance',
    accent: '#E0A75E',
    accentDeep: '#7C4310',
    title: 'Documents read',
    titleAccent: 'and reconciled on their own.',
    sub: 'AI reads invoices, bills, and contracts, reconciles and extracts the data into your system — and flags only the exceptions for human review.',
    problem:
      'Invoices, bills, and contracts arrive in different formats and require manual data entry and checking. It is slow, error-prone, and holds up the close.',
    help: [
      'We automatically read invoices, bills, and contracts, in any layout.',
      'We reconcile and extract the data straight into your system or spreadsheet.',
      'We set up an exception queue for human review, with an auditable trail.',
      'We measure reconciliation time before and after, to prove the gain.',
    ],
    metricVal: '−50% in reconciliation time',
    metricNote: 'market estimate',
    related: ['operacoes', 'dados'],
    seoTitle: 'Document reading and reconciliation with AI | D.Lab Services',
    seoDescription:
      'AI reads invoices, bills, and contracts, reconciles and extracts the data into your system and flags only the exceptions. Less data entry and error in finance. Measured impact.',
  },
  {
    slug: 'dados',
    label: 'Data',
    tag: 'Data & decisions',
    accent: '#E879A8',
    accentDeep: '#8B1F53',
    title: 'Answers in minutes,',
    titleAccent: 'not in days.',
    sub: 'Your scattered numbers become dashboards and answers in business language, ready the moment you need to decide.',
    problem:
      'The data lives in different spreadsheets, systems, and tabs. Each question becomes a request to someone, the answer takes days — and the decision is made in the dark or too late.',
    help: [
      'We unify the data sources you already have, without rewriting everything.',
      'We deliver dashboards and natural-language answers about your data.',
      'We define the indicators together with your team, in the business vocabulary.',
      'We put the answer one click away, so you decide with data instead of guesswork.',
    ],
    metricVal: 'Answers in minutes, not days',
    metricNote: 'market reference',
    related: ['comercial', 'operacoes'],
    seoTitle: 'On-demand dashboards and data analysis with AI | D.Lab Services',
    seoDescription:
      'Your scattered numbers become dashboards and answers in business language, ready when you need to decide. Decisions with data, not guesswork. Measured impact.',
  },
];
