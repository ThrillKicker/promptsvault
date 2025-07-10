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
    <section id="pricing" className="py-24 bg-vault-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-vault-text mb-4 tracking-tight leading-[1.1]">
            Simple, Transparent Pricing.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`border-0 p-12 rounded-3xl ${
                plan.highlight 
                  ? 'bg-vault-primary text-white' 
                  : 'bg-vault-surface'
              }`}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className={`text-2xl md:text-3xl font-semibold mb-6 ${
                  plan.highlight ? 'text-white' : 'text-vault-text'
                }`}>
                  {plan.title}
                </CardTitle>
                <div className="mb-6">
                  <span className={`text-5xl md:text-6xl font-bold ${
                    plan.highlight ? 'text-white' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-base ml-2 ${
                    plan.highlight ? 'text-white/80' : 'text-vault-text-muted'
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
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
                  variant={plan.highlight ? "vault-inverse" : "vault-inverse"}
                  className="w-full py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
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