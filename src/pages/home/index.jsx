import CardMusic from "../../components/CardMusic"
import Header from "../../components/Header"

const Home = ({ musics, searchMusic, handleFav }) => {
  return (
    <>
      <Header searchMusic={searchMusic} />
      <CardMusic musics={musics} handleFav={handleFav} />
    </>
  )
}

export default Home
