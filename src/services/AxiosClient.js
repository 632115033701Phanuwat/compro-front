import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://3.83.149.64:8999',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient
