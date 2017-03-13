import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
//modules
import index from './modules/index'
import book from './modules/book'
import handle from './modules/handle'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    index,
    book,
    handle
  },
  strict: debug
})
