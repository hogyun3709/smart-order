<template>
  <div
    id="drink-info"
    class="max-w-full mx-5 inline-block"
    data-test="drink-info"
  >
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
    <div data-test="drink-select-temperature-container">
      <button
        class="
          bg-white-500
          hover:bg-red-700 hover:text-white
          text-black
          font-bold
          py-2
          rounded
          w-1/2
          border
        "
        data-test="drink-select-hot"
        @click="setTemperature('HOT')"
      >
        HOT
      </button>
      <button
        class="
          bg-white-500
          hover:bg-blue-700 hover:text-white
          text-black
          font-bold
          py-2
          rounded
          w-1/2
          border
        "
        data-test="drink-select-ice"
        @click="setTemperature('ICE')"
      >
        ICE
      </button>
    </div>
    <div data-test="drink-select-size-container">
      <h4 class="my-3" data-test="drink-select-size-title">사이즈</h4>
      <button
        v-for="size in drink.sizes"
        :key="size.text"
        :data-test="`drink-size-${size.text}`"
        class="w-1/4 border"
      >
        <p class="my-1">
          <i :class="size.icon" :data-test="`drink-size-${size.icon}`" />
        </p>
        {{ size.text }}
      </button>
    </div>
    <div data-test="drink-select-cup-type-container">
      <h4 class="my-3" data-test="drink-select-cup-type-title">컵 선택</h4>
      <button
        v-for="cupType in drink.cupTypes"
        :key="cupType"
        class="
          bg-white-500
          hover:bg-red-700 hover:text-white
          text-black
          font-bold
          py-2
          rounded
          w-1/3
          border
        "
        :data-test="`drink-select-${cupType}`"
      >
        {{ cupType }}
      </button>
    </div>
    <div
      class="mb-16 grid grid-cols-6"
      data-test="drink-personal-option-container"
    >
      <h4
        class="my-3 col-start-1 col-end-3"
        data-test="drink-personal-option-title"
      >
        퍼스널 옵션
      </h4>
      <div class="col-start-1 col-end-3" data-test="drink-personal-option-name">
        {{ drink.personalOption.espressoShot.name }}
      </div>
      <div
        class="col-start-8 col-end-12"
        data-test="drink-personal-option-espresso-counter"
      >
        <button
          class="border-2 rounded-full w-8 h-8"
          @click="decrementEspressoShot()"
          data-test="decrease-button"
        >
          -
        </button>
        <span class="mx-2" data-test="personal-option-quantity">
          {{ personalOptionQuantity }}
        </span>
        <button
          class="border-2 rounded-full w-8 h-8"
          @click="incrementEspressoShot()"
          data-test="increase-button"
        >
          +
        </button>
      </div>
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
        temperature: null,
        sizes: [
          {
            icon: 'fa-solid fa-mug-saucer fa-xs',
            text: 'Short',
          },
          {
            icon: 'fa-solid fa-mug-saucer fa-sm',
            text: 'Tall',
          },
          {
            icon: 'fa-solid fa-mug-saucer fa-lg',
            text: 'Grande',
          },
          {
            icon: 'fa-solid fa-mug-saucer fa-xl',
            text: 'Venti',
          },
        ],
        cupTypes: ['매장 컵', '개인 컵', '일회용 컵'],
        personalOption: {
          espressoShot: {
            name: '에스프레소 샷',
            defaultQuantity: 1,
            price: 500,
          },
        },
      },
    };
  },
  methods: {
    priceWithFormat(price) {
      return `${price.toLocaleString()}원`;
    },
    setTemperature(value) {
      this.drink.temperature = value;
    },
    incrementEspressoShot() {
      this.drink.personalOption.espressoShot.defaultQuantity += 1;
    },
    decrementEspressoShot() {
      this.drink.personalOption.espressoShot.defaultQuantity -= 1;
    },
  },
  computed: {
    personalOptionQuantity() {
      return this.drink.personalOption.espressoShot.defaultQuantity;
    },
  },
};
</script>

<style>
</style>
