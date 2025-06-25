"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import "../../about/about.css";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import Link from "next/link";

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
      <div className="background-content personal">
        <div className="filter">
          <div>
            <p>
              Building Your Path, <br /> Achieving Dreams
            </p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="side-left">
          <div className="about-img personal"></div>
          <div className="about-text">
            <span>Empowering You, Unlocking Your Future</span>
            <h3>Who We Are: Guiding Growth, Achieving Dreams</h3>
            <p>
              At Vivelup America, we are dedicated to helping young individuals
              reach their full potential through personalized mentorship and
              development programs. Our experienced team works closely with you
              to tackle challenges, build confidence, and foster a growth
              mindset. We believe that with the right support, every young
              person can overcome obstacles and achieve their dreams.
            </p>
            <p>
              Our approach focuses on creating sustainable strategies that align
              with your personal aspirations, ensuring that each step leads to
              meaningful progress. From enhancing your skills to building a
              strong foundation for your career, we provide tailored mentorship
              that drives both immediate results and long-term success. At Level
              Up America, we’re here to guide you in shaping your future and
              unlocking your full potential.
              <Link
                href="/success/personal"
                style={{
                  padding: "7px 20px",
                  color: "#f1f1f1",
                  textDecoration: "none",
                  background: "#0d66bf",
                  display: "block",
                  width: "150px",
                  textAlign: "center",
                  marginTop: "20px",
                  borderRadius: "4px",
                }}
              >
                Go To Page
              </Link>
            </p>

            <div
              style={{
                width: "100%",
                background: "#f1f1f1",
                height: "30px",
                display: "none",
              }}
            ></div>
            <h3 style={{ paddingTop: "10px", display: "none" }}>
              Why choose Vivelup?
            </h3>

            {/* <p>
              At <strong></strong>, we don't just provide
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
            </p> */}
          </div>
        </div>
        <div className="side-right">
          <div className="search-container" style={{ padding: "10px 0px" }}>
            <div class="details-container">
              <h2 style={{ marginBottom: "10px" }}>FAQs</h2>
              <details>
                <summary>How can mentorship help me?</summary>
                <div class="content">
                  Mentorship helps you overcome challenges, build confidence, and
                  develop the skills needed to achieve your personal and
                  professional goals.
                </div>
              </details>

              <details>
                <summary>What can I expect from the mentorship process?</summary>
                <div class="content">
                  You’ll receive personalized guidance and strategies tailored
                  to your unique aspirations, helping you grow both personally
                  and professionally.
                </div>
              </details>

              <details>
                <summary>Is mentorship only for career development?</summary>
                <div class="content">
                  No, our mentorship programs focus on various aspects, including
                  skill development, confidence-building, and personal growth,
                  all aimed at unlocking your potential.
                </div>
              </details>
            </div>
          </div>

          <div className="recent-posts">
            <h2>Upcoming Mentorships</h2>

            <a
              href="#"
              className="post-item"
              onClick={(e) =>
                handlePostClick(e, "Este post no está disponible por ahora")
              }
            >
              <img
                src="/media/services/card2.jpg"
                alt="Post image"
                className="post-image"
              />
              <div className="post-content">
                <h3 className="post-title">
                  A Young Man for History, Purpose, and Legacy
                </h3>
                <span className="post-date">1 July, 2025</span>
              </div>
            </a>
          </div>
     
        </div>
      </div>
      <Footer />
    </div>
  );
}
