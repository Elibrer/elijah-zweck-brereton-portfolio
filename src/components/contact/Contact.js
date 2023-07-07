import React, { useState, useEffect } from "react";
import "./Contact.css";
import instaLogo from "../../assets/images/ig.png";
import linkedinLogo from "../../assets/images/linkedin.png";
import resumeIcon from "../../assets/images/resumeIcon.png";
import githubIcon from "../../assets/images/githubLogo.png";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryList, setCountryList] = useState("Australia");
  const [otherCountry, setOtherCountry] = useState("");
  const [country, setCountry] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [shareAgree, setShareAgree] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [thanksMessage, setThanksMessage] = useState("");
  const [fieldRequired, setFieldRequired] = useState("");
  const [submitForm, setSubmitForm] = useState("");

  const [nameEl, setNameEl] = useState("Name");
  const [emailEl, setEmailEl] = useState("E-mail");
  const [phoneEl, setPhoneEl] = useState("Phone");
  const [countryEl, setCountryEl] = useState("Country");
  const [hiddenEl, setHiddenEl] = useState("hidden");

  const [fullName, setFullName] = useState(firstName + " " + lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    setThanksMessage("");
    if (
      (shareAgree === true &&
        (!firstName || !lastName || !email || !phone || !enquiry)) ||
      (shareAgree === false && !enquiry)
    ) {
      setSubmitMessage("Please fill out all required* fields");
      return;
    }
    setSubmitMessage("");
    setFullName(firstName + " " + lastName);

    if (countryList === "Other") {
      if (otherCountry) {
        setCountry(otherCountry);
        setSubmitMessage("");
      } else {
        setSubmitMessage("Please enter a country.");
        return;
      }
    } else {
      setCountry(countryList);
      setSubmitMessage("");
    }

    if (shareAgree === true) {
      const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
      if (!emailRegex.test(email)) {
        setSubmitMessage("Please enter a valid email address.");
        return;
      }
      const phoneRegex = /^(\+?61|0)4[0-9]{8}$/;
      if (!phoneRegex.test(phone)) {
        setSubmitMessage("Please enter a valid phone number.");
        return;
      }

      setSubmitForm({
        Name: fullName,
        Email: email,
        Phone: phone,
        Country: country,
        Enquiry: enquiry,
      });
    } else {
      setSubmitForm({
        Name: "Anonymous",
        Enquiry: enquiry,
      });
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCountryList("Australia");
    setOtherCountry("");
    setEnquiry("");
    setNameEl("Name");
    setEmailEl("E-mail");
    setPhoneEl("Phone");
    setCountryEl("Country");
    setShareAgree(false);
    document.getElementById("agreement").checked = false;
    setCountry("");
    setThanksMessage(
      "Thank you for your enquiry. I will get back to you as soon as possible."
    );
  };

  useEffect(() => {
    console.log(submitForm);
  }, [submitForm]);

  const checkOnBlur = (e) => {
     if(e.target.value !== "") {
      setFieldRequired("");
    }

    if (e.target.value === "") {
      switch (e.target.getAttribute("data-key")) {
        case "firstName":
          if (shareAgree === true) {
            setFieldRequired("firstName");
          }
          break;
        case "lastName":
          if (shareAgree === true) {
            setFieldRequired("lastName");
          }
          break;
        case "email":
          if (shareAgree === true) {
            setFieldRequired("email");
          }
          break;
        case "phone":
          if (shareAgree === true) {
            setFieldRequired("phone");
          }
          break;
        case "enquiry":
          setFieldRequired("enquiry");
          break;
        default:
          setFieldRequired("");
      }
    }
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setNameEl("Name*");
      setEmailEl("E-mail*");
      setPhoneEl("Phone*");
      setCountryEl("Country*");
      setFieldRequired("");
      console.log(fieldRequired)
      setShareAgree(true);
    } else {
      setNameEl("Name");
      setEmailEl("E-mail");
      setPhoneEl("Phone");
      setCountryEl("Country");
      setFieldRequired("");

      setShareAgree(false);
    }
  };

  useEffect(() => {
    if (countryList === "Other") {
      setHiddenEl("unhidden");
      if (otherCountry) {
        setCountry(otherCountry);
        setSubmitMessage("");
      }
    } else {
      setCountry(countryList);
      setHiddenEl("hidden");
    }
  }, [countryList, otherCountry]);

  const handleOtherCountry = (e) => {
    setOtherCountry(e);
  };

  const handleCountrySelect = (e) => {
    setCountryList(e);
  };

  return (
    <section className="contact">
      <div className="ctcards container">
        <section id="contact-card-container">
          <div className="contact-card">
            <p className="detailsHeader">Contact Details</p>
            <p>Elijah Brereton</p>
            <p>
              Email :
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto: eli.brer@gmail.com"
              >
                {" "}
                eli.brer@gmail.com
              </a>
            </p>
            <p>
              Ph. :
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="tel:+61423047693"
              >
                {" "}
                0423 047 693
              </a>
            </p>
            <p>
              GitHub:
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/elibrer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub icon"
                  className="socialLogo"
                />
              </a>
            </p>
            <p>
              LinkedIn:
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/eli-brereton-172444164"
              >
                <img
                  src={linkedinLogo}
                  alt="linkedIn logo"
                  className="socialLogo"
                />
              </a>
            </p>
            <p>
              Instagram:
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/mrzweck"
              >
                <img
                  src={instaLogo}
                  alt="instagram logo"
                  className="socialLogo"
                />
              </a>
            </p>
            <p>
              Resume:
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1MmjeUGCkxKO8AXKrfxjvNl7O5zueUAFa/view?usp=sharing"
              >
                <img
                  src={resumeIcon}
                  alt="Resume icon"
                  className="socialLogo"
                />
              </a>
            </p>
          </div>
        </section>
        <section id="inputContainer">
          <figure className="inputTypes">
            <h5 id="firstName">{nameEl}</h5>
            <div className="cardInputs">
              <div className="inputStyle">
                <label htmlFor="first-name"></label>
                <input
                  onBlur={(e) => checkOnBlur(e)}
                  data-key="firstName"
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <h6>
                  First Name{" "}
                  <span
                    className={`requiredSpan ${
                      fieldRequired === "firstName" ? "unhidden" : "hidden"
                    }`}
                  >
                    Field required*
                  </span>
                </h6>
              </div>
              <div className="inputStyle">
                <label htmlFor="last-name"></label>
                <input
                  onBlur={checkOnBlur}
                  data-key="lastName"
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <h6 id="lastName">
                  Last Name
                  <span
                    className={`requiredSpan ${
                      fieldRequired === "lastName" ? "unhidden" : "hidden"
                    }`}
                  >
                    Field required*
                  </span>
                </h6>
              </div>
            </div>
          </figure>
          <figure className="inputTypes">
            <h5 id="email">
              {emailEl}
              <span
                className={`requiredSpan ${
                  fieldRequired === "email" ? "unhidden" : "hidden"
                }`}
              >
                Field required*
              </span>
            </h5>
            <div className="inputStyle">
              <label htmlFor="email"></label>
              <input
                onBlur={checkOnBlur}
                data-key="email"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </figure>
          <figure className="inputTypes">
            <h5 id="phone">
              {phoneEl}
              <span
                className={`requiredSpan ${
                  fieldRequired === "phone" ? "unhidden" : "hidden"
                }`}
              >
                Field required*
              </span>
            </h5>
            <div className="inputStyle">
              <label htmlFor="phone"></label>
              <input
                onBlur={checkOnBlur}
                data-key="phone"
                id="phone"
                type="text"
                name="phone"
                value={phone}
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </figure>
          <figure className="inputTypes">
            <h5 id="country">{countryEl}</h5>
            <div className="inputStyle">
              <label htmlFor="country"></label>
              <select
                id="country"
                value={countryList}
                onChange={(e) => handleCountrySelect(e.target.value)}
              >
                <option defaultValue>Australia</option>
                <option>USA</option>
                <option>Great Britain</option>
                <option>Other</option>
              </select>
              <input
                onBlur={checkOnBlur}
                className={`mt-2 ${hiddenEl}`}
                type="text"
                name="otherCountry"
                value={otherCountry}
                onChange={(e) => handleOtherCountry(e.target.value)}
              />
            </div>
          </figure>
          <figure className="inputTypes">
            <h5 id="enquiry">
              Enquiry*
              <span
                className={`requiredSpan ${
                  fieldRequired === "enquiry" ? "unhidden" : "hidden"
                }`}
              >
                Field required*
              </span>
            </h5>
            <div className="inputStyle d-flex align-items-center justify-content-center">
              <label htmlFor="enquiry"></label>
              <textarea
                onBlur={checkOnBlur}
                data-key="enquiry"
                id="enquiry"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
              ></textarea>
            </div>
          </figure>
          <p id="submitMessage">{submitMessage}</p>
          <figure className="inputTypes">
            <div className="inputStyle d-flex flex-row">
              <input
                className="checkbox"
                id="agreement"
                type="checkbox"
                value={shareAgree}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreement" className="align-items-center">
                <span id="shareSpan">
                  I agree to share my contact details with ZweckDev
                </span>
              </label>
            </div>
          </figure>
          <figure className="inputTypes">
            <div className="inputStyle">
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
            <p id="thanksMessage">{thanksMessage}</p>
          </figure>
        </section>
      </div>
    </section>
  );
};

export default Contact;
