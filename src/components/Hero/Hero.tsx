import "./Hero.scss";
import memoji from "../../assets/Leighton-memoji.png";

function Header() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__container-top">
          <div className="hero__message">
            <span className="hero__greeting">Hi I'm</span>{" "}
            <span className="hero__name">Leighton Guang</span>
            <h3 className="hero__greeting">a</h3>
            <h2 className="hero__title">Full Stack Developer</h2>
          </div>
        </div>
        <div className="hero__container-bottom">
          <img src={memoji} alt="memoji" className="hero__memoji" />
        </div>
      </div>
    </div>
  );
}

export default Header;
