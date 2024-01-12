import "./Hero.scss";
import memoji from "../../assets/Leighton-memoji.png";

function Header() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__container-left">
          <div className="hero__message">
            <h3 className="hero__greeting">Hi I'm</h3>
            <h1 className="hero__name">Leighton Guang</h1>
            <h3 className="hero__greeting">a</h3>
            <h2 className="hero__title">Full Stack Developer</h2>
          </div>
        </div>
        <div className="hero__container-right">
          <img src={memoji} alt="memoji" className="hero__memoji" />
        </div>
      </div>
    </div>
  );
}

export default Header;
