import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';

/*
Component for bold text base on AppText component for the default text styles...
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
