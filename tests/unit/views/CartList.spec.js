import { mount } from '@vue/test-utils';
import Cart from '@/components/CartListItem.vue';
import CartList from '@/views/Cart/CartList.vue';

describe('장바구니 목록을 렌더링할 파일에 대한 검증입니다 - 추가기능', () => {
  const wrapper = mount(CartList);

  it('장바구니 목록을 담을 container의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-list-container"]').exists()).toBeTruthy();
  });

  it('해당 페이지가 장바구니임을 확인하는 타이틀의 존재여부와 텍스트 렌더링 확인', () => {
    expect(wrapper.find('h2[data-test="cart-list-title"]').exists()).toBe(true);
  });

  it('장바구니의 목록이 데이터 array의 숫자 만큼 렌더링하는지를 검증합니다', async () => {
    const testCart = [{ name: 'testName' }, { name: 'testName2' }, { name: 'testName3' }];

    await wrapper.setData({
      carts: testCart,
    });
    expect(wrapper.findAllComponents(Cart).length).toEqual(testCart.length);
  });
});
