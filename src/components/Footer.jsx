import Script from "next/script";
import Link from "next/link";
export default function () {
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

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              Vivelup <br /> America
            </div>
            <p className="message">
              Great Experience for Building Customers & Businesses
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Explore</h3>
            <Link href="/events">All Events</Link>
            <Link href="/mentorship/vivelup-next">Vivelup Next</Link>
            <Link href="/mentorship/vivelup-family">Vivelup Family</Link>
            <Link href="/mentorship/brainstorming">Vivelup Brainstorming</Link>
            <Link href="/mentorship/mind-motion">Mind & Motion</Link>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>
              Get in touch with us through our contact channels for any
              questions, support, or collaborations. We’re here to help!
            </p>
            <div className="contact-info" style={{ marginTop: "10px" }}>
              <p>
                Get Information:{" "}
                <a href="mailto:info@levelup.com">
                  info@vivelup.com
                </a>
              </p>
              <p>Phone: +1 ( 206 ) 333 - 0000</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <a href="https://maps.app.goo.gl/3E2s8BRctjbf7fP16">
              137 French st, New Brunswick, NJ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
