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
navigator가 앱의 경로를 정의합니다.
이는 웹 사이트의 URL 경로를 정의하는 것과 같습니다.
stack navigator는 공통 헤더를 공유하거나 공통 헤더를 공유하지 않는 화면 경로를 정의하는 가장 간단한 네비게이터입니다.
A bottom tab navigator는 stack navigator를 확장합니다.
A bottom tab navigator는 common bottom tab menu를 공유하는 화면 경로를 정의하는 곳입니다.
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
      /*모든 화면에 대한 기본 화면 옵션을 화면의 옵션 매개 변수를 통해 특정 화면에 대해 재정의합니다*/
      screenOptions={({ route }) => ({
        header: () => getHeader(route),
        tabBarIcon: ({ focused }) => getTabBarIcon({ focused, route }),
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarActiveTintColor: '#000',
        tabBarButton: getTabBarButton,
        tabBarLabel: ({ focused, color }) =>
          getTabBarLabel({ focused, color, route }),
        /*
        모바일 앱에서는 하단 탭 화면을 방문할 때마다 사라지지 않고 백그라운드에서 계속 돌아갑니다.
        이전 화면으로 돌아갈때, 예를 들어 스크롤 위치나 화면 상태를 유지하려는 경우 이 방법이 좋습니다.
        하지만 스택이 계속 쌓이기 때문에 성능 면에서는 좋지 않은 영향을 끼칩니다.
        mountOnBlur=true 를 설정하여 이 동작을 사용하지 않도록 설정할 수 있습니다.
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
