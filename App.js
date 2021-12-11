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
App component return YOUR APP
Here it returns the customer bottom tab navigator
A navigator defines the routes of your app
Check the navigators folders to see all the navigators of your app
*/

const App = () => {
  /* 
  Global state of your app
  "Favourite" is pass to all the children component of App component via a Provider
  Use Context inside the child component to get the "Favourite" of the Provider
  */
  const [favourite, setFavourite] = useState(null);
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
