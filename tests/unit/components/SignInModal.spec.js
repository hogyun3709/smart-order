import { mount } from '@vue/test-utils';
import SignInModal from '@/components/modal/SignInModal.vue';

describe('element의 존재여부를 검증하는 TC입니다.', () => {
  const wrapper = mount(SignInModal, {
    props: {
      isUserCreated: 'OK',
    },
  });

  it('회원가입 모달의 내용을 표시할 최상단 컨테이너의 존재', () => {
    expect(wrapper.find('div[data-test="sign-in-modal-container"]').exists()).toBeTruthy();
  });

  it('회원가입 성공메세지를 표시할 element의 존재', () => {
    expect(wrapper.find('h2[data-test="sign-in-success-message"]').exists()).toBeTruthy();
  });

  it('회원가입 이후 내 정보조회를 위한 마이페이지로 이동하는 버튼의 존재', () => {
    expect(wrapper.find('button[data-test="go-to-mypage-button"]').exists()).toBeTruthy();
  });
});

describe('element중 title의 내용이 의도한 text 와 매칭하는지 여부를 확인합니다', () => {
  const wrapper = mount(SignInModal, {
    props: {
      isUserCreated: 'OK',
    },
  });

  it('회원가입이 성공적으로 이루어졌다는 내용을 렌더링할 text와 매칭하여 표시되는지', () => {
    expect(wrapper.find('h2[data-test="sign-in-success-message"]').text()).toBe('회원가입에 성공하였습니다.');
  });
});
