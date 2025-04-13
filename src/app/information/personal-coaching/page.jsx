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
              At Level Up America, we are dedicated to helping young individuals
              reach their full potential through personalized coaching and
              development programs. Our experienced team works closely with you
              to tackle challenges, build confidence, and foster a growth
              mindset. We believe that with the right support, every young
              person can overcome obstacles and achieve their dreams.
            </p>
            <p>
              Our approach focuses on creating sustainable strategies that align
              with your personal aspirations, ensuring that each step leads to
              meaningful progress. From enhancing your skills to building a
              strong foundation for your career, we provide tailored coaching
              that drives both immediate results and long-term success. At Level
              Up America, we’re here to guide you in shaping your future and
              unlocking your full potential.

              <Link href="/success/personal" style={{padding:"7px 20px", color:"#f1f1f1", textDecoration:"none", background:"#0d66bf", display:"block", width:"150px", textAlign:"center", marginTop:"20px", borderRadius:"4px"}}>Go To Page</Link>
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
              Why choose LEVEL UP AMERICA?
            </h3>

            {/* <p>
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
            </p> */}
          </div>
        </div>
        <div className="side-right">
          <div className="search-container" style={{ padding: "10px 0px" }}>
            <div class="details-container">
              <h2 style={{ marginBottom: "10px" }}>FAQs</h2>
              <details>
                <summary>How can coaching help me?</summary>
                <div class="content">
                Coaching helps you overcome challenges, build confidence, and develop the skills needed to achieve your personal and professional goals.
                </div>
              </details>

              <details>
                <summary>What can I expect from the coaching process?</summary>
                <div class="content">
                You’ll receive personalized guidance and strategies tailored to your unique aspirations, helping you grow both personally and professionally.
                </div>
              </details>

              

              <details>
                <summary>Is coaching only for career development?</summary>
                <div class="content">
                No, our coaching programs focus on various aspects, including skill development, confidence-building, and personal growth, all aimed at unlocking your potential.
                </div>
              </details>
            </div>
          </div>

          <div className="recent-posts">
            <h2>RECENT POST</h2>

            <a
              href="#"
              className="post-item"
              onClick={(e) =>
                handlePostClick(e, "Este post no está disponible por ahora")
              }
            >
              <img
                src="/media/card1.jpg"
                alt="Post image"
                className="post-image"
              />
              <div className="post-content">
                <h3 className="post-title">
                  How Young People Can Turn Their Dreams into Reality
                </h3>
                <span className="post-date">Jan 01, 2026</span>
              </div>
            </a>
            <a
              href="#"
              className="post-item"
              onClick={(e) =>
                handlePostClick(e, "Este post no está disponible por ahora")
              }
            >
              <img
                src="/media/card2.jpg"
                alt="Post image"
                className="post-image"
              />
              <div className="post-content">
                <h3 className="post-title">
                  Building a Solid Path to Your Future
                </h3>
                <span className="post-date">Jan 04, 2026</span>
              </div>
            </a>
            <a
              href="#"
              className="post-item"
              onClick={(e) =>
                handlePostClick(e, "Este post no está disponible por ahora")
              }
            >
              <img
                src="/media/card3.jpg"
                alt="Post image"
                className="post-image"
              />
              <div className="post-content">
                <h3 className="post-title">Personal and Professional Growth</h3>
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
