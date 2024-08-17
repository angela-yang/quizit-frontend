import SideBar from "./components/SideBar.tsx";
import Home from "./components/Home.tsx";
import Footer from "./components/Footer.tsx";
import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Container,
  useColorMode,
  Button,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

/*<div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <NavBar />
      </div>

      <Home />

      <div className="relative z-0">
        <Footer />
      </div>
    </div>*/

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <main>
      <Flex>
        <SideBar />
      </Flex>
      <Button
        position="fixed"
        right="1rem"
        top="1rem"
        onClick={toggleColorMode}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
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
};

export default App;
