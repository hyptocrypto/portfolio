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
                            url="https://www.github.com/hyptocrypto/LockIn" 
                            img="/lock_icon.png"
                            description="Encrypted credentials manager app"
                        />
                    </div>
                    <div>
                        <ProjectBox 
                            url="https://www.github.com/SurfSightAI" 
                            img="/surfsight_logo.png"
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
                            url="https://pypi.org/project/PyStrong/" 
                            img="/python.png"
                            description="PyStrong. Type enforcement for python objects."
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
                    url="https://www.github.com/hyptocrypto/LockIn" 
                    img="/lock_icon.png"
                    description="Encrypted credentials manager app"
                />
                <ProjectBox 
                    url="https://www.github.com/SurfSightAI" 
                    img="/surfsight_logo.png"
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
                    url="https://pypi.org/project/PyStrong/" 
                    img="/python.png"
                    description="PyStrong. Type enforcement for python objects."
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
                    img="/surfsight_logo.png"
                    description="SurfSight. Computer vision analytics surfing."
                />
                <ProjectBox 
                    url="https://www.shuup.com" 
                    img="/shuup.png"
                    description="Bespoke e-commerce solutions."
                />
                <ProjectBox 
                    url="https://pypi.org/project/PyStrong/" 
                    img="/python.png"
                    description="PyStrong. Type enforcement for python objects."
                />
            </HStack>
        </Flex>
        );
    }

};

export default ProjectContainer
