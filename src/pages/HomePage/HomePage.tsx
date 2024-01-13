import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import Technology from "../../components/Technology/Technology";
function HomePage() {
  return (
    <section className="homePage">
      <div className="homePage__container">
        <Hero />
        <Technology />
      </div>
    </section>
  );
}

export default HomePage;
