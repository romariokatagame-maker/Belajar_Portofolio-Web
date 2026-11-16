import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import BackgroundSection from "./components/BackgroundSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Langsung ke konten
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BackgroundSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
