
import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      className="relative"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="absolute -bottom-0.5 right-0 text-[10px] font-semibold">
        {language === 'en' ? 'FR' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
