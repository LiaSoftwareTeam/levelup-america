import Navbar from "@/components/Navbar";
import Script from "next/script";
import Link from "next/link";
import "../../../../pages.css";
import Footer from "@/components/Footer";
export default function Bussines() {
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
      <Navbar />
      <div className="advice-container">
        <div className="advice-description">
          <div className="video-description Personal-Development">
            <div className="filter">
              <Link href="/events/register">
                Register Now <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
            </div>
          </div>
          <div className="header-advice">
            <div className="header-advice-tag">
              <span>Youths</span>
            </div>
            <div className="header-advice-date-people">
              <div>
                <ion-icon name="calendar-clear-outline"></ion-icon>{" "}
                <span>12 May, 2025</span>
              </div>
              <span className="line">|</span>
              <div>
                <ion-icon name="people-outline"></ion-icon>
                <span>16/30 registered persons</span>
              </div>
            </div>
            <div className="title">
              <h4>
                Personal Development for Young People: Empower Your Future
              </h4>
            </div>
            <div className="advice-body">
              <div className="info">
                <p>
                  Personal development coaching is a key tool for young people
                  seeking to improve their self-esteem and skills, and make more
                  conscious decisions for their future. Through this practice,
                  young people can discover their strengths, overcome obstacles,
                  and set clear and achievable goals. By working with a coach,
                  they learn to manage their emotions, improve their
                  relationships, and foster a positive mindset that will help
                  them face life's challenges with confidence.
                </p>
                <br />

                <p>
                  In a rapidly changing world, personal development becomes
                  essential for those who want to excel in their professional
                  and personal lives. Youth-focused coaching allows them to
                  understand the importance of their decisions and how each
                  action can bring them closer to their goals. With the right
                  tools and techniques, young people can create an action plan
                  that allows them to be more proactive, resilient, and
                  determined to take control of their own destiny.
                </p>
              </div>
            </div>

            <div className="advice-footer">
              <div className="top-footer">
                <div className="theme">
                  <p>Themes</p>
                  <span>Bussines</span>
                  <span>Workshop</span>
                </div>
                <div className="social-media">
                  <a href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#">
                    <ion-icon name="mail-outline"></ion-icon>
                  </a>
                  <a href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </div>
              </div>

              <div className="advice-goaction">
                <div>
                  <p>Sign up and be part of this experience</p>
                </div>
                <div>
                  <p>Discover how to innovate with us and create the future.</p>
                </div>
              </div>

              <div className="consulter-info">
                <div className="consuler-title">
                  <p>Coaches</p>
                </div>
                <div className="colsulter">
                  <div className="image">
                    <img src="/media/client1.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="title-info">
                      <p>Keyla MaCoffe</p>
                      <a href="#">More Info</a>
                    </div>
                    <div className="consuler-body">
                      <span>
                        Helps people unlock their full potential, push
                        boundaries, and achieve their goals with clarity and
                        confidence.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="colsulter">
                  <div className="image">
                    <img src="/media/client5.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="title-info">
                      <p>Marcos Brown</p>
                      <a href="#">More Info</a>
                    </div>
                    <div className="consuler-body">
                      <span>
                        Helps people unlock their full potential, push
                        boundaries, and achieve their goals with clarity and
                        confidence.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="advice-aditional-info">
          <div className="more-advices">
            <div className="subtitle">
              <p>More Advices</p>
            </div>
            <Link href="/advice/bussines">
              <div className="advice-box">
                <div className="image">
                  <img src="/media/card3.jpg" alt="" />
                </div>
                <div className="box-info">
                  <div className="box-date">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span>2 May, 2025</span>
                  </div>
                  <div className="box-title">
                    <p>Innovative Strategies to Grow and Maximize Results</p>
                  </div>
                </div>
              </div>
            </Link>
            {/*  */}
            <Link href="/advice/corporate-events">
              <div className="advice-box">
                <div className="image">
                  <img src="/media/card2.jpg" alt="" />
                </div>
                <div className="box-info">
                  <div className="box-date">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span>10 May, 2025</span>
                  </div>
                  <div className="box-title">
                    <p>Corporate Coaching for Success</p>
                  </div>
                </div>
              </div>
            </Link>
            {/*  */}
            <Link href="/advice/training-programs">
              <div className="advice-box">
                <div className="image">
                  <img src="/media/card1.jpg" alt="" />
                </div>
                <div className="box-info">
                  <div className="box-date">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span>9 Jun, 2025</span>
                  </div>
                  <div className="box-title">
                    <p>Corporate Training Coaching Program</p>
                  </div>
                </div>
              </div>
            </Link>
            {/*  */}
          </div>

          <div className="categories">
            <p>consultancies by category</p>

            <span className="selected">
              Productivity<ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
            <span>
              Leadership<ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
            <span>
              Collaboration<ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
            <span>
              Strategy<ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
            <span>
              Innovation<ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
            <span>
              Other<ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
