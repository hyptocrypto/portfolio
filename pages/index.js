
import Page from "../components/page";
import NavMenu from "../components/nav";
import theme from "../components/theme";
import { ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import '@fontsource/raleway/700.css'
import '@fontsource/open-sans/800.css'
import Footer from "../components/footer";


const App = () => {
    return(
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode="dark"/>
            <NavMenu/>
            <Page/>
            <Footer/>
        </ChakraProvider>
        )
}
export default App
