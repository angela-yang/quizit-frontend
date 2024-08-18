import { Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import NavItem from "../components/NavItem.tsx";
import { Menu, Home, Folder, BookOpen, Settings } from "react-feather";

function SideBar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="fixed"
      left="8"
      h="95vh"
      marginTop="20vh"
      boxShadow="0 4px 12px 0
      rgba(0,0,0,0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
    >
      <Flex
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
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
      <Flex marginTop="2vh" flexDir="column" as="nav">
        <NavItem navSize icon={Home} title="Dashboard" active={false} />
        <NavItem navSize icon={Folder} title="Study Sets" active={true} />
        <NavItem navSize icon={BookOpen} title="Quizzes" active={false} />
        <NavItem navSize icon={Settings} title="Settings" active={false} />
      </Flex>
    </Flex>
  );
}

export default SideBar;
