import {
  Flex,
  IconButton,
  Heading,
  Text,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";
import NavItem from "../components/NavItem.tsx";
import { Menu } from "react-feather";

function SideBar({ colorMode }) {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="fixed"
      paddingLeft="8"
      paddingRight="8"
      h="95vh"
      marginTop="20vh"
      boxShadow="0 4px 12px 0
      rgba(0,0,0,0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      flexDir="column"
      backgroundColor={
        colorMode === "light"
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(26, 32, 44, 0.92)"
      }
    >
      <Flex
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          aria-label="open menu"
          background="none"
          mt={2}
          _hover={{ background: "none" }}
          icon={<Menu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        ></IconButton>
      </Flex>
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
      <Flex
        marginTop="8vh"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avater-1.png" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Goober Doober
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SideBar;
