
import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

const About = () => {
  const { language } = useLanguage();

  // Les données de l'équipe
  const team = [
    {
      name: "Maxence",
      grade: "Fondateur",
      role: language === 'en' ? "Full Stack Developer" : "Développeur Full Stack",
      bio: language === 'en' 
        ? "Specialist in full UI/UX development and database management. I will build the best possible product that meets your needs."
        : "Spécialiste du développement UI/UX et de la gestion de bases de données. Je construirai le meilleur produit possible qui répondra à vos besoins.",
      avatar: "/maxence.webp" 
    },
    {
      name: "James",
      grade: "Fondateur",
      role: language === 'en' ? "Python Developer & UX Designer" : "Développeur Python & UX Designer",
      bio: language === 'en'
        ? "I develop advanced code in Python and Front-end. I make sites more practical and beautiful, with passion and perfectionism to create quality solutions."
        : "Je développe du code avancé en Python et en Front-end. Je rends les sites plus pratiques et plus beaux, avec passion et perfectionnisme pour créer des solutions de qualité.",
      avatar: "/jamesfrench.webp"
    }
  ];

  const TeamMember = ({ member, index }: { member: typeof team[0], index: number }) => {
    return (
      <div 
        className="bg-white dark:bg-card rounded-xl shadow-soft overflow-hidden fade-in border-2 border-border"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 p-8 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-card shadow-md">
            <img 
              src={member.avatar} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground">
              {member.grade}
            </span>
            <h3 className="text-xl font-sora font-semibold">{member.name}</h3>
          </div>
          <p className="text-primary font-medium mb-4 mt-2">{member.role}</p>
          <p className="text-muted-foreground">{member.bio}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="bg-muted/50 dark:bg-muted/10 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {language === 'en' ? 'About Us' : 'À Propos de Nous'}
          </h2>
          <p className="section-subtitle">
            {language === 'en' 
              ? 'A passionate team of developers dedicated to creating custom and accessible solutions.'
              : 'Une équipe passionnée de développeurs dédiée à créer des solutions sur mesure et accessibles.'}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass rounded-xl p-8 fade-in">
            <h3 className="text-2xl font-sora font-semibold mb-4 text-center">
              {language === 'en' ? 'Our Vision' : 'Notre Vision'}
            </h3>
            <p className="text-center mb-6">
              {language === 'en' 
                ? 'At MAJ Studio, we believe that quality development should be accessible to everyone, from individuals to large companies. Our mission is to democratize access to modern and efficient technological solutions.'
                : 'Chez MAJ Studio, nous croyons que le développement de qualité devrait être accessible à tous, des particuliers aux grandes entreprises. Notre mission est de démocratiser l\'accès à des solutions technologiques modernes et efficaces.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-sora font-semibold mb-2">
                  {language === 'en' ? 'Innovation' : 'Innovation'}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {language === 'en' 
                    ? 'We stay at the cutting edge of technologies to offer modern solutions.'
                    : 'Nous restons à la pointe des technologies pour offrir des solutions modernes.'}
                </p>
              </div>
              <div>
                <h4 className="font-sora font-semibold mb-2">
                  {language === 'en' ? 'Accessibility' : 'Accessibilité'}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {language === 'en' 
                    ? 'Our creations are designed to be used by everyone, without exception.'
                    : 'Nos créations sont conçues pour être utilisées par tous, sans exception.'}
                </p>
              </div>
              <div>
                <h4 className="font-sora font-semibold mb-2">
                  {language === 'en' ? 'Quality' : 'Qualité'}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {language === 'en' 
                    ? 'We never compromise on the quality of our services.'
                    : 'Nous ne faisons jamais de compromis sur la qualité de nos services.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-sora font-semibold mb-8 text-center">
          {language === 'en' ? 'Our Team' : 'Notre Équipe'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
