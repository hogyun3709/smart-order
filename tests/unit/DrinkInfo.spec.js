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
		]

		await wrapper.setData({
			drink: {
				sizes: testSizes
			}
		})

		for (let i = 0; i < testSizes.length; i += 1) {
			const buttonWrapper = wrapper.get(`button[data-test="drink-size-${testSizes[i].text}"]`);
			const iconWrapper = wrapper.get(`i[data-test="drink-size-${testSizes[i].icon}"]`)

			expect(buttonWrapper.text()).toEqual(testSizes[i].text)
			expect(iconWrapper.html()).toContain(testSizes[i].icon)
		}
	})
})
