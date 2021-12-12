import React, { useState, useMemo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import FavouriteContext from './context/FavouriteContext';
import CustomerBottomTabNavigator from './navigators/CustomerBottomTabNavigator';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

/* 
앱 구성 요소가 앱을 반환합니다.
여기서 하단 탭 네비게이터를 반환합니다.
네비게이터가 앱의 경로를 정의합니다.
앱의 모든 네비게이터를 보려면 네비게이터 폴더를 확인하십시오.

*/

const App = () => {
  /* 

앱의 전역 상태
"Favourite"는 공급자를 통해 앱 구성 요소의 모든 하위 구성 요소에 전달됩니다.
하위 구성 요소 내부의 컨텍스트를 사용하여 공급자의 "Favourite" 가져오기
  */
  const [favourite, setFavourite] = useState(null);
  /* 
  짧은 팁:
 리액트의 Virtual DOM을 이해하지 못하는 경우 useMemo hook을 이해하기 어려우실 수도 있습니다.
 아마 이 데모 앱에서 가장 이해하기 어려운 내용일 거에요.

 리액트의 Virtual DOM을 이해하지 못하면 이 패턴을 기억하십시오.
 그리고 이 패턴은 앱에 글로벌 상태(=값)를 전달하는 데 사용됩니다.

  useMemo에 대한 설명:
  전달하려는 값은 {favorite, setFavorite}입니다. useMemo를 사용하여 자녀요소에게 전달합니다.
  이 값은 Favourite이 변경될 때만 변경됩니다.(두 번째 배열 인수에만 Favourite이 있기 때문입니다.)
  */
  const value = useMemo(() => ({ favourite, setFavourite }), [favourite]);

  return (
    <FavouriteContext.Provider value={value}>
      <StatusBar theme="light" />
      <NavigationContainer theme={Theme}>
        <CustomerBottomTabNavigator />
      </NavigationContainer>
    </FavouriteContext.Provider>
  );
};

export default App;
