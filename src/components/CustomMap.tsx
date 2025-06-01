import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { Investment } from "./map/types";

interface CustomMapProps {
  investments: Investment[];
}

const CustomMap: React.FC<CustomMapProps> = ({ investments }) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Country positions (approximate center coordinates as percentages of the world map)
  const countryPositions: { [key: string]: { x: number; y: number } } = {
    'Brazil': { x: 25, y: 75 },
    'India': { x: 75, y: 55 },
    'Nigeria': { x: 52, y: 65 },
    'Vietnam': { x: 82, y: 58 },
    'Mexico': { x: 15, y: 55 },
    'Argentina': { x: 25, y: 85 },
    'Chile': { x: 22, y: 82 },
    'Colombia': { x: 22, y: 65 },
    'Bangladesh': { x: 78, y: 55 },
    'Sri Lanka': { x: 75, y: 62 },
    'Nepal': { x: 76, y: 52 },
    'Ghana': { x: 48, y: 65 },
    'Kenya': { x: 60, y: 70 },
    'South Africa': { x: 58, y: 85 },
    'Uganda': { x: 58, y: 68 },
    'Thailand': { x: 82, y: 58 },
    'Cambodia': { x: 83, y: 60 },
    'Laos': { x: 82, y: 56 },
    'Myanmar': { x: 80, y: 55 },
    'Guatemala': { x: 12, y: 58 },
    'Honduras': { x: 14, y: 58 },
    'El Salvador': { x: 12, y: 60 },
    'Costa Rica': { x: 16, y: 62 },
    'Panama': { x: 18, y: 62 },
  };

  // Get all countries involved in investments
  const getAllCountries = () => {
    const countries = new Set<string>();
    investments.forEach(inv => {
      countries.add(inv.countryOfCompany);
      inv.operatingCountries.forEach(country => countries.add(country));
    });
    return Array.from(countries);
  };

  // Get investment for a specific country
  const getCountryInvestment = (country: string) => {
    return investments.find(inv => inv.countryOfCompany === country);
  };

  // Check if country has operations
  const hasOperations = (country: string) => {
    return investments.some(inv => 
      inv.operatingCountries.includes(country) || inv.countryOfCompany === country
    );
  };

  const formatCurrency = (amount: number, currency: string) => {
    const formatters: { [key: string]: Intl.NumberFormat } = {
      USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
      EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
      GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
    };
    return formatters[currency]?.format(amount) || `${currency} ${amount.toLocaleString()}`;
  };

  const allCountries = getAllCountries();

  return (
    <Card className="bg-white border border-[#FFCB74]/30 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#111111] text-xl font-light">
          <Globe className="h-5 w-5 text-[#FFCB74]" />
          Portfolio Geographic Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* World Map SVG Background */}
          <div className="w-full h-96 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg relative overflow-hidden">
            {/* Simple world continents background */}
            <svg viewBox="0 0 100 60" className="w-full h-full">
              {/* North America */}
              <path
                d="M5,15 L25,12 L30,25 L25,35 L15,40 L8,35 Z"
                fill="#e5e7eb"
                stroke="#d1d5db"
                strokeWidth="0.2"
              />
              {/* South America */}
              <path
                d="M20,40 L28,38 L32,55 L28,85 L22,88 L18,75 Z"
                fill="#e5e7eb"
                stroke="#d1d5db"
                strokeWidth="0.2"
              />
              {/* Europe */}
              <path
                d="M45,12 L55,10 L58,20 L52,25 L47,22 Z"
                fill="#e5e7eb"
                stroke="#d1d5db"
                strokeWidth="0.2"
              />
              {/* Africa */}
              <path
                d="M48,30 L58,28 L62,45 L58,80 L52,85 L48,75 L45,50 Z"
                fill="#e5e7eb"
                stroke="#d1d5db"
                strokeWidth="0.2"
              />
              {/* Asia */}
              <path
                d="M58,8 L85,5 L90,25 L85,35 L75,40 L65,35 L60,25 Z"
                fill="#e5e7eb"
                stroke="#d1d5db"
                strokeWidth="0.2"
              />
              {/* Australia */}
              <path
                d="M78,75 L88,73 L90,82 L85,85 L80,83 Z"
                fill="#e5e7eb"
                stroke="#d1d5db"
                strokeWidth="0.2"
              />
            </svg>

            {/* Country markers */}
            {allCountries.map(country => {
              const position = countryPositions[country];
              if (!position) return null;

              const investment = getCountryInvestment(country);
              const isHomeCountry = !!investment;
              const isSelected = selectedCountry === country;
              const isHovered = hoveredCountry === country;

              return (
                <div
                  key={country}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                  }}
                  onMouseEnter={() => setHoveredCountry(country)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  onClick={() => setSelectedCountry(isSelected ? null : country)}
                >
                  <div
                    className={`
                      w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-200
                      ${isHomeCountry 
                        ? 'bg-[#FFCB74] hover:bg-[#FFCB74]/80' 
                        : 'bg-blue-400 hover:bg-blue-500'
                      }
                      ${isHovered || isSelected ? 'scale-150' : 'scale-100'}
                    `}
                  />
                  
                  {/* Country label */}
                  <div
                    className={`
                      absolute top-6 left-1/2 transform -translate-x-1/2 
                      bg-white px-2 py-1 rounded text-xs font-medium shadow-lg
                      transition-opacity duration-200 whitespace-nowrap
                      ${isHovered || isSelected ? 'opacity-100' : 'opacity-0'}
                    `}
                  >
                    {country}
                    {investment && (
                      <div className="text-[#FFCB74] font-semibold">
                        {formatCurrency(investment.amountInvested, investment.currency)}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#2F2F2F]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFCB74] rounded-full border-2 border-white shadow"></span>
              Investment headquarters
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow"></span>
              Operating countries
            </div>
          </div>

          {/* Selected country details */}
          {selectedCountry && (
            <div className="mt-4 p-4 bg-[#F6F6F6] rounded-lg">
              <h3 className="font-semibold text-[#111111] mb-2">{selectedCountry}</h3>
              {(() => {
                const investment = getCountryInvestment(selectedCountry);
                const operatingInvestments = investments.filter(inv => 
                  inv.operatingCountries.includes(selectedCountry)
                );

                return (
                  <div className="space-y-2 text-sm">
                    {investment && (
                      <div>
                        <p className="font-medium text-[#FFCB74]">Investment Headquarters:</p>
                        <p>{investment.companyName}</p>
                        <p>{formatCurrency(investment.amountInvested, investment.currency)}</p>
                        <p>Date: {new Date(investment.dateOfInvestment).toLocaleDateString()}</p>
                      </div>
                    )}
                    
                    {operatingInvestments.length > 0 && (
                      <div>
                        <p className="font-medium text-blue-600">Companies Operating Here:</p>
                        {operatingInvestments.map(inv => (
                          <p key={inv.id}>{inv.companyName}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomMap;
