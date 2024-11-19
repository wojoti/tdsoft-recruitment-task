import {StyleSheet} from 'react-native';

export const conditionalCrossStyle = (pressed: boolean) =>
  StyleSheet.create({
    background: {backgroundColor: pressed ? '#DAE4DC' : 'white'},
  });
export const conditionalFilterStyles = (opened: boolean) =>
  StyleSheet.create({
    background: {backgroundColor: opened ? '#162C1B' : '#224229'},
  });

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F6F5',
    gap: 8,
    paddingTop: 16,
  },
  topContainer: {
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  topText: {
    color: '#162C1B',
    fontFamily: 'Inter',
    fontWeight: 800,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: -1,
  },
  textRelative: {position: 'relative', width: '100%'},
  textInput: {
    color: '#162C1B',
    fontFamily: 'Inter',
    fontSize: 16,
    letterSpacing: -0.5,
    backgroundColor: 'white',
    paddingLeft: 36,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#162C1B',
    borderRadius: 100,
    width: '100%',
  },
  iconPosition: {
    position: 'absolute',
    left: 10,
    top: 11,
  },
  crossPosition: {
    position: 'absolute',
    right: 10,
    top: 11,
    borderRadius: 4,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingLeft: 24,
    paddingRight: 16,
    paddingVertical: 8,
    gap: 8,
  },
  filterText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'DMMonoRegular',
  },
  modalContainer: {
    position: 'absolute',
    width: 'auto',
    height: 150,
    top: 175,
    right: 16,
    left: 16,
  },
});
