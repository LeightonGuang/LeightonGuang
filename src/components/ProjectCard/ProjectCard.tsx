import "./ProjectCard.scss";
import { ProjectCardProps } from "../../types/ProjectCardProps";

function ProjectCard({
  projectName,
  projectImgUrlList,
  projectDescription,
  projectTechnologyList,
  projectGithubLink,
}: ProjectCardProps) {
  return (
    <li className="project-card">
      <div className="project-card__container">
        <h2 className="project-card__name">{projectName}</h2>
        <ul className="project-card__img-list">
          {projectImgUrlList.map((projectImgUrl, index) => (
            <li key={index} className="project-card__img-container">
              <img
                src={projectImgUrl}
                alt={projectName}
                className="project-card__img"
              />
            </li>
          ))}
        </ul>
        <p className="project-card__description">{projectDescription}</p>
        <ul className="project-card__technology-list">
          {projectTechnologyList.map((projectTechnology, index) => (
            <li key={index} className="project-card__technology-pill">
              <a
                href={projectTechnology.link}
                target="_blank"
                className="project-card__technology-link"
              >
                {projectTechnology.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={projectGithubLink}
          target="_blank"
          className="project-card__link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github logo"
            className="project-card__github-logo"
          />
          Github
        </a>
      </div>
    </li>
  );
}
export default ProjectCard;
