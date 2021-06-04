import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('session') || null
  },

  getters: {

    getSession(state) {
      if (state.user) return JSON.parse(localStorage.getItem('session'));
      return null;
    },
    isAdmin(state) {
      if (state.user) return JSON.parse(localStorage.getItem('session')).username == "Natalia";
      return false;
    }
  },

  mutations: {
    login(state, user) {
      localStorage.setItem('session', JSON.stringify(user));
      state.user = user;
    },

    logout(state) {
      console.log('Logging out!');
      localStorage.removeItem('session');
      state.user = null;
    }
  }

})
