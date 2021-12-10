import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import AppText from '../../../../components/AppText';
import Bold from '../../../../components/Bold';
import SquareButton from '../../../../components/SquareButton';
import MilkChip from './MilkChip';

export const toppingsList = {
  Sugar: { price: 0.1 },
  Cocoa: { price: 0.2 },
  Cinnamon: { price: 0.2 },
  Ice: { price: 0.1 },
};

const milksList = ['Farm', 'Cocunut', 'Almond', 'Gluten Free'];

const ExtraTitle = ({ children }) => (
  <Bold style={styles.extraTitle}>{children}</Bold>
);

const MinusPlusButton = ({ children, active, onPress }) => (
  <SquareButton
    size="small"
    style={[styles.squareButton, active && styles.squareButtonActive]}
    textStyle={[
      styles.squareButtonText,
      active && styles.squareButtonTextActive,
    ]}
    onPress={onPress}
  >
    {children}
  </SquareButton>
);

MinusPlusButton.propTypes = {
  active: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

const SelectExtras = ({
  milkSelected,
  onMilkChange,
  toppings,
  onToppingIncrease,
  onToppingDecrease,
}) => {
  const getTopping = ({ name, price }, quantitySelected) => (
    <View key={name} style={[styles.toppingContainer, styles.marginBottom]}>
      <View style={styles.toppingHeading}>
        <AppText style={styles.toppingName}>{name}</AppText>
        <AppText style={styles.toppingPrice}>${price.toFixed(2)}</AppText>
      </View>
      <MinusPlusButton
        active={quantitySelected}
        onPress={() => onToppingDecrease(name)}
      >
        -
      </MinusPlusButton>
      <AppText style={styles.quantitySelected}>{quantitySelected}</AppText>
      <MinusPlusButton
        active={quantitySelected}
        onPress={() => onToppingIncrease(name)}
      >
        +
      </MinusPlusButton>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <ExtraTitle>Topping</ExtraTitle>
        {Object.entries(toppingsList).map(([name, { price }]) =>
          getTopping({ name, price }, toppings[name]),
        )}
      </View>
      <View>
        <ExtraTitle>Milk</ExtraTitle>
        {milksList.map((milk) => (
          <MilkChip
            key={milk}
            style={styles.marginBottom}
            active={milkSelected === milk}
            onPress={() => onMilkChange(milk)}
          >
            {milk}
          </MilkChip>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#2c1d17',
    backgroundColor: '#2c2300',
    paddingHorizontal: 20,
    marginTop: 8,
    paddingBottom: 8,
  },
  extraTitle: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 8,
    fontSize: 16,
  },
  toppingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  marginBottom: {
    marginBottom: 8,
  },
  toppingHeading: {
    marginRight: 8,
    width: 80,
  },
  toppingName: {
    color: '#a5998c',
  },
  toppingPrice: {
    color: '#a5998c',
    fontSize: 10,
  },
  squareButton: {
    backgroundColor: '#584438',
  },
  squareButtonText: {
    color: '#a5998c',
  },
  squareButtonTextActive: {
    color: '#fff',
  },
  squareButtonActive: {
    backgroundColor: '#efa354',
  },
  quantitySelected: {
    color: '#a5998c',
    paddingHorizontal: 12,
  },
  milkPrice: {
    fontSize: 10,
    color: '#a5998c',
    marginLeft: 4,
  },
});

SelectExtras.propTypes = {
  milkSelected: PropTypes.string,
  onMilkChange: PropTypes.func.isRequired,
  toppings: PropTypes.object.isRequired,
  onToppingIncrease: PropTypes.func.isRequired,
  onToppingDecrease: PropTypes.func.isRequired,
};

SelectExtras.defaultProps = {
  milkSelected: null,
};

export default SelectExtras;
