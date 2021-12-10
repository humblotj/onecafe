import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppText = ({ children, style, ...rest }) => (
  <Text style={[styles.text, style]} {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'rgb(34, 34, 34)',
  },
});

export default AppText;
