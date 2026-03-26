import Section from "./section";
import { Heading, VStack, HStack, useColorMode, Container, useMediaQuery, Center, Tooltip } from "@chakra-ui/react";
import { Box, Image, Text } from "@chakra-ui/react";
import ProjectContainer from "./projects_container";
import { motion } from "framer-motion";
import { SiGo, SiPython, SiLinux, SiDocker } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";


const Page = () => {
    const { colorMode } = useColorMode();
    const [isMobile] = useMediaQuery("(max-width: 420px)");
    const [isSmall] = useMediaQuery("(max-width: 550px)");

    const heading = isMobile
        ? <div><div align="center">Julian</div><div align="center">Baumgartner</div></div>
        : isSmall ? "Julian Baumgartner" : "Hi, I'm Julian Baumgartner";

    return (
        <VStack p={5}>
            <Center>
                <Section delay={0.2}>
                    <Heading
                        paddingBottom={2}
                        fontWeight="extrabold"
                        size="2xl"
                        bgGradient={colorMode === "light" ? "linear(to-b, blue.400, blue.800)" : "linear(to-b, blue.100, blue.700)"}
                        bgClip="text"
                    >
                        {heading}
                    </Heading>
                </Section>
            </Center>

            <Section delay={0.2}>
                <Center>
                    <Image
                        src="/me.jpg"
                        maxH={200}
                        maxW={200}
                        borderRadius="full"
                        borderWidth={3}
                        borderStyle="solid"
                        mb={5}
                    />
                </Center>
                <HStack mb={5} justify="center" spacing={6}>
                    {[
                        { href: "https://golang.org/", icon: <SiGo size={40} color="#00ADD8" />, label: "Go" },
                        { href: "https://www.python.org/", icon: <SiPython size={40} color="#3776AB" />, label: "Python" },
                        { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <DiJavascript1 size={44} color="#F7DF1E" />, label: "JavaScript" },
                        { href: "https://www.linux.org/", icon: <SiLinux size={40} color={colorMode === "light" ? "#333" : "#FCC624"} />, label: "Linux" },
                        { href: "https://www.docker.com/", icon: <SiDocker size={40} color="#2CA5E0" />, label: "Docker" },
                    ].map(({ href, icon, label }) => (
                        <Tooltip key={label} label={label} hasArrow>
                            <a href={href} target="_blank" rel="noreferrer">
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={{ display: "flex" }}>
                                    {icon}
                                </motion.div>
                            </a>
                        </Tooltip>
                    ))}
                </HStack>
            </Section>

            <Container opacity={1} bg={colorMode === "light" ? "white" : "#1a202c"} borderRadius={10} boxShadow="md">
                <Section delay={0.4}>
                    <Heading size="md" as="u" mt={3} display="block">About</Heading>
                </Section>
                <Section delay={0.5}>
                    <Text ml={3} mb={5}>
                        Full-stack developer based in the United States. I build scalable APIs, robust data layers,
                        and clean user interfaces — with a strong preference for Go, Python, and Linux-native environments.
                        I&apos;ve contributed to open-source projects and delivered secure solutions for private clients across
                        web, desktop, and automation. Outside of work I surf, play golf, play piano, and tinker with cars.
                        Feel free to reach out with any inquiries.
                    </Text>
                </Section>
            </Container>

            <Section delay={0.7}>
                <ProjectContainer />
            </Section>
            <Box height="10" />
        </VStack>
    );
};

export default Page;
