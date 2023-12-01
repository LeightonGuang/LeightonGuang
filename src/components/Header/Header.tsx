import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => (
  <div className="header">
    <div className="header__container">
      <h1 className="header__title">Leighton Guang</h1>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <Link to={"/"} className="header__home-link">
            Home
          </Link>
          <Link to={"/about"} className="header__home-link">
            About
          </Link>
          <Link to={"/portfolio"} className="header__home-link">
            Portfolio
          </Link>
        </ul>
      </nav>
    </div>
  </div>
);
