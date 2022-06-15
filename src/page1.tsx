import * as React from "react"
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Heading,
} from "@chakra-ui/react"
import theme from './theme'

export const Page1 = () => (
  <ChakraProvider theme={theme}>
    <Box className="largerThenParent" bg='#4BBEE3' height={'65vh'}>
      <Text paddingLeft={5} paddingTop={4} color={'#F5F5F5'} fontWeight='bold' fontSize='3xl'>FastTravel</Text>
      <Center>
        <Heading marginTop='4vh' color={'#F5F5F5'} fontSize='5xl'>An itinerary for every destination</Heading>
      </Center>
      <Center>
        <Box marginTop="8em" display='flex' flexDirection='row' boxShadow='dark-lg' borderRadius='20px 20px 20px 20px' height='27.2em'>
          <Box 
            backgroundImage='/barcelona.jpg' 
            width='18em'
            backgroundSize='101%'
            borderRadius='20px 0px 0px 20px'
            textAlign={'center'}
          >
            <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
              Barcelona
            </Text>
          </Box>
          <Box 
            backgroundImage='/london.jpg' 
            width='18em'
            backgroundSize='101%'
            textAlign={'center'}
          >
            <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
              London
            </Text>
          </Box>
          <Box 
            backgroundImage='/timisoara.jpg' 
            width='18em'
            backgroundSize='101%'
            textAlign={'center'}
          >
            <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
              Timișoara
            </Text>
          </Box>
          <Box 
            backgroundImage='/athens.jpg' 
            width='18em'
            backgroundSize='101%'
            borderRadius='0px 20px 20px 0px'
            textAlign={'center'}
          >
            <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
              Athens
            </Text>
          </Box>
        </Box>
      </Center>
    </Box>
    <Box bg="#F5F5F5" height={'35vh'}></Box>
  </ChakraProvider>
)
