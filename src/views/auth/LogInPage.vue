<template>
  <div
    class="grid grid-cols-6 gap-4 content-center h-full"
    data-test="login-page-container"
  >
    <label class="col-start-2 col-span-4" for="name" data-test="username-label">
      <span
        class="
          text-gray-700
          after:content-['*'] after:ml-0.5 after:text-red-500
        "
        data-test="username-title"
      >
        아이디
      </span>
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
      for="password"
      data-test="password-label"
    >
      <span
        class="
          text-gray-700
          after:content-['*'] after:ml-0.5 after:text-red-500
        "
        data-test="password-title"
      >
        패스워드
      </span>
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
    <div
      class="col-start-3 col-span-2"
      data-test="log-in-or-sign-in-button-container"
    >
      <button
        class="
          bg-green-500
          hover:bg-green-500/75
          active:bg-green-500/50
          text-white
          font-bold
          py-2
          px-4
          rounded
          w-full
        "
        @click="login()"
        data-test="log-in-button"
      >
        로그인
      </button>
      <hr class="my-2 border-gray-400" />
      <router-link to="/signin">
        <button
          class="
            bg-purple-500
            hover:bg-purple-500/75
            active:bg-purple-500/50
            text-white
            font-bold
            py-2
            px-4
            rounded
            w-full
          "
          data-test="sign-in-button"
        >
          회원가입
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import LogInApi from '@/api/user/LogInApi';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const loginApi = new LogInApi(this.apiClient);
      const response = await loginApi.login(this.username, this.password);
      if (response) {
        await this.$router.push('/product');
      } else {
        // eslint-disable-next-line no-alert
        alert('아이디와 비밀번호를 다시 확인해주세요');
      }
    },
  },
};
</script>

<style>
</style>
