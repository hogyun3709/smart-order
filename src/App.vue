<template>
  <div class="grid content-center max-w-screen-sm mx-auto min-w-375">
    <!-- <DrinkInfo /> -->
    <ProductList />
  </div>
</template>

<script>
// import DrinkInfo from './components/DrinkInfo.vue';
import ProductList from './components/ProductList.vue';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'App',
  components: {
    // DrinkInfo,
    ProductList,
  },
};
</script>

<style>
.min-w-375 {
  min-width: 375px;
}
</style>
