<template>
  <div id="bottom-navigation" data-test="bottom-navigation">
    <section
      id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 bh-white shadow"
      data-test="bottom-navigation-section"
    >
      <div class="flex justify-between" data-test="bottom-navigation-flex">
        <a
          v-for="menu in menus"
          :key="menu.text"
          data-test="nav-menus"
          href="#"
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
          <font-awesome-icon :class="menu.icon" data-test="nav-menu-icon" />
          <p data-test="nav-menu-text">{{ menu.text }}</p>
        </a>
      </div>
    </section>
  </div>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          icon: 'fas fa-home',
          text: '홈',
        },
        {
          icon: 'fas fa-shopping-cart',
          text: '장바구니',
        },
        {
          icon: 'fa-solid fa-gear',
          text: '설정',
        },
      ],
    };
  },
};
</script>

<style>
</style>
