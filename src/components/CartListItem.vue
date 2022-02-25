<template>
  {{ name }}
  {{ nameEng }}
  {{ temperature }}
  <div v-if="personalOption.espressoShot">
    {{ personalOption.espressoShot.name }}
    {{ personalOption.espressoShot.defaultQuantity }}
  </div>
  {{ defaultPrice }}
  {{ defaultQuantity }}
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    nameEng: { type: String, default: '' },
    temperature: { type: String, default: null },
    image: { type: String, defaul: '' },
    personalOption: {
      type: Object,
      default() {
        return {};
      },
      espressoShot: {
        type: Object,
        default() {
          return {};
        },
        name: { type: String, default: '' },
        defaultQuantity: { type: Number, default: -1 },
        price: { type: Number, default: -1 },
      },
    },
    defaultPrice: { type: Number },
    defaultQuantity: { type: Number },
  },
};
</script>

<style>
</style>
