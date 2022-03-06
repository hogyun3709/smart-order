<template>
  <div class="mx-3 my-3" data-test="cart-list-container">
    <h2 class="text-xl font-bold" data-test="cart-list-title">장바구니</h2>
    <CartItem v-for="cart in carts" :key="cart.id" v-bind="cart" />
    <MenuBottom />
  </div>
</template>

<script>
import CartItem from '@/components/CartListItem.vue';
import MenuBottom from '@/components/MenuBottom.vue';
import CartModel from '@/model/cart/cart';

export default {
  components: {
    CartItem,
    MenuBottom,
  },

  data() {
    return {
      carts: [CartModel],
    };
  },
  methods: {},
};
</script>

<style>
</style>
