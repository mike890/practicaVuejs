import axios from 'axios'
const url = process.env.API_URL
import {
  FETCH_COLLECTION,
  GET_CURRENT_OBJECT
  // FIND_OBJECT
} from './types'

export function getUsers ({commit, dispatch}) {
  dispatch('currentUser')
  return axios.get(url + '/users').then(({data}) => {
    commit(FETCH_COLLECTION, data)
  })
}
export function registerUser ({commit}, object) {
  return axios.post(url + '/registrations', {
    user: object
  })
}

export function createUser ({commit}, object) {
  let user = JSON.parse(window.localStorage.getItem('user'))
  let headers = 'Token token=' + user.auth_token + '; email=' + user.email
  axios.defaults.headers.common['Authorization'] = headers
  return axios.post(url + '/users', {
    user: object
  })
}

export function destroyUser ({commit}, object) {
  let user = JSON.parse(window.localStorage.getItem('user'))
  let headers = 'Token token=' + user.auth_token + '; email=' + user.email
  axios.defaults.headers.common['Authorization'] = headers
  console.log(object.id)
  return axios.delete(url + '/users/' + object.id)
}

// export function findUser ({commit}, object) {
//   console.log('entro a find')
//   commit(FIND_OBJECT, object)
// }

export function siginUser ({commit}, object) {
  return axios.post(url + '/sign_in', object).then(res => {
    window.localStorage.setItem('user', JSON.stringify(res.data))
  })
}

export function signoutUser ({commit}, object) {
  let user = JSON.parse(window.localStorage.getItem('user'))
  let headers = 'Token token=' + user.auth_token + '; email=' + user.email
  axios.defaults.headers.common['Authorization'] = headers
  axios.delete(url + '/sign_out', data => {
    window.localStorage.removeItem('user')
  })
  window.localStorage.clear()
  console.log('entro al signout')
  return ''
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

export function currentUser ({commit}) {
  let user = JSON.parse(window.localStorage.getItem('user'))
  let headers = 'Token token=' + user.auth_token + '; email=' + user.email
  if ((axios.defaults.headers.common['Authorization'] = headers)) {
    commit(GET_CURRENT_OBJECT, user)
  } else {
    console.log('ya no hay autorizacion')
  }
}
