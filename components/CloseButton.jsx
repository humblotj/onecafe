import React from 'react';
import { StyleSheet } from 'react-native';

import CloseIcon from './icons/CloseIcon';
import TouchableRipple from './TouchableRipple';

/* 
Red delete button with white cross
*/

const CloseButton = ({ onPress, style }) => {
  return (
    <TouchableRipple style={[styles.closeButton, style]} onPress={onPress}>
      <CloseIcon style={styles.closeIcon} />
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 12,
    width: 12,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  closeIcon: {
    color: '#fff',
  },
});

export default CloseButton;
