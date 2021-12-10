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

const MenuShowScreen = ({ route }) => {
  const { name } = route.params || {};
  const { sizes, picture } = menuList[name] || {};

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
