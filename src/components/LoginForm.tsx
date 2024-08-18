import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/react";

function LoginForm() {
  return (
    <Flex py={20} width="full" align="center" justifyContent="center">
      <Box px={9} width="full" maxWidth="500px" textAlign="center">
        <Box textAlign="center">
          <Heading>Sign In to Your Account</Heading>
          <Text mt={2}>
            Or <Link>Create an Account</Link>
          </Text>
        </Box>
        <Box my={8} textAlign="left" mb={0}>
          <form>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack isInline justifyContent="space-between" mt={4}>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              <Box>
                <Link>Forgot your password?</Link>
              </Box>
            </Stack>
            <Button width="full" mt={8}>
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default LoginForm;
