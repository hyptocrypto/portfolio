import Section from "./section";
import { useState } from "react";
import { Heading, VStack, HStack, useColorMode, Container, useMediaQuery, Center, Button } from "@chakra-ui/react";



function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const PythonRepl = () => {
    const [showRepl, setshowRepl] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const render_repl = () => {
        return ( 
            <div>
            <Heading color={colorMode==="light"? "black": "white"}>Run code with shift+enter!</Heading>           
            <div>
                <py-repl id="my-repl" auto-generate="true">print("Hello world!")</py-repl>
            </div>
            </div>
        )

    }
    const python_button_handler = () => {
        setshowRepl(true)
    }
    const ReplButton = () => {
        return (
            <Button 
            color={colorMode==="light"? "black": "white"}
            bg={colorMode==="light"? "white": "#1a202c"} 
            onClick={python_button_handler} 
            size="md" 
            id="python-button">
            Want some Python?
            </Button>
        )
    };
    
    return (
        showRepl? (
            render_repl()
        ): (
            ReplButton()
        )
    )
};

export default PythonRepl
