<template>
  <div class="mx-2 my-2 grid grid-cols-4 gap-4" data-test="product-container">
    <img
      class="aspect-square rounded-full w-20 justify-self-center"
      :src="imgUrl"
      alt="drink-image"
      data-test="product-image"
    />
    <div
      class="col-start-2 col-end-6 text-base"
      data-test="product-description"
    >
      <span class="font-bold text-lg" data-test="product-name">
        {{ nameKr }}
      </span>
      <span
        v-if="isNewProduct"
        class="inline-block mx-2 mt-0.5 text-xs align-top italic text-green-500"
      >
        New
      </span>
      <p class="text-xs text-gray-400" data-test="product-name-english">
        {{ nameEng }}
      </p>
      <p data-test="product-price">{{ priceWithFormat }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nameKr: { type: String, default: '' },
    nameEng: { type: String, default: '' },
    price: { type: Number, default: -1 },
    imgUrl: { type: String, default: '' },
    isNewProduct: { type: Boolean, default: false },
  },
  computed: {
    priceWithFormat() {
      return `${this.price.toLocaleString()}원`;
    },
  },
};
</script>

<style>
</style>
