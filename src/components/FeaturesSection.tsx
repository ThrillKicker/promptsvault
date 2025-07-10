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
    description: "Collaborate confidently. Share prompts securely with colleagues or friends, with full control."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Soon: Get suggestions and refine your prompts with integrated AI analysis and optimization."
  }
];
export const FeaturesSection = () => {
  return <section id="features" className="py-[100px] bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[80px] max-w-[1200px] mx-auto">
          <h2 className="font-bold leading-[1.2] text-vault-text" style={{
          fontSize: 'clamp(2.5rem, 4.5vw, 4rem)'
        }}>Unlock Your Prompt Potential with PromptsVault.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 max-w-[1200px] mx-auto">
          {features.map((feature, index) => <div key={index} className="text-center bg-vault-surface rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="mb-6 flex justify-center">
                <feature.icon className="w-14 h-14 text-vault-primary" />
              </div>
              
              <h3 className="font-bold text-vault-text mb-4 leading-[1.1]" style={{
            fontSize: 'clamp(1.3rem, 2vw, 1.8rem)'
          }}>
                {feature.title}
              </h3>
              
              <p className="text-vault-text-muted leading-[1.6]" style={{
            fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)'
          }}>
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};