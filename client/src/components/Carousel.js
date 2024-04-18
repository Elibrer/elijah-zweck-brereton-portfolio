/* eslint-disable */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Image,
  Text,
  Flex,
  Card,
  CardBody,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShowcaseCard from "./ShowcaseCard";
import showcaseData from "../data/showcaseData";

const CarouselPage = () => {
  const boxWidth = useBreakpointValue({
    base: "370px", // On very small devices (like smartphones)
    sm: "480px", // On small devices (like tablets)
    md: "650px", // On medium-sized devices (like desktops)
    lg: "780px", // On large devices
    xl: "780px", // On very large devices (like large screens)
  });

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Box w={boxWidth}>
        <Carousel
          w={boxWidth}
          autoPlay={true}
          interval={5000}
          showThumbs={false}
          stopOnHover={true}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
        >
          {showcaseData.map((item, index) => (
            <ShowcaseCard
              index={index}
              title={item.title}
              alt={item.alt}
              description={item.description}
              image={item.image}
              github={item.github}
              deployedSite={item.deployedSite}
              item={item}
              bg="var(--navy)"
              shadow={true}
              bg="slategray"
              shadow={false}
              key={index}
            />
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default CarouselPage;
