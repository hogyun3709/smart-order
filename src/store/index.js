import { createStore } from 'vuex';

export default createStore({
  state: {
    access_token: '',
    cart_items: [],
    product_to_cart: [],
  },
  getters: {
    getAccessToken(state) {
      return state.access_token;
    },
    getCartItems(state) {
      return state.cart_items;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.access_token = token;
    },
    CLEAR_TOKEN(state) {
      state.access_token = undefined;
    },
    SET_CART_ITEM(state, item) {
      const arr = [];
      state.cart_items = arr.concat(item);
    },
    ADD_PRODUCT_TO_CART(state, product) {
      state.product_to_cart.push(product);
    },
    INCRE_QUANTITY(state, index) {
      state.cart_items[index].quantity += 1;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    clearToken({ commit }) {
      commit('CLEAR_TOKEN');
    },
    setCartItem({ commit }, item) {
      commit('SET_CART_ITEM', item);
    },
    addProductToCart({ commit }, product) {
      commit('ADD_PRODUCT_TO_CART', product);
    },
  },
});
