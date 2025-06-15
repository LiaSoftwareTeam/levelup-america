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
          <div className="video-description family">
            <div className="filter">
              {/* <Link href="/events/register">
                Register Now <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link> */}
            </div>
          </div>
          <div className="header-advice">
            <div className="header-advice-tag">
              <span>Family</span>
            </div>

            <div className="title">
              <h4>Vivelup Family: Families Growing Together</h4>
            </div>
            <div className="advice-body">
              <div className="info">
                <p>
                  Vivelup Family is a mentorship experience designed to
                  strengthen the most essential human bond: the family. Through
                  intentional dinner gatherings, guided conversations, and
                  practical tools, families come together to rediscover the
                  power of connection, listening, and shared growth. In these
                  encounters, each member finds a voice, a role, and a renewed
                  sense of belonging.
                </p>
                <br />

                <p>
                  This space nurtures emotional intelligence, communication, and
                  mutual respect within the home. Vivelup Family helps families
                  move beyond routine into purpose—transforming everyday
                  moments, like a dinner, into opportunities for reflection,
                  unity, and joy. It’s a journey of building stronger ties,
                  unlocking the collective potential of the family, and creating
                  a legacy of love and intention.
                </p>
              </div>
            </div>

            <div className="advice-footer">
              <div className="top-footer">
                <div className="theme">
                  <p>Themes</p>
                  <span>Families</span>
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
                  <p>Every dinner, a new beginning</p>
                </div>
                <div>
                  <p>Stronger bonds. Deeper roots</p>
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
            <Link href="/mentorship/vivelup-family" className="selected">
              Family Mentorship
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
            <Link href="/mentorship/vivelup-next">
              Youth Mentorship
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
