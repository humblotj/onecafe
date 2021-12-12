import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import PropTypes from 'prop-types';

import TouchableRipple from '../../../components/TouchableRipple';
import AppText from '../../../components/AppText';

/* 
메뉴 항목 귀환
눌려진 항목의 메뉴 표시로 이동합니다.
*/

const MenuItem = ({ name, picture }) => {
  const navigation = useNavigation();

  /* MenuShow에 가서 상품명을 params으로 전달합니다. */
  const navigateToItem = () => navigation.push('MenuShow', { name });

  return (
    <TouchableRipple style={styles.menuItem} onPress={navigateToItem}>
      <View style={styles.imageContainer}>
        <Image source={picture} style={styles.image} resizeMode="cover" />
      </View>
      <AppText style={styles.text}>{name}</AppText>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  menuItem: { flex: 1, margin: 8, backgroundColor: '#fff' },
  imageContainer: { flexDirection: 'row' },
  image: { flex: 1, aspectRatio: 1 },
  text: {
    textAlign: 'center',
    paddingVertical: 12,
  },
});

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.number.isRequired,
};

export default MenuItem;
