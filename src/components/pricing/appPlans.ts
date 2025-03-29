
const getAppPlans = (language: string) => [
  {
    name: language === 'en' ? "Basic App" : "Application Mobile Basic",
    price: "300€",
    description: language === 'en' 
      ? "Simple mobile apps with basic functionality" 
      : "Applications mobiles simples avec des fonctionnalités basiques",
    features: [
      language === 'en' ? "Simple UI with a few screens" : "Interface simple avec peu d'écrans",
      language === 'en' ? "No Backend" : "Sans Backend",
      language === 'en' ? "Static Content" : "Contenu Statique",
      language === 'en' ? "1 code revision" : "1 révision de code"
    ],
    recommended: false
  },
  {
    name: language === 'en' ? "Standard App" : "Application Mobile Standard",
    price: "1000€",
    description: language === 'en' 
      ? "Professional apps with more features and backend integration" 
      : "Applications professionnelles avec plus de fonctionnalités et intégration backend",
    features: [
      language === 'en' ? "5-10 screens" : "5-10 écrans",
      language === 'en' ? "API Integration" : "Intégration API",
      language === 'en' ? "Authentication" : "Authentification",
      language === 'en' ? "Database and basic backend features" : "Base de données et fonctionnalités backend basiques",
      language === 'en' ? "3 code revisions" : "3 révisions de code"
    ],
    recommended: true
  },
  {
    name: language === 'en' ? "Advanced App" : "Application Mobile Avancée",
    price: "2900€",
    description: language === 'en' 
      ? "Feature-rich mobile applications with advanced functionality" 
      : "Applications mobiles riches en fonctionnalités avec des fonctionnalités avancées",
    features: [
      language === 'en' ? "10+ Screens" : "10+ Écrans",
      language === 'en' ? "Polished UI" : "Interface soignée",
      language === 'en' ? "User Accounts & Profiles" : "Comptes & Profils Utilisateurs",
      language === 'en' ? "Payment Integration (Stripe, Paypal)" : "Intégration de paiement (Stripe, Paypal)",
      language === 'en' ? "Real-time Database" : "Base de données en temps réel",
      language === 'en' ? "Push notifications" : "Notifications push",
      language === 'en' ? "10 code revisions" : "10 révisions de code"
    ],
    recommended: false
  },
  {
    name: language === 'en' ? "Fully Custom App" : "Application Mobile Sur Mesure",
    price: "8000€",
    description: language === 'en' 
      ? "Tailor-made mobile applications for complex business needs" 
      : "Applications mobiles sur mesure pour des besoins métiers complexes",
    features: [
      language === 'en' ? "Complex backend" : "Backend complexe",
      language === 'en' ? "AI-Powered features" : "Fonctionnalités alimentées par l'IA",
      language === 'en' ? "Real-time updates" : "Mises à jour en temps réel",
      language === 'en' ? "Automation" : "Automatisation",
      language === 'en' ? "Admin Panel" : "Panneau d'administration",
      language === 'en' ? "High Scalability" : "Haute Scalabilité",
      language === 'en' ? "50 code revisions" : "50 révisions de code"
    ],
    recommended: false
  }
];

const getAppExtras = (language: string) => [
  language === 'en' ? "UI/UX Design: +300€" : "Design UI/UX: +300€",
  language === 'en' ? "Messaging: +200€" : "Messagerie: +200€",
  language === 'en' ? "App Store/Playstore Publishing: +100€" : "Publication App Store/Playstore: +100€",
  language === 'en' ? "Ongoing Maintenance: +75€/month" : "Maintenance continue: +75€/mois"
];

export { getAppPlans, getAppExtras };
