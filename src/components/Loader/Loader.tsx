import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {styles} from './Loader.styled';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loader;
