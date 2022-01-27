import {
    Box,
    Container,
    Stack,
    Text,
    useColorMode,
    chakra
  } from '@chakra-ui/react';
import {FaMailBulk, FaBitcoin, FaEthereum, FaMonero } from 'react-icons/fa';
import FooterButton from './modal';

  
  export default function Footer() {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
      <Box
        mb={10}
        width="100%"
        display="flex"
        flexDirection="column"
        bg={colorMode==="light" ? "grey.100" : "grey.300"}
        color={colorMode==="light" ? 'gray.700': 'gray.200'}
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>Inquires and Tips!</Text>
          <Stack direction={'row'} spacing={6}>
            <FooterButton label={'BTC'} address="k34j34j3k43j43k34j34k" colorMode={colorMode}>
              <FaBitcoin />
            </FooterButton>
            <FooterButton label={'ETH'} address="k34j34j3k43j43k34j34k" colorMode={colorMode}>
              <FaEthereum />
            </FooterButton>
            <FooterButton label={'XMR'} address="k34j34j3k43j43k34j34k" colorMode={colorMode}>
              <FaMonero />
            </FooterButton>
            <a href={'mailto:jbaumgartner93@gmail.com'}>
              <chakra.button
                bg={colorMode==="light"? "lightgrey" : "whiteAlpha.100"}
                rounded={'full'}
                w={10}
                h={10}
                cursor={'pointer'}
                display={'inline-flex'}
                alignItems={'center'}
                justifyContent={'center'}
                transition={'background 0.3s ease'}
                >
                  <FaMailBulk />
                </chakra.button>
              </a>
          </Stack>
        </Container>
      </Box>
    );
  }
