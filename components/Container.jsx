import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

/*
고정된 배경을 위한 구성요소입니다.
*/

const Container = ({ style, contentContainerStyle, children, noScroll }) => {
  /* 
  만약 화면을 스크롤 할 수 있을지 아닐지 여부를 정하고 싶으시다면
  중첩된 스크롤 구성요소를 주의하세요.
  */
  const ContentContainer = noScroll ? View : ScrollView;

  /* 
  화면을 스크롤할 수 있게 하려면 구성 요소가 ScrollView인 경우 ContentContainerStyle을 전달하여 스타일을 수정해야 합니다.
  화면을 스크롤할 수 없는 경우 구성 요소가 View이므로 스타일을 전달한 후 수정해야 합니다.
  */
  const getContentContainerProps = () => {
    if (noScroll) {
      return {
        style: [styles.contentContainerStyle, contentContainerStyle],
      };
    }
    return {
      contentContainerStyle: [
        styles.contentContainerStyle,
        contentContainerStyle,
      ],
    };
  };

  return (
    <View style={[styles.container, style]}>
      {/* 고정된 배경 */}
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={styles.image}
      />
      {/* 화면 콘텐츠 스크롤 가능 여부*/}
      <ContentContainer {...getContentContainerProps()}>
        {children}
      </ContentContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
});

Container.propTypes = {
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  noScroll: PropTypes.bool,
};
Container.defaultProps = {
  contentContainerStyle: {},
  noScroll: false,
};

export default Container;
