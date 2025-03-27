
import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    console.log("Switched language to:", newLanguage);
    
    // If we're not on the homepage and there's a hash link in the URL, 
    // handle the navigation appropriately
    if (location.pathname !== '/' && location.hash) {
      navigate('/');
    }
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
        {language === 'en' ? 'EN' : 'FR'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
