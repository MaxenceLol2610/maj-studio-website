
const getWebsitePlans = (language: string) => [
  {
    name: language === 'en' ? "Basic Website" : "Site Web Basic",
    price: "60€",
    description: language === 'en' 
      ? "Simple websites for personal or small business use" 
      : "Sites web simples pour usage personnel ou petites entreprises",
    features: [
      language === 'en' ? "1-3 Pages" : "1-3 Pages",
      language === 'en' ? "Simple Design" : "Design Simple",
      language === 'en' ? "No Backend" : "Sans Backend",
      language === 'en' ? "Mobile Friendly" : "Compatible Mobile",
      language === 'en' ? "1 code revision" : "1 révision de code"
    ],
    recommended: false
  },
  {
    name: language === 'en' ? "Standard Website" : "Site Web Standard",
    price: "230€",
    description: language === 'en' 
      ? "Professional websites with more features and pages" 
      : "Sites web professionnels avec plus de fonctionnalités et de pages",
    features: [
      language === 'en' ? "4-8 Pages" : "4-8 Pages",
      language === 'en' ? "Basic CMS (Wordpress, Webflow)" : "CMS Basic (Wordpress, Webflow)",
      language === 'en' ? "Contact Form" : "Formulaire de Contact",
      language === 'en' ? "SEO Optimization" : "Optimisation SEO",
      language === 'en' ? "3 code revisions" : "3 révisions de code"
    ],
    recommended: true
  },
  {
    name: language === 'en' ? "Advanced Website" : "Site Web Avancé",
    price: "900€",
    description: language === 'en' 
      ? "Feature-rich websites with custom backend functionality" 
      : "Sites web riches en fonctionnalités avec backend personnalisé",
    features: [
      language === 'en' ? "8+ Pages" : "8+ Pages",
      language === 'en' ? "Custom Backend" : "Backend Personnalisé",
      language === 'en' ? "User Accounts" : "Comptes Utilisateurs",
      language === 'en' ? "Interactive Features" : "Fonctionnalités Interactives",
      language === 'en' ? "E-Commerce" : "E-Commerce",
      language === 'en' ? "API Integrations" : "Intégrations API",
      language === 'en' ? "10 code revisions" : "10 révisions de code",
      language === 'en' ? "Hosting (1 year)" : "Hébergement (1 an)"
    ],
    recommended: false
  },
  {
    name: language === 'en' ? "Fully Custom WebApp" : "Application Web Personnalisée",
    price: "1600€",
    description: language === 'en' 
      ? "Tailor-made web applications for complex business needs" 
      : "Applications web sur mesure pour des besoins métiers complexes",
    features: [
      language === 'en' ? "Tailor-made solution" : "Solution sur mesure",
      language === 'en' ? "Complex backend" : "Backend complexe",
      language === 'en' ? "Dashboards" : "Tableaux de bord",
      language === 'en' ? "Real-time updates" : "Mises à jour en temps réel",
      language === 'en' ? "Automation" : "Automatisation",
      language === 'en' ? "50 code revisions" : "50 révisions de code",
      language === 'en' ? "Hosting (2 years) + Domain" : "Hébergement (2 ans) + Domaine"
    ],
    recommended: false
  }
];

const getWebsiteExtras = (language: string) => [
  language === 'en' ? "Custom Design: +75€" : "Design personnalisé: +75€",
  language === 'en' ? "SEO & Performance Optimization: +80€" : "Optimisation SEO & Performance: +80€",
  language === 'en' ? "E-Commerce: +250€" : "E-Commerce: +250€",
  language === 'en' ? "Extra Hosting & Maintenance: +20€/month" : "Hébergement & Maintenance supplémentaire: +20€/mois"
];

export { getWebsitePlans, getWebsiteExtras };
