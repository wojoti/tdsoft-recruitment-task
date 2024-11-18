import React from 'react';
import {View, FlatList} from 'react-native';
import {Character} from '../../types';
import Loader from '../Loader/Loader';
import CharacterFlatListItem from '../CharacterFlatListItem/CharacterFlatListItem';
import {styles} from './CharacterFlatList.styled';

interface ICharacterFlatList {
  data: Character[];
  refresh: () => void;
  isLoading: boolean;
  showCharacterDetails: (id: number) => void;
  likeCharacter: (id: number) => void;
}

const CharacterFlatList = ({
  data,
  refresh,
  isLoading,
  showCharacterDetails,
  likeCharacter,
}: ICharacterFlatList) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        onEndReached={refresh}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => (
          <CharacterFlatListItem
            character={item}
            onItemPress={showCharacterDetails}
            onLikePress={likeCharacter}
          />
        )}
      />
    </View>
  );
};

export default CharacterFlatList;
