import React from "react";
import { Box } from "@chakra-ui/react";


const PageNotFound = () => {
  return (
    <Box>
      <head>
        <link rel="stylesheet" href="/css/404.css" />
      </head>

      <main>
        <div class="container">
          <div class="row">
            <div class="align-self-center">
              <h1>404</h1>
              <h2>UH OH! You're lost.</h2>
              <p>
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <button class="btn green" id="home-btn">
                HOME
              </button>
            </div>
          </div>
        </div>
      </main>
    </Box>
  );
};

export default PageNotFound;