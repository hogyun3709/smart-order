import { mount } from '@vue/test-utils';
import DrinkInfo from '@/components/DrinkInfo.vue';

import MenuBottom from '@/components/MenuBottom.vue';

describe('test coverage for requirements #1', () => {
  it('verifies MenuBottom component renders', () => {
    const wrapper = mount(DrinkInfo);

    expect(wrapper.findComponent(MenuBottom).exists()).toBe(true);
  });
});
