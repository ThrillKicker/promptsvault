import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-[120px] bg-vault-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-black uppercase text-vault-text mb-6 tracking-tight leading-[0.95]" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}>
          Ready to Secure Your AI Legacy?
        </h2>
        
        <p className="text-vault-text mb-[4.5rem] max-w-2xl mx-auto leading-[1.6]" style={{ marginTop: '2.5rem', fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)' }}>
          Join the growing community of AI innovators protecting their valuable prompts with PromptsVault.
        </p>
        
        <Button 
          variant="vault"
          className="px-[50px] py-5 h-auto hover:bg-black transition-all duration-300"
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