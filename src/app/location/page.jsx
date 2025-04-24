'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import styles from './location.module.css';

// Dynamically import the Map component with SSR disabled
const MapComponent = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Loading map...</div>
});

// Sample coach data
const coachesData = [
  { id: 1, name: 'Coach María', latitude: 40.7128, longitude: -74.0060 }, // New York
  { id: 2, name: 'Coach Juan', latitude: 34.0522, longitude: -118.2437 }, // Los Angeles
  { id: 3, name: 'Coach Ana', latitude: 41.8781, longitude: -87.6298 }, // Chicago
];

const LocationPage = () => {
  return (
    <div className={styles.containerlocation}>
      <h1 className={styles.titlelocation}></h1>
      <div className={styles.mapContainer}>
        <MapComponent coaches={coachesData} />
      </div>
    </div>
  );
};

export default LocationPage;