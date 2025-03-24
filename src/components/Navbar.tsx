
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glass shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-sora font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            MAJ Studio
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#accueil" className="link-underline font-medium">Accueil</a>
          <a href="#services" className="link-underline font-medium">Services</a>
          <a href="#forfaits" className="link-underline font-medium">Forfaits</a>
          <a href="#about" className="link-underline font-medium">À Propos</a>
          <a href="#contact" className="link-underline font-medium">Contact</a>
        </nav>
        
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">Nous Contacter</a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in shadow-lg py-5">
          <nav className="flex flex-col space-y-4 px-6">
            <a 
              href="#accueil" 
              className="font-medium py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="font-medium py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#forfaits" 
              className="font-medium py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Forfaits
            </a>
            <a 
              href="#about" 
              className="font-medium py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </a>
            <a 
              href="#contact" 
              className="font-medium py-2" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="btn-primary w-full text-center" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Nous Contacter
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
