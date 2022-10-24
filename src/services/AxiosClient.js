import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://54.164.28.255:8999',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient
