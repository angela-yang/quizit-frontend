import Header from "./components/Header.tsx";
import SignIn from "./components/SignIn.tsx";
import SideBar from "./components/SideBar.tsx";
import Home from "./components/Home.tsx";
import { Moon, Sun } from "react-feather";
import { Flex, Image, useColorMode, IconButton } from "@chakra-ui/react";
import CreateAccount from "./components/CreateAccount.tsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <main>
      <Flex h="100vh" pos="fixed" display="flex" alignItems="flex-end">
        <Image
          objectFit="fill"
          src={colorMode === "light" ? "/dark.png" : "/light.png"}
        />
      </Flex>
      <Flex>
        <Header colorMode={colorMode} />
        <SideBar colorMode={colorMode} />
      </Flex>
      <SignIn />
      <CreateAccount />
      <IconButton
        aria-label="toggle color"
        icon={colorMode === "light" ? <Moon /> : <Sun />}
        position="fixed"
        right="1rem"
        top="1rem"
        onClick={toggleColorMode}
      ></IconButton>
      <Home />
    </main>
  );
}

export default App;
