import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Container = ({ style, contentContainerStyle, children, noScroll }) => {
  const ContentContainer = noScroll ? View : ScrollView;

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
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={styles.image}
      />
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
