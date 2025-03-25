
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';

const Pricing = () => {
  const { t, language } = useLanguage();

  // Définition des forfaits
  const pricingPlans = [
    {
      name: t('pricing.basic.title'),
      price: "100€",
      description: language === 'en' 
        ? "For small projects and simple needs" 
        : "Pour les petits projets et les besoins simples",
      features: [
        language === 'en' ? "One-page website" : "Site web one-page",
        language === 'en' ? "Basic Discord bot" : "Bot Discord basique",
        language === 'en' ? "Email support" : "Support par email",
        language === 'en' ? "1 revision" : "1 révision"
      ],
      recommended: false
    },
    {
      name: t('pricing.standard.title'),
      price: "250€",
      description: language === 'en' 
        ? "For medium projects with more features" 
        : "Pour les projets moyens avec plus de fonctionnalités",
      features: [
        language === 'en' ? "Website up to 5 pages" : "Site web jusqu'à 5 pages",
        language === 'en' ? "Discord bot with custom commands" : "Bot Discord avec commandes personnalisées",
        language === 'en' ? "Email and Discord support" : "Support par email et Discord",
        language === 'en' ? "2 revisions" : "2 révisions"
      ],
      recommended: true
    },
    {
      name: t('pricing.premium.title'),
      price: "500€",
      description: language === 'en' 
        ? "For complex projects requiring more attention" 
        : "Pour les projets complexes nécessitant plus d'attention",
      features: [
        language === 'en' ? "Multi-page website with authentication system" : "Site web multi-pages avec système d'authentification",
        language === 'en' ? "Advanced Discord bot with database" : "Bot Discord avancé avec base de données",
        language === 'en' ? "Priority support" : "Support prioritaire",
        language === 'en' ? "Unlimited revisions" : "Révisions illimitées"
      ],
      recommended: false
    },
    {
      name: t('pricing.enterprise.title'),
      price: "1000€",
      description: language === 'en' 
        ? "Complete solutions for businesses" 
        : "Solutions complètes pour les entreprises",
      features: [
        language === 'en' ? "Complete e-commerce website" : "Site web e-commerce complet",
        language === 'en' ? "Premium Discord bot with web dashboard" : "Bot Discord premium avec tableau de bord web",
        language === 'en' ? "24/7 dedicated support" : "Support dédié 24/7",
        language === 'en' ? "3 months maintenance included" : "Maintenance incluse pendant 3 mois"
      ],
      recommended: false
    },
    {
      name: language === 'en' ? "Custom" : "Sur Mesure",
      price: language === 'en' ? "Custom quote" : "Sur devis",
      description: language === 'en' 
        ? "For projects with very specific needs" 
        : "Pour les projets avec des besoins très spécifiques",
      features: [
        language === 'en' ? "Custom features" : "Fonctionnalités personnalisées",
        language === 'en' ? "Custom integrations" : "Intégrations sur mesure",
        language === 'en' ? "Detailed needs analysis" : "Analyse des besoins détaillée",
        language === 'en' ? "Maintenance service available" : "Service de maintenance disponible"
      ],
      recommended: false
    },
    {
      name: language === 'en' ? "Subscription" : "Abonnement",
      price: language === 'en' ? "Starting at €50/month" : "À partir de 50€/mois",
      description: language === 'en' 
        ? "Continuous service for your evolving projects" 
        : "Service continu pour vos projets évolutifs",
      features: [
        language === 'en' ? "Regular updates" : "Mises à jour régulières",
        language === 'en' ? "Continuous maintenance" : "Maintenance continue",
        language === 'en' ? "Progressive feature addition" : "Ajout de fonctionnalités progressif",
        language === 'en' ? "Responsive and personalized support" : "Support réactif et personnalisé"
      ],
      recommended: false
    }
  ];

  const PricingCard = ({ plan, index }: { plan: typeof pricingPlans[0], index: number }) => {
    const isRecommended = plan.recommended;
    
    return (
      <div 
        className={`
          relative rounded-xl p-6 
          ${isRecommended 
            ? 'border-2 border-primary shadow-glow' 
            : 'border border-border bg-white dark:bg-card shadow-soft'} 
          flex flex-col h-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md
        `}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {isRecommended && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-medium">
            {language === 'en' ? 'Recommended' : 'Recommandé'}
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="text-xl font-sora font-semibold mb-2">{plan.name}</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{plan.price}</span>
            {plan.price !== (language === 'en' ? "Custom quote" : "Sur devis") && 
             plan.name !== (language === 'en' ? "Subscription" : "Abonnement") && (
              <span className="text-muted-foreground ml-1">
                {language === 'en' ? '/ project' : '/ projet'}
              </span>
            )}
          </div>
          <p className="text-muted-foreground mt-2">{plan.description}</p>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <a
            href="#contact"
            className={`block w-full py-2.5 px-4 rounded-lg text-center font-medium transition-colors ${
              isRecommended
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {language === 'en' ? 'Choose this plan' : 'Choisir ce forfait'}
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="forfaits" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-5 text-muted-foreground">
            {language === 'en' 
              ? "Need a solution that's not listed here?" 
              : "Besoin d'une solution qui n'est pas listée ici ?"}
          </p>
          <a href="#contact" className="btn-primary">
            {language === 'en' 
              ? "Contact us for a custom quote" 
              : "Contactez-nous pour un devis personnalisé"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
