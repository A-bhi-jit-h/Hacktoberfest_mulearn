import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl text-center space-y-8">
        <div>
          <h3 className="text-3xl font-bold mb-6 gradient-text">Ready to Get Started?</h3>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://airtable.com/appopz4GXqkTszuJ7/pagFV1XnMmmI8Zb4l/form" target="_blank" rel="noopener noreferrer">
              Register Now
              <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
