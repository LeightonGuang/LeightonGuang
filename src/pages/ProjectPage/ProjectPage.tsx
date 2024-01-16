import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./ProjectPage.scss";

function ProjectPage() {
  return (
    <div className="project">
      <div className="project__container">
        <h1 className="project__title">Projects</h1>
        <ul className="project__list">
          <ProjectCard
            projectName="Shopdex"
            projectImgUrlList={[""]}
            projectTechnologyList={[
              "React",
              "Sass",
              "HTML",
              "CSS",
              "JavaScript",
            ]}
            projectGithubLink={
              "https://github.com/LeightonGuang/capstone-project"
            }
          />
          <ProjectCard
            projectName="Q bot"
            projectImgUrlList={[]}
            projectTechnologyList={[
              "Node.js",
              "JavaScript",
              "axios",
              "cheerio",
              "discordjs",
              "puppeteer",
            ]}
            projectGithubLink="https://github.com/LeightonGuang/Q-bot"
          />
          <ProjectCard
            projectName="Typing test website"
            projectImgUrlList={[
              "https://user-images.githubusercontent.com/41440634/212241316-4c0d389e-d85f-4ecb-a925-8ae4ac1140c4.png",
            ]}
            projectTechnologyList={["HTML", "CSS", "JavaScript"]}
            projectGithubLink={"https://github.com/LeightonGuang/typing_test"}
          />
        </ul>
      </div>
    </div>
  );
}

export default ProjectPage;
