import {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Heading,
  Input,
  Grid,
  GridItem,
  Textarea,
  Button,
  FormControl,
  Fade
} from "@chakra-ui/react"
import { send } from 'emailjs-com';
import theme from './theme'
import  { Page5 }  from "./page5"
import './customCss.css'
import { Element } from "react-scroll";

 const Page4 = (prop: {tripType: string, setLogoColor: React.Dispatch<React.SetStateAction<any>> }) => {
  const [from, setFrom] = useState(-1);
  const [to, setTo] = useState(-1);
  const [message, setMessage] = useState(-1);
  const [email, setEmail] = useState(-1);
  const [tripStatus, setTripStatus] = useState(-1);
  const [displayStatus, setDisplayStatus] = useState(false);

  const [toSend, setToSend] = useState({
    from_date: '',
    to_date: '',
    message: '',
    name: '',
    reply_to: '',
    tripType: prop.tripType
  });

  const errors = () => {
    if (from === 0 && to === 0 && message === 0 && email === 0 && tripStatus === 0) {
      return false;
    } else if (from === -1 && to === -1 && message === -1 && email === -1 && tripStatus === -1) {
      return false;
    } else {
      return true;
    }
  }

  const  validate = () => {
    let checkFrom = toSend.from_date.length > 0
    let checkTo = toSend.to_date.length > 0
    let checkMessage = toSend.message.length > 0
    let checkEmail = toSend.reply_to.length > 0

    
    checkFrom ? setFrom(0) : setFrom(1)
    checkTo ? setTo(0) : setTo(1);
    checkMessage ? setMessage(0) : setMessage(1);
    checkEmail ? setEmail(0) : setEmail(1);
    
    if (prop.tripType === "") {
      setTripStatus(1);
    } else {
      setToSend({ ...toSend, tripType: prop.tripType });
      console.log(prop.tripType);
      console.log(toSend)
      setTripStatus(0);
    }

    return (checkFrom && checkTo && checkMessage && checkEmail) ? true : false;
  }

  const onSubmit = ()=> {
    if (validate()) {
      setDisplayStatus(true);
      prop.setLogoColor("#F5F5F5")
    //   send(
    //     'service_72d5feq',
    //     'template_nhv6tll',
    //     toSend,
    //     'X05XnLgTTvVD2NN7v'
    //   )
    //     .then((response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     })
    //     .catch((err) => {
    //       console.log('FAILED...', err);
    //     });
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setToSend({ ...toSend, [target.name]: target.value });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setToSend({ ...toSend, [target.name]: target.value });
  };

  return (
  <ChakraProvider theme={theme}>
    <Element name="page4" height='100vh' />
    <Box  bg='#F5F5F5' margin="auto" height='100vh'>
        <FormControl>
          <Grid>
            <GridItem   margin="auto">
              <Heading 
                position="relative" 
                bottom="300px"
                left={visualViewport.width > 1440 ?  "-650px" : "-600px"} 
                size="3xl" transform="rotate(270deg)"
              >
                Date
              </Heading>
              <Box marginTop="40px" display="flex" flexDirection="row">
                <Heading marginRight="20px">From: </Heading>                
                <Input isInvalid={from !== 1 ? false : true} name="from_date" onChange={handleChange} fontSize="1.5em"  width="9em" placeholder='Apr. 18th 2022' />

                <Heading marginLeft="300px" marginRight="20px">To:</Heading> 
                <Input isInvalid={to !== 1 ? false : true}  name="to_date" onChange={handleChange} fontSize="1.5em" width="9em" placeholder='Jul. 21st 2022' />
              </Box>
            </GridItem>
            <GridItem>
              <Heading 
                position="relative" bottom={visualViewport.width > 1440 ?  "6em" : "5em"} 
                left={visualViewport.width > 1440 ?  "-650px" : "-600px"} size="3xl" 
                transform="rotate(270deg)"
              >
                  Destination
                </Heading>
              <Center>
                <Textarea 
                  fontSize="1.5em" 
                  width="900px" 
                  height="200px"
                  resize="none"
                  marginTop="4em"
                  name="message" 
                  onChange={handleMessageChange} 
                  isInvalid={message !== 1 ? false : true}
                  placeholder="Write about the places you would like to realistically see within the timeframe you've set above."></Textarea>
              </Center>     
            </GridItem>
            <GridItem  margin="auto">
              <Box marginTop="2em" display="flex" flexDirection="row">
                <Heading marginRight="20px">Email:</Heading>                
                <Input isInvalid={email !== 1 ? false : true} name="reply_to" onChange={handleChange} id='email' type='email' fontSize="1.5em" width="11.5em" placeholder='John_Doe@gmail.com' />

                <Heading marginLeft="100px" marginRight="20px">Name (optional):</Heading> 
                <Input name="name" onChange={handleChange} fontSize="1.5em" width="6em" placeholder='Joh Doe' />
              </Box>
              <Center>
                <Button onClick={onSubmit} marginTop="2em" size='lg' bg='#4BBEE3' color="#F5F5F5" >Submit</Button>
              </Center>
              <Center>
                <Text display={ errors() ? "block" : "none" } marginTop="10px" color="#E53E3E">*Cannot submit. There are empty, required, fields!</Text>
                <Text display={ errors() ? "block" : "none" } marginTop="10px" color="#E53E3E"> You haven't selected a trip type!</Text>
              </Center>
            </GridItem>
          </Grid>
        </FormControl>
    </Box>
    <Fade in={displayStatus}> 
      <Page5 displayStatus={displayStatus} />
    </Fade>
  </ChakraProvider>
  )
  }

export default Page4;