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
          <div className="video-description mind-motion">
            <div className="filter">
              {/* <Link href="/events/register">
                Register Now <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link> */}
            </div>
          </div>
          <div className="header-advice">
            <div className="header-advice-tag">
              <span>Mind & Motion</span>
            </div>

            <div className="title">
              <h4>Mind & Motion: Wellness in Every Step</h4>
            </div>
            <div className="advice-body">
              <div className="info">
                <p>
                  Mind & Motion is a mentorship experience that connects mental
                  clarity with physical vitality. Through mindful movement,
                  wellness practices, and guided conversations, participants
                  learn to care for both mind and body in an integrated way.
                  It's a space to recharge, release tension, and regain inner
                  balance.
                </p>
                <br />

                <p>
                  Each session blends emotional awareness, physical activity,
                  and practical tools for sustainable well-being. In Mind &
                  Motion, health is not just the absence of stress—it's the
                  presence of purpose, energy, and self-connection. It’s a
                  journey to feel stronger, think clearer, and move forward with
                  intention.
                </p>
              </div>
            </div>

            <div className="advice-footer">
              <div className="top-footer">
                <div className="theme">
                  <p>Themes</p>
                  <span>Wellness</span>
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
                  <p>Move your body. Free your mind</p>
                </div>
                <div>
                  <p>Strong mind. Active body. Aligned life</p>
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

            <Link href="/mentorship/mind-motion" className="selected">
              Mind & Motion Mentorship
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
            <Link href="/mentorship/vivelup-next">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
