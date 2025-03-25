
import React, { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } ${theme === 'dark' ? 'bg-background' : 'bg-background'}`}
    >
      <div className="relative flex flex-col items-center">
        <LoaderCircle 
          className="w-16 h-16 text-primary animate-spin" 
          strokeWidth={1.5} 
        />
        <div className="mt-6 text-2xl font-sora font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Maj Studio
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          Chargement en cours...
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
