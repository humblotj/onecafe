import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';

import CustomerBottomTabNavigator from './CustomerBottomTabNavigator';
import { Platform, StyleSheet, View } from 'react-native';
import Bold from '../components/Bold';
import Logo from '../components/icons/Logo';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const header = () => (
    <View style={styles.header}>
      <Logo />
      <Bold style={styles.appName}>OneCafe</Bold>
    </View>
  );

  return (
    <Stack.Navigator
      screenOptions={{
        header,
      }}
    >
      <Stack.Screen name="Customer" component={CustomerBottomTabNavigator} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    paddingVertical: 4,
  },
  appName: {
    fontSize: 20,
    textAlign: 'center',
    color: '#817d7d',
    lineHeight: 22,
  },
});

export default AppNavigator;
