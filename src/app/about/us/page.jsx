"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import "../about.css";
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
      <div className="background-content">
        <div className="filter">
          <div>
            <p>
              Our Commitment, <br /> Your Success
            </p>
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
              At <strong>Vivelup</strong>, we believe in the power of growth and
              transformation. Our mission is to help people realize their
              potential, overcome challenges, and turn their ideas into reality.
              Through mentoring, coaching, and counseling, we provide the
              support needed for each individual to achieve their personal and
              professional goals with confidence and clarity.
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
              environment also transforms. That's why, at Vivelup, we not only
              help people achieve their goals, but we foster a positive impact
              that transcends generations.
            </p>
            <div
              style={{ width: "100%", background: "#f1f1f1", height: "30px" }}
            ></div>
            <h3 style={{ paddingTop: "10px" }}>
              Coaching & Mentoring Services
            </h3>

            <p>
              At <strong>Vivelup</strong>, we offer a comprehensive range of
              services designed to support individuals, families, and
              professionals on their journey toward personal and professional
              growth. Our Life Mentoring Guidance and Life Coaching services
              focus on helping you define your goals, overcome obstacles, and
              build a fulfilling life with purpose. Whether you're navigating
              transitions, seeking clarity, or striving for a better version of
              yourself, our mentors and coaches provide personalized support
              every step of the way. For those facing deeper emotional or
              psychological challenges, our Life Counseling services offer a
              safe and confidential space to heal, grow, and thrive.
            </p>
            <p>
              Our support also extends to the professional and family spheres.
              Through Business Mentoring Guidance, entrepreneurs and
              professionals gain valuable insights and strategies to grow their
              businesses with confidence and accountability. Our Family Coaching
              and Mentoring services help strengthen relationships and create a
              harmonious family dynamic by fostering communication and joint
              development. Lastly, our Whole Wellness approach promotes a
              balanced lifestyle by integrating mind, body, and spirit—ensuring
              that you don’t just grow in one area of life, but elevate your
              entire being. At Vivelup America, we guide you to become your best
              self—personally, professionally, and holistically.
              <Link
                href="/coaches/team"
                style={{
                  padding: "7px 20px",
                  color: "#f1f1f1",
                  textDecoration: "none",
                  background: "#0d66bf",
                  display: "block",
                  width: "290px",
                  textAlign: "center",
                  marginTop: "20px",
                  borderRadius: "4px",
                }}
              >
                Connect with a professional
              </Link>
            </p>

            <div
              style={{ width: "100%", background: "#f1f1f1", height: "30px" }}
            ></div>

            <h3 style={{ paddingTop: "10px" }}>Why choose Vivelup America?</h3>

            <p>
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
              impact each person can have on their environment. With Vivelup
              America, you're not only investing in your success, but in a
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
          {/* <div className="tag-cloud">
            <p>TAG CLOUD</p>
            <div className="tag-cloud-content">
              <Link href="#">Growth</Link>
              <Link href="#">Mentoring</Link>
              <Link href="#">Leadership</Link>
              <Link href="#">Innovation</Link>
              <Link href="#">Empowerment</Link>
              <Link href="#">Success</Link>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
