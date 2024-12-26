import "./SocialsPage.scss";
import memoji from "../../assets/Leighton-memoji.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SocialsPage = () => {
  const socialsList: { name: string; link: string; iconUrl: string }[] = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/leighton-guang/",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      name: "GitHub",
      link: "https://github.com/LeightonGuang",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
  ];

  return (
    <section className="SocialsPage">
      <motion.div
        whileHover={{ scale: [null, 1.05] }}
        transition={{ duration: 0.2 }}
        className="SocialsPage__card"
      >
        <div>
          <img className="SocialsPage__profile-img" alt="memoji" src={memoji} />
          <h1 className="SocialsPage__name">Leighton Guang</h1>
          <p className="SocialsPage__title">Full Stack React Developer</p>
        </div>

        <ul className="SocialsPage__links">
          <li className="SocialsPage__link-item">
            <Link
              className="SocialsPage__link"
              to="https://docs.google.com/document/d/1EX49XzP9tnGXlJuNHtFzzqrBXhm_GnSXQQymitoxS8A/edit?usp=sharing"
            >
              Resume
            </Link>
          </li>
        </ul>

        <ul className="SocialsPage__contact">
          <li>leighton.guang@icloud.com</li>
          <li>London, UK</li>
        </ul>

        <ul className="SocialsPage__socials">
          {socialsList.map((socialObj) => (
            <li key={socialObj.name} className="SocialsPage__social-item">
              <a className="SocialsPage__social-link" href={socialObj.link}>
                <img
                  className="SocialsPage__social-icon"
                  src={socialObj.iconUrl}
                  alt={socialObj.name}
                />
              </a>
            </li>
          ))}
        </ul>

        <Link className="SocialsPage__redirect" to={"/home"}>
          {"Continue to Website >>>"}
        </Link>
      </motion.div>
    </section>
  );
};

export default SocialsPage;
