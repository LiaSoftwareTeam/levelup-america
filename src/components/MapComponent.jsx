'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

        L.marker([coach.latitude, coach.longitude], { icon: customIcon })
          .bindPopup(`
            <div style="min-width: 200px; padding: 10px;">
              <h3 style="margin: 0 0 10px 0; color: #333;">${coach.name}</h3>
              <p style="margin: 5px 0; color: #666;">
                <strong>Email:</strong> ${coach.email}
              </p>
              <p style="margin: 5px 0; color: #666;">
                <strong>Type:</strong> ${coach.coachType}
              </p>
              <a href="${coach.profileUrl}" style="display: inline-block; background:#1f74ca; color: white; text-decoration: none; padding: 8px 16px; border-radius: 4px; margin-top: 10px; text-align: center; width: 100%; box-sizing: border-box;">Explore Profile</a>
            </div>
          `)
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
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
            mapInstanceRef.current.setView([latitude, longitude], 10);
            if (userMarkerRef.current) {
              userMarkerRef.current.remove();
            }
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
          onClick={handleLocationRequest}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            backgroundColor: '#1f74ca',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 1000
          }}
        >
          {/* <span style={{ display: 'inline-block', width: '16px', height: '16px' }}>
            
          </span> */}
          My Location
        </button>
      )}
    </div>
  );
};

export default MapComponent;