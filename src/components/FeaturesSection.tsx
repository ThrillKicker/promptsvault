import { Cloud, Star, Share, Sparkles } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Always Accessible",
    description: "Access your vault from any device, anywhere. Your prompts are synced and ready when inspiration strikes."
  },
  {
    icon: Star,
    title: "Organize & Discover",
    description: "Categorize, tag, and search your prompts with ease. Never lose a brilliant idea again."
  },
  {
    icon: Share,
    title: "Secure Sharing",
    description: "Soon: Collaborate confidently. Share prompts securely with colleagues or friends, with full control."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Soon: Get suggestions and refine your prompts with integrated AI analysis and optimization."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-vault-text mb-4 tracking-tight leading-[1.1]">
            Unlock Your Prompt Potential with PromptsVault.app.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <feature.icon className="w-16 h-16 text-vault-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-vault-text mb-4">
                {feature.title}
              </h3>
              
              <p className="text-vault-text-muted leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
