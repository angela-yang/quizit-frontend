import SideBar from "./components/SideBar.tsx";
import Home from "./components/Home.tsx";
import Footer from "./components/Footer.tsx";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
import {
  Image,
  useColorMode,
  IconButton,
  Heading,
  Text,
} from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <main>
      <Flex>
        <Image
          pos="fixed"
          top="0px"
          left="25px"
          boxSize="100px"
          objectFit="contain"
          src={colorMode === "light" ? "/logo-dark.png" : "/logo-light.png"}
        />
        <SideBar colorMode={colorMode} />
      </Flex>
      <IconButton
        aria-label="toggle color"
        icon={colorMode === "light" ? <Moon /> : <Sun />}
        position="fixed"
        right="1rem"
        top="1rem"
        onClick={toggleColorMode}
      ></IconButton>
      <Flex
        pos="absolute"
        left="60vh"
        marginTop="10vh"
        w="40%"
        alignContent="center"
        flexDir="column"
      >
        <Heading as="h1">Welcome to Quizit</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          A study app like quizlet. Create study sets and quizzes and stuff
          bunga bunga wompus wumpus
        </Text>
      </Flex>
    </main>
  );
}

export default App;
