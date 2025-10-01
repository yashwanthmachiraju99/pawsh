import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NavigationBar = () => {
  return (
    <nav className="absolute w-full top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img 
              src="https://storage.googleapis.com/pawsh/placeholder.png" 
              alt="Pawsh Pet Services Logo" 
              className="h-10 w-10 mr-3"
            />
            <span className="text-xl font-bold text-white">Pawsh Pet Services</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Button asChild variant="ghost" className="text-white hover:bg-orange-500/80 hover:text-white transition-colors duration-300">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-orange-500/80 hover:text-white transition-colors duration-300">
              <a href="https://api.whatsapp.com/send?phone=919000047480&text=Hey%2C%20Can%20I%20have%20more%20info%20on%20this%3F" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
