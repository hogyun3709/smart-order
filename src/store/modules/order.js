const order = {
  namespaced: true,
  state: {
    orderSummary: [],
  },
  getters: {
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
    ADD_ORDER(state, orderInfo) {
      state.orderSummary.push(orderInfo);
    },
  },
  actions: {
    addOrder({ commit }, orderInfo) {
      commit('ADD_ORDER', orderInfo);
    },
  },
};

export default order;
