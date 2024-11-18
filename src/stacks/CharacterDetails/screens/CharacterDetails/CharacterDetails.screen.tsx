import {Button, Text, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCharacterDetails} from '../../hooks/ui/useCharacterDetails';
import Loader from '../../../../components/Loader/Loader';

export type CharacterDetailsScreenProps = NativeStackScreenProps<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = ({
  route,
  navigation,
}: CharacterDetailsScreenProps) => {
  const {data, isLoading, goBack} = useCharacterDetails({route, navigation});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text>{'ID:' + data?.id}</Text>
      <Text>{data?.name}</Text>
      <Text>{data?.url}</Text>
      <Button onPress={goBack} title="Go back" />
    </View>
  );
};

export default CharacterDetailsScreen;
