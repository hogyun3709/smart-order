<template>
  <div
    id="drink-info"
    class="max-w-full mx-5 inline-block"
    data-test="drink-info"
  >
    <div class="relative" data-test="drink-image-container">
      <img
        class="w-full aspect-square"
        :src="drink.imgUrl"
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
        {{ drink.nameKr }}
      </span>
      <span
        v-if="drink.isNewProduct"
        class="text-xs italic inline-block mx-2 align-text-top text-green-500"
        data-test="drink-is-new"
      >
        New
      </span>
      <span
        v-if="drink.isHot"
        class="text-xs italic inline-block mx-2 align-text-top text-red-500"
        data-test="drink-is-best"
      >
        Best
      </span>
      <p class="mb-2 text-gray-400 text-xs" data-test="drink-name-english">
        {{ drink.nameEng }}
      </p>
      <p class="text-sm" data-test="drink-description">
        {{ drink.description }}
      </p>
      <span
        v-if="drink.price"
        class="my-3 inline-block text-lg font-bold my-2"
        data-test="drink-default-price"
      >
        {{ priceWithFormat(drink.price) }}
      </span>
    </div>
    <div data-test="drink-select-temperature-container">
      <button
        class="
          bg-white-500
          hover:bg-red-700 hover:text-white
          active:bg-red-700/75
          text-black
          font-bold
          py-2
          rounded
          w-1/2
          border
        "
        :class="drink.temperature === 'HOT' ? 'bg-red-700 !text-white' : ''"
        data-test="drink-select-hot"
        @click="setTemperature('HOT')"
      >
        HOT
      </button>
      <button
        class="
          bg-white-500
          hover:bg-blue-700 hover:text-white
          active:bg-blue-700/75
          text-black
          font-bold
          py-2
          rounded
          w-1/2
          border
        "
        :class="drink.temperature === 'ICE' ? 'bg-blue-700 !text-white' : ''"
        data-test="drink-select-ice"
        @click="setTemperature('ICE')"
      >
        ICE
      </button>
    </div>
    <div data-test="drink-select-size-container">
      <h4 class="my-3" data-test="drink-select-size-title">사이즈</h4>
      <button
        v-for="size in drink.cupSizes"
        :key="size.optionNo"
        :data-test="`drink-size-${size.name}`"
        class="
          w-1/4
          border
          hover:bg-teal-500 hover:text-white
          active:bg-teal-500/75
        "
      >
        <p class="my-1">
          <i :class="size.icon" :data-test="`drink-size-${size.icon}`" />
        </p>
        {{ size.name }}
      </button>
    </div>
    <div data-test="drink-select-cup-type-container">
      <h4 class="my-3" data-test="drink-select-cup-type-title">컵 선택</h4>
      <button
        v-for="cupType in drink.cupTypes"
        :key="cupType"
        class="
          bg-white-500
          hover:bg-cyan-500 hover:text-white
          active:bg-cyan-500/75
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
    <h4
      class="my-3 col-start-1 col-end-7"
      data-test="drink-personal-option-title"
    >
      퍼스널 옵션
    </h4>
    <div
      class="grid grid-cols-6 grid-flow-col"
      data-test="drink-personal-option-container"
    >
      <div
        v-for="option in drink.options"
        :key="option.optionNo"
        class="col-start-1 col-end-7 my-0.5"
        data-test="drink-personal-option-name"
      >
        {{ option.name }}
      </div>
      <div
        v-for="(option, index) in drink.options"
        :key="option.optionNo"
        class="col-start-8 col-end-12 my-0.5"
        data-test="drink-personal-option-counter"
      >
        <button
          class="border-2 border-black rounded-full w-7 h-7 disabled:opacity-25"
          :disabled="option.baseQuantity <= 1"
          @click="decreOption(index)"
          data-test="decrease-button"
        >
          -
        </button>
        <span class="mx-2" data-test="personal-option-quantity">
          {{ option.baseQuantity }}
        </span>
        <button
          class="border-2 border-black rounded-full w-7 h-7 disabled:opacity-25"
          :disabled="option.baseQuantity >= 10"
          @click="increOption(index)"
          data-test="increase-button"
        >
          +
        </button>
      </div>
    </div>
    <hr class="my-3" />
    <div
      class="mx-4 mb-16 grid grid-cols-6"
      data-test="drink-draft-order-container"
    >
      <div class="col-start-1 col-end-7" data-test="drink-quantity-counter">
        <button
          class="border-2 border-black rounded-full w-8 h-8 disabled:opacity-25"
          :disabled="drink.defaultQuantity <= 1"
          @click="decrementDrinkQuantity()"
          data-test="drink-counter-decrease"
        >
          -
        </button>
        <span class="mx-2" data-test="drink-quantity">{{
          drink.defaultQuantity
        }}</span>
        <button
          class="border-2 border-black rounded-full w-8 h-8 disabled:opactiy-25"
          :disabled="drink.defaultQuantity >= 10"
          @click="incrementDrinkQuantity()"
          data-test="drink-counter-increase"
        >
          +
        </button>
      </div>
      <div
        class="mx-2 text-xl col-start-8 col-end-12"
        data-test="drink-final-price"
      >
        {{ finalPriceWithFormat }}
      </div>
      <button class="my-4 col-start-1 col-end-2" data-test="drink-is-favorite">
        <HeartIcon class="h-5 w-5" />
      </button>
      <div class="col-start-7 col-end-12">
        <button
          class="mx-2 border-2 rounded-full w-16 h-8"
          data-test="drink-to-cart"
          @click="addProductToCart()"
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
          @click="addOrder()"
          data-test="drink-order"
        >
          주문하기
        </button>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <ConfirmOrderMessage :isAddOrder="isAddOrder"> </ConfirmOrderMessage>
  </Teleport>
  <MenuBottom />
</template>

<script>
import { ShareIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/vue/outline';
import MenuBottom from '@/components/MenuBottom.vue';
import DrinkDetail from '@/model/drink/drinkDetail';
import DrinkApi from '@/api/drink/DrinkApi';
import CartApi from '@/api/order/CartApi';
import OrderApi from '@/api/order/OrderApi';
import ConfirmOrderMessage from '@/components/modal/OrderModal.vue';

export default {
  components: {
    MenuBottom,
    ShareIcon,
    ChevronLeftIcon,
    HeartIcon,
    ConfirmOrderMessage,
  },

  data() {
    return {
      drink: DrinkDetail,
      isAddToCart: '',
      isAddOrder: '',
    };
  },
  async created() {
    const apiClient = new DrinkApi();
    const response = await apiClient.getProductDetail(this.$route.params.id);
    const originalDrinks = this.drink;
    this.drink = Object.assign(originalDrinks, response.data.product);
  },
  methods: {
    priceWithFormat(price) {
      return `${price.toLocaleString()}원`;
    },
    setTemperature(value) {
      this.drink.temperature = value;
    },
    increOption(idx) {
      this.drink.options[idx].baseQuantity += 1;
    },
    decreOption(idx) {
      this.drink.options[idx].baseQuantity -= 1;
    },
    incrementDrinkQuantity() {
      this.drink.defaultQuantity += 1;
    },
    decrementDrinkQuantity() {
      this.drink.defaultQuantity -= 1;
    },
    async addProductToCart() {
      const apiClient = new CartApi();
      const payload = {
        productNo: this.drink.productNo,
        quantity: this.drink.defaultQuantity,
        options: this.drink.options,
      };
      console.log(payload);
      const response = await apiClient.addItemToCart(payload);
      this.isAddToCart = response.data.result;
      console.log('cart', this.isAddToCart);
    },
    async addOrder() {
      const apiClient = new OrderApi();
      const response = await apiClient.createOrder();
      this.isAddOrder = response.data.result;
      console.log(this.isAddOrder);
    },
  },
  computed: {
    personalOptionQuantity() {
      return this.drink.personalOption.espressoShot.defaultQuantity;
    },
    finalPriceWithFormat() {
      const price = this.drink.defaultPrice;
      const quantity = this.drink.defaultQuantity;
      const { options } = this.drink;
      let optPriceTotal = 0;

      for (let i = 0; i < options.length; i += 1) {
        const optPrice = options[i].unitprice * options[i].baseQuantity;
        optPriceTotal += optPrice;
      }

      const finalPrice = (price + optPriceTotal) * quantity;

      return `${finalPrice.toLocaleString()}원`;
    },
  },
};
</script>

<style>
</style>
