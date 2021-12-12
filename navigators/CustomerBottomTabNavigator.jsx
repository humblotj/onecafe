import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppText from '../components/AppText';
import TouchableRipple from '../components/TouchableRipple';
import CustomerHomeScreen from '../screens/customer-home/CustomerHomeScreen';
import FavouriteScreen from '../screens/favourite/FavouriteScreen';
import MenuStackNavigator from './MenuStackNavigator';
import ScreenHeader from '../components/ScreenHeader';
import HomeIcon from '../components/icons/HomeIcon';
import StarIcon from '../components/icons/StarIcon';
import MenuIcon from '../components/icons/MenuIcon';

/*
A navigator defines the routes of your app
It is like defining url routes of a website
A stack navigator is the simpliest navigator where you define the screen routes which share a common header or nothing in common
A bottom tab navigator extends a stack navigator
A bottom tab navigator is where you define the screen routes which share a common bottom tab menu
*/

const Tab = createBottomTabNavigator();

const CustomerBottomTabNavigator = () => {
  /* return the header according to the route name */
  const getHeader = (route) => {
    switch (route.name) {
      case 'Home':
        return (
          <ScreenHeader noBackButton textColor="#d2ad32">
            Dear Tony
          </ScreenHeader>
        );
      case 'Favourite':
        return <ScreenHeader>My Favourite</ScreenHeader>;
      default:
        return null;
    }
  };

  const getTabBarIcon = ({ focused, route }) => {
    const style = [styles.tabIcon, focused && styles.tabIconActive];
    switch (route.name) {
      case 'Home':
        return <HomeIcon style={style} />;
      case 'Favourite':
        return <StarIcon style={style} />;
      case 'Menu':
        return <MenuIcon style={style} />;
      default:
        return null;
    }
  };

  const getTabBarButton = (props) => (
    <TouchableRipple style={styles.tabBarButtton} borderless {...props} />
  );

  const getTabBarLabel = ({ focused, color, route }) => (
    <AppText
      style={[{ color }, styles.tabLabel, focused && styles.tabLabelActive]}
    >
      {route.name}
    </AppText>
  );

  return (
    <Tab.Navigator
      // default screen options for all your screen you override them for a specific screen via the options parameters of your screen
      screenOptions={({ route }) => ({
        header: () => getHeader(route),
        tabBarIcon: ({ focused }) => getTabBarIcon({ focused, route }),
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarActiveTintColor: '#000',
        tabBarButton: getTabBarButton,
        tabBarLabel: ({ focused, color }) =>
          getTabBarLabel({ focused, color, route }),
        /*
        In a mobile app, whenever you visit a screen of bottom tab, it doesn't dissapear, it just in the running in the background
        Which is good if you want to go back to a previous a screen and keep for example the scroll position or the state of your screen
        But it is really bad performance wise because your stacks keeps accumulating
        You can disabled this behavior for a screen by setting unmountOnBlur=true
        */
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen name="Home" component={CustomerHomeScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Menu" component={MenuStackNavigator} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    color: '#B0B0B0',
    width: 24,
    height: 24,
  },
  tabBarButtton: {
    flex: 1,
  },
  tabIconActive: {
    color: '#000',
  },
  tabLabel: {
    marginTop: -5,
    marginBottom: 5,
    fontSize: 10,
    textAlign: 'center',
    color: '#222222',
  },
  tabLabelActive: {
    fontWeight: '600',
  },
});

export default CustomerBottomTabNavigator;
