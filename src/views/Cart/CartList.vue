<template>
  <div class="mx-3 my-3" data-test="cart-list-container">
    <h2 class="text-xl font-bold" data-test="cart-list-title">장바구니</h2>
    <hr class="my-4" />
    <div v-if="getCartItems.length === 0">
      <h3>장바구니가 비었어요!</h3>
    </div>
    <div v-if="!isLoading">
      <CartItem
        v-for="(cart, index) in getCartItems"
        :key="index"
        :index="index"
        v-bind="cart"
      />
    </div>
    <div v-else>
      <LoadingProduct></LoadingProduct>
    </div>
    <h3>{{ finalCartItemPrice }}</h3>
    <button
      class="
        bg-green-500
        hover:bg-green-500/75
        active:bg-green-500/50
        text-white
        font-bold
        py-2
        px-4
        rounded
        w-full
        my-2
        mb-16
      "
      @click="proceedOrder()"
      data-test="go-order-page-button"
    >
      주문하기
    </button>
    <div class="mb-16 inline-block"></div>
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
  methods: {
    proceedOrder() {
      this.$store.dispatch('addOrderFromCart', {
        name: this.getCartItemsDescription,
        price: this.getCartItemsFinalPrice,
      });
      this.$router.push('/order');
    },
  },
  unmounted() {
    this.$store.dispatch('cart/clearCart');
  },
  computed: {
    ...mapGetters('cart', [
      'getCartItems',
      'getCartItemsFinalPrice',
      'getCartItemsDescription',
    ]),
    finalCartItemPrice() {
      return `전체 합계: ${this.getCartItemsFinalPrice.toLocaleString()}원`;
    },
  },
  async created() {
    const apiClient = new CartApi(this.apiClient);
    const response = await apiClient.getProductsInCart();
    this.$store.dispatch('cart/setCartItem', response.data.cart);
    this.isLoading = false;
  },
};
</script>

<style>
</style>
