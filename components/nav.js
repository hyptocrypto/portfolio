import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons';
import { FaSun, FaMoon } from "react-icons/fa";


export default function NavMenu() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={colorMode==="light" ? 'gray.500': 'gray.900'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
          <IconButton 
                icon={colorMode==="light"? <FaMoon/> : <FaSun/> } 
                isRound="true" 
                color={colorMode==="light"? "black" : "white" }
                size="lg" 
                alignSelf={"flex-end"} 
                onClick={ toggleColorMode } 
            />
          </HStack>
          <Flex alignItems={'center'}>
            <Menu bg="black">
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <HamburgerIcon
                    size="lg"
                    color={colorMode==="light" ? "black": "grey.100"}
                />
              </MenuButton>
              <MenuList>
                <a href='mailto:jbaumgartner93@gmail.com'>
                <MenuItem>Contact</MenuItem>
                </a>
                <MenuDivider />
                <a href='https://www.github.com/hyptocrypto/'>
                <MenuItem>Github</MenuItem>
                </a>
                <MenuDivider />
                <a href='https://www.linkedin.com/in/julian-baumgartner-ab3834a0/'>
                <MenuItem>LinkedIn</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
