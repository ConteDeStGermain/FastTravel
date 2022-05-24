import * as React from "react"
import {
  ChakraProvider,
  Container,
  theme,
} from "@chakra-ui/react"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Container>
    <h1>taset</h1>

    </Container>
  </ChakraProvider>
)
