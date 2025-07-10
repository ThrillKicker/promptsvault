import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ContentSection } from "@/components/ContentSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-vault-background">
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
