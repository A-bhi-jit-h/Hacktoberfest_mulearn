import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hacktoberfest.jpg";
import mulearnLogo from "@/assets/mulearn-hero-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hacktoberfest 2025" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img src={mulearnLogo} alt="µLearn Logo" className="h-24 md:h-32 w-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 animate-fade-in">
            Hacktoberfest 2025 with µLearn
          </h1>
          <p className="text-xl md:text-3xl text-foreground/90 font-light mb-8">
            Code. Contribute. Celebrate Open Source.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 min-w-[200px]" asChild>
              <a href="https://airtable.com/your-form-link" target="_blank" rel="noopener noreferrer">
                Register Now
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
