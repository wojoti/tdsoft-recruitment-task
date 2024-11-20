import {StyleSheet} from 'react-native';

export const conditionalStyles = (liked: boolean) =>
  StyleSheet.create({
    background: {backgroundColor: liked ? '#DAE4DC' : 'white'},
  });

export const styles = StyleSheet.create({
  label: {
    fontFamily: 'DMMonoMedium',
    fontSize: 12,
    lineHeight: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#59695C',
  },
  value: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 19,
    color: ' #162C1B',
    letterSpacing: -0.5,
  },
  textWrapper: {padding: 8, gap: 4},
  imageContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: '#224229',
    borderRadius: 24,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  shrink: {flexShrink: 1},
  relative: {
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: -4,
    bottom: -4,
    backgroundColor: '#224229',
    borderRadius: 24,
  },
  content: {
    backgroundColor: '#F4F6F5',
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#224229',
    padding: 12,
    gap: 24,
  },
  likeButton: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    paddingRight: 16,
    paddingLeft: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#224229',
    flexDirection: 'row',
    gap: 4,
  },
  likeText: {
    color: '#224229',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'DMMonoRegular',
  },
});
