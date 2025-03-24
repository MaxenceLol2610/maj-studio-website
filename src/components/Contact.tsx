
import React from 'react';
import { Discord, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Contactez-Nous</h2>
            <p className="section-subtitle">
              Discutons de votre projet et voyons comment nous pouvons vous aider.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-8 text-center fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Discord className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-sora font-semibold mb-3">
                Rejoignez Notre Discord
              </h3>
              <p className="text-muted-foreground mb-6">
                Le moyen le plus rapide pour nous contacter. Notre équipe est présente 
                pour répondre à toutes vos questions.
              </p>
              <a 
                href="https://discord.gg/votre-serveur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center"
              >
                Rejoindre Discord
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-8 text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-sora font-semibold mb-3">
                Envoyez-nous un Email
              </h3>
              <p className="text-muted-foreground mb-6">
                Pour les demandes plus détaillées ou si vous préférez communiquer par email.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <textarea 
                  placeholder="Votre message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="btn-secondary w-full"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-16 text-center fade-in">
            <p className="text-muted-foreground">
              Nous vous répondrons dans les 24 heures ouvrables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
