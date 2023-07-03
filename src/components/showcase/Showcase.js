import React from "react";
import "./Showcase.css";

import sportsTeamManager from "../../assets/images/sports-team-manager.png";
import weatheringHeights from "../../assets/images/weathering-heights.png";
import outfitForecast from "../../assets/images/outfit-forecast.png";
import zweckTechBlog from "../../assets/images/zweck-tech-login.png";
import githubIcon from "../../assets/images/githubLogo.png";

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
              <img className="iconImg" src={githubIcon} alt="Github icon"/>
            </a>
          </div>
        </div>
        <div className="sccards">
          <a href="https://elibrer.github.io/weather-app/">
            <img
              className="showcaseImg"
              src={weatheringHeights}
              alt="Weather Forecast application showcasing a serach input, recent search history, current weather data of chosen city and a 5 day forecast."
            />
          </a>
        </div>
        <div className="sccards">
          <a href="https://elibrer.github.io/weather-fashion-app/">
            <img
              className="showcaseImg"
              src={outfitForecast}
              alt="Outfit Forecast application showcasing items of clothing relevant to displayed city weather"
            />
          </a>
        </div>
        <div className="sccards">
          <a href="https://zweck-tech-blog.herokuapp.com/">
            <img
              className="showcaseImg"
              src={sportsTeamManager}
              alt="Sports Team Manager landing/login page with video display of various sports as background."
            />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Showcase;
