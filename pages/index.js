
import Page from "../components/page";
import NavMenu from "../components/nav";
import theme from "../components/theme";
import { ChakraProvider, ColorModeScript, useColorMode} from "@chakra-ui/react";
import '@fontsource/raleway/700.css'
import '@fontsource/open-sans/800.css'
import Footer from "../components/footer";
import ParticlesBackground from "../components/particles";
import { useEffect } from "react";

const App = () => {
    
    // Little hack to make sure the default color is dark
    function SetDarkMode(props) {
        const { colorMode, toggleColorMode } = useColorMode();
      
        useEffect(() => {
            if (! window.localStorage.getItem("chakra-ui-color-mode")) {
                window.localStorage.setItem("chakra-ui-color-mode", "light");
                toggleColorMode();
            };
        }, [colorMode]);
      
        return props.children;
      }
    
    return(
        <ChakraProvider theme={theme}>          
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <SetDarkMode>
            <ColorModeScript 
                useSystemColorMod="false"
                initialColorMode="dark"
                />
            
            {/* Inline styling to keep particles as background */}
            <div style={{position: "absolute", width: "100", height: "100", zIndex: -1}}>
                 <ParticlesBackground/>
            </div>
            
            <NavMenu/>
            <Page/>
            <Footer/>
            </SetDarkMode>
        </ChakraProvider>
        )
}
export default App


