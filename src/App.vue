<template>
  <div class="grid content-center max-w-screen-sm mx-auto min-w-375">
    <router-view name="main"></router-view>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'App',
};
</script>

<style>
.min-w-375 {
  min-width: 375px;
}
</style>
