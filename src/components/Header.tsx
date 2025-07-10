import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vault-background/95 backdrop-blur-md border-b border-vault-text/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-vault-text tracking-tight">
              PromptsVault.app
            </h1>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <Button 
              variant="vault" 
              size="sm"
              className="rounded-lg px-6 shadow-sm hover:shadow-md"
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