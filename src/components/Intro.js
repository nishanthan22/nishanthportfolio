import React from "react";
import NishanthUserPic from "../assets/nishanth.png"
import '../styles/Intro.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import styled from "styled-components";
import { Button } from "@mui/material";
import { SocialIcon } from 'react-social-icons' 
import { color } from "framer-motion";


 
function downloadResume() {
  alert("You clicked me!");
}
function Intro() {
  const user = {
    name: "Nishanthan Ravichandran",
    picture: NishanthUserPic
  };

  return (
    <>
    <div className="home-container">
      <div className="user-picture">
        <img src={user.picture} alt="User" />
      </div>
      <div className="user-details">
        <h1>{user.name}</h1>
        
        <div className="user-bio">
          
          A <b style={{ color: "#47B5FF" }}>Software Engineer</b> passionate about <b style={{ color: "#47B5FF" }}>{" { "}</b>innovation<b style={{ color: "#47B5FF" }}>{" }"}</b>, dedicated to creating groundbreaking solutions that cater to the <b style={{ color: "#47B5FF" }}>{" { "}</b>needs of society<b style={{ color: "#47B5FF" }}>{" }"}</b>
          
        </div>
       
        <div className="social-media-links">
              <a><SocialIcon target="_blank" bgColor="#1363DF" url="https://www.linkedin.com/in/nishanth-ravichandran22/"/></a>
              <a><SocialIcon target="_blank" url="https://github.com/nishanthan22"/></a>
              <a><SocialIcon target="_blank" url="https://leetcode.com/u/nishanth22_/"/></a>
              <a><SocialIcon target="_blank" url="https://stackoverflow.com/users/15491669/nishanthan-ravichandran"/></a>
        </div>
        
      </div>
    </div>
    
  </>
  );
}

export default Intro;
