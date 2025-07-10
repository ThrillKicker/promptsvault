import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    title: "Monthly",
    price: "$1.99",
    period: "per month",
    features: [
      "Access to your secure vault",
      "Unlimited prompt storage",
      "Cross-device sync",
      "Basic sharing features"
    ],
    highlight: false
  },
  {
    title: "Annual",
    price: "$19.99",
    period: "per year (save $3.89!)",
    features: [
      "All Monthly features, plus:",
      "Priority customer support",
      "Early access to new features",
      "Best value"
    ],
    highlight: true
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-[140px] bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[120px]">
          <h2 className="font-black uppercase tracking-tight leading-[0.95] text-vault-text" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', letterSpacing: '-0.06em' }}>
            Simple, <span className="text-vault-primary">Transparent</span> Pricing.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-[60px] max-w-[1100px] mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`border-0 p-[70px] rounded-[10px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] ${
                plan.highlight 
                  ? 'bg-vault-surface-elevated text-white' 
                  : 'bg-vault-surface'
              }`}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className={`font-bold uppercase mb-6 ${
                  plan.highlight ? 'text-white' : 'text-vault-text'
                }`} style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)' }}>
                  {plan.title}
                </CardTitle>
                <div className="mb-6">
                  <span className={`font-bold ${
                    plan.highlight ? 'text-vault-primary' : 'text-vault-text'
                  }`} style={{ fontSize: 'clamp(5rem, 9vw, 7.5rem)' }}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${
                    plan.highlight ? 'text-white/80' : 'text-vault-text-muted'
                  }`} style={{ fontSize: 'clamp(1.25rem, 1.6vw, 1.4rem)' }}>
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-4 mb-8 mt-[40px]">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 py-[15px]">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? 'text-vault-primary' : 'text-vault-primary'
                      }`} />
                      <span className={`text-base ${
                        plan.highlight ? 'text-white/90' : 'text-vault-text-muted'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="vault-inverse"
                  className="w-full py-5 px-[50px] rounded-[5px] font-bold hover:bg-vault-primary-hover transition-all duration-300"
                  asChild
                >
                  <a href="https://vault.promptsvault.app" target="_blank" rel="noopener noreferrer">
                    Create My Vault
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};