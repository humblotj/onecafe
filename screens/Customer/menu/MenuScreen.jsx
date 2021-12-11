import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { menuList } from '../../../utils/utils';
import Container from '../../../components/Container';
import Bold from '../../../components/Bold';
import MenuItem from './components/MenuItem';

/* 
Menu screen
There is several ways to renders list of item in react native
The most commons one are:
The classic way with map ES6 operator: menuList.map((menu) => <MenuItem {...}/>) like you can in the web React
Or with the Flatlist component, ideal for long list because it is virtual list doesnt render all your items at once...
Use map for small predetermined list
Use Flatlist for long dynamic list
Here I use Flatlist because in the future they might be more items... But now there is only 4, so no performance difference...
*/

const MenuScreen = () => {
  const keyExtractor = (item) => item[0];
  const renderItem = ({ item: [name, { picture }] }) => (
    <MenuItem name={name} picture={picture} />
  );

  return (
    <Container noScroll contentContainerStyle={styles.contentContainerStyle}>
      <Bold style={styles.title}>Coffee</Bold>
      <FlatList
        /* style of the content container  of your list */
        contentContainerStyle={styles.listContentContainerStyle}
        /* data of your list */
        data={Object.entries(menuList)}
        /* 
        function that return the key of your item, 
        a key is what you use to tell React how to identify the item
        thanks to that, it knows quickly if for example of the item dissapears between two renders by comparing the previous keys and the next keys...
        */
        keyExtractor={keyExtractor}
        /*
        components to render for each of the item of your data
        */
        renderItem={renderItem}
        /*
        number of colums of your list
        */
        numColumns={2}
        /*
        scroll not horizontal
        */
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
