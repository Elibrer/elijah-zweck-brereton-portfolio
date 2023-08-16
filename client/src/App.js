// This is the main file for the portfolio website. It is the first file that is run when the website is loaded.
import React, { useEffect } from "react";
import "./App.css";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { useLocation, Route, Routes } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Showcase from "./pages/Showcase";
import Footer from "./components/Footer";
import PageNotFound from "./pages/404";
import Header from "./components/Header";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("location changed to " + location.pathname);
  }, [location]);
  return (
    <ApolloProvider client={client}>
      <div>
        <ChakraProvider>
          <Flex flexDirection="column">
            <Header />
            <Box flex="1" zIndex="1">
              <Routes>
                <Route path="*" element={<PageNotFound to="/404" />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/showcase" element={<Showcase />} />
              </Routes>
            </Box>
          </Flex>
          <Footer position="sticky" bottom={0} />
        </ChakraProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
