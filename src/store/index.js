import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import essaisCliniques from './modules/essais-cliniques'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    unavailableFeature() {
      Vue.prototype.$message({
        showClose: true,
        message: "Oops, cette fonctionnalit√© n'existe pas.",
        type: 'error',
      })
    },
  },
  modules: {
    menu,
    essaisCliniques,
  },
})
