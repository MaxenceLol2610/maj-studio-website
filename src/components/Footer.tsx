
import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="font-sora font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                MAJ Studio
              </span>
            </a>
            <p className="text-muted-foreground mb-4">
              {t('language') === 'en' 
                ? 'Accessible and modern development solutions for all your projects.'
                : 'Solutions de développement accessibles et modernes pour tous vos projets.'}
            </p>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary">{t('services.web.title')}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">{t('services.software.title')}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">{t('services.discord.title')}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">{t('services.minecraft.title')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold mb-4">{t('nav.pricing')}</h4>
            <ul className="space-y-2">
              <li><a href="#forfaits" className="text-muted-foreground hover:text-primary">{t('pricing.basic.title')}</a></li>
              <li><a href="#forfaits" className="text-muted-foreground hover:text-primary">{t('pricing.standard.title')}</a></li>
              <li><a href="#forfaits" className="text-muted-foreground hover:text-primary">{t('pricing.premium.title')}</a></li>
              <li><a href="#forfaits" className="text-muted-foreground hover:text-primary">{t('pricing.enterprise.title')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Discord</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Email</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary">
                {t('language') === 'en' ? 'Our Team' : 'Notre Équipe'}
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} MAJ Studio. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
