import React, { useState, useEffect } from 'react';
import { 
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className={`header-nav ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={navigateToHome} className="logo">PromptsVault</button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex nav-menu">
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">Reviews</button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://vault.promptsvault.app/get-access" className="nav-link">Login</a>
            <a href="https://vault.promptsvault.app/get-access" className="btn-primary">Access Vault</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="p-4 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block nav-link">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="block nav-link">Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className="block nav-link">Reviews</button>
              <hr className="border-gray-200" />
              <a href="https://vault.promptsvault.app/get-access" className="block nav-link">Login</a>
              <a href="https://vault.promptsvault.app/get-access" className="btn-primary w-full">Access Vault</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button onClick={navigateToHome} className="logo">PromptsVault</button>
            <div className="text-sm text-gray-500">
              © 2025 PromptsVault by <a href="https://thrillkicker.co" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 transition-colors">ThrillKicker</a>. All rights reserved.
            </div>
            <div className="flex gap-6">
              <button onClick={() => navigate('/privacy')} className="text-sm text-gray-500 hover:text-teal-600">Privacy</button>
              <button onClick={() => navigate('/terms')} className="text-sm text-gray-500 hover:text-teal-600">Terms</button>
              <a href="#" className="text-sm text-gray-500 hover:text-teal-600">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;