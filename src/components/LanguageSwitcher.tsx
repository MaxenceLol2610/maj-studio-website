
import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Flag } from 'lucide-react';

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
      className="relative"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      {language === 'en' ? (
        <Flag className="h-[1.2rem] w-[1.2rem] text-blue-600" />
      ) : (
        <Flag className="h-[1.2rem] w-[1.2rem] text-red-600" />
      )}
    </Button>
  );
};

export default LanguageSwitcher;
