import LogInPage from '@/views/auth/LogInPage.vue';
import SignInPage from '@/views/auth/SignInPage.vue';
import MyPage from '@/views/auth/MyPage.vue';
import ProductList from '../views/Drink/ProductList.vue';
import Cart from '../views/Cart/CartList.vue';

export default [
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
    path: '/cart',
    name: 'Cart',
    components: { main: Cart },
  },
  {
    path: '/mypage',
    name: 'MyPage',
    components: { main: MyPage },
  },
];
