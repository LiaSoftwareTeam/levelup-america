'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import styles from './location.module.css';
import LocationOnboarding from '../../components/LocationOnboarding';

// Dynamically import the Map component with SSR disabled
const MapComponent = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Loading map...</div>
});

// Sample coach data
const coachesData = [
  { 
    id: 1, 
    name: 'Jacks Brown', 
    email: 'jbrown@levelupamerica.com',
    coachType: 'Life Coach',
    latitude: 41.8781, 
    longitude: -87.6298,
    profileUrl: '/coaches/team'
  },
  { 
    id: 2, 
    name: 'Eldris Valenzuela', 
    email: 'eldris@levelupamerica.com',
    coachType: 'Wellness and Nutrition Mentor',
    latitude: 34.0522, 
    longitude: -118.2437,
    profileUrl: '/coaches/team/eldris-valenzuela'
  },
  { 
    id: 3, 
    name: 'Victor Familia', 
    email: 'vicfamilia@levelupamerica.com',
    coachType: 'Personal Coach',
    latitude: 40.7128, 
    longitude: -74.0060,
    profileUrl: '/team/coaches'
  },
  {
    id: 4,
    name: 'Maria Rodriguez',
    email: 'maria@levelupamerica.com',
    coachType: 'Business Coach',
    latitude: 18.4861, 
    longitude: -69.9312, // Santo Domingo, Dominican Republic
    profileUrl: '/coaches/team/maria-rodriguez'
  },
  {
    id: 5,
    name: 'Carlos Mendoza',
    email: 'carlos@levelupamerica.com',
    coachType: 'Career Development Coach',
    latitude: 19.4326, 
    longitude: -99.1332, // Mexico City, Mexico
    profileUrl: '/coaches/team/carlos-mendoza'
  },
  {
    id: 6,
    name: 'Ana Valencia',
    email: 'ana@levelupamerica.com',
    coachType: 'Leadership Coach',
    latitude: 4.7110, 
    longitude: -74.0721, // Bogotá, Colombia
    profileUrl: '/coaches/team/ana-valencia'
  },
  {
    id: 7,
    name: 'Luis Morales',
    email: 'luis@levelupamerica.com',
    coachType: 'Executive Coach',
    latitude: -12.0464, 
    longitude: -77.0428, // Lima, Peru
    profileUrl: '/coaches/team/luis-morales'
  },
  {
    id: 8,
    name: 'Isabella Santos',
    email: 'isabella@levelupamerica.com',
    coachType: 'Wellness Coach',
    latitude: -23.5505, 
    longitude: -46.6333, // São Paulo, Brazil
    profileUrl: '/coaches/team/isabella-santos'
  },
  {
    id: 9,
    name: 'Sarah Johnson',
    email: 'sarah@levelupamerica.com',
    coachType: 'Career Coach',
    latitude: 47.6062, 
    longitude: -122.3321, // Seattle, WA
    profileUrl: '/coaches/team/sarah-johnson'
  },
  {
    id: 10,
    name: 'Michael Chen',
    email: 'michael@levelupamerica.com',
    coachType: 'Business Development Coach',
    latitude: 25.7617, 
    longitude: -80.1918, // Miami, FL
    profileUrl: '/coaches/team/michael-chen'
  },
  {
    id: 11,
    name: 'Emily Parker',
    email: 'emily@levelupamerica.com',
    coachType: 'Leadership Development Coach',
    latitude: 42.3601, 
    longitude: -71.0589, // Boston, MA
    profileUrl: '/coaches/team/emily-parker'
  },
  {
    id: 12,
    name: 'Roberto Sanchez',
    email: 'roberto@levelupamerica.com',
    coachType: 'Life and Wellness Coach',
    latitude: 18.4861, 
    longitude: -69.9312, // Santo Domingo, Dominican Republic
    profileUrl: '/coaches/team/roberto-sanchez'
  },
  {
    id: 13,
    name: 'Sofia Ramirez',
    email: 'sofia@levelupamerica.com',
    coachType: 'Personal Development Coach',
    latitude: 19.4326, 
    longitude: -99.1332, // Mexico City, Mexico
    profileUrl: '/coaches/team/sofia-ramirez'
  },
  {
    id: 14,
    name: 'Juan Martinez',
    email: 'juan@levelupamerica.com',
    coachType: 'Executive Leadership Coach',
    latitude: 4.7110, 
    longitude: -74.0721, // Bogotá, Colombia
    profileUrl: '/coaches/team/juan-martinez'
  },
  {
    id: 15,
    name: 'Carmen Diaz',
    email: 'carmen@levelupamerica.com',
    coachType: 'Life and Career Coach',
    latitude: 19.4517, 
    longitude: -70.6970, // Santiago, Dominican Republic
    profileUrl: '/coaches/team/carmen-diaz'
  }
];

const LocationPage = () => {
  return (
    <div className={styles.containerlocation}>
      <h1 className={styles.titlelocation}></h1>
      <div className={styles.mapContainer}>
        <MapComponent coaches={coachesData} />
      </div>
      <LocationOnboarding />
    </div>
  );
};

export default LocationPage;