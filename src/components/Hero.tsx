import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hacktoberfest.jpg";
import mulearnLogo from "@/assets/mulearn-logo.png";
import hfLogo from "@/assets/HF-logo.png"; // Hacktoberfest logo

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hacktoberfest 2025"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Logos at top center with sideways movement */}
          <div className="flex justify-center items-center gap-6 mb-6 relative">
            <a href="https://hacktoberfest.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={hfLogo}
                alt="Hacktoberfest Logo"
                className="h-16 md:h-20 w-auto object-contain animate-fade-in relative -left-6"
              />
            </a>
            <a href="https://mulearn.org/" target="_blank" rel="noopener noreferrer">
              <img
                src={mulearnLogo}
                alt="µLearn Logo"
                className="h-10 md:h-14 w-auto object-contain animate-fade-in relative left-6 top-2" // ✅ moved down
              />
            </a>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 animate-fade-in">
            Hacktoberfest 2025 
          </h1>
          <p className="text-xl md:text-3xl text-foreground/90 font-light mb-8">
            Code. Contribute. Celebrate Open Source.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 min-w-[200px]"
              asChild
            >
              <a
                href="https://airtable.com/appopz4GXqkTszuJ7/pagFV1XnMmmI8Zb4l/form"
                target="_blank"
                rel="noopener noreferrer"
              >
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
