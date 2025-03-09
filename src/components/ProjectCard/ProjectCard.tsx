import "./ProjectCard.scss";
import ImageGallery from "../ImageGallery/ImageGallery";
import { ExternalLinkSvg } from "../../assets/icons/iconsSvg";

interface ProjectType {
  projectName: string;
  projectImgUrlList: { imageUrl: string; imageAlt: string }[];
  projectDescription: string;
  projectTechnologyList: { name: string; link: string }[];
  projectGithubLink: string;
  projectLink?: string;
}

function ProjectCard({ project }: { project: ProjectType }) {
  const {
    projectName,
    projectImgUrlList,
    projectDescription,
    projectTechnologyList,
    projectGithubLink,
    projectLink,
  } = project;

  return (
    <li className="project-card">
      <div className="project-card__container">
        <h2 className="project-card__name">{projectName}</h2>
        <ImageGallery imageObjList={projectImgUrlList} hightlightColour="" />

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

        <div className="project-card__links">
          <a
            className="project-card__link"
            href={projectGithubLink}
            target="_blank"
          >
            <img
              alt="github logo"
              className="project-card__link-icon"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            Github
          </a>

          {projectLink && (
            <a
              className="project-card__link"
              href={projectLink}
              target="_blank"
            >
              <ExternalLinkSvg className="project-card__link-icon" />
              Live Website
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
export default ProjectCard;
