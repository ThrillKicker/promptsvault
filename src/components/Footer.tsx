export const Footer = () => {
  return (
    <footer className="py-16 bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-vault-text-muted text-sm mb-4 md:mb-0">
            © 2025 PromptsVault. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="/privacy" 
              className="text-vault-primary hover:text-vault-primary-hover text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-vault-primary hover:text-vault-primary-hover text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="/contact" 
              className="text-vault-primary hover:text-vault-primary-hover text-sm transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};