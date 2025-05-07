
import React from "react";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

interface LocationInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onLocationSelect?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const LocationInput: React.FC<LocationInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className = "",
  icon = <MapPin className="h-4 w-4 text-gray-500" />,
}) => {
  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </div>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 py-6 transition-all border-gray-200 focus:border-primary/50 hover:border-gray-300 bg-white/50 backdrop-blur-sm"
        />
        <div className="absolute inset-0 rounded-md border border-transparent group-hover:border-gray-300 group-focus-within:border-primary/50 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LocationInput;
