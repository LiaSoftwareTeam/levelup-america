"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function DonationPopup() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsActive(false);
  };

  return (
    <div>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="lazyOnload"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="lazyOnload"
      />
      <div className={`container-pp ${isActive ? "active" : ""}`}>
        <div className={`popup-overlay ${isActive ? "active" : ""}`} id="qrPopup">
          <div className="close" onClick={closePopup}>
            ✖
          </div>
          <div className="popup-content">
            <h2 className="popup-title">Scan the QR code!</h2>
            <p className="popup-text">Donate now for youth coaching</p>
            <div className="qr-code">
              <img src="/media/qr.png" alt="QR Code" />
            </div>
            <p className="popup-footer">
              With your donation, you're helping transform lives. Thank you so
              much for your support!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
