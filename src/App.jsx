import { ChakraProvider } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import Router from "./routes"

import { theme } from "./styles/theme"

const App = () => {
  // const [musics, setMusics] = useState([])

  // useEffect(() => {
  //   fetch("https://api.deezer.com/playlist/3155776842/")
  //     .then((res) => res.json())
  //     .then((res) => setMusics(res.tracks.data))
  // }, [])

  // console.log(musics)

  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  )
}

export default App
