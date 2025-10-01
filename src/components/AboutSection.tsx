import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Pawsh Pet Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're passionate pet lovers dedicated to providing exceptional care for your furry family members. 
              With years of experience and genuine love for animals, we ensure your pets feel safe, loved, and happy.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-foreground">
                Our Story
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded with a simple mission: to provide pet owners with peace of mind knowing their beloved 
                  companions are in caring, experienced hands. We understand that pets are family, and they 
                  deserve nothing less than the best.
                </p>
                <p>
                  Our team consists of certified pet care professionals who are not just skilled, but genuinely 
                  passionate about animal welfare. We treat every pet as if they were our own, ensuring they 
                  receive the love, attention, and care they need.
                </p>
                <p>
                  With over 100 satisfied clients and countless happy tails, we've built our reputation on trust, 
                  reliability, and exceptional service. Your pet's happiness is our priority.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="shadow-elegant hover:shadow-warm transition-smooth">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">100+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover:shadow-warm transition-smooth">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-trust mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover:shadow-warm transition-smooth">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                  <div className="text-muted-foreground">Care Updates</div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover:shadow-warm transition-smooth">
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-trust mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">∞</div>
                  <div className="text-muted-foreground">Love & Care</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <Shield className="w-10 h-10 text-primary mx-auto" />
                <h4 className="text-xl font-semibold text-foreground">Safety First</h4>
                <p className="text-muted-foreground">
                  Your pet's safety and security are our top priorities in everything we do.
                </p>
              </div>
              <div className="space-y-3">
                <Heart className="w-10 h-10 text-trust mx-auto" />
                <h4 className="text-xl font-semibold text-foreground">Genuine Care</h4>
                <p className="text-muted-foreground">
                  We provide loving, personalized attention to each pet as if they were our own.
                </p>
              </div>
              <div className="space-y-3">
                <Users className="w-10 h-10 text-primary mx-auto" />
                <h4 className="text-xl font-semibold text-foreground">Trust & Communication</h4>
                <p className="text-muted-foreground">
                  We keep you informed with regular updates and maintain transparent communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;