
import React from 'react';
import PricingCard from './PricingCard';
import ExtrasSection from './ExtrasSection';

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
};

interface PricingTabContentProps {
  plans: PricingPlan[];
  extras: string[];
  language: string;
  extrasTitle: string;
}

const PricingTabContent = ({ plans, extras, language, extrasTitle }: PricingTabContentProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} index={index} language={language} />
        ))}
      </div>
      <ExtrasSection extras={extras} title={extrasTitle} />
    </div>
  );
};

export default PricingTabContent;
