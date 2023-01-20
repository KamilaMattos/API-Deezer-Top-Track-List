import React, { useState } from "react"
import { Box, Input } from "@chakra-ui/react"

//searchMusic
const SearchInput = ({ search, searchMusic }) => {
  return (
    <Box as='form' w={{ base: "100%", md: "70%", xl: "50%" }}>
      <Input
        type={"text"}
        variant='filled'
        w='100%'
        boxShadow='base'
        placeholder='Buscar música, álbum, artista...'
        value={search}
        onChange={(event) => searchMusic(event.target.value)}
      />
    </Box>
  )
}

export default SearchInput
