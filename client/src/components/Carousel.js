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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShowcaseCard from "./ShowcaseCard";
import showcaseData from "../data/showcaseData";

const CarouselPage = () => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Box w="780px">
        <Carousel
          autoPlay={true}
          interval={5000}
          showThumbs={false}
          stopOnHover={true}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
        >
          {showcaseData.map((item, index) => (
            <ShowcaseCard item={item} bg="slategray" shadow={false} />
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default CarouselPage;
