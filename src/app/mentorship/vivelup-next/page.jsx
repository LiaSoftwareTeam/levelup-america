import Navbar from "@/components/Navbar";
import Script from "next/script";
import Link from "next/link";
import "../mentoring.css";
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
          <div className="video-description next">
            <div className="filter">
              {/* <Link href="/events/register">
                Register Now <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link> */}
            </div>
          </div>
          <div className="header-advice">
            <div className="header-advice-tag">
              <span>Youth</span>
            </div>

            <div className="title">
              <h4>Vivelup Next: Youth Building Their Future</h4>
            </div>
            <div className="advice-body">
              <div className="info">
                <p>
                  Vivelup Next is much more than a mentorship program for young
                  people; it is a space for deep transformation where each
                  participant discovers their true potential and learns to lead
                  their life with confidence and purpose. Through close
                  encounters, experiential activities, and personalized
                  guidance, we help young people connect with their inner
                  strengths, overcome fears, and chart a clear path toward their
                  dreams.
                </p>
                <br />

                <p>
                  Here, every young person is supported in developing essential
                  skills such as resilience, emotional intelligence, conscious
                  decision-making, and authentic leadership. Vivelup Next not
                  only prepares them to face challenges but also inspires them
                  to act with determination to build a solid and meaningful
                  future. It is an invitation to awaken inner power and move
                  forward toward a life filled with meaning, contribution, and
                  personal success.
                </p>
              </div>
            </div>

            <div className="advice-footer">
              <div className="top-footer">
                <div className="theme">
                  <p>Themes</p>
                  <span>Mindset</span>
                  {/* <span></span> */}
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
                </div>
              </div>

              <div className="advice-goaction">
                <div>
                  <p> From idea to action</p>
                </div>
                <div>
                  <p>Turn challenges into opportunities</p>
                </div>
              </div>

              <div className="consulter-info">
                {/* <div className="consuler-title">
                  <p>Coaches</p>
                </div>
                <div className="colsulter">
                  <div className="image">
                    <img src="/media/personal/victor familia.webp" alt="" style={{objectFit:"cover"}} />
                  </div>
                  <div className="info">
                    <div className="title-info">
                      <p>Victor Familia</p> */}
                {/* <a href="#">More Info</a> */}
                {/* </div>
                    <div className="consuler-body">
                      <span>
                        Helps people unlock their full potential, push
                        boundaries, and achieve their goals with clarity and
                        confidence.
                      </span>
                    </div>
                  </div>
                </div> */}

                {/* <div className="colsulter">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="advice-aditional-info">
          <div className="more-advices">
            <div className="subtitle">
              <p>Upcoming Mentorships</p>
            </div>
            <Link href="/advice/bussines">
              <div className="advice-box">
                <div className="image">
                  <img src="/media/services/card2.jpg" alt="" />
                </div>
                <div className="box-info">
                  <div className="box-date">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span>1 July, 2025</span>
                  </div>
                  <div className="box-title">
                    <p>A Young Man for History, Purpose, and Legacy</p>
                  </div>
                </div>
              </div>
            </Link>
            {/*  */}
            {/* <Link href="/advice/corporate-events">
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
            </Link> */}
            {/*  */}
            {/* <Link href="/advice/training-programs">
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
            </Link> */}
            {/*  */}
          </div>

          <div className="categories">
            <p>Mentorship by category</p>

            <Link href="/mentorship/vivelup-next" className="selected">
              Youth Mentorship
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
            <Link href="/mentorship/vivelup-family">
              Family Mentorship
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
            <Link href="/mentorship/brainstorming">
              Innovation Mentorship
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
             <Link href="/mentorship/mind-motion">
              Mind & Motion Mentorship
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
