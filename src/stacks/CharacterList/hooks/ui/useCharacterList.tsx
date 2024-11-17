import {useMemo} from 'react';
import {useGetCharacters} from '../services/useGetCharacters';
import {CharacterListScreenProps} from '../../screens/CharacterList/CharacterList.screen';

export const useCharacterList = ({navigation}: CharacterListScreenProps) => {
  const {data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading} =
    useGetCharacters('');

  const charactersData = useMemo(() => {
    if (!data?.pages) {
      return [];
    }
    return data.pages.flatMap(page => page.results);
  }, [data?.pages]);

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
  return {charactersData, getMoreCharacters, isLoading, showCharacterDetails};
};
