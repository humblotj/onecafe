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
  /* 
  Pro tip: 
  Don't try to understand useMemo hook if you don't understand the virtual DOM of React
  It is probably the hardest thing to understand in this demo app...

  Just memorize this pattern if you don't understand the virtual DOM of React
  And that this pattern is used to pass a global state (=value) to your app

  Explanation of useMemo:
  The value you want to pass is {favourite, setFavourite}, you use useMemo to tell your children
  this value change only when favourite changes (because only favourite is in the second array argument)
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
