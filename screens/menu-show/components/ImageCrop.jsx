import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

/* 
Crop the menu picture component
*/

const ImageCrop = ({ style, source }) => {
  return (
    <View style={[styles.imageContainer, style]}>
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    height: 200,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    aspectRatio: 1,
  },
});

ImageCrop.propTypes = {
  source: PropTypes.number.isRequired,
};

export default ImageCrop;
