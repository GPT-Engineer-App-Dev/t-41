import { Container, Text, VStack, Box, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Container centerContent maxW="container.md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" flexGrow="1">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
      <Box as="footer" width="full" padding="4" backgroundColor="gray.100">
        <Flex justify="center" align="center">
          <Text fontSize="sm">© 2023 GPT Engineer To-Do App</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;