import { toppingsList } from '../screens/menu-show/components/SelectExtras';

/* 구성 요소에 사용할 메서드 및 변수*/

/* 
당신의 앱의 메뉴
실제 환경에서는 API 호출을 통해 백엔드에서 메뉴를 가져와야 합니다
*/
export const menuList = {
  Latte: {
    picture: require('../assets/latte.png'),
    sizes: {
      Small: { price: 4 },
      Medium: { price: 4.5 },
      Large: { price: 5.5 },
    },
  },
  Matcha: {
    picture: require('../assets/matcha.png'),
    sizes: {
      Small: { price: 4 },
      Medium: { price: 5 },
      Large: { price: 6 },
    },
  },
  'Iced Latte': {
    picture: require('../assets/icedLatte.png'),
    sizes: {
      Small: { price: 4 },
      Medium: { price: 4.5 },
      Large: { price: 5.5 },
    },
  },
  Cappucino: {
    picture: require('../assets/cappucino.png'),
    sizes: {
      Small: { price: 4.5 },
      Medium: { price: 4.5 },
      Large: { price: 5.5 },
    },
  },
};

/*  총 비용을 계산하는 메소드 */

export const getTotalPrice = ({ name, size, milk, toppings }) => {
  let totalPrice = menuList[name].sizes[size].price;
  if (milk) {
    totalPrice += 0.2;
  }
  Object.entries(toppings).forEach(([topping, quantity]) => {
    totalPrice += quantity * toppingsList[topping].price;
  });
  return totalPrice.toFixed(2);
};
