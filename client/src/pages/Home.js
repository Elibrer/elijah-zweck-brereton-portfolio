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
} from "@chakra-ui/react";
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

  const scrollToMe = () => {
    const yOffset = -80;
    const targetPosition =
      meRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const scrollToFeatured = () => {
    const yOffset = -80;
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
        h="calc(100vh - 120px)"
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
              px="10px"
              fontFamily="'DM Serif Display', sans-serif"
              fontSize="80px"
              fontWeight="400"
            >
              Elijah
            </Heading>
            <Heading
              as="span"
              px="10px"
              fontFamily="'DM Serif Display', sans-serif"
              fontSize="80px"
              fontWeight="400"
            >
              Brereton
            </Heading>
          </Flex>
          <Text
            pl="3px"
            fontFamily="'DM Serif Display', sans-serif"
            fontSize="30px"
            fontWeight="100"
          >
            Full stack development
          </Text>
          <Icon
            color="slategray"
            transition="color 0.8s"
            _hover={{ cursor: "pointer", color: "#adb6c0" }}
            boxSize="70px"
          >
            <BsArrowDownCircleFill onClick={scrollToMe} />
          </Icon>
        </Box>
      </Box>
      <Box
        p="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        ref={meRef}
        h="calc(70vh)"
        bg="slategray"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          w="70%"
          color="white"
        >
          <Heading
            pl="3px"
            fontFamily="'DM Serif Display', sans-serif"
            fontSize="45px"
            fontWeight="400"
            textShadow="2px 2px 2px slategray"
            color="white"
          >
            Hey, I'm Elijah.
          </Heading>
          <Text pl="3px">
            Full stack MERN developer | HTML • CSS • JavaScript
          </Text>
          <Flex justifyContent="center">
            <Flex w="34%" justifyContent="center" alignItems="center">
              <Text pl="3px" fontSize="20px" textAlign="right">
                I specialise in the MERN software stack, which includes MongoDB,
                Express.js, React, and Node.js. I can design and build
                functional and responsive websites and web applications for your
                business or personal use.
              </Text>
            </Flex>
            <Flex justifyContent="center" w="340px">
              <Image
                src={eliSmall}
                w="300px"
                h="300px"
                borderRadius={100}
              ></Image>
            </Flex>
            <Flex w="34%" justifyContent="center" alignItems="center">
              <Text pl="3px" fontSize="20px" textAlign="left">
                I can also provide ongoing support and maintenance for your
                existing website or application.
                <br />
                Contact me if you have any questions, project inquiries, or
                would like to get in touch.
              </Text>
            </Flex>
          </Flex>
          <Icon
            color="slategray"
            transition="color 0.8s"
            _hover={{ cursor: "pointer", color: "#adb6c0" }}
            boxSize="70px"
          >
            <BsArrowDownCircleFill onClick={scrollToFeatured} />
          </Icon>
        </Flex>
      </Box>
      <Flex
        ref={featuredRef}
        h="calc(70vh)"
        pb="50px"
        bg="slategray"
        flexDir="column"
        alignItems="center"
      >
        <Heading
          h="auto"
          fontSize="60px"
          color="white"
          mb="80px"
          fontFamily={"sans-serif"}
          fontWeight="300"
          pl="3px"
        >
          FEATURED PROJECTS
        </Heading>
        <Carousel />
        <Box py="400px"/>
      </Flex>
    </Flex>
  );
};

export default Home;
