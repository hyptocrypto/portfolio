import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const IconImage = (props) => {
    return(
        <a href={props.imglink} target={"_blank"}>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                <Image
                    src={props.imgsrc}
                    borderRadius={10}
                />
            </motion.button>
        </a>
    )
};

export default IconImage
