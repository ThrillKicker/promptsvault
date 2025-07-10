import organizationMockup from "@/assets/organization-mockup.png";
import securityMockup from "@/assets/security-mockup.png";

export const ContentSection = () => {
  return (
    <section className="py-[120px] bg-vault-secondary-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[80px]">
          <h2 className="font-bold leading-[1.2] text-vault-text" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}>
            Why Choose PromptsVault.app?
          </h2>
        </div>
        
        <div className="space-y-[100px] max-w-6xl mx-auto">
          {/* Security Block */}
          <div className="flex flex-col lg:flex-row items-center gap-[60px]">
            <div className="lg:w-1/2">
              <img 
                src={securityMockup}
                alt="PromptsVault Security Dashboard"
                className="w-full max-w-[500px] rounded-xl shadow-sm"
              />
            </div>
            <div className="lg:w-1/2 text-left">
              <h3 className="font-bold text-vault-primary mb-6 leading-[1.2]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Beyond Simple Storage.
              </h3>
              <p className="text-vault-text-muted leading-[1.6]" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}>
                PromptsVault.app isn't just about saving your prompts; it's about protecting your intellectual property. Our custom-built encryption means your valuable AI creations are safe from prying eyes and accidental loss.
              </p>
            </div>
          </div>
          
          {/* Organization Block */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-[60px]">
            <div className="lg:w-1/2">
              <img 
                src={organizationMockup}
                alt="PromptsVault Organization Interface"
                className="w-full max-w-[500px] rounded-xl shadow-sm"
              />
            </div>
            <div className="lg:w-1/2 text-left">
              <h3 className="font-bold text-vault-primary mb-6 leading-[1.2]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Designed for Creators.
              </h3>
              <p className="text-vault-text-muted leading-[1.6]" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}>
                From advanced tagging to intuitive search, we built PromptsVault.app with the AI creator in mind. Spend less time searching and more time innovating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};