import React, { useState } from "react";
import '../styles/Navbar.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={ScrollLink} to="intro" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px", color: "#1363DF" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ScrollLink} to="about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px", color: "#1363DF" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ScrollLink} to="experience"  duration={500} onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px", color: "#1363DF" }} /> Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ScrollLink} to="education" duration={500} onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px", color: "#1363DF" }} /> Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ScrollLink} to="projects" duration={500} onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px", color: "#1363DF" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ScrollLink} to="reviews" duration={500} onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px", color: "#1363DF" }} /> Reviews
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={ScrollLink} to="certifications" duration={500} onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px", color: "#1363DF" }} /> Certifications
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
