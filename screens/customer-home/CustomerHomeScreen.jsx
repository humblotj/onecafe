import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Container from '../../components/Container';
import AlertModal from '../../components/AlertModal';
import Bold from '../../components/Bold';
import Button from '../../components/Button';
import FavouriteContext from '../../context/FavouriteContext';
import { getTotalPrice } from '../../utils/utils';
import AppText from '../../components/AppText';

/* Home Screen */

const CustomerHomeScreen = ({ navigation }) => {
  /* Get the favourite of your parent provider by using useContext hook */
  const { favourite } = useContext(FavouriteContext);

  const [alertModalVisible, setAlertModalVisible] = useState(false);

  const onOrder = () => setAlertModalVisible(true);

  /* If no favourite, the component return 'You don't have favourite yet' */
  if (!favourite) {
    return (
      <Container>
        <View style={styles.container}>
          <AppText>You don&apos;t have favourite yet</AppText>
        </View>
      </Container>
    );
  }

  /* Pro tip: use ES6 object destructuration instead of favourite.name, favourite.size, etc...
  Be caferul, object destructuration only work if object is not null...
  Here this line is not executed if favourite is null... check above
  */
  const { name, size, milk, toppings } = favourite;

  /* How to navigate nested navigator 
     It is like go to menu/menu-show in web
  */
  const onEdit = () =>
    navigation.jumpTo('Menu', { screen: 'MenuShow', params: favourite });

  return (
    <Container>
      <View style={styles.container}>
        <Bold style={styles.white}>My favourite</Bold>
        <View style={styles.contentContainer}>
          <Bold>{size + ' ' + name}</Bold>
          <Bold>1</Bold>
          <Bold>${getTotalPrice({ name, size, milk, toppings })}</Bold>
          <Bold onPress={onEdit} style={styles.white}>
            Edit
          </Bold>
        </View>
        <Button style={styles.orderButton} onPress={onOrder}>
          Order
        </Button>
      </View>
      <AlertModal
        text="Ordered"
        visible={alertModalVisible}
        onRequestClose={() => setAlertModalVisible(false)}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#d2ad32',
  },
  white: {
    color: '#fff',
  },
  contentContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderButton: {
    width: 200,
    backgroundColor: '#403c3c',
    height: 30,
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default CustomerHomeScreen;
