import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

const TouchableRipple = ({ children, style, borderless, ...rest }) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple('rgba(0,0,0, 0.1)', borderless)}
    style={style}
    {...rest}
  >
    <View style={style}>{children}</View>
  </TouchableNativeFeedback>
);

export default TouchableRipple;

TouchableRipple.propTypes = {
  borderless: PropTypes.bool,
};

TouchableRipple.defaultProps = {
  borderless: false,
};
