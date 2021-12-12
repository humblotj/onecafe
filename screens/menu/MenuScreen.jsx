import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { menuList } from '../../utils/utils';
import Container from '../../components/Container';
import Bold from '../../components/Bold';
import MenuItem from './components/MenuItem';

/* 
메뉴 화면

리엑트 네이티브의 아이템 목록을 렌더링하는 방법은 여러 가지가 있습니다.
가장 공통적인 것은 다음과 같습니다.
맵 ES6 연산자를 사용하는 고전적인 방법: menuList.map((menu) => <MenuItem {...}/>) - 리엑트 웹에서 쓰는 것과 같은 방법입니다.
또는 Flatlist 구성 요소를 사용한다면, 가상 목록이고 모든 항목을 한 번에 렌더링하지 않으므로 긴 목록에 적합합니다.
미리 결정된 작은 목록에 대해 map 사용하고, 긴 동적 목록에 Flatlist 사용합니다.
여기서 Flatlist를 사용하는 이유는 나중에 더 많은 항목이 추가될 수 있기 때문입니다. 
하지만 지금은 4개 밖에 없어서 성능 차이가 없어요.
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
        /* 리스트 컨테이너의 스타일 */
        contentContainerStyle={styles.listContentContainerStyle}
        /* 리스트 데이터 */
        data={Object.entries(menuList)}
        /* 
        아이템의 키를 반환하는 함수,
        카는 당신이 아이템을 확인하는 방법을 리엑트에게  알려주기 위해 사용하는 것입니다.
        덕분에 이전 키와 다음 키를 비교하여 아이템이 두 렌더 사이에 사라지는지 여부를 빠르게 알 수 있습니다.
        */
        keyExtractor={keyExtractor}
        /*
        데이터의 각 아이템에 대해 렌더링할 구성요소
        */
        renderItem={renderItem}
        /*
        리스트의 컬럼(세로줄)의 갯수
        */
        numColumns={2}
        /*
        수평 스크롤 하지 않음
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
