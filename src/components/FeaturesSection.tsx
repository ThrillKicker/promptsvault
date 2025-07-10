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
    <section id="features" className="py-[120px] bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[100px] max-w-[900px] mx-auto">
          <h2 className="font-black uppercase tracking-tight leading-[1.05] text-vault-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Unlock Your Prompt Potential with PromptsVault.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-20 max-w-[900px] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-[25px] flex justify-center">
                <feature.icon className="w-[70px] h-[70px] text-vault-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="font-bold text-vault-text mb-5" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                {feature.title}
              </h3>
              
              <p className="text-vault-text-muted leading-[1.5]" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
