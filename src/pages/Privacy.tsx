import { Header } from "@/components/Header";

export default function Privacy() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Privacy Header Section */}
        <section className="bg-vault-primary py-[100px] pb-[60px] text-center">
          <div className="container mx-auto px-6">
            <h1 
              className="font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              Privacy Policy
            </h1>
            <p 
              className="text-vault-text-light mt-4"
              style={{ fontSize: '1.1rem' }}
            >
              Last Updated: July 10, 2025
            </p>
          </div>
        </section>

        {/* Privacy Content Section */}
        <section className="bg-vault-background py-[80px] pb-[100px]">
          <div className="container mx-auto px-6 max-w-[800px]">
            <div className="space-y-[50px]">
              {/* Block 1 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  1. Information We Collect
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  We collect minimal personal information necessary to provide and improve PromptsVault. This may include your email address for account creation and communication, and encrypted prompt data which remains solely under your control. We do not collect sensitive personal information beyond what is required for service functionality.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  2. How We Use Your Information
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  Your information is used strictly for operating, maintaining, and providing the features and functionality of PromptsVault. This includes managing your account, encrypting and storing your prompts, and communicating with you about service updates or support. We do not sell or share your personal data with third parties for marketing purposes.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  3. Data Security
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  We are committed to protecting your data. PromptsVault employs industry-standard security measures, including end-to-end encryption for your prompt data, to safeguard your information from unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  4. Your Rights
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  You have the right to access, update, or delete your personal information and prompt data stored with PromptsVault at any time through your account settings. If you have any questions or require assistance, please contact us.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}