
import React from 'react';
import { CheckCircle } from 'lucide-react';

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
};

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  language: string;
}

const PricingCard = ({ plan, index, language }: PricingCardProps) => {
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

export default PricingCard;
