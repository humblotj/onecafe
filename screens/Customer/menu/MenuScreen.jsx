import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { menuList } from '../../../utils/utils';
import Container from '../../../components/Container';
import Bold from '../../../components/Bold';
import MenuItem from './components/MenuItem';

const MenuScreen = () => {
  const keyExtractor = (item) => item[0];
  const renderItem = ({ item: [name, { picture }] }) => (
    <MenuItem name={name} picture={picture} />
  );

  return (
    <Container noScroll contentContainerStyle={styles.contentContainerStyle}>
      <Bold style={styles.title}>Coffee</Bold>
      <FlatList
        contentContainerStyle={styles.listContentContainerStyle}
        data={Object.entries(menuList)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        horizontal={false}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 40,
    paddingHorizontal: 40,
  },
  title: {
    marginLeft: 20,
    marginBottom: 12,
    color: '#fff',
    fontSize: 20,
  },
  listContentContainerStyle: {
    backgroundColor: '#ebebeb',
  },
});

export default MenuScreen;
