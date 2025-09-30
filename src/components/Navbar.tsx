import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">Hacktoberfest 2025</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("quickstart")} className="text-foreground/80 hover:text-primary transition-colors">
              Quick Start
            </button>
            <button onClick={() => scrollToSection("partners")} className="text-foreground/80 hover:text-primary transition-colors">
              Partners
            </button>
            <button onClick={() => scrollToSection("support")} className="text-foreground/80 hover:text-primary transition-colors">
              Support
            </button>
            <Button variant="hero" size="lg" asChild>
              <a href="https://airtable.com/appopz4GXqkTszuJ7/pagFV1XnMmmI8Zb4l/form" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("quickstart")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors"
            >
              Quick Start
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors"
            >
              Support
            </button>
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="https://airtable.com/your-form-link" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
