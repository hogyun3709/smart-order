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
      :src="image"
      alt="cart-item-image"
      data-test="cart-item-image"
    />
    <div
      class="col-start-2 col-end-6 flex items-center"
      data-test="cart-item-name-container"
    >
      <div>
        <p class="font-bold" data-test="cart-item-name">
          {{ name }}
        </p>
        <p class="text-gray-300 text-xs" data-test="cart-item-name-english">
          {{ nameEng }}
        </p>
      </div>
    </div>
    <div
      class="grid col-start-2 col-end-6 justify-items-start"
      data-test="cart-item-choice-detail-container"
    >
      <div data-test="cart-primary-choice-container">
        <span class="text-gray-500" data-test="cart-item-temperature">
          {{ temperature }}
        </span>
        <span class="text-gray-500" data-test="cart-item-size">
          | {{ size }}
        </span>
        <span class="text-gray-500" data-test="cart-item-cup-type">
          | {{ cupType }}
        </span>
      </div>
      <div
        class="text-gray-500"
        v-for="option in personalOption"
        :key="option.name"
        data-test="cart-option-detail-container"
      >
        <span data-test="cart-option-name">{{ option.name }}</span>
        <span class="mx-2" data-test="cart-option-quantity">
          {{ option.defaultQuantity }}
        </span>
      </div>
    </div>
    <div
      class="grid col-start-7 col-span-2 justify-items-end"
      data-test="cart-item-price-container"
    >
      <span class="text-gray-500" data-test="cart-item-default-price">
        {{ priceWithFormat(defaultPrice) }}
      </span>
      <div v-for="option in personalOption" :key="option.name">
        <span class="text-gray-500" data-test="cart-option-price">
          {{ priceWithFormat(option.price) }}
        </span>
      </div>
    </div>
    <div class="col-start-2 col-end-6" data-test="cart-item-counter">
      <button
        class="border-2 border-black rounded-full w-7 h-7 disabled:opacity-25"
        :disabled="defaultQuantity <= 1"
        data-test="cart-option-decrease-button"
      >
        -
      </button>
      <span class="mx-4" data-test="cart-item-quantity">
        {{ defaultQuantity }}
      </span>
      <button
        class="border-2 border-black rounded-full w-7 h-7 disabled:opacity-25"
        :disabled="defaultQuantity >= 10"
        data-test="cart-option-increase-button"
      >
        +
      </button>
    </div>
    <div
      class="grid col-start-7 col-span-2 justify-items-end"
      data-test="cart-item-final-price"
    >
      {{ finalPriceWithformat }}
    </div>
  </div>
  <hr class="my-4" />
</template>

<script>
export default {
  props: {
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    nameEng: { type: String, default: '' },
    temperature: { type: String, default: null },
    size: { type: String, default: '' },
    cupType: { type: String, default: '' },
    image: { type: String, defaul: '' },
    personalOption: {
      type: Object,
      default() {
        return {};
      },
      name: { type: String, default: '' },
      defaultQuantity: { type: Number, default: -1 },
      price: { type: Number, default: -1 },
    },
    defaultPrice: { type: Number, default: -1 },
    defaultQuantity: { type: Number, default: -1 },
  },
  methods: {
    priceWithFormat(price) {
      return `${price.toLocaleString()}원`;
    },
  },
  computed: {
    finalPriceWithformat() {
      const price = this.defaultPrice;
      const quantity = this.defaultQuantity;
      const opt = this.personalOption;

      let optPrice = 0;

      for (let i = 0; i < this.personalOption.length; i += 1) {
        optPrice += opt[i].defaultQuantity * opt[i].price;
      }

      const finalPrice = (price + optPrice) * quantity;
      return `${finalPrice.toLocaleString()}원`;
    },
  },
};
</script>
<style>
</style>
