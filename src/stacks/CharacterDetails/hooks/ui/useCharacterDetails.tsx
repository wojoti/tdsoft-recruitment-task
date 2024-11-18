import {useAtom} from 'jotai';
import {CharacterDetailsScreenProps} from '../../screens/CharacterDetails/CharacterDetails.screen';
import {useGetCharacterData} from '../services/useGetCharacterData';
import {likeAtom} from '../../../../store/store';
import {useMemo} from 'react';
import {Character} from '../../../../types';

export const useCharacterDetails = ({
  route,
  navigation,
}: CharacterDetailsScreenProps) => {
  const characterId = route.params.characterId;
  const {data, isLoading} = useGetCharacterData(characterId);
  const [likedIds, setlikedIds] = useAtom<{[key: string]: boolean}>(likeAtom);

  const characterData: Character = useMemo(() => {
    if (!data) {
      return {} as unknown as Character;
    }
    return {...data, like: likedIds[String(data.id)]};
  }, [data, likedIds]);

  const goBack = () => {
    navigation.goBack();
  };

  const likeCharacter = (id: number) => {
    setlikedIds(prev => {
      const prevData = {...prev};
      delete prevData[id];
      return prev[id] ? prevData : {...prev, [id]: true};
    });
  };
  return {characterData, isLoading, goBack, likeCharacter};
};
