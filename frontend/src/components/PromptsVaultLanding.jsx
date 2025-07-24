import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Search, 
  Share2, 
  Sparkles, 
  Check, 
  Star,
  Users,
  Globe,
  ArrowRight,
  Menu,
  X,
  Play
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

// Mock data for the landing page
const mockData = {
  hero: {
    title: "Your AI Prompts Securely Vaulted",
    subtitle: "The password manager for your most valuable AI prompts. Organize, secure, and access your creative assets anywhere.",
    ctaButton: "Access Vault",
    learnMore: "Learn More"
  },
  features: [
    {
      icon: Globe,
      title: "Always Accessible",
      description: "Access your vault from any device, anywhere. Your prompts are synced and ready when inspiration strikes."
    },
    {
      icon: Search,
      title: "Organize & Discover",
      description: "Categorize, tag, and search your prompts with ease. Never lose a brilliant idea again."
    },
    {
      icon: Share2,
      title: "Secure Sharing",
      description: "Collaborate confidently. Share prompts securely with colleagues or friends, with full control."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed. Search thousands of prompts instantly and get back to creating."
    }
  ],
  pricing: [
    {
      name: "Monthly",
      price: "$1.99",
      period: "per month",
      description: "Perfect for getting started",
      features: [
        "Access to your secure vault",
        "Unlimited prompt storage",
        "Cross-device sync",
        "Basic sharing features",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Annual",
      price: "$19.99",
      period: "per year",
      originalPrice: "$23.88",
      savings: "Save $3.89!",
      description: "Best value for serious creators",
      features: [
        "All Monthly features, plus:",
        "Priority customer support",
        "Early access to new features",
        "Advanced sharing controls",
        "AI insights (coming soon)"
      ],
      popular: true
    }
  ],
  testimonials: [
    {
      name: "Sarah Chen",
      role: "AI Content Creator",
      company: "TechFlow Media",
      content: "PromptsVault has completely transformed how I manage my AI workflows. I never lose track of my best prompts anymore.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Design Studio X",
      content: "The security and organization features are exactly what our team needed. Finally, a tool built for AI creators.",
      rating: 5
    },
    {
      name: "Dr. Jennifer Walsh",
      role: "Research Scientist",
      company: "AI Labs Inc",
      content: "The categorization system is brilliant. I can find any prompt in seconds, which has boosted my productivity immensely.",
      rating: 5
    }
  ],
  trustedBy: [
    "Company", "Startup", "Agency", "Creator", "Team"
  ]
};

const PromptsVaultLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className={`header-nav ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo">PromptsVault</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex nav-menu">
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">Reviews</button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="nav-link">Log In</button>
            <Button className="btn-primary">Access Vault</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="p-4 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block nav-link">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="block nav-link">Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className="block nav-link">Reviews</button>
              <hr className="border-gray-200" />
              <button className="block nav-link">Log In</button>
              <Button className="btn-primary w-full">Access Vault</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content animate-fade-in-up">
          <Badge className="mb-6 bg-teal-100 text-teal-700 border-teal-200 px-4 py-2">
            🔒 Secure • Store • Prompt
          </Badge>
          
          <h1 className="heading-hero mb-6">
            {mockData.hero.title}
          </h1>
          
          <p className="hero-subtitle body-large">
            {mockData.hero.subtitle}
          </p>
          
          <div className="hero-buttons">
            <Button className="btn-primary">
              {mockData.hero.ctaButton}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button className="btn-secondary">
              <Play className="mr-2" size={18} />
              {mockData.hero.learnMore}
            </Button>
          </div>

          {/* Trusted By Section */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Trusted by</p>
            <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
              {mockData.trustedBy.map((company, index) => (
                <div key={index} className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Everything You Need to Secure Your AI Arsenal</h2>
            <p className="body-large max-w-3xl mx-auto">
              PromptsVault isn't just about saving your prompts; it's about protecting your intellectual property and supercharging your creative workflow.
            </p>
          </div>
          
          <div className="features-grid">
            {mockData.features.map((feature, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <div className="mb-4">
                    <feature.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <CardTitle className="heading-3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="body-medium">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Simple, Transparent Pricing</h2>
            <p className="body-large">
              Choose the plan that fits your creative workflow. No hidden fees, cancel anytime.
            </p>
          </div>
          
          <div className="pricing-grid">
            {mockData.pricing.map((plan, index) => (
              <Card key={index} className={`pricing-card ${plan.popular ? 'featured' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="heading-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-teal-600">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500">
                      <span className="line-through">{plan.originalPrice}</span>
                      <span className="text-green-600 ml-2">{plan.savings}</span>
                    </div>
                  )}
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="body-small">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full mt-6 ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Loved by AI Creators Worldwide</h2>
            <p className="body-large">
              Join thousands of creators who trust PromptsVault with their most valuable AI assets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="body-medium italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.role}</div>
                      <div className="text-xs text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="dark-section section-padding">
        <div className="container text-center">
          <h2 className="heading-1 mb-4">Ready to Secure Your AI Legacy?</h2>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            Join the growing community of AI innovators protecting their valuable prompts with PromptsVault. Start your secure journey today.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="btn-primary">
              Access Vault
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button className="btn-secondary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="logo">PromptsVault</div>
            <div className="text-sm text-gray-500">
              © 2024 PromptsVault. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-teal-600">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-teal-600">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-teal-600">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PromptsVaultLanding;