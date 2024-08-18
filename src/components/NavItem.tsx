import {
  Flex,
  Spacer,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import NavHoverBox from "../components/NavHoverBox.tsx";
// import { IconProps } from "react-feather";

/*interface Props {
  navSize: string;
  title: string;
  icon: IconProps;
  active: boolean;
}*/

function NavItem({ navSize, title, icon, active }) {
  return (
    <Flex
      mt={13}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active ? "AEC8CA" : "000000"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", background: "AEC8CA" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex alignItems="center">
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#82AAAD" : "gray.500"}
              />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

export default NavItem;
