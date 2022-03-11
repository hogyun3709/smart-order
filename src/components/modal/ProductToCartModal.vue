<template>
  <Transition name="modal">
    <div
      v-if="isAddedToCart === 'OK'"
      class="modal-mask"
      data-test="sign-in-modal-container"
    >
      <div class="modal-wrapper">
        <div class="modal-container">
          <h2
            class="my-4 font-bold text-lg text-center"
            data-test="sign-in-success-message"
          >
            음료가 장바구니에 담겼습니다.
          </h2>
          <router-link to="/cart">
            <button
              class="
                bg-pink-500
                hover:bg-pink-500/75
                active:bg-pink-500/50
                text-white
                font-bold
                py-2
                px-4
                rounded
                w-full
              "
              data-test="go-to-cart-button"
            >
              장바구니 확인하기
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    isAddedToCart: { type: String, default: '' },
  },
  methods: {},
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
