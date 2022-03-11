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

  it('장바구니로 등록된 아이템의 내용중 사이즈에 대한 내용을 담을 container와 각 elements 들의 존재여부', () => {
    expect(wrapper.find('div[data-test="cart-primary-choice-container"]').exists()).toBeTruthy();
    expect(wrapper.find('span[data-test="cart-item-size"]').exists()).toBeTruthy();
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
    product: {
      productNo: 99,
      nameKr: '테스트 음료이름',
      nameEng: 'test Drink Name',
      isNewProduct: false,
      isHot: false,
      imgUrl: 'example.com',
      price: 1000,
    },
    quantity: 9,
    cupSize: {
      optionNo: 10,
      name: '빅사이즈',
    },
    options: {
      optionNo: 99,
      quantity: 9,
    },
    optionsInfo: {
      name: '허니버터 시럽',
      unitprice: 99,
      baseQuantity: 0,
      optoinNo: 98,
    },
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CartListItem, {
      props: {
        ...testProps,
      },
    });
  });

  it('장바구니에 담긴 상품의 한글명이 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('p[data-test="cart-item-name"]').text()).toBe(testProps.product.nameKr);
  });

  it('장바구니에 담긴 상품의 영문명이 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('p[data-test="cart-item-name-english"]').text()).toBe(testProps.product.nameEng);
  });

  it('장바구니의 담긴 상품의 사이즈가 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('span[data-test="cart-item-size"]').text()).toBe(testProps.cupSize.name);
  });

  it('장바구니에 담긴 상품의 기본 가격이 props와 매칭하여 의도한 포맷으로 렌더링 되는지', () => {
    const testDefaultPriceFormat = '1,000원';
    expect(wrapper.find('span[data-test="cart-item-default-price"]').text()).toBe(testDefaultPriceFormat);
  });

  it('장바구니에 담긴 상품의 수량이 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('span[data-test="cart-item-quantity"]').text()).toBe(testProps.quantity.toString());
  });

  it('장바구니에 담긴 상품의 최종가격이 props에 정보들을 반영하여 렌더링되는지', async () => {
    const testFinalPriceWithFormat = '4,000원';

    await wrapper.setProps({
      product: {
        price: 2000,
      },
      quantity: 2,
    });
    expect(wrapper.find('div[data-test="cart-item-final-price"]').text()).toContain(testFinalPriceWithFormat);
  });
});
