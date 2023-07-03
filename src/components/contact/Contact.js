import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="ctcards container">
        <section id="contact-card">
          <div>
            <p className="detailsHeader">Contact Details</p>
            <p>Elijah Brereton</p>
            <p>
              Email :
              <a rel="noopener noreferrer" target="_blank" href="mailto: eli.brer@gmail.com"> eli.brer@gmail.com</a>
            </p>
            <p>
              Ph. :<a rel="noopener noreferrer" target="_blank" href="tel:+61423047693"> 0423 047 693</a>
            </p>
          </div>
        </section>
        <section id="inputContainer">
          <figure className="inputTypes">
            <h5>Name*</h5>
            <div className="cardInputs">
              <div className="inputStyle">
                <label for="first-name"></label>
                <input id="first-name" type="text" />
                <h6>First Name</h6>
              </div>
              <div className="inputStyle">
                <label for="last-name"></label>
                <input id="last-name" type="text" />
                <h6>Last Name</h6>
              </div>
            </div>
          </figure>
          <figure className="inputTypes">
            <h5>E-mail*</h5>
            <div className="inputStyle">
              <label for="email"></label>
              <input id="email" type="text" />
            </div>
          </figure>
          <figure className="inputTypes">
            <h5>Phone*</h5>
            <div className="inputStyle">
              <label for="phone"></label>
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
              <label for="country"></label>
              <select id="country">
                <option selected>Australia</option>
                <option>USA</option>
                <option>Great Britain</option>
                <option>Other</option>
              </select>
            </div>
          </figure>
          <figure className="inputTypes">
            <h5>Enquiry*</h5>
            <div className="inputStyle d-flex align-items-center justify-content-center">
              <label for="enquiry"></label>
              <textarea id="enquiry"></textarea>
            </div>
          </figure>
          <figure className="inputTypes">
            <div className="inputStyle d-flex flex-row">
              <input className="checkbox" id="agreement" type="checkbox" />
              <label for="agreement" className="align-items-center">
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
