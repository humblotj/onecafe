import React from 'react';
import { Text, StyleSheet } from 'react-native';

/*
In react native EVERY text should be a direct child of the Text component.
Here is a Custom Text component for our App in order to have:
- a default font-size
- a defaut color
- you can also add default font-family, line-height...
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
