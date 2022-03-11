<template>
  <div class="grid grid-cols-6 grid-flow-col">
    <div class="col-start-1 col-end-7 my-0.5">
      <span>{{ option.name }}</span>
      <span
        v-if="option.unitprice"
        class="text-gray-400 text-xs align-middle mx-4"
        >{{ unitPriceFormat }}</span
      >
    </div>
    <div class="float-right flex space-x-2 text-center my-0.5">
      <button
        class="border-2 border-black rounded-full w-7 h-7"
        @click="removeShot(option.optionNo)"
      >
        -
      </button>
      <div>
        <slot name="optionQuantity"></slot>
      </div>
      <button
        class="border-2 border-black rounded-full w-7 h-7"
        @click="addShot(option.optionNo)"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductOption',
  emits: ['updateOption'],

  props: {
    option: {
      type: Object,
      default() {
        return {
          name: '',
          optionNo: -1,
          unitprice: -1,
          baseQuantity: -1,
        };
      },
    },
  },
  methods: {
    addShot(optionNo) {
      this.$emit('updateOption', {
        optionNo,
        value: 1,
      });
    },
    removeShot(optionNo) {
      this.$emit('updateOption', {
        optionNo,
        value: -1,
      });
    },
  },
  computed: {
    unitPriceFormat() {
      return `${this.option.unitprice.toLocaleString()}원`;
    },
  },
};
</script>

<style scoped></style>
