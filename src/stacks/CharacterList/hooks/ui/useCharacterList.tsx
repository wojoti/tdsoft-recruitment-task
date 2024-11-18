import {useMemo, useState} from 'react';
import {useGetCharacters} from '../services/useGetCharacters';
import {CharacterListScreenProps} from '../../screens/CharacterList/CharacterList.screen';

export const useCharacterList = ({navigation}: CharacterListScreenProps) => {
  const {data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading} =
    useGetCharacters('');

  const [likedIds, setlikedIds] = useState<{[key: string]: boolean}>({});

  const charactersData = useMemo(() => {
    if (!data?.pages) {
      return [];
    }
    return data.pages
      .flatMap(page => page.results)
      .map(el => ({...el, like: likedIds[String(el.id)]}));
  }, [data?.pages, likedIds]);

  const getMoreCharacters = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

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
    getMoreCharacters,
    isLoading,
    showCharacterDetails,
    likeCharacter,
  };
};
