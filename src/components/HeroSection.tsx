import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/FpxRhCPcM-4?autoplay=1&mute=1&loop=1&playlist=FpxRhCPcM-4&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 tracking-tight">
            Your AI Prompts, Securely Vaulted.
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed">
            Your creative assets, locked away and always accessible.
          </p>
          
          <Button 
            variant="vault"
            className="text-lg px-10 py-4 h-auto font-semibold rounded-full hover:scale-105 transition-all duration-300"
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