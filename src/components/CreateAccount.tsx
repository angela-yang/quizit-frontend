import CreateAccountForm from "../components/CreateAccountForm.tsx";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

function CreateAccount() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <main>
      <Button pos="fixed" right="12vw" top="1rem" onClick={onOpen}>
        Create an Account
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="45vw" px={2} borderRadius={10}>
          <ModalCloseButton />
          <CreateAccountForm />
        </ModalContent>
      </Modal>
    </main>
  );
}

export default CreateAccount;
