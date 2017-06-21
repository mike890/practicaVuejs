import {
  FETCH_COLLECTION,
  GET_CURRENT_OBJECT,
  ADD_OBJECT,
  UPDATE_OBJECT,
  DELETE_OBJECT
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
  },

  [UPDATE_OBJECT] (state, object) {
    let index = state.all.indexOf(state.current)
    state.all[index] = object
  },
  [DELETE_OBJECT] (state, object) {
    // let id = state.all.indexOf(state.current)
  }
}
