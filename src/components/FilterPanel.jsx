'use client';
import { useState, useEffect } from 'react';
import styles from './FilterPanel.module.css';

const FilterPanel = ({ coaches, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isResetting, setIsResetting] = useState(false);

  const getLocationName = (lat, lng) => {
    const locations = {
      '41.8781,-87.6298': 'Chicago, IL',
      '34.0522,-118.2437': 'Los Angeles, CA',
      '40.7128,-74.0060': 'New York, NY',
      '18.4861,-69.9312': 'Santo Domingo, DR',
      '19.4326,-99.1332': 'Mexico City, MX',
      '4.7110,-74.0721': 'Bogotá, CO',
      '-12.0464,-77.0428': 'Lima, PE',
      '-23.5505,-46.6333': 'São Paulo, BR',
      '47.6062,-122.3321': 'Seattle, WA',
      '25.7617,-80.1918': 'Miami, FL',
      '42.3601,-71.0589': 'Boston, MA',
      '19.4517,-70.6970': 'Santiago, DR'
    };
    return locations[`${lat},${lng}`] || 'Unknown Location';
  };

  const coachTypes = [...new Set(coaches.map(coach => coach.coachType))];
  const locations = [...new Set(coaches.map(coach => {
    const [lat, lng] = [coach.latitude, coach.longitude];
    return getLocationName(lat, lng);
  }))];

  useEffect(() => {
    const filteredCoaches = coaches.filter(coach => {
      const matchesSearch = coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            coach.coachType.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !selectedType || coach.coachType === selectedType;
      const matchesLocation = !selectedLocation || 
                               getLocationName(coach.latitude, coach.longitude) === selectedLocation;

      return matchesSearch && matchesType && matchesLocation;
    });

    onFilterChange(filteredCoaches);
  }, [searchTerm, selectedType, selectedLocation, coaches]);

  const handleClearFilters = () => {
    setIsResetting(true);
    setSearchTerm('');
    setSelectedType('');
    setSelectedLocation('');
    setTimeout(() => setIsResetting(false), 300);
  };

  return (
    <div className={`${styles.filterPanel} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle filters"
      >
        <span className={styles.filterIcon}></span>
        Filters 
      </button>

      <div className={styles.filterContent}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search coaches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${styles.searchInput} ${isResetting ? styles.resetting : ''}`}
          />
        </div>

        <div className={styles.filterGroup}>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className={`${styles.select} ${isResetting ? styles.resetting : ''}`}
          >
            <option value="">All Coach Types</option>
            {coachTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className={`${styles.select} ${isResetting ? styles.resetting : ''}`}
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <button
          className={`${styles.clearButton} ${isResetting ? styles.resetting : ''}`}
          onClick={handleClearFilters}
          disabled={!searchTerm && !selectedType && !selectedLocation}
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
