<template>
  <TailwindForm />
</template>

<script>
import TailwindForm from './components/TailwindForm.vue';

export default {
  name: 'App',
  components: {
    TailwindForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
