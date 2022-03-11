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
    </div>
  </div>
  <MenuBottom />
</template>

<script>
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

  methods: {},

  async created() {
    const apiClient = new MyPageApi(this.apiClient);
    const response = await apiClient.getUserInfo();
    this.userDetails = response.data;
  },
};
</script>

<style>
</style>
