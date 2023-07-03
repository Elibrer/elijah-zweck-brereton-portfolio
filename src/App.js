import "./App.css";
import React, { useState } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Showcase from "./components/showcase/Showcase";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import zLogo from "./assets/images/zLogo.png";
import instaLogo from "./assets/images/ig.png";
import linkedinLogo from "./assets/images/linkedin.png";

const App = () => {
  const [isSelected, setIsSelected] = useState("home");

  
  return (
    <HashRouter>
      <div className="main d-flex flex-row ">
        <div className="sideNav d-flex flex-column flex-shrink-0 align-items-center">
          <img
            className="logoImg justify-content-center mb-4"
            src={zLogo}
            alt="ZweckDev logo"
          />
          <nav>
            <ul className="p-0">
              <li className={isSelected === "home" ? "selected" : ""}>
                <NavLink to="/" onClick={() => setIsSelected("home")}>
                  <div className="navEl d-flex flex-column justfiy-content-center align-items-center ">
                    <i className="fa fa-home" style={{ fontSize: "2em" }}></i>
                    <h1>HOME</h1>
                  </div>
                </NavLink>
              </li>
              <li className={isSelected === "showcase" ? "selected" : ""}>
                <NavLink
                  to="/showcase"
                  onClick={() => setIsSelected("showcase")}
                >
                  <div className="d-flex flex-column justfiy-content-center align-items-center ">
                    <i className="fa fa-folder" style={{ fontSize: "2em" }}></i>
                    <h1>SHOWCASE</h1>
                  </div>
                </NavLink>
              </li>
              <li className={isSelected === "about" ? "selected" : ""}>
                <NavLink to="/about" onClick={() => setIsSelected("about")}>
                  <div className="d-flex flex-column justfiy-content-center align-items-center ">
                    <i className="fa fa-user" style={{ fontSize: "2em" }}></i>
                    <h1>ABOUT</h1>
                  </div>
                </NavLink>
              </li>
              <li className={isSelected === "contact" ? "selected" : ""}>
                <NavLink to="/contact" onClick={() => setIsSelected("contact")}>
                  <div className="d-flex flex-column justfiy-content-center align-items-center ">
                    <i
                      className="fa fa-envelope"
                      style={{ fontSize: "2em" }}
                    ></i>
                    <h1>CONTACT</h1>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mainContain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="footerCard">
            <div>
              <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/eli-brereton-172444164">
                <img src={linkedinLogo} alt="linkedIn logo"/>
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/mrzweck">
                <img src={instaLogo} alt="instagram logo"/>
              </a>
            </div>
            <h6 id="footerText">© 2023 - Portfolio developed by Elijah 'Zweck' Brereton</h6>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
