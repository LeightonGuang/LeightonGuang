import "./ProjectCard.scss";
import ImageGallery from "../ImageGallery/ImageGallery";

interface ProjectCardProps {
  projectName: string;
  projectImgUrlList: { imageUrl: string; imageAlt: string }[];
  projectDescription: string;
  projectTechnologyList: { name: string; link: string }[];
  projectGithubLink: string;
}

function ProjectCard({
  projectName,
  projectGithubLink,
  projectImgUrlList,
  projectDescription,
  projectTechnologyList,
}: ProjectCardProps) {
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
