import { mount } from '@vue/test-utils';
import LogInPage from '@/views/LogInPage.vue';

describe('LogInPage.vue 파일에 대한 unit test 입니다', () => {
	it('tests root container with following three required containers', () => {
		const wrapper = mount(LogInPage);

		expect(wrapper.find('div[data-test="log-in-page-container"]').exists()).toBe(true);

		expect(wrapper.find('div[data-test="input-container"]').exists()).toBe(true);
		expect(wrapper.find('div[data-test="log-in-button-container"]').exists()).toBe(true);
		expect(wrapper.find('div[data-test="show-input-text-container"]').exists()).toBe(true);
	})
	it('has input field for username and password', () => {
		const wrapper = mount(LogInPage);

		expect(wrapper.find('input[data-test="username-input-field"]').exists()).toBeTruthy();
		expect(wrapper.find('input[data-test="password-input-field"]').exists()).toBeTruthy();

	})
	test('로그인이라는 텍스트를 가진 버튼의 존재 여부', () => {
		const wrapper = mount(LogInPage);

		const buttonText = '로그인';

		expect(wrapper.find('button[data-test="log-in-button"]').exists()).toBe(true);
		expect(wrapper.get('button[data-test="log-in-button"]').text()).toBe(buttonText);
	})
	it('checks v-model working properly via display text from given input values', async () => {
		const wrapper = mount(LogInPage);

		const username = 'abcd';
		const password = 'supersecret';

		await wrapper.find('input[type="text"]').setValue(username);
		await wrapper.find('input[type="password"]').setValue(password);

		expect(wrapper.find('p[data-test="show-input-username"]').text()).toContain(username);
		expect(wrapper.find('p[data-test="show-input-password"]').text()).toContain(password);

	})

})