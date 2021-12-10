import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppText from '../components/AppText';
import TouchableRipple from '../components/TouchableRipple';
import CustomerHomeScreen from '../screens/Customer/customer-home/CustomerHomeScreen';
import FavouriteScreen from '../screens/Customer/favourite/FavouriteScreen';
import MenuStackNavigator from './MenuStackNavigator';
import ScreenHeader from '../components/ScreenHeader';
import HomeIcon from '../components/icons/HomeIcon';
import StarIcon from '../components/icons/StarIcon';
import MenuIcon from '../components/icons/MenuIcon';

const Tab = createBottomTabNavigator();

const CustomerBottomTabNavigator = () => {
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
      screenOptions={({ route }) => ({
        header: () => getHeader(route),
        tabBarIcon: ({ focused }) => getTabBarIcon({ focused, route }),
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarActiveTintColor: '#000',
        tabBarButton: getTabBarButton,
        tabBarLabel: ({ focused, color }) =>
          getTabBarLabel({ focused, color, route }),
      })}
    >
      <Tab.Screen
        name="Home"
        component={CustomerHomeScreen}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStackNavigator}
        options={{ unmountOnBlur: true }}
      />
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
