import React from "react";
import { Text, Flex, Box, Image, Card, Heading } from "@chakra-ui/react";
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
    <Box h="609px" w="780px">
      <Box bg="black" borderRadius={20} h="405px" w="780px">
        <Card bg="black" color="white" h="405px" w="780px" borderRadius={20}>
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
      <Flex w="100%" justifyContent="space-evenly">
        <Box
          w="60%"
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
        <Flex flexDir="row" justifyContent="center" alignItems="center" w="40%">
          <Box mr="10px">
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
          </Box>
          <Box ml="10px">
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
