import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Thank You Header Section */}
        <section className="bg-vault-primary py-[100px] pb-[60px] text-center">
          <div className="container mx-auto px-6">
            <h1 
              className="font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              Thank You!
            </h1>
            <p 
              className="text-vault-text-light mt-4"
              style={{ fontSize: '1.1rem' }}
            >
              Your message has been sent successfully. We'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-vault-background py-[80px] pb-[100px]">
          <div className="container mx-auto px-6 max-w-[600px] text-center">
            <div className="space-y-6">
              <p className="text-vault-text text-lg">
                We appreciate you reaching out to us. Our team will review your message and respond within 24 hours.
              </p>
              
              <div className="pt-4">
                <Link to="/">
                  <Button className="bg-vault-accent text-white hover:bg-vault-accent-hover rounded-lg px-10 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}