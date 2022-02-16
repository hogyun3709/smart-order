<template>
  <LogInPage />
  <MenuBottom />
</template>

<script>
import MenuBottom from './views/MenuBottom.vue';
import LogInPage from './views/LogInPage.vue';

export default {
  name: 'App',
  components: {
    LogInPage,
    MenuBottom,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
