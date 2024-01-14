import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./ProjectPage.scss";

function ProjectPage() {
  return (
    <div className="project">
      <div className="project__container">
        <h1 className="project__title">Projects</h1>
      </div>
      <ul className="project__list">
        <ProjectCard
          projectName="Shopdex"
          projectImgUrlList={[""]}
          projectGithubLink={
            "https://github.com/LeightonGuang/capstone-project"
          }
        />
      </ul>
    </div>
  );
}

export default ProjectPage;
