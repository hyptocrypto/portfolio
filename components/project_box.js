import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";

export default function ProjectBox(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    

    return (
        <a href={props.url} target="_blank">
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
            <Box  
                p="5" 
                m="2" 
                h={260}
                w={200} 
                borderColor={"grey"} 
                borderWidth="1px" 
                borderRadius="20px" 
                boxShadow="10px" 
                opacity={1}
                bg={colorMode==="light"? "white": "#1a202c"}
                >
                <Center>
                        <Image borderRadius="md" src={props.img} maxH={130}/>
                </Center>
                <Flex>
                    <Text mt={3}>
                        {props.description}
                    </Text>
                </Flex>
            </Box>
        </motion.button>
        </a>
    )
};  
