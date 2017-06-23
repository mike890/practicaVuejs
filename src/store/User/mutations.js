import {
  FETCH_COLLECTION,
  GET_CURRENT_OBJECT,
  ADD_OBJECT
} from './types'

export default {
  [FETCH_COLLECTION] (state, collection) {
    state.all = collection
  },

  [GET_CURRENT_OBJECT] (state, object) {
    state.current = object
  },

  [ADD_OBJECT] (state, object) {
    state.all.push(object)
  }
}
