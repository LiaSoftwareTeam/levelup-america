import Script from "next/script";
import Link from "next/link"
import { motion } from "framer-motion";

export default function Ideas() {
  return (
    <div>
      <div className="idea-container">
        <div className="text-container">
          <motion.h4
            initial={{ opacity: 0, y: 50 }} // Añadimos un efecto de subida
            whileInView={{ opacity: 1, y: 0 }} // Se vuelve visible y sube
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Se ejecuta solo cuando está en vista
          > 
            Unlock potential, <span>embrace</span> growth, create success
          </motion.h4>
          <div className="btn">
            <div className="btn-btn">
              <Link href="/information/personal-coaching">View Now</Link>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </div>

        <div className="cards">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-title">
              <p>Elevate Your Career Path</p>
            </div>
            <div className="card-body">
              <span>
              Advance with confidence using clear goals and strategies that drive success.
              </span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-title">
              <p>Empowering Young Professionals</p>
            </div>
            <div className="card-body">
              <span>
              Gain the skills and confidence to build a successful future.
              </span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-title">
              <p>Transform Your Future</p>
            </div>
            <div className="card-body">
              <span>
              Build a mindset of growth, confidence, and purpose from a young age
              </span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-title">
              <p>Increase Your Productivity</p>
            </div>
            <div className="card-body">
              <span>
                Implement coaching techniques that streamline processes and boost efficiency.
              </span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </motion.div>
        </div>

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
      </div>
    </div>
  );
}
