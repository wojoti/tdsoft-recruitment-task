import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './FavoriteCharacters.styled';
import CharacterFlatList from '../../../../components/CharacterFlatList/CharacterFlatList';
import {useFavoriteCharacters} from './hooks/ui/useFavoriteCharacters';
import {TabScreenProps} from '../../TabNavigation.routes';

export type FavoriteCharactersScreenProps = TabScreenProps;

const FavoriteCharactersScreen = ({
  route,
  navigation,
}: FavoriteCharactersScreenProps) => {
  const {charactersData, isLoading, showCharacterDetails, likeCharacter} =
    useFavoriteCharacters({route, navigation});
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Text style={styles.likedText}>Liked characters</Text>
      </View>
      <CharacterFlatList
        data={charactersData}
        isLoading={isLoading}
        showCharacterDetails={showCharacterDetails}
        likeCharacter={likeCharacter}
      />
    </View>
  );
};

export default FavoriteCharactersScreen;
