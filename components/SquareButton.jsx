import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import TouchableRipple from './TouchableRipple';
import AppText from './AppText';

/*
SquareButton with different size (large or small)
 */

const SquareButton = ({ size, children, style, textStyle, ...rest }) => {
  return (
    <TouchableRipple
      style={[
        styles.squareButton,
        size === 'small' && styles.smallButton,
        style,
      ]}
      {...rest}
    >
      <AppText style={[size === 'large' && styles.largeText, textStyle]}>
        {children}
      </AppText>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  squareButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  smallButton: {
    width: 20,
    height: 20,
  },
  largeText: {
    fontSize: 16,
  },
});

SquareButton.propTypes = {
  size: PropTypes.string /* size of your button: large or small */,
  active: PropTypes.bool /* active or not, change the color */,
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]) /* custom styles of your text */,
};
SquareButton.defaultProps = {
  size: 'large',
  active: false,
  textStyle: {},
};

export default SquareButton;
