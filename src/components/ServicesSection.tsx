import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Heart, Clock, Shield, Camera, MapPin } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Home Boarding",
      description: "Your pet stays in our loving home environment, receiving personalized attention and care in a comfortable, safe setting.",
      features: [
        "Comfortable home environment",
        "Individual attention & playtime",
        "Regular feeding schedules",
        "Daily photo updates",
        "Medication administration",
        "Familiar routine maintenance"
      ],
      color: "primary"
    },
    {
      icon: Heart,
      title: "Pet Sitting",
      description: "Professional in-home pet sitting services that keep your furry friends comfortable in their own familiar environment.",
      features: [
        "In-home comfort for your pet",
        "Scheduled visits & check-ins",
        "Feeding & fresh water",
        "Exercise & outdoor time",
        "Home security presence",
        "Plant watering & mail collection"
      ],
      color: "trust"
    }
  ];

  const additionalServices = [
    { icon: Camera, title: "Daily Photo Updates", description: "Regular photos and updates throughout the day" },
    { icon: Clock, title: "Flexible Scheduling", description: "Services tailored to your specific needs and timeline" },
    { icon: Shield, title: "Fully Insured", description: "Complete peace of mind with full insurance coverage" },
    { icon: MapPin, title: "Local Service", description: "Serving the local community with personalized care" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Pet Care Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional, reliable, and loving care tailored to your pet's unique needs. 
              Choose the service that works best for you and your furry family.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className={`shadow-elegant hover:shadow-${service.color === 'primary' ? 'warm' : 'trust'} transition-spring group`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${service.color}/10 flex items-center justify-center group-hover:scale-110 transition-spring`}>
                      <Icon className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full bg-${service.color} flex-shrink-0`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Additional Services & Benefits
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Give Your Pet the Best Care?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us today to discuss your pet's needs and schedule a consultation.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-white px-8 py-4 shadow-warm transition-spring"
            ><a
                    href="https://api.whatsapp.com/send?phone=919000047480&text=Hey%2C%20Can%20I%20have%20more%20info%20on%20this%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
              Get Started Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;