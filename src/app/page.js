"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./testing/home.css";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Services from "@/components/Services";
import Ideas from "@/components/Ideas";
import Categories from "@/components/Categories";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DonationPopup from "@/components/Popup";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const text = "SCROLL DOWN • SCROLL DOWN • ";
  const chars = text.split("");
  return (
    <div>
      <Loader />
      <div>
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
        {/* menu section */}
        <menu
          className={`menu-home ${scrolled ? "scrolled" : ""}`}
          id="menu-home"
        >
          <div className="menu-logo"></div>
          <div className="links-home" id="link-home">
            <span
              onClick={() => {
                document
                  .getElementById("aboutlinks")
                  .classList.toggle("active");
                document
                  .getElementById("development")
                  .classList.remove("active");
                document
                  .getElementById("eventslinks")
                  .classList.remove("active");
                document
                  .getElementById("successlinks")
                  .classList.remove("active");
                document.getElementById("teamlinks").classList.remove("active");
              }}
            >
              About
            </span>
            <div id="aboutlinks" className="drop-links">
              <Link href="/about/us">
                <div className="bullet"></div>About US
              </Link>
              <Link href="/about/mission-values">
                <div className="bullet"></div>Mission, Vision & Values
              </Link>
              <Link href="/about/sponsors">
                <div className="bullet"></div>Contributors
              </Link>
            </div>

            <span
              onClick={() => {
                document
                  .getElementById("development")
                  .classList.toggle("active");
                //
                document
                  .getElementById("aboutlinks")
                  .classList.remove("active");
                document
                  .getElementById("eventslinks")
                  .classList.remove("active");
                document
                  .getElementById("successlinks")
                  .classList.remove("active");
                document.getElementById("teamlinks").classList.remove("active");
              }}
            >
              Development
            </span>

            <div id="development" className="drop-links">
              <Link href="/mentorship/vivelup-next">
                <div className="bullet"></div>Vivelup Next
              </Link>
              <Link href="/mentorship/vivelup-family">
                <div className="bullet"></div>Vivelup Family
              </Link>
              <Link href="/mentorship/brainstorming">
                <div className="bullet"></div>Vivelup Brainstorming
              </Link>
              <Link href="/mentorship/mind-motion">
                <div className="bullet"></div>Mind & Motion
              </Link>
            </div>
            <span
              onClick={() => {
                document
                  .getElementById("eventslinks")
                  .classList.toggle("active");

                document
                  .getElementById("aboutlinks")
                  .classList.remove("active");
                document
                  .getElementById("development")
                  .classList.remove("active");
                document
                  .getElementById("successlinks")
                  .classList.remove("active");
                document.getElementById("teamlinks").classList.remove("active");
              }}
            >
              Events
            </span>

            <div id="eventslinks" className="drop-links">
              <Link href="/events/">
                <div className="bullet"></div>Next Events
              </Link>
            </div>
            <span
              onClick={() => {
                document
                  .getElementById("successlinks")
                  .classList.toggle("active");
                document
                  .getElementById("aboutlinks")
                  .classList.remove("active");
                document
                  .getElementById("eventslinks")
                  .classList.remove("active");
                document
                  .getElementById("development")
                  .classList.remove("active");
                document.getElementById("teamlinks").classList.remove("active");
              }}
            >
              Success
            </span>
            <div id="successlinks" className="drop-links">
              <Link href="/success/personal">
                <div className="bullet"></div> Personal Success
              </Link>
              <Link href="/success/business">
                <div className="bullet"></div>Business Success
              </Link>
            </div>
            <span
              onClick={() => {
                document.getElementById("teamlinks").classList.toggle("active");
                document
                  .getElementById("aboutlinks")
                  .classList.remove("active");
                document
                  .getElementById("eventslinks")
                  .classList.remove("active");
                document
                  .getElementById("successlinks")
                  .classList.remove("active");
                document
                  .getElementById("development")
                  .classList.remove("active");
              }}
            >
              Team
            </span>
            <div id="teamlinks" className="drop-links">
              <Link href="/coaches/team">
                <div className="bullet"></div>Meet our Professionals
              </Link>
              {/* <Link href="/">
                <div className="bullet"></div>Apply Now
              </Link> */}
            </div>
            <span
              onClick={() => {
                alert("The contact email is currently unavailable.");
              }}
            >
              Contact
            </span>

            {/*  */}

            {/* <Link href="/register">Register</Link> */}
          </div>
          <div
            className="icon-menu"
            id="icon-menu"
            onClick={() => {
              document.getElementById("menu-home").classList.toggle("active");
              document.getElementById("icon-menu").classList.toggle("active");
              document.getElementById("link-home").classList.toggle("active");

              document.getElementById("aboutlinks").classList.remove("active");
              document.getElementById("eventslinks").classList.remove("active");
              document
                .getElementById("successlinks")
                .classList.remove("active");
              document.getElementById("teamlinks").classList.remove("active");
              document.getElementById("development").classList.remove("active");
            }}
          >
            <div className="line cross-y" id="cross-y"></div>
            <div className="line cross-x" id="cross-x"></div>
            <div className="line last"></div>
          </div>
        </menu>
        <section className="home-section" id="home-section">
          <div className="home-elements-container">
            <div className="text-content">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Developing <span>your mind</span> <br />
                Elevating <span>your life</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Awaken your potential, take control of your story, and stop
                waiting. Start today to build the life you dream of, overcome
                your limits, challenge your fears, and become the leader of your
                own path.
              </motion.p>
              <motion.div
                className="btn-actions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/about/us" className="btn-action">
                  Learn about us{" "}
                  <ArrowRight
                    size={20}
                    className="btn-icon"
                    style={{
                      padding: "6px",
                    }}
                  />
                </Link>
                <Link
                  href="/advice/personal-development/personal-development-coaching"
                  className="btn-action action-bg"
                >
                  Get Mentorship{" "}
                  <ArrowRight
                    size={20}
                    className="btn-icon"
                    style={{
                      padding: "6px",
                    }}
                  />
                </Link>
              </motion.div>
            </div>
            <div
              className="btn-down"
              onClick={() => {
                document
                  .getElementById("about-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="scroll-btn">
                <div className="scroll-circle">
                  <div className="scroll-text">
                    {chars.map((char, i) => (
                      <span
                        key={i}
                        style={{ "--rotate": `${i * (360 / chars.length)}deg` }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="arrow-container">
                  <ArrowRight
                    size={45}
                    className="arrow"
                    style={{
                      padding: "6px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-desc-section" id="about-section">
          <div className="about-elements-container">
            <div className="images-elements-about">
              <div className="img">
                <Play className="icon-play" />
              </div>
              <div className="decorator-img">
                <div className="decorator"></div>
                <div className="img img2">
                  <Play className="icon-play" />
                </div>
              </div>
            </div>
            <div className="text-elements-about">
              <div className="subtitle">
                <span>about us</span>
              </div>
              <h2>
                Discover <span>how to</span> change <span>your life</span>
              </h2>
              <p>
                Through personalized mentoring and coaching, we help you gain
                clarity, overcome challenges, and confidently pursue the life
                you envision.
              </p>

              <Link href="/success/personal" className="list">
                <ArrowRight className="list-about" />{" "}
                <span>Path to personal success</span>
              </Link>
              <Link href="/success/business" className="list">
                <ArrowRight className="list-about" />{" "}
                <span>Professional success with purpose</span>
              </Link>
              <Link href="/coaches/team" className="list">
                <ArrowRight className="list-about" />{" "}
                <span>Get coaching with experts</span>
              </Link>

              <div className="ceo-profile">
                <div className="img"></div>
                <div className="info">
                  <p>CEO & FUNDER</p>
                  <span>Victor Familia</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Services />
      <Ideas />
      <Categories />
      <Testimonial />
      {/* <Team /> */}
      <Contact />
      <Footer />
      <DonationPopup />
    </div>
  );
}
