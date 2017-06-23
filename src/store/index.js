import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import User from './User'
import Config from './Config'

export default new Vuex.Store({
  modules: {
    User,
    Config
  }
})
