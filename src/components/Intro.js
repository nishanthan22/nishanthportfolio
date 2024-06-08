import React from "react";
import NishanthUserPic from "../assets/nishanth.png"
import '../styles/Intro.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import { SocialIcon } from 'react-social-icons'
 
const buttonStyle = {
  backgroundColor: '#1363DF',
  color: 'white',
  textTransform: 'uppercase',
  padding: '10px 50px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  outline: 'none', 
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 600,
  fontSize: '16px',
};
 
function downloadResume() {
  alert("You clicked me!");
}
function Intro() {
  const user = {
    name: "Nishanthan Ravichandran",
    bio: "A Software enthusiast who thrives on conceiving and building groundbreaking solutions that cater to the needs of society, driven by a passion for innovation and impactful creations",
    picture: NishanthUserPic,   
    socialMedia: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      github: "https://github.com/nishanthan22"
    }
  };

  return (
    <div className="home-container">
      <div className="user-picture">
        <img src={user.picture} alt="User" />
      </div>
      <div className="user-details">
        <h1>{user.name}</h1>
        <div className="social-media-links">
          <a href={user.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon url="www.linkedin.com"/></a>
          <a href={user.socialMedia.github} target="_blank" rel="noopener noreferrer"><SocialIcon url="www.github.com"/></a>
          <a href={user.socialMedia.twitter} target="_blank" rel="noopener noreferrer"><SocialIcon url="www.twitter.com"/></a>
          <a href={user.socialMedia.facebook} target="_blank" rel="noopener noreferrer"><SocialIcon url="www.facebook.com"/></a>
          <a href={user.socialMedia.instagram} target="_blank" rel="noopener noreferrer"><SocialIcon url="www.instagram.com"/></a>
        </div>
        <div className="user-bio">
        <b style={{ color: "#FE7A36" }}>{"{ "}</b>
          {user.bio}
          <b style={{ color: "#FE7A36" }}>{" }"}</b>
      </div>
      <div>
      <div className="resume-button">
      <button style={buttonStyle} onClick={downloadResume}>
        My Resume
      </button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Intro;
