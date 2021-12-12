import { toppingsList } from '../screens/menu-show/components/SelectExtras';

/* utils methods/variables to use in differents components */

/* 
the menu of your app
in a real environment you should get your menu from your backend via API call
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

/* method to calculate the total price */

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
