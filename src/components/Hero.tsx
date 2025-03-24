
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const blobs = heroRef.current.querySelectorAll('.blob');
      blobs.forEach((blob, index) => {
        const factor = index + 1;
        const blobElement = blob as HTMLElement;
        blobElement.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      ref={heroRef}
    >
      {/* Background Blobs/Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="blob bg-primary/30 w-96 h-96 rounded-full filter blur-3xl opacity-20 absolute -left-20 top-20 animate-float"></div>
        <div className="blob bg-secondary/30 w-96 h-96 rounded-full filter blur-3xl opacity-20 absolute right-10 top-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="blob bg-accent/30 w-80 h-80 rounded-full filter blur-3xl opacity-20 absolute bottom-10 left-1/3 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-section relative z-10">
        <div className="text-center">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Studio de Développement
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sora font-bold mb-6 tracking-tight fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Développement accessible
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              pour tous
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 fade-in">
            Nous créons des applications web, des logiciels et des bots Discord sur mesure 
            avec un engagement fort pour l'accessibilité et la qualité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <a href="#contact" className="btn-primary">
              Nous Contacter
            </a>
            <a href="#services" className="btn-outline">
              Découvrir Nos Services
            </a>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="mt-20 relative w-full max-w-4xl mx-auto">
          <div className="glass rounded-2xl shadow-soft overflow-hidden aspect-video fade-in">
            <div className="w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center">
              <p className="text-xl font-sora font-medium text-center px-8">
                Solutions personnalisées pour vos projets <br />
                <span className="text-primary font-bold">
                  Des sites web aux bots Discord
                </span>
              </p>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-xl blur-xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
