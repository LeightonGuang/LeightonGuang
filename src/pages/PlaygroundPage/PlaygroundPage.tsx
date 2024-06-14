import "./PlayergroundPage.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useEffect } from "react";

const PlaygroundPage = () => {
  const navigate = useNavigate();

  interface PlaygroundProjectType {
    name: string;
    path: string;
  }
  const playgroundProjectList: PlaygroundProjectType[] = [
    {
      name: "Framer Motion Animations",
      path: "/playground/framer-motion-animations",
    },
    { name: "test", path: "/playground/test" },
  ];

  useEffect(() => {}, []);

  return (
    <section className="playground">
      <div className="playground__container">
        <h1 className="playground__title">Playground</h1>

        <ul className="playground__list">
          {playgroundProjectList.map((project, index) => (
            <motion.li
              key={index}
              onClick={() => {
                navigate(project.path);
              }}
              className="playground__list-item"
            >
              {project.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlaygroundPage;