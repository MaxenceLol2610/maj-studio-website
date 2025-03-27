
import React from 'react';
import { Code, Server, Bot, Layers, ArrowRight, Cpu } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      id: 'web',
      icon: <Code className="w-10 h-10 text-primary" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: ["React", "Vue.js", "WordPress", "E-commerce"]
    },
    {
      id: 'software',
      icon: <Server className="w-10 h-10 text-primary" />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      features: ["Windows", "MacOS", "Linux", "Multi-plateforme"]
    },
    {
      id: 'discord',
      icon: <Bot className="w-10 h-10 text-primary" />,
      title: t('services.discord.title'),
      description: t('services.discord.description'),
      features: ["Modération", "Economie", "Jeux", "Statistiques"]
    },
    {
      id: 'minecraft',
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: t('services.minecraft.title'),
      description: t('services.minecraft.description'),
      features: ["Spigot", "Paper", "BungeeCord", "JDA"]
    },
    {
      id: 'mobile',
      icon: <Layers className="w-10 h-10 text-primary" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: ["React Native", "Flutter", "iOS", "Android"]
    }
  ];

  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    return (
      <div 
        className="bg-white dark:bg-card rounded-xl shadow-soft p-6 card-hover border-2 border-border"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="mb-6 bg-primary/10 dark:bg-primary/5 w-16 h-16 rounded-lg flex items-center justify-center">
          {service.icon}
        </div>
        <h3 className="text-xl font-sora font-semibold mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-5">{service.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {service.features.map((feature, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/service/${service.id}`} 
          className="text-primary font-medium flex items-center group"
        >
          {t('services.learn_more')}
          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    );
  };

  return (
    <section id="services" className="bg-muted/50 dark:bg-muted/10 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
