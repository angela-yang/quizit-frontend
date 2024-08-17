import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import NavHoverBox from "../components/NavHoverBox.tsx";

function NavItem({ title, icon }) {
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems="flex-start">
      <Menu placement="right">
        <Link>
          <MenuButton>
            <Flex p="2" alignItems="center">
              <Icon as={icon} />
              <Text>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

export default NavItem;
