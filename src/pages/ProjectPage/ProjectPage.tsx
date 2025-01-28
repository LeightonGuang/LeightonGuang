import "./ProjectPage.scss";

import { projectsData } from "../../data/projectsData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function ProjectPage() {
  return (
    <section id="project" className="project">
      <div className="project__container">
        <h1 className="project__title">Projects</h1>
        <ul className="project__list">
          {projectsData.map((project, index) => (
            <>
              <ProjectCard key={index} project={project} />

              {index !== projectsData.length - 1 && (
                <div className="project__divider" />
              )}
            </>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectPage;
