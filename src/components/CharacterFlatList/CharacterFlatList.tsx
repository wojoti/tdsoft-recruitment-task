import React from 'react';
import {View, FlatList, Text, ActivityIndicator, Pressable} from 'react-native';
import {Character} from '../../types';

interface ICharacterFlatList {
  data: Character[];
  refresh: () => void;
  isLoading: boolean;
  showCharacterDetails: (id: number) => void;
}

const CharacterFlatList = ({
  data,
  refresh,
  isLoading,
  showCharacterDetails,
}: ICharacterFlatList) => {
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        onEndReached={refresh}
        renderItem={({item}) => {
          return (
            <Pressable onPress={() => showCharacterDetails(item.id)}>
              <Text>{`ID: ${item?.id}`}</Text>
              <Text>{`Name: ${item?.name}`}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default CharacterFlatList;
