
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Globe } from "lucide-react";

interface Investment {
  id: string;
  companyName: string;
  amountInvested: number;
  currency: string;
  dateOfInvestment: string;
  countryOfCompany: string;
  operatingCountries: string[];
}

interface MapVisualizationProps {
  investments: Investment[];
}

const MapVisualization: React.FC<MapVisualizationProps> = ({ investments }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  const initializeMap = () => {
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
      setIsMapReady(true);
      addInvestmentMarkers();
    });
  };

  const getCountryCoordinates = (country: string): [number, number] => {
    const coordinates: { [key: string]: [number, number] } = {
      'Brazil': [-47.9292, -15.7801],
      'India': [77.1025, 20.5937],
      'Nigeria': [8.6753, 9.0820],
      'Vietnam': [108.2772, 14.0583],
      'Mexico': [-102.5528, 23.6345],
      'Argentina': [-63.6167, -38.4161],
      'Chile': [-71.5430, -35.6751],
      'Colombia': [-74.2973, 4.5709],
      'Bangladesh': [90.3563, 23.6850],
      'Sri Lanka': [80.7718, 7.8731],
      'Nepal': [84.1240, 28.3949],
      'Ghana': [-1.0232, 7.9465],
      'Kenya': [37.9062, -0.0236],
      'South Africa': [22.9375, -30.5595],
      'Uganda': [32.2903, 1.3733],
      'Thailand': [100.9925, 15.8700],
      'Cambodia': [104.9910, 12.5657],
      'Laos': [102.4955, 19.8563],
      'Myanmar': [95.9560, 21.9162],
      'Guatemala': [-90.2308, 15.7835],
      'Honduras': [-87.2068, 15.2000],
      'El Salvador': [-88.8965, 13.7942],
      'Costa Rica': [-83.7534, 9.7489],
      'Panama': [-80.7821, 8.5380],
    };
    return coordinates[country] || [0, 0];
  };

  const formatCurrency = (amount: number, currency: string) => {
    const formatters: { [key: string]: Intl.NumberFormat } = {
      USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
      EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
      GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
    };
    return formatters[currency]?.format(amount) || `${currency} ${amount.toLocaleString()}`;
  };

  const addInvestmentMarkers = () => {
    if (!map.current) return;

    investments.forEach((investment) => {
      const [lng, lat] = getCountryCoordinates(investment.countryOfCompany);
      
      if (lng === 0 && lat === 0) return;

      // Create popup content
      const popupContent = `
        <div class="p-3 min-w-64">
          <h3 class="font-semibold text-lg mb-2">${investment.companyName}</h3>
          <p class="text-sm mb-1"><strong>Investment:</strong> ${formatCurrency(investment.amountInvested, investment.currency)}</p>
          <p class="text-sm mb-1"><strong>Date:</strong> ${new Date(investment.dateOfInvestment).toLocaleDateString()}</p>
          <p class="text-sm mb-1"><strong>Home Country:</strong> ${investment.countryOfCompany}</p>
          <p class="text-sm"><strong>Operating in:</strong> ${investment.operatingCountries.join(', ')}</p>
        </div>
      `;

      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false
      }).setHTML(popupContent);

      // Create marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'investment-marker';
      markerElement.style.cssText = `
        background-color: #FFCB74;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid #fff;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: transform 0.2s ease;
      `;

      markerElement.addEventListener('mouseenter', () => {
        markerElement.style.transform = 'scale(1.2)';
      });

      markerElement.addEventListener('mouseleave', () => {
        markerElement.style.transform = 'scale(1)';
      });

      // Add marker to map
      new mapboxgl.Marker(markerElement)
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(map.current!);
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

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
                onClick={handleTokenSubmit}
                disabled={!mapboxToken.trim()}
                className="bg-[#FFCB74] hover:bg-[#FFCB74]/80 text-[#111111]"
              >
                Load Map
              </Button>
            </div>
          </div>
        )}
        
        <div className="relative">
          <div 
            ref={mapContainer} 
            className="w-full h-96 rounded-lg overflow-hidden"
            style={{ display: isMapReady ? 'block' : 'none' }}
          />
          
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
