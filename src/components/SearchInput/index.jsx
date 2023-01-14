import React, { useState } from "react"
import { Box, Input } from "@chakra-ui/react"
import { useLocation } from "react-router-dom "
//import { useLocation } from "wouter"

const SearchInput = () => {
  const [search, setSearch] = useState("")
  //verificiar
  const setLocation = useLocation()

  // const [location, setLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(`/search/${search}`)
    setSearch("")
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Box
      as='form'
      w={{ base: "100%", md: "70%", xl: "50%" }}
      onSubmit={handleSubmit}
    >
      <Input
        variant='filled'
        w='100%'
        boxShadow='base'
        placeholder='Search music, album, artist'
        onChange={handleChange}
        value={search}
      />
    </Box>
  )
}

export default SearchInput
