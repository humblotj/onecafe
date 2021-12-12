import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/menu/MenuScreen';
import MenuShowScreen from '../screens/menu-show/MenuShowScreen';
import ScreenHeader from '../components/ScreenHeader';

/*
이 탐색기는 CustomerBottomTabNavigator의 중첩된 탐색기입니다.
 menu/main 과 menu/coffee 를 떠올리시면 됩니다.
*/

const Stack = createNativeStackNavigator();

const MenuStackNavigator = () => {
  /* 경로 이름에 따라 헤더값을 반환합니다. */
  const getHeader = (route) => {
    switch (route.name) {
      case 'MenuMain':
        return <ScreenHeader>The Menu</ScreenHeader>;
      case 'MenuShow':
        return <ScreenHeader>Coffee</ScreenHeader>;
      default:
        return null;
    }
  };

  return (
    <Stack.Navigator
      initialRouteName="MenuMain"
      screenOptions={({ route }) => ({
        header: () => getHeader(route),
      })}
    >
      <Stack.Screen name="MenuMain" component={MenuScreen} />
      <Stack.Screen name="MenuShow" component={MenuShowScreen} />
    </Stack.Navigator>
  );
};

export default MenuStackNavigator;
