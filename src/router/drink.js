import DrinkInfoPage from '@/views/drink/DrinkInfo.vue';

export default [
  {
    path: '/product/:id',
    name: 'ItemInfo',
    components: {
      main: DrinkInfoPage,
    },
  },
];
