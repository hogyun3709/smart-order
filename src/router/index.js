import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/drink/ProductList.vue';
import Cart from '@/views/cart/CartList.vue';
import DrinkInfo from '@/views/drink/DrinkInfo.vue';

const routes = [
  {
    path: '/',
    name: 'ProductList',
    components: { product_list: ProductList },
  },
  {
    path: '/drink/testId',
    name: 'DrinkInfo',
    components: { drink_info: DrinkInfo },
  },
  {
    path: '/cart',
    name: 'Cart',
    components: { cart: Cart },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
