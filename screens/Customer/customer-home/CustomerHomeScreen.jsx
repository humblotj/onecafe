import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Container from '../../../components/Container';
import AlertModal from '../../../components/AlertModal';
import Bold from '../../../components/Bold';
import Button from '../../../components/Button';
import FavouriteContext from '../../../context/FavouriteContext';
import { getTotalPrice } from '../../../utils/utils';
import AppText from '../../../components/AppText';

const CustomerHomeScreen = () => {
  const { favourite } = useContext(FavouriteContext);
  const navigation = useNavigation();

  const [alertModalVisible, setAlertModalVisible] = useState(false);

  const onOrder = () => setAlertModalVisible(true);

  if (!favourite) {
    return (
      <Container>
        <View style={styles.container}>
          <AppText>You don&apos;t have favourite yet</AppText>
        </View>
      </Container>
    );
  }

  const { name, size, milk, toppings } = favourite;

  const onEdit = () =>
    navigation.push('Customer', {
      screen: 'Menu',
      params: { screen: 'MenuShow', params: favourite },
    });

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
