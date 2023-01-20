import axios from "axios"

const CORS = "https://api.allorigins.win/raw?url="
const apiUrl = "https://api.deezer.com/"

const api = axios.create({
  baseURL: CORS + apiUrl,
  timeout: 15000,
})

export default api
