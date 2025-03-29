
const getDiscordBotPlans = (language: string) => [
  {
    name: language === 'en' ? "Basic Bot" : "Bot Discord Basic",
    price: "35€",
    description: language === 'en' 
      ? "Simple Discord bots with basic functionality" 
      : "Bots Discord simples avec des fonctionnalités basiques",
    features: [
      language === 'en' ? "Basic Commands (Ping, info, help)" : "Commandes basiques (Ping, info, help)",
      language === 'en' ? "Auto-moderation (kick, ban, warn)" : "Auto-modération (kick, ban, warn)",
      language === 'en' ? "Basic embeds" : "Embeds basiques",
      language === 'en' ? "Logging" : "Journalisation",
      language === 'en' ? "1 code revision" : "1 révision de code"
    ],
    recommended: false
  },
  {
    name: language === 'en' ? "Standard Bot" : "Bot Discord Standard",
    price: "120€",
    description: language === 'en' 
      ? "Advanced Discord bots with more features" 
      : "Bots Discord avancés avec plus de fonctionnalités",
    features: [
      language === 'en' ? "10+ Commands" : "10+ Commandes",
      language === 'en' ? "API Integration" : "Intégration API",
      language === 'en' ? "Basic Database" : "Base de données basique",
      language === 'en' ? "Custom prefixes" : "Préfixes personnalisés",
      language === 'en' ? "Settings" : "Paramètres",
      language === 'en' ? "3 code revisions" : "3 révisions de code"
    ],
    recommended: true
  },
  {
    name: language === 'en' ? "Advanced Bot" : "Bot Discord Avancé",
    price: "310€",
    description: language === 'en' 
      ? "Feature-rich Discord bots with advanced functionality" 
      : "Bots Discord riches en fonctionnalités avec des fonctionnalités avancées",
    features: [
      language === 'en' ? "Economy System" : "Système d'économie",
      language === 'en' ? "Advanced moderation (Anti-spam, AI moderation...)" : "Modération avancée (Anti-spam, modération IA...)",
      language === 'en' ? "Web Dashboard" : "Tableau de bord Web",
      language === 'en' ? "Multi-server support" : "Support multi-serveurs",
      language === 'en' ? "10 code revisions" : "10 révisions de code",
      language === 'en' ? "Hosting (1 year)" : "Hébergement (1 an)"
    ],
    recommended: false
  },
  {
    name: language === 'en' ? "Enterprise Bot" : "Bot Discord Entreprise",
    price: "850€",
    description: language === 'en' 
      ? "Tailor-made Discord bots for complex server needs" 
      : "Bots Discord sur mesure pour des besoins serveurs complexes",
    features: [
      language === 'en' ? "AI-Powered Chats" : "Chats alimentés par l'IA",
      language === 'en' ? "Full Web Dashboard with Analytics" : "Tableau de bord Web complet avec analytiques",
      language === 'en' ? "Advanced API integration" : "Intégration API avancée",
      language === 'en' ? "Unlimited Commands" : "Commandes illimitées",
      language === 'en' ? "50 code revisions" : "50 révisions de code",
      language === 'en' ? "Hosting (2 years)" : "Hébergement (2 ans)"
    ],
    recommended: false
  }
];

const getDiscordBotExtras = (language: string) => [
  language === 'en' ? "Custom Voice Commands: +50€" : "Commandes vocales personnalisées: +50€",
  language === 'en' ? "Database Integration: +70€" : "Intégration base de données: +70€",
  language === 'en' ? "Advanced Analytics: +120€" : "Analytiques avancées: +120€",
  language === 'en' ? "Ongoing Maintenance: +30€/month" : "Maintenance continue: +30€/mois"
];

export { getDiscordBotPlans, getDiscordBotExtras };
