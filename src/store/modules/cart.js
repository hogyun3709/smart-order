const cart = {
  namespaced: true,
  state: {
    cart_items: [],
  },
  getters: {
    getCartItems(state) {
      return state.cart_items;
    },
  },
  mutations: {
    SET_CART_ITEM(state, item) {
      const arr = [];
      state.cart_items = arr.concat(item);
    },
    REMOVE_CART_ITEM(state, index) {
      state.cart_items.splice(index, 1);
    },
  },
  actions: {
    setCartItem({ commit }, item) {
      commit('SET_CART_ITEM', item);
    },
    increQuantity({ commit }, index) {
      commit('INCRE_QUANTITY', index);
    },
    removeCartItem({ commit }, index) {
      commit('REMOVE_CART_ITEM', index);
    },
  },
};

export default cart;
