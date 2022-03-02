import { mount } from '@vue/test-utils';
import LogInPage from '@/views/auth/LogInPage.vue';

describe('LogInPage.vue 파일에 대한 unit test 입니다', () => {
  const wrapper = mount(LogInPage);
  it('로그인 페이지에 대한 내용을 담을 최상단 element의 존재여부를 확인합니다', () => {
    expect(wrapper.find('div[data-test="login-page-container"]').exists()).toBe(true);
  });

  it('has input field for username and password', () => {
    expect(wrapper.find('input[data-test="username-input-field"]').exists()).toBeTruthy();
    expect(wrapper.find('input[data-test="password-input-field"]').exists()).toBeTruthy();
  });

  it('로그인과 회원가입 버튼을 렌더링할 컨테이너의 존재여부', () => {
    expect(wrapper.find('div[data-test="log-in-or-sign-in-button-container"]').exists()).toBeTruthy();
  });

  test('로그인이라는 텍스트를 가진 버튼의 존재 여부', () => {
    const testLogInText = '로그인';

    expect(wrapper.find('button[data-test="log-in-button"]').exists()).toBe(true);
    expect(wrapper.get('button[data-test="log-in-button"]').text()).toBe(testLogInText);
  });

  test('회원가입이라는 텍스트를 가진 버튼의 존재여부', () => {
    const testSignIntext = '회원가입';

    expect(wrapper.find('button[data-test="sign-in-button"]').exists()).toBeTruthy();
    expect(wrapper.get('button[data-test="sign-in-button"]').text()).toBe(testSignIntext);
  })
});
