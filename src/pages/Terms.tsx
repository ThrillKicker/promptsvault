import { Header } from "@/components/Header";

export default function Terms() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Terms Header Section */}
        <section className="bg-vault-primary py-[100px] pb-[60px] text-center">
          <div className="container mx-auto px-6">
            <h1 
              className="font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              Terms of Service
            </h1>
            <p 
              className="text-vault-text-light mt-4"
              style={{ fontSize: '1.1rem' }}
            >
              Last Updated: July 10, 2025
            </p>
          </div>
        </section>

        {/* Terms Content Section */}
        <section className="bg-vault-background py-[80px] pb-[100px]">
          <div className="container mx-auto px-6 max-w-[800px]">
            <div className="space-y-[50px]">
              {/* Block 1 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  1. Acceptance of Terms
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  By accessing or using PromptsVault, you agree to be bound by these Terms of Service. If you do not agree, you may not use the service.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  2. Use of Service
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  PromptsVault provides a secure platform for storing and managing AI prompts. You agree to use the service only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account information.
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  3. Intellectual Property
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  All content and materials available on PromptsVault, including text, graphics, logos, and software, are the property of PromptsVault or its licensors and are protected by intellectual property laws. Your prompts remain your intellectual property.
                </p>
              </div>

              {/* Block 4 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  4. Disclaimers
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  PromptsVault is provided 'as is' without any warranties, express or implied. We do not guarantee that the service will be uninterrupted, error-free, or completely secure. While we strive for high security, you acknowledge that no system is entirely impenetrable.
                </p>
              </div>

              {/* Block 5 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  5. Limitation of Liability
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  To the fullest extent permitted by law, PromptsVault shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the service; (b) any conduct or content of any third party on the service; or (c) unauthorized access, use, or alteration of your transmissions or content.
                </p>
              </div>

              {/* Block 6 */}
              <div>
                <h2 
                  className="font-bold text-vault-text mb-5 leading-[1.2]"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  6. Governing Law
                </h2>
                <p 
                  className="text-vault-text-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
                >
                  These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction Here], without regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}