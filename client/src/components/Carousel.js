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
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShowcaseCard from "./ShowcaseCard";
import showcaseData from "../data/showcaseData";

const CarouselPage = () => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Box w="700px"
      >
        <Carousel
          autoPlay={false}
          interval={500}
          showThumbs={false}
          stopOnHover={false}
          infiniteLoop={true}
          showStatus={false}
        >
          {showcaseData.map((item, index) => (
            <Card bg="var(--navy)" color="white" h="300px">
              <CardBody
                p="60px"
                textAlign="left"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="left"
              >
                <Heading
                fontSize="50px"
                >{item.title}</Heading>
                <Text
                fontSize="20px"
                >{item.description}</Text>
              </CardBody>
            </Card>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default CarouselPage;
