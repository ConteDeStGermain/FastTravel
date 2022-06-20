import {useState} from 'react';
import { animateScroll as scroll, scroller } from "react-scroll";
import {
  ChakraProvider,
  Box,
  Button
} from "@chakra-ui/react"
import theme from './theme'
import React from "react";
const Navigation = (prop: {setLogoColor: React.Dispatch<React.SetStateAction<any>>}) => {
  const [page, setPage] = useState(1);

  const handleButtonPress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLTextAreaElement;
    let goToPage;

    if (target.id === "down") {
      console.log(page)
      goToPage = "page" + (page + 1);
      scroller.scrollTo(goToPage , {duration: 1000, delay: 100, smooth: true, offset: -50 });
      if (page !== 4) {
        setPage(page + 1)
      }
    } else {
      goToPage = "page" + (page - 1);
      scroller.scrollTo(goToPage , {duration: 1000, delay: 100, smooth: true, offset: -50 });
      if (page !== 1) {
        setPage(page - 1)
      }
    }

    if (goToPage === "page2") {
      prop.setLogoColor("#090909");
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Box zIndex="1"  position="fixed" bottom="50%" right="0%" transform="rotate(270deg)">
        <Button id='down' onClick={(e) => handleButtonPress(e)} variant='ghost' size="lg">{"<"}</Button>
        <Button onClick={(e) => handleButtonPress(e)} variant='ghost' size="lg">{">"}</Button>
      </Box>
    </ChakraProvider>
  )
}

export default Navigation;