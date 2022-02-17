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
