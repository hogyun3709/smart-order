<template>
  <div id="drink-info" class="max-w-full mx-5" data-test="drink-info">
    <div class="relative" data-test="drink-image-container">
      <img
        class="aspect-square"
        :src="drink.image"
        alt="drink-image"
        data-test="drink-image"
      />
      <button
        class="
          absolute
          top-0
          bg-slate-400
          text-white
          p-2
          rounded
          hover:bg-blue-600
          m-2
        "
        data-test="drink-image-prev-page-button"
      >
        <ChevronLeftIcon class="h-5 w-5" />
      </button>
      <button
        class="
          absolute
          top-0
          right-0
          bg-slate-400
          text-white
          p-2
          rounded
          hover:bg-blue-600
          m-2
        "
        data-test="drink-image-share-button"
      >
        <ShareIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
  <MenuBottom />
</template>

<script>
import { ShareIcon, ChevronLeftIcon } from '@heroicons/vue/outline';
import MenuBottom from '@/components/MenuBottom.vue';

export default {
  components: {
    MenuBottom,
    ShareIcon,
    ChevronLeftIcon,
  },
  data() {
    return {
      drink: {
        image: 'https://coffee.alexflipnote.dev/random',
      },
    };
  },
};
</script>

<style>
</style>
