<template>
  <h2 class="mx-5 my-5 text-xl font-bold">주문확인</h2>
  <div class="grid grid-cols-6 gap-4 content-center">
    <div class="col-start-2 col-span-4">
      <h4>{{ getOrderDescription }}</h4>
      <p>{{ getOrderTotalPrice }}을 결제합니다</p>
      <hr class="my-4" />
      <button
        class="
          bg-emerald-400
          hover:bg-emerald-600
          active:bg-emerald-800
          text-white
          border-2
          rounded-full
          w-32
          h-8
        "
        @click="proceedOrder()"
        data-test="proceed-order-button"
      >
        결제 진행하기
      </button>
    </div>
  </div>
  <Teleport to="body">
    <confirm-order-complete-dialog
      :isCompleteOrder="isCompleteOrder"
    ></confirm-order-complete-dialog>
  </Teleport>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderApi from '@/api/order/OrderApi';
import ConfirmOrderCompleteDialog from '@/components/modal/OrderCompleteModal.vue';

export default {
  components: {
    ConfirmOrderCompleteDialog,
  },
  data() {
    return {
      isCompleteOrder: '',
    };
  },
  methods: {
    async proceedOrder() {
      const apiClient = new OrderApi(this.apiClient);
      const response = await apiClient.createOrder();
      this.isCompleteOrder = response.data.result;
    },
  },
  computed: {
    ...mapGetters('order', ['getOrderDescription', 'getOrderTotalPrice']),
  },
};
</script>

<style>
</style>
