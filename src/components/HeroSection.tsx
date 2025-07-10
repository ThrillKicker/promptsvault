import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-16">
      {/* YouTube Video Background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/FpxRhCPcM-4?autoplay=1&mute=1&loop=1&playlist=FpxRhCPcM-4&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="absolute inset-0 bg-black/85" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-16 py-12 text-center text-white">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="font-black uppercase tracking-tighter leading-[0.9] mb-8 whitespace-pre-line" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', letterSpacing: '-0.07em' }}>
            Your AI Prompts,{'\n'}Securely Vaulted.
          </h1>
          
          <p className="text-[#E0E0E0] mb-12 leading-relaxed" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', marginTop: '2rem' }}>
            Your creative assets, locked away and always accessible.
          </p>
          
          <Button 
            variant="vault"
            className="px-12 py-4 h-auto hover:bg-black transition-all duration-300 text-base"
            asChild
          >
            <a href="https://vault.promptsvault.app" target="_blank" rel="noopener noreferrer">
              Create My Vault
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};