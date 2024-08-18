import { Image } from "@chakra-ui/react";

function Header({ colorMode }) {
  return (
    <Image
      pos="fixed"
      top="-5px"
      left="25px"
      boxSize="100px"
      objectFit="contain"
      src={colorMode === "light" ? "/logo-dark.png" : "/logo-light.png"}
    />
  );
}

export default Header;
