
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
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>Request a Ride</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <LocationInput
            label="Pickup Location"
            placeholder="Enter pickup address"
            value={pickup}
            onChange={setPickup}
            icon={<MapPin className="h-4 w-4 text-secondary" />}
          />
          
          <LocationInput
            label="Destination"
            placeholder="Enter destination address"
            value={destination}
            onChange={setDestination}
            icon={<Navigation className="h-4 w-4 text-primary" />}
          />
          
          <Button 
            type="submit" 
            className="w-full mt-6" 
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
