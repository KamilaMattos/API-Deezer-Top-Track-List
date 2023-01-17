import CardMusic from "../../components/CardMusic"
import Header from "../../components/Header"

const Home = ({ musics, searchMusics, handleFav }) => {
  return (
    <>
      <Header searchMusics={searchMusics} />
      <CardMusic musics={musics} handleFav={handleFav} />
    </>
  )
}

export default Home
