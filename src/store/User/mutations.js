import {
  FETCH_COLLECTION,
  GET_CURRENT_OBJECT,
  FIND_OBJECT
} from './types'

export default {
  [FETCH_COLLECTION] (state, collection) {
    state.all = collection
  },

  [GET_CURRENT_OBJECT] (state, object) {
    state.current = object
  },

  [FIND_OBJECT] (state, object) {
    state.id = state.all.find(item => item.id === object.id)
    console.log(state.id)
  }
}
