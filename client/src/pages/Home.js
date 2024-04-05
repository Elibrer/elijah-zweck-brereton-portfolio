/* eslint-disable */

import React, { useRef, useState } from "react";
import "./Home.css";
import {
  Flex,
  Image,
  Box,
  Card,
  CardBody,
  Text,
  Heading,
  Icon,
  Container,
  Button,
  VStack,
  HStack,
  Tag,
  useBreakpointValue,
  useMediaQuery,
  useQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import profileImage from "../assets/images/profile-1.png";
import eliSmall from "../assets/images/eliSmall.JPG";
import banner from "../assets/images/4.png";
import About from "./About";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Carousel from "../components/Carousel";

const Home = () => {
  const [data, setData] = useState([]);
  const meRef = useRef(null);
  const featuredRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const featuredHeadingSize = useBreakpointValue({
    base: "30px",
    sm: "40px",
    md: "50px",
    lg: "60px",
    xl: "60px",
  });

  const headingSize = useBreakpointValue({
    base: "40px",
    sm: "50px",
    md: "60px",
    lg: "80px",
    xl: "80px",
  });

  const textSize = useBreakpointValue({
    base: "15px",
    sm: "20px",
    md: "25px",
    lg: "30px",
    xl: "30px",
  });

  const meTextSize = useBreakpointValue({
    base: "12px",
    sm: "15px",
    md: "18px",
    lg: "20px",
    xl: "20px",
  });

  const aboutTextSize = useBreakpointValue({
    base: "10px",
    sm: "14px",
    md: "17px",
    lg: "20px",
    xl: "20px",
  });

  const boxSize = useBreakpointValue({
    base: "50px",
    sm: "55px",
    md: "60px",
    lg: "70px",
    xl: "70px",
  });

  const pageHeight = useBreakpointValue({
    base: "100vh",
    sm: "100vh",
    md: "100vh",
    lg: "100vh",
    xl: "100vh",
  });

  const aboutPageHeight = useBreakpointValue({
    base: "auto", // On very small devices (like smartphones)
    sm: "auto", // On small devices (like tablets)
    md: "auto", // On medium-sized devices (like desktops)
    lg: "100vh", // On large devices
    xl: "100vh", // On very large devices (like large screens)
  });

  const imgWidth = useBreakpointValue({
    base: "200px", // On very small devices (like smartphones)
    sm: "260px", // On small devices (like tablets)
    md: "400px", // On medium-sized devices (like desktops)
    lg: "280px", // On large devices
    xl: "280px", // On very large devices (like large screens)
  });

  const imgHeight = useBreakpointValue({
    base: "300px", // On very small devices (like smartphones)
    sm: "400px", // On small devices (like tablets)
    md: "600px", // On medium-sized devices (like desktops)
    lg: "425px", // On large devices
    xl: "425px", // On very large devices (like large screens)
  });

  const [isLgScreen] = useMediaQuery("(max-width: 992px)");

  const [isSmScreen] = useMediaQuery("(max-width: 768px)");

  const [isExSmScreen] = useMediaQuery("(max-width: 480px)");


  const scrollToMe = () => {
    const yOffset = 0;
    const targetPosition =
      meRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const scrollToFeatured = () => {
    const yOffset = 0;
    const targetPosition =
      featuredRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <Flex flexDir="column">
      <Box
        h="calc(100vh - 80px)"
        backgroundImage={banner}
        backgroundSize="cover"
      >
        <Box
          position="relative"
          top="40%"
          textAlign="center"
          color="slategray"
          textShadow="1px 1px #ffffff"
        >
          <Flex className="name-animation" align="center">
            <Heading
              as="span"
              px={isSmScreen ? "5px" : "10px"}
              fontFamily="'DM Serif Display', sans-serif"
              fontSize={headingSize}
              fontWeight="400"
            >
              Elijah
            </Heading>
            <Heading
              as="span"
              px={isSmScreen ? "5px" : "10px"}
              fontFamily="'DM Serif Display', sans-serif"
              fontSize={headingSize}
              fontWeight="400"
            >
              Brereton
            </Heading>
          </Flex>
          <Text
            pl="3px"
            fontFamily="'DM Serif Display', sans-serif"
            fontSize={textSize}
            fontWeight="100"
          >
            Full stack development
          </Text>
          <Icon
            color="slategray"
            transition="color 0.8s"
            _hover={{ cursor: "pointer", color: "#adb6c0" }}
            boxSize={boxSize}
          >
            <BsArrowDownCircleFill onClick={scrollToMe} />
          </Icon>
        </Box>
      </Box>
      <Box
        px={isSmScreen ? "0px" : "50px"}
        py="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        ref={meRef}
        h={aboutPageHeight}
        bg="slategray"
        className="FUCKEUEYEYE"
        m="0"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          w={isSmScreen ? "80%" : "70%"}
          color="white"
          
        >
          <Heading
            pl="3px"
            fontFamily="'DM Serif Display', sans-serif"
            fontSize={headingSize}
            fontWeight="400"
            textShadow="2px 2px 2px slategray"
            color="white"
          >
            Hey, I'm Elijah.
          </Heading>
          <Text pl="3px" fontSize={meTextSize}>
            Full stack MERN developer | HTML • CSS • JavaScript
          </Text>
          <Flex justifyContent="center" flexDir={isLgScreen ? "column" : "row"}>
            <Flex
              w={isLgScreen ? "100%" : "34%"}
              justifyContent="center"
              alignItems="center"
              flexDir="column"
            >
              <Text
                pl={isLgScreen ? "0px" : "3px"}
                fontSize={aboutTextSize}
                textAlign={isLgScreen ? "center" : "right"}
              >
                I specialise in the MERN software stack, which includes MongoDB,
                Express.js, React, and Node.js. I can design and build
                functional and responsive websites and web applications for your
                business or personal use.
              </Text>
              <Box ml={isLgScreen ? "0px" : "10px"} mb="20px">
                <Link
                  to="/about"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollToTop();
                  }}
                >
                  <Box
                    w="140px"
                    color="white"
                    border="1px solid #ffffff"
                    borderRadius="999px"
                    textAlign="center"
                    p="13px 16px"
                    fontSize="14px"
                    fontWeight="500"
                    lineHeight="13px"
                    textDecoration="none"
                    transition="background 0.3s ease-in-out, border 0.7s ease-in-out"
                    _hover={{
                      bg: "#e74c5e",
                      borderColor: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    About Me
                  </Box>
                </Link>
              </Box>
            </Flex>
            <Flex justifyContent="center" w={isLgScreen ? "100%" : "340px"}>
              <Image
                src={eliSmall}
                w={imgWidth}
                h={imgHeight}
                borderRadius={200}
                objectFit="cover"
                objectPosition={isExSmScreen ? "-70px" : "-100px"}
                mb="30px"

              ></Image>
            </Flex>
            <Flex
              w={isLgScreen ? "100%" : "34%"}
              justifyContent="center"
              alignItems="center"
              flexDir="column"
            >
              <Text
                pl={isLgScreen ? "0px" : "3px"}
                fontSize={aboutTextSize}
                textAlign={isLgScreen ? "center" : "left"}
              >
                I can also provide ongoing support and maintenance for your
                existing website or application. Contact me if you have any
                questions, project inquiries, or would like to get in touch.
              </Text>
              <Box ml={isLgScreen ? "0px" : "10px"}>
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollToTop();
                  }}
                >
                  <Box
                    w="140px"
                    color="white"
                    border="1px solid #ffffff"
                    borderRadius="999px"
                    textAlign="center"
                    p="13px 16px"
                    fontSize="14px"
                    fontWeight="500"
                    lineHeight="13px"
                    textDecoration="none"
                    transition="background 0.3s ease-in-out, border 0.7s ease-in-out"
                    _hover={{
                      bg: "#e74c5e",
                      borderColor: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    Contact Me
                  </Box>
                </Link>
              </Box>
            </Flex>
          </Flex>
          <Icon           
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#869aad"
            transition="color 0.8s"
            _hover={{ cursor: "pointer", color: "#adb6c0" }}
            boxSize={boxSize}
            mt="30px"
          >
            <BsArrowDownCircleFill
              onClick={scrollToFeatured}
            />
          </Icon>
        </Flex>
      </Box>
      <Flex
        ref={featuredRef}
        h={pageHeight}
        pb="50px"
        bg="slategray"
        flexDir="column"
        alignItems="center"
      >
        <Heading
          h="auto"
          fontSize={featuredHeadingSize}
          color="white"
          mt="110px"
          mb="80px"
          fontFamily={"sans-serif"}
          fontWeight="300"
          pl="3px"
        >
          FEATURED PROJECTS
        </Heading>
        <Carousel />
        <Box py="400px" />
      </Flex>
    </Flex>
  );
};

export default Home;
