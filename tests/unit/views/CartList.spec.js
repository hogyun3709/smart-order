import { mount } from '@vue/test-utils';
import CartList from '@/views/Cart/CartList.vue';

describe('장바구니 목록을 렌더링할 파일에 대한 검증입니다 - 추가기능', () => {
  const wrapper = mount(CartList);

  it('장바구니 목록을 담을 container의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-list-container"]').exists()).toBeTruthy();
  });

  it('해당 페이지가 장바구니임을 확인하는 타이틀의 존재여부와 텍스트 렌더링 확인', () => {
    expect(wrapper.find('h2[data-test="cart-list-title"]').exists()).toBe(true);
  });
});
