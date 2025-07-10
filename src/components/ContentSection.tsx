import securityMockup from "@/assets/security-mockup.png";
import organizationMockup from "@/assets/organization-mockup.png";

export const ContentSection = () => {
  return (
    <section className="py-[140px] bg-vault-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[100px]">
          <h2 className="font-black uppercase tracking-tight leading-[1.05] text-vault-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Why Choose PromptsVault?
          </h2>
        </div>
        
        {/* First Content Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-[120px]">
          <div className="order-2 lg:order-1">
            <img 
              src={securityMockup}
              alt="PromptsVault Security Dashboard"
              className="rounded-[18px] w-full max-w-[550px] shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-bold text-vault-text mb-6 leading-[1.05]" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)' }}>
              Beyond Simple Storage.
            </h3>
            <p className="text-vault-text-muted leading-[1.5]" style={{ fontSize: 'clamp(1.15rem, 1.6vw, 1.4rem)' }}>
              PromptsVault isn't just about saving your prompts; it's about protecting your intellectual property. Our custom-built encryption means your valuable AI creations are safe from prying eyes and accidental loss.
            </p>
          </div>
        </div>
        
        {/* Second Content Block - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="font-bold text-vault-text mb-6 leading-[1.05]" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)' }}>
              Designed for Creators.
            </h3>
            <p className="text-vault-text-muted leading-[1.5]" style={{ fontSize: 'clamp(1.15rem, 1.6vw, 1.4rem)' }}>
              From advanced tagging to intuitive search, we built PromptsVault with the AI creator in mind. Spend less time searching and more time innovating.
            </p>
          </div>
          <div>
            <img 
              src={organizationMockup}
              alt="PromptsVault Organization Interface"
              className="rounded-[18px] w-full max-w-[550px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};