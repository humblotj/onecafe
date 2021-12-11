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
Header of your Customer Bottom Navigator
Return your logo, the name of your screen and the back button
In some screens, there is no back button
Add a noBackButton property for that
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
        {/* AND operators, it means if noBackButton is true "execute" the left operand... which is "return back button"  */}
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
    With react native you can write different code for android and iOS.
    It is sometimes necessary because android and iOS have different behavior
    Just use Platform.OS === 'ios' or Platform.OS === 'android'
    Here there is status bar for Android but not in iOS...
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
