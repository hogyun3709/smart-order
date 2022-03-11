import DrinkInfoPage from '@/views/Drink/DrinkInfo.vue';

export default [
  {
    path: '/product/:id',
    name: 'ItemInfo',
    components: {
      main: DrinkInfoPage,
    },
  },
];
