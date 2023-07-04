import "./About.css";
import React from "react";

const About = () => {
  return (
    <section className="about" id="about">

      <div id="about-article">
        <div id="innerAbout">
          <h3>About</h3>
          <h4>Full-stack | HTML, CSS, JavaScript</h4>
          <div>
            <p className="aboutContent">
              I'm Eli, a full-stack developer based in Adelaide specialising in
              the MERN software stack, which includes MongoDb, Express.js,
              React, and Node.js. I'm passionate about learning, and I believe
              that increasing my knowledge and skills provides me with the tools
              to give my clients the best possible service. Fill out the form in
              the contact page if you'd like to get in contact with me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
