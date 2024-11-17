import {CharacterDetailsScreenProps} from '../../screens/CharacterDetails/CharacterDetails.screen';
import {useGetCharacterData} from '../services/useGetCharacterData';

export const useCharacterDetails = ({route}: CharacterDetailsScreenProps) => {
  const characterId = route.params.characterId;
  const {data, isLoading} = useGetCharacterData(characterId);

  return {data, isLoading};
};
