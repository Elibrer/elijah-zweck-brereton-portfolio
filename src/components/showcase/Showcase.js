import React from "react";
import "./Showcase.css";

import sportsTeamManager from "../../assets/images/sports-team-manager.png";
import weatheringHeights from "../../assets/images/weathering-heights.png";
import outfitForecast from "../../assets/images/outfit-forecast.png";
import zweckTechBlog from "../../assets/images/zweck-tech-login.png";
import githubIcon from "../../assets/images/githubLogo.png";
import pwaTextEditor from "../../assets/images/pwaapp.png";
import socialNetworkApi from "../../assets/images/socialNetworkApi.png";

const Showcase = () => {
  return (
    <section className="showcase" id="showcase">
      <section className="showcaseCards">
        <div className="sccards">
          <img
            className="showcaseImg"
            src={zweckTechBlog}
            alt="Sports Team Manager landing/login page with video display of various sports as background."
          />
          <div className="card-buttons d-flex flex-column text-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://zweck-tech-blog.herokuapp.com/"
            >
              ZweckTech Blog
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Elibrer/online-tech-blog/"
            >
              <img className="iconImg" src={githubIcon} alt="Github icon" />
            </a>
          </div>
        </div>

        <div className="sccards">
          <img
            className="showcaseImg"
            src={weatheringHeights}
            alt="Weather Forecast application showcasing a serach input, recent search history, current weather data of chosen city and a 5 day forecast."
          />
          <div className="card-buttons d-flex flex-column text-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://elibrer.github.io/weather-app/"
            >
              Weathering Heights
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Elibrer/weather-app/"
            >
              <img className="iconImg" src={githubIcon} alt="Github icon" />
            </a>
          </div>
        </div>

        <div className="sccards">
          <img
            className="showcaseImg"
            src={outfitForecast}
            alt="Outfit Forecast application showcasing items of clothing relevant to displayed city weather"
          />
          <div className="card-buttons d-flex flex-column text-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://elibrer.github.io/weather-fashion-app/"
            >
              Outfit Forecast
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Elibrer/weather-fashion-app/"
            >
              <img className="iconImg" src={githubIcon} alt="Github icon" />
            </a>
          </div>
        </div>

        <div className="sccards">
          <img
            className="showcaseImg"
            src={sportsTeamManager}
            alt="Sports Team Manager landing/login page with video display of various sports as background."
          />
          <div className="card-buttons d-flex flex-column text-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://sports-team-manager.herokuapp.com/"
            >
              Sports Team Manager
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Elibrer/sports-team-manager/"
            >
              <img className="iconImg" src={githubIcon} alt="Github icon" />
            </a>
          </div>
        </div>

        <div className="sccards">
          <img
            className="showcaseImg"
            src={pwaTextEditor}
            alt="PWA text editor app with a dark theme."
          />
          <div className="card-buttons d-flex flex-column text-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://zweck-text-editor-226f3a8f722e.herokuapp.com//"
            >
              J.A.T.E Text Editor
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Elibrer/pwa-text-editor/"
            >
              <img className="iconImg" src={githubIcon} alt="Github icon" />
            </a>
          </div>
        </div>

        <div className="sccards">
          <img
            className="showcaseImg"
            src={socialNetworkApi}
            alt="Insomnia screenshot of social network api routes"
          />
          <div className="card-buttons d-flex flex-column text-center">
            <p
              
            >
              Social Network API
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Elibrer/social-network-api/"
            >
              <img className="iconImg" src={githubIcon} alt="Github icon" />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Showcase;
