import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import Container from "./chakra/container";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  components: {
    Container,
  },
  breakpoints,
  config,
});

export default theme;
