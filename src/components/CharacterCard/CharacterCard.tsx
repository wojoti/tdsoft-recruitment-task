import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {Character} from '../../types';
import Loader from '../Loader/Loader';
import {conditionalLikeStyles, styles} from './CharacterCard.styled';
import Icon, {IconType} from '../Icon/Icon';

interface ICharacterCard {
  character: Character;
  likeCharacter: (id: number) => void;
}

const CharacterCard = ({character, likeCharacter}: ICharacterCard) => {
  if (!character) {
    return <Loader />;
  }
  const onPressLike = () => likeCharacter(character.id);
  return (
    <View style={styles.relative}>
      <View style={styles.shadow} />

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{uri: character.image}} style={styles.image} />
        </View>
        <View style={styles.shrink}>
          <View style={styles.mainTextWrapper}>
            <Text style={styles.label}>{'Name'}</Text>
            <Text style={styles.mainValue}>{character.name}</Text>
          </View>
          <View style={styles.gap}>
            <View style={styles.horizontalGap}>
              <View style={styles.textWrapper}>
                <Text style={styles.label}>{'Status'}</Text>
                <Text style={styles.value}>{character.status}</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.label}>{'Species'}</Text>
                <Text style={styles.value}>{character.species}</Text>
              </View>
            </View>
            <View style={styles.horizontalGap}>
              <View style={styles.textWrapper}>
                <Text style={styles.label}>{'Species'}</Text>
                <Text style={styles.value}>{character.species}</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.label}>{'Gender'}</Text>
                <Text style={styles.value}>{character.gender}</Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          onPress={onPressLike}
          style={[
            styles.likeButton,
            conditionalLikeStyles(!!character.like).color,
          ]}>
          <Icon
            width={16}
            height={16}
            icon={character.like ? IconType.starFilled : IconType.star}
            color={character.like ? '#F89F34' : 'white'}
          />
          <Text style={styles.likeText}>
            {character.like ? 'Remove from liked' : 'Add to liked'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CharacterCard;
