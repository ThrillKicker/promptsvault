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
    <section id="pricing" className="py-[120px] bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[100px]">
          <h2 className="font-black uppercase tracking-tight leading-[1.05] text-vault-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Simple, Transparent Pricing.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-[50px] max-w-[1000px] mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`border-0 p-[60px] rounded-[20px] ${
                plan.highlight 
                  ? 'bg-vault-primary text-white' 
                  : 'bg-vault-surface'
              }`}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className={`font-semibold mb-6 ${
                  plan.highlight ? 'text-white' : 'text-vault-text'
                }`} style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>
                  {plan.title}
                </CardTitle>
                <div className="mb-6">
                  <span className={`font-bold ${
                    plan.highlight ? 'text-white' : 'text-white'
                  }`} style={{ fontSize: 'clamp(4rem, 7vw, 5.5rem)' }}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${
                    plan.highlight ? 'text-white/80' : 'text-vault-text-muted'
                  }`} style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)' }}>
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-4 mb-8 mt-[30px]">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 py-[10px]">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? 'text-white' : 'text-vault-primary'
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
                  className="w-full py-4 px-10 rounded-full font-semibold hover:scale-[1.03] transition-all duration-300"
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