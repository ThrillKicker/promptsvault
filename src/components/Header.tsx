import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-white tracking-tight">
              PromptsVault
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Pricing
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <Button 
              variant="vault" 
              size="sm"
              className="rounded-full px-6"
              asChild
            >
              <a href="https://vault.promptsvault.app">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};