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
    INCRE_QUANTITY(state, index) {
      state.cart_items[index].quantity += 1;
    },
  },
  actions: {
    setCartItem({ commit }, item) {
      commit('SET_CART_ITEM', item);
    },
  },
};

export default cart;
