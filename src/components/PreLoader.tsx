
import React, { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { useLanguage } from '@/providers/LanguageProvider';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const { theme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    // Start fade out after 1.2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);
    
    // Remove completely after fade animation completes
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1700); // 1200ms + 500ms for fade animation

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${theme === 'dark' ? 'bg-background' : 'bg-background'}`}
    >
      <div className="relative flex flex-col items-center">
        <LoaderCircle 
          className="w-16 h-16 text-primary animate-spin preloader-pulse" 
          strokeWidth={1.5} 
        />
        <div className="mt-6 text-2xl font-sora font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Maj Studio
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          {t('preloader.loading')}
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
