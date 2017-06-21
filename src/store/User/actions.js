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
