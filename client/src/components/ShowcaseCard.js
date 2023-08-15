import React from "react";
import { Text, Flex, Box, Image, Card } from "@chakra-ui/react";
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

  return (
    <Box
      position="relative"
      height="700px"
      width="700px"
      border="1px solid var(--light)"
      _hover={{
        "& .showcase-image": {
          opacity: 0.1,
        },
        "& .inner-box": {
          opacity: 1,
        },
      }}
      m="10px"
    >
      <Flex
        bg="black"
        width="97%"
        height="97%"
        m="10px"
      >
        <Image
          src={image}
          position="relative"
          objectFit="cover"
          objectPosition="center"
          w="100%"
          h="100%"
          opacity="1"
          transition="opacity 0.5s linear"
          alt={alt}
          className="showcase-image"
        />
        <Box
          className="inner-box"
          display="flex"
          flexDirection="column"
          textAlign="center"
          w="80%"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          opacity="0"
          transition="opacity 0.5s linear"
        >
          <Link rel="noopener noreferrer" target="_blank" to={deployedSite}>
            <Text fontSize="60px" color="white">
              {" "}
              {title}
            </Text>
          </Link>
          
            <Text color="white" textAlign="center" fontSize="1.5rem">
              {description}
            </Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            mt="4px"
          >
            <Text textAlign="center" fontSize="30px" color="white">
              Link to deployed application:
            </Text>
            <Link rel="noopener noreferrer" target="_blank" to={deployedSite}>
              <MdLink
                size="100px"
                h="100px"
                w="100px"
                p="0"
                m="0"
                color="white"
              />
            </Link>
          </Box>
          <Box display="flex"
          justifyContent="center"
            alignItems="center"
          >
            <Text textAlign="center" fontSize="30px" color="white">
              GitHub:
            </Text>
            <Link rel="noopener noreferrer" target="_blank" to={github}>
              <Image
                h="100px"
                w="100px"
                p="0"
                m="0"
                src={githubIcon}
                alt="Github icon"
              />
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ShowcaseCard;
