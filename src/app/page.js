"use client";
import { useEffect, useState } from "react";
import "./animations.css";
import "./styles.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Commitment from "@/components/Commitment";
import Team from "@/components/Team";
import Ideas from "@/components/Ideas";
import Categories from "@/components/Categories";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DonationPopup from "@/components/Popup";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/media/img1.jpg",
    "/media/img2.jpg",
    "/media/img3.jpg",
    "/media/img4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen relative overflow-hidden">
        <section className="slideshow-section">
          <div className="slideshow-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            ))}
          </div>
          <div className="slide-controls">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slide-control-btn ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => handleSlideChange(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </main>

      {/* home */}
      <section className="home" id="home">
        <div className="text-start">
          <h2>
            {" "}
            <span>Elevating </span>
            <span>Your </span>
            <span>Life, </span>
            <br />
            <span>Developing </span>
            <span>Your </span>
            <span>Mind </span>
          </h2>
          <button>Read More</button>
        </div>

        <div className="box-decorator">
          <div className="decorator1"></div>
          <div className="decorator2"></div>
        </div>
      </section>
      
      <About />
      <Services />
      <Ideas />
      <Categories />
      <Testimonial />
      {/* <Commitment /> */}
      <Team />
      {/* <Sponsors /> */}
      <Contact />
      <Footer />
     <DonationPopup />
    </>
  );
}
