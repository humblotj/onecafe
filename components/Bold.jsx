import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';

/*
AppText 구성 요소의 굵은 텍스트 기반 구성 요소를 정의합니다.
 */

const Bold = ({ children, style, ...rest }) => {
  return (
    <AppText style={[styles.bold, style]} {...rest}>
      {children}
    </AppText>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
});

export default Bold;
