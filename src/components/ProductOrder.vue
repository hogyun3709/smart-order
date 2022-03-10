<template>
  <div
    class="mx-4 mb-16 grid grid-cols-6"
    data-test="drink-draft-order-container"
  >
    <div class="col-start-1 col-end-7" data-test="drink-quantity-counter">
      <button
        class="border-2 border-black rounded-full w-8 h-8 disabled:opacity-25"
        @click="decreQuantity()"
        data-test="drink-counter-decrease"
      >
        -
      </button>
      <span class="mx-2" data-test="drink-quantity">
        <slot name="drinkQuantity"></slot>
      </span>
      <button
        class="border-2 border-black rounded-full w-8 h-8 disabled:opactiy-25"
        @click="increQuantity()"
        data-test="drink-counter-increase"
      >
        +
      </button>
    </div>
    <div
      class="mx-2 text-xl col-start-8 col-end-12"
      data-test="drink-final-price"
    >
      <slot name="finalPrice"></slot>
    </div>
    <button class="my-4 col-start-1 col-end-2" data-test="drink-is-favorite">
      <HeartIcon class="h-5 w-5" />
    </button>
    <div class="col-start-7 col-end-12">
      <button
        class="mx-2 border-2 rounded-full w-16 h-8"
        data-test="drink-to-cart"
        @click="handleProductToCart()"
      >
        담기
      </button>
      <button
        class="
          bg-emerald-400
          hover:bg-emerald-600
          active:bg-emerald-800
          text-white
          border-2
          rounded-full
          w-32
          h-8
        "
        @click="handleOrder()"
        data-test="drink-order"
      >
        주문하기
      </button>
    </div>
  </div>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/outline';

export default {
  name: 'ProductOrder',
  emits: ['updateQuantity', 'proceedOrder', 'updateProductToCart'],
  components: {
    HeartIcon,
  },
  methods: {
    increQuantity() {
      this.$emit('updateQuantity', 1);
    },
    decreQuantity() {
      this.$emit('updateQuantity', -1);
    },
    handleOrder() {
      this.$emit('proceedOrder');
    },
    handleProductToCart() {
      this.$emit('updateProductToCart');
    },
  },
};
</script>

<style>
</style>
