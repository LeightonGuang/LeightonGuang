import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./ProjectPage.scss";

function ProjectPage() {
  return (
    <div id="project" className="project">
      <div className="project__container">
        <h1 className="project__title">Projects</h1>
        <ul className="project__list">
          <ProjectCard
            projectName="Shopdex"
            projectImgUrlList={[""]}
            projectTechnologyList={[
              { name: "React", link: "https://reactjs.org/" },
              { name: "Sass", link: "https://sass-lang.com/" },
              { name: "HTML", link: "" },
              { name: "CSS", link: "" },
              { name: "JavaScript", link: "https://www.javascript.com/" },
            ]}
            projectGithubLink={
              "https://github.com/LeightonGuang/capstone-project"
            }
          />
          <ProjectCard
            projectName="Q bot"
            projectImgUrlList={[
              "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help.png",
              "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-account.png",
              "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-valorant.png",
              "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-private-vc.png",
            ]}
            projectTechnologyList={[
              { name: "Node.js", link: "https://nodejs.org/en/" },
              { name: "JavaScript", link: "https://www.javascript.com/" },
              { name: "axios", link: "https://axios-http.com/" },
              { name: "cheerio", link: "https://cheerio.js.org/" },
              { name: "discord.js", link: "https://old.discordjs.dev" },
              { name: "puppeteer", link: "https://pptr.dev/" },
            ]}
            projectGithubLink="https://github.com/LeightonGuang/Q-bot"
          />
          <ProjectCard
            projectName="Typing test website"
            projectImgUrlList={[
              "https://user-images.githubusercontent.com/41440634/212241316-4c0d389e-d85f-4ecb-a925-8ae4ac1140c4.png",
            ]}
            projectTechnologyList={[
              { name: "HTML", link: "" },
              { name: "CSS", link: "" },
              { name: "JavaScript", link: "https://www.javascript.com/" },
            ]}
            projectGithubLink={"https://github.com/LeightonGuang/typing_test"}
          />
        </ul>
      </div>
    </div>
  );
}

export default ProjectPage;
