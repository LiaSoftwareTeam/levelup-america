import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../styles.css";
import Link from "next/link";

export default function BusinessSuccess() {
  return (
    <div>
      <Navbar />
      <div>
        <main>
          <section className="hero">
            <div className="hero-content">
              <h1>Develop your business, boost your success</h1>
              <p>
                Discover your true professional potential with our personalized
                coaching program.
              </p>
              <Link href="/advice/bussines" className="cta-button">
                Consulting For Business
              </Link>
            </div>
          </section>

          <section className="about-section">
            <div className="container-success">
              <div className="about-content">
                <div className="about-images">
                  <img
                    src="/media/success/principalb.jpg"
                    alt=""
                    className="main-image"
                    loading="lazy"
                  />
                  <div className="image-grid">
                    <img
                      src="/media/success/primary.jpg"
                      alt=""
                      className="grid-image"
                      loading="lazy"
                    />
                    <img
                      src="/media/success/secundary.jpg"
                      alt=""
                      className="grid-image"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="about-text">
                  <div className="section-label">BUSINESS</div>
                  <h2>We work together for your professional success</h2>
                  <p>
                    We are a passionate team of professionals dedicated to
                    empowering talent development within organizations. With
                    years of experience in executive coaching and professional
                    development, we offer customized solutions that optimize
                    performance, boost leadership, and strengthen corporate
                    culture.
                  </p>
                  <ul className="about-features">
                    <li>Proven executive coaching methodology</li>
                    <li>Personalized approach for each company</li>
                    <li>Measurable and sustainable results</li>
                  </ul>
                  <Link href="/advice/all" className="cta-button">
                    Start now with advice
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section
            className="vistage-section"
            style={{
              backgroundColor: "#f5f5f5",
              textAlign: "center",
              padding: "60px 0",
            }}
          >
            <div className="container-success">
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ marginBottom: "20px" }}>
                  Are you interested in learning more about Level Up America and
                  how to improve your business?
                </h2>
                <Link
                  href="/information/businnes-coaching"
                  className="cta-button"
                  style={{ display: "inline-block" }}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </section>

          <section className="about-us">
            <div className="container-success">
              <h2>Why choose advice from us?</h2>
              <p>
                We are a team of certified coaches with extensive experience in
                professional development. We stand out for our personalized
                approach, proven methodology, and tangible results. Our
                commitment is to guide you step by step toward achieving your
                professional goals, providing you with the tools and strategies
                necessary to excel in your career.
              </p>
              <div className="features">
                <div className="feature-card">
                  <div className="number-circle">1</div>
                  <h3>Strategic Planning</h3>
                  <p>
                    We create personalized career plans tailored to your
                    company's objectives, fostering growth and aligning talent
                    with organizational goals.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="number-circle">2</div>
                  <h3>Skill Development</h3>
                  <p>
                    We enhance both your technical and soft skills to help you
                    stand out in your industry.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="number-circle">3</div>
                  <h3>Continuous Growth</h3>
                  <p>
                    We guide your company in fostering sustainable professional
                    success and ongoing development for your team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="consultation-form">
            <div className="container-success">
              <h2>Get advice now</h2>
              <p>
                Complete the form to request a personalized consultation for
                your business
              </p>
              <form className="business-form">
                <div className="form-group">
                  <label for="company-name">Company Name*</label>
                  <input
                    type="text"
                    id="company-name"
                    name="company-name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="location">Operating Location*</label>
                  <input type="text" id="location" name="location" required />
                </div>
                <div className="form-group">
                  <label for="registration">
                    Business Registration Number*
                  </label>
                  <input
                    type="text"
                    id="registration"
                    name="registration"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="position">Position in the Company*</label>
                  <select id="position" name="position" required>
                    <option value="" disabled selected>
                      Select your position
                    </option>
                    <option value="director-general">
                      CEO / General Director
                    </option>
                    <option value="department-director">
                      Department Director
                    </option>
                    <option value="manager">Manager</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="coordinator">Coordinator</option>
                    <option value="analyst">Analyst</option>
                    <option value="specialist">Specialist</option>
                    <option value="technician">Technician</option>
                    <option value="assistant">Assistant</option>
                    <option value="consultant">Consultant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="business-email">Business Email*</label>
                  <input
                    type="email"
                    id="business-email"
                    name="business-email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="phone">Personal Phone Number*</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label for="consultation-type">Consultation Type*</label>
                  <select
                    id="consultation-type"
                    name="consultation-type"
                    required
                  >
                    <option value="" disabled selected>
                      Select the consultation type
                    </option>
                    <option value="career-development">
                      Career Development
                    </option>
                    <option value="leadership">Leadership Skills</option>
                    <option value="team-management">Team Management</option>
                    <option value="professional-transition">
                      Professional Transition
                    </option>
                    <option value="personal-brand">Personal Branding</option>
                    <option value="productivity">
                      Productivity Improvement
                    </option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label for="message">Message or Specific Inquiry</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" className="cta-button">
                  Request Consultation
                </button>
              </form>
            </div>
          </section>

          <section className="newsletter">
            <div className="container-success">
              <h2>Receive Exclusive Content</h2>
              <p>
                Subscribe to our newsletter for tips, resources, and updates.
              </p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="cta-button">
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
