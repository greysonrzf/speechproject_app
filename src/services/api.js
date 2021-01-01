import axios from 'axios'

const api = axios.create({
  baseURL: 'http://webserverhomolog.ongrace.com'
})

export default api