import React from 'react';
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import FABContactMe from "./components/FABContactMe";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Navbar />
    <div id="intro">
      <Intro />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="experience">
      <Experience />
    </div>
    <div id="education">
      <Education />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="reviews">
      <Reviews />
    </div>
    <div id="certifications">
      <Certifications />
    </div>
    <div id="footer">
      <Footer />
    </div>
    <FABContactMe />
  </Router>
  );
}

export default App;
