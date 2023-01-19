import { Route, Routes } from "react-router-dom"

import GlobalStyle from "../styles/global"

import Home from "../pages/home"
import FavoriteTracksList from "../pages/favoriteTracksList"

const Router = ({ musics, searchMusics, handleFav, favList, handleDeleteFav }) => (
  <>
    <GlobalStyle />
    <Routes>
      <Route
        path='/'
        element={
          <Home
            musics={musics}
            searchMusics={searchMusics}
            handleFav={handleFav}
          />
        }
      />
      <Route
        path='/favorites'
        element={<FavoriteTracksList handleFav={handleFav} favList={favList} handleDeleteFav={handleDeleteFav} />}
      />
    </Routes>
  </>
)

export default Router
