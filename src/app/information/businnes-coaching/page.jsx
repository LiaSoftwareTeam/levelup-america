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
      <div className="background-content busines">
        <div className="filter">
          <div>
            <p>
              Your Success,
              <br /> Our Priority
            </p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="side-left">
          <div className="about-img business"></div>
          <div className="about-text">
            <span>Empowering Businesses, Unlocking Potential</span>
            <h3>Who We Are: Driving Growth, Shaping Success</h3>
            <p>
              At Vivelup America, we are dedicated to helping businesses reach
              their full potential through personalized mentorship and
              development programs. Our experienced team works closely with
              leaders and organizations to address specific challenges, improve
              leadership capabilities, and foster a culture of growth and
              success. We believe that with the right support and guidance, any
              business can overcome obstacles and achieve remarkable results.
            </p>
            <p>
              Our approach focuses on creating sustainable strategies that align
              with your company’s goals, ensuring that each step leads to
              measurable improvement. From enhancing team collaboration to
              refining executive decision-making, we provide tailored mentorship
              that drives both immediate impact and long-term success. At Level
              Up America, we’re here to help you navigate the complexities of
              today’s business world and unlock your company’s true potential.
              <Link
                href="/success/business"
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
              Why choose Vivelup AMERICA?
            </h3>

            {/* <p>
              At <strong>Vivelup America</strong>, we don't just provide
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
                <summary>How can mentorship benefit my company?</summary>
                <div class="content">
                  Mentorship helps enhance leadership skills, improve team
                  collaboration, and foster a culture of growth, leading to
                  improved business performance.
                </div>
              </details>

              <details>
                <summary>
                  Is mentorship suitable for all levels within the company?
                </summary>
                <div class="content">
                  Yes, our mentorship programs are designed for everyone, from
                  executives to new employees, ensuring that all levels of your
                  organization benefit from growth and development.
                </div>
              </details>

              <details>
                <summary>How do we get started with mentorship?</summary>
                <div class="content">
                  Contact us to discuss your company’s needs, and we will design
                  a customized mentorship program that aligns with your business
                  goals and drives long-term success.
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
