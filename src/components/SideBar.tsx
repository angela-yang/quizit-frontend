import { Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import NavItem from "../components/NavItem.tsx";
import { Menu, Home, Folder, BookOpen, Settings } from "react-feather";

function SideBar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="absolute"
      left="5"
      h="95vh"
      marginTop="5vh"
      boxShadow="0 4px 12px 0
      rgba(0,0,0,0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
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
        />
      </Flex>
      <Flex marginTop="5vh" flexDir="column" alignItems="flex-start" as="nav">
        <NavItem icon={Home} title="Dashboard" />
        <NavItem icon={Folder} title="Study Sets" />
        <NavItem icon={BookOpen} title="Quizzes" />
        <NavItem icon={Settings} title="Settings" />
      </Flex>
    </Flex>
  );
}

export default SideBar;
