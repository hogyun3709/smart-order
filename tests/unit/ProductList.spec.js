import { mount } from '@vue/test-utils';

import ProductList from '@/components/ProductList.vue';
import MenuBottom from '@/components/MenuBottom.vue';

describe('기능구현 요구사항 1번', () => {
	const wrapper = mount(ProductList);
	const drinkCategoryWrapper = wrapper.get('h2[data-test="menu-list-category-title"]');

	it('메뉴 부분의 표시가 이루어지는지 테스트 합니다.', () => {
		expect(wrapper.findComponent(MenuBottom).exists()).toBe(true);
	});

	it('현재 표시하고있는 음료의 종류를 표시하는 공간의 존재여부를 확인합니다.', () => {
		expect(drinkCategoryWrapper.exists()).toBe(true)
	})
});