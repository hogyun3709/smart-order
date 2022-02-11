<template>
  <div class="container mx-auto" data-test="log-in-page-container">
    <div class="grid grid-cols-6 gap-4" data-test="input-container">
      <label
        class="col-start-2 col-span-4"
        for="name"
        data-test="username-label"
      >
        <span class="text-gray-700" data-test="username-title">아이디</span>
        <input
          type="text"
          class="
            mt-0
            block
            w-full
            px-0.5
            border-0 border-b-2 border-gray-200
            focus:ring-0 focus:border-black
          "
          placeholder
          v-model="username"
          data-test="username-input-field"
        />
      </label>
      <label
        class="col-start-2 col-span-4"
        for="name"
        data-test="password-label"
      >
        <span class="text-gray-700" data-test="password-title">패스워드</span>
        <input
          type="password"
          class="
            mt-0
            block
            w-full
            px-0.5
            border-0 border-b-2 border-gray-200
            focus:ring-0 focus:border-black
          "
          placeholder
          v-model="password"
          data-test="password-input-field"
        />
      </label>
      <div class="col-start-3 col-span-2" data-test="log-in-button-container">
        <button
          class="
            bg-gray-500
            hover:bg-gray-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            w-full
          "
          data-test="log-in-button"
        >
          로그인
        </button>
      </div>
      <div class="col-start-2 col-span-4" data-test="show-input-text-container">
        <p data-test="show-input-username">아이디: {{ username }}</p>
        <p data-test="show-input-password">비밀번호: {{ password }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>

<style>
</style>
