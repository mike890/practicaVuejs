import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const initialState = {
  all: [],
  current: {}
}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
