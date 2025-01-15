import "./SocialsPage.scss";
import memoji from "../../assets/Leighton-memoji.png";
import { Link } from "react-router-dom";
import {
  ArrowRightSvg,
  GithubIconSvg,
  LocationPinSvg,
  LinkedinIconSvg,
} from "../../assets/icons/businessCardIcons";

const SocialsPage = () => {
  const BusinessCard = () => {
    const technologies = [
      "React",
      "Typescript",
      "Next.js",
      "MySQL",
      "Express.js",
      "Tailwind",
    ];

    const socialsList: { name: string; link: string; icon: JSX.Element }[] = [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/leighton-guang/",
        icon: <LinkedinIconSvg className="BusinessCard__linkedin" />,
      },
      {
        name: "GitHub",
        link: "https://github.com/LeightonGuang",
        icon: <GithubIconSvg className="BusinessCard__github" />,
      },
    ];

    return (
      <div className="BusinessCard">
        <div className="BusinessCard__container">
          <div>
            <h1 className="BusinessCard__name">Leighton Guang</h1>
            <h2 className="BusinessCard__title">React Full Stack Developer</h2>
            <span className="BusinessCard__location">
              <LocationPinSvg className="BusinessCard__locationPin" />
              London, UK
            </span>

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
                {social.icon}
              </a>
            ))}
            <span className="BusinessCard__email">
              leighton.guang@icloud.com
            </span>
          </div>

          <Link to={"/home"} className="BusinessCard__btn">
            <div className="BusinessCard__btn-text">
              <ArrowRightSvg className="BusinessCard__arrowRight" />
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
