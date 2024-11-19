import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F6F5',
    gap: 8,
    paddingTop: 16,
  },
  topWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  likedText: {
    color: '#162C1B',
    fontFamily: 'Inter',
    fontWeight: 800,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: -1,
  },
});
