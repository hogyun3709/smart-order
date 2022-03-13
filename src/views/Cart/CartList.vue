<template>
  <div class="mx-3 my-3" data-test="cart-list-container">
    <h2 class="text-xl font-bold" data-test="cart-list-title">장바구니</h2>
    <div v-if="!isLoading">
      <CartItem
        v-for="(cart, index) in getCartItems"
        :key="index"
        v-bind="cart"
      />
    </div>
    <div v-else>
      <LoadingProduct></LoadingProduct>
    </div>
    <MenuBottom />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '@/components/CartListItem.vue';
import MenuBottom from '@/components/MenuBottom.vue';
import CartApi from '@/api/order/CartApi';
import LoadingProduct from '@/components/Loading/LoadingProduct.vue';

export default {
  components: {
    CartItem,
    MenuBottom,
    LoadingProduct,
  },

  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters(['getCartItems']),
  },
  async created() {
    const apiClient = new CartApi(this.apiClient);
    const response = await apiClient.getProductsInCart();
    this.$store.dispatch('setCartItem', response.data.cart);
    this.isLoading = false;
  },
};
</script>

<style>
</style>
