import axios from 'axios'

const API_URL = process.env.MIX_API_URL

const access_token = localStorage.getItem('access_token')

if (access_token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
}

axios.interceptors.response.use(
  function (response) {
    if (response.data) {
      return response.data
    }

    return response
  },
  function (error) {
    if (error.response) {
      return Promise.reject(error.response.data)
    } else if (error.request) {
      return Promise.reject(error.request)
    } else {
      return Promise.reject(error)
    }
  },
)

const post = (endpoint, data) => axios.post(API_URL + endpoint, data)

const Auth = {
  me: () => post('/auth/me'),
  login: (data) => post('/auth/login', data),
  register: (data) => post('/auth/register', data),
}

export default { Auth }
