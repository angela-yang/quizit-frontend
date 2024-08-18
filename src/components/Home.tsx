import { Flex, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Flex
      pos="absolute"
      left="60vh"
      marginTop="15vh"
      w="40%"
      alignContent="center"
      flexDir="column"
    >
      <Heading as="h1">Welcome to Quizit</Heading>
      <Text sx={{ mt: 3, mb: 3 }}>
        A study app like quizlet. Create study sets and quizzes and stuff bunga
        bunga wompus wumpus
      </Text>
    </Flex>
  );
}

export default Home;
