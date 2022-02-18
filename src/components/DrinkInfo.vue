<template>
  <div id="drink-info" class="max-w-full mx-5" data-test="drink-info">
    <div class="relative" data-test="drink-image-container">
      <img
        class="aspect-square"
        :src="drink.image"
        alt="drink-image"
        data-test="drink-image"
      />
      <button
        class="
          absolute
          top-0
          bg-slate-400
          text-white
          p-2
          rounded
          hover:bg-blue-600
          m-2
        "
        data-test="drink-image-prev-page-button"
      >
        <ChevronLeftIcon class="h-5 w-5" />
      </button>
      <button
        class="
          absolute
          top-0
          right-0
          bg-slate-400
          text-white
          p-2
          rounded
          hover:bg-blue-600
          m-2
        "
        data-test="drink-image-share-button"
      >
        <ShareIcon class="h-5 w-5" />
      </button>
    </div>
    <div data-test="drink-description-container">
      <span class="text-xl font-bold my-2 inline-block" data-test="drink-name">
        {{ drink.name }}
      </span>
      <span
        v-if="drink.isBest"
        class="text-red-500 text-xs italic"
        data-test="drink-isBest"
      >
        Best
      </span>
      <p class="text-sm" data-test="drink-description">
        {{ drink.description }}
      </p>
      <span class="text-lg font-bold my-2" data-test="drink-default-price">
        {{ priceWithFormat(drink.defaultPrice) }}
      </span>
    </div>
  </div>
  <MenuBottom />
</template>

<script>
import { ShareIcon, ChevronLeftIcon } from '@heroicons/vue/outline';
import MenuBottom from '@/components/MenuBottom.vue';

export default {
  components: {
    MenuBottom,
    ShareIcon,
    ChevronLeftIcon,
  },
  data() {
    return {
      drink: {
        image: 'https://coffee.alexflipnote.dev/random',
        name: '카페라떼',
        isBest: true,
        description:
          '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
        defaultPrice: 5000,
      },
    };
  },
  methods: {
    priceWithFormat(price) {
      return `${price.toLocaleString()}원`;
    },
  },
};
</script>

<style>
</style>
