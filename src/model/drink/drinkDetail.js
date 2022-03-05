export default {
  image: 'https://coffee.alexflipnote.dev/random',
  name: '카페라떼',
  nameEng: 'Caffe Latte',
  preference: 'Best',
  description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
  defaultPrice: 5000,
  temperature: null,
  sizes: [
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
  ],
  cupTypes: ['매장 컵', '개인 컵', '일회용 컵'],
  personalOption: {
    espressoShot: {
      name: '에스프레소 샷',
      defaultQuantity: 1,
      price: 500,
    },
  },
  defaultQuantity: 1,
  options: [{}],
};
