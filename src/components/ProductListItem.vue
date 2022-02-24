<template>
  <div class="mx-2 my-2 grid grid-cols-4 gap-4" data-test="product-container">
    <img
      class="aspect-square rounded-full"
      :src="imageUrl"
      alt="drink-image"
      data-test="product-image"
    />
    <div
      class="col-start-2 col-end-6 text-base"
      data-test="product-description"
    >
      <span class="font-bold text-lg" data-test="product-name">
        {{ name }}
      </span>
      <span
        class="inline-block mx-2 mt-0.5 text-xs align-top italic"
        :class="{
          'text-red-500': status === 'Hot',
          'text-green-500': status === 'New',
        }"
        data-test="product-status"
      >
        {{ status }}
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
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    nameEng: { type: String, default: '' },
    price: { type: Number, default: -1 },
    imageUrl: { type: String, default: '' },
    status: { type: String, default: null },
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
