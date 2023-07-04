import React from "react";
import "./Contact.css";

import instaLogo from "../../assets/images/ig.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import resumeIcon from "../../assets/images/resumeIcon.png";
import githubIcon from "../../assets/images/githubLogo.png";

const Contact = () => {
  return (
    <section className="contact">
      <div className="ctcards container">
        <section id="contact-card-container">
          <div className="contact-card">
            <p className="detailsHeader">Contact Details</p>
            <p>Elijah Brereton</p>
            <p>
              Email :
              <a rel="noopener noreferrer" target="_blank" href="mailto: eli.brer@gmail.com"> eli.brer@gmail.com</a>
            </p>
            <p>
              Ph. :<a rel="noopener noreferrer" target="_blank" href="tel:+61423047693"> 0423 047 693</a>
            </p>
            <p>GitHub:<a rel="noopener noreferrer" target="_blank" href="https://github.com/elibrer"><img src={githubIcon} alt="GitHub icon" className="socialLogo"/></a></p>
            <p>LinkedIn:<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/eli-brereton-172444164">
                <img src={linkedinLogo} alt="linkedIn logo" className="socialLogo"/>
              </a></p>
              <p>Instagram:<a rel="noopener noreferrer" target="_blank" href="https://instagram.com/mrzweck">
                <img src={instaLogo} alt="instagram logo" className="socialLogo"/>
              </a></p>
            <p>Resume:<a rel="noopener noreferrer" target="_blank"  href="https://docs.google.com/document/d/12phLBkwi58gwgJyhvMnLK1zqO_k1pYhpQmv9rfihqJ4/edit?usp=sharing"><img src={resumeIcon} alt="Resume icon" className="socialLogo"/></a></p>
            
          </div>
          
        </section>
        <section id="inputContainer">
          <figure className="inputTypes">
            <h5>Name*</h5>
            <div className="cardInputs">
              <div className="inputStyle">
                <label htmlFor="first-name"></label>
                <input id="first-name" type="text" />
                <h6>First Name</h6>
              </div>
              <div className="inputStyle">
                <label htmlFor="last-name"></label>
                <input id="last-name" type="text" />
                <h6>Last Name</h6>
              </div>
            </div>
          </figure>
          <figure className="inputTypes">
            <h5>E-mail*</h5>
            <div className="inputStyle">
              <label htmlFor="email"></label>
              <input id="email" type="text" />
            </div>
          </figure>
          <figure className="inputTypes">
            <h5>Phone*</h5>
            <div className="inputStyle">
              <label htmlFor="phone"></label>
              <input
                id="phone"
                type="text"
                name="phone"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
              />
            </div>
          </figure>
          <figure className="inputTypes">
            <h5>Country*</h5>
            <div className="inputStyle">
              <label htmlFor="country"></label>
              <select id="country">
                <option defaultValue>Australia</option>
                <option>USA</option>
                <option>Great Britain</option>
                <option>Other</option>
              </select>
            </div>
          </figure>
          <figure className="inputTypes">
            <h5>Enquiry*</h5>
            <div className="inputStyle d-flex align-items-center justify-content-center">
              <label htmlFor="enquiry"></label>
              <textarea id="enquiry"></textarea>
            </div>
          </figure>
          <figure className="inputTypes">
            <div className="inputStyle d-flex flex-row">
              <input className="checkbox" id="agreement" type="checkbox" />
              <label htmlFor="agreement" className="align-items-center">
                <span>I agree to share my contact details with ZweckDev</span>
              </label>
            </div>
          </figure>
          <figure className="inputTypes">
            <div className="inputStyle">
              <input type="submit" value="Submit" />
            </div>
          </figure>
        </section>
      </div>
    </section>
  );
};

export default Contact;
