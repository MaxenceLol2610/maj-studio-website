
import React, { useState } from 'react';
import { Globe, Smartphone, Bot, Gamepad2 } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingTabContent from './pricing/PricingTabContent';
import { getWebsitePlans, getWebsiteExtras } from './pricing/websitePlans';
import { getAppPlans, getAppExtras } from './pricing/appPlans';
import { getDiscordBotPlans, getDiscordBotExtras } from './pricing/discordBotPlans';
import { getMinecraftPluginPlans, getMinecraftPluginExtras } from './pricing/minecraftPluginPlans';

const Pricing = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("websites");

  // Get pricing plans and extras based on language
  const websitePlans = getWebsitePlans(language);
  const websiteExtras = getWebsiteExtras(language);
  const appPlans = getAppPlans(language);
  const appExtras = getAppExtras(language);
  const discordBotPlans = getDiscordBotPlans(language);
  const discordBotExtras = getDiscordBotExtras(language);
  const minecraftPluginPlans = getMinecraftPluginPlans(language);
  const minecraftPluginExtras = getMinecraftPluginExtras(language);

  const extrasTitle = language === 'en' ? 'Additional Options' : 'Options Supplémentaires';

  return (
    <section id="forfaits" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <Tabs defaultValue="websites" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2 sm:grid-cols-4 sm:max-w-2xl bg-muted/70 p-1.5 rounded-lg">
              <TabsTrigger value="websites" className="flex items-center gap-2 text-xs sm:text-sm px-2 sm:px-3 rounded-md">
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'Websites' : 'Sites Web'}</span>
              </TabsTrigger>
              <TabsTrigger value="apps" className="flex items-center gap-2 text-xs sm:text-sm px-2 sm:px-3 rounded-md">
                <Smartphone className="h-4 w-4" />
                <span>{language === 'en' ? 'Mobile Apps' : 'Applications Mobiles'}</span>
              </TabsTrigger>
              <TabsTrigger value="discord" className="flex items-center gap-2 text-xs sm:text-sm px-2 sm:px-3 rounded-md">
                <Bot className="h-4 w-4" />
                <span>{language === 'en' ? 'Discord Bots' : 'Bots Discord'}</span>
              </TabsTrigger>
              <TabsTrigger value="minecraft" className="flex items-center gap-2 text-xs sm:text-sm px-2 sm:px-3 rounded-md">
                <Gamepad2 className="h-4 w-4" />
                <span>{language === 'en' ? 'Minecraft Plugins' : 'Plugins Minecraft'}</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="websites" className="mt-0 transition-all duration-300">
            <PricingTabContent 
              plans={websitePlans} 
              extras={websiteExtras} 
              language={language} 
              extrasTitle={language === 'en' ? 'Website Extras' : 'Options Supplémentaires'}
            />
          </TabsContent>
          
          <TabsContent value="apps" className="mt-0 transition-all duration-300">
            <PricingTabContent 
              plans={appPlans} 
              extras={appExtras} 
              language={language} 
              extrasTitle={language === 'en' ? 'Mobile App Extras' : 'Options Supplémentaires'}
            />
          </TabsContent>

          <TabsContent value="discord" className="mt-0 transition-all duration-300">
            <PricingTabContent 
              plans={discordBotPlans} 
              extras={discordBotExtras} 
              language={language} 
              extrasTitle={language === 'en' ? 'Discord Bot Extras' : 'Options Supplémentaires'}
            />
          </TabsContent>

          <TabsContent value="minecraft" className="mt-0 transition-all duration-300">
            <PricingTabContent 
              plans={minecraftPluginPlans} 
              extras={minecraftPluginExtras} 
              language={language} 
              extrasTitle={language === 'en' ? 'Minecraft Plugin Extras' : 'Options Supplémentaires'}
            />
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="mb-5 text-muted-foreground">
            {language === 'en' 
              ? "Need a solution that's not listed here?" 
              : "Besoin d'une solution qui n'est pas listée ici ?"}
          </p>
          <a href="#contact" className="btn-primary">
            {language === 'en' 
              ? "Contact us for a custom quote" 
              : "Contactez-nous pour un devis personnalisé"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
