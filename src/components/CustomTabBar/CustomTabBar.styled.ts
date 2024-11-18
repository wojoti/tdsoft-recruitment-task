import {StyleSheet} from 'react-native';

export const conditionalInsetStyles = (insetBotton: number) =>
  StyleSheet.create({
    wrapper: {paddingBottom: insetBotton, backgroundColor: '#162C1B'},
  });

export const conditionalHideStyles = (hideTabs: boolean) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      height: 70,
      display: hideTabs ? 'none' : 'flex',
    },
  });

export const styles = StyleSheet.create({
  logoWrapper: {
    backgroundColor: '#162C1B',
    alignItems: 'center',
    paddingVertical: 24,
  },
});
