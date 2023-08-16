import React from "react";
import {
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  Flex,
  Image,
} from "@chakra-ui/react";
import aboutImage from "../assets/images/aboutImage.png";

const About = () => {
  return (
    <Box
      bg="slategray"
      className="about"
      id="about"
      h="calc(100vh - 120px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex justifyContent="center" alignItems="center">
        <Box
          bg="white"
          w="30%"
          h="620px"
          p="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            textAlign="left"
          >
            <Heading
            fontFamily={"'DM Serif Display', sans-serif"}
            color="slategray"
            >Elijah Brereton</Heading>
            <Text fontWeight="bold" textAlign="center">
              Full-stack MERN developer | HTML, CSS, JavaScript
            </Text>
            <Text>
              I'm Eli, a full-stack developer specialising in the MERN software
              stack, which includes MongoDB, Express.js, React, and Node.js.
              With expertise in these technologies, I build robust and scalable
              web applications. I'm passionate about continuous learning and
              constantly strive to enhance my skills to provide the best
              possible service to my clients. 
              <br/>
              If you have any questions, project
              inquiries, or would like to get in touch, feel free to reach out
              to me through the contact form on my website. I believe that
              effective communication is key to successful collaborations, and I
              look forward to discussing how I can contribute to your project's
              success.
            </Text>
          </Flex>
        </Box>
        <Card>
          <Image h="620px" src={aboutImage} />
        </Card>
      </Flex>
    </Box>
  );
};

export default About;
