
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

// Définition des forfaits
const pricingPlans = [
  {
    name: "Basic",
    price: "100€",
    description: "Pour les petits projets et les besoins simples",
    features: [
      "Site web one-page",
      "Bot Discord basique",
      "Support par email",
      "1 révision"
    ],
    recommended: false
  },
  {
    name: "Standard",
    price: "250€",
    description: "Pour les projets moyens avec plus de fonctionnalités",
    features: [
      "Site web jusqu'à 5 pages",
      "Bot Discord avec commandes personnalisées",
      "Support par email et Discord",
      "2 révisions"
    ],
    recommended: true
  },
  {
    name: "Premium",
    price: "500€",
    description: "Pour les projets complexes nécessitant plus d'attention",
    features: [
      "Site web multi-pages avec système d'authentification",
      "Bot Discord avancé avec base de données",
      "Support prioritaire",
      "Révisions illimitées"
    ],
    recommended: false
  },
  {
    name: "Entreprise",
    price: "1000€",
    description: "Solutions complètes pour les entreprises",
    features: [
      "Site web e-commerce complet",
      "Bot Discord premium avec tableau de bord web",
      "Support dédié 24/7",
      "Maintenance incluse pendant 3 mois"
    ],
    recommended: false
  },
  {
    name: "Sur Mesure",
    price: "Sur devis",
    description: "Pour les projets avec des besoins très spécifiques",
    features: [
      "Fonctionnalités personnalisées",
      "Intégrations sur mesure",
      "Analyse des besoins détaillée",
      "Service de maintenance disponible"
    ],
    recommended: false
  },
  {
    name: "Abonnement",
    price: "À partir de 50€/mois",
    description: "Service continu pour vos projets évolutifs",
    features: [
      "Mises à jour régulières",
      "Maintenance continue",
      "Ajout de fonctionnalités progressif",
      "Support réactif et personnalisé"
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
        ${isRecommended ? 'border-2 border-primary shadow-glow' : 'border border-border bg-white shadow-soft'} 
        flex flex-col h-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-4 py-1 rounded-full font-medium">
          Recommandé
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-sora font-semibold mb-2">{plan.name}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{plan.price}</span>
          {plan.price !== "Sur devis" && plan.name !== "Abonnement" && (
            <span className="text-muted-foreground ml-1">/ projet</span>
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
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
        >
          Choisir ce forfait
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="forfaits" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Forfaits</h2>
          <p className="section-subtitle">
            Des solutions adaptées à tous les budgets et tous les projets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-5 text-muted-foreground">
            Besoin d'une solution qui n'est pas listée ici ?
          </p>
          <a href="#contact" className="btn-primary">
            Contactez-nous pour un devis personnalisé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
