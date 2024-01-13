import TechnologyCard from "../TechnologyCard/TechnologyCard";
import "./Technology.scss";

function Technology() {
  return (
    <div className="technology">
      <div className="technology__container">
        <h1>Technology</h1>
        <div className="technology__scroll">
          <ul className="technology__list">
            <TechnologyCard
              TechnologyName="HTML"
              TechnologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/61/20110920154916%21HTML5_logo_and_wordmark.svg/85px-HTML5_logo_and_wordmark.svg.png"
            />
            <TechnologyCard
              TechnologyName="CSS"
              TechnologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            />
            <TechnologyCard
              TechnologyName="JavaScript"
              TechnologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            />
            <TechnologyCard
              TechnologyName="Sass"
              TechnologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"
            />
            <TechnologyCard
              TechnologyName="BEM"
              TechnologyLogo="https://avatars.githubusercontent.com/u/223412?s=280&v=4"
            />
            <TechnologyCard
              TechnologyName="React"
              TechnologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <TechnologyCard
              TechnologyName="Node.js"
              TechnologyLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Technology;
