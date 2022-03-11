import { createRouter, createWebHistory } from 'vue-router';
import baseRoute from '@/router/base';
import drinkRoute from '@/router/drink';

const finalRoute = [].concat(baseRoute, drinkRoute);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: finalRoute,
});

export default router;
