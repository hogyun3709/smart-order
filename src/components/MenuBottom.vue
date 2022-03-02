<template>
  <div class="" id="bottom-navigation" data-test="bottom-navigation">
    <section
      id="bottom-navigation"
      class="fixed inset-x-0 bottom-0 bg-white max-w-screen-sm mx-auto"
      data-test="bottom-navigation-section"
    >
      <div class="flex justify-between" data-test="bottom-navigation-flex">
        <a
          v-for="menu in menus"
          :key="menu.text"
          data-test="nav-menus"
          :href="`${menu.link}`"
          class="
            w-full
            focus:text-teal-500
            hover:text-teal-500
            justify-center
            inline-block
            text-center
            pt-2
            pb-1
          "
        >
          <span data-test="nav-menu-icon">
            <component :is="menu.icon" class="w-5 h-5 inline-block" />
          </span>
          <p data-test="nav-menu-text">{{ menu.text }}</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/outline';

export default {
  data() {
    return {
      menus: [
        {
          icon: HomeIcon,
          text: '홈',
          link: '/',
        },
        {
          icon: ShoppingCartIcon,
          text: '장바구니',
          link: '/cart',
        },
        {
          icon: CogIcon,
          text: '설정',
        },
      ],
    };
  },
};
</script>

<style>
</style>
