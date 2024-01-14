import "./ProjectCard.scss";

interface ProjectCardProps {
  projectName: string;
  projectImgUrlList: Array<string>;
  projectGithubLink: string;
}

function ProjectCard({
  projectName,
  projectImgUrlList,
  projectGithubLink,
}: ProjectCardProps) {
  return (
    <li className="project-card">
      <div className="project-card__container">
        <h2>{projectName}</h2>
        <ul>
          {projectImgUrlList.map((projectImgUrl, index) => (
            <li key={index}>
              <img src={projectImgUrl} alt={projectName} />
            </li>
          ))}
        </ul>
        <a href={projectGithubLink}>Github</a>
      </div>
    </li>
  );
}
export default ProjectCard;
