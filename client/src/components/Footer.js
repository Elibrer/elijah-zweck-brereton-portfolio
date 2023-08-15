import React from 'react';
import { Flex, Text, Link, useBreakpointValue } from '@chakra-ui/react';

const Footer = () => {
  const footerWidth = useBreakpointValue({ base: '100%', md: '100%', lg: '100%' });

  return (
    <Flex
      as="footer"
      position="relative"
      bottom={0}
      left={0}
      width={footerWidth}
      backgroundColor="white"
      color="#22252C"
      textAlign="center"
      padding="1.5rem"
      justifyContent="center"
    >
      <Text alignItems="center">
          © 2023 |{' '}
          <Link href="https://github.com/Elibrer" fontWeight="bold" color="#22252C" isExternal>
            Elijah 'Zweck' Brereton
          </Link>
      </Text>
    </Flex>
  );
};

export default Footer;