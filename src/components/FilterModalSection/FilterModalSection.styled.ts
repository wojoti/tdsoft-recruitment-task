import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {justifyContent: 'flex-start', gap: 8},
  label: {
    fontFamily: 'DMMonoMedium',
    fontSize: 14,
    lineHeight: 18,
    textTransform: 'uppercase',
    color: '#59695C',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 19,
    color: ' #162C1B',
    letterSpacing: -0.5,
  },
  row: {flexDirection: 'row', gap: 8, alignItems: 'center'},
});
