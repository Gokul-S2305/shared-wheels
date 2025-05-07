
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, User } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="bg-primary/10 p-2 rounded-full">
            <MapPin className="h-6 w-6 text-secondary" />
          </div>
          <span className="font-bold text-xl text-primary">RideShare</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2 transition-all hover:bg-primary/5">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-md transition-all hover:shadow-lg">Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
