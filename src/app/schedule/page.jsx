"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import "../styles/ui.css";
import Footer from "@/components/Footer";

export default function Schedule() {
  const [formData, setFormData] = useState({
    coachingType: "",
    coach: "",
    dateTime: "",
    modality: "",
    name: "",
    email: "",
  });

  const coachingTypes = [
    "Personal Development",
    "Business Coaching",
    "Life Coaching",
    "Career Guidance",
  ];

  const coaches = [
    "John Smith - Personal Development",
    "Sarah Johnson - Business Strategy",
    "Michael Brown - Life Coach",
    "Emily Davis - Career Expert",
  ];

  const modalities = ["In Person", "Virtual"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="hero schedule">
        <div className="hero-content">
          <h1>Schedule Your Coaching Session</h1>
          <p>
            Take the first step toward your transformation and unlock your full
            potential. Our personalized coaching will guide you with clarity,
            confidence, and purpose—start your journey today.
          </p> 
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="schedule-form">
          <div className="form-group">
            <label htmlFor="coachingType">Type of Coaching*</label>
            <select
              id="coachingType"
              name="coachingType"
              value={formData.coachingType}
              onChange={handleChange}
              required
            >
              <option value="">Select a coaching type</option>
              {coachingTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="coach">Available Coaches*</label>
            <select
              id="coach"
              name="coach"
              value={formData.coach}
              onChange={handleChange}
              required
            >
              <option value="">Select a coach</option>
              {coaches.map((coach) => (
                <option key={coach} value={coach}>
                  {coach}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dateTime">Date and Time*</label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Modality*</label>
            <div className="radio-group">
              {modalities.map((mode) => (
                <div key={mode} className="radio-option">
                  <input
                    type="radio"
                    id={mode}
                    name="modality"
                    value={mode}
                    checked={formData.modality === mode}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={mode}>{mode}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="submit-btn">
            Schedule Session
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
