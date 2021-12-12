import { useReducer } from 'react';

/* 
This hook can directly be written inside MenuShowScreen component
But to keep it more readable I wrote it outside it
*/

/* 
Here I use a rare hook of react useReducer
It is a hook to handle state of your component like useState but better if your state is big
If you know redux it is similar to it

In real environment useReducer is rarely used because you usually prefer to install a state management library like "redux"
or for form state a form management library like "react redux form" or "Formik"

Here I didn't want to add another library so you can't focus on studying only React library
However the libraries cited above are really commonly used with React you can check them later... 
*/

/* 
A reducer defined how your state is your going to change according to an action (=order) which was "dispatched" (=sent) by your component
It return the new state of your component/app
 */

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
  /* 
  useReducer return the state he manages and a "dispatch" method which allows to send an action (=order)
  it takes as arguments a reducer defined above and the initial state of your component
  */
  const [state, dispatch] = useReducer(reducer, {
    sizeSelected: sizeSelected || 'Small',
    milkSelected: milkSelected || null,
    toppings: toppings || { Sugar: 0, Cocoa: 0, Cinnamon: 0, Ice: 0 },
  });

  /* 
  Here I defined methods used by MenuShowScreen component
  The methods dispatch (=sent) an action (=order) and payload (=parameters) to the reducer so it modifies the state of the component
  */
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

  /* here is what this custom hook return to the component */
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
