<template>
  <div class="w-screen h-screen">
    <DrinkInfo />
  </div>
</template>

<script>
import DrinkInfo from './components/DrinkInfo.vue';

export default {
  name: 'App',
  components: {
    DrinkInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
