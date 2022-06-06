import * as React from "react"
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Heading,
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
        <Stack marginTop='70px' direction='row' spacing='0' boxShadow='dark-lg' borderRadius='20px 20px 20px 20px'>
          <Box 
            backgroundImage='/barcelona.jpg' 
            width={'290px'}
            height={'435px'}
            backgroundSize='290px'
            borderRadius='20px 0px 0px 20px'
            textAlign={'center'}
          >
            <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
              Barcelona
            </Text>
          </Box>
          <Box 
            backgroundImage='/london.jpg' 
            width={'290px'}
            height={'435px'}
            backgroundSize='290px'
            textAlign={'center'}
          >
            <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
              London
            </Text>
          </Box>
          <Box 
            backgroundImage='/timisoara.jpg' 
            width={'290px'}
            height={'435px'}
            backgroundSize='290px'
            textAlign={'center'}
          >
            <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
              Timișoara
            </Text>
          </Box>
          <Box 
            backgroundImage='/athens.jpg' 
            width={'290px'}
            height={'435px'}
            backgroundSize='290px'
            borderRadius='0px 20px 20px 0px'
            textAlign={'center'}
          >
            <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
              Athens
            </Text>
          </Box>
        </Stack>
      </Center>
    </Box>
    <Box bg="#F5F5F5" height={'35vh'}></Box>
  </ChakraProvider>
)
