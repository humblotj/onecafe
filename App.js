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

const App = () => {
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
