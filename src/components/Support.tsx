import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Support = () => {
  return (
    <section id="support" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Need Help?</h2>
        <p className="text-lg text-muted-foreground mb-8">Join our WhatsApp support group for assistance and updates</p>

        <Button variant="hero" size="lg" className="text-lg" asChild>
          <a href="https://chat.whatsapp.com/E17rbhEcqjSCsugvvrWFXU" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2" />
            Join WhatsApp Group
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Support;
