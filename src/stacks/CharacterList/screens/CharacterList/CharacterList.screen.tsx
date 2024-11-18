import {View} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useCharacterList} from '../../hooks/ui/useCharacterList';
import CharacterFlatList from '../../../../components/CharacterFlatList/CharacterFlatList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CharacterListStackParamList} from '../../CharacterList.routes';

export type CharacterListScreenProps = NativeStackScreenProps<
  CharacterListStackParamList,
  'CharacterListScreen'
>;

const CharacterListScreen = ({route, navigation}: CharacterListScreenProps) => {
  const {
    charactersData,
    getMoreCharacters,
    isLoading,
    showCharacterDetails,
    likeCharacter,
  } = useCharacterList({route, navigation});
  return (
    <View style={styles.container}>
      <CharacterFlatList
        data={charactersData}
        refresh={getMoreCharacters}
        isLoading={isLoading}
        showCharacterDetails={showCharacterDetails}
        likeCharacter={likeCharacter}
      />
    </View>
  );
};

export default CharacterListScreen;
