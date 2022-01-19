import { Flex, Container, HStack, VStack } from "@chakra-ui/react";
import ProjectBox from "./project_box";


const ProjectContainer = (isSmallerThan700) => {
    let isSmall = Object.values(isSmallerThan700)[0][0]
    if (isSmall) {
        return (
            <VStack>
            <Flex>
                <HStack>
                <ProjectBox 
                    url="https://www.github.com/SurfSightAI" 
                    img="/credentials.png"
                    description="Encrypted credentials manager running as native desktop app"
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
                    url="https://www.github.com/SurfSightAI" 
                    img="/credentials.png"
                    description="Encrypted credentials manager running as native desktop app"
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
