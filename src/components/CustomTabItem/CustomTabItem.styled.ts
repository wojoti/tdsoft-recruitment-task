import {StyleSheet} from 'react-native';

export const conditionalFocusedStyles = (isFocused: boolean) =>
  StyleSheet.create({
    text: {
      color: isFocused ? '#ffffff' : '#DAE4DC',
      fontSize: 14,
      textTransform: 'uppercase',
      fontFamily: 'DMMonoRegular',
    },
    bottomLine: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 1,
      backgroundColor: isFocused ? '#ffffff' : '#224229',
    },
  });

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    gap: 4,
  },
});
