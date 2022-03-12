import { createStore } from 'vuex';

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
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
  },
});
