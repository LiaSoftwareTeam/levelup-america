'use client';

import { useState, useEffect } from 'react';
import styles from './LocationOnboarding.module.css';

const tips = [
  {
    id: 1,
    title: "Welcome to the Coach Map",
    description: "Here you can find the location of all our certified coaches."
  },
  {
    id: 2,
    title: "Find Your Nearest Coach",
    description: "Explore the map to discover available coaches in your area."
  },
  {
    id: 3,
    title: "Detailed Information",
    description: "Click on any marker to see more information about the coach."
  }
  
];

const LocationOnboarding = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenLocationOnboarding');
    if (hasSeenOnboarding) {
      setShowOnboarding(false);
    }
  }, []);

  const handleNext = () => {
    if (currentTip < tips.length - 1) {
      setCurrentTip(currentTip + 1);
    }
  };

  const handleDontShowAgain = () => {
    if (!showAgain) {
      localStorage.setItem('hasSeenLocationOnboarding', 'true');
    }
    setShowOnboarding(false);
  };

  const [showAgain, setShowAgain] = useState(true);

  if (!showOnboarding) return null;

  return (
    <div className={styles['tip-location-overlay']}>
      <div className={styles['tip-location-container']}>
        <div className={styles['tip-location-content']}>
          <h3 className={styles['tip-location-title']}>{tips[currentTip].title}</h3>
          <p className={styles['tip-location-description']}>{tips[currentTip].description}</p>
        </div>
        <div className={styles['tip-location-footer']}>
          <div className={styles['tip-location-dots']}>
            {tips.map((_, index) => (
              <span
                key={index}
                className={`${styles['tip-location-dot']} ${currentTip === index ? styles['tip-location-dot-active'] : ''}`}
              />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            {currentTip === tips.length - 1 ? (
              <>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666' }}>
                  <input
                    type="checkbox"
                    checked={showAgain}
                    onChange={(e) => setShowAgain(e.target.checked)}
                  />
                 Show this tutorial next time
                </label>
                <button
                  className={styles['tip-location-button']}
                  onClick={handleDontShowAgain}
                >
                  View now
                </button>
              </>
            ) : (
              <button
                className={styles['tip-location-button']}
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationOnboarding;