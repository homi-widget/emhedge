
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MapTokenInputProps {
  mapboxToken: string;
  setMapboxToken: (token: string) => void;
  onSubmit: () => void;
}

const MapTokenInput: React.FC<MapTokenInputProps> = ({ 
  mapboxToken, 
  setMapboxToken, 
  onSubmit 
}) => {
  return (
    <div className="space-y-4 mb-4">
      <p className="text-sm text-[#2F2F2F]">
        To display the map visualization, please enter your Mapbox public token.
        You can get one at{' '}
        <a 
          href="https://mapbox.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#FFCB74] hover:underline"
        >
          mapbox.com
        </a>
      </p>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter Mapbox public token (pk.eyJ1...)"
          value={mapboxToken}
          onChange={(e) => setMapboxToken(e.target.value)}
          className="flex-1"
        />
        <Button 
          onClick={onSubmit}
          disabled={!mapboxToken.trim()}
          className="bg-[#FFCB74] hover:bg-[#FFCB74]/80 text-[#111111]"
        >
          Load Map
        </Button>
      </div>
    </div>
  );
};

export default MapTokenInput;
