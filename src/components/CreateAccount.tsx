import CreateAccountForm from "../components/CreateAccountForm.tsx";
import {
  Image,
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
      <Image
        onClick={onOpen}
        cursor="pointer"
        src="/CreateAccount.png"
        maxHeight="8vh"
        objectFit="contain"
      />
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
