<template>
  <div class="mx-3 my-3">
    <h2 class="text-xl font-bold">주문확인</h2>
    <h4>{{ getOrderDescription }}</h4>
    <p>{{ getOrderTotalPrice }}을 결제합니다</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('order', ['getOrderDescription', 'getOrderTotalPrice']),
  },
};
</script>

<style>
</style>
