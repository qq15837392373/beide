import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:''
  },
  getters:{
    getToken(state) {
      return state.token
    }
  },
  mutations: {
    setToken(state,data){
      state.token=data
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
