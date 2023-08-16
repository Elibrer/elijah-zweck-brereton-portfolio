import React, { useEffect, useState } from "react";
import { Flex, Text, Link, useBreakpointValue } from "@chakra-ui/react";

const Footer = () => {
  const footerWidth = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: "100%",
  });

  const [path, setPath] = useState(window.location.pathname);
  const [bgColor, setBgColor] = useState("slategray");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    setPath(window.location.pathname);

    switch (path) {
      case "/":
        setBgColor("slategray");
        break;
      case "/about":
        setBgColor("var(--navy)");
        break;
      case "/contact":
        setBgColor("var(--navy)");
        break;
      case "/showcase":
        setBgColor("var(--navy)");
        break;
      case "/resume":
        setBgColor("var(--navy)");
        break;
      default:
        setBgColor("slategray");
        break;
    }
  });

  return (
    <Flex
      as="footer"
      position="relative"
      bottom={0}
      left={0}
      width={footerWidth}
      bg={bgColor}
      color={textColor}
      textAlign="center"
      padding="1.5rem"
      justifyContent="center"
    >
      <Text alignItems="center" m="0" p="0">
        © 2023 |{" "}
        <Link href="https://github.com/Elibrer" fontWeight="bold" isExternal>
          Elijah 'Zweck' Brereton
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
