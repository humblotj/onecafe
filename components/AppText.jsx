import React from 'react';
import { Text, StyleSheet } from 'react-native';

/*

리엑트 네이티브에서 모든 텍스트는 텍스트 구성요소(Text component)의 직계자식 텍스트여야 합니다.
다음은 앱에 사용할 사용자 지정 텍스트 구성 요소입니다.
- 기본 글꼴 크기(default font-size)
- 기본 색깔(defaut color)
- 기본 글꼴, 선 높이등을 추가할 수도 있습니다.
 */

const AppText = ({ children, style, ...rest }) => (
  <Text style={[styles.text, style]} {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#000',
  },
});

export default AppText;
