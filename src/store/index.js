import { createStore } from 'vuex';
import cart from './modules/cart';

export default createStore({
  state: {
    access_token: '',
    orderSummary: [],

  },
  getters: {
    getAccessToken(state) {
      return state.access_token;
    },
    getOrderTotalPrice(state) {
      return `${state.orderSummary.map((item) => item.price).reduce((prev, next) => prev + next, 0).toLocaleString()}원`;
    },
    getOrderDescription(state) {
      if (state.orderSummary.length < 2) {
        return `${state.orderSummary[0].name}`;
      }
      return `${state.orderSummary[0].name}외 ${state.orderSummary.length - 1}건`;
    },

  },
  mutations: {
    SET_TOKEN(state, token) {
      state.access_token = token;
    },
    CLEAR_TOKEN(state) {
      state.access_token = undefined;
    },
    ADD_ORDER(state, orderInfo) {
      state.orderSummary.push(orderInfo);
    },

  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    clearToken({ commit }) {
      commit('CLEAR_TOKEN');
    },
    addOrder({ commit }, orderInfo) {
      commit('ADD_ORDER', orderInfo);
    },
  },
  modules: {
    cart,
  },
});
