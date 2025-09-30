import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import mulearnLogo from "@/assets/mulearn-logo.png";
import mulearnSctceLogo from "@/assets/mulearn-sctce-logo.png";
import inovusLogo from "@/assets/inovus-logo.png";
import purpleMovementLogo from "@/assets/purple-movement-logo.png";

const partners = [
  {
    name: "µLearn Foundation",
    logo: mulearnLogo,
    links: [
      { icon: FaLinkedin, url: "https://www.linkedin.com/company/mulearn/", label: "LinkedIn" },
      { icon: FaInstagram, url: "https://www.instagram.com/mulearn.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    ],
  },
  {
    name: "µLearn SCTCE",
    logo: mulearnSctceLogo,
    links: [{ icon: FaInstagram, url: "https://www.instagram.com/sctce_mulearn?igsh=d2x4empqc2RudXE=", label: "Instagram" }],
  },
  {
    name: "Inovus Labs",
    logo: inovusLogo,
    links: [
      { icon: FaLinkedin, url: "https://www.linkedin.com/company/inovuslabs", label: "LinkedIn" },
      { icon: FaInstagram, url: "https://www.instagram.com/inovuslabs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    ],
  },
  {
    name: "Purple Movement",
    logo: purpleMovementLogo,
    links: [{ icon: FaInstagram, url: "https://www.instagram.com/tpm.live?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" }],
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Community Partners</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-center"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="h-16 w-auto object-contain" />
                </div>
                <CardTitle className="text-lg">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-4">
                  {partner.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${partner.name} ${link.label}`}
                    >
                      <link.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
