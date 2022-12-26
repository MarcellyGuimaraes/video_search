import axios from 'axios'

const api = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
})

export default api
