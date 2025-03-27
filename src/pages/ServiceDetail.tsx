
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '@/providers/LanguageProvider';
import { ArrowLeft, Code, Server, Bot, Layers, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const servicesData = {
    web: {
      icon: <Code className="w-16 h-16 text-primary" />,
      title: language === 'en' ? 'Web Development' : 'Développement Web',
      description: language === 'en' 
        ? 'We create modern, responsive websites and web applications tailored to your specific needs.'
        : 'Nous créons des sites web et des applications web modernes et responsives adaptés à vos besoins spécifiques.',
      features: [
        {
          title: language === 'en' ? 'Responsive Design' : 'Design Responsive',
          description: language === 'en'
            ? 'All our websites are designed to work perfectly on all devices, from mobile phones to desktop computers.'
            : 'Tous nos sites web sont conçus pour fonctionner parfaitement sur tous les appareils, des téléphones mobiles aux ordinateurs de bureau.'
        },
        {
          title: language === 'en' ? 'User Experience' : 'Expérience Utilisateur',
          description: language === 'en'
            ? 'We focus on creating intuitive and user-friendly interfaces that provide the best experience for your visitors.'
            : 'Nous nous concentrons sur la création d\'interfaces intuitives et conviviales qui offrent la meilleure expérience à vos visiteurs.'
        },
        {
          title: language === 'en' ? 'SEO Optimization' : 'Optimisation SEO',
          description: language === 'en'
            ? 'Our websites are optimized for search engines to help your business be found by potential customers.'
            : 'Nos sites web sont optimisés pour les moteurs de recherche afin d\'aider votre entreprise à être trouvée par des clients potentiels.'
        }
      ],
      technologies: ['React', 'Vue.js', 'WordPress', 'E-commerce']
    },
    software: {
      icon: <Server className="w-16 h-16 text-primary" />,
      title: language === 'en' ? 'Software Development' : 'Développement Logiciel',
      description: language === 'en'
        ? 'Custom software solutions designed to optimize your business processes and increase productivity.'
        : 'Des solutions logicielles personnalisées conçues pour optimiser vos processus d\'entreprise et augmenter la productivité.',
      features: [
        {
          title: language === 'en' ? 'Custom Solutions' : 'Solutions Personnalisées',
          description: language === 'en'
            ? 'We develop software tailored to your specific needs and business requirements.'
            : 'Nous développons des logiciels adaptés à vos besoins spécifiques et aux exigences de votre entreprise.'
        },
        {
          title: language === 'en' ? 'Cross-Platform' : 'Multi-Plateforme',
          description: language === 'en'
            ? 'Our software works across multiple operating systems, including Windows, macOS, and Linux.'
            : 'Nos logiciels fonctionnent sur plusieurs systèmes d\'exploitation, notamment Windows, macOS et Linux.'
        },
        {
          title: language === 'en' ? 'Maintenance & Support' : 'Maintenance & Support',
          description: language === 'en'
            ? 'We provide ongoing maintenance and support to ensure your software continues to run smoothly.'
            : 'Nous fournissons une maintenance et un support continus pour garantir que votre logiciel continue de fonctionner correctement.'
        }
      ],
      technologies: ['Windows', 'MacOS', 'Linux', 'Multi-plateforme']
    },
    discord: {
      icon: <Bot className="w-16 h-16 text-primary" />,
      title: language === 'en' ? 'Discord Bots' : 'Bots Discord',
      description: language === 'en'
        ? 'Custom Discord bots to enhance your server experience and automate moderation tasks.'
        : 'Des bots Discord personnalisés pour améliorer l\'expérience de votre serveur et automatiser les tâches de modération.',
      features: [
        {
          title: language === 'en' ? 'Moderation' : 'Modération',
          description: language === 'en'
            ? 'Automate moderation tasks to keep your server safe and clean.'
            : 'Automatisez les tâches de modération pour garder votre serveur sûr et propre.'
        },
        {
          title: language === 'en' ? 'Custom Commands' : 'Commandes Personnalisées',
          description: language === 'en'
            ? 'Create custom commands tailored to your server\'s needs.'
            : 'Créez des commandes personnalisées adaptées aux besoins de votre serveur.'
        },
        {
          title: language === 'en' ? 'Analytics' : 'Analytique',
          description: language === 'en'
            ? 'Track server activity and gather insights into user engagement.'
            : 'Suivez l\'activité du serveur et recueillez des informations sur l\'engagement des utilisateurs.'
        }
      ],
      technologies: ['Modération', 'Economie', 'Jeux', 'Statistiques']
    },
    minecraft: {
      icon: <Cpu className="w-16 h-16 text-primary" />,
      title: language === 'en' ? 'Minecraft Plugins' : 'Plugins Minecraft',
      description: language === 'en'
        ? 'Custom Minecraft plugins to enhance your server experience and provide unique features.'
        : 'Des plugins Minecraft personnalisés pour améliorer l\'expérience de votre serveur et fournir des fonctionnalités uniques.',
      features: [
        {
          title: language === 'en' ? 'Custom Gameplay' : 'Gameplay Personnalisé',
          description: language === 'en'
            ? 'Create unique gameplay experiences for your players with custom mechanics and features.'
            : 'Créez des expériences de jeu uniques pour vos joueurs avec des mécaniques et des fonctionnalités personnalisées.'
        },
        {
          title: language === 'en' ? 'Server Management' : 'Gestion de Serveur',
          description: language === 'en'
            ? 'Tools to help you manage your server more effectively and efficiently.'
            : 'Des outils pour vous aider à gérer votre serveur plus efficacement.'
        },
        {
          title: language === 'en' ? 'Performance Optimization' : 'Optimisation des Performances',
          description: language === 'en'
            ? 'Optimize your server performance to provide a better experience for your players.'
            : 'Optimisez les performances de votre serveur pour offrir une meilleure expérience à vos joueurs.'
        }
      ],
      technologies: ['Spigot', 'Paper', 'BungeeCord', 'JDA']
    },
    mobile: {
      icon: <Layers className="w-16 h-16 text-primary" />,
      title: language === 'en' ? 'Mobile Apps' : 'Applications Mobiles',
      description: language === 'en'
        ? 'Native and cross-platform mobile applications for iOS and Android.'
        : 'Applications mobiles natives et multi-plateformes pour iOS et Android.',
      features: [
        {
          title: language === 'en' ? 'Cross-Platform' : 'Multi-Plateforme',
          description: language === 'en'
            ? 'Build once, deploy everywhere with our cross-platform mobile development solutions.'
            : 'Construisez une fois, déployez partout avec nos solutions de développement mobile multi-plateformes.'
        },
        {
          title: language === 'en' ? 'Native Performance' : 'Performance Native',
          description: language === 'en'
            ? 'Our apps provide the performance and feel of a native application, regardless of the platform.'
            : 'Nos applications offrent les performances et la sensation d\'une application native, quelle que soit la plateforme.'
        },
        {
          title: language === 'en' ? 'Offline Functionality' : 'Fonctionnalité Hors Ligne',
          description: language === 'en'
            ? 'We design apps that work even when your users are offline.'
            : 'Nous concevons des applications qui fonctionnent même lorsque vos utilisateurs sont hors ligne.'
        }
      ],
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    }
  };

  const service = id ? servicesData[id as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 mt-16 text-center">
          <h1 className="text-4xl font-bold mb-8 font-sora">
            {language === 'en' ? 'Service Not Found' : 'Service Non Trouvé'}
          </h1>
          <p className="mb-8">
            {language === 'en' 
              ? 'The service you are looking for does not exist.' 
              : 'Le service que vous recherchez n\'existe pas.'}
          </p>
          <Button onClick={() => navigate('/#services')}>
            <ArrowLeft className="mr-2" />
            {language === 'en' ? 'Back to Services' : 'Retour aux Services'}
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-24 mt-16">
        <Button 
          variant="outline" 
          onClick={() => navigate('/#services')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2" />
          {language === 'en' ? 'Back to Services' : 'Retour aux Services'}
        </Button>
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-primary/10 dark:bg-primary/5 w-24 h-24 rounded-lg flex items-center justify-center mb-6">
            {service.icon}
          </div>
          <h1 className="text-4xl font-bold mb-4 font-sora">{service.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{service.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {service.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {service.features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-card rounded-xl shadow-soft p-6 card-hover border-2 border-border">
              <h3 className="text-xl font-sora font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-muted/50 dark:bg-muted/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-sora font-semibold mb-4">
            {language === 'en' ? 'Ready to Get Started?' : 'Prêt à Commencer?'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Contact us today to discuss your project and how we can help you achieve your goals.'
              : 'Contactez-nous dès aujourd\'hui pour discuter de votre projet et de la façon dont nous pouvons vous aider à atteindre vos objectifs.'}
          </p>
          <Button onClick={() => navigate('/#contact')} size="lg">
            {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
