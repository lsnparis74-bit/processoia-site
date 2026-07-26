export const I18N = {
en: {
  nav: { whatWeAutomate: "What we automate", howItWorks: "How it works", whyMe: "Why me", faq: "FAQ", bookCall: "Book a free call" },
  hero: {
    eyebrow: "AI automation, done right",
    titleLines: ["Get hours back.", "Let automation do the busywork."],
    sub: "I design and build AI-powered systems that handle the repetitive parts of your business — or your life — so you can focus on what actually matters.",
    ctaPrimary: "Book a free call", ctaSecondary: "See how it works",
    note: "The call is free. You only pay if we build something together."
  },
  automate: {
    kicker: "What we automate", title: "Automation for how you actually work",
    businessLabel: "For your business", personalLabel: "For your life",
    businessItems: [
      { icon: "users", label: "Prospecting & lead gen", detail: "Automatically qualify and score new leads the moment they come in, so you only spend time on the ones worth chasing." },
      { icon: "receipt", label: "Invoicing & billing", detail: "Generate, send, and chase unpaid invoices automatically, with reminders that go out without you thinking about it." },
      { icon: "headset", label: "Customer service & support", detail: "Answer common questions instantly, any time of day, and hand off to you only when a human touch is actually needed." },
      { icon: "calendar-clock", label: "Scheduling & admin", detail: "Let clients book, reschedule, and get reminders without a single back-and-forth email." },
      { icon: "bar-chart-3", label: "Reporting", detail: "Pull the numbers that matter from wherever they live and deliver a clear summary on the schedule you choose." },
      { icon: "repeat", label: "Follow-ups & CRM", detail: "Make sure no lead or client ever falls through the cracks, with follow-ups that trigger themselves." }
    ],
    personalItems: [
      { icon: "inbox", label: "Repetitive admin tasks", detail: "Offload the copy-pasting, sorting, and form-filling that eats your evenings." },
      { icon: "piggy-bank", label: "Personal finance tracking", detail: "Get spending and income tracked and categorized automatically, with alerts when something looks off." },
      { icon: "bell", label: "Info monitoring & alerts", detail: "Get notified the moment something you care about changes, instead of checking manually." },
      { icon: "share-2", label: "Content & social media", detail: "Keep a consistent posting rhythm without spending your evenings scheduling and formatting." }
    ],
    sectorsNote: "Especially useful for professional services, e-commerce, and local businesses."
  },
  diagram: {
    kicker: "How it works", title: "One idea, applied everywhere",
    sub: "Every automation follows the same simple shape.",
    steps: [
      { icon: "zap", label: "Trigger", desc: "Something happens — a form is filled, an email lands, a date arrives." },
      { icon: "cpu", label: "Process", desc: "The system checks, sorts, enriches or decides what to do with it." },
      { icon: "check-circle-2", label: "Result", desc: "The right action happens automatically — no one has to remember." }
    ],
    example: "A new lead fills a form → gets qualified and enriched → lands in your CRM with a follow-up already sent."
  },
  ai: {
    kicker: "Why AI changes everything", title: "From rigid rules to real judgment",
    sub: "Automation used to mean fixed steps. AI adds understanding — of language, nuance, and context — so systems can decide, not just follow.",
    before: { label: "Before", items: ["Hours of manual, repetitive work", "Rigid rules that break on edge cases", "Business hours only", "Slow replies to customers and leads"] },
    after: { label: "With AI", items: ["Minutes instead of hours", "Judgment that adapts to nuance", "Working 24/7, while you sleep", "Instant, consistent responses"] },
    highlights: [
      { value: "10x", label: "Faster on repetitive tasks" },
      { value: "24/7", label: "Always on, even outside business hours" },
      { value: "0", label: "Extra hires needed to scale up" }
    ]
  },
  agents: {
    kicker: "AI agents", title: "Beyond automation: systems that act",
    sub: "An agent doesn't just follow steps — it understands a goal and gets it done.",
    definition: "An AI agent isn't automation that follows a fixed script. It's a system that understands a goal, checks live information to figure out what's actually going on, takes multi-step action on its own, and adjusts course when something doesn't go as expected — the way a capable person would.",
    capabilitiesLabel: "What agents can actually do",
    capabilities: [
      { icon: "list-checks", label: "Handles a full task end-to-end, not just one step" },
      { icon: "activity", label: "Makes decisions in real time, using current data" },
      { icon: "puzzle", label: "Uses multiple tools and systems on your behalf" },
      { icon: "shield-check", label: "Handles exceptions instead of breaking on them" },
      { icon: "moon", label: "Keeps working around the clock, unsupervised" },
      { icon: "brain", label: "Learns your business context to act consistently" }
    ],
    highlights: [
      { value: "1", label: "agent can replace a full-time watch-and-respond role" },
      { value: "0", label: "added delay between something happening and it being handled" },
      { value: "∞", label: "volume scales without scaling headcount" }
    ],
    closing: "This isn't hype — it's a real shift in what a small team can handle. Businesses that deploy agents free their people for judgment and relationship work, while the repetitive, time-sensitive work runs itself."
  },
  whyMe: {
    kicker: "Why work with me", title: "One person. Full attention.",
    intro: "I'm an independent consultant, not an agency — every automation is designed around how you actually work.",
    items: [
      { icon: "sparkles", title: "Fully tailored", desc: "No templated packages. Every system is designed around your specific workflow." },
      { icon: "user-check", title: "Direct access", desc: "You work with the person actually building your automation — no account managers, no hand-offs." },
      { icon: "zap", title: "Highly responsive", desc: "Quick replies, flexible scheduling, and a relationship that keeps going after launch." },
      { icon: "refresh-cw", title: "Long-term partner", desc: "As your needs change, I'm here to adjust and evolve what we built together." }
    ],
    photoAlt: "Photo of the consultant behind ProcessoIA"
  },
  process: {
    kicker: "How we'll work together", title: "Three simple steps",
    steps: [
      { icon: "phone-call", title: "Free discovery call", desc: "We talk through your workflows and spot the automation opportunities. No cost, no obligation." },
      { icon: "hammer", title: "Tailored proposal & build", desc: "A custom automation, scoped, quoted, and built specifically for you. This is the paid phase." },
      { icon: "trending-up", title: "Ongoing support & evolution", desc: "I stay available to refine, extend, and adapt the system as your needs change." }
    ]
  },
  faq: {
    kicker: "FAQ", title: "Good questions",
    items: [
      { q: "Is the call really free?", a: "Yes — completely free, with zero obligation. You only pay if we decide to build something together." },
      { q: "What if automation isn't right for my business?", a: "That's a perfectly good outcome of the call. I'll tell you honestly if it's not a fit — no hard sell." },
      { q: "Do I need technical knowledge?", a: "None at all. I handle the technical side; you just describe how you currently work." },
      { q: "How long does a project take?", a: "It depends on scope, but most automations go from proposal to live system in days to a few weeks." },
      { q: "What if my needs change later?", a: "That's expected. I stay on as a long-term partner to adjust and extend your automation over time." }
    ],
    note: "Still have a question? Bring it to the call — it's free."
  },
  finalCta: {
    title: "Ready to get some time back?",
    sub: "Book a free, no-pressure call. We'll figure out together whether automation makes sense for you.",
    button: "Book a free call",
    note: "Free to book. You only pay if we build something together."
  },
  footer: {
    tagline: "AI automation for businesses and individuals who'd rather spend their time elsewhere.",
    links: ["Privacy", "Terms", "contact@processoia.com"],
    rights: "© 2026 ProcessoIA. All rights reserved."
  }
},
fr: {
  nav: { whatWeAutomate: "Ce qu'on automatise", howItWorks: "Comment ça marche", whyMe: "Pourquoi moi", faq: "FAQ", bookCall: "Réserver un appel gratuit" },
  hero: {
    eyebrow: "L'automatisation par l'IA, bien faite",
    titleLines: ["Récupérez des heures.", "Laissez l'automatisation faire le reste."],
    sub: "Je conçois et construis des systèmes propulsés par l'IA qui prennent en charge les tâches répétitives de votre entreprise — ou de votre quotidien — pour que vous puissiez vous concentrer sur l'essentiel.",
    ctaPrimary: "Réserver un appel gratuit", ctaSecondary: "Voir comment ça marche",
    note: "L'appel est gratuit. Vous ne payez que si on construit quelque chose ensemble."
  },
  automate: {
    kicker: "Ce qu'on automatise", title: "L'automatisation adaptée à votre façon de travailler",
    businessLabel: "Pour votre entreprise", personalLabel: "Pour votre quotidien",
    businessItems: [
      { icon: "users", label: "Prospection & génération de leads", detail: "Qualifiez et notez automatiquement chaque nouveau lead dès son arrivée, pour ne consacrer du temps qu'à ceux qui le méritent." },
      { icon: "receipt", label: "Facturation", detail: "Générez, envoyez et relancez les factures impayées automatiquement, avec des rappels qui partent sans que vous y pensiez." },
      { icon: "headset", label: "Service & support client", detail: "Répondez instantanément aux questions courantes, à toute heure, et transférez vers vous seulement quand un contact humain est vraiment nécessaire." },
      { icon: "calendar-clock", label: "Planification & administratif", detail: "Laissez vos clients réserver, replanifier et recevoir des rappels sans le moindre échange d'e-mails." },
      { icon: "bar-chart-3", label: "Reporting", detail: "Récupérez les chiffres qui comptent, où qu'ils se trouvent, et recevez un résumé clair selon le rythme que vous choisissez." },
      { icon: "repeat", label: "Relances & CRM", detail: "Assurez-vous qu'aucun lead ou client ne passe à la trappe, avec des relances qui se déclenchent d'elles-mêmes." }
    ],
    personalItems: [
      { icon: "inbox", label: "Tâches administratives répétitives", detail: "Déchargez-vous du copier-coller, du tri et de la saisie de formulaires qui grignotent vos soirées." },
      { icon: "piggy-bank", label: "Suivi de finances personnelles", detail: "Suivez vos dépenses et revenus catégorisés automatiquement, avec des alertes dès que quelque chose semble anormal." },
      { icon: "bell", label: "Veille & alertes", detail: "Soyez notifié dès qu'un sujet qui vous intéresse évolue, au lieu de vérifier manuellement." },
      { icon: "share-2", label: "Contenu & réseaux sociaux", detail: "Gardez un rythme de publication régulier sans passer vos soirées à programmer et mettre en forme." }
    ],
    sectorsNote: "Particulièrement utile pour les services professionnels, l'e-commerce et les commerces locaux."
  },
  diagram: {
    kicker: "Comment ça marche", title: "Une seule idée, appliquée partout",
    sub: "Chaque automatisation suit la même logique simple.",
    steps: [
      { icon: "zap", label: "Déclencheur", desc: "Quelque chose se produit — un formulaire rempli, un e-mail reçu, une date qui arrive." },
      { icon: "cpu", label: "Traitement", desc: "Le système vérifie, trie, enrichit ou décide quoi en faire." },
      { icon: "check-circle-2", label: "Résultat", desc: "La bonne action se déclenche automatiquement — personne n'a besoin d'y penser." }
    ],
    example: "Un lead remplit un formulaire → il est qualifié et enrichi → il atterrit dans votre CRM avec une relance déjà envoyée."
  },
  ai: {
    kicker: "Pourquoi l'IA change tout", title: "Des règles rigides à un vrai jugement",
    sub: "L'automatisation, avant, voulait dire des étapes figées. L'IA ajoute la compréhension — du langage, des nuances, du contexte — pour que les systèmes puissent décider, pas seulement exécuter.",
    before: { label: "Avant", items: ["Des heures de travail manuel et répétitif", "Des règles rigides qui craquent au moindre cas particulier", "Disponible aux heures de bureau seulement", "Des réponses lentes aux clients et prospects"] },
    after: { label: "Avec l'IA", items: ["Des minutes au lieu des heures", "Un jugement qui s'adapte aux nuances", "Disponible 24h/24, même pendant votre sommeil", "Des réponses instantanées et cohérentes"] },
    highlights: [
      { value: "10x", label: "Plus rapide sur les tâches répétitives" },
      { value: "24/7", label: "Toujours actif, même hors horaires" },
      { value: "0", label: "Embauche supplémentaire pour grandir" }
    ]
  },
  agents: {
    kicker: "Agents IA", title: "Au-delà de l'automatisation : des systèmes qui agissent",
    sub: "Un agent ne se contente pas de suivre des étapes — il comprend un objectif et le mène à bien.",
    definition: "Un agent IA n'est pas une automatisation qui suit un script figé. C'est un système qui comprend un objectif, consulte des informations en temps réel pour évaluer la situation, agit de lui-même en plusieurs étapes, et ajuste sa trajectoire quand les choses ne se passent pas comme prévu — comme le ferait une personne compétente.",
    capabilitiesLabel: "Ce que les agents peuvent vraiment faire",
    capabilities: [
      { icon: "list-checks", label: "Prend en charge une tâche de bout en bout, pas juste une étape" },
      { icon: "activity", label: "Décide en temps réel, à partir de données actuelles" },
      { icon: "puzzle", label: "Utilise plusieurs outils et systèmes en votre nom" },
      { icon: "shield-check", label: "Gère les cas particuliers au lieu de planter dessus" },
      { icon: "moon", label: "Continue de travailler en continu, sans surveillance" },
      { icon: "brain", label: "Apprend le contexte de votre entreprise pour agir avec cohérence" }
    ],
    highlights: [
      { value: "1", label: "agent peut remplacer une surveillance à temps plein" },
      { value: "0", label: "délai supplémentaire entre un événement et sa prise en charge" },
      { value: "∞", label: "volume qui grandit sans faire grandir l'équipe" }
    ],
    closing: "Ce n'est pas un effet de mode — c'est un vrai changement dans ce qu'une petite équipe peut gérer. Les entreprises qui déploient des agents libèrent leurs équipes pour le jugement et la relation humaine, pendant que le travail répétitif et urgent tourne tout seul."
  },
  whyMe: {
    kicker: "Pourquoi travailler avec moi", title: "Une seule personne. Toute l'attention.",
    intro: "Je suis consultant indépendant, pas une agence — chaque automatisation est pensée pour votre façon de travailler.",
    items: [
      { icon: "sparkles", title: "Sur-mesure", desc: "Pas de formule standard. Chaque système est conçu autour de votre fonctionnement propre." },
      { icon: "user-check", title: "Accès direct", desc: "Vous échangez avec la personne qui construit réellement votre automatisation — pas de chargé de compte, pas d'intermédiaire." },
      { icon: "zap", title: "Très réactif", desc: "Réponses rapides, agenda flexible, une relation qui continue après le lancement." },
      { icon: "refresh-cw", title: "Partenaire dans la durée", desc: "Si vos besoins évoluent, je reste disponible pour ajuster et faire évoluer ce qu'on a construit." }
    ],
    photoAlt: "Photo du consultant derrière ProcessoIA"
  },
  process: {
    kicker: "Comment on va travailler ensemble", title: "Trois étapes simples",
    steps: [
      { icon: "phone-call", title: "Appel découverte gratuit", desc: "On passe en revue vos processus et on repère les opportunités d'automatisation. Sans frais, sans engagement." },
      { icon: "hammer", title: "Proposition sur-mesure & construction", desc: "Une automatisation cadrée, chiffrée et construite spécialement pour vous. C'est la phase payante." },
      { icon: "trending-up", title: "Suivi & évolution", desc: "Je reste disponible pour affiner, étendre et adapter le système selon vos besoins." }
    ]
  },
  faq: {
    kicker: "FAQ", title: "Bonnes questions",
    items: [
      { q: "L'appel est-il vraiment gratuit ?", a: "Oui, totalement gratuit et sans engagement. Vous ne payez que si on décide de construire quelque chose ensemble." },
      { q: "Et si l'automatisation n'est pas adaptée à mon entreprise ?", a: "C'est une conclusion tout à fait valable de l'appel. Je vous le dirai honnêtement si ce n'est pas le bon fit — sans forcer la vente." },
      { q: "Ai-je besoin de connaissances techniques ?", a: "Aucune. Je m'occupe de la partie technique ; vous décrivez simplement votre façon de travailler." },
      { q: "Combien de temps prend un projet ?", a: "Cela dépend du périmètre, mais la plupart des automatisations passent de la proposition au système en ligne en quelques jours à quelques semaines." },
      { q: "Et si mes besoins changent plus tard ?", a: "C'est prévu. Je reste un partenaire de long terme pour ajuster et étendre votre automatisation dans le temps." }
    ],
    note: "Encore une question ? Posez-la pendant l'appel — il est gratuit."
  },
  finalCta: {
    title: "Prêt à récupérer du temps ?",
    sub: "Réservez un appel gratuit, sans pression. On verra ensemble si l'automatisation a du sens pour vous.",
    button: "Réserver un appel gratuit",
    note: "Gratuit à réserver. Vous ne payez que si on construit quelque chose ensemble."
  },
  footer: {
    tagline: "L'automatisation par l'IA pour les entreprises et les particuliers qui préfèrent passer leur temps ailleurs.",
    links: ["Confidentialité", "Conditions", "contact@processoia.com"],
    rights: "© 2026 ProcessoIA. Tous droits réservés."
  }
},
pt: {
  nav: { whatWeAutomate: "O que automatizamos", howItWorks: "Como funciona", whyMe: "Por que eu", faq: "Perguntas frequentes", bookCall: "Agendar uma chamada gratuita" },
  hero: {
    eyebrow: "Automação com IA, feita direito",
    titleLines: ["Recupere horas.", "Deixe a automação cuidar do resto."],
    sub: "Eu crio sistemas com IA que cuidam das tarefas repetitivas do seu negócio — ou da sua vida — para você focar no que realmente importa.",
    ctaPrimary: "Agendar uma chamada gratuita", ctaSecondary: "Ver como funciona",
    note: "A chamada é gratuita. Você só paga se decidirmos construir algo juntos."
  },
  automate: {
    kicker: "O que automatizamos", title: "Automação do jeito que você trabalha",
    businessLabel: "Para o seu negócio", personalLabel: "Para a sua vida",
    businessItems: [
      { icon: "users", label: "Prospecção & geração de leads", detail: "Qualifique e pontue automaticamente cada novo lead assim que ele chega, para dedicar tempo só aos que realmente valem a pena." },
      { icon: "receipt", label: "Faturamento & cobrança", detail: "Gere, envie e cobre faturas em atraso automaticamente, com lembretes que saem sem você precisar pensar nisso." },
      { icon: "headset", label: "Atendimento & suporte ao cliente", detail: "Responda perguntas comuns instantaneamente, a qualquer hora, e transfira para você só quando um toque humano for realmente necessário." },
      { icon: "calendar-clock", label: "Agenda & tarefas administrativas", detail: "Deixe seus clientes agendarem, remarcarem e receberem lembretes sem uma única troca de e-mails." },
      { icon: "bar-chart-3", label: "Relatórios", detail: "Puxe os números que importam de onde estiverem e receba um resumo claro no ritmo que você escolher." },
      { icon: "repeat", label: "Follow-up & CRM", detail: "Garanta que nenhum lead ou cliente seja esquecido, com follow-ups que se disparam sozinhos." }
    ],
    personalItems: [
      { icon: "inbox", label: "Tarefas administrativas repetitivas", detail: "Livre-se da cópia, organização e preenchimento de formulários que consomem suas noites." },
      { icon: "piggy-bank", label: "Controle financeiro pessoal", detail: "Tenha gastos e receitas rastreados e categorizados automaticamente, com alertas quando algo parecer fora do normal." },
      { icon: "bell", label: "Monitoramento & alertas", detail: "Seja avisado no momento em que algo que importa para você mudar, sem precisar checar manualmente." },
      { icon: "share-2", label: "Conteúdo & redes sociais", detail: "Mantenha um ritmo de postagens consistente sem gastar suas noites agendando e formatando." }
    ],
    sectorsNote: "Especialmente útil para serviços profissionais, e-commerce e negócios locais."
  },
  diagram: {
    kicker: "Como funciona", title: "Uma ideia, aplicada em tudo",
    sub: "Toda automação segue a mesma lógica simples.",
    steps: [
      { icon: "zap", label: "Gatilho", desc: "Algo acontece — um formulário é preenchido, um e-mail chega, uma data vence." },
      { icon: "cpu", label: "Processo", desc: "O sistema verifica, organiza, enriquece ou decide o que fazer." },
      { icon: "check-circle-2", label: "Resultado", desc: "A ação certa acontece automaticamente — ninguém precisa lembrar." }
    ],
    example: "Um lead preenche um formulário → é qualificado e enriquecido → chega ao seu CRM com um follow-up já enviado."
  },
  ai: {
    kicker: "Por que a IA muda tudo", title: "De regras rígidas a julgamento real",
    sub: "Automação costumava significar passos fixos. A IA acrescenta compreensão — de linguagem, nuance e contexto — para que os sistemas possam decidir, não só seguir regras.",
    before: { label: "Antes", items: ["Horas de trabalho manual e repetitivo", "Regras rígidas que quebram em casos fora do padrão", "Disponível só em horário comercial", "Respostas lentas para clientes e leads"] },
    after: { label: "Com IA", items: ["Minutos em vez de horas", "Julgamento que se adapta às nuances", "Disponível 24h por dia, mesmo enquanto você dorme", "Respostas instantâneas e consistentes"] },
    highlights: [
      { value: "10x", label: "Mais rápido em tarefas repetitivas" },
      { value: "24/7", label: "Sempre ativo, mesmo fora do expediente" },
      { value: "0", label: "Contratações extras para crescer" }
    ]
  },
  agents: {
    kicker: "Agentes de IA", title: "Além da automação: sistemas que agem",
    sub: "Um agente não segue apenas etapas — ele entende um objetivo e o realiza.",
    definition: "Um agente de IA não é uma automação que segue um roteiro fixo. É um sistema que entende um objetivo, consulta informações em tempo real para avaliar a situação, age sozinho em várias etapas e ajusta o rumo quando algo não sai como esperado — como faria uma pessoa competente.",
    capabilitiesLabel: "O que os agentes realmente conseguem fazer",
    capabilities: [
      { icon: "list-checks", label: "Cuida de uma tarefa do início ao fim, não só de uma etapa" },
      { icon: "activity", label: "Toma decisões em tempo real, com dados atuais" },
      { icon: "puzzle", label: "Usa várias ferramentas e sistemas em seu nome" },
      { icon: "shield-check", label: "Lida com exceções em vez de travar nelas" },
      { icon: "moon", label: "Continua trabalhando o tempo todo, sem supervisão" },
      { icon: "brain", label: "Aprende o contexto do seu negócio para agir com consistência" }
    ],
    highlights: [
      { value: "1", label: "agente pode substituir uma vigilância em tempo integral" },
      { value: "0", label: "atraso extra entre algo acontecer e ser resolvido" },
      { value: "∞", label: "volume que cresce sem aumentar a equipe" }
    ],
    closing: "Isso não é modismo — é uma mudança real no que uma equipe pequena consegue lidar. Negócios que usam agentes liberam as pessoas para julgamento e relacionamento, enquanto o trabalho repetitivo e urgente roda sozinho."
  },
  whyMe: {
    kicker: "Por que trabalhar comigo", title: "Uma pessoa só. Atenção total.",
    intro: "Sou consultor independente, não uma agência — cada automação é pensada para o seu jeito de trabalhar.",
    items: [
      { icon: "sparkles", title: "Totalmente sob medida", desc: "Nada de pacotes padronizados. Cada sistema é desenhado em torno do seu fluxo de trabalho." },
      { icon: "user-check", title: "Acesso direto", desc: "Você fala com a pessoa que de fato constrói sua automação — sem gerente de contas, sem intermediários." },
      { icon: "zap", title: "Alta disponibilidade", desc: "Respostas rápidas, agenda flexível e uma relação que continua depois do lançamento." },
      { icon: "refresh-cw", title: "Parceria de longo prazo", desc: "Se suas necessidades mudarem, continuo disponível para ajustar e evoluir o que construímos." }
    ],
    photoAlt: "Foto do consultor por trás da ProcessoIA"
  },
  process: {
    kicker: "Como vamos trabalhar juntos", title: "Três passos simples",
    steps: [
      { icon: "phone-call", title: "Chamada de descoberta gratuita", desc: "Conversamos sobre seus processos e identificamos oportunidades de automação. Sem custo, sem compromisso." },
      { icon: "hammer", title: "Proposta sob medida & construção", desc: "Uma automação definida, orçada e construída especialmente para você. Esta é a fase paga." },
      { icon: "trending-up", title: "Suporte contínuo & evolução", desc: "Continuo disponível para ajustar, ampliar e adaptar o sistema conforme suas necessidades mudam." }
    ]
  },
  faq: {
    kicker: "Perguntas frequentes", title: "Boas perguntas",
    items: [
      { q: "A chamada é realmente gratuita?", a: "Sim — totalmente gratuita e sem compromisso. Você só paga se decidirmos construir algo juntos." },
      { q: "E se a automação não fizer sentido para o meu negócio?", a: "Essa também é uma conclusão válida da chamada. Serei honesto se não for a solução certa — sem pressão de venda." },
      { q: "Preciso de conhecimento técnico?", a: "Nenhum. Eu cuido da parte técnica; você só descreve como trabalha hoje." },
      { q: "Quanto tempo leva um projeto?", a: "Depende do escopo, mas a maioria das automações vai da proposta ao sistema no ar em dias ou poucas semanas." },
      { q: "E se minhas necessidades mudarem depois?", a: "Isso é esperado. Continuo como parceiro de longo prazo para ajustar e ampliar sua automação com o tempo." }
    ],
    note: "Ainda tem uma pergunta? Traga para a chamada — ela é gratuita."
  },
  finalCta: {
    title: "Pronto para recuperar seu tempo?",
    sub: "Agende uma chamada gratuita, sem pressão. Vamos descobrir juntos se a automação faz sentido para você.",
    button: "Agendar uma chamada gratuita",
    note: "Gratuita para agendar. Você só paga se construirmos algo juntos."
  },
  footer: {
    tagline: "Automação com IA para negócios e pessoas que preferem investir o tempo em outra coisa.",
    links: ["Privacidade", "Termos", "contact@processoia.com"],
    rights: "© 2026 ProcessoIA. Todos os direitos reservados."
  }
}
};
