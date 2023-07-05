import "./Resume.css";
import React from "react";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div id="resume-article">
        <div id="innerResume">
          <h3>Resume</h3>
          <h4>Click on the icon below to view my resume...</h4>
          <div id="resumeIcon">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/12phLBkwi58gwgJyhvMnLK1zqO_k1pYhpQmv9rfihqJ4/edit?usp=sharing"
            >
              <i className="fa fa-file" style={{ fontSize: "15em" }}></i>
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
