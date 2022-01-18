import * as React from "react";
import Page from "../components/page";
import NavMenu from "../components/nav";
import { ChakraProvider, Heading, VStack, HStack, ColorModeScript, useColorMode } from "@chakra-ui/react";




const App = () => {
    return(
        <ChakraProvider>
            <ColorModeScript initialColorMode="dark"/>
            <NavMenu/>
            <Page/>
        </ChakraProvider>
        )
}
export default App
