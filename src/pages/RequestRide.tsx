
import React, { useState } from "react";
import Layout from "@/components/Layout";
import RideRequestForm from "@/components/RideRequestForm";
import MapView from "@/components/MapView";
import RideOptions from "@/components/RideOptions";
import RideStatus from "@/components/RideStatus";
import { Button } from "@/components/ui/button";
import { User, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock ride options data
const rideOptionsList = [
  {
    id: "economy",
    name: "Economy",
    description: "Affordable rides for everyday",
    price: 12.5,
    time: "4 min away",
    icon: <User className="h-5 w-5" />,
  },
  {
    id: "comfort",
    name: "Comfort",
    description: "More space, newer cars",
    price: 18.75,
    time: "3 min away",
    icon: <User className="h-5 w-5" />,
  },
  {
    id: "xl",
    name: "XL",
    description: "Rides for groups up to 6",
    price: 24.0,
    time: "7 min away",
    icon: <Users className="h-5 w-5" />,
  },
];

const RequestRide: React.FC = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<"request" | "options" | "status">("request");
  const [selectedOption, setSelectedOption] = useState(rideOptionsList[0].id);
  const [isLoading, setIsLoading] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideStatus, setRideStatus] = useState<"finding" | "driver-assigned" | "arriving" | "in-ride" | "completed">("finding");
  const [rideDetails, setRideDetails] = useState({
    id: "",
    pickup: "",
    destination: "",
  });

  // Mock coordinates for demonstration
  const [pickupCoords, setPickupCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [destinationCoords, setDestinationCoords] = useState<{ lat: number; lng: number } | null>(null);

  const handleRequestRide = (pickup: string, destination: string) => {
    setIsLoading(true);
    setPickup(pickup);
    setDestination(destination);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Simulate random coordinates
      setPickupCoords({
        lat: 40.712776 + (Math.random() - 0.5) * 0.1,
        lng: -74.005974 + (Math.random() - 0.5) * 0.1,
      });
      setDestinationCoords({
        lat: 40.712776 + (Math.random() - 0.5) * 0.1,
        lng: -74.005974 + (Math.random() - 0.5) * 0.1,
      });
      
      setIsLoading(false);
      setStep("options");
      
      toast({
        title: "Locations found",
        description: "We've found matching locations for your request.",
      });
    }, 1500);
  };

  const handleConfirmRide = () => {
    setIsLoading(true);
    
    // Get selected ride option details
    const option = rideOptionsList.find(o => o.id === selectedOption);
    
    // Simulate API call
    setTimeout(() => {
      setRideDetails({
        id: `RIDE-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        pickup,
        destination,
      });
      
      setStep("status");
      setRideStatus("finding");
      setIsLoading(false);
      
      // Simulate driver assignment after a few seconds
      setTimeout(() => {
        setRideStatus("driver-assigned");
        setRideDetails(prev => ({
          ...prev,
          driver: {
            name: "John Smith",
            rating: 4.8,
            vehicle: "Toyota Camry • ABC-1234",
            estimatedArrival: "3 min",
          }
        }));
        
        toast({
          title: "Driver assigned",
          description: "John Smith is on the way to pick you up.",
        });
      }, 5000);
    }, 2000);
  };

  const handleCancelRide = () => {
    toast({
      title: "Ride cancelled",
      description: "Your ride request has been cancelled.",
    });
    setStep("request");
    setPickupCoords(null);
    setDestinationCoords(null);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left panel */}
          <div className="lg:col-span-1 space-y-6">
            {step === "request" && (
              <RideRequestForm onRequestRide={handleRequestRide} isLoading={isLoading} />
            )}

            {step === "options" && (
              <>
                <div className="mb-4">
                  <Button
                    variant="ghost"
                    className="mb-4"
                    onClick={() => {
                      setStep("request");
                      setPickupCoords(null);
                      setDestinationCoords(null);
                    }}
                  >
                    ← Back to location
                  </Button>
                  <h2 className="text-2xl font-bold">Select your ride</h2>
                </div>
                
                <RideOptions
                  options={rideOptionsList}
                  selectedOption={selectedOption}
                  onSelect={setSelectedOption}
                />
                
                <Button
                  className="w-full"
                  onClick={handleConfirmRide}
                  disabled={isLoading}
                >
                  {isLoading ? "Confirming..." : "Confirm Ride"}
                </Button>
              </>
            )}
            
            {step === "status" && (
              <RideStatus
                status={rideStatus}
                ride={rideDetails}
                onCancel={handleCancelRide}
              />
            )}
          </div>

          {/* Map view */}
          <div className="lg:col-span-2">
            <MapView
              pickup={pickupCoords}
              destination={destinationCoords}
              className="h-[600px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RequestRide;
