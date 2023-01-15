import { useEffect, useState } from "react"
import { useLocation } from "wouter"
import CardMusic from "../../components/CardMusic"
import Header from "../../components/Header"
import api from "../../services/api"

const Home = () => {
  const [musics, setMusics] = useState([])

  useEffect(() => {
    api
      .get("?limit=12")
      .then((res) => setMusics(res.data.data))
      .catch((err) => console.log(err))
  }, [])

  function searchMusics(value) {
    const finderedMusic = musics.filter((music) => {
      return (
        music.title.toLowerCase().includes(value.toLowerCase()) ||
        music.artist.name.toLowerCase().includes(value.toLowerCase()) ||
        music.album.title.toLowerCase().includes(value.toLowerCase())
      )
    })
    if (finderedMusic.length > 0) {
      setMusics(finderedMusic)
    } else {
      setMusics([])
    }
  }

  return (
    <>
      <Header searchMusics={searchMusics} />
      <CardMusic musics={musics} />
    </>
  )
}

export default Home
