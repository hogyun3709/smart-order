import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/Drink/ProductList.vue';
import Cart from '@/views/Cart/CartList.vue';
import DrinkInfo from '@/views/Drink/DrinkInfo.vue';

const routes = [
  {
    path: '/',
    name: 'ProductList',
    components: { main: ProductList },
  },
  {
    path: '/drink/testId',
    name: 'Home',
    components: { main: DrinkInfo },
  },
  {
    path: '/cart',
    name: 'Cart',
    components: { main: Cart },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
