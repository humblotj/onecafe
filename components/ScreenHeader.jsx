import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';

import Bold from './Bold';
import BackIcon from './icons/BackIcon';
import { useNavigation } from '@react-navigation/core';
import TouchableRipple from './TouchableRipple';
import Logo from './icons/Logo';

/*
Customer Bottom Navigator의 헤더,
로고, 화면 이름 및 '뒤로' 버튼을 반환합니다.
일부 화면에는 뒤로 가기 버튼이 없으며
그곳에는 'noBackButton' 속성을 추가합니다.
 */

const ScreenHeader = ({ children, textColor, noBackButton }) => {
  const { goBack } = useNavigation();

  return (
    <View>
      <View style={styles.logoHeader}>
        <Logo />
        <Bold style={styles.appName}>OneCafe</Bold>
      </View>
      <View style={styles.localHeader}>
        {/*AND operator는 noBackButton이 참이면 왼쪽 피연산자를 "실행"합니다. 즉, "뒤로 돌아가기 버튼"입니다. */}
        {!noBackButton && (
          <TouchableRipple style={styles.backButton} onPress={goBack}>
            <BackIcon />
          </TouchableRipple>
        )}
        <Bold style={[styles.headerText, textColor && { color: textColor }]}>
          {children}
        </Bold>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    /* 
    리액트 네이티브를 사용하면 안드로이드와 iOS에 대해 서로 다른 코드를 작성할 수 있습니다.
    안드로이드와 iOS의 작동방식이 다르기 때문에 가끔 필요합니다.
    "Platform.OS === 'ios' or Platform.OS === 'android'"를 입력하시면 됩니다.
    여기에는 안드로이드용 상태 표시줄이 있지만 iOS에는 없습니다.
    */
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    paddingVertical: 4,
  },
  appName: {
    fontSize: 20,
    textAlign: 'center',
    color: '#817d7d',
    lineHeight: 22,
  },
  localHeader: {
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 14,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
  },
  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 20,
    width: 50,
    zIndex: 1,
  },
});

ScreenHeader.propTypes = {
  noBackButton: PropTypes.bool,
  textColor: PropTypes.string,
};
ScreenHeader.defaultProps = {
  noBackButton: false,
  textColor: null,
};

export default ScreenHeader;
