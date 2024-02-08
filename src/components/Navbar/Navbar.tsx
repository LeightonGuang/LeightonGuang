import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import memoji from "../../assets/Leighton-memoji.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const navigate = useNavigate();
  const [isProjectClicked, setIsProjectClicked] = useState(false);

  const handleProjectScroll = () => {
    navigate("/");
    setIsProjectClicked(true);
  };

  const handleAboutCLick = () => {
    navigate("/about");
  };

  useEffect(() => {
    if (isProjectClicked) {
      const project = document.getElementById("project");
      if (project) {
        project.scrollIntoView({ behavior: "smooth" });
      }
      setIsProjectClicked(false);
    }
  }, [isProjectClicked]);

  return (
    <div className="header">
      <div className="header__container">
        <Link to={"/"} className="header__logo">
          <img src={memoji} alt="memoji" className="header__logo-img" />
        </Link>

        <motion.nav className="header__nav">
          <ul className="header__nav-list">
            <motion.li
              whileHover={{ scale: 1.05 }}
              onClick={handleProjectScroll}
              className="header__nav-link"
            >
              Projects
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              onClick={handleAboutCLick}
              className="header__nav-link"
            >
              About
            </motion.li>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
}

export default Header;
