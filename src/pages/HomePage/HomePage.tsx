import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import Technology from "../../components/Technology/Technology";
import ProjectPage from "../ProjectPage/ProjectPage";
function HomePage() {
  return (
    <section className="homePage">
      <div className="homePage__container">
        <Hero />
        <Technology />
        <ProjectPage />
      </div>
    </section>
  );
}

export default HomePage;
