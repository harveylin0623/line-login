import axios from 'axios'

const baseConfig = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
})

baseConfig.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

baseConfig.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default baseConfig