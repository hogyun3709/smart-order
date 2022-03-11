import { mount } from '@vue/test-utils';
// import { createRouter, createWebHistory } from 'vue-router';
// import baseRoutes from '@/router/base';
// import drinkRoutes from '@/router/drink';
import Product from '@/components/ProductListItem.vue';
import MenuBottom from '@/components/MenuBottom.vue';
import ProductList from '@/views/Drink/ProductList.vue';

// const finalRoute = [].concat(baseRoutes, drinkRoutes);

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes: finalRoute,
// });

// const mockGetProducts = jest.fn();
// const mockGetProductDetail = jest.fn();
// jest.mock('@/api/drink/DrinkApi', () => jest.fn().mockImplementation(() => ({
//   getProducts: mockGetProducts, getProductDetail: mockGetProductDetail
// })))

describe('기능구현 요구사항 1번', () => {
  // beforeEach(() => {
  //   mockGetProducts.mockClear();
  // })

  const wrapper = mount(ProductList);

  it('메뉴 부분의 표시가 이루어지는지 테스트 합니다.', () => {
    expect(wrapper.findComponent(MenuBottom).exists()).toBe(true);
  });

  it('현재 표시하고있는 음료의 종류를 표시하는 공간의 존재여부를 확인합니다.', () => {
    const drinkCategoryWrapper = wrapper.get('h2[data-test="menu-list-category-title"]');

    expect(drinkCategoryWrapper.exists()).toBe(true);
  });

});
