<template>
  <div class="mx-3 my-3" data-test="product-list-container">
    <h2 class="text-xl font-bold" data-test="menu-list-category-title">
      에스프레소
    </h2>
    <Product
      v-for="drink in drinks"
      :key="drink.id"
      v-bind="drink"
      class="mx-3 my-3"
      data-test="product-component"
    />
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
