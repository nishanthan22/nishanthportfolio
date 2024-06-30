import React from "react";
import "../styles/About.css"

function About(){
    return(
        <div className="about-container">
        <h2 style={{color: "#47B5FF "}}>About me</h2>
        <div className="text-area">
        <div className= "vertical-block" style={{
      borderLeft: '4px solid',
      height: '120pt',
      marginLeft: '20px'
    }}></div>
    
        <p><b style={{ color: "#47B5FF" }}>Software Engineer</b> with a demonstrated history in full-stack development and a keen enthusiasm for inventive solutions with experience in AI/ML technology. Proficient in developing and deploying Restful APIs, WebSocket applications, and Android applications, committed to crafting superior, maintainable code and propelling technological advancement. Creative, dedicated professional with a proven ability to learn quickly.
        </p></div>
        <h4 style={{textAlign: "center", color: "#47B5FF"}}>Tech Stack</h4>
        <div className="tech-stack">
        <iframe src="https://lottie.host/embed/f71927af-7b2a-4399-8dbc-8a090a71deb7/p7IhPwYySs.json"></iframe>
        
        </div>
        </div>
    );
}

export default About; 