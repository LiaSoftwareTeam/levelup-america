import { motion } from "framer-motion";
import Script from "next/script"; // Asegúrate de importar el componente Script de Next.js

export default function About() {
  return (
    <div>
      {/* Aquí agregamos los dos scripts de ionicons */}
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

      <section className="discover" id="about">
        <motion.div
          className="discover-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="title-discover">
            <p>
              Discover <br /> About <span>Us</span>{" "}
            </p>
          </div>
          <motion.div
            className="body-discover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span>
              If you're looking for an opportunity to transform your life, both personally and professionally, <strong style={{color:"#383838"}}>LEVEL UP AMERICA</strong> is the ideal place to start. Our mission is to empower you by providing the tools, support, and guidance you need to achieve your dreams and successfully develop your projects.
            </span>
            <br />
            <span>
              As part of this movement, you'll have the opportunity to connect with a vibrant network of individuals and professionals willing to work together toward a future of well-being, development, and success.
            </span>
            <div className="promotion-profile">
              <img src="/media/personal/victor familia.webp" alt="" />
              <span>Victor Familia, <strong>CEO</strong> <br />of <strong>Level Up America</strong></span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="discover-video"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="bg-color"></div>
          <div className="img-bg">
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
