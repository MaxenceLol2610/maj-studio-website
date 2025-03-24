
import React from 'react';

// Les données de l'équipe
const team = [
  {
    name: "Alexandre",
    role: "Développeur Front-end",
    bio: "Expert en interfaces modernes et accessibles, avec une passion pour l'UX/UI et les animations fluides.",
    avatar: "/placeholder.svg" 
  },
  {
    name: "Marc",
    role: "Développeur Back-end",
    bio: "Spécialiste des bases de données et des API robustes, avec une forte expertise en sécurité et performances.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Jules",
    role: "Développeur Full-stack",
    bio: "Polyvalent et créatif, il excelle dans l'intégration des technologies et l'optimisation des solutions.",
    avatar: "/placeholder.svg"
  }
];

const TeamMember = ({ member, index }: { member: typeof team[0], index: number }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-soft overflow-hidden fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img 
            src={member.avatar} 
            alt={member.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-sora font-semibold">{member.name}</h3>
        <p className="text-primary font-medium mb-4">{member.role}</p>
        <p className="text-muted-foreground">{member.bio}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-muted/50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">À Propos de Nous</h2>
          <p className="section-subtitle">
            Une équipe passionnée de développeurs dédiée à créer des solutions 
            sur mesure et accessibles.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass rounded-xl p-8 fade-in">
            <h3 className="text-2xl font-sora font-semibold mb-4 text-center">Notre Vision</h3>
            <p className="text-center mb-6">
              Chez MAJ Studio, nous croyons que le développement de qualité devrait être 
              accessible à tous, des particuliers aux grandes entreprises. Notre mission est 
              de démocratiser l'accès à des solutions technologiques modernes et efficaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-sora font-semibold mb-2">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Nous restons à la pointe des technologies pour offrir des solutions modernes.
                </p>
              </div>
              <div>
                <h4 className="font-sora font-semibold mb-2">Accessibilité</h4>
                <p className="text-muted-foreground text-sm">
                  Nos créations sont conçues pour être utilisées par tous, sans exception.
                </p>
              </div>
              <div>
                <h4 className="font-sora font-semibold mb-2">Qualité</h4>
                <p className="text-muted-foreground text-sm">
                  Nous ne faisons jamais de compromis sur la qualité de nos services.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-sora font-semibold mb-8 text-center">Notre Équipe</h3>
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
