import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { Page1 } from "./page1"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container!)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <Page1 />
  </React.StrictMode>,
)