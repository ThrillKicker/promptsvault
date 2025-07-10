export const Footer = () => {
  return (
    <footer className="py-[100px] bg-vault-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-[#B0B0B0]" style={{ fontSize: '1rem' }}>
            © 2025 PromptsVault. All rights reserved.
          </p>
          
          <div className="flex space-x-10">
            <a 
              href="/privacy" 
              className="text-vault-primary hover:text-vault-primary-hover transition-colors" 
              style={{ fontSize: '1rem' }}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-vault-primary hover:text-vault-primary-hover transition-colors"
              style={{ fontSize: '1rem' }}
            >
              Terms of Service
            </a>
            <a 
              href="/contact" 
              className="text-vault-primary hover:text-vault-primary-hover transition-colors"
              style={{ fontSize: '1rem' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};