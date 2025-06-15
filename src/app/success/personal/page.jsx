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
          <section className="hero personal">
            <div className="hero-content">
              <h1>Develop your career, boost your success</h1>
              <p>
                Discover your true professional potential with our personalized
                coaching program.
              </p>
              <Link href="/advice/personal-development/personal-development-coaching" className="cta-button">
                Consulting for Personal Growth
              </Link>
            </div>
          </section>

          <section className="about-section">
            <div className="container-success">
              <div className="about-content">
                <div className="about-images">
                  <img
                    src="/media/success/secundaryb.jpg"
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
                  <div className="section-label">YOUTHS</div>
                  <h2>We work together for your professional success</h2>
                  <p>
                  We are a passionate team dedicated to empowering individuals in their careers. With years of coaching experience, we provide personalized solutions to enhance skills, build confidence, and unlock new opportunities. Whether you seek career advancement, leadership development, or a smooth transition, we’re here to support you every step of the way.
                  </p>
                  <ul className="about-features">
                    <li>Proven professional coaching methodology</li>
                    <li>Personalized approach for each individual</li>
                    <li>Measurable and sustainable career growth</li>
                  </ul>
                  <Link href="/events" className="cta-button">
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
                  Are you interested in learning more about Vivelup America and
                  how to advance your career?
                </h2>
                <Link
                  href="/information/personal-coaching"
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
                career development. We stand out for our personalized approach,
                proven methodology, and measurable results. Our commitment is to
                guide you step by step toward achieving your professional goals,
                equipping you with the tools and strategies needed to thrive in
                your career.
              </p>
              <div className="features">
                <div className="feature-card">
                  <div className="number-circle">1</div>
                  <h3>Strategic Planning</h3>
                  <p>
                    We create personalized career plans tailored to your
                    professional goals, fostering growth and aligning your
                    skills with career success.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="number-circle">2</div>
                  <h3>Skill Development</h3>
                  <p>
                  We enhance both your technical and soft skills to help you stand
                  out in your career.
                  </p>
                </div>
            
                <div className="feature-card">
                  <div className="number-circle">3</div>
                  <h3>Continuous Growth</h3>
                  <p>
                    We guide you in fostering sustainable professional growth
                    and continuous career development.
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
    <label htmlFor="full-name">Full Name*</label>
    <input
      type="text"
      id="full-name"
      name="full-name"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="location">Current Location*</label>
    <input type="text" id="location" name="location" required />
  </div>
  <div className="form-group">
    <label htmlFor="profession">Current Profession*</label>
    <input
      type="text"
      id="profession"
      name="profession"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="experience-level">Experience Level*</label>
    <select id="experience-level" name="experience-level" required>
      <option value="" disabled selected>
        Select your experience level
      </option>
      <option value="entry-level">Entry Level</option>
      <option value="mid-level">Mid Level</option>
      <option value="senior-level">Senior Level</option>
      <option value="executive">Executive</option>
      <option value="career-transition">Career Transition</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="personal-email">Personal Email*</label>
    <input
      type="email"
      id="personal-email"
      name="personal-email"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Phone Number*</label>
    <input type="tel" id="phone" name="phone" required />
  </div>
  <div className="form-group">
    <label htmlFor="consultation-type">Consultation Type*</label>
    <select
      id="consultation-type"
      name="consultation-type"
      required
    >
      <option value="" disabled selected>
        Select the consultation type
      </option>
      <option value="career-development">Career Development</option>
      <option value="leadership">Leadership Skills</option>
      <option value="job-search">Job Search Strategy</option>
      <option value="professional-transition">Career Transition</option>
      <option value="personal-brand">Personal Branding</option>
      <option value="productivity">Productivity Improvement</option>
    </select>
  </div>
  <div className="form-group full-width">
    <label htmlFor="message">Message or Specific Inquiry</label>
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
