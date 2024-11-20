import {View} from 'react-native';
import React from 'react';
import Logo from '../Logo/Logo';
import {styles} from './CustomFooter.styled';

const CustomFooter = () => {
  return (
    <View style={styles.logoWrapper}>
      <Logo />
    </View>
  );
};

export default CustomFooter;
