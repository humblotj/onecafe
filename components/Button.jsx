import React from 'react';
import { StyleSheet } from 'react-native';
import Bold from './Bold';

import TouchableRipple from './TouchableRipple';

/* 
사용자 정의 "터치 가능" 구성요소를 사용하는 직사각형 버튼입니다.
*/

const Button = ({ style, children, onPress }) => {
  return (
    <TouchableRipple onPress={onPress} style={[styles.container, style]}>
      <Bold style={styles.text}>{children}</Bold>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    paddingHorizontal: 20,
    backgroundColor: '#6077ec',
  },
  text: {
    color: '#fff',
  },
});

export default Button;
