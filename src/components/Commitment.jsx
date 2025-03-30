import { motion } from "framer-motion";
import "./components.css";

export default function Commitment() {
  return (
    <>
      <section className="commitment" id="commitment">
        <div className="filter">
          <div className="text-section">
            <div className="header-text">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Global scale
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
              Pillars of Human and Business Success
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Our commitment at LEVEL UP AMERICA is to provide you with the
                support and tools you need to elevate your life, both personally
                and professionally. We are committed to being your guide at
                every stage of your development, helping you overcome obstacles,
                achieve your goals, and transform your ideas into successful
                projects.
              </motion.p>
            </div>
            <div className="body-text">
              <motion.div
                className="text-box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="box-title">
                  <div className="line-title"></div>
                  <p>More 500</p>
                </div>
                <div className="box-content">
                  <span>Transformed and improved lives</span>
                </div>
              </motion.div>

              <motion.div
                className="text-box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="box-title">
                  <div className="line-title"></div>
                  <p>+50</p>
                </div>
                <div className="box-content">
                  <span>
                  Companies <a href="#">advised</a> to achieve success.
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="text-box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="box-title">
                  <div className="line-title"></div>
                  <p>More 300</p>
                </div>
                <div className="box-content">
                  <span>personalized coaching sessions conducted</span>
                </div>
              </motion.div>

              <motion.div
                className="text-box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="box-title">
                  <div className="line-title"></div>
                  <p>2,000</p>
                </div>
                <div className="box-content">
                  <span>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
