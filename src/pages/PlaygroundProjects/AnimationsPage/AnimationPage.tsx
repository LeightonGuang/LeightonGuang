import "./Animationpage.scss";
import { motion } from "framer-motion";

const animations = () => {
  return (
    <section className="animations">
      <div className="animations__container">
        <h1 className="animations__title">Framer Motion Animations</h1>
        <ul className="animations__list">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="animations__item"
          >
            Hover and Click
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="animations__item"
          >
            two
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="animations__item"
          >
            three
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="animations__item"
          >
            four
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="animations__item"
          >
            four
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="animations__item"
          >
            four
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="animations__item"
          >
            four
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default animations;
