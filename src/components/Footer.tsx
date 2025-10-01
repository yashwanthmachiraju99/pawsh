import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ... your top sections ... */}

          {/* Social Media & Newsletter */}
          <div className="border-t border-background/20 pt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">Stay Connected</h4>
                <p className="text-sm text-background/80">Follow us for pet care tips and adorable photos!</p>
              </div>

              <div className="flex gap-3">
                {/* WhatsApp Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-background/20 text-background hover:bg-green-500 hover:border-green-500 text-zinc-950"
                  asChild
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=919000047480&text=Hey%2C%20Can%20I%20have%20more%20info%20on%20this%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* ... bottom bar & trust badge ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
