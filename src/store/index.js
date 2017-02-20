import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
//modules
import index from './modules/index'
import book from './modules/book'
import banner from './modules/banner'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    index,
    book,
    banner
  },
  strict: debug
})
