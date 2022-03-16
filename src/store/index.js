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
      if (state.orderSummary.length < 1) {
        return '';
      }
      return `${state.orderSummary.map((item) => item.price).reduce((prev, next) => prev + next, 0).toLocaleString()}원 을 결제합니다`;
    },
    getOrderDescription(state) {
      if (state.orderSummary.length < 1) {
        return '주문을 진행할 음료가 없어요! ';
      }
      if (state.orderSummary.length < 2) {
        return `${state.orderSummary[0].name}`;
      }
      return `${state.orderSummary[0].name}외 ${state.orderSummary.length - 1}건`;
    },
    getCartItems(state) {
      return state.cart.cart_items;
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
    ADD_ORDER_FROM_CART(state, cartInfo) {
      state.orderSummary.push(cartInfo);
    },
    CLEAR_ORDER(state) {
      state.orderSummary = [];
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
    addOrderFromCart({ commit }, cartInfo) {
      commit('ADD_ORDER_FROM_CART', cartInfo);
    },
    clearOrder({ commit }) {
      commit('CLEAR_ORDER');
    },
  },
  modules: {
    cart,
  },
});
