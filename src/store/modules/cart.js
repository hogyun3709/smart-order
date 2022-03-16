const cart = {
  namespaced: true,
  state: {
    cart_items: [],
    final_price: 0,
    cart_items_name: '장바구니목록명',
  },
  getters: {
    getCartItems(state) {
      return state.cart_items;
    },
    getCartItemsFinalPrice(state) {
      return state.final_price;
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
    SET_FINAL_PRICE(state, price) {
      state.final_price += price;
    },
  },
  actions: {
    setCartItem({ commit }, item) {
      commit('SET_CART_ITEM', item);
    },
    removeCartItem({ commit }, index) {
      commit('REMOVE_CART_ITEM', index);
    },
    setFinalPrice({ commit }, price) {
      commit('SET_FINAL_PRICE', price);
    },
  },
};

export default cart;
