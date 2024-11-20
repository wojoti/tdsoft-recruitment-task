import {useMemo, useState} from 'react';
import {useGetCharacters} from '../services/useGetCharacters';
import {likeAtom} from '../../../../../../store/store';
import {useAtom} from 'jotai';
import {FilterGroup, SelectedFilters} from '../../../../../../types';
import {CharacterListScreenProps} from '../../CharacterList.screen';

export const useCharacterList = ({navigation}: CharacterListScreenProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [appliedFilters, setAppliedFilters] = useState<SelectedFilters>({});
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const {data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading} =
    useGetCharacters(searchValue, appliedFilters);

  const [likedIds, setlikedIds] = useAtom<{[key: string]: boolean}>(likeAtom);

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

  const availableFilters: FilterGroup = {
    status: ['Alive', 'Dead', 'Unknown'],
    species: ['Human', 'Humanoid'],
  };

  const setSelected = (filterName: string, filter: string) => {
    setSelectedFilters(prev => {
      const prevData = {...prev};
      delete prevData[filterName];
      return prev[filterName] ? prevData : {...prev, [filterName]: filter};
    });
  };
  const onResetPress = () => {
    setSelectedFilters({});
    setAppliedFilters({});
  };
  const onApplyPress = () => {
    setAppliedFilters(selectedFilters);
  };
  return {
    charactersData,
    getMoreCharacters,
    isLoading,
    showCharacterDetails,
    likeCharacter,
    searchValue,
    setSearchValue,
    availableFilters,
    setSelected,
    selectedFilters,
    onResetPress,
    onApplyPress,
  };
};
