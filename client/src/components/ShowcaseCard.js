/* eslint-disable */

import React from "react";
import { Text, Flex, Box, Image, Card, Heading, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdLink } from "react-icons/md";
import githubIcon from "../assets/images/githubLogo.png";
import heyListen from "../assets/images/heyListen.png";

const ShowcaseCard = ({
  index,
  title,
  alt,
  description,
  image,
  github,
  deployedSite,
  item,
  bg,
  shadow,
  key,
}) => {
  console.log(
    "ShowcaseCard props: ",
    index,
    title,
    alt,
    description,
    image,
    github,
    deployedSite
  );
  
  const [isLgScreen] = useMediaQuery("(max-width: 992px)");

  const fBoxWidth = useBreakpointValue({
    base: "80%",       // On very small devices (like smartphones)
    sm: "60%",        // On small devices (like tablets)
    md: "45%",        // On medium-sized devices (like desktops)
    lg: "40%",      // On large devices
    xl: "40%"       // On very large devices (like large screens)
  });

  const fTextBoxWidth = useBreakpointValue({
    base: "90%",       // On very small devices (like smartphones)
    sm: "80%",        // On small devices (like tablets)
    md: "70%",        // On medium-sized devices (like desktops)
    lg: "60%",      // On large devices
    xl: "60%"       // On very large devices (like large screens)
  });

  const boxWidth = useBreakpointValue({
    base: "370px",       // On very small devices (like smartphones)
    sm: "480px",        // On small devices (like tablets)
    md: "650px",        // On medium-sized devices (like desktops)
    lg: "780px",      // On large devices
    xl: "780px"       // On very large devices (like large screens)
  });

  const boxHeight = useBreakpointValue({
    base: "193.5px",       // On very small devices (like smartphones)
    sm: "250px",          // On small devices (like tablets)
    md: "338px",          // On medium-sized devices (like desktops)
    lg: "405px",          // On large devices
    xl: "405px"           // On very large devices (like large screens)
});
const pageHeight = useBreakpointValue({
  base: "450px",       // On very small devices (like smartphones)
  sm: "500px",          // On small devices (like tablets)
  md: "520px",          // On medium-sized devices (like desktops)
  lg: "550px",          // On large devices
  xl: "550px"           // On very large devices (like large screens)
});

  return (
    <Box h={pageHeight} w={boxWidth}>
      <Box bg="black" borderRadius={20} h={boxHeight} w={boxWidth}>
        <Card bg="black" color="white" h={boxHeight} w={boxWidth} borderRadius={20}>
          <Image
            shadow={shadow ? "0px 0px 8px #111111" : "none"}
            borderRadius={20}
            src={item.image}
            alt="Background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              opacity: 1,
            }}
          />
        </Card>
      </Box>
      <Flex w="100%" justifyContent="space-evenly" flexDir={isLgScreen ? "column" : "row"}>
        <Box
          w={fTextBoxWidth}
          p="10px"
          color="white"
          textAlign="left"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="left"
          bg={bg}
        >
          <Heading
            textTransform="uppercase"
            fontWeight="800"
            fontSize="16px"
            m="0"
          >
            {item.title}
          </Heading>
          <Text fontSize="16px" m="0">
            {item.description}
          </Text>
        </Box>
        <Flex flexDir="row"
         justifyContent={item.deployed ? "center" : "flex-end"}
        alignItems="center" 
        w={fBoxWidth}>
          {item.deployed ? (
          <Box mr={isLgScreen ? "0px" : "10px"}>
            <Link
              to={item.deployedSite}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Box
                w="140px"
                color="white"
                bg={bg}
                border="1px solid #ffffff"
                borderRadius="999px"
                textAlign="center"
                p="13px 16px"
                fontSize="14px"
                fontWeight="500"
                lineHeight="13px"
                textDecoration="none"
                transition="background 0.7s ease-in-out, border 0.7s ease-in-out"
                _hover={{
                  bg: "#e74c5e",
                  borderColor: "#fff",
                  textDecoration: "none",
                }}
              >
                View Website
              </Box>
            </Link>
          </Box>) : null}
          <Box ml={isLgScreen ? "0px" : "10px"}>
            <Link to={item.github} rel="noopener noreferrer" target="_blank">
              <Box
                w="140px"
                color="white"
                bg={bg}
                border="1px solid #ffffff"
                borderRadius="999px"
                textAlign="center"
                p="13px 16px"
                fontSize="14px"
                fontWeight="500"
                lineHeight="13px"
                textDecoration="none"
                transition="background 0.7s ease-in-out, border 0.7s ease-in-out"
                _hover={{
                  bg: "#e74c5e",
                  borderColor: "#fff",
                  textDecoration: "none",
                }}
              >
                View GitHub
              </Box>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ShowcaseCard;
