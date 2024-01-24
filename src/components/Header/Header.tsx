import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import memoji from "../../assets/Leighton-memoji.png";

function Header() {
  const handleProjectScroll = () => {
    const project = document.getElementById("project");
    if (project) {
      project.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link to={"/"} className="header__logo">
          <img src={memoji} alt="memoji" className="header__logo-img" />
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li onClick={handleProjectScroll} className="header__nav-link">
              Projects
            </li>
            <NavLink to={"/about"} className="header__nav-link">
              About
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
