import { Shield, Cloud, Star, Share, GitBranch, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Unrivaled Security",
    description: "Your prompts are encrypted end-to-end, protected by bank-grade security protocols. Only you hold the key."
  },
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
    icon: GitBranch,
    title: "Version Control",
    description: "Track changes and iterate on your prompts. See the evolution of your AI creations."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Soon: Get suggestions and refine your prompts with integrated AI analysis and optimization."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-vault-text mb-4 tracking-tight">
            Unlock Your Prompt Potential with PromptsVault.app.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-vault-surface p-8 rounded-xl border border-white/10 hover:border-vault-primary/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <feature.icon className="w-12 h-12 text-vault-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-vault-text mb-4">
                {feature.title}
              </h3>
              
              <p className="text-vault-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};