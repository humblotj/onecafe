import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'sizeChanged':
      return { ...state, sizeSelected: action.payload };
    case 'milkChanged':
      return { ...state, milkSelected: action.payload };
    case 'toppingIncrease': {
      const oldToppings = state.toppings;
      const oldToppingQuantity = oldToppings[action.payload];

      if (oldToppingQuantity >= 9) {
        return state;
      }

      return {
        ...state,
        toppings: {
          ...oldToppings,
          [action.payload]: oldToppingQuantity + 1,
        },
      };
    }
    case 'toppingDecrease': {
      const oldToppings = state.toppings;
      const oldToppingQuantity = oldToppings[action.payload];

      if (oldToppingQuantity <= 0) {
        return state;
      }

      return {
        ...state,
        toppings: {
          ...oldToppings,
          [action.payload]: oldToppingQuantity - 1,
        },
      };
    }
    case 'toppingDelete': {
      const oldToppings = state.toppings;
      return {
        ...state,
        toppings: {
          ...oldToppings,
          [action.payload]: 0,
        },
      };
    }
    default:
      throw state;
  }
};

const useSelectExtras = ({ sizeSelected, milkSelected, toppings }) => {
  const [state, dispatch] = useReducer(reducer, {
    sizeSelected: sizeSelected || 'Small',
    milkSelected: milkSelected || null,
    toppings: toppings || { Sugar: 0, Cocoa: 0, Cinnamon: 0, Ice: 0 },
  });

  const onSizeSelected = (size) =>
    dispatch({ type: 'sizeChanged', payload: size });

  const onMilkChange = (milk) =>
    dispatch({
      type: 'milkChanged',
      payload: milk !== state.milkSelected ? milk : null,
    });

  const onToppingIncrease = (topping) =>
    dispatch({
      type: 'toppingIncrease',
      payload: topping,
    });

  const onToppingDecrease = (topping) =>
    dispatch({
      type: 'toppingDecrease',
      payload: topping,
    });

  const onToppingDelete = (topping) =>
    dispatch({
      type: 'toppingDelete',
      payload: topping,
    });

  return {
    ...state,
    onSizeSelected,
    onMilkChange,
    onToppingIncrease,
    onToppingDecrease,
    onToppingDelete,
  };
};

export default useSelectExtras;
