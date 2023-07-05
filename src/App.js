import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Showcase from "./components/showcase/Showcase";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <HashRouter>
      <div className="main">
        <Navbar />
        <div className="mainContain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="footerCard">
            <h6 id="footerText">
              © 2023 - Portfolio developed by Elijah 'Zweck' Brereton
            </h6>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
