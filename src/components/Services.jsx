import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import "./components.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeInOut" },
  }),
};

export default function Services() {
  const [iconsLoaded, setIconsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIconsLoaded(true);
  }, []);

  return (
    <div>
      {mounted && <section className="services" id="services">
        <div className="head-services">
          <div className="services-title">
            <span>Our Recent Work</span>
            <p>New Success Stories</p>
          </div>
        </div>
        <div className="body-services">
          <div className="cards-contianer">
            {[
              {
                src: "/media/card1.jpg",
                subtitle: "LEADERSHIP",
                text: "Empowering Business Leaders",
              },
              {
                src: "/media/card3.jpg",
                subtitle: "MANAGEMENT",
                text: "Smart Business Growth",
              },
              {
                src: "/media/card2.jpg",
                subtitle: "STRATEGY",
                text: "Winning Minds Coaching",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="card-img">
                  <Image
                    src={card.src}
                    width={400}
                    height={250}
                    alt={card.subtitle}
                  />
                </div>
                <div className="card-text">
                  <div>
                    <div className="card-subtitle">
                      <span>{card.subtitle}</span>
                    </div>
                    <div className="card-title">
                      <div className="text">
                        <p>{card.text}</p>
                      </div>
                      <div className="icon">
                        <ArrowRight size={18} className="arrow-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>}

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
  );
}

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Se inicializa en 0 para que el primer acordeón esté abierto

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
  };
  

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
        >
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "open" : ""
            }`}
          >
            {item.content.map((text, i) => (
              <div key={i}>{text}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const accordionData = [
  {
    title: "Interdum et malesuada fames ac ante ipsum",
    content: [
      "Suspendisse finibus urna mauris, vitae consequat quam vel.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequatur!",
    ],
  },
  {
    title: "Maecenas condimentum sollicitudin ligula",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    title: "Duis rhoncus orci ut metus rhoncus",
    content: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    title: "Duis rhoncus orci ut metus rhoncus",
    content: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
  },
];
