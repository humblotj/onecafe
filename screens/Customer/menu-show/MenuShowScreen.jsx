import React from 'react';
import { View, StyleSheet } from 'react-native';

import { menuList } from '../../../utils/utils';
import Bold from '../../../components/Bold';
import Container from '../../../components/Container';
import ImageCrop from './components/ImageCrop';
import SelectExtras from './components/SelectExtras';
import SelectList from './components/SelectList';
import SizeButton from './components/SizeButton';
import useSelectExtras from './hooks/useSelectExtras';

/*
Menu details screen
*/

const MenuShowScreen = ({ route }) => {
  /* get the name of the product your passed by via the params navigator
  think of menu/latte   -  menu/matcha  for web urls
  */
  const { name } = route.params || {};
  /* get the sizes price and picture of the product by checking the menuList with the name of the product */
  const { sizes, picture } = menuList[name] || {};

  /* To make this component more readable, I define the methods used by this component outside of this component 
  So in this file you can just focus in understanding what view this component render

  Pro tip: Usually you don't want to write long methods inside a component
  Ideally inside your component you just want to see the view of your app (=html/css for web)
  The methods can be written inside a custom hooks you grouped by purpose
  Keep in mind functionnal component -> one function / one purpose
  */
  const {
    sizeSelected,
    milkSelected,
    toppings,
    onSizeSelected,
    onMilkChange,
    onToppingIncrease,
    onToppingDecrease,
    onToppingDelete,
  } = useSelectExtras({
    sizeSelected: route.params?.size,
    milkSelected: route.params?.milk,
    toppings: route.params?.toppings,
  });

  const getSizes = () => (
    <View style={styles.sizesContainer}>
      {Object.entries(sizes).map(([size, { price }]) => (
        <SizeButton
          key={size}
          price={price}
          active={size === sizeSelected}
          onPress={() => onSizeSelected(size)}
          style={styles.sizeButton}
        >
          {size[0]}
        </SizeButton>
      ))}
    </View>
  );

  return (
    <Container>
      <ImageCrop style={styles.imageCrop} source={picture} />
      <Bold style={styles.name}>{name}</Bold>
      {getSizes()}
      <SelectExtras
        onMilkChange={onMilkChange}
        milkSelected={milkSelected}
        toppings={toppings}
        onToppingIncrease={onToppingIncrease}
        onToppingDecrease={onToppingDecrease}
      />
      <SelectList
        milkSelected={milkSelected}
        sizeSelected={sizeSelected}
        toppings={toppings}
        milk={milkSelected}
        size={sizeSelected}
        onToppingDelete={onToppingDelete}
        onMilkChange={onMilkChange}
        name={name}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  imageCrop: {
    marginTop: 20,
  },
  name: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 4,
  },
  sizesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sizeButton: {
    marginHorizontal: 8,
  },
});

export default MenuShowScreen;
