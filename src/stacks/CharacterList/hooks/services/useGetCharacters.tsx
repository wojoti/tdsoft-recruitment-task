import {useInfiniteQuery} from '@tanstack/react-query';
import {getCharacters} from '../../../../api/services/RAMService';
import {CharacterApiResponse, SelectedFilters} from '../../../../types';

export const useGetCharacters = (
  name: string,
  appliedFilters: SelectedFilters,
) => {
  const {data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading} =
    useInfiniteQuery<CharacterApiResponse>({
      queryKey: ['characters', name, appliedFilters],
      queryFn: ({pageParam}) =>
        getCharacters(name, appliedFilters, pageParam as number),
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage?.info?.next) {
          return undefined;
        }
        return allPages.length + 1;
      },
      getPreviousPageParam: (firstPage, allPages) => {
        if (!firstPage?.info?.prev) {
          return undefined;
        }
        return allPages.length - 1;
      },
      initialPageParam: 1,
    });

  return {data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading};
};
