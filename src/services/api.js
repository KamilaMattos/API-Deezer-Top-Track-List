import axios from "axios"

const baseUrl = "https://api.deezer.com/playlist/3155776842/"

const api = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
})

export default api
