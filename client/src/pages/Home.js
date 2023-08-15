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
import banner from "../assets/images/4.png";
import About from "./About";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Carousel from "../components/Carousel";

const Home = () => {
  const [data, setData] = useState([]);
  const meRef = useRef(null);
  const featuredRef = useRef(null);

  const scrollToMe = () => {
    meRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToFeatured = () => {
    featuredRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
          <Flex
            className="name-animation" // Add the animation class here
            align="center"
          >
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
          <Icon _hover={{ cursor: "pointer" }} boxSize="70px">
            <BsArrowDownCircleFill onClick={scrollToMe} />
          </Icon>
        </Box>
      </Box>
      <Card
        p="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        ref={meRef}
        h="100vh"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          w="70%"
        >
          <Heading
            pl="3px"
            fontFamily="'DM Serif Display', sans-serif"
            fontSize="45px"
            fontWeight="400"
            textShadow="2px 2px 2px #ffffff"
            color="slategray"
          >
            Hey, I'm Elijah.
          </Heading>
          <Text pl="3px">
            Full stack MERN developer | HTML • CSS • JavaScript
          </Text>
          <Text pl="3px" fontSize="20px">
            I specialise in the MERN software stack, which includes MongoDB,
            Express.js, React, and Node.js. I can design and build functional
            and responsive websites and web applications for your business or
            personal use. I can also provide ongoing support and maintenance for
            your existing website or application.
            <br />
            <br />
            Contact me if you have any questions, project inquiries, or would
            like to get in touch.
            <br />
          </Text>
          <Icon color="slategray" _hover={{ cursor: "pointer" }} boxSize="70px">
            <BsArrowDownCircleFill onClick={scrollToFeatured} />
          </Icon>
        </Flex>
      </Card>
      <Flex
      ref={featuredRef}
        h="100vh"
        bg="slategray"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
        h="100px"
          fontSize="60px"
          color="white"
          mb="80px"
          fontFamily={'sans-serif'}
          fontWeight="400"
        >
          FEATURED PROJECTS
        </Heading>
        <Carousel />
        <Heading
        visibility="hidden"
        h="100px"
          fontSize="50px"
          color="white"
          mb="80px"
          fontFamily={'sans-serif'}
          fontWeight="400"
        ></Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
