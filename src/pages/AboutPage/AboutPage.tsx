import "./AboutPage.scss";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <section className="aboutPage">
      <div className="aboutPage__container">
        <h1 className="aboutPage__title">About Me</h1>
        <div className="aboutPage__card">
          <p className="aboutPage__description">
            Hi I'm Leighton. I am passionate about Software Engineering because
            I consider myself a maker/creator at heart. I love creating things
            and giving people a pleasant experience using it. I got into
            Software Engineering because I found out that being a software
            engineer allows me to be creative simply through a computer, without
            relying on physical tools or materials. As a quick problem solver, I
            hope I can apply my skills to drive companies to new heights.
          </p>
        </div>
        <motion.a
          animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
          whileHover={{ scale: 1.2, backgroundColor: "#d3f4ff" }}
          transition={{ repeat: Infinity, repeatDelay: 5 }}
          href="mailto:leighton.guang@icloud.com"
          className="aboutPage__email"
        >
          Email me!
        </motion.a>
      </div>
    </section>
  );
}

export default AboutPage;