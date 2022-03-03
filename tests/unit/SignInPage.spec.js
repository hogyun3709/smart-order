import { mount, flushPromises } from '@vue/test-utils';
import SignInPage from '@/views/auth/SignInPage.vue';
import App from '@/App.vue';
import router from '@/router';

describe('element들의 존재여부 확인을 검증하는 TC입니다. ', () => {
  const wrapper = mount(SignInPage);

  it('회원가입 컴포넌트의 정보를 담을 최상단 container의 존재여부', () => {
    expect(wrapper.find('div[data-test="signin-page-container"]').exists()).toBeTruthy();
  });

  it('아이디의 정보를 담을 label의 존재여부', () => {
    expect(wrapper.find('label[data-test="username-label"]').exists()).toBeTruthy();
  });

  it('아이디를 입력할 label임을 표시할 title의 존재', () => {
    expect(wrapper.find('span[data-test="username-title"]').exists()).toBeTruthy();
  });

  it('아이디값을 입력받을 input 필드의 존재', () => {
    expect(wrapper.find('input[data-test="username-input-field"]').exists()).toBeTruthy();
  });

  it('닉네임의 정보를 담을 label의 존재여부', () => {
    expect(wrapper.find('label[data-test="nickname-label"]').exists()).toBeTruthy();
  });

  it('닉네임을 입력할 label임을 표시할 title의 존재', () => {
    expect(wrapper.find('span[data-test="nickname-title"]').exists()).toBeTruthy();
  });

  it('닉네임값을 입력받을 input field의 존재', () => {
    expect(wrapper.find('input[data-test="nickname-input-field"]').exists()).toBeTruthy();
  });

  it('패스워드 정보를 담을 label의 존재', () => {
    expect(wrapper.find('label[data-test="password-label"]').exists()).toBeTruthy();
  });

  it('패스워드를 입력할 label임을 표시할 title의 존재', () => {
    expect(wrapper.find('span[data-test="password-title"]').exists()).toBeTruthy();
  });

  it('패스워드값을 입력받을 인풋 필드의 존재', () => {
    expect(wrapper.find('input[data-test="password-input-field"]').exists()).toBeTruthy();
  });

  it('이메일의 정보를 담을 label의 존재', () => {
    expect(wrapper.find('label[data-test="email-label"]').exists()).toBeTruthy();
  });

  it('이메일을 입력할 label임을 표시할 title의 존재', () => {
    expect(wrapper.find('span[data-test="email-title"]').exists()).toBeTruthy();
  });

  it('이메일값을 입력받을 인풋 필드의 존재', () => {
    expect(wrapper.find('input[data-test="email-input-field"]').exists()).toBeTruthy();
  });

  it('휴대전화번호 정도를 담을 label의 존재', () => {
    expect(wrapper.find('label[data-test="phone-label"]').exists()).toBeTruthy();
  });

  it('휴대전화 번호를 입력할 label임을 표시할 title의 존재', () => {
    expect(wrapper.find('span[data-test="phone-title"]').exists()).toBeTruthy();
  });

  it('휴대전화값을 입력받을 인풋필드의 존재', () => {
    expect(wrapper.find('input[data-test="phone-input-field"]').exists()).toBeTruthy();
  });

  it('회원가입과 로그인페이지로 이동하기 버튼의 내용을 담을 container의 존재', () => {
    expect(wrapper.find('div[data-test="sign-in-or-log-in-button-container"]').exists()).toBeTruthy();
  });

  it('회원가입 버튼의 존재', () => {
    expect(wrapper.find('button[data-test="sign-in-button"]').exists()).toBeTruthy();
  });

  it('로그인 버튼의 존재', () => {
    expect(wrapper.find('button[data-test="log-in-button"]').exists()).toBeTruthy();
  });
});

describe('Element의 title내용이 의도한 text와 매칭 여부를 검증하는 TC입니다.', () => {
  const wrapper = mount(SignInPage);

  it('아이디를 입력할 항목에 의도한 text title이 렌더링 되는지', () => {
    expect(wrapper.find('span[data-test="username-title"]').text()).toBe('아이디');
  });

  it('닉네임을 입력할 항목에 의도한 text title이 렌더링 되는지', () => {
    expect(wrapper.find('span[data-test="nickname-title"]').text()).toBe('닉네임');
  });
  it('패스워드를 입력할 항목에 의도한 text title이 렌더링 되는지', () => {
    expect(wrapper.find('span[data-test="password-title"]').text()).toBe('패스워드');
  });
  it('이메일을 입력할 항목에 의도한 text title이 렌더링 되는지', () => {
    expect(wrapper.find('span[data-test="email-title"]').text()).toBe('이메일');
  });
  it('휴대전화번호를 입력할 항목에 의도한 text title이 렌더링 되는지', () => {
    expect(wrapper.find('span[data-test="phone-title"]').text()).toBe('휴대전화');
  });
  it('해당 버튼이 회원가입 이라는 텍스트를 렌더링하는지', () => {
    expect(wrapper.find('button[data-test="sign-in-button"]').text()).toBe('회원가입');
  });
  it('해당 버튼이 로그인 페이지로 라는 텍스트를 렌더링하는지', () => {
    expect(wrapper.find('button[data-test="log-in-button"]').text()).toBe('로그인 페이지로');
  });
});

describe('page routing이 이루어지는지의 여부를 확인합니다.', () => {
  let wrapper;

  beforeEach(async () => {
    router.push('/');
    await router.isReady();

    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  it('로그인 페이지로 버튼을 클릭하면 로그인 페이지로 redirect되어 로그인 페이지가 렌더링되는지 검증합니다', async () => {
    await wrapper.find('button[data-test="log-in-button"]').trigger('click');
    await flushPromises();
    expect(wrapper.find('div[data-test="login-page-container"]').exists()).toBe(true);
  });
});
