import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  Flex,
  Text,
  Divider,
  Avatar,
  Heading,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useBreakpointValue,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import zweckLogo from "../assets/images/zweckLogo.png";
import eliLogo from "../assets/images/eliLogo.png";

import Sidebar from "./Sidebar";

const Header = () => {
  const location = useLocation();

  const [isFixed, setIsFixed] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [baseOpacity, setBaseOpacity] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const [isSmScreen] = useMediaQuery("(max-width: 900px)");

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsFixed(true);
      setIsShrunk(true);
    } else {
      setIsFixed(false);
      setIsShrunk(false);
    }
    if (window.scrollY < 120) {
      setBaseOpacity(true);
    } else {
      setBaseOpacity(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("Screen size changed:", isSmScreen ? "Small" : "Not Small");
  }, [isSmScreen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div>
      {isSmScreen ? (
        <>
          <Flex
            className={`header ${isFixed ? "fixed" : ""} ${
              isShrunk ? "shrunk" : ""
            }`}
            as="header"
            flexDir="row"
            top={0}
            left={0}
            width="100%"
            backgroundColor="white"
            color="white"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
            zIndex={11}
            opacity={
              (isFixed && !baseOpacity) || (!isFixed && baseOpacity) ? 1 : 0
            }
            transition="opacity 0.5s ease-in-out"
          >
            <Menu display="flex" flexDirection="column">
              <MenuButton
                visibility="hidden"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon boxSize="30px" />}
                variant="outline"
                boxSize="60px"
                ml="50px"
              />
            </Menu>
            {/* Logo */}
            <Image boxSize={isFixed ? "80px" : "120px"} src={eliLogo} />
            <IconButton
              aria-label="Options"
              icon={<HamburgerIcon boxSize="30px" />}
              variant="outline"
              boxSize="60px"
              ml="50px"
              onClick={toggleMenu}
            />
          </Flex>
          <Box
            mt="120px"
            position="absolute"
            top="0px" // Position it right below the header
            left={0}
            width="100%"
            backgroundColor="white"
            transform={`translateY(${isMenuOpen ? 0 : "-100%"})`} // Slide in effect
            transition="transform 2s" // Apply CSS transitions
            zIndex={10} // Ensure it's above the header
          >
            <Flex flexDir="column" alignItems="center">
              <Link
                to="/"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleScrollToTop();
                }}
              >
                <NavItem
                  navSize={isSmScreen}
                  title="HOME"
                  isActive={location.pathname === "/"}
                />
              </Link>
              <Link to="/showcase" onClick={() => {
                  setIsMenuOpen(false);
                  handleScrollToTop();
                }}>
                <NavItem
                  navSize={isSmScreen}
                  title="SHOWCASE"
                  isActive={location.pathname === "/showcase"}
                />
              </Link>
              <Link to="/about" onClick={() => {
                  setIsMenuOpen(false);
                  handleScrollToTop();
                }}>
                <NavItem
                  navSize={isSmScreen}
                  title="ABOUT"
                  isActive={location.pathname === "/about"}
                />
              </Link>
              <Link to="/contact" onClick={() => {
                  setIsMenuOpen(false);
                  handleScrollToTop();
                }}>
                <NavItem
                  navSize={isSmScreen}
                  title="CONTACT"
                  isActive={location.pathname === "/contact"}
                />
              </Link>
            </Flex>
          </Box>
        </>
      ) : (
        <>
          {isFixed && <div style={{ height: "120px" }}></div>}
          <Flex
            className={`header ${isFixed ? "fixed" : ""} ${
              isShrunk ? "shrunk" : ""
            }`}
            as="header"
            flexDir="row"
            top={0}
            left={0}
            width="100%"
            backgroundColor="white"
            color="white"
            justifyContent="space-evenly"
            height="120px"
            opacity={
              (isFixed && !baseOpacity) || (!isFixed && baseOpacity) ? 1 : 0
            }
            transition="opacity 0.5s ease-in-out"
          >
            <Image boxSize={isFixed ? "80px" : "120px"} src={eliLogo} />

            <Flex flexDir="row" justifyContent="center" alignItems="center">
              <Link to="/" onClick={() => handleScrollToTop()}>
                {" "}
                <NavItem
                  navSize={isSmScreen}
                  title="HOME"
                  isActive={location.pathname === "/"}
                />
              </Link>
              <Link to="/showcase" onClick={() => handleScrollToTop()}>
                {" "}
                <NavItem
                  navSize={isSmScreen}
                  title="SHOWCASE"
                  isActive={location.pathname === "/showcase"}
                />
              </Link>
              <Link to="/about" onClick={() => handleScrollToTop()}>
                {" "}
                <NavItem
                  navSize={isSmScreen}
                  title="ABOUT"
                  isActive={location.pathname === "/about"}
                />
              </Link>
              <Link to="/contact" onClick={() => handleScrollToTop()}>
                {" "}
                <NavItem
                  navSize={isSmScreen}
                  title="CONTACT"
                  isActive={location.pathname === "/contact"}
                />
              </Link>
            </Flex>
          </Flex>
        </>
      )}
    </div>
  );
};

export default Header;
