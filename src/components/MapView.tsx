
import React from "react";

interface MapViewProps {
  pickup?: { lat: number; lng: number } | null;
  destination?: { lat: number; lng: number } | null;
  className?: string;
}

const MapView: React.FC<MapViewProps> = ({ pickup, destination, className = "" }) => {
  return (
    <div className={`rounded-lg overflow-hidden border border-gray-300 ${className}`}>
      {/* Here would be the actual map integration */}
      <div className="h-full w-full bg-blue-100 p-4">
        <div className="w-full h-full bg-white rounded flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-400 mb-2">Interactive Map</div>
            {pickup && (
              <div className="text-sm bg-green-100 p-2 rounded mb-2">
                Pickup: {pickup.lat.toFixed(4)}, {pickup.lng.toFixed(4)}
              </div>
            )}
            {destination && (
              <div className="text-sm bg-red-100 p-2 rounded">
                Destination: {destination.lat.toFixed(4)}, {destination.lng.toFixed(4)}
              </div>
            )}
            {!pickup && !destination && (
              <div className="text-sm text-gray-500">
                Pickup and destination locations will be displayed here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
