import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => (
  <div className="header">
    <div className="header__container">
      <h1 className="header__title">Leighton Guang</h1>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <NavLink to={"/"} className="header__home-link">
            Home
          </NavLink>
          <NavLink to={"/about"} className="header__home-link">
            About
          </NavLink>
          <NavLink to={"/portfolio"} className="header__home-link">
            Portfolio
          </NavLink>
        </ul>
      </nav>
    </div>
  </div>
);
