import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

/*
웹에서 onClick을 하면 리엑트 네이티브에서 onPress 상태가 됩니다.
TouchableOpacity 또는 TouchableHighLight와 같은 일부 구성 요소만 OnPress를 사용할 수 있습니다.
 또한 beautiful ripple effect가 있는 커스텀 "터치형" 구성 요소가 있습니다.
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
