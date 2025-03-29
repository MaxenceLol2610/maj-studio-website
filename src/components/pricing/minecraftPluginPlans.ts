
const getMinecraftPluginPlans = (language: string) => [
  {
    name: language === 'en' ? "Basic Plugin" : "Plugin Minecraft Basic",
    price: "40€",
    description: language === 'en' 
      ? "Simple Minecraft plugins with basic functionality" 
      : "Plugins Minecraft simples avec des fonctionnalités basiques",
    features: [
      language === 'en' ? "1-5 Commands" : "1-5 Commandes",
      language === 'en' ? "Basic Mechanics (teleports, messages, item effects)" : "Mécaniques basiques (téléportations, messages, effets d'objets)",
      language === 'en' ? "Lightweight & Optimized" : "Léger et optimisé",
      language === 'en' ? "1 code revision" : "1 révision de code"
    ],
    recommended: false
  },
  {
    name: language === 'en' ? "Standard Plugin" : "Plugin Minecraft Standard",
    price: "150€",
    description: language === 'en' 
      ? "Advanced Minecraft plugins with more features" 
      : "Plugins Minecraft avancés avec plus de fonctionnalités",
    features: [
      language === 'en' ? "5-15 Commands" : "5-15 Commandes",
      language === 'en' ? "Configurable (YAML/JSON support)" : "Configurable (support YAML/JSON)",
      language === 'en' ? "Economy or Scoreboard Integration" : "Intégration économie ou tableau de score",
      language === 'en' ? "Multi-World Support" : "Support multi-mondes",
      language === 'en' ? "3 code revisions" : "3 révisions de code"
    ],
    recommended: true
  },
  {
    name: language === 'en' ? "Advanced Plugin" : "Plugin Minecraft Avancé",
    price: "350€",
    description: language === 'en' 
      ? "Feature-rich Minecraft plugins with advanced functionality" 
      : "Plugins Minecraft riches en fonctionnalités avec des fonctionnalités avancées",
    features: [
      language === 'en' ? "Minigames or Custom Gameplay Mechanics" : "Mini-jeux ou mécaniques de jeu personnalisées",
      language === 'en' ? "Custom GUI Menus & Interactions" : "Menus GUI personnalisés et interactions",
      language === 'en' ? "MySQL / Database Support for Player Stats" : "Support MySQL / Base de données pour les statistiques des joueurs",
      language === 'en' ? "PlaceholderAPI & Plugin Compatibility" : "Compatibilité PlaceholderAPI et autres plugins",
      language === 'en' ? "10 code revisions" : "10 révisions de code",
      language === 'en' ? "Hosting (1 year)" : "Hébergement (1 an)"
    ],
    recommended: false
  },
  {
    name: language === 'en' ? "Enterprise Plugin" : "Plugin Minecraft Entreprise",
    price: "900€",
    description: language === 'en' 
      ? "Tailor-made Minecraft plugins for complex server needs" 
      : "Plugins Minecraft sur mesure pour des besoins serveurs complexes",
    features: [
      language === 'en' ? "Complex Game Modes (UHC, MMORPG, Skyblock, etc.)" : "Modes de jeu complexes (UHC, MMORPG, Skyblock, etc.)",
      language === 'en' ? "Multi-Server Support (BungeeCord/Velocity)" : "Support multi-serveurs (BungeeCord/Velocity)",
      language === 'en' ? "AI-Driven Features (NPCs, AI Bots)" : "Fonctionnalités basées sur l'IA (PNJ, Bots IA)",
      language === 'en' ? "Web Dashboard for Managing Plugin Settings" : "Tableau de bord Web pour gérer les paramètres du plugin",
      language === 'en' ? "50 code revisions" : "50 révisions de code",
      language === 'en' ? "Hosting (2 years)" : "Hébergement (2 ans)"
    ],
    recommended: false
  }
];

const getMinecraftPluginExtras = (language: string) => [
  language === 'en' ? "Custom Models & Textures: +80€" : "Modèles et textures personnalisés: +80€",
  language === 'en' ? "Performance Optimization: +60€" : "Optimisation des performances: +60€",
  language === 'en' ? "Server Integration Setup: +90€" : "Configuration de l'intégration serveur: +90€",
  language === 'en' ? "Ongoing Maintenance: +40€/month" : "Maintenance continue: +40€/mois"
];

export { getMinecraftPluginPlans, getMinecraftPluginExtras };
