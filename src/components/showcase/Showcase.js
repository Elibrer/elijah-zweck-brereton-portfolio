
import React from 'react';
import './Showcase.css';

import sportsTeamManager from '../../assets/images/sports-team-manager.png';
import weatherFashionApp from '../../assets/images/weathering-heights.png';
import outfitForecast from '../../assets/images/outfit-forecast.png';
import zweckTechBlog from '../../assets/images/zweck-tech-login.png';


const Showcase = () => {
  return (
    <section className="showcase" id="showcase">  

        <section className="container">
            
        </section>


        <section className="showcase-items">
            <div className="showcase-cards">
                <figure className="item sc-image">
                    <h2>ZweckTech Blog</h2>
                    <a href="https://zweck-tech-blog.herokuapp.com/"><img className="showcaseImg" src={zweckTechBlog} alt="Sports Team Manager landing/login page with video display of various sports as background."/></a>

                </figure>        
            </div>
            <div className="showcase-cards">
                <figure className="item sc-image">
                    <h2>Outfit Forecast</h2>
                    <a href="https://elibrer.github.io/weather-fashion-app/"><img className="showcaseImg" src="./assets/images/outfit-forecast.png" alt="Outfit Forecast application showcasing items of clothing relevant to displayed city weather"/></a>

                </figure>        
            </div>
            <div className="showcase-cards">
                <figure className="item sc-image">
                    <h2>Weathering Heights</h2>
                    <a href="https://elibrer.github.io/weather-app/"><img src="./assets/images/weathering-heights.png" alt="Weather Forecast application showcasing a serach input, recent search history, current weather data of chosen city and a 5 day forecast."/></a>

                </figure>        
            </div>
            <div className="showcase-cards">
                <figure className="item sc-image">
                    <h2>Work Day Planner</h2>
                    <a href="https://elibrer.github.io/work-day-planner/"><img src="./assets/images/workday-planner.png" alt="Work day planner landing page showcasing "/></a>

                </figure>        
            </div>
            <div className="showcase-cards">
                <figure className="item sc-image">
                    <h2>Code Quiz</h2>
                    <a href="https://elibrer.github.io/code-quiz/"><img src="./assets/images/code-quiz.png" alt="Code Quiz landing page displayng the timer, highscores table, and quiz start button."/></a>

                </figure>        
            </div>
            <div className="showcase-cards">
                <figure className="item sc-image">
                    <h2>Password Generator V2</h2>
                    <a href="https://elibrer.github.io/password-generator-v2/"><img src="./assets/images/password-generator-v2.png" alt="Password Generator landing page displaying all features and adjustable parameters for the random generator"/></a>

                </figure>        
            </div>
            <div className="showcase-cards">
                <figure className="item sc-image">
                    <h2>Elijah Brereton's Portfolio</h2>
                    <a href="https://elibrer.github.io/elijah-brereton-portfolio/"><img src="./assets/images/portfolio.png" alt="Elijah's Portfolio landing page with Elijah"/></a>

                </figure>        
            </div>
            <div className="showcase-cards">
                <figure className="item sc-image">
                    <h2>CSS Cheatsheet</h2>
                    <a href="https://elibrer.github.io/css-cheatsheet/"><img src="./assets/images/css-cheatsheet.png" alt="Placeholder"/></a>
                </figure>    
            </div>
                
            
        </section>
    </section>
  );
};

export default Showcase;
