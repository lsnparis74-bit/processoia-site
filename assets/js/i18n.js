// Tous les textes du site ProcessoIA, en anglais, français et portugais (Portugal).
// Après toute modification : node scripts/processoia-site-langues.mjs livrables/sites-web/2026-11-06_processoia-refonte
// Les temps gagnés (about, lab) et les prix (offers, pricing, faq) sont des estimations à faire valider par Louison.
export const I18N = {
en: {
  meta: {
    title: "AI Automation for Small Businesses · ProcessoIA",
    description: "Louison, AI automation consultant in Lisbon and remote. Follow-ups and prospecting, CRM and invoicing, conversational AI agents: automations from €150. Free call.",
    jobTitle: "AI automation consultant"
  },
  ui: { skip: "Skip to content", menu: "Menu", close: "Close", prev: "Previous", next: "Next", language: "Language", logRunning: "running", logDone: "completed", backToTop: "Back to top" },
  nav: { about: "About me", offers: "Offers", work: "Work", pricing: "Pricing", faq: "FAQ", bookCall: "Book a free call" },
  hero: {
    eyebrow: "AI automation for small businesses · Lisbon & remote",
    titleLines: ["Get your hours back.", "Follow-ups, quotes, client emails: AI handles them for you."],
    sub: "I'm Louison. I build AI automations and AI agents that take the repetitive work off small businesses and freelancers, using the same methods that save me around 30 hours a week.",
    ctaPrimary: "Book a free call", ctaSecondary: "See my work",
    note: "Free 30-minute call. Fixed quote before you pay anything.",
    scroll: "Scroll to explore",
    chips: ["New lead", "Invoice to send", "Client email", "Weekly report", "Reminder", "Follow-up", "Booking request", "Data entry"],
    chapters: [
      { label: "Chaos", kicker: "The problem", title: "Dozens of small tasks. Every single day.", sub: "Emails, invoices, follow-ups, reports: the busywork scatters your attention." },
      { label: "Understanding", kicker: "Understanding", title: "AI makes sense of each one.", sub: "It reads, sorts and decides what to do, with the nuance of a capable assistant." },
      { label: "Automation", kicker: "Automation", title: "Then runs them on its own, 24/7.", sub: "Triggers, actions, follow-ups: everything flows without anyone having to remember." },
      { label: "Result", kicker: "The result", title: "Your hours, back.", sub: "Order where there was chaos. Time for the work that actually matters." }
    ]
  },
  marquee: {
    row1: ["Follow-ups", "Prospecting", "Communication", "CRM", "Stock", "Invoicing", "Conversational AI agent"],
    row2: ["Video channels", "Light", "Etsy agents", "LinkedIn", "Fiverr & Malt", "AI agents"]
  },
  about: {
    kicker: "About me", title: "I'm Louison, and I automate my own life first.",
    intro: "Since November 2025 I've been training in automation and artificial intelligence, and I try everything on myself before offering it: creating and running my video channels, a personal assistant that prepares my days, an online shop run by AI agents. Today I bring these methods to small businesses and freelancers, from Lisbon or remotely.",
    linkedin: "My LinkedIn profile",
    photoAlt: "Louison, the AI automation consultant behind ProcessoIA",
    stats: [
      { label: "a video produced and published every day on YouTube, Instagram and TikTok" },
      { label: "automated systems working for me every week" },
      { label: "saved every week, based on the estimates detailed below" }
    ],
    items: [
      { title: "Tested on myself first", desc: "Every method I offer you already runs in my own life, every day." },
      { title: "Field experience", desc: "Six years in customer relations, so I fully understand what you need and find the solution that fits it best." },
      { title: "Direct access", desc: "You talk to the person building your automation. No agency, no middleman, quick replies." },
      { title: "Long-term partner", desc: "As your needs change, I'm here to adjust and evolve what we built together." }
    ]
  },
  offers: {
    kicker: "Offers", title: "Three automations to start with",
    lead: "For small businesses, freelancers, shops and service companies. Each offer plugs into the tools you already use (Gmail, Outlook, Google Sheets, your CRM...).",
    book: "Book a call",
    items: [
      { tag: "Sales & visibility", title: "Follow-ups, prospecting and communication", desc: "The tasks that bring clients in and back run on their own: quote and invoice follow-ups, prospect tracking, posts and emails prepared by AI.",
        points: ["Quote, invoice and prospect follow-ups, personalised in your name", "Prospects qualified and tracked automatically until they reply", "LinkedIn posts, newsletters and emails prepared, you approve"],
        delay: "Up and running in 1 to 2 weeks", price: "From €150", priceMin: 150 },
      { tag: "Management", title: "CRM, stock, sales and invoicing", desc: "One system connects your clients, stock, sales and cash flow. Invoices go out on their own and stock updates with every sale.",
        points: ["A clear CRM: every client, every job, every exchange", "Stock updated with every sale, with an alert before you run out", "Automatic invoices, payment reminders and cash-flow dashboard"],
        delay: "Up and running in 2 to 4 weeks", price: "From €350", priceMin: 350 },
      { tag: "Customer service", title: "Conversational AI agent", desc: "An assistant that answers your clients by email, on your website or by messaging, connected to your CRM and trained on your rules: terms and conditions of sale, prices, lead times.",
        points: ["Answers 24/7, in your company's tone of voice", "Connected to the CRM: it knows the client and their history", "Follows your terms and rules, and hands over to you when needed"],
        delay: "Up and running in 3 to 5 weeks", price: "From €700", priceMin: 700 }
    ],
    custom: { title: "Something else?", desc: "Reporting, bookings, HR, admin tasks: tell me about the task that eats your time, and on the call I'll tell you whether it can be automated and what it would cost.", cta: "Talk it through for free" }
  },
  work: {
    kicker: "Work", title: "What I've built for clients",
    lead: "Real projects, described as they are.",
    needLabel: "The need", builtLabel: "What I built", zoom: "View full size",
    cases: [
      { tag: "Jewellery · 2 shops", client: "Frédéric Parisse, jeweller", title: "A CRM to run two jewellery shops",
        need: "Track every job across both shops in one place: repairs, custom pieces, gold buy-backs, supplier orders, quotes and invoices.",
        built: "A visual 3D CRM showing both shops from above, with every department linked together. Any job older than 21 days is automatically flagged as late, and per-shop and overall reports calculate themselves.",
        status: "Prototype delivered, roll-out in progress", gain: "≈ 6 hours saved per week across both shops",
        shots: [
          "Overview: both shops seen from above, with late jobs flagged in red",
          "Late jobs across both shops, each with the next action to take",
          "Repair workshop: jobs to handle, in progress and late, by craftsman",
          "Quotes and invoices for both shops, with the amount still to collect",
          "Display stock in both shops by category, with the potential margin",
          "Monthly report: revenue, margin, estimated result and shop comparison"],
        note: "Screenshots of the prototype, with fictitious demo data" },
      { tag: "Event music", client: "An event music company", title: "Prospect follow-ups that send themselves",
        need: "Follow up every prospect with a personalised message without spending evenings on it, and never leave a reply unanswered.",
        built: "Each follow-up goes out with an email and a Google Slides presentation made in the prospect's name. Replies are read by AI (interested, declined, question), logged in a sheet, turned into sales tasks and flagged with an alert. The AI learns the owner's writing style from his corrections.",
        status: "Live", gain: "≈ 15 minutes saved per prospect" }
    ],
    quote: { text: "", author: "Frédéric Parisse, jeweller" }
  },
  lab: {
    kicker: "Tested on myself first", title: "What I automate in my own life",
    lead: "Before I offer you a method, I run it myself. Here is what works every day, and the time it saves me (estimates).",
    beforeLabel: "By hand", afterLabel: "Now",
    items: [
      { title: "My video channels", desc: "Creating and running my educational channels on YouTube, Instagram and TikTok. Script, voice, 3D animation and editing are prepared by a set of AI tools, then every video is published automatically on all three platforms, with replies to comments.", before: "≈ 4 h per video", after: "≈ 30 min of review" },
      { title: "Light, my personal assistant", desc: "A conversational agent that works as my personal assistant. It manages other specialised agents, like a small company: every morning it briefs me on my projects and the news. I talk to it from my phone, through Discord.", before: "≈ 45 min a day", after: "≈ 10 min" },
      { title: "An Etsy shop run by AI agents", desc: "Agents spot what sells, make the digital products, write the listings and check the quality. I review and publish.", before: "≈ 3 h per product", after: "≈ 30 min" },
      { title: "My LinkedIn content", desc: "An agent watches AI and automation topics, suggests angles and drafts the posts. I choose, adjust and publish.", before: "≈ 1 h 30 per post", after: "≈ 20 min" },
      { title: "My Fiverr and Malt services", desc: "For my orders on Fiverr and Malt (automations, content, visuals and other services), an automated pipeline prepares the work and I check everything before each delivery.", before: "≈ 1 h 30 per order", after: "≈ 20 min" }
    ],
    total: { label: "saved every week, counting one video a day, the morning update, two LinkedIn posts and one Etsy product a week.", cta: "Shall we do the same for you?" }
  },
  diagram: {
    kicker: "How it works", title: "One idea, applied everywhere",
    sub: "Every automation follows the same simple shape.",
    steps: [
      { label: "Trigger", desc: "Something happens: a form is filled, an email lands, a date arrives." },
      { label: "Process", desc: "The system checks, sorts, enriches or decides what to do with it." },
      { label: "Result", desc: "The right action happens automatically, and no one has to remember." }
    ],
    example: "A quote has gone unanswered for 7 days → AI writes a personalised follow-up → it goes out, and the reply lands sorted in your CRM."
  },
  ai: {
    kicker: "Why AI changes everything", title: "From rigid rules to real judgment",
    sub: "Classic automation follows fixed steps. AI adds an understanding of language and context: it reads an email, understands a request and picks the right action. An AI agent goes further and carries a task through from start to finish, over several steps.",
    before: { label: "Before", items: ["Hours of manual, repetitive work", "Rigid rules that break on edge cases", "Business hours only", "Slow replies to customers and leads"] },
    after: { label: "With AI", items: ["Minutes instead of hours", "Judgment that adapts to nuance", "Working 24/7, while you sleep", "Instant, consistent responses"] }
  },
  pricing: {
    kicker: "Pricing", title: "A base price, then it depends on complexity",
    lead: "The price depends on how many apps need to be connected and how complex the job is (AI, conditions, volume). You get a fixed quote after the call, before you pay anything.",
    tiers: [
      { name: "Simple", price: "From €150", priceMin: 150, desc: "One automation connecting two apps, without AI.", points: ["2 connected apps", "Clear rules, no AI", "E.g. quote follow-ups: Gmail + Google Sheets"] },
      { name: "Connected", price: "From €350", priceMin: 350, desc: "Several tools connected, with an AI step that reads, sorts or writes.", points: ["3 to 4 connected apps", "One AI step (sorting, writing, analysis)", "E.g. CRM, stock and invoicing connected"] },
      { name: "AI agent", price: "From €700", priceMin: 700, desc: "An agent that carries a task from start to finish and makes decisions.", points: ["5 or more apps", "Autonomous decisions, edge cases handled", "E.g. conversational agent connected to your CRM and terms"] }
    ],
    terms: ["Fixed quote before any payment", "50% at the start, 50% when it goes live", "Hosting and tool costs (AI, apps) stated in the quote"],
    cta: "Get my free quote"
  },
  data: {
    kicker: "Your data", title: "Your tools, your data, your automation",
    lead: "Handing your emails or your clients to an automation takes trust. Here are my rules, in line with the GDPR.",
    items: [
      { title: "Hosted in Europe", desc: "Your data stays in your own tools (Google, Microsoft…). Your automations run on a dedicated n8n instance, kept separate from other clients, on my server in Europe. A GDPR data processing agreement covers everything." },
      { title: "Limited access", desc: "I only access what the project needs, and you can remove my access at any time." },
      { title: "Professional AI", desc: "I use AI models through their professional offerings (API), whose data is not used to train the models by default." },
      { title: "You own it", desc: "Everything built belongs to you: the automations, their documentation and the access. It is your property: you can view them, have them changed or deleted whenever you want, and take them with you to run elsewhere." }
    ]
  },
  process: {
    kicker: "How we'll work together", title: "Your automation project in three simple steps",
    steps: [
      { title: "Free discovery call", desc: "30 minutes to go through your tasks and spot what can be automated. No cost, no obligation." },
      { title: "Fixed quote & build", desc: "A priced proposal, then the build. This is the paid phase: 50% at the start, 50% when it goes live." },
      { title: "Ongoing support & evolution", desc: "I stay available to refine, extend and adapt the system as your needs change." }
    ]
  },
  faq: {
    kicker: "FAQ", title: "Questions about AI automation",
    items: [
      { q: "Is the call really free?", a: "Yes, completely free and with no obligation. You only pay if we decide to build something together, after a fixed quote." },
      { q: "How much does an automation cost?", a: "A base price from €150 for a simple automation connecting two apps. The price goes up with the number of connected apps and the complexity: from €350 with an AI step, from €700 for an AI agent. The quote is fixed and given before any payment." },
      { q: "What if automation isn't right for my business?", a: "That's a perfectly good outcome of the call. I'll tell you honestly, with no hard sell." },
      { q: "Do I need technical knowledge?", a: "None at all. I handle the technical side; you just describe how you currently work." },
      { q: "How long does a project take?", a: "It depends on scope, but most automations go from approved quote to live system in a few days to a few weeks." },
      { q: "What if it breaks?", a: "You let me know and I fix it. Errors that come from my build are fixed free of charge. Each automation can also alert you itself if a step fails." },
      { q: "Who owns the automation?", a: "You do. It runs on an n8n instance dedicated to you and you receive its documentation. If we stop working together, I hand over the complete automation so it can run on your side or elsewhere, then I delete your data from my server." },
      { q: "Is my data safe?", a: "I only access what is needed. Your automations run on a separate instance, on a server in Europe, in line with the GDPR. AI models are used through their professional offerings, whose data is not used for training by default." },
      { q: "What if my needs change later?", a: "That's expected. I stay on as a long-term partner to adjust and extend your automation over time." },
      { q: "Which tools do you use?", a: "Whatever fits your needs best: no-code platforms such as n8n, Make or Zapier, the leading AI models (OpenAI, Claude, Mistral...) and the apps you already use, like Gmail, Outlook, Google Sheets, Notion or your CRM." },
      { q: "Do you only work in Lisbon?", a: "I'm based in Lisbon and work remotely with businesses across Portugal, France and the rest of Europe, in English, French or Portuguese." }
    ],
    note: "Still have a question? Bring it to the call, it's free."
  },
  finalCta: {
    title: "Ready to get some time back?",
    sub: "Pick a 30-minute slot. We'll look at what can be automated in your business, and you'll leave with a clear idea of the price.",
    button: "Book a free call",
    note: "Free, no obligation. Fixed quote before any payment.",
    embedLoading: "Loading available slots…",
    embedFallback: "Slots not showing? Open the booking page"
  },
  footer: {
    tagline: "AI automation for small businesses and freelancers who'd rather spend their time elsewhere.",
    legal: "Legal notice", privacy: "Privacy", linkedin: "LinkedIn",
    rights: "© 2026 ProcessoIA. All rights reserved."
  },
  legal: {
    back: "Back to the website",
    updated: "Last updated: 13 November 2026",
    notice: {
      path: "/legal/", title: "Legal notice",
      description: "Legal notice for processoia.com: publisher, hosting and intellectual property.",
      sections: [
        { h: "Publisher", p: ["This website is published by Louison, an independent AI automation consultant trading as ProcessoIA, based in Lisbon, Portugal.", "Contact: contact@processoia.com", "Publication director: Louison."] },
        { h: "Hosting", p: ["Netlify, Inc., 101 2nd Street, Suite 575, San Francisco, CA 94105, United States. https://www.netlify.com"] },
        { h: "Intellectual property", p: ["The texts, the ProcessoIA logo, the visuals and the code of this website belong to their author unless stated otherwise. Any reproduction without written permission is prohibited."] },
        { h: "External links", p: ["The website links to third-party services (Cal.com for bookings, LinkedIn). Their content and terms are the responsibility of their respective publishers."] },
        { h: "Credits", p: ["Fonts: Sora, Inter and JetBrains Mono (Google Fonts). Icons: Lucide. Animations: GSAP and Three.js."] }
      ]
    },
    privacy: {
      path: "/privacy/", title: "Privacy policy",
      description: "How processoia.com handles your personal data: audience measurement without cookies, bookings, emails and your rights.",
      sections: [
        { h: "Who is responsible?", p: ["Louison (ProcessoIA), Lisbon, Portugal. For any question: contact@processoia.com"] },
        { h: "Audience measurement", p: ["This website uses Cloudflare Web Analytics to count visits. This tool sets no cookies and creates no personal identifier: it provides overall statistics (pages viewed, country, device type, referring site)."] },
        { h: "Bookings", p: ["Calls are booked through Cal.com (Cal.com, Inc.). The information you enter there (name, email, answers) is only used to prepare and hold the call. The Cal.com module shown on the website may set its own technical cookies; its privacy policy applies."] },
        { h: "Emails", p: ["Messages sent to contact@processoia.com are only used to reply to you and follow up on our conversation."] },
        { h: "Cookies", p: ["ProcessoIA sets no advertising or tracking cookies. The website only remembers, in your browser, the language you chose."] },
        { h: "Technical services", p: ["The website is hosted by Netlify, which keeps technical logs (IP address, date, page requested) for security and proper operation. Fonts are loaded from Google Fonts and some libraries from jsDelivr and unpkg: these services receive your IP address when they load."] },
        { h: "Retention", p: ["Exchanges with prospects are kept for at most 3 years after the last contact; exchanges with clients for the duration of the relationship and the legal retention periods for accounting documents."] },
        { h: "Your rights", p: ["You can ask to access, correct, delete or port your data, or object to its processing, by writing to contact@processoia.com. You can also contact the data protection authority: the CNPD in Portugal or the CNIL in France."] }
      ]
    }
  }
},
fr: {
  meta: {
    title: "Automatisation IA pour PME et indépendants · ProcessoIA",
    description: "Louison, consultant en automatisation IA à Lisbonne et à distance. Relances et prospection, CRM et facturation, agents IA conversationnels : automatisations dès 150 €. Appel gratuit.",
    jobTitle: "Consultant en automatisation IA"
  },
  ui: { skip: "Aller au contenu", menu: "Menu", close: "Fermer", prev: "Précédente", next: "Suivante", language: "Langue", logRunning: "en cours", logDone: "terminé", backToTop: "Haut de page" },
  nav: { about: "Qui je suis", offers: "Offres", work: "Réalisations", pricing: "Tarifs", faq: "FAQ", bookCall: "Réserver un appel gratuit" },
  hero: {
    eyebrow: "Automatisation IA pour PME · Lisbonne et à distance",
    titleLines: ["Récupérez vos heures.", "Relances, devis, e-mails clients : l'IA s'en charge pour vous."],
    sub: "Je m'appelle Louison. Je construis pour les PME et les indépendants des automatisations et des agents IA qui font le travail répétitif à leur place, avec les mêmes méthodes qui me font gagner environ 30 heures par semaine.",
    ctaPrimary: "Réserver un appel gratuit", ctaSecondary: "Voir mes réalisations",
    note: "Appel gratuit de 30 min. Devis fixe avant tout paiement.",
    scroll: "Faites défiler",
    chips: ["Nouveau lead", "Facture à envoyer", "E-mail client", "Rapport hebdo", "Rappel", "Relance", "Demande de RDV", "Saisie de données"],
    chapters: [
      { label: "Chaos", kicker: "Le problème", title: "Des dizaines de petites tâches. Chaque jour.", sub: "E-mails, factures, relances, rapports : le travail répétitif éparpille votre attention." },
      { label: "Compréhension", kicker: "Compréhension", title: "L'IA comprend chacune d'elles.", sub: "Elle lit, trie et décide quoi faire, avec la nuance d'un assistant compétent." },
      { label: "Automatisation", kicker: "Automatisation", title: "Puis les exécute seule, 24h/24.", sub: "Déclencheurs, actions, relances : tout s'enchaîne sans que personne n'ait à y penser." },
      { label: "Résultat", kicker: "Le résultat", title: "Vos heures, récupérées.", sub: "De l'ordre là où régnait le chaos. Du temps pour ce qui compte vraiment." }
    ]
  },
  marquee: {
    row1: ["Relances", "Prospection", "Communication", "CRM", "Stock", "Facturation", "Agent IA conversationnel"],
    row2: ["Chaînes vidéo", "Light", "Agents Etsy", "LinkedIn", "Fiverr et Malt", "Agents IA"]
  },
  about: {
    kicker: "Qui je suis", title: "Je m'appelle Louison, et j'automatise d'abord ma propre vie.",
    intro: "Depuis novembre 2025, je me forme à l'automatisation et à l'intelligence artificielle, et j'applique tout sur moi avant de le proposer : la création et la gestion de mes chaînes vidéo, un assistant personnel qui prépare mes journées, une boutique en ligne tenue par des agents IA. Aujourd'hui, je mets ces méthodes au service des PME et des indépendants, depuis Lisbonne ou à distance.",
    linkedin: "Mon profil LinkedIn",
    photoAlt: "Louison, consultant en automatisation IA derrière ProcessoIA",
    stats: [
      { label: "une vidéo produite et publiée chaque jour sur YouTube, Instagram et TikTok" },
      { label: "systèmes automatisés qui travaillent pour moi chaque semaine" },
      { label: "gagnées chaque semaine, d'après les estimations détaillées plus bas" }
    ],
    items: [
      { title: "Testé sur moi d'abord", desc: "Chaque méthode que je vous propose tourne déjà chez moi, tous les jours." },
      { title: "Le regard du terrain", desc: "Six ans en relation client, pour comprendre parfaitement votre besoin et vous trouver la solution la plus adaptée." },
      { title: "Accès direct", desc: "Vous parlez à la personne qui construit votre automatisation. Pas d'agence, pas d'intermédiaire, des réponses rapides." },
      { title: "Partenaire dans la durée", desc: "Si vos besoins évoluent, je reste disponible pour ajuster et faire évoluer ce qu'on a construit." }
    ]
  },
  offers: {
    kicker: "Offres", title: "Trois automatisations pour commencer",
    lead: "Pour les PME, les indépendants, les commerces et les services. Chaque offre se branche sur les outils que vous utilisez déjà (Gmail, Outlook, Google Sheets, votre CRM...).",
    book: "Réserver un appel",
    items: [
      { tag: "Ventes et visibilité", title: "Relance, prospection et communication", desc: "Les tâches qui font venir et revenir les clients tournent seules : relances de devis et de factures, suivi des prospects, publications et e-mails préparés par l'IA.",
        points: ["Relances de devis, factures et prospects, personnalisées à votre nom", "Prospects qualifiés et suivis automatiquement jusqu'à leur réponse", "Posts LinkedIn, newsletters et e-mails préparés, vous validez"],
        delay: "Mise en service en 1 à 2 semaines", price: "Dès 150 €", priceMin: 150 },
      { tag: "Gestion", title: "CRM, stock, ventes et facturation", desc: "Un seul système relie vos clients, votre stock, vos ventes et votre trésorerie. Les factures partent seules et le stock se met à jour à chaque vente.",
        points: ["Un CRM clair : chaque client, chaque dossier, chaque échange", "Stock mis à jour à chaque vente, alerte avant la rupture", "Factures, relances d'impayés et tableau de trésorerie automatiques"],
        delay: "Mise en service en 2 à 4 semaines", price: "Dès 350 €", priceMin: 350 },
      { tag: "Service client", title: "Agent IA conversationnel", desc: "Un assistant qui répond à vos clients par e-mail, sur votre site ou par messagerie, relié à votre CRM et formé à vos règles : conditions générales de vente, tarifs, délais.",
        points: ["Réponses 24h/24, dans le ton de votre entreprise", "Relié au CRM : il connaît le client et son historique", "Respecte vos CGV et vos règles, et vous passe la main si besoin"],
        delay: "Mise en service en 3 à 5 semaines", price: "Dès 700 €", priceMin: 700 }
    ],
    custom: { title: "Un autre besoin ?", desc: "Reporting, prise de rendez-vous, ressources humaines, tâches administratives : décrivez-moi la tâche qui vous prend du temps, je vous dis pendant l'appel si elle s'automatise et combien ça coûterait.", cta: "En parler gratuitement" }
  },
  work: {
    kicker: "Réalisations", title: "Ce que j'ai construit pour mes clients",
    lead: "Des projets réels, décrits tels qu'ils sont.",
    needLabel: "Le besoin", builtLabel: "Ce que j'ai construit", zoom: "Voir en grand",
    cases: [
      { tag: "Joaillerie · 2 boutiques", client: "Frédéric Parisse, joaillier", title: "Un CRM pour piloter deux bijouteries",
        need: "Suivre au même endroit tous les dossiers des deux boutiques : réparations, créations, rachats d'or, commandes fournisseurs, devis et factures.",
        built: "Un CRM visuel en 3D qui montre les deux boutiques vues du dessus et relie tous les pôles entre eux. Tout dossier qui dépasse 21 jours passe automatiquement en retard, et les bilans par boutique et global se calculent seuls.",
        status: "Prototype livré, mise en service en cours", gain: "≈ 6 h gagnées par semaine sur les deux boutiques",
        shots: [
          "Vue d'ensemble : les deux boutiques vues du dessus, dossiers en retard signalés en rouge",
          "Les dossiers en retard des deux boutiques, chacun avec l'action à faire",
          "L'atelier de réparation : dossiers à traiter, en cours et en retard, par artisan",
          "Devis et factures des deux boutiques, avec le reste à encaisser",
          "Le stock en vitrine des deux boutiques, par catégorie, avec la marge potentielle",
          "Le bilan du mois : chiffre d'affaires, marge, résultat estimé et comparatif des boutiques"],
        note: "Captures du prototype, avec des données fictives de démonstration" },
      { tag: "Musique événementielle", client: "Une entreprise de musique événementielle", title: "Des relances de prospects qui partent toutes seules",
        need: "Relancer chaque prospect avec un message personnalisé, sans y passer ses soirées, et ne laisser aucune réponse sans suite.",
        built: "Chaque relance part avec un e-mail et une présentation Google Slides créée au nom du prospect. Les réponses sont lues par l'IA (intérêt, refus, question), notées dans un tableau, transformées en tâches commerciales et signalées par une alerte. L'IA apprend le style d'écriture du dirigeant à partir de ses corrections.",
        status: "En service", gain: "≈ 15 minutes gagnées par prospect relancé" }
    ],
    quote: { text: "", author: "Frédéric Parisse, joaillier" }
  },
  lab: {
    kicker: "Testé sur moi d'abord", title: "Ce que j'automatise dans ma propre vie",
    lead: "Avant de vous proposer une méthode, je la fais tourner chez moi. Voici ce qui fonctionne chaque jour, et le temps que ça me fait gagner (estimations).",
    beforeLabel: "À la main", afterLabel: "Aujourd'hui",
    items: [
      { title: "Mes chaînes vidéo", desc: "La création et la gestion de mes chaînes éducatives sur YouTube, Instagram et TikTok. Script, voix, animation 3D et montage sont préparés par une suite d'outils IA, puis chaque vidéo est publiée automatiquement sur les trois plateformes, avec réponses aux commentaires.", before: "≈ 4 h par vidéo", after: "≈ 30 min de relecture" },
      { title: "Light, mon assistant personnel", desc: "Un agent conversationnel qui me sert d'assistant personnel. Il dirige d'autres agents spécialisés, comme une petite entreprise : chaque matin, il me fait le point sur mes projets et l'actualité. Je lui parle depuis mon téléphone, via Discord.", before: "≈ 45 min par jour", after: "≈ 10 min" },
      { title: "Une boutique Etsy tenue par des agents IA", desc: "Des agents repèrent ce qui se vend, fabriquent les produits numériques, rédigent les annonces et contrôlent la qualité. Je relis et je publie.", before: "≈ 3 h par produit", after: "≈ 30 min" },
      { title: "Ma communication LinkedIn", desc: "Un agent fait la veille des sujets IA et automatisation, propose des angles et rédige les posts. Je choisis, j'ajuste et je publie.", before: "≈ 1 h 30 par post", after: "≈ 20 min" },
      { title: "Mes services sur Fiverr et Malt", desc: "Pour mes commandes sur Fiverr et Malt (automatisations, contenus, visuels et autres services), une chaîne automatisée prépare le travail et je contrôle tout avant chaque livraison.", before: "≈ 1 h 30 par commande", after: "≈ 20 min" }
    ],
    total: { label: "gagnées chaque semaine, en comptant une vidéo par jour, le point du matin, deux posts LinkedIn et un produit Etsy par semaine.", cta: "Et si on faisait pareil chez vous ?" }
  },
  diagram: {
    kicker: "Comment ça marche", title: "Une seule idée, appliquée partout",
    sub: "Chaque automatisation suit la même logique simple.",
    steps: [
      { label: "Déclencheur", desc: "Quelque chose se produit : un formulaire rempli, un e-mail reçu, une date qui arrive." },
      { label: "Traitement", desc: "Le système vérifie, trie, enrichit ou décide quoi en faire." },
      { label: "Résultat", desc: "La bonne action se déclenche automatiquement, sans que personne ait besoin d'y penser." }
    ],
    example: "Un devis reste sans réponse depuis 7 jours → l'IA rédige une relance personnalisée → elle part, et la réponse arrive classée dans votre CRM."
  },
  ai: {
    kicker: "Pourquoi l'IA change tout", title: "Des règles rigides à un vrai jugement",
    sub: "Une automatisation classique suit des étapes figées. L'IA ajoute la compréhension du langage et du contexte : elle lit un e-mail, comprend une demande et choisit la bonne action. Un agent IA va plus loin et mène une tâche de bout en bout, en plusieurs étapes.",
    before: { label: "Avant", items: ["Des heures de travail manuel et répétitif", "Des règles rigides qui craquent au moindre cas particulier", "Disponible aux heures de bureau seulement", "Des réponses lentes aux clients et prospects"] },
    after: { label: "Avec l'IA", items: ["Des minutes au lieu des heures", "Un jugement qui s'adapte aux nuances", "Disponible 24h/24, même pendant votre sommeil", "Des réponses instantanées et cohérentes"] }
  },
  pricing: {
    kicker: "Tarifs", title: "Un prix de base, puis selon la complexité",
    lead: "Le prix dépend du nombre d'applications à relier entre elles et de la complexité (IA, conditions, volume). Vous recevez un devis fixe après l'appel, avant de payer quoi que ce soit.",
    tiers: [
      { name: "Simple", price: "Dès 150 €", priceMin: 150, desc: "Une automatisation qui relie deux applications, sans IA.", points: ["2 applications reliées", "Des règles claires, sans IA", "Ex. : relances de devis, Gmail + Google Sheets"] },
      { name: "Connecté", price: "Dès 350 €", priceMin: 350, desc: "Plusieurs outils reliés, avec une étape d'IA qui lit, trie ou rédige.", points: ["3 à 4 applications reliées", "Une étape d'IA (tri, rédaction, analyse)", "Ex. : CRM, stock et facturation reliés"] },
      { name: "Agent IA", price: "Dès 700 €", priceMin: 700, desc: "Un agent qui mène une tâche de bout en bout et prend des décisions.", points: ["5 applications et plus", "Décisions autonomes, cas particuliers gérés", "Ex. : agent conversationnel relié au CRM et à vos CGV"] }
    ],
    terms: ["Devis fixe avant tout paiement", "50 % au démarrage, 50 % à la mise en service", "Hébergement et coût des outils (IA, applications) indiqués dans le devis"],
    cta: "Obtenir mon devis gratuit"
  },
  data: {
    kicker: "Vos données", title: "Vos outils, vos données, votre automatisation",
    lead: "Confier ses e-mails ou ses clients à une automatisation demande de la confiance. Voici mes règles, dans le respect du RGPD.",
    items: [
      { title: "Hébergé en Europe", desc: "Vos données restent dans vos outils (Google, Microsoft…). Vos automatisations tournent sur une instance n8n dédiée, séparée de celles des autres clients, sur mon serveur en Europe. Un contrat de sous-traitance RGPD encadre le tout." },
      { title: "Accès limité", desc: "Je n'accède qu'à ce qui est nécessaire au projet, et vous pouvez retirer mes accès à tout moment." },
      { title: "IA professionnelle", desc: "J'utilise les modèles d'IA via leurs offres professionnelles (API), dont les données ne servent pas à entraîner les modèles par défaut." },
      { title: "Vous êtes propriétaire", desc: "Tout ce qui est construit vous appartient : les automatisations, leur documentation et les accès. C'est votre propriété : vous pouvez les consulter, les faire modifier ou supprimer quand vous le souhaitez, et les récupérer pour les faire tourner ailleurs." }
    ]
  },
  process: {
    kicker: "Comment on va travailler ensemble", title: "Votre projet d'automatisation en trois étapes simples",
    steps: [
      { title: "Appel découverte gratuit", desc: "30 minutes pour passer en revue vos tâches et repérer ce qui s'automatise. Sans frais, sans engagement." },
      { title: "Devis fixe et construction", desc: "Une proposition chiffrée, puis la construction. C'est la phase payante : 50 % au démarrage, 50 % à la mise en service." },
      { title: "Suivi et évolution", desc: "Je reste disponible pour affiner, étendre et adapter le système selon vos besoins." }
    ]
  },
  faq: {
    kicker: "FAQ", title: "Vos questions sur l'automatisation IA",
    items: [
      { q: "L'appel est-il vraiment gratuit ?", a: "Oui, totalement gratuit et sans engagement. Vous ne payez que si on décide de construire quelque chose ensemble, après un devis fixe." },
      { q: "Combien coûte une automatisation ?", a: "Un prix de base dès 150 € pour une automatisation simple qui relie deux applications. Le prix augmente avec le nombre d'applications reliées et la complexité : dès 350 € avec une étape d'IA, dès 700 € pour un agent IA. Le devis est fixe et donné avant tout paiement." },
      { q: "Et si l'automatisation n'est pas adaptée à mon entreprise ?", a: "C'est une conclusion tout à fait valable de l'appel. Je vous le dirai honnêtement, sans forcer la vente." },
      { q: "Ai-je besoin de connaissances techniques ?", a: "Aucune. Je m'occupe de la partie technique ; vous décrivez simplement votre façon de travailler." },
      { q: "Combien de temps prend un projet ?", a: "Cela dépend du périmètre, mais la plupart des automatisations passent du devis validé au système en ligne en quelques jours à quelques semaines." },
      { q: "Et si ça tombe en panne ?", a: "Vous me prévenez et je corrige. Les erreurs qui viennent de ma construction sont corrigées sans frais. Chaque automatisation peut aussi vous alerter elle-même si une étape échoue." },
      { q: "À qui appartient l'automatisation ?", a: "À vous. Elle tourne sur une instance n8n qui vous est dédiée et vous recevez sa documentation. Si nous arrêtons de travailler ensemble, je vous remets l'automatisation complète pour la faire tourner chez vous ou ailleurs, puis je supprime vos données de mon serveur." },
      { q: "Mes données sont-elles en sécurité ?", a: "Je n'accède qu'à ce qui est nécessaire. Vos automatisations tournent sur une instance séparée, sur un serveur en Europe, dans le respect du RGPD. Les modèles d'IA sont utilisés via leurs offres professionnelles, dont les données ne servent pas à l'entraînement par défaut." },
      { q: "Et si mes besoins changent plus tard ?", a: "C'est prévu. Je reste un partenaire de long terme pour ajuster et étendre votre automatisation dans le temps." },
      { q: "Quels outils utilisez-vous ?", a: "Ceux qui collent le mieux à vos besoins : des plateformes no-code comme n8n, Make ou Zapier, les meilleurs modèles d'IA (OpenAI, Claude, Mistral...) et les outils que vous utilisez déjà, comme Gmail, Outlook, Google Sheets, Notion ou votre CRM." },
      { q: "Travaillez-vous uniquement à Lisbonne ?", a: "Je suis basé à Lisbonne et je travaille à distance avec des entreprises au Portugal, en France et partout en Europe, en français, en anglais ou en portugais." }
    ],
    note: "Encore une question ? Posez-la pendant l'appel, il est gratuit."
  },
  finalCta: {
    title: "Prêt à récupérer du temps ?",
    sub: "Choisissez un créneau de 30 minutes. On regarde ensemble ce qui peut s'automatiser chez vous, et vous repartez avec une idée claire du prix.",
    button: "Réserver un appel gratuit",
    note: "Gratuit, sans engagement. Devis fixe avant tout paiement.",
    embedLoading: "Chargement des créneaux…",
    embedFallback: "Les créneaux ne s'affichent pas ? Ouvrir la page de réservation"
  },
  footer: {
    tagline: "L'automatisation par l'IA pour les PME et les indépendants qui préfèrent passer leur temps ailleurs.",
    legal: "Mentions légales", privacy: "Confidentialité", linkedin: "LinkedIn",
    rights: "© 2026 ProcessoIA. Tous droits réservés."
  },
  legal: {
    back: "Retour au site",
    updated: "Mise à jour : 13 novembre 2026",
    notice: {
      path: "/fr/mentions-legales/", title: "Mentions légales",
      description: "Mentions légales de processoia.com : éditeur, hébergement et propriété intellectuelle.",
      sections: [
        { h: "Éditeur du site", p: ["Ce site est édité par Louison, consultant indépendant en automatisation IA, sous le nom commercial ProcessoIA, basé à Lisbonne, Portugal.", "Contact : contact@processoia.com", "Directeur de la publication : Louison."] },
        { h: "Hébergement", p: ["Netlify, Inc., 101 2nd Street, Suite 575, San Francisco, CA 94105, États-Unis. https://www.netlify.com"] },
        { h: "Propriété intellectuelle", p: ["Les textes, le logo ProcessoIA, les visuels et le code de ce site appartiennent à leur auteur, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite."] },
        { h: "Liens externes", p: ["Le site renvoie vers des services tiers (Cal.com pour la prise de rendez-vous, LinkedIn). Leur contenu et leurs conditions relèvent de leurs éditeurs respectifs."] },
        { h: "Crédits", p: ["Polices : Sora, Inter et JetBrains Mono (Google Fonts). Icônes : Lucide. Animations : GSAP et Three.js."] }
      ]
    },
    privacy: {
      path: "/fr/confidentialite/", title: "Politique de confidentialité",
      description: "Comment processoia.com traite vos données personnelles : mesure d'audience sans cookie, rendez-vous, e-mails et vos droits.",
      sections: [
        { h: "Qui est responsable ?", p: ["Louison (ProcessoIA), Lisbonne, Portugal. Pour toute question : contact@processoia.com"] },
        { h: "Mesure d'audience", p: ["Ce site utilise Cloudflare Web Analytics pour compter les visites. Cet outil ne dépose aucun cookie et ne crée pas d'identifiant personnel : il fournit des statistiques globales (pages vues, pays, type d'appareil, site d'origine)."] },
        { h: "Prise de rendez-vous", p: ["Les rendez-vous sont pris via Cal.com (Cal.com, Inc.). Les informations que vous y saisissez (nom, e-mail, réponses) servent uniquement à préparer et tenir l'appel. Le module Cal.com affiché sur le site peut déposer ses propres cookies techniques ; sa politique de confidentialité s'applique."] },
        { h: "E-mails", p: ["Les messages envoyés à contact@processoia.com servent uniquement à vous répondre et à suivre notre échange."] },
        { h: "Cookies", p: ["ProcessoIA ne dépose aucun cookie publicitaire ni de suivi. Le site mémorise seulement, dans votre navigateur, la langue que vous avez choisie."] },
        { h: "Services techniques", p: ["Le site est hébergé par Netlify, qui enregistre des journaux techniques (adresse IP, date, page demandée) pour la sécurité et le bon fonctionnement. Les polices sont chargées depuis Google Fonts et certaines bibliothèques depuis jsDelivr et unpkg : ces services reçoivent votre adresse IP au moment du chargement."] },
        { h: "Durée de conservation", p: ["Les échanges avec les prospects sont conservés au plus 3 ans après le dernier contact ; ceux avec les clients, pendant la durée de la relation et les délais légaux de conservation des documents comptables."] },
        { h: "Vos droits", p: ["Vous pouvez demander l'accès, la rectification, l'effacement ou la portabilité de vos données, et vous opposer à leur traitement, en écrivant à contact@processoia.com. Vous pouvez aussi saisir l'autorité de protection des données : la CNPD au Portugal ou la CNIL en France."] }
      ]
    }
  }
},
pt: {
  meta: {
    title: "Automação com IA para PME e independentes · ProcessoIA",
    description: "Louison, consultor de automação com IA em Lisboa e à distância. Follow-ups e prospeção, CRM e faturação, agentes de IA conversacionais: automações desde 150 €. Chamada gratuita.",
    jobTitle: "Consultor de automação com IA"
  },
  ui: { skip: "Ir para o conteúdo", menu: "Menu", close: "Fechar", prev: "Anterior", next: "Seguinte", language: "Idioma", logRunning: "em execução", logDone: "concluído", backToTop: "Voltar ao topo" },
  nav: { about: "Quem sou", offers: "Ofertas", work: "Projetos", pricing: "Preços", faq: "FAQ", bookCall: "Marcar uma chamada gratuita" },
  hero: {
    eyebrow: "Automação com IA para PME · Lisboa e à distância",
    titleLines: ["Recupere as suas horas.", "Follow-ups, orçamentos, e-mails de clientes: a IA trata disso por si."],
    sub: "Chamo-me Louison. Crio automações e agentes de IA que fazem o trabalho repetitivo de PME e profissionais independentes, com os mesmos métodos que me poupam cerca de 30 horas por semana.",
    ctaPrimary: "Marcar uma chamada gratuita", ctaSecondary: "Ver os meus projetos",
    note: "Chamada gratuita de 30 min. Orçamento fixo antes de qualquer pagamento.",
    scroll: "Deslize para explorar",
    chips: ["Novo lead", "Fatura a enviar", "E-mail de cliente", "Relatório semanal", "Lembrete", "Follow-up", "Pedido de marcação", "Introdução de dados"],
    chapters: [
      { label: "Caos", kicker: "O problema", title: "Dezenas de pequenas tarefas. Todos os dias.", sub: "E-mails, faturas, follow-ups, relatórios: o trabalho repetitivo dispersa a sua atenção." },
      { label: "Compreensão", kicker: "Compreensão", title: "A IA compreende cada uma delas.", sub: "Lê, organiza e decide o que fazer, com a subtileza de um bom assistente." },
      { label: "Automação", kicker: "Automação", title: "Depois executa-as sozinha, 24/7.", sub: "Gatilhos, ações, follow-ups: tudo flui sem que ninguém tenha de se lembrar." },
      { label: "Resultado", kicker: "O resultado", title: "As suas horas, de volta.", sub: "Ordem onde havia caos. Tempo para o que realmente importa." }
    ]
  },
  marquee: {
    row1: ["Follow-ups", "Prospeção", "Comunicação", "CRM", "Stock", "Faturação", "Agente de IA conversacional"],
    row2: ["Canais de vídeo", "Light", "Agentes Etsy", "LinkedIn", "Fiverr e Malt", "Agentes de IA"]
  },
  about: {
    kicker: "Quem sou", title: "Chamo-me Louison e automatizo primeiro a minha própria vida.",
    intro: "Desde novembro de 2025 formo-me em automação e inteligência artificial, e testo tudo em mim antes de o propor: a criação e a gestão dos meus canais de vídeo, um assistente pessoal que prepara os meus dias, uma loja online gerida por agentes de IA. Hoje ponho estes métodos ao serviço de PME e profissionais independentes, a partir de Lisboa ou à distância.",
    linkedin: "O meu perfil no LinkedIn",
    photoAlt: "Louison, o consultor de automação com IA por trás da ProcessoIA",
    stats: [
      { label: "um vídeo produzido e publicado todos os dias no YouTube, Instagram e TikTok" },
      { label: "sistemas automatizados que trabalham para mim todas as semanas" },
      { label: "poupadas por semana, segundo as estimativas detalhadas mais abaixo" }
    ],
    items: [
      { title: "Testado em mim primeiro", desc: "Cada método que lhe proponho já funciona na minha vida, todos os dias." },
      { title: "Experiência no terreno", desc: "Seis anos na relação com clientes, para compreender perfeitamente a sua necessidade e encontrar a solução mais adequada." },
      { title: "Acesso direto", desc: "Fala com a pessoa que constrói a sua automação. Sem agência, sem intermediários, respostas rápidas." },
      { title: "Parceria de longo prazo", desc: "Se as suas necessidades mudarem, continuo disponível para ajustar e fazer evoluir o que construímos." }
    ]
  },
  offers: {
    kicker: "Ofertas", title: "Três automações para começar",
    lead: "Para PME, profissionais independentes, lojas e empresas de serviços. Cada oferta liga-se às ferramentas que já usa (Gmail, Outlook, Google Sheets, o seu CRM...).",
    book: "Marcar uma chamada",
    items: [
      { tag: "Vendas e visibilidade", title: "Follow-ups, prospeção e comunicação", desc: "As tarefas que trazem clientes e os fazem voltar funcionam sozinhas: follow-ups de orçamentos e faturas, acompanhamento de potenciais clientes, publicações e e-mails preparados pela IA.",
        points: ["Follow-ups de orçamentos, faturas e potenciais clientes, personalizados em seu nome", "Potenciais clientes qualificados e acompanhados automaticamente até responderem", "Publicações no LinkedIn, newsletters e e-mails preparados, só tem de aprovar"],
        delay: "Em funcionamento em 1 a 2 semanas", price: "Desde 150 €", priceMin: 150 },
      { tag: "Gestão", title: "CRM, stock, vendas e faturação", desc: "Um só sistema liga os seus clientes, o stock, as vendas e a tesouraria. As faturas saem sozinhas e o stock atualiza-se a cada venda.",
        points: ["Um CRM claro: cada cliente, cada processo, cada contacto", "Stock atualizado a cada venda, com alerta antes da rutura", "Faturas, lembretes de pagamento e quadro de tesouraria automáticos"],
        delay: "Em funcionamento em 2 a 4 semanas", price: "Desde 350 €", priceMin: 350 },
      { tag: "Apoio ao cliente", title: "Agente de IA conversacional", desc: "Um assistente que responde aos seus clientes por e-mail, no seu site ou por mensagem, ligado ao seu CRM e treinado nas suas regras: condições gerais de venda, preços, prazos.",
        points: ["Respostas 24 horas por dia, no tom da sua empresa", "Ligado ao CRM: conhece o cliente e o seu histórico", "Respeita as suas condições e regras, e passa-lhe a palavra quando é preciso"],
        delay: "Em funcionamento em 3 a 5 semanas", price: "Desde 700 €", priceMin: 700 }
    ],
    custom: { title: "Outra necessidade?", desc: "Relatórios, marcações, recursos humanos, tarefas administrativas: descreva-me a tarefa que lhe rouba tempo e, na chamada, digo-lhe se pode ser automatizada e quanto custaria.", cta: "Falar sobre isso gratuitamente" }
  },
  work: {
    kicker: "Projetos", title: "O que construí para clientes",
    lead: "Projetos reais, descritos tal como são.",
    needLabel: "A necessidade", builtLabel: "O que construí", zoom: "Ver em grande",
    cases: [
      { tag: "Joalharia · 2 lojas", client: "Frédéric Parisse, joalheiro", title: "Um CRM para gerir duas joalharias",
        need: "Acompanhar num só lugar todos os processos das duas lojas: reparações, criações, compra de ouro, encomendas a fornecedores, orçamentos e faturas.",
        built: "Um CRM visual em 3D que mostra as duas lojas vistas de cima e liga todas as áreas entre si. Qualquer processo com mais de 21 dias passa automaticamente a atrasado, e os balanços por loja e globais calculam-se sozinhos.",
        status: "Protótipo entregue, implementação em curso", gain: "≈ 6 horas poupadas por semana nas duas lojas",
        shots: [
          "Vista geral: as duas lojas vistas de cima, com os processos em atraso assinalados a vermelho",
          "Os processos em atraso das duas lojas, cada um com a próxima ação a tomar",
          "Oficina de reparações: processos por tratar, em curso e em atraso, por artesão",
          "Orçamentos e faturas das duas lojas, com o valor ainda por receber",
          "O stock em montra das duas lojas, por categoria, com a margem potencial",
          "O balanço do mês: volume de negócios, margem, resultado estimado e comparação das lojas"],
        note: "Capturas do protótipo, com dados fictícios de demonstração" },
      { tag: "Música para eventos", client: "Uma empresa de música para eventos", title: "Follow-ups a potenciais clientes que saem sozinhos",
        need: "Contactar de novo cada potencial cliente com uma mensagem personalizada, sem passar as noites nisso, e não deixar nenhuma resposta sem seguimento.",
        built: "Cada follow-up sai com um e-mail e uma apresentação Google Slides criada em nome do potencial cliente. As respostas são lidas pela IA (interesse, recusa, pergunta), registadas numa folha, transformadas em tarefas comerciais e assinaladas com um alerta. A IA aprende o estilo de escrita do responsável a partir das suas correções.",
        status: "Em funcionamento", gain: "≈ 15 minutos poupados por potencial cliente" }
    ],
    quote: { text: "", author: "Frédéric Parisse, joalheiro" }
  },
  lab: {
    kicker: "Testado em mim primeiro", title: "O que automatizo na minha própria vida",
    lead: "Antes de lhe propor um método, ponho-o a funcionar comigo. Eis o que funciona todos os dias, e o tempo que me poupa (estimativas).",
    beforeLabel: "À mão", afterLabel: "Hoje",
    items: [
      { title: "Os meus canais de vídeo", desc: "A criação e a gestão dos meus canais educativos no YouTube, Instagram e TikTok. Guião, voz, animação 3D e montagem são preparados por um conjunto de ferramentas de IA, e cada vídeo é publicado automaticamente nas três plataformas, com resposta aos comentários.", before: "≈ 4 h por vídeo", after: "≈ 30 min de revisão" },
      { title: "Light, o meu assistente pessoal", desc: "Um agente conversacional que é o meu assistente pessoal. Gere outros agentes especializados, como uma pequena empresa: todas as manhãs faz-me o ponto de situação dos projetos e das notícias. Falo com ele a partir do telemóvel, pelo Discord.", before: "≈ 45 min por dia", after: "≈ 10 min" },
      { title: "Uma loja Etsy gerida por agentes de IA", desc: "Os agentes identificam o que vende, criam os produtos digitais, escrevem os anúncios e controlam a qualidade. Eu revejo e publico.", before: "≈ 3 h por produto", after: "≈ 30 min" },
      { title: "A minha comunicação no LinkedIn", desc: "Um agente acompanha os temas de IA e automação, propõe ângulos e redige as publicações. Eu escolho, ajusto e publico.", before: "≈ 1 h 30 por publicação", after: "≈ 20 min" },
      { title: "Os meus serviços no Fiverr e no Malt", desc: "Para as minhas encomendas no Fiverr e no Malt (automações, conteúdos, elementos visuais e outros serviços), uma cadeia automatizada prepara o trabalho e verifico tudo antes de cada entrega.", before: "≈ 1 h 30 por encomenda", after: "≈ 20 min" }
    ],
    total: { label: "poupadas por semana, contando um vídeo por dia, o ponto da manhã, duas publicações no LinkedIn e um produto Etsy por semana.", cta: "E se fizéssemos o mesmo na sua empresa?" }
  },
  diagram: {
    kicker: "Como funciona", title: "Uma ideia, aplicada a tudo",
    sub: "Todas as automações seguem a mesma lógica simples.",
    steps: [
      { label: "Gatilho", desc: "Algo acontece: um formulário é preenchido, chega um e-mail, um prazo termina." },
      { label: "Processo", desc: "O sistema verifica, organiza, enriquece ou decide o que fazer." },
      { label: "Resultado", desc: "A ação certa acontece automaticamente, sem que ninguém tenha de se lembrar." }
    ],
    example: "Um orçamento está sem resposta há 7 dias → a IA redige um follow-up personalizado → é enviado, e a resposta chega organizada ao seu CRM."
  },
  ai: {
    kicker: "Porque é que a IA muda tudo", title: "De regras rígidas a um verdadeiro discernimento",
    sub: "Uma automação clássica segue passos fixos. A IA acrescenta a compreensão da linguagem e do contexto: lê um e-mail, percebe um pedido e escolhe a ação certa. Um agente de IA vai mais longe e conduz uma tarefa do início ao fim, em várias etapas.",
    before: { label: "Antes", items: ["Horas de trabalho manual e repetitivo", "Regras rígidas que falham nos casos fora do padrão", "Disponível só no horário de trabalho", "Respostas lentas a clientes e leads"] },
    after: { label: "Com IA", items: ["Minutos em vez de horas", "Um discernimento que se adapta às nuances", "Disponível 24 horas por dia, mesmo enquanto dorme", "Respostas imediatas e consistentes"] }
  },
  pricing: {
    kicker: "Preços", title: "Um preço base, depois conforme a complexidade",
    lead: "O preço depende do número de aplicações a ligar entre si e da complexidade (IA, condições, volume). Recebe um orçamento fixo depois da chamada, antes de pagar o que quer que seja.",
    tiers: [
      { name: "Simples", price: "Desde 150 €", priceMin: 150, desc: "Uma automação que liga duas aplicações, sem IA.", points: ["2 aplicações ligadas", "Regras claras, sem IA", "Ex.: follow-ups de orçamentos, Gmail + Google Sheets"] },
      { name: "Ligado", price: "Desde 350 €", priceMin: 350, desc: "Várias ferramentas ligadas, com uma etapa de IA que lê, organiza ou redige.", points: ["3 a 4 aplicações ligadas", "Uma etapa de IA (triagem, redação, análise)", "Ex.: CRM, stock e faturação ligados"] },
      { name: "Agente de IA", price: "Desde 700 €", priceMin: 700, desc: "Um agente que conduz uma tarefa do início ao fim e toma decisões.", points: ["5 aplicações ou mais", "Decisões autónomas, casos especiais tratados", "Ex.: agente conversacional ligado ao CRM e às suas condições"] }
    ],
    terms: ["Orçamento fixo antes de qualquer pagamento", "50% no arranque, 50% na entrada em funcionamento", "Alojamento e custo das ferramentas (IA, aplicações) indicados no orçamento"],
    cta: "Pedir o meu orçamento gratuito"
  },
  data: {
    kicker: "Os seus dados", title: "As suas ferramentas, os seus dados, a sua automação",
    lead: "Confiar os seus e-mails ou os seus clientes a uma automação exige confiança. Estas são as minhas regras, em conformidade com o RGPD.",
    items: [
      { title: "Alojado na Europa", desc: "Os seus dados ficam nas suas ferramentas (Google, Microsoft…). As suas automações funcionam numa instância n8n dedicada, separada das de outros clientes, no meu servidor na Europa. Um contrato de subcontratação RGPD enquadra tudo." },
      { title: "Acesso limitado", desc: "Só acedo ao que o projeto exige, e pode retirar-me o acesso a qualquer momento." },
      { title: "IA profissional", desc: "Uso os modelos de IA através das ofertas profissionais (API), cujos dados não servem para treinar os modelos por predefinição." },
      { title: "A automação é sua", desc: "Tudo o que é construído é seu: as automações, a documentação e os acessos. É propriedade sua: pode consultá-las, pedir alterações ou a sua eliminação quando quiser, e levá-las para funcionarem noutro lado." }
    ]
  },
  process: {
    kicker: "Como vamos trabalhar juntos", title: "O seu projeto de automação em três passos simples",
    steps: [
      { title: "Chamada de descoberta gratuita", desc: "30 minutos para rever as suas tarefas e identificar o que pode ser automatizado. Sem custos, sem compromisso." },
      { title: "Orçamento fixo e construção", desc: "Uma proposta com preço, depois a construção. Esta é a fase paga: 50% no arranque, 50% na entrada em funcionamento." },
      { title: "Acompanhamento e evolução", desc: "Continuo disponível para afinar, alargar e adaptar o sistema à medida que as suas necessidades mudam." }
    ]
  },
  faq: {
    kicker: "Perguntas frequentes", title: "Perguntas sobre automação com IA",
    items: [
      { q: "A chamada é mesmo gratuita?", a: "Sim, totalmente gratuita e sem compromisso. Só paga se decidirmos construir algo juntos, depois de um orçamento fixo." },
      { q: "Quanto custa uma automação?", a: "Um preço base desde 150 € para uma automação simples que liga duas aplicações. O preço sobe com o número de aplicações ligadas e a complexidade: desde 350 € com uma etapa de IA, desde 700 € para um agente de IA. O orçamento é fixo e dado antes de qualquer pagamento." },
      { q: "E se a automação não fizer sentido para a minha empresa?", a: "Também é uma boa conclusão para a chamada. Digo-lhe com franqueza, sem pressão comercial." },
      { q: "Preciso de conhecimentos técnicos?", a: "Nenhuns. Eu trato da parte técnica; só precisa de descrever como trabalha hoje." },
      { q: "Quanto tempo demora um projeto?", a: "Depende do âmbito, mas a maioria das automações passa do orçamento aprovado ao sistema em funcionamento em poucos dias ou semanas." },
      { q: "E se deixar de funcionar?", a: "Avisa-me e eu corrijo. Os erros que vêm da minha construção são corrigidos sem custos. Cada automação também o pode alertar sozinha se uma etapa falhar." },
      { q: "A quem pertence a automação?", a: "A si. Funciona numa instância n8n dedicada a si e recebe a respetiva documentação. Se deixarmos de trabalhar juntos, entrego-lhe a automação completa para funcionar do seu lado ou noutro sítio, e apago os seus dados do meu servidor." },
      { q: "Os meus dados estão seguros?", a: "Só acedo ao que é necessário. As suas automações funcionam numa instância separada, num servidor na Europa, em conformidade com o RGPD. Os modelos de IA são usados através das ofertas profissionais, cujos dados não servem para treino por predefinição." },
      { q: "E se as minhas necessidades mudarem mais tarde?", a: "É normal. Continuo como parceiro de longo prazo para ajustar e alargar a sua automação ao longo do tempo." },
      { q: "Que ferramentas utiliza?", a: "As que melhor se adaptam às suas necessidades: plataformas no-code como n8n, Make ou Zapier, os principais modelos de IA (OpenAI, Claude, Mistral...) e as ferramentas que já usa, como Gmail, Outlook, Google Sheets, Notion ou o seu CRM." },
      { q: "Trabalha apenas em Lisboa?", a: "Estou sediado em Lisboa e trabalho à distância com empresas em todo o Portugal, em França e no resto da Europa, em português, francês ou inglês." }
    ],
    note: "Ainda tem uma pergunta? Traga-a para a chamada, é gratuita."
  },
  finalCta: {
    title: "Pronto para recuperar o seu tempo?",
    sub: "Escolha um horário de 30 minutos. Vemos juntos o que pode ser automatizado na sua empresa, e sai com uma ideia clara do preço.",
    button: "Marcar uma chamada gratuita",
    note: "Gratuito, sem compromisso. Orçamento fixo antes de qualquer pagamento.",
    embedLoading: "A carregar os horários…",
    embedFallback: "Os horários não aparecem? Abrir a página de marcação"
  },
  footer: {
    tagline: "Automação com IA para PME e profissionais independentes que preferem investir o seu tempo noutra coisa.",
    legal: "Aviso legal", privacy: "Privacidade", linkedin: "LinkedIn",
    rights: "© 2026 ProcessoIA. Todos os direitos reservados."
  },
  legal: {
    back: "Voltar ao site",
    updated: "Atualizado a 13 de novembro de 2026",
    notice: {
      path: "/pt/aviso-legal/", title: "Aviso legal",
      description: "Aviso legal de processoia.com: editor, alojamento e propriedade intelectual.",
      sections: [
        { h: "Editor do site", p: ["Este site é editado por Louison, consultor independente de automação com IA, com o nome comercial ProcessoIA, sediado em Lisboa, Portugal.", "Contacto: contact@processoia.com", "Diretor da publicação: Louison."] },
        { h: "Alojamento", p: ["Netlify, Inc., 101 2nd Street, Suite 575, San Francisco, CA 94105, Estados Unidos. https://www.netlify.com"] },
        { h: "Propriedade intelectual", p: ["Os textos, o logótipo ProcessoIA, os elementos visuais e o código deste site pertencem ao seu autor, salvo indicação em contrário. É proibida qualquer reprodução sem autorização escrita."] },
        { h: "Ligações externas", p: ["O site contém ligações para serviços de terceiros (Cal.com para marcações, LinkedIn). O seu conteúdo e condições são da responsabilidade dos respetivos editores."] },
        { h: "Créditos", p: ["Tipos de letra: Sora, Inter e JetBrains Mono (Google Fonts). Ícones: Lucide. Animações: GSAP e Three.js."] }
      ]
    },
    privacy: {
      path: "/pt/privacidade/", title: "Política de privacidade",
      description: "Como processoia.com trata os seus dados pessoais: medição de audiência sem cookies, marcações, e-mails e os seus direitos.",
      sections: [
        { h: "Quem é o responsável?", p: ["Louison (ProcessoIA), Lisboa, Portugal. Para qualquer questão: contact@processoia.com"] },
        { h: "Medição de audiência", p: ["Este site usa o Cloudflare Web Analytics para contar as visitas. Esta ferramenta não instala cookies nem cria identificadores pessoais: fornece estatísticas globais (páginas vistas, país, tipo de dispositivo, site de origem)."] },
        { h: "Marcações", p: ["As chamadas são marcadas através do Cal.com (Cal.com, Inc.). As informações que lá introduz (nome, e-mail, respostas) servem apenas para preparar e realizar a chamada. O módulo Cal.com apresentado no site pode instalar os seus próprios cookies técnicos; aplica-se a respetiva política de privacidade."] },
        { h: "E-mails", p: ["As mensagens enviadas para contact@processoia.com servem apenas para lhe responder e dar seguimento à nossa conversa."] },
        { h: "Cookies", p: ["A ProcessoIA não instala cookies de publicidade nem de rastreamento. O site apenas guarda, no seu navegador, o idioma que escolheu."] },
        { h: "Serviços técnicos", p: ["O site está alojado na Netlify, que guarda registos técnicos (endereço IP, data, página pedida) por razões de segurança e bom funcionamento. Os tipos de letra são carregados a partir do Google Fonts e algumas bibliotecas a partir do jsDelivr e do unpkg: estes serviços recebem o seu endereço IP no momento do carregamento."] },
        { h: "Prazo de conservação", p: ["As trocas com potenciais clientes são conservadas no máximo 3 anos após o último contacto; as trocas com clientes, durante a relação e os prazos legais de conservação dos documentos contabilísticos."] },
        { h: "Os seus direitos", p: ["Pode pedir o acesso, a retificação, o apagamento ou a portabilidade dos seus dados, e opor-se ao seu tratamento, escrevendo para contact@processoia.com. Pode também apresentar reclamação à autoridade de proteção de dados: a CNPD em Portugal ou a CNIL em França."] }
      ]
    }
  }
}
};
