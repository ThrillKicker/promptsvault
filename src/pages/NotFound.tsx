import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function NotFound() {
  return <>
      <Header />
      
      <main className="pt-16">
        {/* 404 Header Section */}
        

        {/* 404 Content Section */}
        <section className="bg-vault-background py-[80px] pb-[100px]">
          <div className="container mx-auto px-6 max-w-[800px] text-center">
            {/* Large 404 Text */}
            <div className="mb-8">
              <h2 className="font-black leading-[1] mb-8" style={{
              fontSize: 'clamp(6rem, 15vw, 10rem)',
              color: '#CCCCCC'
            }}>
                404
              </h2>
              <p className="text-vault-text-muted leading-[1.6] mb-8" style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)'
            }}>
                You've stumbled upon a locked section of the vault. This page can't be accessed from here.
              </p>
            </div>

            {/* Subheadline */}
            <h3 className="font-bold text-vault-primary mb-10 leading-[1.2]" style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
          }}>
              Let's get you back on track.
            </h3>

            {/* CTA Button */}
            <Button asChild className="bg-vault-accent text-white hover:bg-vault-accent-hover rounded-lg px-10 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link to="/">
                Go to Homepage
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
    </>;
}