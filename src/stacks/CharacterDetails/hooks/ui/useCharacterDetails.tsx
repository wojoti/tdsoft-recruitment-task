import {CharacterDetailsScreenProps} from '../../screens/CharacterDetails/CharacterDetails.screen';
import {useGetCharacterData} from '../services/useGetCharacterData';

export const useCharacterDetails = ({
  route,
  navigation,
}: CharacterDetailsScreenProps) => {
  const characterId = route.params.characterId;
  const {data, isLoading} = useGetCharacterData(characterId);

  const goBack = () => {
    navigation.goBack();
  };

  return {data, isLoading, goBack};
};
