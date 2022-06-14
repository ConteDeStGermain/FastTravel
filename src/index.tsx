import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { Page1 } from "./page1"
import { Page2 } from "./page2"
import  Page3  from "./page3"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container!)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <Page1 />
    <Page2 />
    <Page3 />
  </React.StrictMode>,
)