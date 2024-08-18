import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import NavItem from "../components/NavItem.tsx";
import { Folder, BookOpen, Settings } from "react-feather";

/*
        <IconButton
          aria-label="open menu"
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<Menu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />*/

function SideBar({ colorMode }) {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="fixed"
      left="8"
      h="95vh"
      marginTop="26vh"
      boxShadow="0 4px 12px 0
      rgba(0,0,0,0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      flexDir="column"
    >
      <Flex
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      ></Flex>
      <Flex marginTop="2vh" flexDir="column" as="nav">
        <NavItem
          navSize={navSize}
          icon={colorMode === "light" ? "/home-dark.png" : "/home-light.png"}
          title="Dashboard"
          active={false}
        />
        <NavItem
          navSize={navSize}
          icon={colorMode === "light" ? "/sets-dark.png" : "/sets-light.png"}
          title="Study Sets"
          active={true}
        />
        <NavItem
          navSize={navSize}
          icon={colorMode === "light" ? "/quiz-dark.png" : "/quiz-light.png"}
          title="Quizzes"
          active={false}
        />
        <NavItem
          navSize={navSize}
          icon={
            colorMode === "light" ? "/settings-dark.png" : "/settings-light.png"
          }
          title="Settings"
          active={false}
        />
      </Flex>
    </Flex>
  );
}

export default SideBar;
