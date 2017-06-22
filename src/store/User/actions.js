import axios from 'axios'
const url = process.env.API_URL
import {
  FETCH_COLLECTION
} from './types'

export function getUsers ({commit}) {
  return axios.get(url).then(({data}) => {
    commit(FETCH_COLLECTION, data)
  })
}

export function registerUser ({commit}, object) {
  return axios.post(url + '/registrations', {
    user: object
  })
}

export function siginUser ({commit}, object) {
  return axios.post(url + '/sign_in', object).then(res => {
    window.localStorage.setItem('user', JSON.stringify(res.data))
  })
}

export function signoutUser ({commit}, object) {
  let user = JSON.parse(window.localStorage.getItem('user'))
  let headers = 'Token token=' + user.auth_token + '; email=' + user.email
  axios.defaults.headers.common['Authorization'] = headers
  return axios.delete(url + '/sign_out', data => {
    window.localStorage.removeItem('user')
  })
}

export function updateUser ({commit}, object) {
  let user = JSON.parse(window.localStorage.getItem('user'))
  let headers = 'Token token=' + user.auth_token + '; email=' + user.email
  axios.defaults.headers.common['Authorization'] = headers
  return axios.put(url + '/registrations/' + user.id, {
    user: object
  // .then(res => {
  //   window.localStorage.setItem('user', JSON.stringify(res.data))
  })
}
