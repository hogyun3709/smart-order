import { mount } from '@vue/test-utils';
import {
  HomeIcon, ClipboardListIcon, ShoppingCartIcon, CogIcon,
} from '@heroicons/vue/outline';
import MenuBottom from '@/components/MenuBottom.vue';

describe('MenuBottom.vue 파일의 unit test 입니다', () => {
  const menus = [
    {
      icon: HomeIcon,
      text: '홈',
    },
    {
      icon: ClipboardListIcon,
      text: '주문',
      link: '/product',
    },
    {
      icon: ShoppingCartIcon,
      text: '장바구니',
      link: '/cart',
    },
    {
      icon: CogIcon,
      text: '마이페이지',
      link: '/mypage',
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

    expect(wrapper.findAll('[data-test="nav-menus"]').length).toBe(menus.length);
  });

  it('renders N of menus texts on the bottom navigation', () => {
    const wrapper = mount(MenuBottom);

    for (let i = 0; i < menus.length; i += 1) {
      expect(wrapper.findAll('p[data-test="nav-menu-text"]')[i].text()).toBe(`${menus[i].text}`);
    }
  });
});
