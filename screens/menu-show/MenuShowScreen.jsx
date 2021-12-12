import React from 'react';
import { View, StyleSheet } from 'react-native';

import { menuList } from '../../utils/utils';
import Bold from '../../components/Bold';
import Container from '../../components/Container';
import ImageCrop from './components/ImageCrop';
import SelectExtras from './components/SelectExtras';
import SelectList from './components/SelectList';
import SizeButton from './components/SizeButton';
import useSelectExtras from './hooks/useSelectExtras';

/*
메뉴 세부 정보 화면
*/

const MenuShowScreen = ({ route }) => {
  /* arams 네비게이터를 통해 통과된 제품의 이름을 가져옵니다.
  menu/latte   -  menu/matcha - 웹 URL에 대한 메뉴/매치를 생각합니다.
  */
  const { name } = route.params || {};
  /* 제품 이름과 함께 메뉴리스트를 확인하여 제품의 크기와 사진을 가져옵니다. */
  const { sizes, picture } = menuList[name] || {};

  /* 
  이 구성 요소의 가독성을 높이기 위해 이 구성 요소 외부에서 이 구성 요소가 사용하는 방법을 정의합니다.
  따라서 이 파일에서는 이 구성요소가 렌더링하는 뷰를 이해하는 데 집중할 수 있습니다.

  짧은 팁: 일반적으로 구성 요소 내부에 긴 메서드를 작성하지 않습니다.
  구성 요소 내에서 앱의 화면(웹의 경우 =html/css)만을 보는 것이 바람직합니다.
  메소드는 목적별로 그룹화한 사용자 지정 훅 안에 작성할 수 있습니다.
  [함수의 구성요소 -> 하나의 기능/하나의 목적] 임을 염두에 두십시오.
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
    /* 경로 매개 변수에서 편집 매개 변수를 가져옵니다.
    매개 변수가 없는 경우 처음에 선택하지 않습니다.
     */
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
