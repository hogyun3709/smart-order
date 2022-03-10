<template>
  <div class="mx-3 my-3" data-test="cart-list-container">
    <h2 class="text-xl font-bold" data-test="cart-list-title">장바구니</h2>
    <CartItem v-for="cart in carts" :key="cart.product.productNo" v-bind="cart" />
    <MenuBottom />
  </div>
</template>

<script>
import CartItem from '@/components/CartListItem.vue';
import MenuBottom from '@/components/MenuBottom.vue';
import CartApi from '@/api/order/CartApi';

export default {
  components: {
    CartItem,
    MenuBottom,
  },

  data() {
    return {
      carts: [],
    };
  },
  async created() {
    const apiClient = new CartApi();
    const response = await apiClient.getProductsInCart();
    this.carts = response.data.cart;
  },
};
</script>

<style>
</style>
