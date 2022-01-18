import React from "react";
import ReactDom from "react-dom";
import  ProjectBox  from "./project_box";
import NavMenu from "./nav";
import { ChakraProvider, Heading, VStack, HStack, ColorModeScript, useColorMode } from "@chakra-ui/react";
import { Box, Image, Flex, Badge, Text, IconButton, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Page = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        
        <VStack p={5}>
            <Heading
                mb="8"
                fontWeight="extrabold"
                size="2xl"
                bgGradient={colorMode==="light" ? "linear(to-b, blue.400, blue.800)" : "linear(to-b, blue.100, blue.700)"}
                bgClip="text"
                >
                Hi! Im Julian Baumgartner
            </Heading>

            {/* Spacing Box */}
            <Box height="3" ></Box>
            
                <Text>
                        Im a full-stack software developer based in the United States. I like to build web based technologies for the future.
                </Text>
                <Text>
                    Here are some things I have built and worked on.
                </Text>
            
            {/* Spacing Box */}
            <Box height="10" ></Box>
            
            <HStack>
                <ProjectBox 
                    url="https://www.github.com/SurfSightAI" 
                    img="/credentials.png"
                    description="Highly encrypted credentials manager running as native desktop app"
                />
                <ProjectBox 
                    url="https://www.github.com/SurfSightAI" 
                    img="/SurfSight.png"
                    description="SurfSight. Computer vision analytics for surfing."
                />
                <ProjectBox 
                    url="https://www.shuup.com" 
                    img="/shuup.png"
                    description="Bespoke e-commerce solutions."
                />
                <ProjectBox 
                    url="https://github.com/hyptocrypto/RPA_Deploy_Monitor" 
                    img="/RPA.png"
                    description="RPA (Remote Penetration testing Appliance) management platform"
                />
            </HStack>
            <Box height="10" ></Box>
            <Text></Text>

        </VStack>
    )
}
export default Page
