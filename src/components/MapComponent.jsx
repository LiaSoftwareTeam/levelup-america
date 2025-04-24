'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ coaches }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    if (!mapInstanceRef.current && mapRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([39.8283, -98.5795], 4);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 19
      }).addTo(mapInstanceRef.current);

      // Create custom icon
      const createCustomIcon = (iconUrl) => {
        const iconElement = document.createElement('div');
        iconElement.style.width = '50px';
        iconElement.style.height = '50px';
        iconElement.style.borderRadius = '50%';
        iconElement.style.overflow = 'hidden';
        iconElement.style.background = `url(${iconUrl}) center/cover no-repeat`;

        return L.divIcon({
          html: iconElement,
          className: 'custom-marker',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40]
        });
      };

      // Add markers for each coach with custom icons
      coaches.forEach(coach => {
        // Use local profile images for each coach
        const iconUrl = `/media/personal/${coach.id === 1 ? 'people.jpg' : coach.id === 2 ? 'eldris_valenzuela.jpg' : 'familia.jpg'}`;
        const customIcon = createCustomIcon(iconUrl);

        L.marker([coach.latitude, coach.longitude], { icon: customIcon })
          .bindPopup(`<b>${coach.name}</b>`)
          .addTo(mapInstanceRef.current);
      });
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [coaches]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default MapComponent;