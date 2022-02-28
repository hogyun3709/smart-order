import { mount } from '@vue/test-utils';
import CartListItem from '@/components/CartListItem.vue';

describe('장바구니 목록 페이지의 Single Item 컴포넌트로써 존재해야할 html tag들을 검증합니다', () => {
  const wrapper = mount(CartListItem);

  it('장바구니 아이템 컴포넌트의 정보를 담은 최상단의 container의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-item-container"]').exists()).toBeTruthy();
  });

  it('장바구니로 등록된 아이템의 이미지를 렌더링할 element의 존재여부', () => {
    expect(wrapper.find('img[data-test="cart-item-image"]').exists()).toBeTruthy();
  });

  it('장바구니로 등록된 아이템의 한글명과 영문명을 렌더링할 container와 elements 들의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-item-name-container"]').exists()).toBeTruthy();
    expect(wrapper.find('p[data-test="cart-item-name"]').exists()).toBeTruthy();
    expect(wrapper.find('p[data-test="cart-item-name-english"]').exists()).toBeTruthy();
  });

  it('장바구니로 등록된 아이템의 내용중 유저로부터 선택된 내용을 담을 container의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-item-choice-detail-container"]').exists()).toBeTruthy();
  });

  it('장바구니로 등록된 아이템의 내용중 온도와, 사이즈, 컵에 대한 내용을 담을 container와 각 elements 들의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-primary-choice-container"]').exists()).toBeTruthy();
    expect(wrapper.find('span[data-test="cart-item-temperature"]').exists()).toBeTruthy();
    expect(wrapper.find('span[data-test="cart-item-size"]').exists()).toBeTruthy();
    expect(wrapper.find('span[data-test="cart-item-cup-type"]').exists()).toBeTruthy();
  });

  it('장바구니로 등록된 아이템의 내용중 가격정보를 렌더링할 container의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-item-price-container"]').exists()).toBeTruthy();
    expect(wrapper.find('span[data-test="cart-item-default-price"]').exists()).toBeTruthy();
  });

  it('장바구니로 등록된 아이템의 전체 수량을 증가/감소 할수있는 counter의 container와 elements들의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-item-counter"]').exists()).toBeTruthy();
    expect(wrapper.find('button[data-test="cart-option-decrease-button"]').exists()).toBeTruthy();
    expect(wrapper.find('span[data-test="cart-item-quantity"]').exists()).toBeTruthy();
    expect(wrapper.find('button[data-test="cart-option-increase-button"]').exists()).toBeTruthy();
  });

  it('장바구니로 등록된 아이템의 최종가격을 렌더링할 element의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-item-final-price"]').exists()).toBeTruthy();
  });
});

describe('장바구니 목록페이지에서 props로 보낸 data들의 binding이 이루어지는지를 확인합니다', () => {
  const testProps = {
    name: 'test name',
    nameEng: 'test name english',
    temperature: 'Ice Only',
    size: 'test size',
    cupType: 'test Cup Type',
    image: 'test image url',
    personalOption: [{
      name: 'test',
      defaultQuantity: 99,
      price: 8888,
    }],
    defaultPrice: 9999,
    defaultQuantity: 99,
  };

  const wrapper = mount(CartListItem, {
    props: {
      ...testProps,
    },
  });

  it('장바구니에 담긴 상품의 한글명이 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('p[data-test="cart-item-name"]').text()).toEqual(testProps.name);
  });

  it('장바구니에 담긴 상품의 영문명이 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('p[data-test="cart-item-name-english"]').text()).toEqual(testProps.nameEng);
  });

  it('장바구니에 담긴 상품의 온도가 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('span[data-test="cart-item-temperature"]').text()).toEqual(testProps.temperature);
  });

  it('장바구니의 담긴 상품의 사이즈가 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('span[data-test="cart-item-size"]').text()).toContain(testProps.size);
  });

  it('장바구니에 담긴 상품의 컵종류가 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('span[data-test="cart-item-cup-type"]').text()).toContain(testProps.cupType);
  });

  it('장바구니에 담긴 상품의 퍼스널 옵션의 종류이름이 props와 매칭하여 렌더링 되는지', () => {
    expect(wrapper.find('span[data-test="cart-option-name"]').text()).toContain(testProps.personalOption[0].name);
  });

  it('장바구니에 담긴 상품의 퍼스널 옵션의 수량이 props와 매칭하여 렌더링 되는지', () => {
    expect(wrapper.find('span[data-test="cart-option-quantity"]').text()).toContain(testProps.personalOption[0].defaultQuantity.toString());
  });

  it('장바구니에 담긴 상품의 기본 가격이 props와 매칭하여 의도한 포맷으로 렌더링 되는지', () => {
    const testDefaultPriceFormat = '9,999원';
    expect(wrapper.find('span[data-test="cart-item-default-price"]').text()).toContain(testDefaultPriceFormat);
  });

  it('장바구니에 담긴 상품의 퍼스널 옵션 가격이 props와 매칭하여 의도한 포맷으로 렌더링되는지,', () => {
    const testOptionPriceFormat = '8,888원';
    expect(wrapper.find('span[data-test="cart-option-price"]').text()).toEqual(testOptionPriceFormat);
  });

  it('장바구니에 담긴 상품의 수량이 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('span[data-test="cart-item-quantity"]').text()).toEqual(testProps.defaultQuantity.toString());
  });

  it('장바구니에 담긴 상품의 최종가격이 props에 정보들을 반영하여 렌더링되는지', async () => {
    const testFinalPriceWithFormat = '8,000원';

    await wrapper.setProps({
      personalOption: [{
        defaultQuantity: 2,
        price: 500,
      }],
      defaultPrice: 3000,
      defaultQuantity: 2,
    });
    expect(wrapper.find('div[data-test="cart-item-final-price"]').text()).toContain(testFinalPriceWithFormat);
  });
});
