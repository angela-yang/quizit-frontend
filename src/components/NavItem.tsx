import { Flex, Text, Image, Link, Menu, MenuButton } from "@chakra-ui/react";
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
      mt={2}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active ? "AEC8CA" : "000000"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", background: "gray.400" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex alignItems="center">
              <Image boxSize="30px" objectFit="contain" src={icon} />
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
