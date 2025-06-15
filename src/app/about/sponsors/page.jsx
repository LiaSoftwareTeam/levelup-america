"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../../styles/ui.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BusinessSuccess() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <main>
          <section className="hero sponsors">
            <div className="hero-content">
              <h1>Empower our mission, amplify your impact</h1>
              <p>
                Join our network of sponsors and be part of meaningful change
                through innovation, education, and community growth.
              </p>
              {/* <Link href="/advice/bussines" className="cta-button">
                Consulting For Business
              </Link> */}
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
            <div className="general-container">
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2
                  style={{
                    marginBottom: "20px",
                    fontSize: "27px",
                    padding: "0 10px",
                  }}
                >
                  Are you interested in learning more about Vivelup America and
                  how your support helps build better futures?
                </h2>
              </div>
            </div>
          </section>

          <section className="container-general">
            <div className="text-soponsor">
              <span>Drive the change</span>
              <h2>Be part of the impact</h2>
              <p>
                Support initiatives that transform lives through education,
                technology, and social innovation. Your donations make it
                possible to build accessible tools, offer free workshops, and
                create real opportunities for emerging communities. Join our
                network of strategic allies and tech sponsors to fuel lasting
                growth.
              </p>
              <a href="#">Make an Impact </a>
            </div>

            <div
              className="sponsor-slider"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  display: "flex",
                  transition: "transform 0.5s ease-in-out",
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                <div
                  className="sponsor-slide slide-one"
                  style={{ minWidth: "100%" }}
                >
                  <div className="info-sponsor">
                    <div className="sponsor-text">
                      <p>
                        <div className="decorator"></div>More than 1,200
                      </p>
                      <span>
                        Individuals received direct support through our programs
                        and services.
                      </span>
                    </div>

                    {/*  */}

                    <div className="sponsor-text">
                      <p>
                        <div className="decorator"></div>More than 15
                      </p>
                      <span>Communities impacted by development programs</span>
                    </div>
                  </div>
                  <div className="sponsor-img">
                    <div className="filter">
                      <p>
                        Discover How Google Helped Us Change Lives for the
                        Better
                      </p>
                      <a href="#">View Now</a>
                    </div>
                  </div>
                </div>

                <div
                  className="sponsor-slide slide-second"
                  style={{ minWidth: "100%" }}
                >
                  <div className="info-sponsor">
                    <div className="sponsor-text">
                      <p>
                        <div className="decorator"></div>More than 300
                      </p>
                      <span>
                        Volunteers engaged in delivering community-driven
                        initiatives.
                      </span>
                    </div>

                    {/*  */}

                    <div className="sponsor-text">
                      <p>
                        <div className="decorator"></div>More than 50
                      </p>
                      <span>
                        Partnerships formed to expand our outreach and impact.
                      </span>
                    </div>
                  </div>
                  <div className="sponsor-img second">
                    <div className="filter">
                      <p>
                        See How Microsoft Empowered Communities Through
                        Innovation and Support
                      </p>
                      <a href="#">View Now</a>
                    </div>
                  </div>
                </div>

                <div
                  className="sponsor-slide slide-three"
                  style={{ minWidth: "100%" }}
                >
                  <div className="info-sponsor">
                    <div className="sponsor-text">
                      <p>
                        <div className="decorator"></div>More than 1,000
                      </p>
                      <span>
                        Training hours provided to empower individuals with new
                        skills.
                      </span>
                    </div>

                    {/*  */}

                    <div className="sponsor-text">
                      <p>
                        <div className="decorator"></div>More than 80
                      </p>
                      <span>
                        Events and workshops hosted to foster inclusion and
                        growth.
                      </span>
                    </div>
                  </div>
                  <div className="sponsor-img three">
                    <div className="filter">
                      <p>
                        Learn How Amazon Partnered With Us to Drive Meaningful
                        Change
                      </p>
                      <a href="#">View Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-us">
            <div className="container-general">
              <h2>Together, We Create Change</h2>
              <p>
                Your support fuels real transformation. By joining our mission,
                you’re helping others access life-changing guidance, tools, and
                opportunities. Every contribution—big or small—amplifies our
                reach and helps us empower more people on their journey toward
                professional success.{" "}
                <strong>
                  Curious about how your support creates impact? Here’s what we
                  do with it:
                </strong>
              </p>
              <div className="features">
                <div className="feature-card">
                  <div className="number-circle">1</div>
                  <h3>We Create Access</h3>
                  <p>
                    We use your support to develop and expand free learning
                    resources, workshops, and coaching sessions for individuals
                    who lack access to professional development opportunities.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="number-circle">2</div>
                  <h3>One-on-One Support</h3>
                  <p>
                    Your contribution helps match individuals with certified
                    coaches who provide one-on-one guidance to build confidence
                    and set clear, achievable goals.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="number-circle">3</div>
                  <h3>Sustained Growth</h3>
                  <p>
                    With your help, we provide ongoing tools, training, and
                    community support so people don’t just get started—they
                    continue to grow.
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
            <div className="general-container">
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ marginBottom: "20px", padding: "10px" }}>
                  Want to learn more about Vivelup America and grow your
                  impact? Join a movement that's expanding opportunity—your
                  action today can change someone's tomorrow.
                </h2>
                <Link
                  href="#"
                  className="cta-button"
                  style={{ display: "inline-block" }}
                >
                  Join the Impact
                </Link>
              </div>
            </div>
          </section>

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
