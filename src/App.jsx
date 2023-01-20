import { useEffect, useState } from "react"

import { theme } from "./styles/theme"

import { ChakraProvider, ColorModeScript, useToast } from "@chakra-ui/react"

import Router from "./routes"
import api from "./services/api"

const App = () => {
  const [musics, setMusics] = useState([])
  const [favList, setFavList] = useState([])

  const toast = useToast()

  useEffect(() => {
    getTopMusics()
  }, [])

  function getTopMusics() {
    api
      .get(`playlist/1111141961/tracks`)
      .then((res) => setMusics(res.data.data))
      .catch((err) => console.log(err))
  }

  function debounce(func, wait) {
    let timer = null
    return function () {
      clearTimeout(timer)
      timer = setTimeout(func, wait)
    }
  }

  function searchMusic(str) {
    api
      .get(`search?q=${str}&limit=25`)
      .then((res) => {
        if (str === "") {
          return getTopMusics()
        } else {
          debounce(setMusics(res.data.data)), 500
        }
      })
      .catch((err) => console.log(err))
  }

  function handleFav(id) {
    const musicToAddToFavList = musics.find((music) => {
      return music.id === id
    })

    const isMusicAlreadyInFavList = favList.find(
      (music) => music.id === musicToAddToFavList.id
    )

    if (isMusicAlreadyInFavList?.id) {
      return toast({
        title: "Ops!",
        description: "Essa música já está salva!",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "top",
      })
    } else {
      setFavList((currentList) => [...currentList, musicToAddToFavList])
      return toast({
        title: "Sucesso!",
        description: "Música salva!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      })
    }
  }

  function handleDeleteFav(idFavToRemove) {
    const findMusic = favList.filter((fav) => fav.id !== idFavToRemove)
    setFavList(findMusic)
  }
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='dark' />
      <Router
        musics={musics}
        searchMusic={searchMusic}
        favList={favList}
        handleFav={handleFav}
        handleDeleteFav={handleDeleteFav}
      />
    </ChakraProvider>
  )
}

export default App
