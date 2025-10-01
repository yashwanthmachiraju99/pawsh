import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
  name: "Sid",
  pet: "Scruffy (Golden Retriever)",
  rating: 5,
  text: "Pawsh Pet Services has been taking care of Scruffy for years now, and every single time it’s been wonderful. Scruffy feels so comfortable with them, and the daily photos and updates always give us peace of mind. He’s always happy, relaxed, and well cared for!",
  location: "Mahadevpura"
},
{
  name: "Mike Chen",
  pet: "Max & Luna (Border Collies)",
  rating: 5,
  text: "I was initially nervous about leaving my two energetic dogs, but the Pawsh team exceeded my expectations. Max and Luna came back happy, healthy, and pleasantly tired from all the care and playtime. Truly outstanding service!",
  location: "HSR Layout"
},
{
  name: "Ragav",
  pet: "Whiskers (Maine Coon)",
  rating: 5,
  text: "Finding reliable pet care for my cat was always a challenge until I discovered Pawsh. They understood Whiskers’ personality and unique needs perfectly, making him feel right at home. I highly recommend their services to any pet parent!",
  location: "Indira Nagar"
},
{
  name: "David",
  pet: "Rocky (German Shepherd)",
  rating: 5,
  text: "Pawsh is professional, caring, and completely reliable. Rocky has stayed with them multiple times, and he gets so excited every time he sees the team. That joy and trust say it all!",
  location: "HSR Layout"
},
{
  name: "Bapi",
  pet: "Laddu (Rotweiler)",
  rating: 5,
  text: "Having the peace of mind that Laddu was in such loving and responsible hands was priceless. The team not only cared for him but also went the extra mile by sending us videos of him playing. Absolutely wonderful service!",
  location: "HSR Layout"
}

    
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Pet Parents Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients and their beloved pets 
              have to say about our caring services.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-warm transition-spring group relative overflow-hidden"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-smooth">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.pet}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/50 rounded-2xl p-8 text-center">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-trust">100+</div>
                <div className="text-muted-foreground">Happy Pet Families</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center gap-1 mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Happy Pet Family
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the peace of mind that comes with exceptional pet care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;