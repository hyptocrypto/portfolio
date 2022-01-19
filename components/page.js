import React from "react";
import Section from "./section";
import { Heading, VStack, HStack, useColorMode, Container, useMediaQuery } from "@chakra-ui/react";
import { Box, Image, Text} from "@chakra-ui/react";
import ProjectContainer from "./projects_container";


const Page = () => {
    const isSmallerThan700 = useMediaQuery('(max-width: 800px)')
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <VStack p={5} >
            <Section delay={.2}>
                <Heading
                    paddingBottom={2}
                    fontWeight="extrabold"
                    size="2xl"
                    bgGradient={colorMode==="light" ? "linear(to-b, blue.400, blue.800)" : "linear(to-b, blue.100, blue.700)"}
                    bgClip="text"
                    >
                    Hi! Im Julian Baumgartner
                </Heading>
            </Section>
            <Section delay={.2}>
            <Image
                src="/me.jpg"
                maxH={200}
                maxW={200}
                borderRadius="full"
                borderWidth={3}
                borderStyle="solid"

            />
            </Section>

            <Container>
                <HStack>                
                    <Section delay={0.4} >
                        <Heading size="md" as="u" >Bio</Heading>
                    </Section>
                </HStack>
                <HStack mb={10}>
                <Section delay={.5}>
                        <Text ml={3}>I am a full-stack developer based in the United States. I primarily work with Django, React, and Docker. Im passionate about Defi & Web3, enjoy scripting & automation, and strongly prefer a linux based environment. In my spare time I surf, play piano, and tinker with cars.</Text>
                </Section>
            </HStack>

            <HStack >                
                    <Section delay={0.6}>
                        <Heading size="md" as="u" >Work</Heading>
                    </Section>
                </HStack>
                <HStack mb={10}>
                <Section delay={.7}>
                        <Text ml={3}>Below are a few things I have build and worked on. I have built desktop applications and web-scrapping systems exposing data via restful APIs. I have contributed to open-source projects, and built secure code for private clients. Please feel free to reach out for with inquiries.</Text>
                </Section>
            </HStack>

            </Container>

            <Section delay={.9}>
                <ProjectContainer isSmallerThan700={isSmallerThan700}/>
            </Section>
            <Box height="10" ></Box>
            
        </VStack>
        
    )
}
export default Page
