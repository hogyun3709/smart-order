<template>
  <div class="mx-3 my-3" data-test="product-list-container">
    <h2 class="text-xl font-bold" data-test="menu-list-category-title">
      에스프레소
    </h2>
    <router-link
      v-for="drink in drinks"
      :key="drink.productNo"
      :to="drinkNoPath(drink.productNo)"
    >
      <Product v-bind="drink" class="mx-3 my-3" data-test="product-component" />
    </router-link>
  </div>
  <MenuBottom />
</template>

<script>
import MenuBottom from '@/components/MenuBottom.vue';
import Product from '@/components/ProductListItem.vue';
import DrinkApi from '@/api/drink/DrinkApi';
import ProductsModel from '@/model/drink/products';

export default {
  components: {
    MenuBottom,
    Product,
  },
  data() {
    return {
      drinks: [ProductsModel],
    };
  },
  methods: {
    drinkNoPath(productNo) {
      return `/product/${productNo}`;
    },
  },
  async created() {
    const apiClient = new DrinkApi();
    const response = await apiClient.getProducts();
    const originalDrinks = this.drinks;
    this.drinks = Object.assign(originalDrinks, response.data.products);
  },
};
</script>

<style>
</style>
