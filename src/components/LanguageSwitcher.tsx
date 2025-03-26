
import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    console.log("Switched language to:", newLanguage);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      className="relative flex items-center gap-1 px-3 h-10 w-auto"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="text-xs font-medium">
        {language === 'en' ? 'FR' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
