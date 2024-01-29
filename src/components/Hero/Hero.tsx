import "./Hero.scss";
import memoji from "../../assets/Leighton-memoji.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="hero">
      <div className="hero__container">
        <motion.div
          whileHover={{ scale: [null, 1.125, 1.1] }}
          transition={{ duration: 0.3 }}
          className="hero__container-top"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hero__message"
          >
            <span className="hero__greeting">Hi I'm</span>
            <h2 className="hero__name">Leighton Guang</h2>
            <span className="hero__greeting">a</span>
            <h2 className="hero__title">Full Stack Developer</h2>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.125, 1.1] }}
          transition={{ duration: 0.3 }}
          className="hero__container-bottom"
        >
          <img src={memoji} alt="memoji" className="hero__memoji" />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
