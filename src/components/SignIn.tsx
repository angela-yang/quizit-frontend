import LoginForm from "../components/LoginForm.tsx";
import {
  Image,
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
      <Image
        onClick={onOpen}
        cursor="pointer"
        src="/SignIn.png"
        maxHeight="8vh"
        objectFit="contain"
      />
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
