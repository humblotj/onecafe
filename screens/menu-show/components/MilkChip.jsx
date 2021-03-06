import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import AppText from '../../../components/AppText';
import TouchableRipple from '../../../components/TouchableRipple';

/* 
milk 항목에서가 누를 수 있는 구성 요소
활성 상태에서 색상 변경 여부
*/

const MilkChip = ({ children, style, active, onPress }) => {
  return (
    <TouchableRipple
      style={[styles.milkChip, active && styles.active, style]}
      onPress={onPress}
    >
      <AppText style={[styles.text, active && styles.textActive]}>
        {children}
      </AppText>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  milkChip: {
    backgroundColor: '#584438',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  active: {
    backgroundColor: '#efa354',
  },
  text: {
    color: '#988779',
  },
  textActive: {
    color: '#fff',
  },
});

MilkChip.propTypes = {
  active: PropTypes.bool,
};
MilkChip.defaultProps = {
  active: false,
};

export default MilkChip;
