import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ProjectBox(props) {
    return (
        <a href={props.url} target="_blank">
        <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
        >
            <Box p="5" m="2" minH={233} maxW="200px" borderWidth="2px" borderRadius="10px" boxShadow="5px" >
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
