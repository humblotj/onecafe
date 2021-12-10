import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/Customer/menu/MenuScreen';
import MenuShowScreen from '../screens/Customer/menu-show/MenuShowScreen';
import ScreenHeader from '../components/ScreenHeader';

const Stack = createNativeStackNavigator();

const MenuStackNavigator = () => {
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
