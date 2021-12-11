import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

/*
The onClick of the web become onPress in react native
Only a few components can have onPress like TouchableOpacity or TouchableHighlight
Here is a custom "Touchable" component with a beautiful ripple effect
 */

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
