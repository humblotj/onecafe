import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import SquareButton from '../../../../components/SquareButton';
import Bold from '../../../../components/Bold';

/* 
Size button component reusable
Change color on active or not
*/

const SizeButton = ({ children, style, onPress, active, price }) => {
  return (
    <View>
      <SquareButton
        onPress={onPress}
        style={[active && styles.active, style]}
        textStyle={[styles.bold, active && styles.textActive]}
      >
        {children}
      </SquareButton>
      <Bold style={styles.price}>${price}</Bold>
    </View>
  );
};

const styles = StyleSheet.create({
  sizeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  active: {
    backgroundColor: '#6077ec',
  },
  textActive: {
    color: '#fff',
  },
  bold: {
    fontWeight: '700',
  },
  price: {
    marginTop: 4,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

SizeButton.propTypes = {
  active: PropTypes.bool,
  price: PropTypes.number.isRequired,
};
SizeButton.defaultProps = {
  active: false,
};

export default SizeButton;
