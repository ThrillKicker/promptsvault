import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-16 bg-vault-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to Secure Your{" "}
          <span className="text-blue-200">
            AI Legacy
          </span>
          ?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join the growing community of AI innovators protecting their valuable prompts with PromptsVault.app.
        </p>
        
        <Button 
          variant="vault-inverse"
          size="lg"
          className="text-lg px-10 py-4 h-auto font-semibold"
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