import { Route, Routes } from "react-router-dom"

import GlobalStyle from "../styles/global"

import Home from "../pages/home"
import FavoriteTracksList from "../pages/favoriteTracksList"

const Router = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<FavoriteTracksList />} />
    </Routes>
  </>
)

export default Router
