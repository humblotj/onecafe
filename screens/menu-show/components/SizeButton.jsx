import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import SquareButton from '../../../components/SquareButton';
import Bold from '../../../components/Bold';

/* 
단추크기의 구성 요소가 재사용 가능합니다.
활성 상태에서 색상이 변경됩니다.
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
