import securityMockup from "@/assets/security-mockup.png";
import organizationMockup from "@/assets/organization-mockup.png";

export const ContentSection = () => {
  return (
    <section className="py-32 bg-vault-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-vault-text tracking-tight leading-[1.1]">
            Why Choose PromptsVault?
          </h2>
        </div>
        
        {/* First Content Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <img 
              src={securityMockup}
              alt="PromptsVault Security Dashboard"
              className="rounded-2xl w-full max-w-lg shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vault-text mb-6 leading-[1.1]">
              Beyond Simple Storage.
            </h3>
            <p className="text-lg md:text-xl text-vault-text-muted leading-relaxed">
              PromptsVault isn't just about saving your prompts; it's about protecting your intellectual property. Our custom-built encryption means your valuable AI creations are safe from prying eyes and accidental loss.
            </p>
          </div>
        </div>
        
        {/* Second Content Block - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-vault-text mb-6 leading-[1.1]">
              Designed for Creators.
            </h3>
            <p className="text-lg md:text-xl text-vault-text-muted leading-relaxed">
              From advanced tagging to intuitive search, we built PromptsVault with the AI creator in mind. Spend less time searching and more time innovating.
            </p>
          </div>
          <div>
            <img 
              src={organizationMockup}
              alt="PromptsVault Organization Interface"
              className="rounded-2xl w-full max-w-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};