import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-vault-primary py-20 text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Links */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/privacy" 
              className="text-vault-accent hover:text-vault-accent-hover transition-colors duration-300"
              style={{ fontSize: '0.95rem' }}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-vault-accent hover:text-vault-accent-hover transition-colors duration-300"
              style={{ fontSize: '0.95rem' }}
            >
              Terms of Service
            </Link>
            {/*<Link 
              to="/contact" 
              className="text-vault-accent hover:text-vault-accent-hover transition-colors duration-300"
              style={{ fontSize: '0.95rem' }}
            >
              Contact Us
            </Link>*/}
          </div>
          
          {/* Copyright */}
          <p 
            className="text-vault-text-light"
            style={{ fontSize: '0.95rem' }}
          >
            © 2025 PromptsVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};