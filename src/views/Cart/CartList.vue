<template>
  <div class="mx-3 my-3" data-test="cart-list-container">
    <h2 class="text-xl font-bold" data-test="cart-list-title">장바구니</h2>
    <CartItem
      v-for="cart in carts"
      :key="cart.id"
      v-bind="cart"
      class="mx-3 my-3"
      data-test="cart-component"
    />
    <MenuBottom />
  </div>
</template>

<script>
import CartItem from '@/components/CartListItem.vue';
import MenuBottom from '@/components/MenuBottom.vue';

export default {
  components: {
    CartItem,
    MenuBottom,
  },
  data() {
    return {
      carts: [
        {
          id: 'E2',
          name: '카페 라떼',
          nameEng: 'Caffe Latte',
          temperature: 'Hot',
          size: 'Tall',
          cupType: '개인 컵',
          image: 'https://coffee.alexflipnote.dev/random',
          personalOption: [
            {
              name: '에스프레소 샷',
              defaultQuantity: 1,
              price: 500,
            },
            {
              name: '바닐라 시럽',
              defaultQuantity: 1,
              price: 400,
            },
          ],
          defaultPrice: 5000,
          defaultQuantity: 1,
        },
        {
          id: 'E3',
          name: '에스프레소',
          nameEng: 'Espresso',
          temperature: 'Hot',
          size: 'Tall',
          cupType: '개인 컵',
          image: 'https://coffee.alexflipnote.dev/random',
          personalOption: {
            espressoShot: {
              name: '에스프레소 샷',
              defaultQuantity: 1,
              price: 500,
            },
            syrup: {
              name: '헤이즐럿 시럽',
              defaultQuantity: 1,
              price: 700,
            },
          },
          defaultPrice: 4000,
          defaultQuantity: 1,
        },
      ],
    };
  },
};
</script>

<style>
</style>
