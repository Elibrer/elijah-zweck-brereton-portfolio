import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import "@fontsource/titillium-web"
import "@fontsource/titillium-web/900.css"
import "@fontsource/dm-serif-display"
import "@fontsource/libre-baskerville"
import "@fontsource/merriweather"
import "@fontsource/source-sans-pro"



const theme = extendTheme({
  fonts: {
    body: 'Times New Roman, sans-serif',
  },
})

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);