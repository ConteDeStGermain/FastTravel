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

export const Page1 = () => (
  <ChakraProvider theme={theme}>
    <Box bg='#4BBEE3' height={'65vh'}>
      <Text paddingLeft={5} paddingTop={4} color={'#F5F5F5'} fontWeight='bold' fontSize='3xl'>FastTravel</Text>
      <Center>
        <Heading marginTop='4vh' color={'#F5F5F5'} fontSize='5xl'>An Itinerary for every destination</Heading>
      </Center>
      <Center>
        
        <Stack marginTop='70px' direction='row' spacing='0' boxShadow='2xl' borderRadius='20px 20px 20px 20px'>
          <Image 
            src='/barcelona.jpg'
            alt='Barcelona, Spain' 
            borderRadius='20px 0px 0px 20px'
            width={'290px'}
            />
          <Image 
            src='/london.jpg'
            alt='London, UK' 
            width={'290px'}
            />
          <Image 
            src='/timisoara.jpg'
            alt='Timisoara, Romania' 
            width={'290px'}
            />
          <Image 
            src='/athens.jpg'
            alt='Athens, Greece' 
            borderRadius='0px 20px 20px 0px'
            width={'290px'}
            />
        </Stack>
      </Center>
    </Box>
    <Box bg="#F5F5F5" height={'35vh'}></Box>
  </ChakraProvider>
)
