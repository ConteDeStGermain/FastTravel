import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { Page1 } from "./page1"
import { Page2 } from "./page2"
import  Page3  from "./page3"
import { Box } from "@chakra-ui/react"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container!)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <Box maxWidth="1600px" margin="auto">
      <Page1 />
      <Page2 />
      <Page3 />
    </Box>
  </React.StrictMode>,
)