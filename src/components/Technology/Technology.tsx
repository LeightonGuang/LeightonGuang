import "./Technology.scss";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";
import sassIcon from "../../assets/icons/sass.svg";
import bemIcon from "../../assets/icons/bem.svg";
import reactIcon from "../../assets/icons/react.svg";
import nodeIcon from "../../assets/icons/nodejs.svg";
import expressIcon from "../../assets/icons/express.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import knexIcon from "../../assets/icons/knex.svg";
import gitIcon from "../../assets/icons/git.svg";
import githubIcon from "../../assets/icons/github.svg";
import jiraIcon from "../../assets/icons/jira.svg";
import vscodeIcon from "../../assets/icons/vscode.svg";
import pythonIcon from "../../assets/icons/python.svg";
import discordjsIcon from "../../assets/icons/discordjs.svg";

import Marquee from "react-fast-marquee";

function Technology() {
  return (
    <section className="technology">
      <div className="technology__container">
        <h2 className="technology__title">What I use</h2>
        <Marquee pauseOnHover={true} speed={75} className="technology__marquee">
          <ul className="technology__list">
            <TechnologyCard technologyName="HTML" technologyLogo={htmlIcon} />
            <TechnologyCard technologyName="CSS" technologyLogo={cssIcon} />
            <TechnologyCard
              technologyName="JavaScript"
              technologyLogo={javascriptIcon}
            />
            <TechnologyCard technologyName="Sass" technologyLogo={sassIcon} />
            <TechnologyCard technologyName="BEM" technologyLogo={bemIcon} />
            <TechnologyCard technologyName="React" technologyLogo={reactIcon} />
            <TechnologyCard
              technologyName="Node.js"
              technologyLogo={nodeIcon}
            />
            <TechnologyCard
              technologyName="Express.js"
              technologyLogo={expressIcon}
            />
            <TechnologyCard technologyName="MySQL" technologyLogo={mysqlIcon} />
            <TechnologyCard
              technologyName="Knex.js"
              technologyLogo={knexIcon}
            />
            <TechnologyCard technologyName="Git" technologyLogo={gitIcon} />
            <TechnologyCard
              technologyName="GitHub"
              technologyLogo={githubIcon}
            />
            <TechnologyCard technologyName="Jira" technologyLogo={jiraIcon} />
            <TechnologyCard
              technologyName="VS Code"
              technologyLogo={vscodeIcon}
            />
            <TechnologyCard
              technologyName="Python"
              technologyLogo={pythonIcon}
            />
            <TechnologyCard
              technologyName="Discord.js"
              technologyLogo={discordjsIcon}
            />
          </ul>
        </Marquee>
      </div>
    </section>
  );
}
export default Technology;
