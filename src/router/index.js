import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/ProductList.vue';
import Cart from '@/views/Cart/CartPage.vue';
import DrinkInfo from '@/components/DrinkInfo.vue';

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
