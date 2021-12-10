import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';

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
