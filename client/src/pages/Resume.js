import React from "react";
import ResumePDF from "../assets/files/Elijah_Brereton_CV_2023.pdf";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div id="info-article">
        <div className="innerCard">
          <h5 className="resumeHeaders">Proficiencies</h5>
          <ul id="proficiencies">
            <li className="liHeaders">Front-end Development:</li>
            <ul className="star-list">
              <li>Single page application design utilising React.js</li>
              <li>Solid HTML Design</li>
              <li>Advanced CSS styling</li>
              <li>
                Strong grasp of JavaScript fundamentals and advanced concepts including Object-Oriented Programming, Functional Programming, Asynchronous Programming, and more.
              </li>
              <li>Competence in Handlebars.js</li>
              <li>Github version control</li>
            </ul>
            <br/>
            <br/>

            <li className="liHeaders">Back-end Development:</li>
            <ul className="star-list">
              <li>Web API design</li>
              <li>Third-party API integration</li>
              <li>RESTful API design</li>
              <li>
                Experience in server-side development using Node.js and Express.js
              </li>
              <li>MySQL and Sequelize ORM</li>
              <li>MVC design pattern</li>
              <li>MongoDB, Mongoose ODM, and GraphQL</li>
              <li>PWA development</li>
            </ul>
          </ul>
        </div>
        <div id="innerResume"></div>
      </div>
      <div id="resume-article">
        <div className="innerCard">
          <h5 className="resumeHeaders">Resume</h5>
          <div id="innerResume">
            <div id="pdf-container">
              <iframe
                title="Resume"
                src={ResumePDF}
                width="100%"
                height="700px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
