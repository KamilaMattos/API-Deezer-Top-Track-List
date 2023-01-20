import CardMusic from "../../components/CardMusic"
import Header from "../../components/Header"

const Home = ({
  musics,
  setMusics,
  searchMusic,
  handleFav,
  search,
  setSearch,
}) => {
  return (
    <>
      <Header
        setMusics={setMusics}
        searchMusic={searchMusic}
        search={search}
        setSearch={setSearch}
        musics={musics}
      />
      <CardMusic musics={musics} handleFav={handleFav} />
    </>
  )
}

export default Home
