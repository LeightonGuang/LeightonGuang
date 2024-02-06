import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./ProjectPage.scss";

function ProjectPage() {
  return (
    <section id="project" className="project">
      <div className="project__container">
        <h1 className="project__title">Projects</h1>
        <ul className="project__list">
          <ProjectCard
            projectName="Shopdex"
            projectImgUrlList={[
              "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/home.png",
              "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/productpage.png",
              "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/categories.png",
              "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/saved.png",
              "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/register.png",
              "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/login.png",
            ]}
            projectDescription="This is an e-commerce tool that enables customers to compare prices between shops in their locality, and businesses to create product listings."
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
          <div className="project__divider" />
          <ProjectCard
            projectName="Shopdex API and database"
            projectImgUrlList={[
              "https://www.nairaland.com/attachments/16116667_api_png1ab24127fdc57af104f0130205baef40",
            ]}
            projectDescription="This is a RESTful API and database made for Shopdex."
            projectTechnologyList={[
              { name: "Node.js", link: "https://nodejs.org/en/" },
              { name: "JavaScript", link: "https://www.javascript.com/" },
              { name: "Express", link: "https://expressjs.com/" },
              { name: "MySQL", link: "https://www.mysql.com/" },
              { name: "Knex", link: "https://knexjs.org/" },
            ]}
            projectGithubLink={
              "https://github.com/LeightonGuang/leighton-guang-capstone-api"
            }
          />
          <div className="project__divider" />
          <ProjectCard
            projectName="British Airways Hackathon"
            projectImgUrlList={[
              "https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/home.png",
              "https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/personalise.png",
              "https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/result.png",
            ]}
            projectDescription="This is a 24-hour hackathon hosted by British Airways where I collaborated with 
              UI/UX Designers, data scientist and software engineers to develop a solution to solve the problem of 'How might we encourage 
              customers to book flights using their travel voucher?'"
            projectTechnologyList={[
              { name: "React", link: "https://reactjs.org/" },
              { name: "Sass", link: "https://sass-lang.com/" },
              { name: "HTML", link: "" },
              { name: "CSS", link: "" },
              { name: "JavaScript", link: "https://www.javascript.com/" },
              { name: "Tailwindcss", link: "https://tailwindcss.com/" },
              { name: "Figma", link: "https://www.figma.com/" },
            ]}
            projectGithubLink="https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon"
          />
          <div className="project__divider" />
          <ProjectCard
            projectName="Q bot"
            projectImgUrlList={[
              "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help.png",
              "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-account.png",
              "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-valorant.png",
              "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-private-vc.png",
            ]}
            projectDescription="Q bot is a discord bot that allows you to check your Valorant stats, 
              manage Valorant accounts you've added, create private voice channels in the server, and more."
            projectTechnologyList={[
              { name: "Node.js", link: "https://nodejs.org/en/" },
              { name: "JavaScript", link: "https://www.javascript.com/" },
              { name: "Axios", link: "https://axios-http.com/" },
              { name: "cheerio", link: "https://cheerio.js.org/" },
              { name: "discord.js", link: "https://old.discordjs.dev" },
              { name: "puppeteer", link: "https://pptr.dev/" },
            ]}
            projectGithubLink="https://github.com/LeightonGuang/Q-bot"
          />
          <div className="project__divider" />
          <ProjectCard
            projectName="Typing test website"
            projectImgUrlList={[
              "https://user-images.githubusercontent.com/41440634/212241316-4c0d389e-d85f-4ecb-a925-8ae4ac1140c4.png",
            ]}
            projectDescription="This is a website that evalulate your typing speed in words per minute (WPM)."
            projectTechnologyList={[
              { name: "HTML", link: "" },
              { name: "CSS", link: "" },
              { name: "JavaScript", link: "https://www.javascript.com/" },
            ]}
            projectGithubLink={"https://github.com/LeightonGuang/typing_test"}
          />
        </ul>
      </div>
    </section>
  );
}

export default ProjectPage;
