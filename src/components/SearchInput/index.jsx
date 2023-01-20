import React, { useEffect, useState } from "react"
import { Box, Input } from "@chakra-ui/react"
import api from "../../services/api"

const SearchInput = ({ musics, setMusics, search, setSearch, searchMusic }) => {
  function handleSearch(value) {
    // if (value === "") {
    //   setSearch("")
    //   setMusics(musics)
    // } else {
      setSearch(value)
      searchMusic(value)
    // }
  }

  return (
    <Box as='form' w={{ base: "100%", md: "70%", xl: "50%" }}>
      <Input
        type={"text"}
        variant='filled'
        w='100%'
        boxShadow='base'
        placeholder='Buscar música, álbum, artista...'
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </Box>
  )
}

export default SearchInput
