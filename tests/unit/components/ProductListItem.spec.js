import { mount } from '@vue/test-utils';

import ProductListItem from '@/components/ProductListItem.vue';

describe('상품목록페이지의 SingleItem 컴포넌트로써 html에서 존재해야할 element tag들을 검증합니다.', () => {
  const wrapper = mount(ProductListItem, {
    props: {
      isNewProduct: true,
    },
  });

  it('상품목록 페이지의 정보를 담은 최상단 container의 존재여부', () => {
    expect(wrapper.find('div[data-test="product-container"]').exists()).toBeTruthy();
  });

  it('상품의 이미지를 렌더링할 element의 존재여부', () => {
    expect(wrapper.find('img[data-test="product-image"]').exists()).toBeTruthy();
  });

  it('상품의 설명정보들을 담은 wrapper container의 존재여부', () => {
    expect(wrapper.find('div[data-test="product-description"]').exists()).toBeTruthy();
  });

  it('상품의 한글명을 렌더링할 element의 존재여부', () => {
    expect(wrapper.find('span[data-test="product-name"]').exists()).toBeTruthy();
  });

  it('상품의 상태(신제품 및 인기제품)를 렌더링할 element 의 존재여부', () => {
    expect(wrapper.find('span[data-test="product-new"]').exists()).toBeTruthy();
  });

  it('상품의 영문명을 렌더링할 element의 존재여부', () => {
    expect(wrapper.find('p[data-test="product-name-english"]').exists()).toBeTruthy();
  });

  it('상품의 가격을 렌더링할 element의 존재여부', () => {
    expect(wrapper.find('p[data-test="product-price"]').exists()).toBeTruthy();
  });
});
describe('상품목록페이지에서 data 들의 binding이 이루어져 data들이 렌더링 되는지를 검증합니다', () => {
  const testProps = {
    imgUrl: 'urlfromserviceprovider',
    nameKr: '테스트 커피',
    isNewProduct: true,
    nameEng: 'test menu name',
    price: 9999,
  };

  const wrapper = mount(ProductListItem, {
    props: {
      ...testProps,
    },
  });

  it('상품의 한글명이 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('span[data-test="product-name"]').text()).toEqual(testProps.nameKr);
  });

  it('상품의 상태가 인기 메뉴라면, New라는 텍스트를 렌더링하는지 ', () => {
    expect(wrapper.find('span[data-test="product-new"]').text()).toEqual('New');
  });

  it('상품의 영문명이 props와 매칭하여 렌더링되는지', () => {
    expect(wrapper.find('p[data-test="product-name-english"]').text()).toEqual(testProps.nameEng);
  });

  it('상품의 가격이 props와 매칭하여 지정된 포맷에 맞추어 렌더링되는지', () => {
    const testPriceFormat = `${testProps.price.toLocaleString()}원`;

    expect(wrapper.find('p[data-test="product-price"]').text()).toEqual(testPriceFormat);
  });
  it('상품의 이미지 URL 정보가 props와 매칭하는지', () => {
    expect(wrapper.find('img[data-test="product-image"]').attributes('src')).toEqual(testProps.imgUrl);
  });
});
