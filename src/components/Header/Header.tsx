import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => (
  <div className="header">
    <div className="header__container">
      <Link to={"/LeightonGuang"} className="header__logo">
        <h1 className="header__title">Leighton Guang</h1>
      </Link>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <NavLink to={"/LeightonGuang"} className="header__home-link">
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
