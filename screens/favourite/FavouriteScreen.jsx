import React, { Fragment, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../../components/AppText';
import Bold from '../../components/Bold';
import Button from '../../components/Button';
import Container from '../../components/Container';
import AlertModal from '../../components/AlertModal';
import FavouriteContext from '../../context/FavouriteContext';
import { toppingsList } from '../menu-show/components/SelectExtras';
import { getTotalPrice, menuList } from '../../utils/utils';

const FavouriteScreen = () => {
  /* Get the favourite of your parent provider by using useContext hook */
  const { favourite } = useContext(FavouriteContext);

  const [alertModalVisible, setAlertModalVisible] = useState(false);

  const onOrder = () => setAlertModalVisible(true);

  /* If no favourite, the component return 'You don't have favourite yet' */
  if (!favourite) {
    return (
      <Container>
        <View style={styles.noFavourite}>
          <AppText>You don&apos;t have favourite yet</AppText>
        </View>
      </Container>
    );
  }

  const { milk, size, name, toppings } = favourite;

  /* 
  Function that return the milk line of this screen

  Pro tip: You don't want your components to return too many lines or have too many depths (indentations)...
  Keep your components small to make them readable
  Here I separate the component into multiple block function
  Each function has one and only one purpose
  That is one of the core concept of functional programming and why people like it because it is readable if you follow the guideline
  */

  const getMilk = () => {
    if (milk) {
      return (
        <View style={styles.extraWrap}>
          <AppText style={[styles.name, styles.small]}>{milk}</AppText>
          <AppText style={[styles.quantity, styles.small]}>1</AppText>
          <AppText style={[styles.price, styles.small]}>$0.20</AppText>
        </View>
      );
    }
    return null;
  };

  const getTopping = ({ topping, quantity }) => {
    if (quantity) {
      return (
        <View style={styles.extraWrap}>
          <AppText style={[styles.name, styles.small]}>{topping}</AppText>
          <AppText style={[styles.quantity, styles.small]}>{quantity}</AppText>
          <AppText style={[styles.price, styles.small]}>
            ${(quantity * toppingsList[topping].price).toFixed(2)}
          </AppText>
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <Container>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Bold style={styles.title}>Select List</Bold>
            <View style={styles.productSelected}>
              <Bold style={styles.size}>{size}</Bold>
              <Bold style={styles.name}>{name}</Bold>
              <Bold style={styles.quantity}>1</Bold>
              <Bold style={styles.price}>
                ${menuList[name].sizes[size].price}
              </Bold>
            </View>
            <View>
              {getMilk()}
              {Object.entries(toppings).map(([topping, quantity]) => (
                <Fragment key={topping}>
                  {getTopping({ topping, quantity })}
                </Fragment>
              ))}
            </View>
          </View>
          <View style={styles.totalContainer}>
            <Bold style={styles.size}>Total</Bold>
            <View style={styles.saveWrap}>
              <Bold style={styles.totalPrice}>
                ${getTotalPrice({ name, size, milk, toppings })}
              </Bold>
              <Button onPress={onOrder}>Order</Button>
            </View>
          </View>
        </View>
      </Container>
      <AlertModal
        text="Ordered"
        visible={alertModalVisible}
        onRequestClose={() => setAlertModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 20,
  },
  noFavourite: {
    padding: 20,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },
  productSelected: {
    flexDirection: 'row',
  },
  small: {
    fontSize: 12,
  },
  size: {
    width: 70,
  },
  name: {
    flex: 1,
  },
  quantity: {
    width: 40,
  },
  price: {
    width: 40,
    textAlign: 'right',
  },
  extraWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 70,
  },
  saveWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalPrice: {
    marginRight: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 8,
  },
});

export default FavouriteScreen;
