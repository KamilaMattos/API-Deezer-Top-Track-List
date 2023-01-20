import { Route, Routes } from "react-router-dom"

import GlobalStyle from "../styles/global"

import Home from "../pages/home"
import FavoriteTracksList from "../pages/favoriteTracksList"

const Router = ({
  musics,
  searchMusic,
  handleFav,
  handleDeleteFav,
  favList,
}) => (
  <>
    <GlobalStyle />
    <Routes>
      <Route
        path='/'
        element={
          <Home
            musics={musics}
            searchMusic={searchMusic}
            handleFav={handleFav}
          />
        }
      />
      <Route
        path='/favorites'
        element={
          <FavoriteTracksList
            favList={favList}
            handleDeleteFav={handleDeleteFav}
          />
        }
      />
    </Routes>
  </>
)

export default Router
