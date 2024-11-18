import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {Character} from '../../types';
import {conditionalStyles, styles} from './CharacterFlatListItem.styled';
import Icon, {IconType} from '../Icon/Icon';

interface ICharacterFlatListItem {
  character: Character;
  onItemPress: (id: number) => void;
  onLikePress: (id: number) => void;
}

const CharacterFlatListItem = ({
  character,
  onItemPress,
  onLikePress,
}: ICharacterFlatListItem) => {
  const onPressItem = () => onItemPress(character.id);
  const onPressLike = () => onLikePress(character.id);
  return (
    <Pressable style={styles.relative} onPress={onPressItem}>
      <View style={styles.shadow} />

      <View style={styles.content}>
        <View style={styles.shrink}>
          <View style={styles.textWrapper}>
            <Text style={styles.label}>{'Name'}</Text>
            <Text style={styles.value}>{character.name}</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.label}>{'Status'}</Text>
            <Text style={styles.value}>{character.status}</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.label}>{'Species'}</Text>
            <Text style={styles.value}>{character.species}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri: character.image}} style={styles.image} />
          <Pressable
            onPress={onPressLike}
            style={[
              styles.likeButton,
              conditionalStyles(!!character.like).background,
            ]}>
            <Icon
              width={16}
              height={16}
              icon={character.like ? IconType.starFilled : IconType.star}
              color={character.like ? '#F89F34' : '#224229'}
            />
            <Text style={styles.likeText}>Like</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default CharacterFlatListItem;
