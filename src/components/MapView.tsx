
import React from "react";

interface MapViewProps {
  pickup?: { lat: number; lng: number } | null;
  destination?: { lat: number; lng: number } | null;
  className?: string;
}

const MapView: React.FC<MapViewProps> = ({ pickup, destination, className = "" }) => {
  return (
    <div className={`rounded-xl overflow-hidden border border-gray-200 shadow-lg ${className}`}>
      {/* Here would be the actual map integration */}
      <div className="h-full w-full bg-blue-50 p-4">
        <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
          <div className="text-center z-10">
            <div className="text-primary font-medium mb-2">Interactive Map</div>
            {pickup && (
              <div className="text-sm bg-green-100 p-3 rounded-lg mb-2 shadow-sm">
                <div className="font-medium text-green-800 mb-1">Pickup Location</div>
                {pickup.lat.toFixed(4)}, {pickup.lng.toFixed(4)}
              </div>
            )}
            {destination && (
              <div className="text-sm bg-primary/10 p-3 rounded-lg shadow-sm">
                <div className="font-medium text-primary mb-1">Destination</div>
                {destination.lat.toFixed(4)}, {destination.lng.toFixed(4)}
              </div>
            )}
            {!pickup && !destination && (
              <div className="text-sm text-gray-600 max-w-sm">
                Enter your pickup and destination locations to see them displayed on the map
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
