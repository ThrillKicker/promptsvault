import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vault-primary py-5 backdrop-blur-md">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl">
            PromptsVault
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-vault-text-light hover:text-vault-accent transition-colors duration-300">
              Home
            </Link>
            <Link to="/privacy" className="text-vault-text-light hover:text-vault-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-vault-text-light hover:text-vault-accent transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-vault-text-light hover:text-vault-accent transition-colors duration-300">
              Contact Us
            </Link>
          </nav>
          
          {/* CTA Button */}
          <Button 
            variant="vault"
            className="px-6 py-2 text-sm font-semibold"
            asChild
          >
            <a href="https://vault.promptsvault.app" target="_blank" rel="noopener noreferrer">
              Create My Vault
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};