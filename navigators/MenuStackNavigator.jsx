import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/Customer/menu/MenuScreen';
import MenuShowScreen from '../screens/Customer/menu-show/MenuShowScreen';
import ScreenHeader from '../components/ScreenHeader';

/*
This navigator is a nested navigator of CustomerBottomTabNavigator
Think like it is menu/main and menu/coffee urls
*/

const Stack = createNativeStackNavigator();

const MenuStackNavigator = () => {
  /* Return the Header according to the name of the route */
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
      <Stack.Screen
        name="MenuMain"
        component={MenuScreen}
        options={{ unmountOnBlur: true }}
      />
      <Stack.Screen
        name="MenuShow"
        component={MenuShowScreen}
        options={{ unmountOnBlur: true }}
      />
    </Stack.Navigator>
  );
};

export default MenuStackNavigator;
