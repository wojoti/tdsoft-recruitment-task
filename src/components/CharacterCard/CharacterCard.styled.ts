import {StyleSheet} from 'react-native';

export const conditionalLikeStyles = (liked: boolean) =>
  StyleSheet.create({
    color: {
      backgroundColor: liked ? '#162C1B' : '#224229',
    },
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
  mainValue: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 36,
    lineHeight: 44,
    color: '#162C1B',
    letterSpacing: -0.5,
  },
  textWrapper: {
    alignItems: 'flex-start',
    padding: 8,
    gap: 4,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F4F6F5',
    backgroundColor: '#F4F6F5',
    flex: 1,
  },
  mainTextWrapper: {padding: 8, gap: 4},
  imageContainer: {
    position: 'relative',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#224229',
    borderRadius: 24,
    overflow: 'hidden',
    width: '100%',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  shrink: {flexShrink: 1, gap: 16},
  relative: {
    position: 'relative',
    marginVertical: 16,
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
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#224229',
    padding: 24,
    gap: 16,
  },
  likeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
    paddingLeft: 12,
    paddingRight: 16,
    paddingVertical: 8,
    width: '100%',
    gap: 4,
  },
  likeText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'DMMonoRegular',
  },
  gap: {gap: 16},
  horizontalGap: {
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
