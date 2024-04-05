/* eslint-disable */

import React, { useState, useEffect } from "react";
import instaLogo from "../assets/images/ig.png";
import linkedinLogo from "../assets/images/linkedin.png";
import resumeIcon from "../assets/images/resumeIcon.png";
import githubIcon from "../assets/images/githubLogo.png";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_USER, ADD_USER, DELETE_USER } from "../utils/mutations";
import { GET_USERS, GET_USER } from "../utils/queries";
import { Link } from "react-router-dom";
import {
  Heading,
  Flex,
  Text,
  Box,
  Image,
  Input,
  Select,
  Textarea,
  Checkbox,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";

const Contact = () => {
  //const { data: user } = useQuery(GET_USER);
  const { data: allUsers, refetch } = useQuery(GET_USERS);
  const [updateUser] = useMutation(UPDATE_USER);
  const [addUser] = useMutation(ADD_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryList, setCountryList] = useState("Australia");
  const [otherCountry, setOtherCountry] = useState("");
  const [country, setCountry] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [shareAgree, setShareAgree] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [thanksMessage, setThanksMessage] = useState("");
  const [fieldRequired, setFieldRequired] = useState("");
  const [submitForm, setSubmitForm] = useState("");
  const [submitPressed, setSubmitPressed] = useState(false);

  const [nameEl, setNameEl] = useState("Name");
  const [countryEl, setCountryEl] = useState("Country");
  const [hiddenEl, setHiddenEl] = useState("hidden");

  const [fullName, setFullName] = useState(firstName + " " + lastName);

  useEffect(() => {
    console.log("All users: ", allUsers);
  }, [allUsers]);

  const handleRefetch = () => {
    refetch();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setThanksMessage("");
    setSubmitPressed(true);

    const existingUser = allUsers.getUsers.find((user) => user.email === email);

    const newEnquiryArr = existingUser
      ? [...existingUser.enquiries, enquiry]
      : [enquiry];

    if (
      (shareAgree === true &&
        (!firstName || !lastName || !email || !enquiry)) ||
      (shareAgree === false && !enquiry)
    ) {
      setSubmitMessage("Please fill out all required* fields");
      return;
    }
    setSubmitMessage("");
    setFullName(firstName + " " + lastName);

    if (countryList === "Other") {
      if (otherCountry) {
        setCountry(otherCountry);
        setSubmitMessage("");
      } else {
        setSubmitMessage("Please enter a country.");
        return;
      }
    } else {
      setCountry(countryList);
      setSubmitMessage("");
    }

    if (shareAgree === true) {
      const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
      if (!emailRegex.test(email)) {
        setSubmitMessage("Please enter a valid email address.");
        return;
      }
      const phoneRegex = /^(?:\+61|0)[4578]([0-9]{8})$/;
      if (!phoneRegex.test(phone) && phone !== "") {
        setSubmitMessage(
          "Please enter a valid Australian phone number, otherwise leave phone blank."
        );
        return;
      }

      const userData = {
        id: existingUser ? existingUser._id : "",
        firstName: firstName,
        lastName: lastName,
        country: country,
        phoneNumber: phone,
        email: email,
        enquiries: newEnquiryArr,
      };

      if (existingUser) {
        console.log("User exists");
        const updatedUser = await updateUser({ variables: userData });
        console.log(updatedUser);
      } else {
        console.log("User doesn't exist");
        const addedUser = await addUser({
          variables: {
            firstName: firstName,
            lastName: lastName,
            country: country,
            phoneNumber: phone,
            email: email,
            enquiries: newEnquiryArr,
          },
        });
        console.log(addedUser);
      }

      setSubmitForm({
        Name: fullName,
        Email: email,
        Phone: phone,
        Country: country,
        Enquiry: enquiry,
      });
    } else {
      console.log("Egg");

      const userData = {
        id: existingUser ? existingUser._id : "",
        email: email,
        enquiries: newEnquiryArr,
      };
      if (existingUser) {
        console.log("User exists");
        const updatedUser = await updateUser({ variables: userData });
        console.log(updatedUser);
      } else {
        console.log("User doesn't exist");
        const addedUser = await addUser({
          variables: {
            firstName: "Anonymous",
            email: email,
            enquiries: newEnquiryArr,
          },
        });
        console.log(addedUser);
      }

      setSubmitForm({
        Name: "Anonymous",
        Enquiry: enquiry,
      });
    }

    handleRefetch();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCountryList("Australia");
    setOtherCountry("");
    setEnquiry("");
    setNameEl("Name");
    setCountryEl("Country");
    setShareAgree(false);
    document.getElementById("agreement").checked = false;
    setCountry("");
    setThanksMessage(
      "Thank you for your enquiry. I will get back to you as soon as possible."
    );
  };

  // useEffect(() => {
  //   console.log(submitForm);
  // }, [submitForm]);

  const checkOnBlur = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
      setFieldRequired("");
    }

    if (e.target.value === "") {
      switch (e.target.getAttribute("data-key")) {
        case "firstName":
          if (shareAgree === true) {
            setFieldRequired("firstName");
          }
          break;
        case "lastName":
          if (shareAgree === true) {
            setFieldRequired("lastName");
            console.log(fieldRequired);
          }
          break;
        case "email":
          setFieldRequired("email");
          break;
        case "enquiry":
          setFieldRequired("enquiry");
          break;
        default:
          setFieldRequired("");
      }
    }
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setNameEl("Name*");
      setCountryEl("Country*");
      setFieldRequired("");
      console.log(fieldRequired);
      setShareAgree(true);
    } else {
      setNameEl("Name");
      setCountryEl("Country");
      setFieldRequired("");

      setShareAgree(false);
    }
  };

  useEffect(() => {
    if (countryList === "Other") {
      setHiddenEl("unhidden");
      if (otherCountry) {
        setCountry(otherCountry);
        setSubmitMessage("");
      }
    } else {
      setCountry(countryList);
      setHiddenEl("hidden");
    }
  }, [countryList, otherCountry]);

  const handleOtherCountry = (e) => {
    setOtherCountry(e);
  };

  const handleCountrySelect = (e) => {
    setCountryList(e);
  };

  const [isLgScreen] = useMediaQuery("(min-width: 992px)");

  const headerTextSize = useBreakpointValue({
    base: "40px", // On very small devices (like smartphones)
    sm: "40px", // On small devices (like tablets)
    md: "60px", // On medium-sized devices (like desktops)
    lg: "60px", // On large devices
    xl: "60px", // On very large devices (like large screens)
  });

  const formWidth = useBreakpointValue({
    base: "90%", // On very small devices (like smartphones)
    sm: "90%", // On small devices (like tablets)
    md: "90%", // On medium-sized devices (like desktops)
    lg: "50%", // On large devices
    xl: "50%", // On very large devices (like large screens)
  });

  return (
    <Flex
      className="contact"
      alignItems="center"
      justifyContent="center"
      bg="var(--navy)"
      h={isLgScreen ? "calc(100vh - 120px)" : "auto"}
      overflow="hidden"
    >
      <Flex
              mt={isLgScreen ? "0px" : "70px"}

        className="ctcards container"
        flexDir={isLgScreen ? "row" : "column"}
        h="auto"
        justifyContent="space-around"
        alignItems={isLgScreen ? "start" : "center"}
      >
        <Box
          pl={isLgScreen ? "120px" : "0px"}
          id="contact-card-container"
          display="flex"
          flexDir={isLgScreen ? "row" : "column"}
          justifyContent="center"
          h="auto"
          w={formWidth}
        >
          <Box
            className="contact-card"
            w="100%"
            fontSize="20px"
            color="white"
            textAlign={isLgScreen ? "left" : "center"}
          >
            <Text
              textAlign={isLgScreen ? "left" : "center"}
              className="detailsHeader"
              w="100%"
              fontSize={headerTextSize}
              color="white"
              textShadow="1px 1px #ffffff"
              fontFamily="'DM Serif Display', sans-serif"
              fontWeight="400"
            >
              Contact Details
            </Text>
            <Text>Elijah Brereton</Text>
            <Text>
              Email :
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto: eli.brer@gmail.com"
              >
                {" "}
                eli.brer@gmail.com
              </a>
            </Text>
            <Text>
              Ph. :
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="tel:+61423047693"
              >
                {" "}
                0423 047 693
              </a>
            </Text>
            <Text
              display="flex"
              justifyContent={isLgScreen ? "left" : "center"}
            >
              GitHub:
              <Link
                rel="noopener noreferrer"
                target="_blank"
                to="https://github.com/elibrer"
              >
                <Image
                  src={githubIcon}
                  alt="GitHub icon"
                  h="30px"
                  w="30px"
                  margin="0px 5px"
                  color="var(--med)"
                />
              </Link>
            </Text>
            <Text
              display="flex"
              justifyContent={isLgScreen ? "left" : "center"}
            >
              LinkedIn:
              <Link
                rel="noopener noreferrer"
                target="_blank"
                to="https://www.linkedin.com/in/eli-brereton-172444164"
              >
                <Image
                  src={linkedinLogo}
                  alt="linkedIn logo"
                  h="30px"
                  w="30px"
                  margin="0px 5px"
                  color="var(--med)"
                />
              </Link>
            </Text>
            <Text
              display="flex"
              justifyContent={isLgScreen ? "left" : "center"}
            >
              Instagram:
              <Link
                rel="noopener noreferrer"
                target="_blank"
                to="https://instagram.com/mrzweck"
              >
                <Image
                  src={instaLogo}
                  alt="instagram logo"
                  h="30px"
                  w="30px"
                  margin="0px 5px"
                  color="var(--med)"
                />
              </Link>
            </Text>
            <Text
              display="flex"
              justifyContent={isLgScreen ? "left" : "center"}
            >
              Resume:
              <Link
                rel="noopener noreferrer"
                target="_blank"
                to="https://drive.google.com/file/d/1A-rxZoR2pG1X3vrO9iPxxoPNMulkghRN/view?usp=sharing"
              >
                <Image
                  src={resumeIcon}
                  alt="Resume icon"
                  h="30px"
                  w="30px"
                  margin="0px 5px"
                  color="var(--med)"
                />
              </Link>
            </Text>
          </Box>
        </Box>
        <Box
        mt={isLgScreen ? "0px" : "70px"}
          display="flex"
          position="relative"
          flexWrap="wrap"
          flexDir="column"
          justifyContent="space-evenly"
          w={formWidth}
          p="10px"
          borderRadius="5px"
        >
          <Heading
            fontSize="20px"
            color="white"
            textAlign="center"
            fontWeight="400"
          >
            Fill out the form and I'll get back to you ASAP!
          </Heading>
          <Box w="100%" p="10px 0px" m="0">
            <Heading
              fontSize="20px"
              color="white"
              margin="0 5px"
              fontWeight="400"
            >
              {nameEl}
            </Heading>
            <Flex
              className="cardInputs"
              flexGrow={1}
              flexWrap="wrap"
              position="relative"
              flexDir="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Box flexGrow={1} margin="0 2px">
                {/* <label htmlFor="first-name"></label> */}
                <Input
                  onBlur={(e) => checkOnBlur(e)}
                  data-key="firstName"
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  border=".4px solid #868686"
                  color="white"
                  disabled={!shareAgree}
                />
                <Heading
                  fontSize="15px"
                  fontWeight="200"
                  margin="0 5px"
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                >
                  First Name{" "}
                  <Text
                    m="0"
                    ml="20px"
                    fontSize="13px"
                    color="red"
                    display={fieldRequired === "firstName" ? "" : "none"}
                  >
                    Field required*
                  </Text>
                </Heading>
              </Box>
              <Box className="inputStyle" flexGrow={1} margin="0 2px">
                {/* <label htmlFor="last-name"></label> */}
                <Input
                  color="white"
                  onBlur={checkOnBlur}
                  data-key="lastName"
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  border=".4px solid #868686"
                  disabled={!shareAgree}
                />
                <Heading
                  fontSize="15px"
                  fontWeight="200"
                  margin="0 5px"
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                >
                  Last Name
                  <Text
                    m="0"
                    ml="20px"
                    fontSize="13px"
                    color="red"
                    display={fieldRequired === "lastName" ? "" : "none"}
                  >
                    Field required*
                  </Text>
                </Heading>
              </Box>
            </Flex>
          </Box>

          <Box p="10px 0" m="0" w="100%">
            <Heading
              fontSize="20px"
              color="white"
              margin="0 5px"
              fontWeight="400"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              Phone
              <Text
                m="0"
                ml="20px"
                fontSize="13px"
                color="red"
                display={fieldRequired === "phone" ? "" : "none"}
              >
                Field required*
              </Text>
            </Heading>
            <Box flexGrow={1} margin="0 2px">
              {/* <label htmlFor="phone"></label> */}
              <Input
                color="white"
                onBlur={checkOnBlur}
                data-key="phone"
                id="phone"
                type="text"
                name="phone"
                value={phone}
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                onChange={(e) => setPhone(e.target.value)}
                border=".4px solid #868686"
                disabled={!shareAgree}
              />
            </Box>
          </Box>
          <Box p="10px 0" m="0" w="100%">
            <Heading
              fontSize="20px"
              color="white"
              margin="0 5px"
              fontWeight="400"
            >
              {countryEl}
            </Heading>
            <Box flexGrow={1} margin="0 2px">
              {/* <label htmlFor="country"></label> */}
              <Select
                id="country"
                value={countryList}
                onChange={(e) => handleCountrySelect(e.target.value)}
                cursor="pointer"
                border=".4px solid #868686"
                color="white"
                disabled={!shareAgree}
              >
                <option defaultValue>{shareAgree ? "Australia" : ""}</option>
                <option>USA</option>
                <option>Great Britain</option>
                <option>Other</option>
              </Select>
              <Input
                color="white"
                onBlur={checkOnBlur}
                mt="2"
                display={hiddenEl === "hidden" ? "none" : ""}
                type="text"
                name="otherCountry"
                value={otherCountry}
                onChange={(e) => handleOtherCountry(e.target.value)}
                border=".4px solid #868686"
              />
            </Box>
          </Box>
          <Box p="10px 0" m="0" w="100%">
            <Heading
              fontSize="20px"
              color="white"
              margin="0 5px"
              fontWeight="400"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              E-mail*
              <Text
                m="0"
                ml="20px"
                fontSize="13px"
                color="red"
                display={fieldRequired === "email" ? "" : "none"}
              >
                Field required*
              </Text>
            </Heading>
            <Box flexGrow={1} margin="0 2px">
              {/* <label htmlFor="email"></label> */}
              <Input
                color="white"
                onBlur={checkOnBlur}
                data-key="email"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                border=".4px solid #868686"
              />
            </Box>
          </Box>
          <Box p="10px 0" m="0" w="100%">
            <Heading
              fontSize="20px"
              color="white"
              margin="0 5px"
              fontWeight="400"
              display="flex"
              flexDir="row"
              alignItems="center"
            >
              Enquiry*
              <Text
                m="0"
                ml="20px"
                fontSize="13px"
                color="red"
                display={fieldRequired === "enquiry" ? "" : "none"}
              >
                Field required*
              </Text>
            </Heading>
            <Box
              flexGrow={1}
              margin="0 2px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* <label htmlFor="enquiry"></label> */}
              <Textarea
                color="white"
                onBlur={checkOnBlur}
                data-key="enquiry"
                id="enquiry"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                border=".4px solid #868686"
              ></Textarea>
            </Box>
          </Box>
          <Text color="red" display={submitPressed ? "" : "none"}>
            {submitMessage}
          </Text>
          <Box className="inputTypes">
            <Box
              flexGrow={1}
              margin="0 2px"
              display="flex"
              flexDir="row"
              justifyContent="left"
              alignItems="center"
              mb="5px"
            >
              <Checkbox
                className="checkbox"
                id="agreement"
                type="checkbox"
                value={shareAgree}
                onChange={handleCheckboxChange}
                border=".4px solid #868686"
              />
              {/* <label htmlFor="agreement" className="align-items-center"> */}
              <Text m="0 5px" color="white">
                I agree to share my contact details with ZweckDev
              </Text>
              {/* </label> */}
            </Box>
          </Box>
          <Box className="inputTypes">
            <Box flexGrow={1} margin="0 2px">
              <Input
                w="100%"
                color="var(--white)"
                bg="slategray"
                border="none"
                borderRadius="4px"
                cursor="pointer"
                transition="all 0.5s ease-in-out"
                _hover={{ bg: "var(--coral)" }}
                type="submit"
                value="Submit"
                onClick={handleSubmit}
              />
            </Box>
            <Text id="thanksMessage">{thanksMessage}</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
