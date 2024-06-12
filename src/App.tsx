import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.tsx";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage.tsx";
import AnimationPage from "./pages/PlaygroundProjects/AnimationsPage/AnimationPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LeightonGuang" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/playground/animations" element={<AnimationPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
