import { useReducer } from 'react';

/* 
이 hook는 MenuShowScreen 구성 요소 내부에 직접 작성할 수 있습니다.
좀 더 읽기 쉽게 하려고 바깥에 썼어요.
*/

/* 
여기선 희귀한 react useReducer hook을 사용합니다. 
useState와 같이 구성 요소의 상태를 다루는 훅으로 만약 redux를 안다면 그것과 비슷합니다.

실제 환경에서는 redux와 같은 상태 관리 라이브러리를 설치하거나 또는 폼 상태의 경우 "react redux form" 또는 "Formik"과 같은 폼 관리 라이브러리를
선호하기 때문에 useReducer가 거의 사용되지 않습니다.

또 다른 라이브러리를 추가하고 싶지는 않기 때문에 리엑트 라이브러리에 대해 추가로 공부할 필요는 없습니다.
그러나 위에서 언급한 라이브러리는 React와 함께 매우 일반적으로 사용됩니다.
*/

/* 
Reducer는 구성 요소가 "전송된 순서에 따라 상태가 어떻게 변경되는지를 정의합니다.
구성 요소/앱의 새 상태를 반환합니다.
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
  useReducer가 관리하는 상태와 순서를 보낼 수 있는 "수정" 메소드를 반환합니다.
  위에서 정의한 환원기와 구성 요소의 초기 상태를 인수로 사용합니다.
  */
  const [state, dispatch] = useReducer(reducer, {
    sizeSelected: sizeSelected || 'Small',
    milkSelected: milkSelected || null,
    toppings: toppings || { Sugar: 0, Cocoa: 0, Cinnamon: 0, Ice: 0 },
  });

  /* 
  여기서 MenuShowScreen 구성요소에서 사용되는 메소드를 정의했습니다.
  메소드는 구성 요소의 상태를 수정하도록 작업(=오더)과 페이로드(=매개 변수)를 Reducer로 dispatch(=전송)합니다.
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

  /* 이 사용자 커스텀 훅 구성요소로 되돌아가는 내용입니다.*/
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
