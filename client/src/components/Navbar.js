/* eslint-disable */

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import zLogo from "../../assets/images/zLogo.png";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState("home");
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        document.getElementById("burgerContain").style.opacity = 0;
        document.getElementById("sideNav").style.width = "100%";
        document.getElementById("sideNav").style.height = "50px";
      }
      if (window.innerWidth >= 769) {
        document.getElementById("burgerContain").style.opacity = 0;
        document.getElementById("sideNav").style.width = "120px";
        document.getElementById("sideNav").style.height = "100%";
      }
    };

    const handleUrlChange = () => {
      const currentPath = window.location.hash.slice(2);
      setIsSelected(currentPath);
    };

    window.addEventListener("resize", handleResize);
    handleUrlChange();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openNav() {
    if (mobile === false) {
      document.getElementById("sideNav").style.width = "120px";
      document.getElementById("burgerContain").style.opacity = 0;
      document.getElementById("burgerContain").style.zIndex = -1;
    } else {
      document.getElementById("sideNav").style.width = "100%";
      document.getElementById("sideNav").style.height = "50px";
      document.getElementById("burgerContain").style.opacity = 0;
      document.getElementById("burgerContain").style.zIndex = -1;
    }
  }

  function closeNav() {
    if (mobile === false) {
      document.getElementById("sideNav").style.width = "100%";
      document.getElementById("sideNav").style.width = "0";
      document.getElementById("burgerContain").style.opacity = 1;
      document.getElementById("burgerContain").style.zIndex = 1;
    } else {
      document.getElementById("sideNav").style.height = "0";
      document.getElementById("burgerContain").style.opacity = 1;
      document.getElementById("burgerContain").style.zIndex = 1;
    }
  }

  return (
    <div id="allNav">
      <div className="openbtn" onClick={() => openNav()} id="burgerContain">
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
      <div className="sideNav" id="sideNav">
        <nav id="innerNav">
          <button className="closebtn" onClick={() => closeNav()}>
            &times;
          </button>
          <ul className="p-0 navUl">
            <img className="logoImg" src={zLogo} alt="ZweckDev logo" />
            <li className={isSelected === "home" ? "selected" : ""}>
              <NavLink
                className="NavLink"
                to="/"
                onClick={() => setIsSelected("home")}
              >
                <div className="navEl d-flex flex-column justfiy-content-center align-items-center ">
                  <i className="fa fa-home" style={{ fontSize: "2em" }}></i>
                  <h1>HOME</h1>
                </div>
              </NavLink>
            </li>
            <li className={isSelected === "showcase" ? "selected" : ""}>
              <NavLink
                className="NavLink"
                to="/showcase"
                onClick={() => setIsSelected("showcase")}
              >
                <div className="navEl d-flex flex-column justfiy-content-center align-items-center ">
                  <i className="fa fa-folder" style={{ fontSize: "2em" }}></i>
                  <h1>SHOWCASE</h1>
                </div>
              </NavLink>
            </li>
            <li className={isSelected === "about" ? "selected" : ""}>
              <NavLink
                className="NavLink"
                to="/about"
                onClick={() => setIsSelected("about")}
              >
                <div className="navEl d-flex flex-column justfiy-content-center align-items-center ">
                  <i className="fa fa-user" style={{ fontSize: "2em" }}></i>
                  <h1>ABOUT</h1>
                </div>
              </NavLink>
            </li>
            <li className={isSelected === "contact" ? "selected" : ""}>
              <NavLink
                className="NavLink"
                to="/contact"
                onClick={() => setIsSelected("contact")}
              >
                <div className="navEl d-flex flex-column justfiy-content-center align-items-center ">
                  <i className="fa fa-envelope" style={{ fontSize: "2em" }}></i>
                  <h1>CONTACT</h1>
                </div>
              </NavLink>
            </li>
            <li className={isSelected === "resume" ? "selected" : ""}>
              <NavLink
                className="NavLink"
                to="/resume"
                onClick={() => setIsSelected("resume")}
              >
                <div className="navEl d-flex flex-column justfiy-content-center align-items-center ">
                  <i className="fa fa-file" style={{ fontSize: "2em" }}></i>
                  <h1>RESUME</h1>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
