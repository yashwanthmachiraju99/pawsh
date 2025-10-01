import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Navigation Bar */}
      <NavigationBar />
      
      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      </div>
    </div>
  );
};

export default Index;
