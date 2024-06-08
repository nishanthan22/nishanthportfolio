import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">PORTFOLIO</div> 
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/footer">Footer</Link></li>
      </ul> 
    </nav>
  );
}

export default Navbar;
