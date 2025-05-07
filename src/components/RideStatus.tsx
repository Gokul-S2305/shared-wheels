
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin, Navigation, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type RideStatusType = "finding" | "driver-assigned" | "arriving" | "in-ride" | "completed";

interface RideStatusProps {
  status: RideStatusType;
  ride: {
    id: string;
    pickup: string;
    destination: string;
    driver?: {
      name: string;
      rating: number;
      vehicle: string;
      estimatedArrival: string;
    };
    estimatedDuration?: string;
    progress?: number;
  };
  onCancel: () => void;
}

const RideStatus: React.FC<RideStatusProps> = ({ status, ride, onCancel }) => {
  const renderStatusContent = () => {
    switch (status) {
      case "finding":
        return (
          <div className="text-center py-8">
            <div className="animate-pulse-light mb-4">
              <div className="h-12 w-12 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <h3 className="font-medium text-lg mb-2">Finding your driver</h3>
            <p className="text-gray-500 text-sm mb-6">
              We're matching you with the best available driver
            </p>
            <Button variant="outline" onClick={onCancel}>
              Cancel Ride
            </Button>
          </div>
        );

      case "driver-assigned":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{ride.driver?.name}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{ride.driver?.rating}</span>
                </div>
                <p className="text-sm text-gray-500">{ride.driver?.vehicle}</p>
              </div>
              <div className="ml-auto">
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium">Estimated arrival in {ride.driver?.estimatedArrival}</p>
              <Progress value={30} className="mt-2 h-2" />
            </div>
            
            <div className="pt-2 flex justify-between">
              <Button variant="outline" size="sm" onClick={onCancel}>
                Cancel Ride
              </Button>
              <p className="text-sm text-gray-500">
                Ride ID: {ride.id.slice(0, 8)}
              </p>
            </div>
          </div>
        );

      case "in-ride":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{ride.driver?.name}</h3>
                <p className="text-sm text-gray-500">{ride.driver?.vehicle}</p>
              </div>
              <div className="ml-auto">
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <p className="text-sm truncate">{ride.pickup}</p>
              </div>
              <div className="flex items-center gap-3">
                <Navigation className="h-4 w-4 text-primary" />
                <p className="text-sm truncate">{ride.destination}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium">Estimated arrival in {ride.estimatedDuration}</p>
              <Progress value={ride.progress} className="mt-2 h-2" />
            </div>
          </div>
        );

      case "completed":
        return (
          <div className="text-center py-6">
            <div className="mb-4">
              <div className="h-12 w-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-medium text-lg mb-2">Ride Completed</h3>
            <p className="text-gray-500 text-sm mb-6">
              Thank you for riding with us!
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">
                Rate Trip
              </Button>
              <Button className="flex-1">New Ride</Button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader className={status === "finding" ? "pb-0" : ""}>
        <CardTitle>Ride Status</CardTitle>
      </CardHeader>
      <CardContent>{renderStatusContent()}</CardContent>
    </Card>
  );
};

export default RideStatus;
