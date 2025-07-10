import securityMockup from "@/assets/security-mockup.png";
import organizationMockup from "@/assets/organization-mockup.png";
export const ContentSection = () => {
  return <section className="py-[160px] bg-vault-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[120px]">
          <h2 className="font-black uppercase tracking-tight leading-[0.95] text-vault-primary" style={{
          fontSize: 'clamp(4rem, 8vw, 7rem)',
          letterSpacing: '-0.06em'
        }}>
            Why Choose PromptsVault?
          </h2>
        </div>
        
        {/* First Content Block - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-[100px] items-center mb-[140px]">
          <div className="order-2 lg:order-1">
            <img src={securityMockup} alt="PromptsVault Security Dashboard" className="rounded-[5px] w-full max-w-[650px] shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-black text-white mb-6 leading-[1.05]" style={{
            fontSize: 'clamp(2.8rem, 4.5vw, 4rem)'
          }}>
              Beyond Simple Storage.
            </h3>
            <p style={{
            fontSize: 'clamp(1.35rem, 2vw, 1.8rem)'
          }} className="text-vault-text-light leading-[1.6] text-white text-lg">
              PromptsVault isn't just about saving your prompts; it's about protecting your intellectual property. Our custom-built encryption means your valuable AI creations are safe from prying eyes and accidental loss.
            </p>
          </div>
        </div>
        
        {/* Second Content Block - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-[100px] items-center">
          <div>
            <h3 className="font-black text-white mb-6 leading-[1.05]" style={{
            fontSize: 'clamp(2.8rem, 4.5vw, 4rem)'
          }}>
              Designed for Creators.
            </h3>
            <p style={{
            fontSize: 'clamp(1.35rem, 2vw, 1.8rem)'
          }} className="text-vault-text-light leading-[1.6] text-white text-lg">
              From advanced tagging to intuitive search, we built PromptsVault with the AI creator in mind. Spend less time searching and more time innovating.
            </p>
          </div>
          <div>
            <img src={organizationMockup} alt="PromptsVault Organization Interface" className="rounded-[5px] w-full max-w-[650px] shadow-2xl" />
          </div>
        </div>
      </div>
    </section>;
};