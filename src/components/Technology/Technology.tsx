import "./Technology.scss";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

function Technology() {
  return (
    <div className="technology">
      <div className="technology__container">
        <h1 className="technology__title">Technology I use</h1>
        <div className="technology__scroll">
          <ul className="technology__list">
            <TechnologyCard
              technologyName="HTML"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/61/20110920154916%21HTML5_logo_and_wordmark.svg/85px-HTML5_logo_and_wordmark.svg.png"
            />
            <TechnologyCard
              technologyName="CSS"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            />
            <TechnologyCard
              technologyName="JavaScript"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            />
            <TechnologyCard
              technologyName="Sass"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"
            />
            <TechnologyCard
              technologyName="BEM"
              technologyLogo="https://avatars.githubusercontent.com/u/223412?s=280&v=4"
            />
            <TechnologyCard
              technologyName="React"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <TechnologyCard
              technologyName="Node.js"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
            />
            <TechnologyCard
              technologyName="Express.js"
              technologyLogo="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
            />
            <TechnologyCard
              technologyName="MySQL"
              technologyLogo="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/2560px-MySQL_logo.svg.png"
            />
            <TechnologyCard
              technologyName="Knex.js"
              technologyLogo="https://static-00.iconduck.com/assets.00/knex-js-icon-2048x2048-l5vf0s33.png"
            />
            <TechnologyCard
              technologyName="Git"
              technologyLogo="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            />
            <TechnologyCard
              technologyName="GitHub"
              technologyLogo="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            />
            <TechnologyCard
              technologyName="Jira"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/2560px-Jira_Logo.svg.png"
            />
            <TechnologyCard
              technologyName="VS Code"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            />
            <TechnologyCard
              technologyName="Python"
              technologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Technology;
