import axios from 'axios'

const API = 'http://lareact.test/api'

const access_token = localStorage.getItem('access_token')

if (access_token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
}

axios.interceptors.response.use(
  function (response) {
    if (response.data) {
      return response.data
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    if (error.response) {
      return Promise.reject(error.response.data)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error)
    }
  },
)

const post = (endpoint, data) => axios.post(API + endpoint, data)

const Auth = {
  me: () => post('/auth/me'),
  login: (data) => post('/auth/login', data),
  register: (data) => post('/auth/register', data),
}

export default { Auth }
