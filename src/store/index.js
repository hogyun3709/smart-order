import { createStore } from 'vuex';
import cart from './modules/cart';

export default createStore({
  state: {
    access_token: '',
  },
  getters: {
    getAccessToken(state) {
      return state.access_token;
    },

  },
  mutations: {
    SET_TOKEN(state, token) {
      state.access_token = token;
    },
    CLEAR_TOKEN(state) {
      state.access_token = undefined;
    },

  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    clearToken({ commit }) {
      commit('CLEAR_TOKEN');
    },
  },
  modules: {
    cart,
  },
});
