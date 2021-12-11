import React, { Fragment, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Bold from '../../../../components/Bold';
import AppText from '../../../../components/AppText';
import { toppingsList } from './SelectExtras';
import CloseButton from '../../../../components/CloseButton';
import Button from '../../../../components/Button';
import FavouriteContext from '../../../../context/FavouriteContext';
import { useNavigation } from '@react-navigation/core';
import AlertModal from '../../../../components/AlertModal';
import { getTotalPrice, menuList } from '../../../../utils/utils';

const useOnSave = (name, size, milk, toppings) => {
  /* get the setFavourite from the provider of your parent */
  const { setFavourite } = useContext(FavouriteContext);
  const navigation = useNavigation();
  const [alertModalVisible, setAlertModalVisible] = useState(false);

  const onSave = () => {
    setFavourite({ name, size, milk, toppings });
    setAlertModalVisible(true);
  };

  const onRequestClose = () => navigation.push('Favourite');

  return { onSave, alertModalVisible, onRequestClose };
};

const SelectList = ({
  name,
  size,
  milk,
  toppings,
  onToppingDelete,
  onMilkChange,
}) => {
  const { sizes } = menuList[name];

  const { onSave, alertModalVisible, onRequestClose } = useOnSave(
    name,
    size,
    milk,
    toppings,
  );

  const getMilk = () => {
    if (milk) {
      return (
        <View style={styles.extraWrap}>
          <AppText style={[styles.name, styles.small]}>{milk}</AppText>
          <AppText style={[styles.quantity, styles.small]}>1</AppText>
          <AppText style={[styles.price, styles.small]}>$0.20</AppText>
          <CloseButton
            style={styles.closeButton}
            onPress={() => onMilkChange(null)}
          />
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
          <CloseButton
            style={styles.closeButton}
            onPress={() => onToppingDelete(topping)}
          />
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Bold style={styles.title}>Select List</Bold>
          <View style={styles.productSelected}>
            <Bold style={styles.size}>{size}</Bold>
            <Bold style={styles.name}>{name}</Bold>
            <Bold style={styles.quantity}>1</Bold>
            <Bold style={styles.price}>${sizes[size].price}</Bold>
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
            <Button onPress={onSave}>Save</Button>
          </View>
        </View>
      </View>
      <AlertModal
        text="Saved on your favourite"
        visible={alertModalVisible}
        onRequestClose={onRequestClose}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 20,
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
    paddingRight: 20,
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
  closeButton: {
    marginLeft: 8,
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

SelectList.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  milk: PropTypes.string,
  toppings: PropTypes.object.isRequired,
  onToppingDelete: PropTypes.func.isRequired,
  onMilkChange: PropTypes.func.isRequired,
};

SelectList.defaultProps = {
  milk: null,
};

export default SelectList;
