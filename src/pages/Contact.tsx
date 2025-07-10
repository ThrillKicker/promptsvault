import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
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
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <Label htmlFor="name" className="font-bold text-vault-text">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="mt-2 rounded-lg border-vault-text/20 focus:border-vault-accent transition-colors"
                  style={{ padding: '12px' }}
                />
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="font-bold text-vault-text">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@example.com"
                  required
                  className="mt-2 rounded-lg border-vault-text/20 focus:border-vault-accent transition-colors"
                  style={{ padding: '12px' }}
                />
              </div>

              {/* Comment Field */}
              <div>
                <Label htmlFor="comment" className="font-bold text-vault-text">
                  Comment
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="mt-2 rounded-lg border-vault-text/20 focus:border-vault-accent transition-colors resize-y"
                  style={{ padding: '12px' }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="vault"
                  className="w-full rounded-lg px-10 py-4 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}