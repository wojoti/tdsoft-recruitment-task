import {StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import CustomHeader from '../CustomHeader/CustomHeader';
import CustomFooter from '../CustomFooter/CustomFooter';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ISafeAreaComponent {
  children?: ReactNode;
}

const SafeAreaComponent = ({children}: ISafeAreaComponent) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader />
      {children}
      <CustomFooter />
    </SafeAreaView>
  );
};

export default SafeAreaComponent;

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#162C1B', width: '100%'},
});
