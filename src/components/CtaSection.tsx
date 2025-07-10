import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-[100px] bg-vault-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-black uppercase text-white mb-6 tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
          Ready to Secure Your AI Legacy?
        </h2>
        
        <p className="text-white/90 mb-14 max-w-2xl mx-auto leading-relaxed" style={{ marginTop: '1.8rem', marginBottom: '3.5rem' }}>
          Join the growing community of AI innovators protecting their valuable prompts with PromptsVault.
        </p>
        
        <Button 
          variant="vault-inverse"
          className="px-10 py-4 h-auto font-semibold rounded-full hover:scale-[1.03] transition-all duration-300"
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