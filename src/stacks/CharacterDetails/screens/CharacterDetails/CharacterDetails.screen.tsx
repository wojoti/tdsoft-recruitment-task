import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCharacterDetails} from '../../hooks/ui/useCharacterDetails';

export type CharacterDetailsScreenProps = NativeStackScreenProps<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = ({
  route,
  navigation,
}: CharacterDetailsScreenProps) => {
  const {data, isLoading} = useCharacterDetails({route, navigation});

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
    <View style={styles.container}>
      <Text>{'ID:' + data?.id}</Text>
      <Text>{data?.name}</Text>
      <Text>{data?.url}</Text>
    </View>
  );
};

export default CharacterDetailsScreen;
