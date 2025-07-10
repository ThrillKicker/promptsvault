export const Footer = () => {
  return (
    <footer className="py-[80px] bg-vault-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-vault-text-footer" style={{ fontSize: '0.95rem' }}>
            © 2025 PromptsVault.app. All rights reserved.
          </p>
          
          <div className="flex space-x-8">
            <a 
              href="/privacy" 
              className="text-vault-accent hover:text-vault-accent-hover transition-colors" 
              style={{ fontSize: '0.95rem' }}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-vault-accent hover:text-vault-accent-hover transition-colors"
              style={{ fontSize: '0.95rem' }}
            >
              Terms of Service
            </a>
            <a 
              href="/contact" 
              className="text-vault-accent hover:text-vault-accent-hover transition-colors"
              style={{ fontSize: '0.95rem' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};