
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
      className="relative"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="absolute -bottom-0.5 right-0 text-[8px] font-semibold rounded-sm overflow-hidden">
        {language === 'en' ? 
          <span className="text-blue-600">🇫🇷</span> : 
          <span className="text-red-600">🇬🇧</span>
        }
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
