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
              Level Up <br /> America
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
            <Link href="/coaches/register">Become a Member</Link>
            <Link href="/advice/bussines">Bussines Events</Link>
            <Link href="/advice/workshop">Workshop Events</Link>
            <Link href="/advice/corporate-events">Corporate Events</Link>
          </div>
          <div className="footer-section">
            <h3>Subscribe</h3>
            <p>
              Subscribe and follow us on our social media to receive our latest
              articles and resources.
            </p>
            <div className="contact-info" style={{ marginTop: "10px" }}>
              <p>
                Support:{" "}
                <a href="mailto:needhelp@company.com">
                  ContacUP@levelup.america.com
                </a>
              </p>
              <p>Phone: +1 ( 206 ) 333 - 0000</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <a href="https://maps.app.goo.gl/3E2s8BRctjbf7fP16">
              137 French st, New Brunswick, NJ
            </a>
            <a href="#">Terms of use</a>
            <a href="#">Privacy policy</a>
            <a href="#">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
