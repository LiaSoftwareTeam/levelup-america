"use client";
import "./components.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "../app/firebase/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [consultingDropdown, setConsultingDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="menu">
        <div className="logo">
          <Image src="/media/header_logo.png" alt="Header Logo" width={50} height={40} />
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Services</Link>
          <div className="dropdown" 
               onMouseEnter={() => setConsultingDropdown(true)}
               onMouseLeave={() => setConsultingDropdown(false)}>
            <Link href="/" className="dropdown-trigger">Consulting and events</Link>
            <div className="dropdown-content">
              <Link href="/consulting">Business Consulting</Link>
              <Link href="/workshops">Workshops</Link>
              <Link href="/events">Corporate Events</Link>
              <Link href="/training">Training Programs</Link>
            </div>
          </div>
          <Link href="/">Team</Link>
          <Link href="/">Testimonials</Link>
          <Link href="/">Contact</Link>
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
