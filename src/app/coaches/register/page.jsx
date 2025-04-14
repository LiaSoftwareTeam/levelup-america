"use client";
import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function RegisterC() {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const languageOptions = document.querySelectorAll(
      '#languages-options input[type="checkbox"]'
    );
    languageOptions.forEach((option) => {
      option.addEventListener("change", () => {
        const selectedLanguages = Array.from(languageOptions)
          .filter((opt) => opt.checked)
          .map((opt) => opt.value);
        setLanguages(selectedLanguages);
        const selectedText = document.querySelector(".selected-text");
        selectedText.textContent =
          selectedLanguages.length > 0
            ? selectedLanguages.join(", ")
            : "Select languages";
        document.getElementById("languages").value =
          selectedLanguages.join(",");
      });
    });
  }, []);

  function validateForm() {
    const requiredFields = [
      "first-name",
      "last-name",
      "email",
      "phone",
      "location",
      "experience",
      "certification",
      "availability",
      "resume",
    ];

    let isValid = true;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("email").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("email").classList.remove("error");
    }

    // Validación de teléfono
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById("phone").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("phone").classList.remove("error");
    }

    // Verificar campos requeridos
    requiredFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (!field.value.trim()) {
        field.classList.add("error");
        isValid = false;
      } else {
        field.classList.remove("error");
      }
    });

    // Verificar idiomas
    if (languages.length === 0) {
      document.querySelector(".custom-select").classList.add("error");
      isValid = false;
    } else {
      document.querySelector(".custom-select").classList.remove("error");
    }

    // Verificar descripción
    const description = document.querySelector(".editor").textContent.trim();
    if (!description) {
      document.querySelector(".editor").classList.add("error");
      isValid = false;
    } else {
      document.querySelector(".editor").classList.remove("error");
    }

    return isValid;
  }

  function showLoader() {
    const loader = document.createElement("div");
    loader.className = "loader";
    loader.innerHTML =
      '<div class="spinner"></div><p>Sending application...</p>';
    containerRef.current.appendChild(loader);
    return loader;
  }

  function showSuccessMessage() {
    const successBox = document.createElement("div");
    successBox.className = "success-message";
    successBox.innerHTML = `
      <div class="success-icon">✓</div>
      <h2>Your application has been sent</h2>
      <a href="#" class="home-link">Back to the main page</a>
    `;
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(successBox);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    formRef.current.style.opacity = "0.5";
    formRef.current.style.pointerEvents = "none";

    // Simulando una llamada a la API
    setTimeout(() => {
      setLoading(false);
      showSuccessMessage();
    }, 2000);
  };

  const toggleLanguageDropdown = () => {
    const optionsContainer = document.getElementById("languages-options");
    optionsContainer.style.display =
      optionsContainer.style.display === "none" ? "block" : "none";
  };

  return (
    <div>
      <div className="container-register-coach" ref={containerRef}>
        <div className="product-type">
          <div className="header-apply">
            <h2>Coaching Specialties</h2>
          </div>
          <div className="category-grid">
            <div className="category-card">
              <div className="icon">🎯</div>
              <h3>Coaching</h3>
              <p>Achieve Goals</p>
            </div>
            <div className="category-card active">
              <div className="icon">💼</div>
              <h3>Mentoring</h3>
              <p>Guide Success</p>
            </div>
            <div className="category-card">
              <div className="icon">💬</div>
              <h3>Counseling</h3>
              <p>Emotional Support</p>
            </div>
            <div className="category-card">
              <div className="icon">🎓</div>
              <h3>Personal Development</h3>
              <p>Transform Yourself</p>
            </div>
          </div>
        </div>

        <div className="product-detail">
          <h2>Personal Information</h2>
          <form className="product-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder="City, Country" />
              </div>
              <div className="form-group">
                <label htmlFor="languages">Languages Spoken</label>
                <div className="custom-select">
                  <div
                    className="select-box"
                    id="languages-select"
                    onClick={toggleLanguageDropdown}
                  >
                    <span className="selected-text">Select languages</span>
                    <span className="arrow">▼</span>
                  </div>
                  <div className="options-container" id="languages-options">
                    <label className="option">
                      <input type="checkbox" value="english" /> English
                    </label>
                    <label className="option">
                      <input type="checkbox" value="spanish" /> Spanish
                    </label>
                    {/* <label className="option">
                      <input type="checkbox" value="french" /> French
                    </label>
                    <label className="option">
                      <input type="checkbox" value="german" /> German
                    </label>
                    <label className="option">
                      <input type="checkbox" value="italian" /> Italian
                    </label>
                    <label className="option">
                      <input type="checkbox" value="portuguese" /> Portuguese
                    </label>
                    <label className="option">
                      <input type="checkbox" value="chinese" /> Chinese
                    </label>
                    <label className="option">
                      <input type="checkbox" value="japanese" /> Japanese
                    </label>
                    <label className="option">
                      <input type="checkbox" value="korean" /> Korean
                    </label>
                    <label className="option">
                      <input type="checkbox" value="arabic" /> Arabic
                    </label> */}
                  </div>
                  <input type="hidden" id="languages" name="languages" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="experience">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  placeholder="Enter years of experience"
                />
              </div>
              <div className="form-group">
                <label htmlFor="certification">Certification Level</label>
                <select id="certification">
                  <option value="">Select certification level</option>
                  <option value="acc">ACC - Associate</option>
                  <option value="pcc">PCC - Professional</option>
                  <option value="mcc">MCC - Master</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="availability">Availability</label>
                <select id="availability">
                  <option value="">Select availability</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="resume">Resume/CV</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    className="file-input"
                  />
                  <label htmlFor="resume" className="upload-button">
                    <span className="upload-icon">📎</span>
                    Upload Resume (PDF, DOC, DOCX)
                  </label>
                  <p className="file-info">Maximum file size: 5MB</p>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="description">
                  Tell us more about yourself
                </label>
                <div className="rich-text-editor">
                  <div className="toolbar">
                    {/* <button type="button">B</button>
                    <button type="button">I</button>
                    <button type="button">U</button> */}
                  </div>
                  <div
                    className="editor"
                    contentEditable="true"
                    placeholder="Describe your coaching philosophy, methodology, and approach..."
                  ></div>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
