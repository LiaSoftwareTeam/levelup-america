import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../../styles/ui.css";
import Link from "next/link";

export default function BusinessSuccess() {
  return (
    <div>
      <Navbar />
      <div>
        <main>
          <section className="hero personal">
            <div className="hero-content">
              <h1>Empower your career, transform lives</h1>
              <p>
                Unlock your full potential as a coach through a program designed
                to help you grow professionally while making a meaningful impact
                on others.
              </p>
              <Link href="/coaches/register" className="cta-button">
                Become a Coach
              </Link>
            </div>
          </section>

          <section
            className=""
            style={{
              backgroundColor: "",
              textAlign: "center",
              padding: "60px 0",
            }}
          >
            <div className="container-general">
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ marginBottom: "20px", fontSize: "27px" }}>
                  Meet your coaches: guides committed to helping you grow,
                  believe in yourself, and build your path with confidence.
                </h2>
              </div>
            </div>
          </section>

          <section className="container-general">
            <div className="row top-row">
              <div className="card-top card">
                <div className="date-card">
                  <p>New</p>
                </div>
                <div className="profile-card"></div>
                <div className="info-card">
                  <p>Victor Familia</p>
                  <span>CEO & coach</span>
                  <span className="description">
                    Leadership, personal development, and limit-pushing coach
                  </span>
                </div>
                <div className="btn-action-card">
                  <Link href="/coaches/team/victor-familia">Get in touch</Link>
                </div>
                <div className="skills-card">
                  <p>Skills *</p>
                  <div className="skills-items">
                    <span>Empathy</span>
                    <span>Listening</span>
                    <span>Communication</span>
                    <span>Motivation</span>
                    <span>Leadership</span>
                  </div>
                </div>
              </div>
              <div className="video-container">
                <div className="video">
                  <iframe
                    src="https://www.youtube.com/embed/CJgcq90Fbcw?si=TtI9SGAwyfFGxMAp"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <div className="phrase">
                    <p>
                      "Darkness offers the perfect opportunity to transform the
                      ordinary into something extraordinary."
                    </p>
                    <span>— Victor Familia</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row cards-row">
              <div className="card-top card">
                <div className="date-card">
                  <p>New</p>
                </div>
                <div className="profile-card one"></div>
                <div className="info-card">
                  <p>Eldris Valenzuela</p>
                  <span>Wellness and Nutrition Mentor</span>
                  <span className="description">
                    Empowering healthy habits for body, mind, and family
                  </span>
                </div>
                <div className="btn-action-card">
                  <Link href="/coaches/team/eldris-valenzuela">
                    Get in touch 
                  </Link>
                </div>
                <div className="skills-card">
                  <p>Skills *</p>
                  <div className="skills-items">
                    <span>Empathy</span>
                    <span>Family support</span>
                    <span>Awareness</span>
                    <span>Healthy routines</span>
                  </div>
                </div>
              </div>

              {/* <div className="card-top card">
                <div className="date-card">
                <p style={{ background: "none", color: "transparent" }}>
                    New
                  </p>
                </div>
                <div className="profile-card two"></div>
                <div className="info-card">
                  <p>James Turner</p>
                  <span>Personal coach</span>
                  <span className="description">
                    Career growth, mindset shifts, and life clarity coach
                  </span>
                </div>
                <div className="btn-action-card">
                  <Link href="/">Get in touch</Link>
                </div>
                <div className="skills-card">
                  <p>Skills *</p>
                  <div className="skills-items">
                    <span>Mindset</span>
                    <span>Goals</span>
                    <span>Planning</span>
                    <span>Motivation</span>
                    <span>Strategy</span>
                  </div>
                </div>
              </div> */}

              {/* <div className="card-top card">
                <div className="date-card">
                  <p style={{ background: "none", color: "transparent" }}>
                    New
                  </p>
                </div>
                <div className="profile-card three"></div>
                <div className="info-card">
                  <p>Helen Reed</p>
                  <span>Business coach</span>
                  <span className="description">
                    Purpose alignment, goal setting, and resilience coaching
                  </span>
                </div>
                <div className="btn-action-card">
                  <Link href="/">Get in touch</Link>
                </div>
                <div className="skills-card">
                  <p>Skills *</p>
                  <div className="skills-items">
                    <span>Resilience</span>
                    <span>Management</span>
                    <span>Accountability</span>
                    <span>Focus</span>
                  </div>
                </div>
              </div> */}
            </div>
          </section>

          <section className="about-us">
            <div className="container-general">
              <h2>Why join us as a coach?</h2>
              <p>
                Become part of a mission-driven team that’s transforming lives
                through career development. At Level Up America, we empower
                coaches with cutting-edge tools, a supportive community, and the
                opportunity to make a real difference in people’s lives—while
                growing professionally.
              </p>
              <div className="features">
                <div className="feature-card">
                  <div className="number-circle">1</div>
                  <h3>Make an Impact</h3>
                  <p>
                    Help individuals unlock their potential and achieve
                    meaningful career growth. Your guidance can change lives and
                    open doors for those who need it most.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="number-circle">2</div>
                  <h3>Grow With Us</h3>
                  <p>
                    We invest in your development too. Get access to training,
                    resources, and a network of professionals who support your
                    journey as a coach.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="number-circle">3</div>
                  <h3>Flexibility & Autonomy</h3>
                  <p>
                    Work on your terms with flexible hours and the freedom to
                    bring your unique coaching style. We value your experience
                    and trust your expertise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className=""
            style={{
              backgroundColor: "#f5f5f5",
              textAlign: "center",
              padding: "60px 0",
            }}
          >
            <div className="container-general">
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ marginBottom: "20px" }}>
                  Ready to make a difference as a coach? Apply now to join Level
                  Up America and start transforming careers today!
                </h2>
                <Link
                  href="/coaches/register"
                  className="cta-button"
                  style={{ display: "inline-block" }}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </section>

          {/* <section className="container-general">
            <div className="row news-row" style={{ marginTop: "3rem" }}>
              <div className="video-container" style={{ height: "400px" }}>
                <div className="video">
                  <iframe
                    src="https://www.youtube.com/embed/CJgcq90Fbcw?si=TtI9SGAwyfFGxMAp"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ height: "100%" }}
                  ></iframe>
                </div>
              </div>
              <div className="text">
                <h3>
                  Stay connected and up to date—follow Level Up America on
                  social media!
                </h3>
                <p>
                  Join our community, get exclusive updates, and be the first to
                  know about new opportunities, events, and success stories.
                </p>
                <a href="https://www.instagram.com/levelupamerica?igsh=MTk1bWI2c215OGYxZQ%3D%3D&utm_source=qr">
                  Join our community
                </a>
              </div>
            </div>
          </section> */}

          <section className="newsletter">
            <div className="container-general">
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
