import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.tsx";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage.tsx";
import ImageGalleryPage from "./pages/PlaygroundProjects/ImageGalleryPage/ImageGalleryPage.tsx";
import FramerMotionAnimationPage from "./pages/PlaygroundProjects/FramerMotionAnimationPage/FramerMotionAnimationPage.tsx";
import ComparePage from "./pages/PlaygroundProjects/ComparePage/ComparePage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import Footer from "./components/Footer/Footer.tsx";
import VanilaCssPage from "./pages/VanilaCssPage/VanilaCssPage.tsx";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LeightonGuang" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route
            path="playground/image-gallery"
            element={<ImageGalleryPage />}
          />
          <Route
            path="/playground/framer-motion-animations"
            element={<FramerMotionAnimationPage />}
          />
          <Route path="/playground/compare" element={<ComparePage />} />
          <Route path="/playground/vanila-css" element={<VanilaCssPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
