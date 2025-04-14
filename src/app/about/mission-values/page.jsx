import Navbar from "@/components/Navbar";
import "../about.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";

export default function misionvalues() {
  return (
    <div>
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
      </div>
      <Navbar />
      <div className="background-content">
        <div className="filter">
          <div>
            <p>
              Our Mission, Your Growth <br /> Our Values, Your Trust.
            </p>
          </div>
        </div>
      </div>
      <div className="mision-values-container">
        <div className="mision">
          <div className="mision-img"></div>
          <div className="mision-text">
            <span>mision</span>
            <h3>Our Mission: Driving Your Growth and Success</h3>
            <p>
              Empower individuals across the Americas to elevate their lives and
              ideas through personalized coaching, mentorship, and community
              support—bridging personal and professional growth into a single
              transformative journey.
            </p>

            <div className="mision-images">
              <img src="/media/about/img1.jpg" alt="" />
              <img src="/media/about/img2.jpg" alt="" />
            </div>
            <Link href="/advice/all">Get Coaching</Link>
          </div>
        </div>
        <div className="values">
          <div className="values-text">
            <h3>Our Values, Your Trust</h3>
            <p>
              We are committed to integrity, excellence, and innovation,
              building lasting relationships through trust and reliability.
            </p>
          </div>
          <div className="values-boxes">
            <div className="box">
              <p>Integrity</p>
              <span>
                Success is built on strong principles, trust, honesty, and
                ethics.
              </span>
            </div>

            <div className="box">
              <p>Innovation</p>
              <span>
                We innovate in coaching, fostering creativity and turning ideas
                into opportunities.
              </span>
            </div>

            <div className="box">
              <p>Commitment</p>
              <span>
                We passionately support the growth of youth and businesses with
                responsibility.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
