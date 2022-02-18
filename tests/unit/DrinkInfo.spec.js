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

describe('drink-description-container 부분의 unit test 입니다 - coverage fro requirements #3 ~ #6', () => {
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

