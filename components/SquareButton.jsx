import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import TouchableRipple from './TouchableRipple';
import AppText from './AppText';

/*
크기가 다른 SquareButton 을 정의합니다.
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
  size: PropTypes.string /* 버튼의 크기 */,
  active: PropTypes.bool /* 활성 여부에 관계없이 색상을 변경합니다.*/,
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]) /* 텍스트의 사용자 스타일을 정의합니다. */,
};
SquareButton.defaultProps = {
  size: 'large',
  active: false,
  textStyle: {},
};

export default SquareButton;
