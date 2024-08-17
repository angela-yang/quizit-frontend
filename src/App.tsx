import SideBar from "./components/SideBar.tsx";
import Home from "./components/Home.tsx";
import Footer from "./components/Footer.tsx";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
import {
  Container,
  useColorMode,
  IconButton,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <main>
      <Flex>
        <SideBar />
      </Flex>
      <IconButton
        aria-label="toggle color"
        icon={colorMode === "light" ? <Moon /> : <Sun />}
        position="fixed"
        right="1rem"
        top="1rem"
        onClick={toggleColorMode}
      ></IconButton>
      <Container>
        <Heading as="h1">Quizit: Study Site</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          Quiz app like quizlet but free and better (or not better but cool
          project, and definitely free).
        </Text>
      </Container>
      <Divider />
    </main>
  );
}

export default App;
