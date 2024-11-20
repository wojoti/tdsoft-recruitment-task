import {View} from 'react-native';
import React from 'react';
import Logo from '../Logo/Logo';
import {styles} from './CustomHeader.styled';

const CustomHeader = () => {
  return (
    <View style={styles.wrapper}>
      <Logo width={105} height={32} />
    </View>
  );
};

export default CustomHeader;
