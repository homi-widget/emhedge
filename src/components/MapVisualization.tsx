
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Globe } from "lucide-react";
import { MapVisualizationProps } from './map/types';
import MapTokenInput from './map/MapTokenInput';
import MapContainer from './map/MapContainer';

const MapVisualization: React.FC<MapVisualizationProps> = ({ investments }) => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      // Map initialization will be handled by MapContainer
    }
  };

  const handleMapReady = () => {
    setIsMapReady(true);
  };

  return (
    <Card className="bg-white border border-[#FFCB74]/30 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#111111] text-xl font-light">
          <Globe className="h-5 w-5 text-[#FFCB74]" />
          Portfolio Geographic Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isMapReady && (
          <MapTokenInput
            mapboxToken={mapboxToken}
            setMapboxToken={setMapboxToken}
            onSubmit={handleTokenSubmit}
          />
        )}
        
        <div className="relative">
          {mapboxToken && (
            <MapContainer
              investments={investments}
              mapboxToken={mapboxToken}
              onMapReady={handleMapReady}
            />
          )}
          
          {!isMapReady && mapboxToken && (
            <div className="w-full h-96 bg-[#F6F6F6] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-[#FFCB74] mx-auto mb-2" />
                <p className="text-[#2F2F2F]">Loading map...</p>
              </div>
            </div>
          )}
        </div>

        {isMapReady && (
          <div className="mt-4 text-sm text-[#2F2F2F]">
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFCB74] rounded-full border-2 border-white shadow"></span>
              Investment locations - Click markers for details
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MapVisualization;
