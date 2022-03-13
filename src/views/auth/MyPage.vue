<template>
  <div
    class="grid grid-cols-6 gap-4 content-center h-full"
    data-test="mypage-container"
  >
    <h2
      class="col-start-2 col-span-4 text-xl font-bold"
      data-test="mypage-title"
    >
      내 정보 조회
    </h2>
    <div
      class="col-start-2 col-span-4"
      v-if="userDetails"
      data-test="mypage-info-container"
    >
      <p class="font-medium" data-test="mypage-username">
        아이디: {{ userDetails.username }}
      </p>
      <p class="font-medium" data-test="mypage-nickname">
        닉네임: {{ userDetails.nickname }}
      </p>
      <p class="font-medium" data-test="mypage-email">
        이메일: {{ userDetails.email }}
      </p>
      <p class="font-medium" data-test="mypage-phone">
        휴대전화: {{ userDetails.phone }}
      </p>
      <button
        class="
          bg-red-500
          hover:bg-red-500/75
          active:bg-red-500/50
          text-white
          font-bold
          py-2
          px-4
          rounded
          w-50
        "
        @click="clearToken()"
        data-test="go-to-mypage-button"
      >
        로그아웃
      </button>
    </div>
  </div>
  <MenuBottom />
</template>

<script>
import { mapActions } from 'vuex';
import MyPageApi from '@/api/user/MyPageApi';
import MenuBottom from '@/components/MenuBottom.vue';

export default {
  components: {
    MenuBottom,
  },
  data() {
    return {
      userDetails: {},
    };
  },

  methods: {
    ...mapActions(['clearToken']),
  },

  async created() {
    const apiClient = new MyPageApi(this.apiClient);
    const response = await apiClient.getUserInfo();
    this.userDetails = response.data;
  },
};
</script>

<style>
</style>
