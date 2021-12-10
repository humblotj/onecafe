import React from 'react';
import { StyleSheet } from 'react-native';
import Bold from './Bold';

import TouchableRipple from './TouchableRipple';

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
