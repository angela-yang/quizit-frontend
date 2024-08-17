import { Flex } from "@chakra-ui/react";
import NavItem from "../components/NavItem.tsx";
import { Home, Settings, BookOpen } from "react-feather";

function SideBar() {
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0
      rgba(0,0,0,0.05)"
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >
      <NavItem icon={Home} title="Dashboard" />
      <NavItem icon={Settings} title="Study Sets" />
      <NavItem icon={BookOpen} title="Quizzes" />
      <NavItem icon={FiHome} title="Settings" />
    </Flex>
  );
}

export default SideBar;
