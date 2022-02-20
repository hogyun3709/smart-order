<template>
  <div class="grid content-center max-w-screen-sm mx-auto min-w-375">
    <DrinkInfo />
  </div>
</template>

<script>
import DrinkInfo from './components/DrinkInfo.vue';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'App',
  components: {
    DrinkInfo,
  },
};
</script>

<style>
.min-w-375 {
  min-width: 375px;
}
</style>
