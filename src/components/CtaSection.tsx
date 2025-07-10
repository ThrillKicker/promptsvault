import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-vault-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Ready to Secure Your AI Legacy?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the growing community of AI innovators protecting their valuable prompts with PromptsVault.
        </p>
        
        <Button 
          variant="vault-inverse"
          className="text-lg px-10 py-4 h-auto font-semibold rounded-full hover:scale-105 transition-all duration-300"
          asChild
        >
          <a href="https://vault.promptsvault.app" target="_blank" rel="noopener noreferrer">
            Create My Vault
          </a>
        </Button>
      </div>
    </section>
  );
};