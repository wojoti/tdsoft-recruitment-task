import {StyleSheet} from 'react-native';

export const conditionalStyles = (selected: boolean) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: selected ? '#162C1B' : 'white',
      borderWidth: 1,
      borderColor: selected ? '#162C1B' : '#DAE4DC',
    },
  });

export const styles = StyleSheet.create({
  wrapper: {
    width: 16,
    height: 16,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
