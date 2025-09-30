import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuickStart from "@/components/QuickStart";
import Partners from "@/components/Partners";
import Checklist from "@/components/Checklist";
import Support from "@/components/Support";
import FinalNote from "@/components/FinalNote";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <QuickStart />
      <Partners />
      <Checklist />
      <Support />
      <FinalNote />
      <Footer />
    </div>
  );
};

export default Index;
