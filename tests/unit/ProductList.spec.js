import { mount } from '@vue/test-utils';

import ProductList from '@/views/Drink/ProductList.vue';
import Product from '@/components/ProductListItem.vue';
import MenuBottom from '@/components/MenuBottom.vue';

describe('기능구현 요구사항 1번', () => {
  const wrapper = mount(ProductList);

  it('메뉴 부분의 표시가 이루어지는지 테스트 합니다.', () => {
    expect(wrapper.findComponent(MenuBottom).exists()).toBe(true);
  });

  it('현재 표시하고있는 음료의 종류를 표시하는 공간의 존재여부를 확인합니다.', () => {
    const drinkCategoryWrapper = wrapper.get('h2[data-test="menu-list-category-title"]');

    expect(drinkCategoryWrapper.exists()).toBe(true);
  });

  it('음료의 목록이 데이터 array의 length 만큼 렌더링되는지를 확인합니다', async () => {
    const testDrink = [{ name: '1' }, { name: '2' }];

    await wrapper.setData({
      drinks: testDrink,
    });

    expect(wrapper.findAll('div[data-test="product-component"]').length).toBe(testDrink.length);
    expect(wrapper.findAllComponents(Product).length).toBe(testDrink.length);
  });
});
