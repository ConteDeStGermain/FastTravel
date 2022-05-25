import * as React from "react"
import {
  ChakraProvider,
  Box,
  Container,
  Text,
  theme,
} from "@chakra-ui/react"


export const Page1 = () => (
  <ChakraProvider theme={theme}>
    <Box bg='#4BBEE3' height={'100vh'}>
      <Container>
        <Text color={'#F5F5F5'} fontSize='6xl'>An Itinerary for every destination</Text>
      </Container>
    </Box>
  </ChakraProvider>
)
