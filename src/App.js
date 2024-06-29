import Intro from "./components/Intro"
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import FABContactMe from "./components/FABContactMe"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <FABContactMe/>
      
    </Router>
  );
}

export default App;
