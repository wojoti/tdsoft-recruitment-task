import {useGetLikedCharacters} from '../services/useGetLikedCharacters';
import {FavoriteCharactersScreenProps} from '../../screens/FavoriteCharacters/FavoriteCharacters.screen';
import {likeAtom} from '../../../../store/store';
import {useAtom} from 'jotai';
import {useMemo} from 'react';
import {Character} from '../../../../types';

export const useFavoriteCharacters = ({
  navigation,
}: FavoriteCharactersScreenProps) => {
  const [likedIds, setlikedIds] = useAtom<{[key: string]: boolean}>(likeAtom);
  const arrayOfIds = Object.keys(likedIds);
  const {data, isLoading} = useGetLikedCharacters(arrayOfIds);

  const charactersData: Character[] = useMemo(() => {
    if (!data || !Object.keys(likedIds).length) {
      return [];
    }
    if (Array.isArray(data)) {
      return data?.map(el => ({...el, like: likedIds[String(el.id)]}));
    }
    return [{...data, like: true}];
  }, [data, likedIds]);

  const showCharacterDetails = (id: number) => {
    navigation.navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: {characterId: id},
    });
  };

  const likeCharacter = (id: number) => {
    setlikedIds(prev => {
      const prevData = {...prev};
      delete prevData[id];
      return prev[id] ? prevData : {...prev, [id]: true};
    });
  };
  return {
    charactersData,
    isLoading,
    showCharacterDetails,
    likeCharacter,
  };
};
