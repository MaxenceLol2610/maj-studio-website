
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.contact-us': 'Contact Us',
    
    // Hero
    'hero.title': 'Transforming Ideas into Digital Reality',
    'hero.subtitle': 'We create custom web applications, software, Discord bots, and Minecraft plugins that bring your vision to life.',
    'hero.cta': 'Our Services',
    'hero.secondary-cta': 'Contact Us',
    'hero.studio': 'Development Studio',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Discover the range of solutions we offer to meet your digital needs.',
    'services.web.title': 'Web Development',
    'services.web.description': 'Custom websites and web applications designed for performance and user experience.',
    'services.software.title': 'Software',
    'services.software.description': 'Tailored software solutions to streamline your business processes.',
    'services.discord.title': 'Discord Bots',
    'services.discord.description': 'Custom bots to enhance your Discord server and engage your community.',
    'services.minecraft.title': 'Minecraft Plugins',
    'services.minecraft.description': 'Custom plugins to enhance your Minecraft server and provide unique features.',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.description': 'Native and hybrid applications for iOS and Android, with an optimal user experience.',
    'services.learn_more': 'Learn more',
    
    // Pricing
    'pricing.title': 'Our Pricing',
    'pricing.subtitle': 'Transparent pricing options to meet your budget and needs.',
    'pricing.basic.title': 'Basic',
    'pricing.standard.title': 'Standard',
    'pricing.premium.title': 'Premium',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.from': 'From',
    'pricing.contact': 'Contact Us',
    'pricing.select': 'Select Plan',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Learn more about our team and our approach to digital development.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have a project in mind? Get in touch with us today.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.description': 'Accessible and modern development solutions for all your projects.',
    
    // Preloader
    'preloader.loading': 'Loading...',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.pricing': 'Forfaits',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.contact-us': 'Nous Contacter',
    
    // Hero
    'hero.title': 'Transformez vos idées en réalité numérique',
    'hero.subtitle': 'Nous créons des applications web, des logiciels, des bots Discord et des plugins Minecraft sur mesure qui donnent vie à votre vision.',
    'hero.cta': 'Nos Services',
    'hero.secondary-cta': 'Nous Contacter',
    'hero.studio': 'Studio de Développement',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Découvrez la gamme de solutions que nous proposons pour répondre à vos besoins numériques.',
    'services.web.title': 'Développement Web',
    'services.web.description': 'Sites web et applications web sur mesure conçus pour la performance et l\'expérience utilisateur.',
    'services.software.title': 'Logiciels',
    'services.software.description': 'Solutions logicielles sur mesure pour simplifier vos processus d\'entreprise.',
    'services.discord.title': 'Bots Discord',
    'services.discord.description': 'Bots personnalisés pour améliorer votre serveur Discord et engager votre communauté.',
    'services.minecraft.title': 'Plugins Minecraft',
    'services.minecraft.description': 'Plugins personnalisés pour améliorer votre serveur Minecraft et offrir des fonctionnalités uniques.',
    'services.mobile.title': 'Applications Mobiles',
    'services.mobile.description': 'Applications natives et hybrides pour iOS et Android, avec une expérience utilisateur optimale.',
    'services.learn_more': 'En savoir plus',
    
    // Pricing
    'pricing.title': 'Nos Forfaits',
    'pricing.subtitle': 'Options de tarification transparentes pour répondre à votre budget et à vos besoins.',
    'pricing.basic.title': 'Basic',
    'pricing.standard.title': 'Standard',
    'pricing.premium.title': 'Premium',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.from': 'À partir de',
    'pricing.contact': 'Nous Contacter',
    'pricing.select': 'Sélectionner',
    
    // About
    'about.title': 'À Propos',
    'about.subtitle': 'En savoir plus sur notre équipe et notre approche du développement numérique.',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Vous avez un projet en tête ? Contactez-nous dès aujourd\'hui.',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.message': 'Votre Message',
    'contact.submit': 'Envoyer le Message',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.description': 'Solutions de développement accessibles et modernes pour tous vos projets.',
    
    // Preloader
    'preloader.loading': 'Chargement en cours...',
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  // Use localStorage to persist the language preference
  useEffect(() => {
    // Get saved language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
