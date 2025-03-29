
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ExtrasSectionProps {
  extras: string[];
  title: string;
}

const ExtrasSection = ({ extras, title }: ExtrasSectionProps) => (
  <div className="mt-12 p-6 bg-muted/50 dark:bg-muted/10 rounded-xl">
    <h3 className="text-xl font-sora font-semibold mb-4">{title}</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {extras.map((extra, idx) => (
        <li key={idx} className="flex items-start">
          <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
          <span>{extra}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ExtrasSection;
