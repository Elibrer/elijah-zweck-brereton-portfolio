/* eslint-disable */

import React, { useEffect } from "react";
import {
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  useBreakpointValue,
  useMediaQuery,
  useQuery,
} from "@chakra-ui/react";
import aboutImage from "../assets/images/aboutImage.png";

const About = () => {
  const aboutWidth = useBreakpointValue({ base: "100%", md: "50%", sm: "25%" });
  const textSize = useBreakpointValue({
    base: ".8em",
    md: ".9em",
    sm: ".8em",
    lg: "1.1em",
    xl: "1.1em",
  });
  const boxSize = useBreakpointValue({
    base: "300px",
    md: "400px",
    sm: "300px",
    lg: "500px",
    xl: "500px",
  });
  const imageHeight = useBreakpointValue({
    base: "100%",
    md: "620px",
    sm: "620px",
    lg: "620px",
  });
  const smImageHeight = useBreakpointValue({
    base: "300px",
    sm: "300px",
    md: "500px",
  });

  const [isSmScreen] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    console.log("Screen size changed:", isSmScreen ? "SS" : "Not SS");
  }, [isSmScreen]);

  return (
    <div>
      {isSmScreen ? (
        <Box
          display="flex"
          flexDir={"column"}
          bg="slategray"
          className="about"
          id="about"
          alignItems="center"
          justifyContent="center"
        >
          <Card mt="40px">
            <Image
              h={smImageHeight}
              w={boxSize}
              src={aboutImage}
              //need image to stay same resolution, regardless of screen size
              objectFit={"cover"}
              objectPosition={"top"}
            />
          </Card>
          <Flex justifyContent="center" alignItems="center">
            <Box
              bg="white"
              w={boxSize}
              h="500px"
              p="20px"
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
                  textAlign={"center"}
                >
                  Elijah Brereton
                </Heading>
                <Text fontWeight="bold" textAlign="center">
                  Full-stack MERN developer | HTML, CSS, JavaScript
                </Text>
                <Text fontSize={textSize}>
                  I'm Eli, a full-stack developer specialising in the MERN
                  software stack, which includes MongoDB, Express.js, React, and
                  Node.js. With expertise in these technologies, I build robust
                  and scalable web applications. I'm passionate about continuous
                  learning and constantly strive to enhance my skills to provide
                  the best possible service to my clients.
                  <br />
                  If you have any questions, project inquiries, or would like to
                  get in touch, feel free to reach out to me through the contact
                  form on my website. I believe that effective communication is
                  key to successful collaborations, and I look forward to
                  discussing how I can contribute to your project's success!
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box
          bg="slategray"
          className="about"
          id="about"
          h="calc(100vh - 120px)"
          display="flex"
          flexDir={"row"}
          alignItems="center"
          justifyContent="center"
        >
          <Flex justifyContent="center" alignItems="center">
            <Box
              bg="white"
              w={boxSize}
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
                  textAlign={"center"}
                >
                  Elijah Brereton
                </Heading>
                <Text fontWeight="bold" textAlign="center">
                  Full-stack MERN developer | HTML, CSS, JavaScript
                </Text>
                <Text fontSize={textSize}>
                  I'm Eli, a full-stack developer specialising in the MERN
                  software stack, which includes MongoDB, Express.js, React, and
                  Node.js. With expertise in these technologies, I build robust
                  and scalable web applications. I'm passionate about continuous
                  learning and constantly strive to enhance my skills to provide
                  the best possible service to my clients.
                  <br />
                  If you have any questions, project inquiries, or would like to
                  get in touch, feel free to reach out to me through the contact
                  form on my website. I believe that effective communication is
                  key to successful collaborations, and I look forward to
                  discussing how I can contribute to your project's success.
                </Text>
              </Flex>
            </Box>
            <Card>
              <Image
                h={imageHeight}
                w={boxSize}
                src={aboutImage}
                //need image to stay same resolution, regardless of screen size
                objectFit={"cover"}
                objectPosition={"top"}
              />
            </Card>
          </Flex>
        </Box>
      )}
    </div>
  );
};

export default About;
