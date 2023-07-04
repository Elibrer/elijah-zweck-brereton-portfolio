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
            I'm Eli, a full-stack developer specialising in the MERN software stack, which includes MongoDB, Express.js, React, and Node.js. With expertise in these technologies, I build robust and scalable web applications. I'm passionate about continuous learning and constantly strive to enhance my skills to provide the best possible service to my clients.
            <br/>
            If you have any questions, project inquiries, or would like to get in touch, feel free to reach out to me through the contact form on my website. I believe that effective communication is key to successful collaborations, and I look forward to discussing how I can contribute to your project's success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
