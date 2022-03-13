<template>
  <div class="mx-2 my-2 grid grid-cols-4 gap-2" data-test="cart-item-container">
    <img
      class="
        col-start-1 col-end-2
        aspect-square
        rounded-full
        w-24
        justify-self-center
      "
      :src="product.imgUrl"
      alt="cart-item-image"
      data-test="cart-item-image"
    />
    <div
      class="col-start-2 col-end-6 flex items-center"
      data-test="cart-item-name-container"
    >
      <div>
        <p class="font-bold" data-test="cart-item-name">
          {{ product.nameKr }}
        </p>
        <p class="text-gray-300 text-xs" data-test="cart-item-name-english">
          {{ product.nameEng }}
        </p>
      </div>
    </div>
    <button
      class="grid col-start-7 col-span-2 justify-items-end"
      @click="removeCartItem(index)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 hover:animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <div
      class="grid col-start-2 col-end-6 justify-items-start"
      data-test="cart-item-choice-detail-container"
    >
      <div data-test="cart-primary-choice-container">
        <span class="text-gray-500" data-test="cart-item-size">
          {{ cupSize.name }}
        </span>
      </div>
      <div class="grid col-start-1 col-end-2">
        <span
          v-for="option in optionsInfo"
          :key="option.optionNo"
          class="text-gray-500"
          data-test="cart-option-name"
          >{{ option.name }}</span
        >
      </div>
      <div class="grid col-start-2 col-end-3">
        <span
          v-for="option in options"
          :key="option.optionNo"
          class="text-gray-500"
          data-test="cart-option-quantity"
        >
          {{ option.quantity }} 개
        </span>
      </div>
    </div>
    <div
      class="grid col-start-7 col-span-2 justify-items-end"
      data-test="cart-item-price-container"
    >
      <span class="text-gray-500" data-test="cart-item-default-price">
        {{ priceWithFormat(product.price) }}
      </span>
      <div v-for="option in optionsInfo" :key="option.optionNo">
        <span class="text-gray-500" data-test="cart-option-price">
          {{ priceWithFormat(option.unitprice) }}
        </span>
      </div>
    </div>
    <div class="col-start-2 col-end-6" data-test="cart-item-counter">
      <button
        class="border-2 border-black rounded-full w-7 h-7"
        data-test="cart-option-decrease-button"
      >
        -
      </button>
      <span class="mx-4" data-test="cart-item-quantity">
        {{ quantity }}
      </span>
      <button
        class="border-2 border-black rounded-full w-7 h-7"
        data-test="cart-option-increase-button"
      >
        +
      </button>
    </div>
    <div
      class="grid col-start-7 col-span-2 justify-items-end"
      data-test="cart-item-final-price"
    >
      {{ finalPrice }}
    </div>
  </div>
  <hr class="my-4" />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    product: {
      type: Object,
      default() {
        return {
          productNo: { type: Number, default: -1 },
          nameKr: { type: String, default: '' },
          nameEng: { type: String, default: '' },
          isNewProduct: { type: Boolean, default: false },
          isHot: { type: Boolean, default: false },
          imgUrl: { type: String, default: '' },
          price: { type: Number, default: -1 },
        };
      },
    },
    quantity: { type: Number, default: -1 },
    cupSize: {
      type: Object,
      default() {
        return {
          optionNo: { type: Number, default: -1 },
          name: { type: String, default: '' },
        };
      },
    },
    options: {
      type: Object,
      default() {
        return {
          optionNo: { type: Number, default: -1 },
          quantity: { type: Number, default: -1 },
        };
      },
    },
    optionsInfo: {
      type: Object,
      default() {
        return {
          name: { type: String, default: '' },
          unitprice: { type: Number, default: -1 },
          baseQuantity: { type: Number, default: -1 },
          optionNo: { type: Number, default: -1 },
        };
      },
    },
  },
  methods: {
    ...mapActions('cart', ['removeCartItem']),

    priceWithFormat(price) {
      return price ? `${price.toLocaleString()}원` : '';
    },
  },
  created() {
    this.$store.dispatch('cart/setFinalPrice', this.finalPriceNonFormat);
  },
  computed: {
    optionPriceTotal() {
      let total = 0;
      for (let i = 0; i < this.options.length; i += 1) {
        total
          += this.options[i].quantity * this.optionsInfo[i].unitprice
          - this.optionsInfo[i].baseQuantity * this.optionsInfo[i].unitprice;
      }
      return total;
    },
    finalPrice() {
      return `${(
        (this.product.price + this.optionPriceTotal)
        * this.quantity
      ).toLocaleString()}원`;
    },
    finalPriceNonFormat() {
      return (this.product.price + this.optionPriceTotal) * this.quantity;
    },
  },
};
</script>
<style>
</style>
