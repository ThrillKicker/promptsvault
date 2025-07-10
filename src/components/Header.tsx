import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vault-background/95 backdrop-blur-md border-b border-vault-text/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-vault-text tracking-tight">
              PromptsVault
            </h1>
          </div>
          
          {/* Navigation 
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-vault-text/90 hover:text-vault-text text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-vault-text/90 hover:text-vault-text text-sm font-medium transition-colors">
              Pricing
            </a>
          </nav>
          
          End Navigation*/}
          
          {/* CTA Button */}
          <div className="flex items-center">
            <Button 
              variant="vault-inverse" 
              size="sm"
              className="rounded-[5px] px-6"
              asChild
            >
              <a href="https://vault.promptsvault.app">
                Create My Vault
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};