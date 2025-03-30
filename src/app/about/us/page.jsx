"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import "../about.css";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";

export default function about() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handlePostClick = (e, message) => {
    e.preventDefault();
    setNotificationMessage(message);
    setShowNotification(true);
  };

  return (
    <div>
      <Navbar />
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className="background-content">
        <div className="filter">
          <div>
            <p>Our Commitment, <br /> Your Success</p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="side-left">
          <div className="about-img"></div>
          <div className="about-text">
            <span>Empowering Lives, Creating Opportunities</span>
            <h3>Who we are: Driving growth and transformation</h3>
            <p>
              At <strong>LEVEL UP AMERICA</strong>, we believe in the power of
              growth and transformation. Our mission is to help people realize
              their potential, overcome challenges, and turn their ideas into
              reality. Through mentoring, coaching, and counseling, we provide
              the support needed for each individual to achieve their personal
              and professional goals with confidence and clarity.
            </p>
            <p>
              We are distinguished by our comprehensive approach, which ranges
              from emotional well-being to business development. We work
              alongside{" "}
              <strong>entrepreneurs, professionals, and families</strong>,
              guiding them on their path to success through practical tools and
              effective strategies. More than a service, we offer a growth
              experience where each person finds inspiration, learning, and
              community.
            </p>
            <p>
              We are an empowerment movement that connects people with
              opportunities, fostering their growth and contributing to a
              stronger society. We believe that as a person grows, their
              environment also transforms. That's why, at LEVEL UP AMERICA, we
              not only help people achieve their goals, but we foster a positive
              impact that transcends generations.
            </p>

            <div
              style={{ width: "100%", background: "#f1f1f1", height: "30px" }}
            ></div>
            <h3 style={{ paddingTop: "10px" }}>Why choose LEVEL UP AMERICA?</h3>

            <p>
              At <strong>LEVEL UP AMERICA</strong>, we don't just provide
              mentoring and coaching, we create an environment for real and
              sustainable growth. Our personalized approach ensures that each
              person receives the right guidance and tools for their
              development, whether personal, professional, or business. We have
              a team of committed experts who will guide you step by step so you
              can achieve your goals with clarity and confidence.
            </p>

            <p>
              What sets us apart is our vision of comprehensive transformation.
              We don't just help you improve skills or achieve specific goals,
              but rather we accompany you in a process of continuous evolution.
              We believe in the power of collective growth and the positive
              impact each person can have on their environment. With LEVEL UP
              AMERICA, you're not only investing in your success, but in a
              community that drives change and innovation.
            </p>
          </div>
        </div>
        <div className="side-right">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Keyword" />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          </div>

          <div className="recent-posts">
            <h2>RECENT POST</h2>

            <a href="#" className="post-item" onClick={(e) => handlePostClick(e, "Este post no está disponible por ahora")}>
              <img src="/media/card1.jpg" alt="Post image" className="post-image" />
              <div className="post-content">
                <h3 className="post-title">
                How Young People Can Turn Their Dreams into Reality
                </h3>
                <span className="post-date">Jan 01, 2026</span>
              </div>
            </a>
            <a href="#" className="post-item" onClick={(e) => handlePostClick(e, "Este post no está disponible por ahora")}>
              <img src="/media/card2.jpg" alt="Post image" className="post-image" />
              <div className="post-content">
                <h3 className="post-title">
                Building a Solid Path to Your Future
                </h3>
                <span className="post-date">Jan 04, 2026</span>
              </div>
            </a>
            <a href="#" className="post-item" onClick={(e) => handlePostClick(e, "Este post no está disponible por ahora")}>
              <img src="/media/card3.jpg" alt="Post image" className="post-image" />
              <div className="post-content">
                <h3 className="post-title">
                Personal and Professional Growth
                </h3>
                <span className="post-date">Jun 01, 2025</span>
              </div>
            </a>
          </div>
          <div className="tag-cloud">
            <p>TAG CLOUD</p>
            <div className="tag-cloud-content">
              <a href="#">Growth</a>
              <a href="#">Mentoring</a>
              <a href="#">Leadership</a>
              <a href="#">Innovation</a>
              <a href="#">Empowerment</a>
              <a href="#">Success</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
