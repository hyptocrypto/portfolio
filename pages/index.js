
import Page from "../components/page";
import NavMenu from "../components/nav";
import theme from "../components/theme";
import { ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import '@fontsource/raleway/700.css'
import '@fontsource/open-sans/800.css'
import Footer from "../components/footer";
import ParticlesBackground from "../components/particles";



const App = () => {
    return(
        <ChakraProvider theme={theme}>            
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <ColorModeScript 
                useSystemColorMode="false"
                initialColorMode="dark"
                />
            
            {/* Inline styling to keep particles as background */}
            <div style={{position: "absolute", width: "100", height: "100", zIndex: -1}}>
                 <ParticlesBackground/>
            </div>
            
            <NavMenu/>
            <Page/>
            <Footer/>
        </ChakraProvider>
        )
}
export default App


