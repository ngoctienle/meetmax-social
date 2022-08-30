import fetch from 'isomorphic-fetch'
import { BASE_URL } from '../constant'

const api = {
  callJson: async (url, { data, method = 'GET', token } = {}) => {
    const _url = `${BASE_URL}${url}`
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return fetch(_url, config).then(res => res.json())
  }
}
export default api
