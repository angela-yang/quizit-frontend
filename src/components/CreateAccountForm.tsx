import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

function CreateAccountForm() {
  return (
    <Flex py={12} width="full" align="center" justifyContent="center">
      <Box px={9} width="full" maxWidth="500px" textAlign="center">
        <Box textAlign="center">
          <Heading>Create an Account</Heading>
          <Text mt={2}>
            Or <Link>Sign In to Your Account</Link>
          </Text>
        </Box>
        <Box my={8} textAlign="left" mb={0}>
          <form>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="username" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Create a Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button width="full" mt={8}>
              Create Account
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default CreateAccountForm;
