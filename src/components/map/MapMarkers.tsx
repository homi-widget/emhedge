
import React from 'react';
import mapboxgl from 'mapbox-gl';
import { Investment } from './types';
import { getCountryCoordinates, formatCurrency } from './mapUtils';

interface MapMarkersProps {
  investments: Investment[];
  map: mapboxgl.Map;
}

export const addInvestmentMarkers = (investments: Investment[], map: mapboxgl.Map) => {
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
      .addTo(map);
  });
};
