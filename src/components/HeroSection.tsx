import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-dog.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Happy dog in cozy home setting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Loving Care When
            <span className="block text-primary-glow">You're Not There</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Professional pet care services you can trust. Your furry family deserves the best when you're away.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
            <div className="flex items-center gap-2 text-lg">
              <Heart className="w-6 h-6 text-primary-glow" />
              <span>100+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Shield className="w-6 h-6 text-primary-glow" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Clock className="w-6 h-6 text-primary-glow" />
              <span>24/7 Updates</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-white px-8 py-4 text-lg shadow-warm transition-spring"
            >
              
              <a
                    href="https://api.whatsapp.com/send?phone=919000047480&text=Hey%2C%20Can%20I%20have%20more%20info%20on%20this%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Book Pet Care
              </a>
            </Button>
    
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <div className="w-1 h-12 bg-white/30 rounded-full">
          <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;