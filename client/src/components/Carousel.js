import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShowcaseCard from "./ShowcaseCard";
import showcaseData from "../data/showcaseData";

const CarouselPage = () => {
  const boxWidth = useBreakpointValue({
    base: "370px",       // On very small devices (like smartphones)
    sm: "480px",        // On small devices (like tablets)
    md: "650px",        // On medium-sized devices (like desktops)
    lg: "780px",      // On large devices
    xl: "780px"       // On very large devices (like large screens)
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
            <ShowcaseCard item={item} bg="slategray" shadow={false} />
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default CarouselPage;