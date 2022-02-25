<template>
  <div data-test="product-list-container">
    <h2
      class="mx-3 my-3 text-xl font-bold"
      data-test="menu-list-category-title"
    >
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

export default {
  components: {
    MenuBottom,
    Product,
  },
  data() {
    return {
      drinks: [
        {
          id: 'E1',
          name: '에스프레소',
          nameEng: 'Espresso',
          price: 4000,
          imageUrl: 'https://coffee.alexflipnote.dev/random',
          status: null,
        },
        {
          id: 'E2',
          name: '카페 라떼',
          nameEng: 'Cafe Latte',
          price: 5000,
          imageUrl: 'https://coffee.alexflipnote.dev/random',
          status: 'New',
        },
        {
          id: 'E3',
          name: '아메리카노',
          nameEng: 'Americano',
          price: 4500,
          imageUrl: 'https://coffee.alexflipnote.dev/random',
          status: 'Hot',
        },
      ],
    };
  },
};
</script>

<style>
</style>
