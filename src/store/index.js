import Vue from 'vue'
import Vuex from 'vuex'

// 引入state
import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})