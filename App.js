import React, { useState, useMemo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigators/AppNavigator';
import FavouriteContext from './context/FavouriteContext';

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
        <AppNavigator />
      </NavigationContainer>
    </FavouriteContext.Provider>
  );
};

export default App;
