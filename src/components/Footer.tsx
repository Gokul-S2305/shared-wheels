
import React from "react";
import { MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-secondary" />
              <span className="font-bold text-xl text-primary">RideShare</span>
            </div>
            <p className="text-gray-500 max-w-xs">
              Connecting drivers and passengers for a seamless riding experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-primary">Help Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary">Safety</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-primary">Terms</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary">Privacy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} RideShare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
