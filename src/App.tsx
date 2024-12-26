import "./App.scss";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage/ProjectPage.tsx";
import VanilaCssPage from "./pages/VanilaCssPage/VanilaCssPage.tsx";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage.tsx";
import SocialsPage from "./pages/SocialsPage/SocialsPage.tsx";
import ComparePage from "./pages/PlaygroundProjects/ComparePage/ComparePage.tsx";
import ImageGalleryPage from "./pages/PlaygroundProjects/ImageGalleryPage/ImageGalleryPage.tsx";
import FramerMotionAnimationPage from "./pages/PlaygroundProjects/FramerMotionAnimationPage/FramerMotionAnimationPage.tsx";

function App() {
  const ConditionalNavbar = () => {
    const location = useLocation();

    if (location.pathname === "/") {
      return null;
    }

    return <Navbar />;
  };

  const ConditionalFooter = () => {
    const location = useLocation();

    if (location.pathname === "/") {
      return null;
    }

    return <Footer />;
  };

  return (
    <div className="App">
      <HashRouter>
        <ConditionalNavbar />

        <Routes>
          <Route path="/" element={<SocialsPage />} />
          <Route path="/home" element={<HomePage />} />
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

        <ConditionalFooter />
      </HashRouter>
    </div>
  );
}

export default App;
