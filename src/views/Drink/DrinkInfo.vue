<template>
  <div
    id="drink-info"
    class="max-w-full mx-5 inline-block"
    data-test="drink-info"
  >
    <div class="relative -mx-5" data-test="drink-image-container">
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
          bg-transparent
          text-white
          p-2
          rounded-full
          hover:bg-white hover:text-black
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
          bg-transparent
          text-white
          p-2
          rounded-full
          hover:bg-white hover:text-black
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
        @click="setCupSize(size.optionNo)"
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
    <ProductOption
      v-for="option in drink.options"
      :key="option.optionNo"
      :option="option"
      @updateOption="changeOption"
    >
      <template v-slot:optionQuantity>
        {{ currentOptionQuantity(option.optionNo) }}
      </template>
    </ProductOption>
    <hr class="my-3" />
    <ProductOrder
      @updateQuantity="changeQuantity"
      @proceedOrder="addOrder"
      @updateProductToCart="addProductToCart"
    >
      <template v-slot:finalPrice>
        {{ finalPrice }}
      </template>
      <template v-slot:drinkQuantity>
        {{ order.quantity }}
      </template>
    </ProductOrder>
  </div>
  <Teleport to="body">
    <ConfirmOrderDialog :isAddOrder="isAddOrder"> </ConfirmOrderDialog>
    <ConfirmAddedToCartDialog
      :isAddedToCart="isAddedToCart"
    ></ConfirmAddedToCartDialog>
  </Teleport>
  <MenuBottom />
</template>

<script>
import { ShareIcon, ChevronLeftIcon } from '@heroicons/vue/outline';
import MenuBottom from '@/components/MenuBottom.vue';
import DrinkDetail from '@/model/drink/drinkDetail';
import ProductToCart from '@/model/drink/productToCart';
import DrinkApi from '@/api/drink/DrinkApi';
import CartApi from '@/api/order/CartApi';
import OrderApi from '@/api/order/OrderApi';
import ConfirmOrderDialog from '@/components/modal/OrderModal.vue';
import ConfirmAddedToCartDialog from '@/components/modal/ProductToCartModal.vue';
import ProductOption from '@/components/ProductOption.vue';
import ProductOrder from '@/components/ProductOrder.vue';

export default {
  components: {
    MenuBottom,
    ShareIcon,
    ChevronLeftIcon,
    ConfirmOrderDialog,
    ConfirmAddedToCartDialog,
    ProductOption,
    ProductOrder,
  },

  data() {
    return {
      order: ProductToCart,
      drink: DrinkDetail,
      isAddedToCart: '',
      isAddOrder: '',
    };
  },
  async created() {
    const apiClient = new DrinkApi(this.apiClient);
    const response = await apiClient.getProductDetail(this.$route.params.id);
    this.drink = Object.assign(this.drink, response.data.product);
    this.order.options = this.initOption();
  },
  methods: {
    initOption() {
      return this.drink.options.map((option) => ({
        ...option,
        quantity: option.baseQuantity,
      }));
    },
    isOptionChangeable(orderOptionIndex, optionVal) {
      const currentQuantity = this.order.options[orderOptionIndex].quantity;
      const { baseQuantity } = this.drink.options[orderOptionIndex];
      return optionVal > 0 || (optionVal < 0 && currentQuantity > baseQuantity);
    },
    changeOption(e) {
      const { optionNo, value } = e;
      const orderOptionIndex = this.order.options.findIndex(
        (option) => option.optionNo === optionNo,
      );
      if (this.isOptionChangeable(orderOptionIndex, value)) {
        this.order.options[orderOptionIndex].quantity += value;
      }
    },
    isQuantityChangeable(optionVal) {
      return optionVal > 0 || (optionVal < 0 && this.order.quantity > 1);
    },
    changeQuantity(e) {
      if (this.isQuantityChangeable(e)) {
        this.order.quantity += e;
      }
    },
    currentOptionQuantity(optionNo) {
      return this.order.options.find((option) => option.optionNo === optionNo)
        .quantity;
    },
    findOptionInOrder(optionNo) {
      return this.order.options.find((option) => option.optionNo === optionNo);
    },
    priceWithFormat(price) {
      return `${price.toLocaleString()}원`;
    },
    setTemperature(value) {
      this.drink.temperature = value;
    },
    setCupSize(value) {
      this.order.cupsize = value;
    },
    async addProductToCart() {
      const apiClient = new CartApi(this.apiClient);
      const payload = {
        productNo: Number(this.$route.params.id),
        quantity: this.order.quantity,
        options: this.order.options,
        cupSize: this.order.cupSize,
      };
      const response = await apiClient.addItemToCart(payload);
      this.isAddedToCart = response.data.result;
    },
    async addOrder() {
      const apiClient = new OrderApi(this.apiClient);
      const response = await apiClient.createOrder();
      this.isAddOrder = response.data.result;
    },
  },
  computed: {
    optionPriceTotal() {
      return this.order.options
        .map(
          (option) => option.unitprice * (option.quantity - option.baseQuantity),
        )
        .reduce((prev, current) => prev + current, 0);
    },
    finalPrice() {
      return `${(
        (this.drink.price + this.optionPriceTotal)
        * this.order.quantity
      ).toLocaleString()}원`;
    },
  },
};
</script>

<style>
</style>
