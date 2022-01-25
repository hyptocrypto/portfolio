import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";

const ProjectBox = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    

    return (
        <a href={props.url} target="_blank">
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
            <Box
                p="5" 
                m="2" 
                h={260}
                maxH={280}
                w={200}  
                borderWidth="1px" 
                borderRadius="20px" 
                boxShadow="md" 
                opacity={1}
                bg={colorMode==="light"? "white": "#1a202c"}
                >
                <Center>
                        <Image borderRadius="md" src={props.img} maxH={130}/>
                </Center>
                <Flex>
                    <Text mt={3} >
                        {props.description}
                    </Text>
                </Flex>
            </Box>
        </motion.button>
        </a>
    )
};  

export default ProjectBox
