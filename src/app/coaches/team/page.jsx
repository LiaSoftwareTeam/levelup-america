import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../../styles/ui.css";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

async function getCoaches() {
  try {
    const coachesCollection = collection(db, 'coaches');
    const coachesSnapshot = await getDocs(coachesCollection);
    const coachesList = coachesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return coachesList;
  } catch (error) {
    console.error('Error al obtener coaches:', error);
    return [];
  }
}

export default async function BusinessSuccess() {
  const coaches = await getCoaches();
  
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
            {coaches.length > 0 ? (
              <>
                {/* Mostrar el primer coach en la fila superior con el video */}
                {coaches.length > 0 && (
                  <div className="row top-row">
                    <div className="card-top card-coaches">
                      <div className="date-card">
                        <p>New</p>
                      </div>
                      <div 
                        className="profile-card" 
                        style={{
                          background: `url("${coaches[0].url}") no-repeat center`,
                          backgroundSize: 'cover'
                        }}
                      ></div>
                      <div className="info-card">
                        <p>{coaches[0].nombre}</p>
                        <span>{coaches[0].carrera}</span>
                        <span className="description">
                          {coaches[0].aboutMe?.substring(0, 80)}...
                        </span>
                      </div>
                      <div className="btn-action-card">
                        <Link href={`/coaches/team/${coaches[0].id}`}>Get in touch</Link>
                      </div>
                      <div className="skills-card">
                        <p>Skills *</p>
                        <div className="skills-items">
                          <span>Empathy</span>
                          <span>Listening</span>
                          <span>Communication</span>
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
                          <span>— {coaches[0].nombre}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mostrar el resto de coaches en filas */}
                <div className="row cards-row">
                  {coaches.slice(1).map((coach) => (
                    <div key={coach.id} className="card-top card-coaches">
                      <div className="date-card">
                        <p>New</p>
                      </div>
                      <div 
                        className="profile-card" 
                        style={{
                          background: `url("${coach.url}") no-repeat center`,
                          backgroundSize: 'cover'
                        }}
                      ></div>
                      <div className="info-card">
                        <p>{coach.nombre}</p>
                        <span>{coach.carrera}</span>
                        <span className="description">
                          {coach.aboutMe?.substring(0, 80)}...
                        </span>
                      </div>
                      <div className="btn-action-card">
                        <Link href={`/coaches/team/${coach.id}`}>
                          Get in touch
                        </Link>
                      </div>
                      <div className="skills-card">
                        <p>Skills *</p>
                        <div className="skills-items">
                          <span>Empathy</span>
                          <span>Communication</span>
                          <span>Motivation</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '50px 0' }}>
                <p>No hay coaches disponibles en este momento.</p>
              </div>
            )}
          </section>

          <section className="about-us">
            <div className="container-general">
              <h2>Why join us as a coach?</h2>
              <p>
                Become part of a mission-driven team that’s transforming lives
                through career development. At Vivelup America, we empower
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
                  Ready to make a difference as a coach? Apply now to join
                  Vivelup America and start transforming careers today!
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
                  Stay connected and up to date—follow Vivelup America on
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
