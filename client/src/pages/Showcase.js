import React from "react";
import { Text, Flex, Box, Image, Link, Card, Heading, Divider } from "@chakra-ui/react";
import ShowcaseCard from "../components/ShowcaseCard";

import showcaseData from "../data/showcaseData";

//Information for the showcaseItems:
{
  /* <div className="sccards">
          <img
            className="showcaseImg"
            src={heyListen}
            alt="Hey! Listen! home page."
          />
          <div className="card-buttons d-flex flex-column text-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://hey-listen-sound-caafe84374e5.herokuapp.com/"
            >
              Hey! Listen!
            </a>
            <div className="descriptionBox">
              <text className="descriptionText">
                An online marketplace forum where users can collaborate on music
                related projects together!
              </text>
            </div>
            <div className="flexBox mt-4">
              <text className="descriptionText">Link to deployed application:</text>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://hey-listen-sound-caafe84374e5.herokuapp.com/"
              >
                <MdLink className="iconImg" />
              </a>
            </div>
            <div className="flexBox">
              <text className="descriptionText">GitHub:</text>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Sype7973/Hey-Listen/"
              >
                <img className="iconImg" src={githubIcon} alt="Github icon" />
              </a>
            </div>
          </div>
        </div>

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
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Elibrer/social-network-api/"
            >
              Social Network API
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Elibrer/social-network-api/"
            >
              <img className="iconImg" src={githubIcon} alt="Github icon" />
            </a>
          </div>
        </div> */
}

const Showcase = () => {
  return (
    <Flex
      bg="slategray"
      height="auto"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxSizing="border-box"
    >
      <Box
        // bg="#C0B3A0"
        p="30px"
        pb="0"
        color="#ffffff"
        textShadow="2px 2px 2px slategray"
      >
        <Heading
        textAlign="center"
          fontFamily="'DM Serif Display', sans-serif"
          fontSize="60px"
          fontWeight="400"
        >
          Project and Application Showcase
        </Heading>
        <Text
        fontStyle="italic"

          textAlign="center"
          fontSize="30px"
          fontWeight="300"
        >
          Hover over the cards for information about each project.
        </Text>
        <Divider></Divider>
      </Box>
      <Card
        bg="none"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        maxHeight="100%"
        overflow="auto"
        p="10px"
      >
        {showcaseData.map((item, index) => (
          <ShowcaseCard
            key={index}
            title={item.title}
            alt={item.alt}
            description={item.description}
            image={item.image}
            github={item.github}
            deployedSite={item.deployedSite}
          />
        ))}
      </Card>
    </Flex>
  );
};

export default Showcase;
