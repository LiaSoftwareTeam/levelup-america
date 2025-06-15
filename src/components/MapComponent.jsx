'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const MapComponent = ({ coaches }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const userMarkerRef = useRef(null);
  const [showLocationButton, setShowLocationButton] = useState(true);

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
        let iconUrl;
        if (coach.id === 1) {
          iconUrl = '/media/personal/people.jpg';
        } else if (coach.id === 2) {
          iconUrl = '/media/personal/eldris_valenzuela.jpg';
        } else if (coach.id === 3) {
          iconUrl = '/media/personal/familia.jpg';
        } else {
          // Use client photos for the new coaches
          iconUrl = `/media/client${((coach.id - 4) % 7) + 1}.jpg`;
        }
        const customIcon = createCustomIcon(iconUrl);

        const marker = L.marker([coach.latitude, coach.longitude], { icon: customIcon });
        const popup = L.popup({
          closeOnClick: true,
          autoClose: true,
          closeButton: true
        }).setContent(`
            <div style="min-width: 250px; padding: 16px; font-family: system-ui, -apple-system, sans-serif;">
              <div style="display: flex; align-items: center; margin-bottom: 12px;">
                <img src="${iconUrl}" style="width: 48px; height: 48px; border-radius: 50%; margin-right: 12px; object-fit: cover; border: 2px solid #1f74ca;" />
                <h3 style="margin: 0; color: #1f74ca; font-size: 18px;">${coach.name}</h3>
              </div>
              <div style="background: #f5f7fa; border-radius: 8px; padding: 12px; margin: 12px 0;">
                <p style="margin: 0 0 8px 0; color: #4a5568; display: flex; align-items: center;">
                  <svg style="width: 16px; height: 16px; margin-right: 8px;" viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  ${coach.email}
                </p>
                <p style="margin: 0; color: #4a5568; display: flex; align-items: center;">
                  <svg style="width: 16px; height: 16px; margin-right: 8px;" viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  ${coach.coachType}
                </p>
              </div>
              <a href="${coach.profileUrl}" style="
                display: inline-block;
                background: #1f74ca;
                color: white;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 6px;
                width: 100%;
                box-sizing: border-box;
                text-align: center;
                font-weight: 500;
                transition: all 0.2s ease;
                box-shadow: 0 2px 4px rgba(31, 116, 202, 0.2);
              " onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 4px 8px rgba(31, 116, 202, 0.3)'" onmouseout="this.style.transform='none';this.style.boxShadow='0 2px 4px rgba(31, 116, 202, 0.2)'">Explore Profile</a>
            </div>
          `);
        
        marker.bindPopup(popup).addTo(mapInstanceRef.current);
        
        // Add click event listener to close popup when clicking outside
        mapInstanceRef.current.on('click', (e) => {
          if (!popup._container?.contains(e.originalEvent.target)) {
            marker.closePopup();
          }
        });
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

  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      // Create dark overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
      `;
      document.body.appendChild(overlay);

      const tipMessage = document.createElement('div');
      tipMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        max-width: 300px;
        min-width: 300px;
        text-align: center;
        z-index: 1001;
      `;
      tipMessage.innerHTML = `
        <h3 style="margin: 0 0 10px; color: #333;">Find Nearby Coaches</h3>
        <p style="margin: 0 0 15px; color: #666;">To show you the coaches closest to you, we need to access your location.</p>
        <button style="
          background: #1f74ca;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
        ">Accept</button>
      `;
      document.body.appendChild(tipMessage);

      const acceptButton = tipMessage.querySelector('button');
      acceptButton.onclick = () => {
        document.body.removeChild(tipMessage);
        document.body.removeChild(overlay);
        setShowLocationButton(false);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            setUserLocation({ latitude, longitude });
            // Set a more appropriate zoom level based on accuracy
            const zoomLevel = accuracy > 5000 ? 8 : accuracy > 1000 ? 10 : 13;
            mapInstanceRef.current.setView([latitude, longitude], zoomLevel);
            if (userMarkerRef.current) {
              userMarkerRef.current.remove();
            }
            // Add accuracy circle
            const accuracyCircle = L.circle([latitude, longitude], {
              radius: accuracy,
              weight: 1,
              color: '#1f74ca',
              fillColor: '#1f74ca',
              fillOpacity: 0.1
            }).addTo(mapInstanceRef.current);
            const userIcon = L.divIcon({
              html: '<div style="background-color: #1f74ca; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>',
              className: 'user-location-marker',
              iconSize: [26, 26],
              iconAnchor: [13, 13]
            });
            userMarkerRef.current = L.marker([latitude, longitude], { icon: userIcon })
              .bindPopup('Tu ubicación actual')
              .addTo(mapInstanceRef.current);
          },
          (error) => {
            console.error('Error getting location:', error);
            const errorOverlay = document.createElement('div');
            errorOverlay.style.cssText = `
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              z-index: 1000;
            `;
            document.body.appendChild(errorOverlay);

            const errorTip = document.createElement('div');
            errorTip.style.cssText = `
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              max-width: 300px;
              text-align: center;
              z-index: 1001;
            `;
            errorTip.innerHTML = `
              <h3 style="margin: 0 0 10px; color: #333;">Permission denied</h3>
              <p style="margin: 0 0 15px; color: #666;">Please enable location permissions in your browser to see nearby coaches.</p>
              <button style="
                background: #1f74ca;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
                width: 100%;
              ">Understood</button>
            `;
            document.body.appendChild(errorTip);
            const okButton = errorTip.querySelector('button');
            okButton.onclick = () => {
              document.body.removeChild(errorTip);
              document.body.removeChild(errorOverlay);
            };
          }
        );
      };
    } else {
      alert('Tu navegador no soporta geolocalización.');
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      {showLocationButton && (
        <button
          className="FindNearestCoaches"
          onClick={handleLocationRequest}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Find Nearest Coaches
        </button>
      )}
    </div>
  );
};

export default MapComponent;