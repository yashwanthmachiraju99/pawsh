import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Pawsh Pet Services Logo" 
              className="h-10 w-10 mr-3"
            />
            <span className="text-xl font-bold text-gray-800">Pawsh Pet Services</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Button asChild variant="ghost">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
