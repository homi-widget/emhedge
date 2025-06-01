
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Investment } from './types';
import { addInvestmentMarkers } from './MapMarkers';

interface MapContainerProps {
  investments: Investment[];
  mapboxToken: string;
  onMapReady: () => void;
}

const MapContainer: React.FC<MapContainerProps> = ({ 
  investments, 
  mapboxToken, 
  onMapReady 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [20, 20],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('style.load', () => {
      onMapReady();
      if (map.current) {
        addInvestmentMarkers(investments, map.current);
      }
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, investments, onMapReady]);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-96 rounded-lg overflow-hidden"
    />
  );
};

export default MapContainer;
