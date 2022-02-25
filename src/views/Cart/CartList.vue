<template>
  <div>
    <h2>장바구니</h2>

    <CartItem
      :name="cart.name"
      :nameEng="cart.nameEng"
      :temperature="cart.temperature"
      :image="cart.image"
      :personalOption="cart.personalOption"
      :defaultPrice="cart.defaultPrice"
      :defaultQuantity="cart.defaultQuantity"
    />
  </div>
</template>

<script>
import CartItem from '@/components/CartListItem.vue';

export default {
  components: {
    CartItem,
  },
};
</script>

<style>
</style>
