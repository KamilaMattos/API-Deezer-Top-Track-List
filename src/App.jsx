import { ChakraProvider } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import Router from "./routes"

import { theme } from "./styles/theme"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  )
}

export default App
