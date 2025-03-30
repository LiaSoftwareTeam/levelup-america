"use client";
import { useState, useEffect } from 'react';
import './Notification.css';

export default function Notification({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation to complete
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${isVisible ? 'show' : ''}`}>
      {message}
    </div>
  );
}