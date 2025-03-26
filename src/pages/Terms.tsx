
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '@/providers/LanguageProvider';

const Terms = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-24 mt-16">
        <h1 className="text-4xl font-bold mb-8 font-sora">
          {language === 'en' ? 'Terms of Service' : 'Conditions d\'utilisation'}
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'en' ? (
            <>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using MAJ Studio's services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations.
              </p>
              
              <h2>2. Services</h2>
              <p>
                MAJ Studio provides web development, software solutions, Discord bot creation, 
                and Minecraft plugin development services as described on our website.
              </p>
              
              <h2>3. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing accurate and complete information for project requirements</li>
                <li>Reviewing and providing feedback on deliverables in a timely manner</li>
                <li>Ensuring they have proper rights to any content provided to MAJ Studio</li>
              </ul>
              
              <h2>4. Intellectual Property</h2>
              <p>
                Upon full payment, the client receives rights to the final deliverables as specified 
                in the project agreement. MAJ Studio retains rights to any proprietary code, frameworks, 
                or methodologies used in development.
              </p>
              
              <h2>5. Payment Terms</h2>
              <p>
                Payment terms are as specified in individual project agreements. Late payments may 
                incur additional fees and project delays.
              </p>
              
              <h2>6. Limitation of Liability</h2>
              <p>
                MAJ Studio shall not be liable for any indirect, incidental, special, consequential 
                or punitive damages resulting from your use of or inability to use our services.
              </p>
              
              <h2>7. Modifications to Terms</h2>
              <p>
                MAJ Studio reserves the right to modify these terms at any time. Changes will be 
                effective upon posting to the website.
              </p>
              
              <h2>8. Contact</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us through 
                the contact information provided on our website.
              </p>
            </>
          ) : (
            <>
              <p>Dernière mise à jour: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Acceptation des conditions</h2>
              <p>
                En accédant et en utilisant les services de MAJ Studio, vous acceptez d'être lié par 
                ces conditions d'utilisation et toutes les lois et réglementations applicables.
              </p>
              
              <h2>2. Services</h2>
              <p>
                MAJ Studio fournit des services de développement web, de solutions logicielles, de création 
                de bots Discord et de développement de plugins Minecraft comme décrit sur notre site web.
              </p>
              
              <h2>3. Responsabilités du client</h2>
              <p>Les clients sont responsables de:</p>
              <ul>
                <li>Fournir des informations précises et complètes pour les exigences du projet</li>
                <li>Examiner et fournir des commentaires sur les livrables en temps opportun</li>
                <li>S'assurer qu'ils disposent des droits appropriés sur tout contenu fourni à MAJ Studio</li>
              </ul>
              
              <h2>4. Propriété intellectuelle</h2>
              <p>
                Après paiement complet, le client reçoit les droits sur les livrables finaux comme spécifié 
                dans l'accord de projet. MAJ Studio conserve les droits sur tout code propriétaire, cadres ou 
                méthodologies utilisés dans le développement.
              </p>
              
              <h2>5. Conditions de paiement</h2>
              <p>
                Les conditions de paiement sont spécifiées dans les accords de projet individuels. Les paiements 
                tardifs peuvent entraîner des frais supplémentaires et des retards de projet.
              </p>
              
              <h2>6. Limitation de responsabilité</h2>
              <p>
                MAJ Studio ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs 
                ou punitifs résultant de votre utilisation ou de votre incapacité à utiliser nos services.
              </p>
              
              <h2>7. Modifications des conditions</h2>
              <p>
                MAJ Studio se réserve le droit de modifier ces conditions à tout moment. Les modifications 
                seront effectives dès leur publication sur le site web.
              </p>
              
              <h2>8. Contact</h2>
              <p>
                Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter via 
                les informations de contact fournies sur notre site web.
              </p>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
