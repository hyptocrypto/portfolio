import Section from "./section";
import { Heading, VStack, HStack, useColorMode, Container, useMediaQuery, Center, Button } from "@chakra-ui/react";
import { Box, Image, Text} from "@chakra-ui/react";
import ProjectContainer from "./projects_container";
import PythonRepl from "./python_repl";
import IconImage from "./image";


const Page = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    let [is_small] = useMediaQuery("(max-width: 550px)");
    const [isMobile] = useMediaQuery('(max-width: 420px)');
    
    let heading = () => {
        if (isMobile) {
            return (
                <div>
                    <div align="center">Julian</div>
                    <div align="center">Baumgartner</div>
                </div>
                    )
        } else {
            return is_small ? "Julian Baumgartner" : "Hi! I'm Julian Baumgartner"
        }
    };
    
    return (
        
        <VStack p={5} >
            <Center>
            <Section delay={.2}>
                <Heading
                    orientation="horizontal"
                    paddingBottom={2}
                    fontWeight="extrabold"
                    size="2xl"
                    bgGradient={colorMode==="light" ? "linear(to-b, blue.400, blue.800)" : "linear(to-b, blue.100, blue.700)"}
                    bgClip="text"
                    >
                    {heading()}
                </Heading>
            </Section>
            </Center>
            <Section delay={.2}>
                <Center>
                    <Image
                        src="/me.jpg"
                        maxH={200}
                        maxW={200}
                        borderRadius="full"
                        borderWidth={3}
                        borderStyle="solid"
                        mb={5}/>
                </Center>
                < HStack mb={5}>
                    <IconImage 
                        imglink={"https://www.python.org/"}
                        imgsrc={"https://img.shields.io/badge/Python-C0C0C0?style=for-the-badge&logo=python&logoColor=blue"}
                    />
                    <IconImage 
                        imglink="https://www.djangoproject.com/"
                        imgsrc="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green"
                    />
                    <IconImage 
                        imglink="https://reactjs.org/"
                        imgsrc="https://img.shields.io/badge/React-DBDBDB?style=for-the-badge&logo=react&logoColor=61DAFB"
                    />
                    <IconImage 
                        imglink="https://www.docker.com/"
                        imgsrc="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"
                />
                </HStack>
            </Section>

            <Container opacity={1} bg={colorMode==="light"? "white": "#1a202c"} borderRadius={10} boxShadow={"md"}>
                <HStack>                
                    <Section delay={0.4} >
                        <Heading size="md" as="u" >Bio</Heading>
                    </Section>
                </HStack>
                <HStack mb={5}>
                <Section delay={.5}>
                        <Text ml={3}>I am a full-stack developer based in the United States. I primarily work with Django, React, and Docker. Im passionate about Defi & Web3, enjoy scripting & automation, and strongly prefer a linux based environment. In my spare time I surf, play piano, and tinker with cars.</Text>
                </Section>
            </HStack>

            <HStack >                
                    <Section delay={0.6}>
                        <Heading size="md" as="u" >Work</Heading>
                    </Section>
                </HStack>
                <HStack mb={3}>
                <Section delay={.7}>
                        <Text ml={3}>I have developed desktop applications and web-scrapping bots. I have built scalable APIs, robust data layers, and sleek user interfaces. I contributed to open-source projects, and have built secure code for private clients. Below are a few things I have built and worked on. Please feel free to reach out for with inquiries.</Text>
                </Section>
            </HStack>

            </Container>

            <Section delay={.9}>
                <ProjectContainer/>
            </Section>
            <Box height="10" ></Box>
        </VStack>
        
    )
}
export default Page
