import CardMusic from "../../components/CardMusic"
import Header from "../../components/Header"

//musics, searchMusic, handleFav
const Home = ({
  musics,
  setMusics,
  searchMusic,
  handleFav,
  handleDeleteFav,
  search,
  setSearch,
}) => {
  return (
    <>
      <Header
        setMusics={setMusics}
        searchMusic={searchMusic}
        search={search}
        // setSearch={setSearch}
        musics={musics}
        handleDeleteFav={handleDeleteFav}
      />
      <CardMusic musics={musics} handleFav={handleFav} />
    </>
  )
}

export default Home
