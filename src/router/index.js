import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/drink/ProductList.vue';
import Cart from '@/views/cart/CartList.vue';
import DrinkInfo from '@/views/drink/DrinkInfo.vue';
import LogInPage from '@/views/auth/LogInPage.vue';
import SignInPage from '@/views/auth/SignInPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: { main: LogInPage },
  },
  {
    path: '/signin',
    name: 'SignIn',
    components: { main: SignInPage },
  },
  {
    path: '/product',
    name: 'ProductList',
    components: { main: ProductList },
  },
  {
    path: '/drink/testId',
    name: 'DrinkInfo',
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
