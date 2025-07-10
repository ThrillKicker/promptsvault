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
    <section id="features" className="py-[140px] bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[120px] max-w-[1100px] mx-auto">
          <h2 className="font-black uppercase tracking-tight leading-[0.95] text-vault-text whitespace-pre-line" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', letterSpacing: '-0.06em' }}>
            Unlock Your <span className="text-vault-primary">Prompt Potential</span>{'\n'}With PromptsVault.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-[100px] max-w-[1100px] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-[40px] flex justify-center">
                <feature.icon className="w-[90px] h-[90px] text-vault-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="font-black text-vault-text mb-[30px] leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', letterSpacing: '-0.05em' }}>
                {feature.title}
              </h3>
              
              <p className="text-vault-text-muted leading-[1.6]" style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
