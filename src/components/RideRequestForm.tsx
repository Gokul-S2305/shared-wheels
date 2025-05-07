
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LocationInput from "./LocationInput";
import { MapPin, Navigation } from "lucide-react";

interface RideRequestFormProps {
  onRequestRide: (pickup: string, destination: string) => void;
  isLoading?: boolean;
}

const RideRequestForm: React.FC<RideRequestFormProps> = ({
  onRequestRide,
  isLoading = false,
}) => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickup && destination) {
      onRequestRide(pickup, destination);
    }
  };

  return (
    <Card className="w-full shadow-lg border-none animate-fade-in">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
        <CardTitle className="text-xl text-primary">Request a Ride</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <LocationInput
            label="Pickup Location"
            placeholder="Enter pickup address"
            value={pickup}
            onChange={setPickup}
            icon={<MapPin className="h-4 w-4 text-secondary" />}
            className="transition-all focus-within:scale-[1.02]"
          />
          
          <div className="flex justify-center my-2">
            <div className="w-px h-6 bg-gray-200"></div>
          </div>
          
          <LocationInput
            label="Destination"
            placeholder="Enter destination address"
            value={destination}
            onChange={setDestination}
            icon={<Navigation className="h-4 w-4 text-primary" />}
            className="transition-all focus-within:scale-[1.02]"
          />
          
          <Button 
            type="submit" 
            className="w-full mt-6 py-6 text-base shadow-md transition-all hover:shadow-lg" 
            disabled={isLoading || !pickup || !destination}
          >
            {isLoading ? "Finding Drivers..." : "Request Ride"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RideRequestForm;
