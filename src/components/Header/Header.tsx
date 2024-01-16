import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import memoji from "../../assets/Leighton-memoji.png";

export const Header = () => (
  <div className="header">
    <div className="header__container">
      <Link to={"/"} className="header__logo">
        <img src={memoji} alt="memoji" className="header__logo-img" />
      </Link>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <NavLink to={"/"} className="header__home-link">
            Home
          </NavLink>
          <NavLink to={"/projects"} className="header__home-link">
            Projects
          </NavLink>
          <NavLink to={"/about"} className="header__home-link">
            About
          </NavLink>
        </ul>
      </nav>
    </div>
  </div>
);
