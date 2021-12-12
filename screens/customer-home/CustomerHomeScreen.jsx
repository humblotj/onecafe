import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Container from '../../components/Container';
import AlertModal from '../../components/AlertModal';
import Bold from '../../components/Bold';
import Button from '../../components/Button';
import FavouriteContext from '../../context/FavouriteContext';
import { getTotalPrice } from '../../utils/utils';
import AppText from '../../components/AppText';

/* Home 화면 */

const CustomerHomeScreen = ({ navigation }) => {
  /* useContext 훅을 사용하여 부모 공급자의 Favourite을 얻습니다. */
  const { favourite } = useContext(FavouriteContext);

  const [alertModalVisible, setAlertModalVisible] = useState(false);

  const onOrder = () => setAlertModalVisible(true);

  /* favourite이 없으면 구성 요소가 'You don't have favourite yet'를 반환합니다. */
  
  if (!favourite) {
    return (
      <Container>
        <View style={styles.container}>
          <AppText>You don&apos;t have favourite yet</AppText>
        </View>
      </Container>
    );
  }

  /* 
  짧은 팁 :  favourite.name, favorite.size 대신 ES6 객체 소멸을 사용합니다.
            객체 소멸은 객체가 null이 아닌 경우에만 작동하니 조심하세요.
            여기서 Favourite 값이 null이면 이 줄이 실행되지 않습니다... 윗줄에서 확인하세요.
  */
  const { name, size, milk, toppings } = favourite;

  /* 중첩된 네비게이터 탐색 방법은
      웹에서 menu/menu-show에 가는 것과 같습니다.
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
