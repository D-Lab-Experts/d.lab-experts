import type { Translation } from './utils';

// ES, first-pass translation from EN. Intended for Latin American
// audience; vocabulary leans neutral rather than Iberian Spanish.
// FLAG FOR REVIEW: this dictionary has not been reviewed by a native
// speaker yet. Tone and idiom will likely need a pass from a human
// translator before the ES locale goes loud in marketing.
const es: Translation = {
  meta: {
    siteName: 'D.Lab Experts',
    sealLine: 'Applied Intelligence Research',
    ogSiteName: 'D.Lab Experts',
    orgDescription:
      'Research Hub en inteligencia aplicada y ciberseguridad. Publicaciones abiertas, consultoría bajo NDA.',
  },

  nav: {
    home: 'Inicio',
    about: 'Sobre',
    segments: 'Investigación',
    products: 'Consultoría',
    blog: 'Publicaciones',
    contato: 'Contacto',
    collaborate: 'Colaborar',
    ariaLogo: 'D.Lab Experts, ir al inicio',
    ariaOpenMenu: 'Abrir menú',
    ctaProblem: 'Iniciar un proyecto →',
    langSwitcherLabel: 'Idioma',
  },

  pageTitles: {
    home: 'D.Lab Experts · Research Hub en Inteligencia & Ciberseguridad',
    homeDescription:
      'D.Lab Experts · Research Hub en inteligencia aplicada y ciberseguridad. Publicamos investigación que fundamenta decisiones de board, founders y gestores en un mundo que se movió por delante de sus propias defensas. Análisis abiertos y consultoría bajo NDA.',
    about: 'Sobre | D.Lab Experts · Research Hub',
    aboutDescription:
      'D.Lab Experts es un Research Hub en inteligencia aplicada y ciberseguridad. Investigamos, probamos y publicamos como prueba de método. Consultoría bajo NDA cuando el contexto lo pide.',
    blog: 'Publicaciones | D.Lab Experts · Research Hub',
    blogDescription:
      'Investigaciones, análisis y casos publicados por D.Lab Experts como prueba pública de método. Inteligencia aplicada y ciberseguridad con un mismo protocolo de rigor.',
    contato: 'Contacto | D.Lab Experts · Research Hub',
    contatoDescription:
      'Habla con D.Lab Experts. Para proyectos de consultoría bajo NDA, alianzas de investigación o prensa. Respondemos en hasta un día hábil.',
    colaborar: 'Colaborar | D.Lab Experts · Research Hub',
    colaborarDescription:
      'D.Lab Experts es un Research Hub abierto a colaboradores. Propón una investigación, envía un estudio terminado, comparte datos o participa como peer reviewer. La investigación es un trabajo colectivo.',
    notFound: 'Página no encontrada | D.Lab Experts',
    notFoundDescription:
      'La página que buscabas no existe o fue movida. Vuelve al inicio de D.Lab Experts o explora las publicaciones abiertas.',
    obrigado: 'Mensaje recibido | D.Lab Experts',
    obrigadoDescription:
      'Tu mensaje llegó a D.Lab Experts. Respondemos en hasta 1 día hábil con una lectura del contexto y los próximos pasos.',
  },

  hero: {
    tag: 'D.Lab Experts · Research Hub · Intelligence & Cyber',
    h1Line1: 'Investigación aplicada para decisiones',
    h1Accent: 'que cambian estrategias.',
    sub: 'Research Hub en inteligencia aplicada y ciberseguridad. Publicamos investigación para fundamentar decisiones de board, founders y gestores en un mundo que se movió por delante de sus propias defensas.',
    ctaPrimary: 'Leer publicaciones abiertas →',
    ctaSecondary: 'Frentes de consultoría',
    statNdaVal: 'NDA',
    statNdaLbl: 'Estándar de entrega',
    statSeniorVal: 'Senior',
    statSeniorLbl: 'Sin junior entre tú y el analista',
    statProtocolVal: 'Protocolo',
    statProtocolLbl: 'Misma metodología documentada en cada proyecto',
  },

  trust: {
    title: 'Estándares D.Lab',
    ndaVal: 'NDA',
    ndaLbl: 'Confidencialidad por defecto',
    seniorVal: 'Senior',
    seniorLbl: 'Del briefing a la entrega, siempre el analista senior',
    dualVal: 'Dual',
    dualLbl: 'Inteligencia y ciber en la misma operación',
    methodVal: 'Método',
    methodLbl: 'Cada paso trazable, cero caja negra',
    openVal: 'Abierta',
    openLbl: 'Publicamos la investigación, no solo la recomendación',
  },

  brand: {
    title: 'El mundo se movió por delante',
    titleAccent: 'de sus propias defensas.',
    desc: 'LLMs y agentes comprimieron los plazos de decisión y ampliaron las superficies de ataque. Publicamos investigación abierta porque la alternativa es intuición, y la intuición se volvió cara.',
  },

  how: {
    eyebrow: 'Metodología Abierta',
    title: 'Cómo investigamos',
    sub: 'De la pregunta a la publicación, cada etapa documentada y expuesta, reproducibilidad en vez de mística.',
    step1Title: 'Hipótesis',
    step1Desc: 'Formulamos la pregunta de investigación y fijamos la hipótesis. Qué aún no sabemos, y qué evidencia cambiaría nuestra posición.',
    step2Title: 'Recolección',
    step2Desc: 'Cruzamos APIs públicas, bases abiertas, scraping e investigación primaria. Fuentes e instrumentación documentadas para que el hallazgo sea reproducible.',
    step3Title: 'Síntesis',
    step3Desc: 'Los datos crudos se vuelven insights estructurados con razonamiento expuesto. El camino del dato a la interpretación es parte de la publicación, no una caja negra.',
    step4Title: 'Publicación',
    step4Desc: 'El hallazgo sale con método, fuentes y razonamiento del analista intactos. La investigación abierta va a público; los proyectos bajo NDA entregan la misma trazabilidad de forma confidencial.',
    sourcesLabel: 'Fuentes que cruzamos',
    sourceApis: 'APIs: Google Maps, Places, Ads',
    sourceOpen: 'Bases abiertas: IBGE, DataSUS, oficinas de estadística',
    sourceTrends: 'Señales de búsqueda: Google Trends',
    sourceScraping: 'Scraping de marketplaces: precio, volumen, sentimiento',
    sourceWeb: 'Inteligencia web: SimilarWeb, SEMrush',
    sourcePrimary: 'Investigación primaria: encuestas, entrevistas',
  },

  productBullets: {
    intBase1: 'Investigación de mercado, competencia o público objetivo',
    intBase2: 'Mapeo de competidores directos e indirectos',
    intBase3: 'Dimensionamiento de oportunidad con datos reales',
    intBase4: 'Score de viabilidad con metodología D.Lab',
    intBase5: 'Documento estructurado con razonamiento expuesto',
    intDeep1: 'Todo lo del Base, más:',
    intDeep2: 'Análisis temporal, estacionalidad y tendencias',
    intDeep3: 'Cruce de múltiples fuentes de datos',
    intDeep4: 'Comparativo entre hasta 3 escenarios o competidores',
    intDeep5: 'Perfil de público y estimación de demanda latente',
    intDeep6: 'Sesión de interpretación con el analista (60min)',
    intAI1: 'Diagnóstico técnico de la operación',
    intAI2: 'Implementación de agentes de IA',
    intAI3: 'Automatización de procesos críticos',
    intAI4: 'Flujos inteligentes e integración de sistemas',
    intAI5: 'Seguimiento y evolución continua',
    cyberPentest1: 'Pentest en aplicaciones web y móviles',
    cyberPentest2: 'Análisis de infraestructura y red',
    cyberPentest3: 'Prueba de ingeniería social',
    cyberPentest4: 'Reporte con clasificación CVSS',
    cyberPentest5: 'Plan de remediación priorizado',
    cyberConsult1: 'Diagnóstico de postura de seguridad',
    cyberConsult2: 'Políticas de seguridad y compliance',
    cyberConsult3: 'Alineación con LGPD, ISO 27001, NIST',
    cyberConsult4: 'Monitoreo y respuesta a incidentes',
    cyberConsult5: 'Capacitación del equipo',
  },

  segments: {
    eyebrow: 'Agenda de Investigación',
    title: 'Seis líneas de investigación.',
    titleAccent: 'Un único protocolo.',
    sub: 'Frentes continuos de investigación que orientan las publicaciones del Research Hub. Del comportamiento de consumidor a la arquitectura de ataque, pasando por IA y política, con el mismo rigor metodológico.',

    marketTag: 'Mercado & Público',
    marketName: 'Mercados & Comportamiento',
    marketDesc:
      'Investigamos quién es el consumidor real, dónde está y cómo se mueve la demanda. Publicamos el patrón que ninguna persona genérica captura.',
    marketSample1: 'Perfil de público',
    marketSample2: 'Dimensionamiento de mercado',
    marketSample3: 'Análisis de demanda',

    stratTag: 'Estrategia',
    stratName: 'Estrategia & Decisión',
    stratDesc:
      'Investigación sobre dimensionamiento, posicionamiento y ventanas de oportunidad. Para apuestas de peso, board, founder, fondo, que no aguantan una corazonada de reunión.',
    stratSample1: 'Análisis estratégico',
    stratSample2: 'Consultoría competitiva',
    stratSample3: 'Benchmarking sectorial',

    politicsTag: 'Política',
    politicsName: 'Política, Opinión & Regulación',
    politicsDesc:
      'Investigación de opinión pública, electorado y movimiento regulatorio. Una campaña es una disputa de lectura de contexto antes de serlo de narrativa, y la regulación decide el próximo mercado antes de que exista.',
    politicsSample1: 'Mapeo electoral',
    politicsSample2: 'Opinión pública',
    politicsSample3: 'Modelado de escenarios',

    foresightTag: 'Foresight',
    foresightName: 'Tech Foresight & IA',
    foresightDesc:
      'Donde IA, LLMs y agentes están reconfigurando decisión, trabajo y riesgo. Línea vanguardista del Hub, para quien necesita moverse antes de que el sector entero vea la señal.',
    foresightSample1: 'IA & Agentes',
    foresightSample2: 'Foresight sectorial',
    foresightSample3: 'Señales débiles',

    compTag: 'Competencia',
    compName: 'Inteligencia Competitiva',
    compDesc:
      'Investigación sobre los competidores reales, no los de tu cabeza. Fortaleza, posicionamiento, puntos ciegos y lo que aún no vieron. Publicamos metodología; el detalle sectorial se convierte en proyecto bajo NDA.',
    compSample1: 'Análisis de competidores',
    compSample2: 'Benchmarking de mercado',
    compSample3: 'Posicionamiento estratégico',

    cyberTag: 'Cyber',
    cyberName: 'Cyber & Superficies Modernas',
    cyberDesc:
      'Pentest, análisis de vulnerabilidades y lectura de las nuevas superficies que IA, agentes y automatización inauguraron. Descubrimos lo que descubriría un atacante, incluido el que aún no existe.',
    cyberSample1: 'Pentest',
    cyberSample2: 'LLM security',
    cyberSample3: 'Consultoría ofensiva',
  },

  products: {
    eyebrow: 'Frentes de Consultoría',
    title: 'Cuando la investigación',
    titleAccent: 'se vuelve proyecto cerrado.',
    sub: 'El Research Hub es el flagship. Cuando una organización necesita dato propio con el mismo rigor metodológico, la investigación se vuelve proyecto cerrado, bajo NDA, con alcance, plazo y profundidad calibrados por la decisión en juego.',
    ctaPropose: 'Presentar el contexto →',
    ctaPresent: 'Presentar el escenario →',
    ctaStart: 'Iniciar conversación →',
    ctaMost: '★ Más solicitado',

    intHeader: 'Inteligencia de Datos',
    intBaseName: 'Reporte de Base',
    intBaseDesc:
      'Investigación aplicada centrada en una pregunta clave. Para cuando la hipótesis ya existe y falta el rigor antes de moverse.',
    intDeepName: 'Reporte en Profundidad',
    intDeepDesc:
      'Investigación multidimensional con datos temporales, cruce de múltiples fuentes y sesión de interpretación con el analista. Para decisiones de alto impacto.',
    intAIName: 'Consultoría de IA',
    intAIDesc:
      'Implementación de IA, automatización y procesos en la operación. Para cuando lo que traba no es la decisión: es la ejecución.',

    cyberHeader: 'Ciberseguridad',
    cyberPentestName: 'Pentest & Análisis de Vulnerabilidades',
    cyberPentestDesc:
      'Prueba de intrusión y mapeo de vulnerabilidades en aplicaciones, infraestructura y redes. Reporte técnico con clasificación de riesgo y plan de corrección.',
    cyberConsultName: 'Consultoría de Seguridad Digital',
    cyberConsultDesc:
      'Diagnóstico completo de la postura de seguridad, definición de políticas, adecuación a frameworks y acompañamiento continuo.',
  },

  research: {
    eyebrow: 'Publicaciones Abiertas',
    title: 'Investigación abierta.',
    titleAccent: 'Mientras el resto permanece cerrado.',
    sub: 'Las publicaciones abiertas nacen dentro de nuestro propio laboratorio, estudios independientes, publicados como prueba de método. El trabajo de cliente nunca se divulga: siempre bajo NDA.',
    cta: 'Ver todas las publicaciones',
    readCta: 'Leer publicación',
  },

  about: {
    eyebrow: 'Sobre D.Lab Experts',
    title: 'Rigor de laboratorio.',
    titleAccent: 'Postura vanguardista.',
    sub: 'Research Hub en inteligencia aplicada y ciberseguridad. Investigamos, probamos y publicamos como prueba de método.',
    p1: 'D.Lab Experts nació de una premisa: la decisión estratégica sigue siendo, en gran parte, intuición en buena parte del mundo, y ahora el riesgo salió más caro, LLMs y agentes aceleran la ejecución mientras multiplican superficies de ataque.',
    p2: 'Somos un Research Hub en inteligencia aplicada y ciberseguridad: investigamos, probamos y publicamos como prueba de método. Del lado de la inteligencia, cruzamos fuentes públicas, APIs y datos primarios para responder lo que traba decisión, quién es el competidor real, dónde está el mercado, cuál es la próxima apuesta viable.',
    p3: 'Del lado cyber, mapeamos vulnerabilidades, ejecutamos pruebas de intrusión y diseñamos la postura que la operación exige, incluidas las superficies nuevas que IA y automatización inauguraron.',
    p4: 'Publicamos el método. El trabajo bajo NDA se vuelve frente de consultoría cuando alguien necesita el mismo rigor aplicado a su propio contexto.',
    ctaAbout: 'Conoce D.Lab Experts →',
    pillarMethodTitle: 'Rigor metodológico',
    pillarMethodDesc: 'Cada análisis con metodología documentada y replicable',
    pillarPrimaryTitle: 'Datos primarios',
    pillarPrimaryDesc: 'Recolección propia cuando las fuentes abiertas no bastan',
    pillarReasoningTitle: 'Razonamiento expuesto',
    pillarReasoningDesc: 'Entiendes cómo llegamos a la recomendación',
    pillarIndepTitle: 'Independencia',
    pillarIndepDesc: 'Análisis sin sesgo. Reportamos lo que muestran los datos',
  },

  ctaFinal: {
    tag: 'Research first. Consultoría después.',
    title: 'Una decisión de peso merece',
    titleAccent: 'una investigación de peso.',
    sub: 'Las publicaciones abiertas ya exponen cómo pensamos. Cuando el contexto es tuyo, y tiene que quedar bajo NDA, la misma metodología se vuelve proyecto cerrado. Alcance negociado, plazo calibrado, entrega bajo el protocolo del Hub.',
    ctaPrimary: 'Leer publicaciones abiertas →',
    ctaSecondary: 'Hablar sobre un proyecto',
  },

  footer: {
    manifesto:
      '"No vendemos certeza. Entregamos lectura de contexto lo bastante buena para que la decisión se sostenga por sí sola."',
    brandTagline:
      'D.Lab Experts · Research Hub en inteligencia aplicada y ciberseguridad. Publicaciones abiertas, consultoría bajo NDA.',
    logoAlt: 'D.Lab Experts',
    colHub: 'Research Hub',
    colConsulting: 'Consultoría',
    colContact: 'Contacto',
    linkPublications: 'Publicaciones abiertas',
    linkAgenda: 'Agenda de investigación',
    linkCollaborate: 'Colaborar con el Hub',
    linkRss: 'RSS de publicaciones',
    linkPractices: 'Frentes de consultoría',
    linkMethod: 'Metodología',
    linkTalk: 'Hablar sobre un proyecto',
    linkAbout: 'Sobre D.Lab Experts',
    linkForm: 'Formulario',
    linkEmail: 'E-mail directo',
    linkLinkedin: 'LinkedIn',
    sealText: 'Applied Intelligence Research',
    copyright: 'D.Lab Experts · Research Hub en Inteligencia & Ciberseguridad. Todos los derechos reservados.',
    city: 'São Paulo, BR',
  },

  blog: {
    heroEyebrow: 'Publicaciones Abiertas',
    heroTitle: 'Investigación abierta.',
    heroTitleAccent: 'Metodología transparente.',
    heroSub:
      'Publicamos una fracción de lo que producimos como prueba pública de método. Inteligencia aplicada y ciberseguridad bajo el mismo protocolo de rigor.',
    navIntel: 'Inteligencia & Investigación',
    navCyber: 'Ciberseguridad',

    intelEyebrow: 'Inteligencia',
    intelTitle: 'Inteligencia &',
    intelTitleAccent: 'Investigación Aplicada',
    intelSub:
      'Decisión estratégica, mercado, competencia, tendencias, público y política. Investigación que fundamenta el movimiento antes de que ocurra.',

    cyberEyebrow: 'Ciberseguridad',
    cyberTitle: 'Ciberseguridad &',
    cyberTitleAccent: 'Operación Ofensiva',
    cyberSub:
      'Pentest, análisis de vulnerabilidades, incidentes y posturas de seguridad. Casos y análisis técnicos publicados cuando el NDA lo permite.',

    groupOriginalLabel: 'Investigaciones Originales',
    groupOriginalSub:
      'Estudios con datos recogidos por el propio laboratorio, cuestionarios, entrevistas y análisis primario.',
    groupSecondaryLabel: 'Investigaciones con Datos Secundarios',
    groupSecondarySub:
      'Análisis construidos sobre bases públicas, reportes sectoriales y fuentes terceras auditables.',

    cyberGroupOriginalLabel: 'Casos Originales',
    cyberGroupOriginalSub:
      'Análisis técnicos con datos recogidos en engagements propios, pentests, forense e instrumentación.',
    cyberGroupSecondaryLabel: 'Análisis con Datos Secundarios',
    cyberGroupSecondarySub:
      'Lecturas construidas sobre feeds de threat intel, reportes de proveedores e inteligencia abierta.',

    emptyIntelTitle: 'En preparación.',
    emptyIntelText:
      'Las próximas publicaciones saldrán tras liberación post-NDA.',
    emptyCyberTitle: 'En preparación.',
    emptyCyberText:
      'Los primeros casos públicos de ciberseguridad saldrán cuando el NDA lo permita. Mientras tanto, el frente sigue activo en pentest, análisis de vulnerabilidades y consultoría ofensiva.',
    emptyCyberCta: 'Proponer un alcance de seguridad →',

    originalMarker: 'Investigación Original',
    originalMarkerCyber: 'Caso Original',
    readCta: 'Leer publicación',
    readCtaCyber: 'Leer análisis',

    colabTitle: 'La investigación es un',
    colabTitleAccent: 'trabajo colectivo.',
    colabLabel: 'Research Hub abierto',
    colabSub:
      'Investigadores, científicos independientes, mentes de frontera. Si tienes un estudio terminado, un dataset relevante o una pregunta que encaja en nuestra agenda, queremos saber. Publicamos con coautoría explícita y razonamiento expuesto. La misma postura se aplica a la consultoría: cuando un proyecto de cliente necesita expertise que no tenemos, traemos partners con crédito explícito, nunca de forma anónima.',
    colabChipSubmit: 'Enviar investigación',
    colabChipCo: 'Proponer co-investigación',
    colabChipData: 'Compartir datos',
    colabChipReview: 'Peer review',
    colabCtaPrimary: 'Propuesta de colaboración →',
    colabCtaSecondary: 'Cómo funciona',
  },

  formats: {
    briefing: 'Briefing',
    report: 'Reporte',
    foresight: 'Foresight',
    sector: 'Reporte Sectorial',
  },

  langSwitcher: {
    label: 'Cambiar idioma',
  },

  contributors: {
    label: 'Contribuidores del Hub',
    sub: 'Investigadores y profesionales que dan forma a nuestras publicaciones abiertas y alianzas de consultoría.',
  },
};

export default es;
