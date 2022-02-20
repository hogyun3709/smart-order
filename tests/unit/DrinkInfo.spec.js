import { mount } from '@vue/test-utils';
import DrinkInfo from '@/components/DrinkInfo.vue';
import MenuBottom from '@/components/MenuBottom.vue';
import { ChevronLeftIcon, ShareIcon } from '@heroicons/vue/outline';

describe('test coverage for requirements #1', () => {
  it('verifies MenuBottom component renders', () => {
    const wrapper = mount(DrinkInfo);

    expect(wrapper.findComponent(MenuBottom).exists()).toBe(true);
  });
});

describe('drink-image-container 부분의 unit test 입니다 - coverage for requirements #2', () => {
  const wrapper = mount(DrinkInfo);

  it('verifies drink-image-container for rendering an item image with related contents', () => {
    expect(wrapper.find('div[data-test="drink-image-container"]').exists()).toBe(true);
  });

  it('tests drink-image renders properly', () => {
    expect(wrapper.find('img[data-test="drink-image"]').exists()).toBe(true);
  });

  it('checks drink-image renders a valid content from given url data property', async () => {
    const testImageUrl = 'randomCoffeImageUrlProvider';

    await wrapper.setData({
      drink: {
        image: testImageUrl,
      },
    });

    expect(wrapper.find('img[data-test="drink-image"]').attributes('src')).toEqual(testImageUrl);
  });

  it('checks rendering previous page button with ChevronLeftIcon', () => {
    const previousButton = wrapper.find('button[data-test="drink-image-prev-page-button"]');
    const goToLeftIcon = wrapper.findComponent(ChevronLeftIcon);

    expect(previousButton.exists()).toBe(true);
    expect(goToLeftIcon.exists()).toBe(true);
  });

  it('checks rendering drink image share button with ShareIcon', () => {
    const shareButton = wrapper.find('button[data-test="drink-image-share-button"]');
    const shareIcon = wrapper.findComponent(ShareIcon);

    expect(shareButton.exists()).toBe(true);
    expect(shareIcon.exists()).toBe(true);
  });
});

describe('drink-description-container 부분의 unit test 입니다 - coverage for requirements #3 ~ #6', () => {
  const wrapper = mount(DrinkInfo);

  it('renders drink-description-container for rendering drink description details', () => {
    expect(wrapper.find('div[data-test="drink-description-container"]').exists()).toBe(true);
  });

  it('verifies rendering drink name properly from given data property', async () => {
    const testDrinkName = '카페라떼';

    await wrapper.setData({
      drink: {
        name: testDrinkName,
      },
    });
    expect(wrapper.find('span[data-test="drink-name"]').exists()).toBe(true);
    expect(wrapper.find('span[data-test="drink-name"]').text()).toEqual(testDrinkName);
  });

  test('음료가 인기메뉴라면 "Best" 문구를 표시하고, 인기메뉴가 아니라면 표시하지 않음을 검증  ', async () => {
    const testIsBest = true;
    const testIsNotBest = false;

    await wrapper.setData({
      drink: {
        isBest: testIsBest,
      },
    });

    expect(wrapper.find('span[data-test="drink-isBest"]').exists()).toBe(true);
    expect(wrapper.find('span[data-test="drink-isBest"]').text()).toEqual('Best');
    expect(wrapper.find('span[data-test="drink-isBest"]').classes()).toContain('text-red-500');

    await wrapper.setData({
      drink: {
        isBest: testIsNotBest,
      },
    });

    expect(wrapper.find('span[data-test="drink-isBest"]').exists()).toBe(false);
  });

  it('tests rendering drink description sucessfully from given data property', async () => {
    const testDescription = '음료에 대한 설명 테스트 입니다';

    await wrapper.setData({
      drink: {
        description: testDescription,
      },
    });

    expect(wrapper.find('p[data-test="drink-description"]').exists()).toBe(true);
    expect(wrapper.find('p[data-test="drink-description"]').text()).toEqual(testDescription);
  });

  it('checks rendering drink default price from given data property', async () => {
    const testPrice = 5000;
    const testPriceWithFormat = `${testPrice.toLocaleString()}원`;

    await wrapper.setData({
      drink: {
        price: testPrice,
      },
    });

    expect(wrapper.find('span[data-test="drink-default-price"]').exists()).toBe(true);
    expect(wrapper.find('span[data-test="drink-default-price"]').text()).toContain(testPriceWithFormat);
  });
});

describe('drink-select-temperature-container 부분의 unit test 입니다 - coverage for feature requirement #7 ', () => {
  const wrapper = mount(DrinkInfo);

  it('verifies drink-select-temperature-container', () => {
    expect(wrapper.find('div[data-test="drink-select-temperature-container"]').exists()).toBe(true);
  });

  it('renders HOT and ICE buttons with valid text', () => {
    expect(wrapper.find('button[data-test="drink-select-hot"]').exists()).toBe(true);
    expect(wrapper.find('button[data-test="drink-select-hot"]').text()).toEqual('HOT');

    expect(wrapper.find('button[data-test="drink-select-ice"]').exists()).toBe(true);
    expect(wrapper.find('button[data-test="drink-select-ice"]').text()).toEqual('ICE');
  });
});

describe('drink-select-size-container 부분의 unit test 입니다 - coverage for feature requirement #8', () => {
  const wrapper = mount(DrinkInfo);

  it('verifies drink-select-size-container', () => {
    expect(wrapper.find('div[data-test="drink-select-size-container"]').exists()).toBe(true);
  });

  it('displays title of drink size', () => {
    const testSizeTitle = '사이즈';

    expect(wrapper.find('h4[data-test="drink-select-size-title"]').text()).toBe(testSizeTitle);
  });

  it('checks rendering every single size of drink with text and icon from given data property', async () => {
    const testSizes = [
      {
        icon: 'fa-solid fa-mug-saucer fa-xs',
        text: 'Short',
      },
      {
        icon: 'fa-solid fa-mug-saucer fa-sm',
        text: 'Tall',
      },
      {
        icon: 'fa-solid fa-mug-saucer fa-lg',
        text: 'Grande',
      },
      {
        icon: 'fa-solid fa-mug-saucer fa-xl',
        text: 'Venti',
      },
    ];

    await wrapper.setData({
      drink: {
        sizes: testSizes,
      },
    });

    for (let i = 0; i < testSizes.length; i += 1) {
      const buttonWrapper = wrapper.get(`button[data-test="drink-size-${testSizes[i].text}"]`);
      const iconWrapper = wrapper.get(`i[data-test="drink-size-${testSizes[i].icon}"]`);

      expect(buttonWrapper.text()).toEqual(testSizes[i].text);
      expect(iconWrapper.html()).toContain(testSizes[i].icon);
    }
  });
});

describe('drink-select-cup-type-container 부분의 unit test 입니다 - coverage for feature requirement #9', () => {
  const wrapper = mount(DrinkInfo);

  it('verifies drink-select-cup-type-container', () => {
    expect(wrapper.find('div[data-test="drink-select-cup-type-container"]').exists()).toBe(true);
  });

  it('displays title of drink size', () => {
    const testCupType = '컵 선택';

    expect(wrapper.find('h4[data-test="drink-select-cup-type-title"]').text()).toBe(testCupType);
  });
  it('renders types of cup listed in the drink data property', async () => {
    const testCupTypes = ['매장 컵', '개인 컵', '일회용 컵'];

    await wrapper.setData({
      drink: {
        cupTypes: testCupTypes,
      },
    });

    for (let i = 0; i < testCupTypes.length; i += 1) {
      const buttonWrapper = wrapper.get(`button[data-test="drink-select-${testCupTypes[i]}"]`);

      expect(buttonWrapper.text()).toEqual(testCupTypes[i]);
    }
  });
});

describe('drink-personal-option-container 부분의 unit test 입니다 - coverage for feature requirement # 10', () => {
  const wrapper = mount(DrinkInfo);

  it('finds drink-personal-option-container', () => {
    expect(wrapper.find('div[data-test="drink-personal-option-container"]').exists()).toBe(true);
  });

  it('renders drink-personal-option-title element with following text', () => {
    const testTitle = '퍼스널 옵션';
    const titleWrapper = wrapper.get('h4[data-test="drink-personal-option-title"]');

    expect(titleWrapper.exists()).toBe(true);
    expect(titleWrapper.text()).toEqual(testTitle);
  });

  it('tests personal option type name, from given data', async () => {
    const testName = '테스트 에스프레소 샷';

    await wrapper.setData({
      drink: {
        personalOption: {
          espressoShot: {
            name: testName,
          },
        },
      },
    });

    expect(wrapper.find('div[data-test="drink-personal-option-name"]').text()).toBe(testName);
  });

  it('tests personal option quantity changes', async () => {
    const testDefaultQuantity = 1;
    const decreaseButton = wrapper.get('button[data-test="decrease-button"]');
    const increaseButton = wrapper.get('button[data-test="increase-button"]');
    const showQuantityWrapper = wrapper.get('span[data-test="personal-option-quantity"]');
    const testOutputForIncrement = 2;

    await wrapper.setData({
      drink: {
        personalOption: {
          espressoShot: {
            defaultQuantity: testDefaultQuantity,
          },
        },
      },
    });

    expect(showQuantityWrapper.text()).toContain(testDefaultQuantity.toString());

    await increaseButton.trigger('click');

    expect(showQuantityWrapper.text()).toContain(testOutputForIncrement.toString());

    await decreaseButton.trigger('click');

    expect(showQuantityWrapper.text()).toContain(testDefaultQuantity.toString());
  });
});

describe('drink-draft-order-container 부분의 unit test 입니다 - coverage for feature requirement # 11', () => {
  const wrapper = mount(DrinkInfo);

  const drinkDecButton = wrapper.get('button[data-test="drink-counter-decrease"]');
  const drinkIncButton = wrapper.get('button[data-test="drink-counter-increase"]');
  const drinkQuantity = wrapper.get('span[data-test="drink-quantity"]');
  const optionDecButton = wrapper.get('button[data-test="decrease-button"]');
  const optionIncButton = wrapper.get('button[data-test="increase-button"]');

  it('renders drink-draft-order-container', () => {
    expect(wrapper.find('div[data-test="drink-draft-order-container"]').exists()).toBe(true);
  });

  test('음료의 수량을 정할 수 있는 UI의 존재여부를 확인합니다', () => {
    expect(wrapper.find('div[data-test="drink-quantity-counter"]').exists()).toBe(true);
  });
  test('음료의 수량을 정할 수 있는 UI의 포함 요소들의 존재여부를 확인합니다', () => {
    expect(drinkDecButton.exists()).toBe(true);
    expect(drinkIncButton.exists()).toBe(true);
    expect(drinkQuantity.exists()).toBe(true);
  });
  test('주문의 최종가격의 정보를 담을 요소의 존재여부를 확인합니다', () => {
    expect(wrapper.find('div[data-test="drink-final-price"]').exists()).toBe(true);
  });

  test('해당 음료의 즐겨찾기를 등록할수 있는 버튼의 존재여부를 확인합니다', () => {
    expect(wrapper.find('button[data-test="drink-is-favorite"]').exists()).toBe(true);
  });

  test('해당 음료를 장바구니에 담을수 있는 버튼의 존재 여부를 확인합니다', () => {
    expect(wrapper.find('button[data-test="drink-to-cart"]').exists()).toBe(true);
  });

  test('해당 음료에 대한 주문을 진행할수 있는 버튼의 존재여부를 확인합니다', () => {
    expect(wrapper.find('button[data-test="drink-order"]').exists()).toBe(true);
  });

  test('음료의 수량 증가 및 감소 버튼이 작동하는지', async () => {
    const testDrinkQuantity = 1;
    const testOuputQuantity = 2;
    await wrapper.setData({
      drink: {
        defaultQuantity: testDrinkQuantity,
      },
    });
    expect(drinkQuantity.text()).toContain(testDrinkQuantity.toString());
    await drinkIncButton.trigger('click');
    expect(drinkQuantity.text()).toContain(testOuputQuantity.toString());
    await drinkDecButton.trigger('click');
    expect(drinkQuantity.text()).toContain(testDrinkQuantity.toString());
  });

  test('음료의 최종가격이 음료의 수량의 변경, 퍼스널 옵션의 수량의 변경에도 올바르게 렌더링 되는지', async () => {
    const testDrinkQuantity = 1;
    const testOptionQuantity = 1;
    const finalPriceWrapper = wrapper.get('div[data-test="drink-final-price"]');
    const finalPrice = 5000;
    const oneOptionAddPrice = 5500;
    const oneOptionTwoDrinkAddPrice = 11000;

    await wrapper.setData({
      drink: {
        personalOption: {
          espressoShot: {
            defaultQuantity: testOptionQuantity,
          },
        },
        defaultQuantity: testDrinkQuantity,
      },
    });

    expect(finalPriceWrapper.text()).toBe(`${finalPrice.toLocaleString()}원`);

    await optionIncButton.trigger('click');

    expect(finalPriceWrapper.text()).toBe(`${oneOptionAddPrice.toLocaleString()}원`);

    await drinkIncButton.trigger('click');

    expect(finalPriceWrapper.text()).toBe(`${oneOptionTwoDrinkAddPrice.toLocaleString()}원`);

    await drinkDecButton.trigger('click');

    expect(finalPriceWrapper.text()).toBe(`${oneOptionAddPrice.toLocaleString()}원`);

    await optionDecButton.trigger('click');

    expect(finalPriceWrapper.text()).toBe(`${finalPrice.toLocaleString()}원`);
  });
});
