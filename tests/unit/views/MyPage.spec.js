import { mount } from '@vue/test-utils';
import MyPage from '@/views/auth/MyPage.vue';

describe('element의 존재여부를 확인합니다.', () => {
  const wrapper = mount(MyPage);

  it('내정보 조회 페이지의 내용을 담을 최상단 컨테이너의 존재여부 확인', () => {
    expect(wrapper.find('div[data-test="mypage-container"]').exists()).toBeTruthy();
  });

  it('내정보 조회라는 텍스트를 가진 헤딩의 존재여부', () => {
    expect(wrapper.find('h2[data-test="mypage-title"]').exists()).toBeTruthy();
  });

  it('유저들의 정보들을 담을 컨테이너의 존재여부', () => {
    expect(wrapper.find('div[data-test="mypage-info-container"]').exists()).toBeTruthy();
  });

  it('유저의 아이디를 표시할 항목의 존재여부', () => {
    expect(wrapper.find('p[data-test="mypage-username"]').exists()).toBeTruthy();
  });

  it('유저의 닉네임을 표시할 항목의 존재여부', () => {
    expect(wrapper.find('p[data-test="mypage-nickname"]').exists()).toBeTruthy();
  });

  it('유저의 이메일을 표시할 항목의 존재여부', () => {
    expect(wrapper.find('p[data-test="mypage-email"]').exists()).toBeTruthy();
  });
  it('유저의 휴대전화를 표시할 항목의 존재여부', () => {
    expect(wrapper.find('p[data-test="mypage-phone"]').exists()).toBeTruthy();
  });
});
