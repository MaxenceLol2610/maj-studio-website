
import React from 'react';
import { Code, Server, Bot, Layers, ArrowRight, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Développement Web",
    description: "Sites vitrines, applications web et plateformes e-commerce modernes, accessibles et responsives.",
    features: ["React", "Vue.js", "WordPress", "E-commerce"]
  },
  {
    icon: <Server className="w-10 h-10 text-primary" />,
    title: "Logiciels",
    description: "Applications de bureau et solutions logicielles sur mesure pour répondre à vos besoins spécifiques.",
    features: ["Windows", "MacOS", "Linux", "Multi-plateforme"]
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Bots Discord",
    description: "Automatisez votre serveur Discord avec des bots personnalisés et intuitifs, riches en fonctionnalités.",
    features: ["Modération", "Economie", "Jeux", "Statistiques"]
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "Plugins Minecraft",
    description: "Extensions pour serveurs Minecraft offrant des fonctionnalités uniques et personnalisées.",
    features: ["Spigot", "Paper", "BungeeCord", "JDA"]
  },
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: "Applications Mobiles",
    description: "Applications natives et hybrides pour iOS et Android, avec une expérience utilisateur optimale.",
    features: ["React Native", "Flutter", "iOS", "Android"]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-soft p-6 card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-6 bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
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
      
      <a 
        href="#contact" 
        className="text-primary font-medium flex items-center group"
      >
        En savoir plus
        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-muted/50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Nous proposons une gamme complète de services adaptés 
            à vos besoins spécifiques.
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
