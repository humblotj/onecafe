import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Bold from './Bold';
import BackIcon from './icons/BackIcon';
import { useNavigation } from '@react-navigation/core';
import TouchableRipple from './TouchableRipple';

const ScreenHeader = ({ children, textColor, noBackButton }) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.header}>
      {!noBackButton && (
        <TouchableRipple style={styles.backButton} onPress={goBack}>
          <BackIcon />
        </TouchableRipple>
      )}
      <Bold style={[styles.headerText, textColor && { color: textColor }]}>
        {children}
      </Bold>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
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
