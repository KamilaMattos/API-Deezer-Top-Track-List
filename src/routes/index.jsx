import { Route, Routes } from "react-router-dom"

import GlobalStyle from "../styles/global"

import Home from "../pages/home"
import FavoriteTracksList from "../pages/favoriteTracksList"

//musics, searchMusic, handleFav, favList, handleDeleteFav

const Router = ({
  musics,
  setMusics,
  searchMusic,
  handleFav,
  handleDeleteFav,
  favList,
  search,
  setSearch,
}) => (
  <>
    <GlobalStyle />
    <Routes>
      <Route
        path='/'
        element={
          <Home
            musics={musics}
            setMusics={setMusics}
            searchMusic={searchMusic}
            handleFav={handleFav}
            search={search}
          />
        }
      />
      <Route
        path='/favorites'
        element={
          <FavoriteTracksList
            handleFav={handleFav}
            favList={favList}
            handleDeleteFav={handleDeleteFav}
          />
        }
      />
    </Routes>
  </>
)

export default Router
