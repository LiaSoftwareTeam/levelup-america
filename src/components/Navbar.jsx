"use client";
import "./components.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { auth } from "../app/firebase/config";
import { AlignCenter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons"; // Import pencil icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [consultingDropdown, setConsultingDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [teamDropdown, setTeamDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Add ion-icons script
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "module";
    script1.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
    script1.strategy = "lazyOnload";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.noModule = true;
    script2.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
    script2.strategy = "lazyOnload";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        const displayName = user.displayName || user.email.split("@")[0];
        localStorage.setItem("userName", displayName);
        localStorage.setItem("userEmail", user.email);
        setUserName(displayName);
      } else {
        setUserName("");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close all dropdowns when toggling mobile menu
    if (!mobileMenuOpen) {
      setServicesDropdown(false);
      setConsultingDropdown(false);
      setTeamDropdown(false);
    }
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
      <a
        href="https://panel-nine-kappa.vercel.app/"
        className="edit"
        id="edit"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px",
          borderRadius: "50%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
        target="_blank"
        rel="noopener noreferrer"
        title="Editar"
      >
        <FontAwesomeIcon icon={faPen} />
      </a>

      <nav className={`menu ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Image
            src="/media/header_logo.png"
            alt="Header Logo"
            width={50}
            height={40}
          />
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <Link href="/">Home</Link>
          {/* <Link href="/#about">About</Link> */}
          <div
            className="dropdown"
            onMouseEnter={() => !isMobile && setServicesDropdown(true)}
            onMouseLeave={() => !isMobile && setServicesDropdown(false)}
          >
            <Link
              href="/#services"
              className="dropdown-trigger"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setServicesDropdown(!servicesDropdown);
                }
              }}
            >
              About
              {isMobile && (
                <ion-icon
                  name="chevron-forward-outline"
                  style={{
                    marginLeft: "8px",
                    verticalAlign: "middle",
                    transition: "transform 0.3s ease",
                    transform: servicesDropdown ? "rotate(90deg)" : "rotate(0)",
                  }}
                ></ion-icon>
              )}
            </Link>
            <div
              className={`dropdown-content ${servicesDropdown ? "show" : ""}`}
            >
              <Link href="/about/us">About Us</Link>
              <Link href="/about/mission-values">Mission & Values</Link>
            </div>
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => !isMobile && setConsultingDropdown(true)}
            onMouseLeave={() => !isMobile && setConsultingDropdown(false)}
          >
            <Link
              href="/#events"
              className="dropdown-trigger"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setConsultingDropdown(!consultingDropdown);
                }
              }}
            >
              Consulting and events
              {isMobile && (
                <ion-icon
                  name="chevron-forward-outline"
                  style={{
                    marginLeft: "5px",
                    transition: "transform 0.3s ease",
                    verticalAlign: "middle",
                    transform: consultingDropdown
                      ? "rotate(90deg)"
                      : "rotate(0)",
                  }}
                ></ion-icon>
              )}
            </Link>
            <div
              className={`dropdown-content ${consultingDropdown ? "show" : ""}`}
            >
              <Link href="/advice/all">All Events</Link>
              <Link href="/advice/personal-development/personal-development-coaching">
                Young Visionaries
              </Link>
              <Link href="/advice/personal-development/academic">Academic</Link>
              <Link href="/advice/personal-development/professional-future">
                Professional Future
              </Link>
              <Link href="/advice/bussines">Business</Link>
              <Link href="/advice/workshop">Workshops</Link>
              <Link href="/advice/corporate-events">Corporate Events</Link>
              <Link href="/advice/training-programs">Training Programs</Link>
            </div>
          </div>
          <Link href="/">Success</Link>
          <div
            className="dropdown"
            onMouseEnter={() => !isMobile && setTeamDropdown(true)}
            onMouseLeave={() => !isMobile && setTeamDropdown(false)}
          >
            <Link
              href="/#team"
              className="dropdown-trigger"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setTeamDropdown(!teamDropdown);
                }
              }}
            >
              Team
              {isMobile && (
                <ion-icon
                  name="chevron-down-outline"
                  style={{
                    marginLeft: "5px",
                    transition: "transform 0.3s ease",
                    verticalAlign: "middle",
                    transform: teamDropdown ? "rotate(90deg)" : "rotate(0)",
                  }}
                ></ion-icon>
              )}
            </Link>
            <div className={`dropdown-content ${teamDropdown ? "show" : ""}`}>
              {/* <Link href="/#team">Meet Our Team</Link> */}
              <Link href="/coaches/register">Be Part Of The Team</Link>
            </div>
          </div>
          {/* <Link href="/#testimonial">Testimonials</Link>
          <Link href="/#contact">Contact</Link> */}
        </div>
        <div className="user-profile">
          {userName ? (
            <div className="profile-circle">
              {userName.charAt(0).toUpperCase()}
            </div>
          ) : (
            <Link href="/register">
              <button className="register-button">Register</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
