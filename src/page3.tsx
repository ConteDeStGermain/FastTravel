import  { useState }  from "react"
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Heading,
  Grid,
  GridItem
} from "@chakra-ui/react"
import theme from './theme'
import './customCss.css'

const Page3 = () => {
  const [isHovered, setHovered] = useState(false);

  return (
  <ChakraProvider theme={theme}>
    <Box bg='#F5F5F5' height={'100vh'}>
      <Text paddingLeft={5} paddingTop={4} color={'#090909'} fontWeight='bold' fontSize='3xl'>FastTravel</Text>
      <Grid>
        <GridItem rowSpan={2}>
          <Center>
            <Heading size={'2xl'}>Limited Beta</Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Text marginTop='0.5em' lineHeight={'110%'} textAlign='center' width='75%' fontSize='2xl'>
              In order to see if there is interest in this idea, we are currently running a limit beta. 
              If you want an itinerary generated for you, fill in the form below. If this idea doesn't appeal 
              to you, feel fee to share it with a first time traveller, or someone you think 
              would benefit from a generated itinerary.
            </Text>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Text marginTop='1em' lineHeight={'110%'} textAlign='center' width='75%' fontSize='2xl'>
              Start by selecting the type of trip you wish to have. This will determine which activities you will do the most. 
              But regardless of what you pick you will still do certain common activities. <br/> (You can't go to Barcelona without seeing park Güell!)
            </Text>
          </Center>
        </GridItem>
        <GridItem>
            <Heading as='h1' size="4xl" position="relative" bottom="6em" left="-8.5em" transform="rotate(270deg)">Type</Heading>
            <Center>
              <Box  display='flex' flexDirection='row' height='300px'>
                <Box 
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  backgroundImage='/cultural.jpg' 
                  width='13em'
                  borderRadius='15px 15px 15px 15px'
                  marginRight="40px"
                  backgroundSize='101%'
                  textAlign='center'
                  className={isHovered ? 'lifted' : 'putDown'}
                  // boxShadow={isHovered ? 'dark-lg' : ''}
                >
                  {/* <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
                    Barcelona
                  </Text> */}
                </Box>
                <Box 
                  backgroundImage='/nightlife.jpg' 
                  width='13em'
                  borderRadius='15px 15px 15px 15px'
                  marginRight="40px"
                  backgroundSize='101%'
                  textAlign={'center'}
                >
                  {/* <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
                    London
                  </Text> */}
                </Box>
                <Box 
                  backgroundImage='/outdoors.jpg' 
                  width='13em'
                  borderRadius='15px 15px 15px 15px'
                  marginRight="40px"
                  backgroundSize='101%'
                  textAlign={'center'}
                >
                  {/* <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
                    Timișoara
                  </Text> */}
                </Box>
                <Box 
                  backgroundImage='/mix.jpg' 
                  width='13em'
                  borderRadius='15px 15px 15px 15px'
                  backgroundSize='101%'
                  textAlign={'center'}
                >
                  {/* <Text fontSize='4xl' fontWeight={'bold'} color={'#F5F5F5'} position={'relative'} top={'80%'}>
                    Athens
                  </Text> */}
                </Box>
              </Box>
            </Center>
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
  )
}

export default Page3;