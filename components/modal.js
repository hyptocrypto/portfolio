import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    chakra,
    VisuallyHidden

  } from '@chakra-ui/react'

  const FooterButton = ({
    address,
    colorMode,
    children,
    label,
  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <chakra.button
        bg={colorMode==="light"? "lightgrey" : "whiteAlpha.100"}
        rounded={'full'}
        w={10}
        h={10}
        cursor={'pointer'}
        onClick={onOpen}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Tips are very appreciated!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {label}: {address}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </chakra.button>
    );
  };
  
export default FooterButton
