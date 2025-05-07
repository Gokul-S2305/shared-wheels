
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, User } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <MapPin className="h-6 w-6 text-secondary" />
        <span className="font-bold text-xl text-primary">RideShare</span>
      </Link>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Sign In</span>
        </Button>
        <Button className="bg-primary hover:bg-primary/90">Register</Button>
      </div>
    </nav>
  );
};

export default Navbar;
