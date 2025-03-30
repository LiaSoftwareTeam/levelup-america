import { useState, useEffect } from "react";
import Script from "next/script";
export default function Sponsors() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="sponsors-container">
        <div className="top-row">
          <span>Support and trust</span>
          <h4>Our thanks to those who drive us</h4>
          <p>
            To our sponsors, thank you for believing in our mission and for
            contributing to the development of a space where learning,
            transformation, and leadership come to life. Your support motivates
            us to continue moving forward, expanding our vision and generating a
            positive impact on more people. Thank you for being part of this
            journey with us!
          </p>

          <a href="#">
            Be part of the cause{" "}
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </div>
        <div className="bot-row">
          <div className="slider-container">
            <div className={`slide ${activeSlide === 0 ? "active" : ""}`}>
              <div className="slide-text">
                <div className="text">
                  <div>
                    <span>Helps</span>
                    <p>More 100</p>
                  </div>
                  <div>
                    <p>Lives Transformed</p>
                    <span>More 200</span>
                  </div>
                </div>
                <div className="r-img"></div>
              </div>
            </div>
            <div className={`slide ${activeSlide === 1 ? "active" : ""}`}>
              <div className="slide-text"></div>
            </div>
            <div className={`slide ${activeSlide === 2 ? "active" : ""}`}>
              <div className="slide-text"></div>
            </div>
            <div className={`slide ${activeSlide === 3 ? "active" : ""}`}>
              <div className="slide-text"></div>
            </div>
          </div>

          <div className="thumbnails">
            <div className={`thumbnail ${activeSlide === 0 ? "active" : ""}`}>
              <img
                src="WhatsApp Image 2025-03-22 at 7.50.43 PM (1).jpeg"
                alt="Thumbnail 1"
              />
            </div>
            <div className={`thumbnail ${activeSlide === 1 ? "active" : ""}`}>
              <img
                src="WhatsApp Image 2025-03-22 at 7.50.43 PM.jpeg"
                alt="Thumbnail 2"
              />
            </div>
            <div className={`thumbnail ${activeSlide === 2 ? "active" : ""}`}>
              <img
                src="WhatsApp Image 2025-03-22 at 8.00.58 PM.jpeg"
                alt="Thumbnail 3"
              />
            </div>
            <div className={`thumbnail ${activeSlide === 3 ? "active" : ""}`}>
              <img
                src="WhatsApp Image 2025-03-22 at 8.00.59 PM.jpeg"
                alt="Thumbnail 4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
