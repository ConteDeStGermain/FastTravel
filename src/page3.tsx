import  { useState }  from "react"
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Heading,
  Grid,
  GridItem,
  Fade,
  SlideFade
} from "@chakra-ui/react"
import theme from './theme'
import './customCss.css'

const Page3 = () => {
  const [isHovered, setHovered] = useState('');

  return (
  <ChakraProvider theme={theme}>
    <Box bg='#F5F5F5' height={'100vh'}>
      <Text paddingLeft={5} paddingTop={4} color='#090909' fontWeight='bold' fontSize='3xl'>FastTravel</Text>
      <Grid>
        <GridItem rowSpan={2}>
          <Center>
            <Heading size={'2xl'}>Limited Beta</Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Text  marginTop='0.5em' lineHeight={'110%'} textAlign='center' width='75%' fontSize='2xl'>
              In order to see if there is interest in this idea, we are currently running a limit beta. 
              If you want an itinerary generated for you, fill in the form below. If this idea doesn't appeal 
              to you, feel fee to share it with a first time traveller, or someone you think 
              would benefit from a generated itinerary.
            </Text>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Text marginTop='1em' lineHeight='110%' textAlign='center' width='75%' fontSize='2xl'>
              Start by selecting the type of trip you wish to have. This will determine which activities you will do the most. 
              But regardless of what you pick you will still do certain common activities. <br/> (You can't go to Barcelona without seeing park Güell!)
            </Text>
          </Center>
        </GridItem>
        <GridItem>
          <Heading marginTop="190px" marginLeft="15px" position="absolute" size="4xl"transform="rotate(270deg)">Type</Heading>
            <Center>
              <Box marginTop="5em" display='flex' flexDirection='row' height='300px'>
                <Box 
                  onMouseEnter={() => setHovered('cultural')}
                  onMouseLeave={() => setHovered('')}
                  className={'typeCards ' + (isHovered==='cultural' ? 'lifted' : 'putDown')}
                  backgroundImage='/cultural.jpg' 
                >
                  <Fade in={isHovered==='cultural' ? true : false}>
                    <Box background='rgba(0, 0, 0, 0.5)' borderRadius='15px 15px 15px 15px' height='300px' zIndex='0'>
                      <Text zIndex='1' opacity='100%' fontSize='4xl' fontWeight='bold' color='#F5F5F5' position='relative' top='40%'>
                        Cultural
                      </Text>
                      <Text fontSize="lg" fontWeight='medium' lineHeight='110%' color='#F5F5F5' position='relative' top='40%'>
                        Select this type if achitecture, history, and guided tours are more your thing.
                      </Text>
                    </Box>
                  </Fade> 
                  <SlideFade in={ isHovered !== 'cultural' } offsetY='-20px'>
                    <Heading marginTop="10px" >Cultural</Heading>
                  </SlideFade>
                </Box>
                <Box 
                  onMouseEnter={() => setHovered('nightlife')}
                  onMouseLeave={() => setHovered('')}
                  className={'typeCards ' + (isHovered==='nightlife' ? 'lifted' : 'putDown')}
                  backgroundImage='/nightlife.jpg' 
                >
                 <Fade in={isHovered==='nightlife' ? true : false}>
                    <Box background='rgba(0, 0, 0, 0.5)' borderRadius='15px 15px 15px 15px' height='300px' zIndex='0'>
                      <Text zIndex='1' opacity='100%' fontSize='4xl' fontWeight='bold' color='#F5F5F5' position='relative' top='40%'>
                        Nightlife
                      </Text>
                      <Text fontSize="lg" fontWeight='medium' lineHeight='110%' color='#F5F5F5' position='relative' top='40%'>
                        Select this type if you wish to party more then anything else. 😉
                      </Text>
                    </Box>
                  </Fade>
                  <SlideFade in={ isHovered !== 'nightlife' } offsetY='-20px'>
                    <Heading marginTop="10px" >Nightlife</Heading>
                  </SlideFade>
                </Box>
                <Box 
                  onMouseEnter={() => setHovered('outdoors')}
                  onMouseLeave={() => setHovered('')}
                  className={'typeCards ' + (isHovered==='outdoors' ? 'lifted' : 'putDown')}
                  backgroundImage='/outdoors.jpg' 
                >
                  <Fade in={isHovered==='outdoors' ? true : false}>
                    <Box background='rgba(0, 0, 0, 0.5)' borderRadius='15px 15px 15px 15px' height='300px' zIndex='0'>
                      <Text zIndex='1' opacity='100%' fontSize='4xl' fontWeight='bold' color='#F5F5F5' position='relative' top='40%'>
                        Outdoors
                      </Text>
                      <Text fontSize="lg" textAlign='center' fontWeight='medium' lineHeight='110%' color='#F5F5F5' position='relative' top='40%'>
                        Select this type if you <br/> like hikes, trails, and beautiful views.
                      </Text>
                    </Box>
                  </Fade>
                  <SlideFade in={ isHovered !== 'outdoors' } offsetY='-20px'>
                    <Heading marginTop="10px" >Outdoors</Heading>
                  </SlideFade>
                </Box>
                <Box 
                  onMouseEnter={() => setHovered('mix')}
                  onMouseLeave={() => setHovered('')}
                  className={'typeCards ' + (isHovered==='mix' ? 'lifted' : 'putDown')}
                  backgroundImage='/mix.jpg' 
                  marginRight="0px"
                >
                 <Fade in={isHovered==='mix' ? true : false}>
                    <Box background='rgba(0, 0, 0, 0.5)' borderRadius='15px 15px 15px 15px' height='300px' zIndex='0'>
                      <Text zIndex='1' opacity='100%' fontSize='4xl' fontWeight='bold' color='#F5F5F5' position='relative' top='40%'>
                        Mix
                      </Text>
                      <Text fontSize="lg" textAlign='center' fontWeight='medium' lineHeight='110%' color='#F5F5F5' position='relative' top='40%'>
                        Select this type if you want a mix of all sort of activities.
                      </Text>
                    </Box>
                  </Fade>
                  <SlideFade in={ isHovered !== 'mix' } offsetY='-20px'>
                    <Heading marginTop="10px" >Mix</Heading>
                  </SlideFade>
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