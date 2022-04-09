const cart = {
  namespaced: true,
  state: {
    cart_items: [],
    final_price: 0,
  },
  getters: {
    getCartItems(state) {
      return state.cart_items;
    },
    getCartItemsFinalPrice(state) {
      return state.final_price;
    },
    getCartItemsDescription(state) {
      if (state.cart_items.length < 1) {
        return '';
      }
      if (state.cart_items.length < 2) {
        return state.cart_items[0].product.nameKr;
      }
      return `${state.cart_items[0].product.nameKr}외 ${state.cart_items.length - 1}건`;
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
    SUBSTRACT_CART_PRICE(state, value) {
      state.final_price -= value;
    },
    SET_FINAL_PRICE(state, price) {
      state.final_price += price;
    },
    CLEAR_CART(state) {
      state.final_price = 0;
      state.cart_items = [];
    },
  },
  actions: {
    setCartItem({ commit }, item) {
      commit('SET_CART_ITEM', item);
    },
    removeCartItem({ commit }, index) {
      commit('REMOVE_CART_ITEM', index);
    },
    substractCartPrice({ commit }, value) {
      commit('SUBSTRACT_CART_PRICE', value);
      console.log(value);
    },
    setFinalPrice({ commit }, price) {
      commit('SET_FINAL_PRICE', price);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
  },
};

export default cart;
