import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

/*
Component for a fixed background
*/

const Container = ({ style, contentContainerStyle, children, noScroll }) => {
  /* 
  If you want your screen scrollable or not
  Be careful nested scroll component
  */
  const ContentContainer = noScroll ? View : ScrollView;

  /* 
  If you want your screen is scrollable, your component is a ScrollView you need to pass contentContainerStyle to modify the style
  If you want your screen is not scrollable, your component is View you need to pass style to modify the style
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
      {/* Fixed background */}
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={styles.image}
      />
      {/* Content of your screen scrollable or not */}
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
