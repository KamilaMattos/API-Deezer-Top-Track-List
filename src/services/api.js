import axios from "axios"

const CORS = "https://api.allorigins.win/raw?url="
<<<<<<< HEAD
const apiUrl = "https://api.deezer.com/"
=======
const apiUrl = "https://api.deezer.com/playlist/"
>>>>>>> a651043952f7e828a120ea44592496610aa720b9

const api = axios.create({
  baseURL: CORS + apiUrl,
  timeout: 15000,
})

export default api
