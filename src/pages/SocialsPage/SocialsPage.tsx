import "./SocialsPage.scss";
import memoji from "../../assets/Leighton-memoji.png";
import { Link } from "react-router-dom";

const SocialsPage = () => {
  const BusinessCard = () => {
    const technologies = [
      "React",
      "Typescript",
      "Next.js",
      "MySQL",
      "Express.js",
      "Supabase",
    ];

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
      <div className="BusinessCard">
        <div className="BusinessCard__container">
          <div>
            <h1 className="BusinessCard__name">Leighton Guang</h1>
            <h2 className="BusinessCard__title">React Full Stack Developer</h2>
            <span className="BusinessCard__location">London, UK</span>

            <div className="BusinessCard__technologies">
              {technologies.map((technology, i) => (
                <span key={i} className="BusinessCard__technology">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <img className="BusinessCard__logo" src={memoji} alt="logo" />
        </div>

        <div className="BusinessCard__footer">
          <div className="BusinessCard__socials">
            {socialsList.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                className="BusinessCard__social"
              >
                <img
                  className="BusinessCard__social-icon"
                  src={social.iconUrl}
                  alt={social.name}
                />
              </a>
            ))}
          </div>

          <Link to={"/home"} className="BusinessCard__btn">
            <div className="BusinessCard__btn-text">
              <span>Continue</span>
              <span>{"->"}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="SocialsPage">
      <div className="SocialsPage__container">
        <BusinessCard />
      </div>
    </section>
  );
};

export default SocialsPage;
