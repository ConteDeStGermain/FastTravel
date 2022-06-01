import * as React from "react"
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react"
import theme from './theme'

export const Page2 = () => (
  <ChakraProvider theme={theme}>
    <Box bg='#F5F5F5' height={'100vh'}>
      <Text paddingLeft={5} paddingTop={4} color={'#090909'} fontWeight='bold' fontSize='3xl'>FastTravel</Text>
      <Box>
        <Image 
            src='/map.jpg'
            alt='An aesthetic picture of a map.' 
            borderRadius='20px 20px 20px 20px'
            boxShadow='2xl'
            width={'400px'}
            />
        <Image 
            src='/globe.jpg'
            alt='An aesthetic picture of a globe.' 
            borderRadius='20px 20px 20px 20px'
            boxShadow='2xl'
            width={'400px'}
          />
      </Box>
    </Box>
  </ChakraProvider>
)
