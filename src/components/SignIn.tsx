import LoginForm from "../components/LoginForm.tsx";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <main>
      <Button pos="fixed" right="5vw" top="1rem" onClick={onOpen}>
        Sign In
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="45vw" px={2} borderRadius={10}>
          <ModalCloseButton />
          <LoginForm />
        </ModalContent>
      </Modal>
    </main>
  );
}

export default SignIn;
