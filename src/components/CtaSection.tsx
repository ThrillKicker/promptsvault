import { Button } from "@/components/ui/button";
export const CtaSection = () => {
  return <section className="py-[120px] bg-vault-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-bold text-white mb-6 leading-[1.2]" style={{
        fontSize: 'clamp(2.8rem, 5vw, 4.5rem)'
      }}>
          Ready to Secure Your AI Legacy?
        </h2>
        
        <p className="text-white/90 mb-14 max-w-2xl mx-auto leading-[1.6]" style={{
        marginTop: '1.8rem',
        fontSize: 'clamp(1.15rem, 1.5vw, 1.35rem)'
      }}>Join the growing community of AI innovators protecting their valuable prompts with PromptsVault.</p>
        
        <Button variant="vault" className="px-12 py-5 h-auto text-lg shadow-md hover:shadow-lg" asChild>
          <a href="https://vault.promptsvault.app" target="_blank" rel="noopener noreferrer">
            Create My Vault
          </a>
        </Button>
      </div>
    </section>;
};