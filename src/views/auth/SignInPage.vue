<template>
  <div
    class="grid grid-cols-6 gap-4 content-center h-full"
    data-test="signin-page-container"
  >
    <label
      class="col-start-2 col-span-4"
      for="username"
      data-test="username-label"
    >
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
      for="nickname"
      data-test="nickname-label"
    >
      <span
        class="
          text-gray-700
          after:content-['*'] after:ml-0.5 after:text-red-500
        "
        data-test="nickname-title"
      >
        닉네임
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
        v-model="nickname"
        data-test="nickname-input-field"
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
    <label
      class="col-start-2 col-span-4"
      for="nickname"
      data-test="email-label"
    >
      <span
        class="
          text-gray-700
          after:content-['*'] after:ml-0.5 after:text-red-500
        "
        data-test="email-title"
      >
        이메일
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
        v-model="email"
        data-test="email-input-field"
      />
    </label>
    <label class="col-start-2 col-span-4" for="phone" data-test="phone-label">
      <span
        class="
          text-gray-700
          after:content-['*'] after:ml-0.5 after:text-red-500
        "
        data-test="phone-title"
      >
        휴대전화
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
        v-model="phone"
        data-test="phone-input-field"
      />
    </label>
    <div
      class="col-start-3 col-span-2"
      data-test="sign-in-or-log-in-button-container"
    >
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
        @click="signIn()"
      >
        회원가입
      </button>
      <hr class="my-2 border-gray-400" />
      <router-link to="/">
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
          data-test="log-in-button"
        >
          로그인 페이지로
        </button>
      </router-link>
    </div>
    <Teleport to="body">
      <ConfirmSignInMessage :isUserCreated="isUserCreated">
      </ConfirmSignInMessage>
    </Teleport>
  </div>
</template>

<script>
import SignInApi from '@/api/user/SignInApi';
import ConfirmSignInMessage from '@/components/modal/SignInModal.vue';

export default {
  data() {
    return {
      username: '',
      nickname: '',
      password: '',
      email: '',
      phone: '',
      isUserCreated: '',
    };
  },
  components: {
    ConfirmSignInMessage,
  },
  methods: {
    async signIn() {
      const apiClient = new SignInApi(this.apiClient);
      const payload = {
        username: this.username,
        nickname: this.nickname,
        password: this.password,
        email: this.email,
        phone: this.phone,
      };
      const response = await apiClient.createUser(payload);
      this.isUserCreated = response.data.result;
    },
  },
};
</script>

<style>
</style>
