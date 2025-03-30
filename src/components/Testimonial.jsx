import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The coaching I received transformed my strategic approach. I learned to make clearer decisions and lead my team with more confidence. The results were incredible!",
    author: "Samantha Lee",
    company: "CEO of InnovateTech Solutions"
  },
  {
    quote: "Thanks to the coaching, I optimized our internal processes, which allowed us to increase productivity by 30%. It really changed the way we work..",
    author: "Carla García",
    company: "Operations at EcoEnergy"
  },
  {
    quote: "The personalized guidance helped me improve communication and collaboration within my team. Now we’re much more efficient, and everyone is aligned towards the same goal.",
    author: "Leo Martínez",
    company: "HR Manager at FlexiGroup"
  },
  {
    quote: "As a startup owner, I felt stuck with many complicated decisions. The coaching helped me find clarity, set goals, and move forward with confidence. It was a transformative experience!",
    author: "Michelle Chen",
    company: "Entrepreneur"
  },
  {
    quote: "I received key tools to improve my team’s performance. Thanks to the coaching, we now manage time more effectively, and we've reached new milestones.",
    author: "Marck Brown",
    company: "COO at NexaTech"
  },
  {
    quote: "Exceptional work ethic and brilliant creative solutions. They're not just service providers, they're true partners in success.",
    author: "Lia Wilson",
    company: "Global Ventures"
  },
  {
    quote: "They helped me develop a clearer vision for my company. The coaching not only gave me strategies but also the motivation to keep moving forward. Highly recommended!",
    author: "Ramírez Banzan",
    company: "Founder of Ramírez Consultores"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [fade, setFade] = useState(false);

  const updateTestimonial = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 600); // Hace la transición más lenta
  };

  const nextTestimonial = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setFade(false);
    }, 600);
  };

  const prevTestimonial = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setFade(false);
    }, 600);
  };

  return (
    <div className="main-wrapper" id="testimonial">
      <div className="testimonials-container">
        {/* Animación del título que sube solo cuando entra en la vista */}
        <motion.h1
          className="title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} // Solo ejecuta la animación una vez cuando es visible
          transition={{ duration: 1 }}
        >
          Customer <span>Voices:</span> <br /> Hear What <span>They Say!</span>
        </motion.h1>

        {/* Perfiles solo se vuelven visibles cuando están en la vista */}
        <motion.div
          className="profiles"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{
            staggerChildren: 0.3, // Intervalo entre perfiles
            duration: 1
          }}
        >
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`profile ${index === currentIndex ? "active" : ""}`}
              onClick={() => updateTestimonial(index)}
              style={{
                backgroundImage: `url(/media/client${index + 1}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0 }} // Comienza invisible
              whileInView={{ opacity: 1 }}  // Se vuelve visible cuando está en la vista
              transition={{ duration: 1 }}
            ></motion.div>
          ))}
        </motion.div>

        {/* Testimonio con botones para navegar */}
        <div className="testimonial">
          <button className="nav-arrow prev" onClick={prevTestimonial}>
            ←
          </button>
          <motion.p
            className={`quote ${fade ? "fade" : ""}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {testimonials[currentIndex].quote}
          </motion.p>
          <motion.h3
            className={`author ${fade ? "fade" : ""}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {testimonials[currentIndex].author}
          </motion.h3>
          <motion.p
            className={`company ${fade ? "fade" : ""}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {testimonials[currentIndex].company}
          </motion.p>
          <button className="nav-arrow next" onClick={nextTestimonial}>
            →
          </button>
        </div>
      </div>

      <style jsx>{`
        .fade {
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
        }

        .profile {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
        }
      `}</style>
    </div>
  );
}
