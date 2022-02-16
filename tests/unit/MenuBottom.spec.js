import { mount } from '@vue/test-utils';
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/outline';
import MenuBottom from '@/views/MenuBottom.vue';

describe('MenuBottom.vue 파일의 unit test 입니다', () => {
  const menus = [
    {
      icon: HomeIcon,
      text: '홈',
    },
    {
      icon: ShoppingCartIcon,
      text: '장바구니',
    },
    {
      icon: CogIcon,
      text: '설정',
    },
  ];
  it('renders bottom-navigation related elements - container', () => {
    const wrapper = mount(MenuBottom);

    expect(wrapper.find('div[data-test="bottom-navigation"]').exists()).toBe(true);
    expect(wrapper.find('section[data-test="bottom-navigation-section"]').exists()).toBe(true);
    expect(wrapper.find('div[data-test="bottom-navigation-flex"]').exists()).toBe(true);
  });
  it('renders N(menus.length) of menus on the bottom navigation', () => {
    const wrapper = mount(MenuBottom);

    expect(wrapper.findAll('a[data-test="nav-menus"]').length).toBe(menus.length);
  });

  it('renders N of menus texts on the bottom navigation', () => {
    const wrapper = mount(MenuBottom);

    for (let i = 0; i < menus.length; i += 1) {
      expect(wrapper.findAll('p[data-test="nav-menu-text"]')[i].text()).toBe(`${menus[i].text}`);
    }
  });
  it('checks menus icons successfully render', () => {
    /* Icon 에 대한 존재 TC 는? */
  })
});
