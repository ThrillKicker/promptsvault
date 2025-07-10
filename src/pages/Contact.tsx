import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Hide any existing messages
    const successMsg = document.getElementById('contact-success-message');
    const errorMsg = document.getElementById('contact-error-message');
    if (successMsg) successMsg.classList.add('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');
    
    try {
      const formData = new FormData(e.currentTarget);
      
      // Simulate AJAX form submission
      const response = await fetch('https://YOUR_WORKER_SUBDOMAIN_URL_HERE', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        // Show success message
        if (successMsg) successMsg.classList.remove('hidden');
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        // Show error message
        if (errorMsg) errorMsg.classList.remove('hidden');
      }
    } catch (error) {
      // Show error message on network failure
      if (errorMsg) errorMsg.classList.remove('hidden');
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Contact Header Section */}
        <section className="bg-vault-primary py-[100px] pb-[60px] text-center">
          <div className="container mx-auto px-6">
            <h1 
              className="font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              Contact Us
            </h1>
            <p 
              className="text-vault-text-light mt-4"
              style={{ fontSize: '1.1rem' }}
            >
              We're here to help! Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-vault-background py-[80px] pb-[100px]">
          <div className="container mx-auto px-6 max-w-[600px]">
            {/* Success Message */}
            <div 
              id="contact-success-message"
              className="bg-[#D4EDDA] text-[#155724] p-[15px] rounded-[5px] mb-5 hidden"
            >
              Thank you! Your message has been sent successfully. We'll be in touch soon.
            </div>

            {/* Error Message */}
            <div 
              id="contact-error-message"
              className="bg-[#F8D7DA] text-[#721C24] p-[15px] rounded-[5px] mb-5 hidden"
            >
              Oops! There was an error sending your message. Please try again later.
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label 
                  htmlFor="name" 
                  className="font-bold text-vault-text"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="border-input focus:border-vault-accent rounded-[5px] px-3 py-3"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label 
                  htmlFor="email" 
                  className="font-bold text-vault-text"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@example.com"
                  required
                  className="border-input focus:border-vault-accent rounded-[5px] px-3 py-3"
                />
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <Label 
                  htmlFor="subject" 
                  className="font-bold text-vault-text"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject of your message"
                  className="border-input focus:border-vault-accent rounded-[5px] px-3 py-3"
                />
              </div>

              {/* Comment Field */}
              <div className="space-y-2">
                <Label 
                  htmlFor="comment" 
                  className="font-bold text-vault-text"
                >
                  Comment *
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="border-input focus:border-vault-accent rounded-[5px] px-3 py-3 resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-vault-accent text-white hover:bg-vault-accent-hover rounded-lg px-10 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}