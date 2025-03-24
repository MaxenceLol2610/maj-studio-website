
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
              Solutions de développement accessibles et modernes pour tous vos projets.
            </p>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary">Développement Web</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">Logiciels</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">Bots Discord</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">Plugins Minecraft</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold mb-4">Forfaits</h4>
            <ul className="space-y-2">
              <li><a href="#forfaits" className="text-muted-foreground hover:text-primary">Basic</a></li>
              <li><a href="#forfaits" className="text-muted-foreground hover:text-primary">Standard</a></li>
              <li><a href="#forfaits" className="text-muted-foreground hover:text-primary">Premium</a></li>
              <li><a href="#forfaits" className="text-muted-foreground hover:text-primary">Entreprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold mb-4">Contacter</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Discord</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Email</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary">Notre Équipe</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} MAJ Studio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
