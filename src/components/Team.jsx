import { motion } from "framer-motion";
import Script from "next/script";
import Link from "next/link";

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Team() {
  return (
    <div id="team">
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
      <motion.div
        className="team-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Solo se anima la primera vez que el elemento entra en vista
        variants={revealVariants}
      >
        <div className="tema-center">
          <div className="team-text">
            <div className="team-title">
              <p>Meet</p>
              <p>Our</p>
              <p>Team</p>
            </div>

            <div className="team-description">
              <p>
              Our team is made up of passionate professionals committed to personal growth and development. Each member contributes their experience and skills to offer effective solutions and support our clients on their path to success.
              </p>
              <p style={{ marginTop: "15px" }}>
              We work with values ​​of collaboration, innovation, and excellence, always focused on generating a positive impact. 
              </p>
            </div>
            <div className="apply-now">
              <Link href="/coaches/register">
                Are you joining the team?{" "}
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
            </div>
            <div className="b-message">
              <p>
                <span>Apply</span> now, <br /> <span>experience</span>{" "}
                excellence."
              </p>
            </div>
          </div>
          <div className="team-profile">
            <div className="l-team-profile">
              <motion.div className="card" variants={revealVariants} whileInView="visible">
                <div className="card-img">
                  <img src="/media/personal/victor familia.webp" alt="" />
                </div>
                <div className="card-info">
                  <div>
                    <p>Victor Familia</p>
                    <div className="icons">
                      <ion-icon name="logo-linkedin"></ion-icon>
                      <ion-icon name="logo-facebook"></ion-icon>
                      <ion-icon name="logo-instagram"></ion-icon>
                      <ion-icon name="logo-google"></ion-icon>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="card" variants={revealVariants} whileInView="visible">
                <div className="card-img">
                  <img src="/media/client2.jpg" alt="" />
                </div>
                <div className="card-info">
                  <div>
                    <p>Joe Carla</p>
                    <div className="icons">
                      <ion-icon name="logo-linkedin"></ion-icon>
                      <ion-icon name="logo-facebook"></ion-icon>
                      <ion-icon name="logo-instagram"></ion-icon>
                      <ion-icon name="logo-google"></ion-icon>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="r-team-profile">
              <div className="r-title">
                <p>Qualified Professionals</p>
              </div>
              <motion.div className="card" variants={revealVariants} whileInView="visible">
                <div className="card-img">
                  <img src="/media/client3.jpg" alt="" />
                </div>
                <div className="card-info">
                  <div>
                    <p>Jon Michael</p>
                    <div className="icons">
                      <ion-icon name="logo-linkedin"></ion-icon>
                      <ion-icon name="logo-facebook"></ion-icon>
                      <ion-icon name="logo-instagram"></ion-icon>
                      <ion-icon name="logo-google"></ion-icon>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="card" variants={revealVariants} whileInView="visible">
                <div className="card-img">
                  <img src="/media/client4.jpg" alt="" />
                </div>
                <div className="card-info">
                  <div>
                    <p>Joe Doe</p>
                    <div className="icons">
                      <ion-icon name="logo-linkedin"></ion-icon>
                      <ion-icon name="logo-facebook"></ion-icon>
                      <ion-icon name="logo-instagram"></ion-icon>
                      <ion-icon name="logo-google"></ion-icon>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <div id="contact">

      </div>
    </div>
  );
}
