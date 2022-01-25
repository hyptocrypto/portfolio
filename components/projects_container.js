import { Flex, HStack, VStack, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import ProjectBox from "./project_box";




// The ProjectContainer manages rendering the layout the project boxes based on device size
const ProjectContainer = (props) => {
    const [isSmall] = useMediaQuery('(max-width: 900px)');
    const [isVerySmall] = useMediaQuery('(max-width: 450px)');

    if (isVerySmall === true) {
        return (
                <>
                    <div>
                        <ProjectBox 
                            url="https://www.github.com/SurfSightAI" 
                            img="/lock_icon.png"
                            description="Encrypted credentials manager app"
                        />
                    </div>
                    <div>
                        <ProjectBox 
                            url="https://www.github.com/SurfSightAI" 
                            img="/SurfSight.png"
                            description="SurfSight. Computer vision analytics system for surfing and costal analysis."
                        />
                    </div>
                    <div>
                        <ProjectBox 
                            url="https://www.shuup.com" 
                            img="/shuup.png"
                            description="Bespoke e-commerce solutions."
                        />
                    </div>
                    <div>
                        <ProjectBox 
                            url="https://github.com/hyptocrypto/RPA_Deploy_Monitor" 
                            img="/RPA.png"
                            description="RPA (Remote Penetration testing Appliance) management platform"
                        /> 
                    </div>
                </>
        );        
    } else if (isSmall === true) {
        return (
            <VStack >
            <Flex>
                <HStack>
                <ProjectBox 
                    url="https://www.github.com/SurfSightAI" 
                    img="/lock_icon.png"
                    description="Encrypted credentials manager app"
                />
                <ProjectBox 
                    url="https://www.github.com/SurfSightAI" 
                    img="/SurfSight.png"
                    description="SurfSight. Computer vision analytics system for surfing and costal analysis."
                />
                </HStack>
                </Flex>
                <Flex>
                <HStack>
                <ProjectBox 
                    url="https://www.shuup.com" 
                    img="/shuup.png"
                    description="Bespoke e-commerce solutions."
                />
                <ProjectBox 
                    url="https://github.com/hyptocrypto/RPA_Deploy_Monitor" 
                    img="/RPA.png"
                    description="RPA (Remote Penetration testing Appliance) management platform"
                />
            </HStack>
            </Flex>
            </VStack>

        );
    } else {
        return (
            <Flex>
            <HStack>
                <ProjectBox 
                    url="https://www.github.com/hyptocrypto/LockIn" 
                    img="/lock_icon.png"
                    description="Encrypted credentials manager app."
                />
                <ProjectBox 
                    url="https://www.github.com/SurfSightAI" 
                    img="/SurfSight.png"
                    description="SurfSight. Computer vision analytics system for surfing and costal analysis."
                />
                <ProjectBox 
                    url="https://www.shuup.com" 
                    img="/shuup.png"
                    description="Bespoke e-commerce solutions."
                />
                <ProjectBox 
                    url="https://github.com/hyptocrypto/RPA_Deploy_Monitor" 
                    img="/RPA.png"
                    description="RPA (Remote Penetration testing Appliance) management platform"
                />
            </HStack>
        </Flex>
        );
    }

};

export default ProjectContainer
