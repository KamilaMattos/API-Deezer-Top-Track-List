import { Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import CardMusic from "../../components/CardMusic"
import Header from "../../components/Header"
import ListTopMusics from "../../components/ListTopMusics"

const Home = () => {
  return (
    <>
      <Header />
      <CardMusic />
    </>
  )
}

export default Home
