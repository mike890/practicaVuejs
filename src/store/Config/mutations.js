import {
  GET_CURRENT_USER
} from './types'

export default {
  // [FETCH_COLLECTION] (state, collection) {
  //   state.all = collection
  // },

  [GET_CURRENT_USER] (state, object) {
    state.current = object
  }

  // [ADD_OBJECT] (state, object) {
  //   state.all.push(object)
  // }
}
