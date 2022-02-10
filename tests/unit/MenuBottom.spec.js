import { mount } from '@vue/test-utils';
import MenuBottom from '@/views/MenuBottom.vue';

describe('MenuBottom.vue 파일의 unit test 입니다', () => {
	const menus = [
		{
			icon: 'fas fa-home',
			text: '홈',
		},
		{
			icon: 'fas fa-shopping-cart',
			text: '장바구니',
		},
		{
			icon: 'fa-solid fa-gear',
			text: '설정',
		},
	]
	it('renders bottom-navigation related elements - container', () => {
		const wrapper = mount(MenuBottom);

		expect(wrapper.find('div[data-test="bottom-navigation"]').exists()).toBe(true)
		expect(wrapper.find('section[data-test="bottom-navigation-section"]').exists()).toBe(true);
		expect(wrapper.find('div[data-test="bottom-navigation-flex"]').exists()).toBe(true);
	})
	it('renders N(menus.length) of menus on the bottom navigation', () => {
		const wrapper = mount(MenuBottom);

		expect(wrapper.findAll('a[data-test="nav-menus"]').length).toBe(menus.length);
	})
	it('renders N of menus icons on the bottom navigation', () => {
		const wrapper = mount(MenuBottom);

		expect(wrapper.findAll('font-awesome-icon[data-test="nav-menu-icon"]').length).toBe(menus.length);
	})
	test('N개 이상의 icon들이 valid 한 클래스명을 가지고 있는지를 확인함으로, icon들이 렌더링 되었는지의 여부.', () => {
		const wrapper = mount(MenuBottom);

		for (let i = 0; i < menus.length; i += 1) {
			expect(wrapper.findAll('font-awesome-icon[data-test="nav-menu-icon"]')[i].html()).toContain(`${menus[i].icon}`);
		}
	});
	it('renders N of menus texts on the bottom navigation', () => {
		const wrapper = mount(MenuBottom);

		for (let i = 0; i < menus.length; i += 1) {
			expect(wrapper.findAll('p[data-test="nav-menu-text"]')[i].text()).toBe(`${menus[i].text}`);
		}
	})
})