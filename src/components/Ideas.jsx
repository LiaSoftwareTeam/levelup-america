import Script from "next/script";
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
            Unique <span>ideas</span> for you <span>bussines</span>
          </motion.h4>
          <div className="btn">
            <div className="btn-btn">
              <p>View Now</p>
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
              <p>Optimize Your Business Strategy</p>
            </div>
            <div className="card-body">
              <span>
                Boost your business with a clear focus and strategies that really work.
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
              <p>Enhance Your Leadership</p>
            </div>
            <div className="card-body">
              <span>
                Develop leadership skills that inspire your team and take your business to the next level.
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
              <p>Transform Your Company Culture</p>
            </div>
            <div className="card-body">
              <span>
                Create a positive work environment focused on continuous growth for your team.
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
