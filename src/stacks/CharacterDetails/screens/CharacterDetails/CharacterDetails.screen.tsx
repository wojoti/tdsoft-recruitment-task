import {Pressable, ScrollView, Text} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCharacterDetails} from '../../hooks/ui/useCharacterDetails';
import Loader from '../../../../components/Loader/Loader';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';

export type CharacterDetailsScreenProps = NativeStackScreenProps<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = ({
  route,
  navigation,
}: CharacterDetailsScreenProps) => {
  const {characterData, isLoading, goBack, likeCharacter} = useCharacterDetails(
    {
      route,
      navigation,
    },
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable hitSlop={10} style={styles.buttonAlign} onPress={goBack}>
        <Text style={styles.text}>{'<- Go back to Characters List'}</Text>
      </Pressable>
      <CharacterCard character={characterData} likeCharacter={likeCharacter} />
    </ScrollView>
  );
};

export default CharacterDetailsScreen;
