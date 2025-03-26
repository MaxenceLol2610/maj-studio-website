
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '@/providers/LanguageProvider';

const Privacy = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-24 mt-16">
        <h1 className="text-4xl font-bold mb-8 font-sora">
          {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'en' ? (
            <>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Introduction</h2>
              <p>
                Thank you for choosing MAJ Studio. This Privacy Policy explains how we collect, 
                use, and share your personal information when you visit our website or use our services.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>We may collect information that you provide directly to us, such as:</p>
              <ul>
                <li>Contact information (name, email address)</li>
                <li>Communications you send to us</li>
                <li>Information you provide when requesting our services</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Respond to your comments, questions, and requests</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, loss, or alteration.
              </p>
              
              <h2>5. Your Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal information, 
                such as the right to access, correct, or delete your data.
              </p>
              
              <h2>6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through 
                the contact information provided on our website.
              </p>
            </>
          ) : (
            <>
              <p>Dernière mise à jour: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Introduction</h2>
              <p>
                Merci d'avoir choisi MAJ Studio. Cette politique de confidentialité explique comment 
                nous collectons, utilisons et partageons vos informations personnelles lorsque vous 
                visitez notre site web ou utilisez nos services.
              </p>
              
              <h2>2. Informations que nous collectons</h2>
              <p>Nous pouvons collecter des informations que vous nous fournissez directement, telles que:</p>
              <ul>
                <li>Informations de contact (nom, adresse e-mail)</li>
                <li>Communications que vous nous envoyez</li>
                <li>Informations que vous fournissez lors de la demande de nos services</li>
              </ul>
              
              <h2>3. Comment nous utilisons vos informations</h2>
              <p>Nous utilisons les informations que nous collectons pour:</p>
              <ul>
                <li>Fournir, maintenir et améliorer nos services</li>
                <li>Communiquer avec vous au sujet des produits, services et événements</li>
                <li>Répondre à vos commentaires, questions et demandes</li>
              </ul>
              
              <h2>4. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos informations personnelles contre tout accès non autorisé, perte ou altération.
              </p>
              
              <h2>5. Vos droits</h2>
              <p>
                Selon votre emplacement, vous pouvez avoir des droits concernant vos informations personnelles, 
                tels que le droit d'accéder, de corriger ou de supprimer vos données.
              </p>
              
              <h2>6. Nous contacter</h2>
              <p>
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter 
                via les informations de contact fournies sur notre site web.
              </p>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
