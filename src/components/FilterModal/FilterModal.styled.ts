import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  relative: {position: 'relative'},
  modalShadow: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: -4,
    bottom: -4,
    backgroundColor: '#224229',
    borderRadius: 24,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#224229',
    padding: 16,
    gap: 24,
  },
  buttonRow: {flexDirection: 'row', justifyContent: 'space-between'},
  resetButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#224229',
    backgroundColor: 'white',
  },
  resetText: {
    color: '#224229',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'DMMonoRegular',
  },
  applyButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#224229',
  },
  applyText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'DMMonoRegular',
  },
});
